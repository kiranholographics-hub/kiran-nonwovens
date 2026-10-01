/**
 * Run this before every production build:
 *
 *     node scripts/predeploy.mjs && npm run build
 *
 * It stops a build that would go live pointing at the wrong place — for
 * example canonical links to localhost, or a contact form talking to a
 * server that only exists on your own computer — and lists what is still
 * switched off. Exit code 1 means "do not deploy this build".
 */
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { loadEnv } from 'vite';

const root = path.resolve(import.meta.dirname, '..');
const env = { ...loadEnv('production', root, 'VITE_'), ...Object.fromEntries(Object.entries(process.env).filter(([k]) => k.startsWith('VITE_'))) };

const errors = [];
const warnings = [];
const notes = [];

const isLocal = (u) => /localhost|127\.0\.0\.1|\.local\b/i.test(u);

// ── Required: the public address and the API address ──────────────────────
const site = (env.VITE_SITE_URL || '').trim();
if (!site) errors.push('VITE_SITE_URL is not set. Set it to the live address, e.g. https://www.yourdomain.com (no trailing slash).');
else {
  if (!site.startsWith('https://')) errors.push(`VITE_SITE_URL must start with https:// — it is "${site}".`);
  if (isLocal(site)) errors.push(`VITE_SITE_URL points at your own computer ("${site}"). Google would ignore every canonical link.`);
  if (site.endsWith('/')) errors.push('VITE_SITE_URL must not end with a "/".');
}

const api = (env.VITE_API_URL || '').trim();
if (!api) errors.push('VITE_API_URL is not set — the enquiry form would say "not connected". Set it to the live API address, e.g. https://api.yourdomain.com');
else {
  if (!api.startsWith('https://')) errors.push(`VITE_API_URL must start with https:// — it is "${api}". A https site cannot call a http API.`);
  if (isLocal(api)) errors.push(`VITE_API_URL points at your own computer ("${api}") — the live form would not work.`);
}

// ── Must be off for a live site ──────────────────────────────────────────
if (env.VITE_SHOW_PLACEHOLDER_LABELS === 'true') errors.push('VITE_SHOW_PLACEHOLDER_LABELS=true would print "— pending" captions on the live site. Remove it.');
if (env.VITE_NOINDEX === 'true') warnings.push('VITE_NOINDEX=true — this build tells Google NOT to index the site. Right for a staging copy, wrong for the real launch.');
if (!env.VITE_GSC_VERIFICATION) notes.push('VITE_GSC_VERIFICATION is empty (Google Search Console tag). Add it after launch, then rebuild.');

// ── Media switches in src/lib.js ─────────────────────────────────────────
const lib = readFileSync(path.join(root, 'src/lib.js'), 'utf8');
const flag = (name) => new RegExp(`export const ${name} = true`).test(lib);
if (flag('VIDEOS_READY')) {
  for (const f of ['hero.mp4', 'hero-mobile.mp4', 'manufacturing.mp4', 'manufacturing-mobile.mp4']) {
    if (!existsSync(path.join(root, 'public/videos', f))) warnings.push(`VIDEOS_READY is on but public/videos/${f} is missing (that page falls back to its photo/texture).`);
  }
} else notes.push('VIDEOS_READY is false in src/lib.js — the home and manufacturing videos will NOT play on the live site.');
if (!existsSync(path.join(root, 'public/images/og-default.jpg'))) errors.push('public/images/og-default.jpg is missing (the picture shown when the site is shared).');

// ── Still-unconfirmed details (they are hidden, not shown) ───────────────
for (const [label, re] of [
  ['WhatsApp number', /whatsapp:\s*'\[/],
  ['Working hours', /hours:\s*'\[/],
  ['Global-presence figures', /value:\s*'\[X\]'/],
]) if (re.test(lib)) notes.push(`${label}: not set yet, so it is hidden on the site (set it in src/lib.js and it appears).`);

const out = (title, list) => list.length && console.log(`\n${title}\n` + list.map((l) => `  • ${l}`).join('\n'));
out('✖ STOP — fix these before building for production:', errors);
out('! Check:', warnings);
out('i For your information:', notes);

if (errors.length) {
  console.log('\nPre-deploy check FAILED.\n');
  process.exit(1);
}
console.log(`\n✔ Pre-deploy check passed.  Site: ${site}   API: ${api}\n`);
