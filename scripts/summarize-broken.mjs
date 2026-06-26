import { readFileSync, writeFileSync } from 'fs';

const ctx = JSON.parse(readFileSync('scripts/tmp/broken_card_context.json', 'utf-8'));

function extract(text, field) {
  const re = new RegExp(field + ":\\s*'((?:[^'\\\\]|\\\\.)*)'", 's');
  const m = text.match(re);
  return m ? m[1].replace(/\\'/g, "'") : null;
}

const summary = ctx.map(c => ({
  file: c.file,
  cardId: c.cardId,
  answer: extract(c.text, 'answer'),
  question: extract(c.text, 'question'),
  keyFact: extract(c.text, 'keyFact'),
  radiopaediaUrl: extract(c.text, 'radiopaediaUrl'),
}));

writeFileSync('scripts/tmp/broken_summary.json', JSON.stringify(summary, null, 2));
console.error(summary.length);
