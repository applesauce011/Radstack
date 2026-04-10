// ============================================================
// RadStack — Data Index
// ============================================================
// This is the ONLY data file imported by the rest of the app.
// It assembles the subspecialty config with card content from
// each individual deck file.
//
// To add a new subspecialty:
//   1. Add metadata to config.js
//   2. Create src/data/decks/[id].js
//   3. Import the subsections here and add to DECK_MODULES
// ============================================================

import { SUBSPECIALTY_CONFIG } from './config'

// ── Import card content from each subspecialty deck ──────────
import { neuroSubsections }      from './decks/neuro'
import { chestSubsections }      from './decks/chest'
import { mskSubsections }        from './decks/msk'
import { abdominalSubsections }  from './decks/abdominal'
import { breastSubsections }     from './decks/breast'
import { guSubsections }         from './decks/gu'
import { pediatricSubsections }  from './decks/pediatric'
import { nucsSubsections }       from './decks/nucs'
import { irSubsections }         from './decks/ir'
import { emergencySubsections }  from './decks/emergency'

// ── Map: subspecialty id → its subsections array ─────────────
const DECK_MODULES = {
  neuro:      neuroSubsections,
  chest:      chestSubsections,
  msk:        mskSubsections,
  abdominal:  abdominalSubsections,
  breast:     breastSubsections,
  gu:         guSubsections,
  pediatric:  pediatricSubsections,
  nucs:       nucsSubsections,
  ir:         irSubsections,
  emergency:  emergencySubsections,
}

// ── Assemble full SUBSPECIALTIES array ───────────────────────
// Merges config metadata with card content.
// Empty subsections (cards: []) are filtered out so they don't
// appear as blank sections in the UI — add cards to show them.
export const SUBSPECIALTIES = SUBSPECIALTY_CONFIG.map(config => ({
  ...config,
  subsections: (DECK_MODULES[config.id] || []).filter(
    section => section.cards.length > 0
  ),
}))

// ── Utility functions (same API as the old decks.js) ─────────

export function getAllCards() {
  return SUBSPECIALTIES.flatMap(sub =>
    sub.subsections.flatMap(section =>
      section.cards.map(card => ({
        ...card,
        subspecialtyId: sub.id,
        subsectionId: section.id,
      }))
    )
  )
}

export function getCardsBySubspecialty(subspecialtyId) {
  const sub = SUBSPECIALTIES.find(s => s.id === subspecialtyId)
  if (!sub) return []
  return sub.subsections.flatMap(section =>
    section.cards.map(card => ({
      ...card,
      subspecialtyId: sub.id,
      subsectionId: section.id,
    }))
  )
}

export function getCardsBySubsection(subsectionId) {
  for (const sub of SUBSPECIALTIES) {
    const section = sub.subsections.find(s => s.id === subsectionId)
    if (section) {
      return section.cards.map(card => ({
        ...card,
        subspecialtyId: sub.id,
        subsectionId: section.id,
      }))
    }
  }
  return []
}

export function getSubspecialty(id) {
  return SUBSPECIALTIES.find(s => s.id === id)
}

export function getTotalCardCount() {
  return getAllCards().length
}
