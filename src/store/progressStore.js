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
// Write strategy:
//   - Optimistic local update for instant UI feedback.
//   - All DB writes go through a serial queue (_writeChain) so rapid
//     card swiping never sends concurrent requests and exhausts the
//     Supabase free-tier connection pool.
//   - INSERT with .select('card_id') lets us detect silent RLS blocks
//     (empty data, no error) that happen when auth.uid() is null.
//   - On conflict (row exists) we fall back to UPDATE — avoids the
//     UPSERT path which requires additional PostgREST permissions.
//   - On silent RLS block we call getUser() to validate the live
//     session and log whether the block is a userId mismatch or a
//     true policy denial, so the root cause can be diagnosed.
//   - On any unrecoverable write failure the affected card is reverted
//     to its pre-action state without touching any concurrent changes.
// ============================================================

export const CARD_STATE = {
  UNSEEN:  'unseen',
  GOT_IT:  'got_it',
  FLAGGED: 'flagged',
}

// ── Write queue ───────────────────────────────────────────────
// A chained promise that serialises every DB write.
// Each task runs only after the previous one completes (or errors).
// Errors are caught per-task so one failure never blocks the queue.
let _writeChain = Promise.resolve()
const _enqueue = (task) => {
  _writeChain = _writeChain
    .then(() => task())
    .catch((err) => console.error('[progress] queued write threw:', err?.message ?? err))
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
    if (id) set({ userId: id })
    return id
  }

  return {
    userId:   null,
    progress: {},              // { [cardId]: 'got_it' | 'flagged' }
    meta:     { lastStudied: {} },
    isSynced: false,           // true once the initial DB load has completed

    // ── Load ──────────────────────────────────────────────────
    // Called from App.jsx on every auth event.
    loadForUser: async (userId) => {
      if (!userId) {
        set({ userId: null, progress: {}, meta: { lastStudied: {} }, isSynced: true })
        return
      }

      set({ userId, isSynced: false })

      const fetchAll = () => Promise.all([
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

      let [progressResult, metaResult] = await fetchAll()

      // On a fresh tab open, Supabase's Web Lock for token refresh can be
      // "stolen" by a concurrent request, causing queries to fail before the
      // JWT is in memory. Retry once after a short delay to let the lock settle.
      const isLockError = (e) => e?.message?.includes('Lock') && e?.message?.includes('stole')
      if (isLockError(progressResult.error) || isLockError(metaResult.error)) {
        console.warn('[progress] auth lock contention — retrying in 1 s…')
        await new Promise(r => setTimeout(r, 1000))
        ;[progressResult, metaResult] = await fetchAll()
      }

      if (progressResult.error) console.error('[progress] load error:', progressResult.error)
      if (metaResult.error)     console.error('[progress] meta load error:', metaResult.error)

      const dbProgress = {}
      if (progressResult.data) {
        progressResult.data.forEach(row => { dbProgress[row.card_id] = row.state })
      }

      // Guard: if the user changed while we were fetching, discard this result
      if (get().userId !== userId) return

      // Merge: DB is the base; any optimistic updates that arrived during the
      // fetch sit in get().progress and take precedence.
      set({
        progress: { ...dbProgress, ...get().progress },
        meta:     { lastStudied: metaResult.data?.last_studied || {} },
        isSynced: true,
      })
    },

    // ── Card state ────────────────────────────────────────────
    // Optimistic update is applied synchronously; the DB write is
    // enqueued and processed serially after any in-flight writes.
    setCardState: (cardId, state) => {
      console.log('[progress] setCardState', cardId, state)

      const originalState = get().progress[cardId] ?? CARD_STATE.UNSEEN

      // 1. Optimistic update — immediate UI feedback
      set(s => {
        const next = { ...s.progress }
        if (state === CARD_STATE.UNSEEN) delete next[cardId]
        else next[cardId] = state
        return { progress: next }
      })

      // Revert only this card to its original state on failure
      const revert = () => {
        console.warn('[progress] reverting card', cardId, 'to', originalState)
        set(s => {
          const next = { ...s.progress }
          if (originalState === CARD_STATE.UNSEEN) delete next[cardId]
          else next[cardId] = originalState
          return { progress: next }
        })
      }

      // 2. Queue the network write — runs after any in-flight writes finish
      _enqueue(async () => {
        const userId = await resolveUserId()
        console.log('[progress] processing write — userId:', userId, '| card:', cardId, '| state:', state)

        if (!userId) {
          console.warn('[progress] no active session — write skipped (local only)')
          return
        }

        // ── DELETE for UNSEEN ────────────────────────────────
        if (state === CARD_STATE.UNSEEN) {
          const { error } = await supabase
            .from('card_progress')
            .delete()
            .eq('user_id', userId)
            .eq('card_id', cardId)

          if (error) {
            console.error('[progress] delete error:', error)
            revert()
          }
          return
        }

        // ── INSERT (with .select to surface silent RLS blocks) ─
        // Using .select('card_id') forces PostgREST to return the
        // created row so we can distinguish a successful write from
        // an RLS block (both would otherwise return 204 No Content).
        const { data: insertData, error: insertError } = await supabase
          .from('card_progress')
          .insert({ user_id: userId, card_id: cardId, state })
          .select('card_id')

        console.log('[progress] insert result →', JSON.stringify({
          data: insertData, code: insertError?.code ?? null,
        }))

        // ── Insert succeeded ──────────────────────────────────
        if (!insertError) {
          if (insertData?.length) return // ✓ row written

          // Insert returned 200 but no row — silent RLS block.
          // auth.uid() didn't match user_id in the request.
          // Call getUser() (validates JWT via API) to diagnose.
          const { data: { user: liveUser } } = await supabase.auth.getUser()
          const liveId = liveUser?.id ?? null

          console.error(
            '[progress] silent RLS block detected.\n' +
            '  store userId :', userId, '\n' +
            '  live auth.uid:', liveId ?? '(null — not authenticated)'
          )

          if (!liveId) {
            // Session is gone — user must re-login
            console.error('[progress] session is invalid. Reverting.')
            revert()
            return
          }

          if (liveId !== userId) {
            // Store has stale userId — correct it and retry once
            console.warn('[progress] userId mismatch detected. Correcting store and retrying.')
            set({ userId: liveId })

            const { data: retryData, error: retryError } = await supabase
              .from('card_progress')
              .insert({ user_id: liveId, card_id: cardId, state })
              .select('card_id')

            if (!retryError && retryData?.length) {
              console.log('[progress] retry succeeded with corrected userId')
              return
            }
            if (retryError?.code === '23505') {
              // Row exists under correct userId — update it
              const { error: retryUpdateError } = await supabase
                .from('card_progress')
                .update({ state })
                .eq('user_id', liveId)
                .eq('card_id', cardId)
              if (!retryUpdateError) return
              console.error('[progress] retry update error:', retryUpdateError)
            } else {
              console.error('[progress] retry insert error:', retryError, '| data:', retryData)
            }
            revert()
            return
          }

          // Same userId but still blocked — genuine RLS policy denial
          console.error('[progress] RLS denied write for authenticated user:', liveId, '— check policy')
          revert()
          return
        }

        // ── 23505 duplicate key → UPDATE ──────────────────────
        // Row already exists (e.g. toggled state on same card).
        if (insertError.code === '23505') {
          const { error: updateError } = await supabase
            .from('card_progress')
            .update({ state })
            .eq('user_id', userId)
            .eq('card_id', cardId)

          if (updateError) {
            console.error('[progress] update error:', updateError)
            revert()
          }
          return
        }

        // ── Other insert error ────────────────────────────────
        console.error('[progress] unexpected insert error:', insertError)
        revert()
      })
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

      if (error) console.error('[progress] recordStudied error:', error)
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

      if (error) console.error('[progress] resetDeck error:', error)
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
