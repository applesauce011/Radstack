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
//     state     text  ('got_it' | 'flagged')
//
//   user_meta
//     user_id       uuid  PRIMARY KEY
//     last_studied  jsonb  { [subspecialtyId]: timestamp_ms }
//
// Local state is an in-memory cache loaded once on login and
// kept in sync via optimistic updates + async Supabase writes.
// Writes use INSERT → UPDATE fallback (avoids composite-key
// upsert issues across PostgREST versions).
// ============================================================

export const CARD_STATE = {
  UNSEEN:  'unseen',
  GOT_IT:  'got_it',
  FLAGGED: 'flagged',
}

export const useProgressStore = create((set, get) => ({
  userId:   null,
  progress: {},              // { [cardId]: 'got_it' | 'flagged' }
  meta:     { lastStudied: {} },
  isSynced: false,

  // ── Load ────────────────────────────────────────────────────
  loadForUser: async (userId) => {
    if (!userId) {
      set({ userId: null, progress: {}, meta: { lastStudied: {} }, isSynced: false })
      return
    }

    set({ userId, isSynced: false })

    const { data: progressRows, error: progressError } = await supabase
      .from('card_progress')
      .select('card_id, state')
      .eq('user_id', userId)
      .limit(10000)

    const { data: metaRow, error: metaError } = await supabase
      .from('user_meta')
      .select('last_studied')
      .eq('user_id', userId)
      .maybeSingle()

    if (progressError) console.error('[progress] load error:', progressError)
    if (metaError)     console.error('[progress] meta load error:', metaError)

    const progress = {}
    if (progressRows) {
      progressRows.forEach(row => { progress[row.card_id] = row.state })
    }

    const meta = { lastStudied: metaRow?.last_studied || {} }
    set({ progress, meta, isSynced: true })
  },

  // ── Card state ──────────────────────────────────────────────
  setCardState: async (cardId, state) => {
    const { userId, progress } = get()

    // Optimistic local update (instant UI feedback)
    const updated = { ...progress }
    if (state === CARD_STATE.UNSEEN) {
      delete updated[cardId]
    } else {
      updated[cardId] = state
    }
    set({ progress: updated })

    if (!userId) return // not logged in — local only, won't persist

    if (state === CARD_STATE.UNSEEN) {
      // Delete the row — absence of row means unseen
      const { error } = await supabase
        .from('card_progress')
        .delete()
        .eq('user_id', userId)
        .eq('card_id', cardId)

      if (error) {
        console.error('[progress] delete failed:', error)
        set({ progress }) // revert
      }
    } else {
      // Try INSERT first
      const { error: insertError } = await supabase
        .from('card_progress')
        .insert({ user_id: userId, card_id: cardId, state })

      if (insertError) {
        if (insertError.code === '23505') {
          // Duplicate key — row already exists, UPDATE instead
          const { error: updateError } = await supabase
            .from('card_progress')
            .update({ state })
            .eq('user_id', userId)
            .eq('card_id', cardId)

          if (updateError) {
            console.error('[progress] update failed:', updateError)
            set({ progress }) // revert
          }
        } else {
          console.error('[progress] insert failed:', insertError)
          set({ progress }) // revert
        }
      }
    }
  },

  // ── Record last studied timestamp ───────────────────────────
  recordStudied: async (subspecialtyId) => {
    const { userId, meta } = get()
    const updated = {
      ...meta,
      lastStudied: { ...meta.lastStudied, [subspecialtyId]: Date.now() },
    }
    set({ meta: updated })

    if (!userId) return

    const { error } = await supabase
      .from('user_meta')
      .upsert(
        { user_id: userId, last_studied: updated.lastStudied },
        { onConflict: 'user_id' }
      )

    if (error) console.error('[progress] recordStudied failed:', error)
  },

  // ── Reset deck ──────────────────────────────────────────────
  resetDeck: async (cardIds) => {
    const { userId, progress } = get()

    const updated = { ...progress }
    cardIds.forEach(id => delete updated[id])
    set({ progress: updated })

    if (!userId) return

    const { error } = await supabase
      .from('card_progress')
      .delete()
      .eq('user_id', userId)
      .in('card_id', cardIds)

    if (error) console.error('[progress] resetDeck failed:', error)
  },

  // ── Helpers (synchronous reads from local cache) ────────────
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
}))
