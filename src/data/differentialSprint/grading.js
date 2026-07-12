// ============================================================
// Differential Sprint — AI Grading (future extension point)
// ============================================================
// Not implemented and not called anywhere in the MVP UI. The
// self-rating buttons (Got it / Partial / Missed) are the only
// grading mechanism for now. This stub exists purely so the
// architecture is ready for AI grading later without requiring
// a rewrite of the question/answer-reveal/progress layers.
// ============================================================

/**
 * @typedef {Object} DifferentialSprintGradingResult
 * @property {number} score
 * @property {string[]} matchedAnswers
 * @property {string[]} missedAnswers
 * @property {string} feedback
 */

/**
 * @param {import('./types').DifferentialSprintQuestion} question
 * @param {string} userAnswer
 * @returns {Promise<DifferentialSprintGradingResult>}
 */
export async function gradeDifferentialSprintAnswer(question, userAnswer) {
  throw new Error('AI grading not implemented yet')
}
