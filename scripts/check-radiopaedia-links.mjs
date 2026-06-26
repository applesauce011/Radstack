import { readFileSync, writeFileSync } from 'fs';

const links = JSON.parse(readFileSync('scripts/tmp/links.json', 'utf-8'));

const CONCURRENCY = 4;
const DELAY_MS = 150;
const results = [];

const HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  'Accept-Language': 'en-US,en;q=0.5',
};

async function checkUrl(url) {
  try {
    let res = await fetch(url, { method: 'GET', redirect: 'follow', headers: HEADERS });
    return { status: res.status, finalUrl: res.url };
  } catch (e) {
    return { status: 'ERROR', error: e.message };
  }
}

async function worker(queue, results) {
  while (queue.length) {
    const item = queue.pop();
    const r = await checkUrl(item.url);
    results.push({ ...item, ...r });
    process.stderr.write('.');
    await new Promise(res => setTimeout(res, DELAY_MS));
  }
}

const queue = [...links];
const workers = [];
for (let i = 0; i < CONCURRENCY; i++) {
  workers.push(worker(queue, results));
}
await Promise.all(workers);

writeFileSync('scripts/tmp/link_check_results.json', JSON.stringify(results, null, 2));
console.error('\nDone. Total checked:', results.length);

const broken = results.filter(r => r.status === 'ERROR' || (typeof r.status === 'number' && r.status >= 400));
console.error('Broken count:', broken.length);
writeFileSync('scripts/tmp/broken_links.json', JSON.stringify(broken, null, 2));
