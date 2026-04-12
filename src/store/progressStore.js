import { create } from 'zustand'
import { supabase } from '../lib/supabase'

// ============================================================
// Progress Store — backed by Supabase Postgres
//
// Tables (see supabase/schema.sql):
//
//   card_progress
//     user_id   uuid  references auth.users  \
//     card_id   text                          } composite PK
//     state     text  ('got_it' | 'flagged')  -- absent row = unseen
//
//   user_meta
//     user_id       uuid  PRIMARY KEY
//     last_studied  jsonb  { [subspecialtyId]: timestamp_ms }
//
// Design notes:
//   - All writes use optimistic local update first for instant UI.
//   - On write failure, only the affected card is reverted — not the
//     entire progress object — so concurrent changes are never lost.
//   - resolveUserId() falls back to the live Supabase session if the
//     store's userId hasn't been hydrated yet, so writes always work
//     regardless of auth initialization timing.
//   - loadForUser() merges DB rows with any optimistic updates that
//     arrived during the async fetch, then guards against stale loads
//     by checking the userId hasn't changed mid-flight.
// ============================================================

export const CARD_STATE = {
  UNSEEN:  'unseen',
  GOT_IT:  'got_it',
  FLAGGED: 'flagged',
}

export const useProgressStore = create((set, get) => {

  // ── Private helper ───────────────────────────────────────────
  // Returns the active user ID from the store, or falls back to
  // the live Supabase session. Never throws.
  const resolveUserId = async () => {
    const { userId } = get()
    if (userId) return userId

    const { data: { session } } = await supabase.auth.getSession()
    const id = session?.user?.id ?? null
    if (id) set({ userId: id }) // hydrate for subsequent calls
    return id
  }

  return {
    userId:   null,
    progress: {},              // { [cardId]: 'got_it' | 'flagged' }
    meta:     { lastStudied: {} },
    isSynced: false,           // true once the initial DB load has completed

    // ── Load ──────────────────────────────────────────────────
    // Called from App.jsx on every auth event. Idempotent: if already
    // synced for this userId, returns immediately (prevents the double-
    // call race between getSession() and onAuthStateChange both firing).
    loadForUser: async (userId) => {
      if (!userId) {
        set({ userId: null, progress: {}, meta: { lastStudied: {} }, isSynced: true })
        return
      }

      // Skip if we already have fresh data for this user
      const current = get()
      if (current.isSynced && current.userId === userId) return

      set({ userId, isSynced: false })

      const [progressResult, metaResult] = await Promise.all([
        supabase
          .from('card_progress')
          .select('card_id, state')
          .eq('user_id', userId)
          .limit(10000),
        supabase
          .from('user_meta')
          .select('last_studied')
          .eq('user_id', userId)
          .maybeSingle(),
      ])

      if (progressResult.error) console.error('[progress] load error:', progressResult.error)
      if (metaResult.error)     console.error('[progress] meta load error:', metaResult.error)

      // Build the persisted progress map from DB rows
      const dbProgress = {}
      if (progressResult.data) {
        progressResult.data.forEach(row => { dbProgress[row.card_id] = row.state })
      }

      // Guard: if the user changed while we were fetching, discard this result
      if (get().userId !== userId) return

      // Merge: DB is the base; any optimistic updates that happened during the
      // fetch sit in get().progress and take precedence (they're already in-flight
      // to Supabase or have already succeeded)
      set({
        progress: { ...dbProgress, ...get().progress },
        meta:     { lastStudied: metaResult.data?.last_studied || {} },
        isSynced: true,
      })
    },

    // ── Card state ────────────────────────────────────────────
    setCardState: async (cardId, state) => {
      console.log('[progress] setCardState', cardId, state)

      // Capture the card's current state so we can do a targeted revert on failure,
      // without touching any other concurrent optimistic updates.
      const originalState = get().progress[cardId] ?? CARD_STATE.UNSEEN

      // Optimistic update
      set(s => {
        const next = { ...s.progress }
        if (state === CARD_STATE.UNSEEN) delete next[cardId]
        else next[cardId] = state
        return { progress: next }
      })

      const userId = await resolveUserId()
      console.log('[progress] resolved userId:', userId)
      if (!userId) {
        console.warn('[progress] setCardState: no active session — change is local only')
        return
      }

      // Revert only this card back to its original state on failure
      const revert = () => {
        set(s => {
          const next = { ...s.progress }
          if (originalState === CARD_STATE.UNSEEN) delete next[cardId]
          else next[cardId] = originalState
          return { progress: next }
        })
      }

      if (state === CARD_STATE.UNSEEN) {
        const { error } = await supabase
          .from('card_progress')
          .delete()
          .eq('user_id', userId)
          .eq('card_id', cardId)

        if (error) { console.error('[progress] delete failed:', error); revert() }

      } else {
        // INSERT first; fall back to UPDATE on duplicate-key conflict.
        // .select('card_id') forces PostgREST to return the created row so we
        // can detect silent RLS blocks (which return empty data with no error).
        const { data: insertData, error: insertError } = await supabase
          .from('card_progress')
          .insert({ user_id: userId, card_id: cardId, state })
          .select('card_id')

        if (insertError) {
          // '23505' = unique_violation (row already exists — update instead)
          if (insertError.code === '23505') {
            const { error: updateError } = await supabase
              .from('card_progress')
              .update({ state })
              .eq('user_id', userId)
              .eq('card_id', cardId)

            if (updateError) { console.error('[progress] update failed:', updateError); revert() }
          } else {
            console.error('[progress] insert failed:', insertError)
            revert()
          }
        } else if (!insertData || insertData.length === 0) {
          // Insert returned success but wrote nothing — RLS blocked it silently
          console.error('[progress] insert blocked by RLS (no error, no row). userId:', userId, 'cardId:', cardId)
          revert()
        }
      }
    },

    // ── Record last studied timestamp ─────────────────────────
    recordStudied: async (subspecialtyId) => {
      set(s => ({
        meta: {
          ...s.meta,
          lastStudied: { ...s.meta.lastStudied, [subspecialtyId]: Date.now() },
        },
      }))

      const userId = await resolveUserId()
      if (!userId) return

      const { error } = await supabase
        .from('user_meta')
        .upsert(
          { user_id: userId, last_studied: get().meta.lastStudied },
          { onConflict: 'user_id' }
        )

      if (error) console.error('[progress] recordStudied failed:', error)
    },

    // ── Reset deck ────────────────────────────────────────────
    resetDeck: async (cardIds) => {
      set(s => {
        const next = { ...s.progress }
        cardIds.forEach(id => delete next[id])
        return { progress: next }
      })

      const userId = await resolveUserId()
      if (!userId) return

      const { error } = await supabase
        .from('card_progress')
        .delete()
        .eq('user_id', userId)
        .in('card_id', cardIds)

      if (error) console.error('[progress] resetDeck failed:', error)
    },

    // ── Helpers (synchronous, read from local cache) ──────────
    getCardState: (cardId) => {
      return get().progress[cardId] || CARD_STATE.UNSEEN
    },

    getStatsForCards: (cards) => {
      const { progress } = get()
      let unseen = 0, gotIt = 0, flagged = 0
      cards.forEach(card => {
        const state = progress[card.id] || CARD_STATE.UNSEEN
        if      (state === CARD_STATE.UNSEEN)  unseen++
        else if (state === CARD_STATE.GOT_IT)  gotIt++
        else if (state === CARD_STATE.FLAGGED) flagged++
      })
      return { unseen, gotIt, flagged, total: cards.length }
    },

    getLastStudiedTimestamp: (subspecialtyId) => {
      return get().meta.lastStudied[subspecialtyId] || 0
    },
  }
})
