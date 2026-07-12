import { create } from 'zustand'
import { supabase } from '../lib/supabase'

// ─────────────────────────────────────────────────────────────
// Progress Store
//
// Tables:
//   card_progress  (user_id, card_id, state)  — one row per marked card
//   user_meta      (user_id, last_studied)    — one row per user
//
// Write strategy:
//   • Optimistic update applied synchronously for instant UI feedback.
//   • All DB writes go through a per-user serial queue so rapid card
//     swiping never fires concurrent requests.
//   • Queue resets on every user change (login/logout) to prevent
//     stale writes from a prior session from bleeding through.
//   • UPSERT (INSERT … ON CONFLICT UPDATE) is used for all writes —
//     atomic, no split insert/update logic, works perfectly with RLS.
//   • On write failure the affected card is reverted individually
//     without disturbing any other concurrent optimistic updates.
//
// Load strategy:
//   • DB is always the source of truth — no merging with stale memory.
//   • For a user reload (TOKEN_REFRESHED), existing progress is kept
//     visible while the fetch runs so the UI never flashes empty.
//   • loadForUser(null) clears all state immediately.
// ─────────────────────────────────────────────────────────────

export const CARD_STATE = {
  UNSEEN:  'unseen',
  GOT_IT:  'got_it',
  FLAGGED: 'flagged',
}

// ── Per-user serial write queue ───────────────────────────────
// Resets automatically whenever the active user changes.
let _queue       = Promise.resolve()
let _queueUserId = null

function enqueue(userId, task) {
  if (_queueUserId !== userId) {
    // New or different user — discard any queued writes from the old session.
    _queue       = Promise.resolve()
    _queueUserId = userId
  }
  _queue = _queue
    .then(task)
    .catch(err => console.error('[progress] write threw:', err?.message ?? err))
}

// ─────────────────────────────────────────────────────────────

