// ============================================================
// Differential Sprint — Subspecialty List
// ============================================================
// Reuses the existing flashcard subspecialty metadata (icon,
// color, label) from data/config.js so Differential Sprint looks
// and feels consistent with the rest of the app, and so question
// subspecialty ids line up 1:1 with flashcard subspecialty ids —
// this keeps a future flashcard→question converter (see
// converter.js) trivial.
//
// Excludes 'physics' — not one of the Differential Sprint
// subspecialty categories.
//
// The question bank, progress tracking, and UI here are otherwise
// fully isolated from the flashcard data model.
// ============================================================

import { SUBSPECIALTY_CONFIG } from '../config'

export const DIFFERENTIAL_SPRINT_SUBSPECIALTY_IDS = [
  'neuro', 'chest', 'msk', 'abdominal', 'breast',
  'ir', 'gu', 'pediatric', 'nucs', 'obstetrics', 'cardiac',
]

export const DIFFERENTIAL_SPRINT_SUBSPECIALTIES = SUBSPECIALTY_CONFIG.filter(
  s => DIFFERENTIAL_SPRINT_SUBSPECIALTY_IDS.includes(s.id)
)

export function getDifferentialSprintSubspecialty(id) {
  return DIFFERENTIAL_SPRINT_SUBSPECIALTIES.find(s => s.id === id)
}
