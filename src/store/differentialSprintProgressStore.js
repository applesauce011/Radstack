import { create } from 'zustand'
import { supabase } from '../lib/supabase'
import { DS_STATUS } from '../data/differentialSprint/types'

// ─────────────────────────────────────────────────────────────
// Differential Sprint Progress Store
//
// Table: differential_sprint_progress (user_id, question_id, status)
// One row per question the user has self-rated. No row = unseen.
//
// This is an isolated sibling of store/progressStore.js (which
// tracks flashcard got_it/flagged state) — same write strategy,
// separate table, separate id space, own write queue. Kept fully
// separate so Differential Sprint can never disturb flashcard
// progress.
//
// Write strategy (identical to progressStore.js):
//   • Optimistic update applied synchronously.
//   • DB writes go through a per-user serial queue.
//   • On write failure, only the affected question is reverted.
// ─────────────────────────────────────────────────────────────

// ── Per-user serial write queue ───────────────────────────────
let _queue       = Promise.resolve()
let _queueUserId = null

function enqueue(userId, task) {
  if (_queueUserId !== userId) {
    _queue       = Promise.resolve()
    _queueUserId = userId
  }
  _queue = _queue
    .then(task)
    .catch(err => console.error('[ds-progress] write threw:', err?.message ?? err))
}

// ─────────────────────────────────────────────────────────────

export const useDifferentialSprintProgressStore = create((set, get) => ({
  userId:   null,
  progress: {},     // { [questionId]: 'got_it' | 'partial' | 'missed' }
  updatedAt: {},    // { [questionId]: timestamp (ms) } — used by the Stats page trend chart
  isSynced: false,

  // ── loadForUser ─────────────────────────────────────────────
  // Called lazily when the Differential Sprint page mounts
  // (not from the shared App.jsx auth listener — keeps this
  // feature's data loading fully isolated from the flashcard
  // progress/subscription loading critical path).
  loadForUser: async (userId) => {
    if (!userId) {
      _queue       = Promise.resolve()
      _queueUserId = null
      set({ userId: null, progress: {}, updatedAt: {}, isSynced: false })
      return
    }

    if (_queueUserId !== userId) {
      _queue       = Promise.resolve()
      _queueUserId = userId
    }

    const isNewUser = get().userId !== userId
    if (isNewUser) {
      set({ userId, progress: {}, updatedAt: {}, isSynced: false })
    } else {
      set({ isSynced: false })
    }

    const { data, error } = await supabase
      .from('differential_sprint_progress')
      .select('question_id, status, updated_at')
      .eq('user_id', userId)

    if (get().userId !== userId) return

    if (error) {
      console.error('[ds-progress] load error:', error.message)
      set({ isSynced: false })
      return
    }

    const progress = {}
    const updatedAt = {}
    for (const { question_id, status, updated_at } of data ?? []) {
      progress[question_id] = status
      updatedAt[question_id] = updated_at ? new Date(updated_at).getTime() : Date.now()
    }
    set({ progress, updatedAt, isSynced: true })
  },

  // ── setQuestionStatus ────────────────────────────────────────
  setQuestionStatus: (questionId, status) => {
    const { userId } = get()
    if (!userId) {
      console.warn('[ds-progress] no active user — write skipped')
      return
    }

    const prev = get().progress[questionId] ?? DS_STATUS.UNSEEN
    const prevAt = get().updatedAt[questionId]

    set(s => {
      const next = { ...s.progress }
      const nextAt = { ...s.updatedAt }
      if (status === DS_STATUS.UNSEEN) { delete next[questionId]; delete nextAt[questionId] }
      else { next[questionId] = status; nextAt[questionId] = Date.now() }
      return { progress: next, updatedAt: nextAt }
    })

    const revert = () => set(s => {
      const next = { ...s.progress }
      const nextAt = { ...s.updatedAt }
      if (prev === DS_STATUS.UNSEEN) { delete next[questionId]; delete nextAt[questionId] }
      else { next[questionId] = prev; if (prevAt) nextAt[questionId] = prevAt; else delete nextAt[questionId] }
      return { progress: next, updatedAt: nextAt }
    })

    enqueue(userId, async () => {
      if (get().userId !== userId) return

      if (status === DS_STATUS.UNSEEN) {
        const { error } = await supabase
          .from('differential_sprint_progress')
          .delete()
          .eq('user_id', userId)
          .eq('question_id', questionId)
        if (error) { console.error('[ds-progress] delete error:', error.message); revert() }
        return
      }

      const { error } = await supabase
        .from('differential_sprint_progress')
        .upsert(
          { user_id: userId, question_id: questionId, status },
          { onConflict: 'user_id,question_id' }
        )
      if (error) { console.error('[ds-progress] upsert error:', error.message); revert() }
    })
  },

  // ── Synchronous getters ───────────────────────────────────────
  getQuestionStatus: (questionId) => get().progress[questionId] ?? DS_STATUS.UNSEEN,

  getStatsForQuestions: (questions) => {
    const { progress } = get()
    let unseen = 0, gotIt = 0, partial = 0, missed = 0
    for (const { id } of questions) {
      const s = progress[id] ?? DS_STATUS.UNSEEN
      if      (s === DS_STATUS.GOT_IT)  gotIt++
      else if (s === DS_STATUS.PARTIAL) partial++
      else if (s === DS_STATUS.MISSED)  missed++
      else                               unseen++
    }
    return { unseen, gotIt, partial, missed, total: questions.length }
  },
}))
