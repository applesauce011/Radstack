// ============================================================
// Library content parser
//
// The med-student Library is authored as plain text (content.raw.txt)
// using a small set of conventions (======/SECTION:/##/[NOTE]/>/Q:/A:
// etc.) rather than hand-written JS objects — the source text is long
// enough that a deterministic parser is far less error-prone than
// manually transcribing it into block arrays.
// ============================================================

function slugify(s) {
  return s
    .toLowerCase().trim()
    .replace(/[\u2019'"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function isRuleLine(line, ch) {
  const t = line.trim()
  return t.length >= 8 && [...t].every(c => c === ch)
}

function isDeflist(chunk) {
  let hasTerm = false
  for (const raw of chunk) {
    if (/^\s{2,}-\s+/.test(raw)) continue
    const t = raw.trim()
    if (t === '') continue
    if (/^-\s+/.test(t)) return false
    if (/:\s*$/.test(t)) { hasTerm = true; continue }
    return false
  }
  return hasTerm
}

function parseDeflist(chunk) {
  const items = []
  let current = null
  for (const raw of chunk) {
    const indented = /^\s{2,}-\s+(.*)$/.exec(raw)
    if (indented) {
      const fieldText = indented[1]
      const m = /^(.+?):\s*(.*)$/.exec(fieldText)
      if (current) {
        if (m && m[2].trim()) current.fields.push({ label: m[1].trim(), value: m[2].trim() })
        else if (!m) current.fields.push({ label: '', value: fieldText.trim() })
      }
      continue
    }
    const t = raw.trim()
    if (t === '') continue
    const linked = /^(.+?)\s*\((https?:\/\/[^\s)]+)\)\s*:\s*$/.exec(t)
    const plain = linked || /^(.+):\s*$/.exec(t)
    const term = plain ? plain[1].trim() : t.replace(/:\s*$/, '')
    const link = linked ? linked[2] : null
    current = { term, link, fields: [] }
    items.push(current)
  }
  return items
}

function classifyChunk(rawChunk) {
  const chunk = rawChunk.filter(l => l.trim() !== '')
  const trimmed = chunk.map(l => l.trim())
  if (trimmed.length === 0) return null

  if (trimmed.every(l => /^[QA]:\s*/.test(l))) {
    const items = []
    for (let j = 0; j < trimmed.length; j += 2) {
      items.push({
        q: (trimmed[j] || '').replace(/^Q:\s*/, ''),
        a: (trimmed[j + 1] || '').replace(/^A:\s*/, ''),
      })
    }
    return { type: 'faq', items }
  }

  const calloutMatch = trimmed[0].match(/^\[(NOTE|WARNING|CRITICAL|EXAM TIP)\]\s*(.*)$/)
  if (calloutMatch) {
    const variant = calloutMatch[1] === 'EXAM TIP' ? 'examtip' : calloutMatch[1].toLowerCase()
    const text = [calloutMatch[2], ...trimmed.slice(1)].filter(Boolean).join(' ').trim()
    return { type: 'callout', variant, text }
  }

  const imageMatch = trimmed[0].match(/^\[Image:\s*(.*)\]\s*$/)
  if (imageMatch && trimmed.length === 1) {
    return { type: 'image', caption: imageMatch[1] }
  }

  if (/^\s*>\s*/.test(chunk[0])) {
    const title = chunk[0].replace(/^\s*>\s*/, '').trim()
    const text = chunk.slice(1).map(l => l.trim()).join(' ').trim()
    return { type: 'aside', title, text }
  }

  const glossaryMatch = trimmed[0].match(/^Glossary:\s*(.*)$/)
  if (glossaryMatch && trimmed.length === 1) {
    return { type: 'glossary', terms: glossaryMatch[1].split(',').map(t => t.trim()).filter(Boolean) }
  }

  if (trimmed.every(l => /^\d+\.\s+/.test(l))) {
    return { type: 'orderedlist', items: trimmed.map(l => l.replace(/^\d+\.\s+/, '')) }
  }

  if (trimmed.every(l => /^-\s+/.test(l)) && chunk.every(l => !/^\s{2,}-/.test(l))) {
    return { type: 'list', items: trimmed.map(l => l.replace(/^-\s+/, '')) }
  }

  if (isDeflist(chunk)) {
    return { type: 'deflist', items: parseDeflist(chunk) }
  }

  return { type: 'paragraph', text: trimmed.join(' ').trim() }
}

function parseBodyChunks(bodyLines) {
  const blocks = []
  let i = 0
  while (i < bodyLines.length) {
    while (i < bodyLines.length && bodyLines[i].trim() === '') i++
    if (i >= bodyLines.length) break
    const start = i
    while (i < bodyLines.length && bodyLines[i].trim() !== '') i++
    const block = classifyChunk(bodyLines.slice(start, i))
    if (block) blocks.push(block)
  }
  return blocks
}

export function parseLibraryRaw(raw) {
  const lines = raw.split('\n')
  const groups = []
  let currentGroup = null
  let currentSection = null
  let currentArticle = null
  let bodyLines = []
  const usedSlugs = new Set()

  function uniqueSlug(title) {
    let slug = slugify(title)
    let n = 2
    while (usedSlugs.has(slug)) { slug = `${slugify(title)}-${n}`; n++ }
    usedSlugs.add(slug)
    return slug
  }

  function finishArticle() {
    if (currentArticle) {
      currentArticle.blocks = parseBodyChunks(bodyLines)
      currentSection.articles.push(currentArticle)
      currentArticle = null
      bodyLines = []
    }
  }

  let i = 0
  while (i < lines.length) {
    const line = lines[i]

    if (isRuleLine(line, '=')) {
      finishArticle()
      const title = (lines[i + 1] || '').trim()
      currentGroup = { id: slugify(title), label: title, sections: [] }
      groups.push(currentGroup)
      i += 3
      continue
    }

    if (isRuleLine(line, '-')) {
      finishArticle()
      const secLine = (lines[i + 1] || '').trim()
      const title = secLine.replace(/^SECTION:\s*/, '')
      i += 3
      const dekLines = []
      while (i < lines.length && lines[i].trim() !== '') { dekLines.push(lines[i].trim()); i++ }
      currentSection = { id: slugify(title), label: title, dek: dekLines.join(' '), articles: [] }
      currentGroup.sections.push(currentSection)
      continue
    }

    if (/^##\s+/.test(line)) {
      finishArticle()
      const title = line.replace(/^##\s+/, '').trim()
      i++
      const dekLines = []
      while (i < lines.length && lines[i].trim() !== '') { dekLines.push(lines[i].trim()); i++ }
      currentArticle = {
        slug: uniqueSlug(title),
        title,
        dek: dekLines.join(' '),
        group: currentGroup.id,
        groupLabel: currentGroup.label,
        section: currentSection.id,
        sectionLabel: currentSection.label,
      }
      continue
    }

    if (currentArticle) bodyLines.push(line)
    i++
  }
  finishArticle()

  return groups
}
