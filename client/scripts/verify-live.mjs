/**
 * Checks the LIVE site after a deploy, and exits 1 if anything is off:
 *
 *   node scripts/verify-live.mjs            (reads dist/ for what was just built)
 *
 *   SITE_URL  default https://kirannonwovens.com
 *   API_URL   default https://api.kirannonwovens.com
 *
 *  - the home page points at the SAME hashed bundle as the build (so the upload
 *    really landed, and nothing is serving a stale copy),
 *  - a page answers 200 at its clean address and 301s from the trailing-slash
 *    form (the .htaccess is in place),
 *  - sitemap.xml and robots.txt are served, name the real domain and not localhost,
 *  - an unknown address is a real 404,
 *  - the API says it is connected to its database.
 */
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const dist = path.resolve(here, '../dist');
const SITE = (process.env.SITE_URL || 'https://kirannonwovens.com').replace(/\/$/, '');
const API = (process.env.API_URL || 'https://api.kirannonwovens.com').replace(/\/$/, '');
const PAGE = '/guides/nonwoven-geotextile-guide';

let failed = 0;
const report = (ok, label, detail = '') => {
  if (!ok) failed += 1;
  console.log(`${ok ? '  ok  ' : ' FAIL '} ${label}${detail ? ` — ${detail}` : ''}`);
};

async function get(url, { redirect = 'manual', tries = 3 } = {}) {
  let last;
  for (let i = 0; i < tries; i += 1) {
    try {
      const res = await fetch(url, {
        redirect,
        headers: { 'user-agent': 'kiran-nonwovens-deploy-check' },
        signal: AbortSignal.timeout(20000),
      });
      return { status: res.status, location: res.headers.get('location') || '', text: await res.text() };
    } catch (err) {
      last = err;
      await new Promise((r) => setTimeout(r, 2000 * (i + 1)));
    }
  }
  return { status: 0, location: '', text: '', error: String(last?.message || last) };
}

const bundleOf = (html) => (html.match(/\/assets\/index-[\w-]+\.js/) || [''])[0];

// What this build produced.
const localHtml = await readFile(path.join(dist, 'index.html'), 'utf8');
const localSitemap = await readFile(path.join(dist, 'sitemap.xml'), 'utf8');
const wantUrls = (localSitemap.match(/<loc>/g) || []).length;
// The address this build stamped into its sitemap, robots.txt and canonical tags.
const PUBLIC = (localSitemap.match(/<loc>(https?:\/\/[^/<]+)\//) || [])[1] || SITE;

console.log(`Checking ${SITE} (build bundle ${bundleOf(localHtml)}, ${wantUrls} sitemap URLs)`);

const home = await get(`${SITE}/`, { redirect: 'follow' });
report(home.status === 200, 'home page answers 200', home.error || `status ${home.status}`);
report(
  home.status === 200 && bundleOf(home.text) === bundleOf(localHtml),
  'home page serves this build’s JavaScript bundle',
  `live ${bundleOf(home.text) || 'none'} vs built ${bundleOf(localHtml)}`
);

const page = await get(`${SITE}${PAGE}`);
report(page.status === 200, `${PAGE} answers 200 (not 301)`, `status ${page.status}`);

const slash = await get(`${SITE}${PAGE}/`);
report(
  slash.status === 301 && slash.location.replace(/^https?:\/\/[^/]+/, '') === PAGE,
  `${PAGE}/ redirects 301 to the clean address`,
  `status ${slash.status} ${slash.location}`
);

const sm = await get(`${SITE}/sitemap.xml`);
const live = (sm.text.match(/<loc>/g) || []).length;
report(sm.status === 200, 'sitemap.xml answers 200', `status ${sm.status}`);
report(live === wantUrls, `sitemap.xml lists ${wantUrls} URLs`, `live has ${live}`);
report(!/localhost/.test(PUBLIC) && sm.text.includes(`<loc>${PUBLIC}/</loc>`), `sitemap.xml names ${PUBLIC}, never localhost`);

const robots = await get(`${SITE}/robots.txt`);
report(robots.status === 200, 'robots.txt answers 200', `status ${robots.status}`);
report(robots.text.includes(`Sitemap: ${PUBLIC}/sitemap.xml`), 'robots.txt points at the real sitemap');

const nope = await get(`${SITE}/this-page-does-not-exist-${Date.now()}`);
report(nope.status === 404, 'an unknown address is a real 404 (not a soft 404)', `status ${nope.status}`);

const health = await get(`${API}/api/health`, { redirect: 'follow' });
let h = {};
try {
  h = JSON.parse(health.text);
} catch {
  /* not JSON */
}
report(h.ok === true && h.db === 'connected', 'API /api/health is ok and the database is connected', health.error || health.text.slice(0, 80));

if (failed) {
  console.error(`\n${failed} check(s) failed.`);
  process.exit(1);
}
console.log('\nAll live checks passed.');
