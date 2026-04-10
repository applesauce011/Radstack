import { create } from 'zustand'

// ============================================================
// Study Session Store
// Manages the current active flashcard study session.
// Not persisted — resets each visit to that deck.
// ============================================================

export const STUDY_MODE = {
  ALL: 'all',
  FLAGGED: 'flagged',
  UNSEEN: 'unseen',
}

function shuffleArray(arr) {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

export const useStudyStore = create((set, get) => ({
  // Session config
  cards: [],            // ordered array of card objects for this session
  currentIndex: 0,
  isFlipped: false,
  mode: STUDY_MODE.ALL,
  isShuffled: false,
  sessionSource: null,  // { type: 'subspecialty'|'subsection', id, label }
  isComplete: false,

  // Start a new study session
  startSession: ({ cards, mode, shuffle, source }) => {
    let sessionCards = [...cards]
    if (shuffle) sessionCards = shuffleArray(sessionCards)
    set({
      cards: sessionCards,
      currentIndex: 0,
      isFlipped: false,
      mode,
      isShuffled: shuffle,
      sessionSource: source,
      isComplete: false,
    })
  },

  flip: () => set(state => ({ isFlipped: !state.isFlipped })),

  next: () => {
    const { currentIndex, cards } = get()
    if (currentIndex < cards.length - 1) {
      set({ currentIndex: currentIndex + 1, isFlipped: false })
    } else {
      set({ isComplete: true })
    }
  },

  prev: () => {
    const { currentIndex } = get()
    if (currentIndex > 0) {
      set({ currentIndex: currentIndex - 1, isFlipped: false })
    }
  },

  goTo: (index) => {
    const { cards } = get()
    if (index >= 0 && index < cards.length) {
      set({ currentIndex: index, isFlipped: false })
    }
  },

  reset: () => {
    const { cards, isShuffled } = get()
    let resetCards = [...cards]
    if (isShuffled) resetCards = shuffleArray(resetCards)
    set({ cards: resetCards, currentIndex: 0, isFlipped: false, isComplete: false })
  },

  toggleShuffle: () => {
    const { cards, isShuffled } = get()
    const newShuffled = !isShuffled
    set({
      cards: newShuffled ? shuffleArray(cards) : cards,
      isShuffled: newShuffled,
      currentIndex: 0,
      isFlipped: false,
    })
  },

  getCurrentCard: () => {
    const { cards, currentIndex } = get()
    return cards[currentIndex] || null
  },

  getProgress: () => {
    const { currentIndex, cards } = get()
    return {
      current: currentIndex + 1,
      total: cards.length,
      percent: cards.length ? Math.round(((currentIndex + 1) / cards.length) * 100) : 0,
    }
  },
}))
