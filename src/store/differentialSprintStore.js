import { create } from 'zustand'
import { DS_POOL, DS_STATUS } from '../data/differentialSprint/types'

// ============================================================
// Differential Sprint Session Store
// Manages the current active sprint (setup config + in-progress
// run + local session results). Not persisted — resets on visit,
// mirroring store/studyStore.js. Per-question self-ratings are
// persisted separately via differentialSprintProgressStore.
// ============================================================

export const DS_PHASE = {
  SETUP:   'setup',
  ACTIVE:  'active',
  SUMMARY: 'summary',
}

export const useDifferentialSprintStore = create((set, get) => ({
  phase: DS_PHASE.SETUP,

  // Setup config
  selectedSubspecialties: [],   // empty = all
  pool: DS_POOL.ALL,
  count: 10,
  randomOrder: true,

  // Active sprint
  questions: [],
  currentIndex: 0,
  typedAnswer: '',
  isRevealed: false,
  ratings: {},        // { [questionId]: 'got_it'|'partial'|'missed' } — this session only

  setSelectedSubspecialties: (ids) => set({ selectedSubspecialties: ids }),
  setPool:        (pool)  => set({ pool }),
  setCount:       (count) => set({ count }),
  setRandomOrder: (on)    => set({ randomOrder: on }),

  startSprint: (questions) => set({
    phase: DS_PHASE.ACTIVE,
    questions,
    currentIndex: 0,
    typedAnswer: '',
    isRevealed: false,
    ratings: {},
  }),

  setTypedAnswer: (text) => set({ typedAnswer: text }),

  reveal: () => set({ isRevealed: true }),

  // Records this session's rating for the current question (local
  // summary bookkeeping only — callers are also responsible for
  // persisting via differentialSprintProgressStore.setQuestionStatus).
  rateCurrent: (status) => {
    const q = get().getCurrentQuestion()
    if (!q) return
    set(s => ({ ratings: { ...s.ratings, [q.id]: status } }))
  },

  next: () => {
    const { currentIndex, questions } = get()
    if (currentIndex < questions.length - 1) {
      set({ currentIndex: currentIndex + 1, typedAnswer: '', isRevealed: false })
    } else {
      set({ phase: DS_PHASE.SUMMARY })
    }
  },

  // Starts a fresh sprint using only this session's missed/partial questions.
  retryMissedPartial: () => {
    const { questions, ratings } = get()
    const retryQuestions = questions.filter(q => {
      const r = ratings[q.id]
      return r === DS_STATUS.MISSED || r === DS_STATUS.PARTIAL
    })
    if (retryQuestions.length === 0) return
    get().startSprint(retryQuestions)
  },

  backToSetup: () => set({
    phase: DS_PHASE.SETUP,
    questions: [],
    currentIndex: 0,
    typedAnswer: '',
    isRevealed: false,
    ratings: {},
  }),

  getCurrentQuestion: () => {
    const { questions, currentIndex } = get()
    return questions[currentIndex] || null
  },

  getProgress: () => {
    const { currentIndex, questions } = get()
    return { current: currentIndex + 1, total: questions.length }
  },

  // Summary stats derived from this session's ratings only.
  getSessionSummary: () => {
    const { questions, ratings } = get()
    const bySubspecialty = {}
    let gotIt = 0, partial = 0, missed = 0

    for (const q of questions) {
      const r = ratings[q.id]
      if (r === DS_STATUS.GOT_IT) gotIt++
      else if (r === DS_STATUS.PARTIAL) partial++
      else if (r === DS_STATUS.MISSED) missed++

      for (const subId of q.subspecialties) {
        if (!bySubspecialty[subId]) bySubspecialty[subId] = { gotIt: 0, partial: 0, missed: 0, total: 0 }
        bySubspecialty[subId].total++
        if (r === DS_STATUS.GOT_IT) bySubspecialty[subId].gotIt++
        else if (r === DS_STATUS.PARTIAL) bySubspecialty[subId].partial++
        else if (r === DS_STATUS.MISSED) bySubspecialty[subId].missed++
      }
    }

    const missedOrPartialQuestions = questions.filter(q => {
      const r = ratings[q.id]
      return r === DS_STATUS.MISSED || r === DS_STATUS.PARTIAL
    })

    return {
      total: questions.length,
      completed: Object.keys(ratings).length,
      gotIt, partial, missed,
      bySubspecialty,
      missedOrPartialQuestions,
    }
  },
}))
