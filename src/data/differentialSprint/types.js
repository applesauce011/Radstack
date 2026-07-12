// ============================================================
// Differential Sprint — Type Definitions
// ============================================================
// Plain JS (this project has no TypeScript build) — these are
// JSDoc typedefs for editor intellisense only, not runtime code.
//
// See questionBank.js for the actual placeholder data.
// ============================================================

/**
 * @typedef {'pattern_to_differential'|'finding_to_diagnosis'|'differential_to_discriminator'|'diagnosis_to_complication'|'diagnosis_to_management'|'modality_crossover'|'mixed_board_style'} DifferentialSprintQuestionType
 */

/**
 * @typedef {Object} DifferentialSprintQuestion
 * @property {string} id                          Stable, permanent id (e.g. 'ds_chest_001'). Never regenerate — persistent progress is keyed on this.
 * @property {string} prompt                       The board-style prompt shown to the user.
 * @property {DifferentialSprintQuestionType} questionType  Internal tag only — never shown as a setup filter.
 * @property {string[]} subspecialties              Subspecialty ids from subspecialties.js, e.g. ['chest']
 * @property {string[]} [modalities]                 e.g. ['CT', 'MRI']
 * @property {string[]} [anatomy]                    e.g. ['lung', 'mediastinum']
 * @property {string[]} expectedAnswers              Expected differential / answer, as short bullet phrases (no paragraphs).
 * @property {string[]} [mustNotMiss]                 Must-not-miss diagnosis/diagnoses, if applicable.
 * @property {string[]} [keyDiscriminators]           Short "Dx: discriminator" phrases.
 * @property {string[]} [commonTraps]                 Common traps/pitfalls, if applicable.
 * @property {string} [boardPearl]                    One concise high-yield pearl.
 * @property {string[]} [relatedFlashcardIds]         Optional links to existing flashcard ids (see converter.js).
 * @property {{ title: string, url?: string }[]} [sources]
 */

// ── Question type tag labels (shown as a small tag on the card) ─
export const DIFFERENTIAL_SPRINT_QUESTION_TYPE_LABELS = {
  pattern_to_differential: 'Pattern → Differential',
  finding_to_diagnosis: 'Finding → Diagnosis',
  differential_to_discriminator: 'Differential → Discriminator',
  diagnosis_to_complication: 'Diagnosis → Complication',
  diagnosis_to_management: 'Diagnosis → Management',
  modality_crossover: 'Modality Crossover',
  mixed_board_style: 'Board-Style Mixed',
}

// ── Persistent self-rating status ───────────────────────────────
// Mirrors CARD_STATE in store/progressStore.js. No row in the DB
// (differential_sprint_progress) = 'unseen' — same convention as
// card_progress, kept as a client-only virtual state.
export const DS_STATUS = {
  UNSEEN:  'unseen',
  GOT_IT:  'got_it',
  PARTIAL: 'partial',
  MISSED:  'missed',
}

// ── Question pool filters (setup screen) ────────────────────────
export const DS_POOL = {
  ALL:            'all',
  UNSEEN:         'unseen',
  MISSED:         'missed',
  PARTIAL:        'partial',
  MISSED_PARTIAL: 'missed_partial',
}

export const DS_POOL_LABELS = {
  [DS_POOL.ALL]:            'All questions',
  [DS_POOL.UNSEEN]:         'Unseen questions',
  [DS_POOL.MISSED]:         'Missed questions',
  [DS_POOL.PARTIAL]:        'Partial questions',
  [DS_POOL.MISSED_PARTIAL]: 'Missed + Partial questions',
}
