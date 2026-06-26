import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

const decksDir = join(process.cwd(), 'src/data/decks');
const files = readdirSync(decksDir).filter(f => f.endsWith('.js'));

const results = [];

for (const file of files) {
  const filePath = join(decksDir, file);
  const content = readFileSync(filePath, 'utf-8');

  // Split into card blocks by id: '...' to associate each radiopaediaUrl with nearest preceding id
  const idRegex = /id:\s*'([^']+)'/g;
  const urlRegex = /radiopaediaUrl:\s*'([^']+)'/g;

  const ids = [];
  let m;
  while ((m = idRegex.exec(content))) {
    ids.push({ id: m[1], index: m.index });
  }

  while ((m = urlRegex.exec(content))) {
    const urlIndex = m.index;
    // find the closest preceding id
    let closest = null;
    for (const entry of ids) {
      if (entry.index < urlIndex) {
        closest = entry;
      } else {
        break;
      }
    }
    results.push({
      file,
      cardId: closest ? closest.id : 'UNKNOWN',
      url: m[1],
    });
  }
}

import { writeFileSync } from 'fs';
writeFileSync(join(process.cwd(), 'scripts/tmp/links.json'), JSON.stringify(results, null, 2));
console.error(`Total radiopaedia links found: ${results.length}`);
