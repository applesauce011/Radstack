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
  meta:     { lastStudied: {} },
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
      set({ userId: null, progress: {}, meta: { lastStudied: {} }, isSynced: false })
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
      set({ userId, progress: {}, meta: { lastStudied: {} }, isSynced: false })
    } else {
      // Same user (e.g. TOKEN_REFRESHED reload) — keep existing progress
      // visible while we re-fetch so the UI doesn't flash empty.
      set({ isSynced: false })
    }

    const [progressRes, metaRes] = await Promise.all([
      supabase
        .from('card_progress')
        .select('card_id, state')
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
    for (const { card_id, state } of progressRes.data ?? []) {
      progress[card_id] = state
    }

    set({
      progress,
      meta:     { lastStudied: metaRes.data?.last_studied ?? {} },
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

    // Optimistic update
    set(s => {
      const next = { ...s.progress }
      if (state === CARD_STATE.UNSEEN) delete next[cardId]
      else next[cardId] = state
      return { progress: next }
    })

    const revert = () => set(s => {
      const next = { ...s.progress }
      if (prev === CARD_STATE.UNSEEN) delete next[cardId]
      else next[cardId] = prev
      return { progress: next }
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
  // was studied. Fire-and-forget — progress is never reverted here
  // since it's non-critical metadata.
  recordStudied: (subspecialtyId) => {
    const { userId } = get()
    const now = Date.now()

    set(s => ({
      meta: { ...s.meta, lastStudied: { ...s.meta.lastStudied, [subspecialtyId]: now } },
    }))

    if (!userId) return

    // Snapshot the full lastStudied map after the optimistic update.
    const lastStudied = { ...get().meta.lastStudied }

    supabase
      .from('user_meta')
      .upsert({ user_id: userId, last_studied: lastStudied }, { onConflict: 'user_id' })
      .then(({ error }) => {
        if (error) console.error('[progress] recordStudied error:', error.message)
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
}))
