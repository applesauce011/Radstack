// Builds public/sheets/search-index.json from public/sheets/data/*.json and the
// diagram SVGs they reference, so the Cheat Sheets search bar can match against
// card titles, buzzword/answer pairs, table cells, mnemonics, notes and diagram
// labels without shipping the SVGs themselves to the client for indexing.
//
// Re-run after adding/editing a sheet: node scripts/build-sheet-search-index.mjs
import { readFileSync, writeFileSync, readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const DATA_DIR = path.join(ROOT, 'public/sheets/data')
const DIAGRAMS_DIR = path.join(ROOT, 'public/sheets/diagrams')
const OUT_FILE = path.join(ROOT, 'public/sheets/search-index.json')

function stripHtml(html) {
  return String(html || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
}

function diagramLabelText(diagramId) {
  const file = path.join(DIAGRAMS_DIR, `${diagramId}.svg`)
  let svg
  try {
    svg = readFileSync(file, 'utf8')
  } catch {
    return ''
  }
  const texts = []
  const re = /<text\b[^>]*>([^<]*)<\/text>/g
  let m
  while ((m = re.exec(svg))) {
    const t = m[1].trim()
    if (t) texts.push(t)
  }
  return texts.join(' · ')
}

function blockText(block) {
  switch (block.type) {
    case 'diagram':
      return diagramLabelText(block.id)
    case 'list':
      return (block.items || []).map(it => `${stripHtml(it.q)} ${stripHtml(it.a)}`).join(' | ')
    case 'table':
      return (block.rows || [])
        .map(row => (row.cells || []).map(c => stripHtml(typeof c === 'string' ? c : c.html)).join(' '))
        .join(' | ')
    case 'heading':
      return block.text || ''
    case 'mnemonic':
    case 'note':
      return stripHtml(block.html)
    default:
      return ''
  }
}

const entries = []

for (const file of readdirSync(DATA_DIR).sort()) {
  if (!file.endsWith('.json')) continue
  const data = JSON.parse(readFileSync(path.join(DATA_DIR, file), 'utf8'))
  let cardIndex = 0
  for (const section of data.sections || []) {
    for (const card of section.cards || []) {
      const text = [card.title, ...(card.blocks || []).map(blockText)].filter(Boolean).join('  ')
      entries.push({
        sheet: data.id,
        sheetTitle: data.title,
        cardIndex,
        sectionTitle: section.title || '',
        cardTitle: card.title || '',
        text,
      })
      cardIndex++
    }
  }
}

writeFileSync(OUT_FILE, JSON.stringify(entries), 'utf8')
console.log(`Wrote ${entries.length} card entries to ${path.relative(ROOT, OUT_FILE)}`)
