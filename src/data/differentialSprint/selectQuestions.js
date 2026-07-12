// ============================================================
// Differential Sprint — Question Selection
// ============================================================
// Pure selection logic, deliberately kept separate from the
// question bank content and from persistent progress storage —
// it only consumes a progress map, never reads/writes Supabase.
// ============================================================

import { DS_POOL, DS_STATUS } from './types'

function shuffleArray(arr) {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

function matchesPool(status, pool) {
  switch (pool) {
    case DS_POOL.UNSEEN:         return !status || status === DS_STATUS.UNSEEN
    case DS_POOL.MISSED:         return status === DS_STATUS.MISSED
    case DS_POOL.PARTIAL:        return status === DS_STATUS.PARTIAL
    case DS_POOL.MISSED_PARTIAL: return status === DS_STATUS.MISSED || status === DS_STATUS.PARTIAL
    case DS_POOL.ALL:
    default:                     return true
  }
}

/**
 * Selects a sprint's worth of questions from the bank.
 *
 * @param {Object} args
 * @param {import('./types').DifferentialSprintQuestion[]} args.allQuestions
 * @param {Object.<string, string>} args.progress   { [questionId]: 'got_it'|'partial'|'missed' }
 * @param {string[]} args.subspecialtyIds            Empty array = all subspecialties
 * @param {string} args.pool                          One of DS_POOL
 * @param {number} args.count
 * @param {boolean} args.randomOrder
 * @returns {import('./types').DifferentialSprintQuestion[]}
 */
export function selectDifferentialSprintQuestions({
  allQuestions,
  progress = {},
  subspecialtyIds = [],
  pool = DS_POOL.ALL,
  count = 10,
  randomOrder = true,
}) {
  let pooled = subspecialtyIds.length === 0
    ? allQuestions
    : allQuestions.filter(q => q.subspecialties.some(s => subspecialtyIds.includes(s)))

  pooled = pooled.filter(q => matchesPool(progress[q.id], pool))

  if (randomOrder) pooled = shuffleArray(pooled)

  return pooled.slice(0, count)
}
