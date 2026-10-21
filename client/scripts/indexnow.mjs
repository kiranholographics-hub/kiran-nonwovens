/**
 * Tells IndexNow-participating search engines which URLs to (re)crawl.
 *
 *   npm run indexnow            # every URL in the built sitemap
 *   npm run indexnow -- /guides/gsm-in-nonwoven-fabric /about
 *
 * IndexNow is a single ping that Bing, Yandex, Seznam and Naver share, so one
 * submission reaches all of them. Google does not take part — for Google the
 * levers are the sitemap in Search Console and URL Inspection, which is why
 * this script says so rather than implying it covers everything.
 *
 * Authentication is a key file served from the site root: the engines fetch
 * https://<host>/<key>.txt and expect it to contain the key, which proves
 * whoever submitted controls the site. `npm run build` copies it from public/.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { randomUUID } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const dist = path.join(root, 'dist');
const ENDPOINT = 'https://api.indexnow.org/IndexNow';

/** The key lives in public/ so it is served at /<key>.txt after a build. */
async function loadKey() {
  const dir = path.join(root, 'public');
  const { readdir } = await import('node:fs/promises');
  const existing = (await readdir(dir)).find((f) => /^[0-9a-f]{32}\.txt$/.test(f));
  if (existing) {
    const key = existing.replace(/\.txt$/, '');
    const body = (await readFile(path.join(dir, existing), 'utf8')).trim();
    if (body !== key) {
      throw new Error(`public/${existing} must contain exactly "${key}"`);
    }
    return key;
  }
  const key = randomUUID().replace(/-/g, '');
  await writeFile(path.join(dir, `${key}.txt`), `${key}\n`, 'utf8');
  console.log(`[indexnow] created public/${key}.txt — commit it and deploy before submitting`);
  return key;
}

async function sitemapUrls() {
  const file = path.join(dist, 'sitemap.xml');
  if (!existsSync(file)) {
    throw new Error('dist/sitemap.xml not found — run `npm run build` first.');
  }
  const xml = await readFile(file, 'utf8');
  return [...xml.matchAll(/<loc>([^<]*)<\/loc>/g)].map((m) => m[1]);
}

async function run() {
  const key = await loadKey();
  const all = await sitemapUrls();
  const host = new URL(all[0]).host;

  const args = process.argv.slice(2).filter((a) => !a.startsWith('-'));
  const urlList = args.length
    ? args.map((a) => (a.startsWith('http') ? a : `https://${host}${a.startsWith('/') ? a : `/${a}`}`))
    : all;

  // Only submit URLs the build actually produced, so a typo is caught here
  // rather than counting against the site as a bad submission.
  const known = new Set(all);
  const unknown = urlList.filter((u) => !known.has(u));
  if (unknown.length) {
    console.error('[indexnow] not in sitemap.xml:\n' + unknown.map((u) => '  ' + u).join('\n'));
    process.exit(1);
  }

  if (process.argv.includes('--dry-run')) {
    console.log(`[indexnow] dry run — would submit ${urlList.length} url(s) for ${host}`);
    urlList.slice(0, 5).forEach((u) => console.log('  ' + u));
    if (urlList.length > 5) console.log(`  … and ${urlList.length - 5} more`);
    console.log(`[indexnow] key file must be live at https://${host}/${key}.txt`);
    return;
  }

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host,
      key,
      keyLocation: `https://${host}/${key}.txt`,
      urlList,
    }),
  });

  // 200 accepted · 202 accepted, key not verified yet · 403 key not found
  const body = await res.text().catch(() => '');
  if (res.status === 200 || res.status === 202) {
    console.log(`[indexnow] submitted ${urlList.length} url(s) for ${host} — ${res.status}`);
    if (res.status === 202) {
      console.log(`[indexnow] 202 means the key is not verified yet: confirm https://${host}/${key}.txt is live.`);
    }
  } else {
    console.error(`[indexnow] ${res.status} ${body.slice(0, 300)}`);
    if (res.status === 403) {
      console.error(`[indexnow] 403 is a key problem: https://${host}/${key}.txt must return exactly "${key}".`);
    }
    process.exit(1);
  }
  console.log('[indexnow] note: Google does not use IndexNow — submit the sitemap in Search Console for Google.');
}

run().catch((err) => {
  console.error('[indexnow] failed:', err.message);
  process.exit(1);
});
