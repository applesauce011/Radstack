// ============================================================
// Differential Sprint — Flashcard Converter (stub)
// ============================================================
// Extension point for later generating/importing Differential
// Sprint prompts from existing flashcard content. Not implemented
// yet — deliberately a stub so the architecture has a clear,
// isolated place to add this later.
//
// Must never mutate the original flashcard objects.
// ============================================================

/**
 * Converts a single flashcard into a Differential Sprint question
 * candidate. Not implemented yet.
 *
 * @param {Object} card  A flashcard object as returned by data/index.js (getAllCards() etc).
 * @returns {import('./types').DifferentialSprintQuestion}
 */
export function convertFlashcardToDifferentialSprintQuestion(card) {
  throw new Error('Flashcard → Differential Sprint conversion not implemented yet')
}
