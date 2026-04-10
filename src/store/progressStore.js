import { create } from 'zustand'
import { supabase } from '../lib/supabase'

// ============================================================
// Progress Store — backed by Supabase Postgres
//
// Tables (created via SQL in supabase/schema.sql):
//
//   card_progress
//     user_id   uuid  references auth.users
//     card_id   text
//     state     text  ('got_it' | 'flagged')  -- unseen = row absent
//     PRIMARY KEY (user_id, card_id)
//
//   user_meta
//     user_id       uuid  references auth.users  PRIMARY KEY
//     last_studied  jsonb  { [subspecialtyId]: timestamp_ms }
//
// RLS policies ensure each user can only see/edit their own rows.
//
// Local state is the in-memory cache — it's loaded once on login
// and kept in sync with optimistic local updates + Supabase writes.
// ============================================================

export const CARD_STATE = {
  UNSEEN: 'unseen',
  GOT_IT: 'got_it',
  FLAGGED: 'flagged',
}

export const useProgressStore = create((set, get) => ({
  userId: null,
  progress: {},            // { [cardId]: 'got_it' | 'flagged' }  — unseen = absent
  meta: { lastStudied: {} },
  isSynced: false,         // true once loaded from Supabase

  // ── Load ────────────────────────────────────────────────────
  // Called from App.jsx when a user session is established.
  loadForUser: async (userId) => {
    if (!userId) {
      set({ userId: null, progress: {}, meta: { lastStudied: {} }, isSynced: false })
      return
    }

    set({ userId, isSynced: false })

    // Fetch card progress
    const { data: progressRows, error: progressError } = await supabase
      .from('card_progress')
      .select('card_id, state')
      .eq('user_id', userId)

    // Fetch meta (last studied timestamps)
    const { data: metaRow, error: metaError } = await supabase
      .from('user_meta')
      .select('last_studied')
      .eq('user_id', userId)
      .maybeSingle()

    if (progressError) console.error('Progress load error:', progressError)
    if (metaError) console.error('Meta load error:', metaError)

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

    // Optimistic local update first (instant UI)
    const updated = { ...progress }
    if (state === CARD_STATE.UNSEEN) {
      delete updated[cardId]
    } else {
      updated[cardId] = state
    }
    set({ progress: updated })

    if (!userId) return // not logged in, local-only

    if (state === CARD_STATE.UNSEEN) {
      // Remove the row entirely — absence = unseen
      await supabase
        .from('card_progress')
        .delete()
        .eq('user_id', userId)
        .eq('card_id', cardId)
    } else {
      // Upsert: insert or update on conflict
      await supabase
        .from('card_progress')
        .upsert({ user_id: userId, card_id: cardId, state }, { onConflict: 'user_id,card_id' })
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

    await supabase
      .from('user_meta')
      .upsert(
        { user_id: userId, last_studied: updated.lastStudied },
        { onConflict: 'user_id' }
      )
  },

  // ── Reset deck ──────────────────────────────────────────────
  resetDeck: async (cardIds) => {
    const { userId, progress } = get()

    // Optimistic local update
    const updated = { ...progress }
    cardIds.forEach(id => delete updated[id])
    set({ progress: updated })

    if (!userId) return

    // Delete all rows for these cards in one query
    await supabase
      .from('card_progress')
      .delete()
      .eq('user_id', userId)
      .in('card_id', cardIds)
  },

  // ── Helpers (synchronous, read from local cache) ────────────
  getCardState: (cardId) => {
    return get().progress[cardId] || CARD_STATE.UNSEEN
  },

  getStatsForCards: (cards) => {
    const { progress } = get()
    let unseen = 0, gotIt = 0, flagged = 0
    cards.forEach(card => {
      const state = progress[card.id] || CARD_STATE.UNSEEN
      if (state === CARD_STATE.UNSEEN) unseen++
      else if (state === CARD_STATE.GOT_IT) gotIt++
      else if (state === CARD_STATE.FLAGGED) flagged++
    })
    return { unseen, gotIt, flagged, total: cards.length }
  },

  getLastStudiedTimestamp: (subspecialtyId) => {
    return get().meta.lastStudied[subspecialtyId] || 0
  },
}))
