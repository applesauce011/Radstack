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

import { SUBSPECIALTY_CONFIG, ANATOMY_SECTIONS, FREE_SECTIONS } from './config'

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
import { obstetricsSubsections } from './decks/obstetrics'
import { cardiacSubsections }    from './decks/cardiac'
import { physicsSubsections }    from './decks/physics'

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
  obstetrics: obstetricsSubsections,
  cardiac:    cardiacSubsections,
  physics:    physicsSubsections,
}

// ── Assemble full SUBSPECIALTIES array ───────────────────────
// Merges config metadata with card content.
// Empty subsections (cards: []) are filtered out so they don't
// appear as blank sections in the UI — add cards to show them.
export const SUBSPECIALTIES = SUBSPECIALTY_CONFIG.map(config => ({
  ...config,
  // Include all subsections (even 0-card ones) so the UI can show "Coming Soon" overlays.
  subsections: (DECK_MODULES[config.id] || []),
}))

// Re-export so consumers don't need a separate config import.
export { ANATOMY_SECTIONS, FREE_SECTIONS }

// ── Section access helper ─────────────────────────────────────
// hasAnatomyAccess also implies premium access (admin grants are privileged).
export function isSectionAccessible(sectionId, hasAccess, hasAnatomyAccess) {
  if (FREE_SECTIONS.has(sectionId)) return true
  if (ANATOMY_SECTIONS.has(sectionId)) return hasAnatomyAccess
  return hasAccess || hasAnatomyAccess
}

// ── Utility functions ─────────────────────────────────────────

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

// Returns only cards the user can access given their subscription/anatomy state.
export function getAllAccessibleCards(hasAccess, hasAnatomyAccess) {
  return SUBSPECIALTIES.flatMap(sub =>
    sub.subsections
      .filter(section => isSectionAccessible(section.id, hasAccess, hasAnatomyAccess))
      .flatMap(section =>
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

// Like getCardsBySubspecialty but filters based on full access state.
export function getAccessibleCardsBySubspecialty(subspecialtyId, hasAccess, hasAnatomyAccess) {
  const sub = SUBSPECIALTIES.find(s => s.id === subspecialtyId)
  if (!sub) return []
  return sub.subsections
    .filter(section => isSectionAccessible(section.id, hasAccess, hasAnatomyAccess))
    .flatMap(section =>
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

// Returns the card count accessible to a premium (non-anatomy) user.
// Use this for all public-facing card count displays so the number is consistent.
export function getPremiumCardCount() {
  return SUBSPECIALTIES.flatMap(sub =>
    sub.subsections.filter(s => !ANATOMY_SECTIONS.has(s.id)).flatMap(s => s.cards)
  ).length
}