export const useProgressStore = create((set, get) => ({
  userId:   null,
  progress: {},              // { [cardId]: 'got_it' | 'flagged' }
  // { [cardId]: timestamp (ms) } — last state-change time. Additive, used only
  // by the Stats page mastery-over-time chart; never read by the core study flow.
  updatedAt: {},
  // studyDates: sorted ISO date strings. dailyActivity: { [date]: { total, new } } —
  // total counts every got_it/flagged action that day (repeats included), new counts
  // only actions on cards that were previously unseen.
  meta:     { lastStudied: {}, studyDates: [], dailyActivity: {} },
  isSynced: false,           // true once the initial DB load has completed

  // ── loadForUser ───────────────────────────────────────────────
  // Called from App.jsx on INITIAL_SESSION, SIGNED_IN, and
  // TOKEN_REFRESHED (when isSynced is false after a race condition).
  //
  // Passing null clears all state (used on logout).
  // Passing the same userId that's already loaded does a silent
  // background refresh without clearing the visible progress.
  loadForUser: async (userId) => {
    if (!userId) {
      // Discard any queued writes — the session is gone.
      _queue       = Promise.resolve()
      _queueUserId = null
      set({ userId: null, progress: {}, updatedAt: {}, meta: { lastStudied: {}, studyDates: [], dailyActivity: {} }, isSynced: false })
      return
    }

    // Reset the write queue ONLY when the user changes.
    // For same-user reloads (e.g. TOKEN_REFRESHED background sync),
    // keep the existing queue so any in-flight card-state writes
    // from the current session aren't orphaned and lost.
    if (_queueUserId !== userId) {
      _queue       = Promise.resolve()
      _queueUserId = userId
    }

    const isNewUser = get().userId !== userId
    if (isNewUser) {
      // Different user — clear immediately to avoid showing someone
      // else's data while the fetch runs.
      set({ userId, progress: {}, updatedAt: {}, meta: { lastStudied: {}, studyDates: [], dailyActivity: {} }, isSynced: false })
    } else {
      // Same user (e.g. TOKEN_REFRESHED reload) — keep existing progress
      // visible while we re-fetch so the UI doesn't flash empty.
      set({ isSynced: false })
    }

    const [progressRes, metaRes] = await Promise.all([
      supabase
        .from('card_progress')
        .select('card_id, state, updated_at')
        .eq('user_id', userId),
      supabase
        .from('user_meta')
        .select('last_studied')
        .eq('user_id', userId)
        .maybeSingle(),
    ])

    // Guard: bail if the user changed while we were fetching.
    if (get().userId !== userId) return

    if (progressRes.error) console.error('[progress] load error:', progressRes.error.message)
    if (metaRes.error)     console.error('[progress] meta error:', metaRes.error.message)

    // Only mark as synced when both fetches succeeded.
    // If either failed (e.g. RLS blocked due to a stale token),
    // isSynced stays false so TOKEN_REFRESHED can retry.
    const synced = !progressRes.error && !metaRes.error

    const progress = {}
    const updatedAt = {}
    for (const { card_id, state, updated_at } of progressRes.data ?? []) {
      progress[card_id] = state
      updatedAt[card_id] = updated_at ? new Date(updated_at).getTime() : Date.now()
    }

    // Extract studyDates/dailyActivity from their keys stored inside last_studied JSONB.
    // Strip them out so lastStudied only contains subspecialty timestamps.
    const rawMeta = metaRes.data?.last_studied ?? {}
    const studyDates = Array.isArray(rawMeta._study_dates) ? rawMeta._study_dates : []
    const dailyActivity = (rawMeta._daily_activity && typeof rawMeta._daily_activity === 'object')
      ? rawMeta._daily_activity
      : {}
    const lastStudied = { ...rawMeta }
    delete lastStudied._study_dates
    delete lastStudied._daily_activity

    set({
      progress,
      updatedAt,
      meta:     { lastStudied, studyDates, dailyActivity },
      isSynced: synced,
    })
  },

  // ── setCardState ──────────────────────────────────────────────
  // Updates a single card state. Applies optimistically then queues
  // the DB write. Reverts only this card on failure.
  setCardState: (cardId, state) => {
    const { userId } = get()
    if (!userId) {
      console.warn('[progress] no active user — write skipped')
      return
    }

    const prev = get().progress[cardId] ?? CARD_STATE.UNSEEN
    const prevAt = get().updatedAt[cardId]

    // Optimistic update
    set(s => {
      const next = { ...s.progress }
      const nextAt = { ...s.updatedAt }
      if (state === CARD_STATE.UNSEEN) { delete next[cardId]; delete nextAt[cardId] }
      else { next[cardId] = state; nextAt[cardId] = Date.now() }
      return { progress: next, updatedAt: nextAt }
    })

    // Daily activity: any got_it/flagged action counts as "done today", even a
    // repeat re-flag of a card that was already flagged/mastered. Only cards
    // that were previously unseen count toward "new" for the day.
    if (state !== CARD_STATE.UNSEEN) {
      const today = new Date().toISOString().slice(0, 10)
      const isNew = prev === CARD_STATE.UNSEEN
      set(s => {
        const day = s.meta.dailyActivity[today] ?? { total: 0, new: 0 }
        return {
          meta: {
            ...s.meta,
            dailyActivity: {
              ...s.meta.dailyActivity,
              [today]: { total: day.total + 1, new: day.new + (isNew ? 1 : 0) },
            },
          },
        }
      })
      if (userId) get().persistMeta(userId)
    }

    const revert = () => set(s => {
      const next = { ...s.progress }
      const nextAt = { ...s.updatedAt }
      if (prev === CARD_STATE.UNSEEN) { delete next[cardId]; delete nextAt[cardId] }
      else { next[cardId] = prev; if (prevAt) nextAt[cardId] = prevAt; else delete nextAt[cardId] }
      return { progress: next, updatedAt: nextAt }
    })

    enqueue(userId, async () => {
      // If the user changed while this write was queued, discard it.
      if (get().userId !== userId) return

      if (state === CARD_STATE.UNSEEN) {
        const { error } = await supabase
          .from('card_progress')
          .delete()
          .eq('user_id', userId)
          .eq('card_id', cardId)
        if (error) { console.error('[progress] delete error:', error.message); revert() }
        return
      }

      // UPSERT — atomically inserts or updates the row.
      // The onConflict target matches the composite PRIMARY KEY (user_id, card_id).
      const { error } = await supabase
        .from('card_progress')
        .upsert(
          { user_id: userId, card_id: cardId, state },
          { onConflict: 'user_id,card_id' }
        )
      if (error) { console.error('[progress] upsert error:', error.message); revert() }
    })
  },

  // ── recordStudied ─────────────────────────────────────────────
  // Records the current timestamp as the last time this subspecialty
  // was studied, and adds today to the studyDates streak array.
  // Fire-and-forget — progress is never reverted here.
  recordStudied: (subspecialtyId) => {
    const { userId } = get()
    const now = Date.now()
    const today = new Date().toISOString().slice(0, 10)

    set(s => {
      const prevDates = s.meta.studyDates ?? []
      const studyDates = prevDates.includes(today)
        ? prevDates
        : [...prevDates, today].sort().slice(-90)
      return {
        meta: {
          ...s.meta,
          lastStudied: { ...s.meta.lastStudied, [subspecialtyId]: now },
          studyDates,
        },
      }
    })

    if (!userId) return
    get().persistMeta(userId)
  },

  // ── persistMeta ───────────────────────────────────────────────
  // Persists lastStudied + studyDates + dailyActivity together under the
  // existing last_studied JSONB column. Routed through the same per-user
  // serial queue as card writes so rapid card actions (each of which bumps
  // dailyActivity) never race each other and clobber the row out of order.
  persistMeta: (userId) => {
    enqueue(userId, async () => {
      if (get().userId !== userId) return
      const { lastStudied, studyDates, dailyActivity } = get().meta
      const { error } = await supabase
        .from('user_meta')
        .upsert(
          { user_id: userId, last_studied: { ...lastStudied, _study_dates: studyDates, _daily_activity: dailyActivity } },
          { onConflict: 'user_id' }
        )
      if (error) console.error('[progress] persistMeta error:', error.message)
    })
  },

  // ── resetDeck ─────────────────────────────────────────────────
  resetDeck: async (cardIds) => {
    const { userId } = get()

    set(s => {
      const next = { ...s.progress }
      cardIds.forEach(id => delete next[id])
      return { progress: next }
    })

    if (!userId) return

    const { error } = await supabase
      .from('card_progress')
      .delete()
      .eq('user_id', userId)
      .in('card_id', cardIds)
    if (error) console.error('[progress] resetDeck error:', error.message)
  },

  // ── Synchronous getters ───────────────────────────────────────
  getCardState: (cardId) => get().progress[cardId] ?? CARD_STATE.UNSEEN,

  getStudyDates: () => get().meta.studyDates ?? [],

  getStreak: () => {
    const dates = get().meta.studyDates ?? []
    if (dates.length === 0) return 0
    const dateSet = new Set(dates)
    let streak = 0
    const d = new Date()
    // Walk backwards from today; stop at first missing day
    while (true) {
      const key = d.toISOString().slice(0, 10)
      if (dateSet.has(key)) {
        streak++
        d.setDate(d.getDate() - 1)
      } else {
        break
      }
    }
    return streak
  },

  getStatsForCards: (cards) => {
    const { progress } = get()
    let unseen = 0, gotIt = 0, flagged = 0
    for (const { id } of cards) {
      const s = progress[id] ?? CARD_STATE.UNSEEN
      if      (s === CARD_STATE.GOT_IT)  gotIt++
      else if (s === CARD_STATE.FLAGGED) flagged++
      else                               unseen++
    }
    return { unseen, gotIt, flagged, total: cards.length }
  },

  getLastStudiedTimestamp: (subspecialtyId) => get().meta.lastStudied[subspecialtyId] ?? 0,

  getTodayActivity: () => {
    const today = new Date().toISOString().slice(0, 10)
    return get().meta.dailyActivity[today] ?? { total: 0, new: 0 }
  },
}))
