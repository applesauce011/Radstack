import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const broken = JSON.parse(readFileSync('scripts/tmp/broken_links.json', 'utf-8'));
const byFile = {};
for (const b of broken) {
  byFile[b.file] = byFile[b.file] || [];
  byFile[b.file].push(b.cardId);
}

const out = [];

for (const [file, cardIds] of Object.entries(byFile)) {
  const filePath = join(process.cwd(), 'src/data/decks', file);
  const content = readFileSync(filePath, 'utf-8');

  // Find each card object boundaries by id, then capture until next "id: '" at same nesting (approx: next occurrence of "\n    {" pattern is tricky). Simpler: split on "id: '" markers, capture chunk between.
  const idMarker = /id:\s*'([^']+)'/g;
  const markers = [];
  let m;
  while ((m = idMarker.exec(content))) {
    markers.push({ id: m[1], index: m.index });
  }

  for (const cardId of cardIds) {
    const idx = markers.findIndex(x => x.id === cardId);
    if (idx === -1) {
      out.push({ file, cardId, text: 'NOT FOUND' });
      continue;
    }
    const start = markers[idx].index;
    const end = idx + 1 < markers.length ? markers[idx + 1].index : content.length;
    const text = content.slice(start, end);
    out.push({ file, cardId, text });
  }
}

writeFileSync('scripts/tmp/broken_card_context.json', JSON.stringify(out, null, 2));
console.error('Extracted context for', out.length, 'cards');
