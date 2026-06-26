import { readFileSync, writeFileSync } from 'fs';

const mapping = JSON.parse(readFileSync('scripts/tmp/mapping.json', 'utf-8'));
const byFile = {};
for (const m of mapping) {
  byFile[m.file] = byFile[m.file] || [];
  byFile[m.file].push(m);
}

let totalApplied = 0;
const failures = [];

for (const [file, entries] of Object.entries(byFile)) {
  const filePath = `src/data/decks/${file}`;
  let content = readFileSync(filePath, 'utf-8');

  const idMarker = /id:\s*'([^']+)'/g;
  const markers = [];
  let m;
  while ((m = idMarker.exec(content))) {
    markers.push({ id: m[1], index: m.index });
  }

  // Sort entries by position descending so we can replace without invalidating earlier indices
  const positioned = entries.map(e => {
    const idx = markers.findIndex(x => x.id === e.cardId);
    if (idx === -1) return { ...e, start: -1, end: -1 };
    const start = markers[idx].index;
    const end = idx + 1 < markers.length ? markers[idx + 1].index : content.length;
    return { ...e, start, end };
  }).sort((a, b) => b.start - a.start);

  for (const e of positioned) {
    if (e.start === -1) {
      failures.push(`${file}: cardId not found: ${e.cardId}`);
      continue;
    }
    const block = content.slice(e.start, e.end);
    const oldLine = `radiopaediaUrl: '${e.oldUrl}'`;
    if (!block.includes(oldLine)) {
      failures.push(`${file}/${e.cardId}: old URL not found in block (expected "${e.oldUrl}")`);
      continue;
    }
    const newBlock = block.replace(oldLine, `radiopaediaUrl: '${e.newUrl}'`);
    content = content.slice(0, e.start) + newBlock + content.slice(e.end);
    totalApplied++;
  }

  writeFileSync(filePath, content);
}

console.log('Applied:', totalApplied, '/', mapping.length);
if (failures.length) {
  console.log('Failures:', failures.length);
  failures.forEach(f => console.log(' -', f));
}
