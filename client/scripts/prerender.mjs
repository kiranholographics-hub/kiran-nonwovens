/**
 * Prerenders every route to static HTML, then writes sitemap.xml and
 * robots.txt.
 *
 * Why not react-snap, as the brief suggests: react-snap's last release is from
 * 2020 and it drives the app through a headless browser calling
 * `ReactDOM.hydrate`, an API React 19 removed. `vite-plugin-react-snap` does
 * not exist on npm at all. So this does the same job the way Vite supports
 * directly — a second, server-side build of the app, rendered to a string per
 * route with `renderToString`. It needs no browser download, runs in a couple
 * of seconds, and produces the same thing: real HTML per URL, with that page's
 * own <title> and meta description already in it.
 *
 * `main.jsx` hydrates the markup rather than replacing it, so the app is still
 * a normal SPA once JavaScript loads.
 *
 * Head tags do not travel in the markup: <Seo> keeps them out of the hydrated
 * tree (see src/head.js) and entry-server hands them back separately, so they
 * go straight into <head> and the client hydrates markup it agrees with.
 */
import { build, loadEnv } from 'vite';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { mkdir, readFile, writeFile, rm, readdir } from 'node:fs/promises';
import { statSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const dist = path.join(root, 'dist');
const ssrDist = path.join(root, 'dist-ssr');

// The public address, for sitemap.xml and robots.txt. Vite reads client/.env.production
// for the app's own tags (canonicals, og:url), but this plain Node script does not,
// so it reads the same files through Vite's loadEnv. A real shell variable still wins.
const env = { ...loadEnv('production', root, 'VITE_'), ...process.env };
const SITE_URL = (env.VITE_SITE_URL || 'http://localhost:3100').replace(/\/$/, '');

// A sitemap that points at localhost is silently useless to Google, so a build
// without the real address is stopped here instead of being uploaded by mistake.
if (/localhost|127\.0\.0\.1/.test(SITE_URL) && process.env.ALLOW_LOCAL_BUILD !== '1') {
  console.error(
    `\n[prerender] VITE_SITE_URL is "${SITE_URL}", so sitemap.xml and robots.txt would point at localhost.\n` +
      `Put this in client/.env.production and build again:\n\n` +
      `  VITE_SITE_URL=https://kirannonwovens.com\n` +
      `  VITE_API_URL=https://api.kirannonwovens.com\n\n` +
      `(For a throw-away local test build only, run with ALLOW_LOCAL_BUILD=1.)\n`
  );
  process.exit(1);
}

/**
 * Static routes, with the sitemap priority each deserves and the file whose
 * last change is that page's real last-modified date (see `lastModified`).
 */
const STATIC_ROUTES = [
  { url: '/', priority: '1.0', src: 'src/pages/Home.jsx' },
  { url: '/business-areas', priority: '0.8', src: 'src/pages/BusinessAreas.jsx' },
  { url: '/products', priority: '0.9', src: 'src/pages/Products.jsx' },
  { url: '/about', priority: '0.6', src: 'src/pages/About.jsx' },
  { url: '/manufacturing', priority: '0.7', src: 'src/pages/Manufacturing.jsx' },
  { url: '/contact', priority: '0.6', src: 'src/pages/Contact.jsx' },
  { url: '/exports', priority: '0.8', src: 'src/pages/Exports.jsx' },
  { url: '/guides', priority: '0.7', src: 'src/pages/Guides.jsx' },
  { url: '/privacy', priority: '0.2', src: 'src/pages/Privacy.jsx' },
];

/**
 * A page's <lastmod> is the last commit that touched the file its content
 * comes from — not the build date.
 *
 * Stamping every URL with "today" on each build tells search engines nothing:
 * once the dates move for pages that did not change, the signal is treated as
 * unreliable and ignored, and the recrawl priority it is meant to give up with
 * it. Falling back to the file's mtime keeps a checkout without git history
 * working.
 */
const buildDate = new Date().toISOString().slice(0, 10);
const lastmodCache = new Map();
function lastModified(relPath) {
  if (!relPath) return buildDate;
  if (lastmodCache.has(relPath)) return lastmodCache.get(relPath);
  let date = buildDate;
  try {
    const out = execFileSync(
      'git',
      ['log', '-1', '--format=%cs', '--', relPath],
      { cwd: root, encoding: 'utf8' }
    ).trim();
    if (/^\d{4}-\d{2}-\d{2}$/.test(out)) date = out;
    else date = statSync(path.join(root, relPath)).mtime.toISOString().slice(0, 10);
  } catch {
    try {
      date = statSync(path.join(root, relPath)).mtime.toISOString().slice(0, 10);
    } catch {
      /* keep the build date */
    }
  }
  lastmodCache.set(relPath, date);
  return date;
}

async function loadCatalogue() {
  const mod = await import(
    pathToFileURL(path.join(root, 'src/data/catalog.js')).href
  );
  const g = await import(
    pathToFileURL(path.join(root, 'src/data/guides.js')).href
  );
  const m = await import(
    pathToFileURL(path.join(root, 'src/data/markets.js')).href
  );
  const c = await import(
    pathToFileURL(path.join(root, 'src/data/content.js')).href
  );
  return {
    ...mod,
    guides: g.guides,
    markets: m.markets,
    updates: c.updates,
    customPages: c.customPages,
  };
}

/** Every URL the site has, derived from the catalogue — never hand-listed. */
function allRoutes({
  businessAreas,
  products,
  guides = [],
  markets = [],
  updates = [],
  customPages = [],
}) {
  const CATALOG = 'src/data/catalog.js';
  const GUIDES = 'src/data/guides.js';
  const MARKETS = 'src/data/markets.js';
  const CONTENT = 'src/data/content.js';

  const areaRoutes = businessAreas.flatMap((a) => [
    { url: `/business-areas/${a.slug}`, priority: '0.8', src: CATALOG },
    { url: `/products/${a.slug}`, priority: '0.8', src: CATALOG },
  ]);
  const productRoutes = products.map((p) => ({
    url: `/products/${p.category}/${p.slug}`,
    priority: '0.9',
    src: CATALOG,
  }));
  const guideRoutes = guides.map((g) => ({
    url: `/guides/${g.slug}`,
    priority: '0.7',
    src: GUIDES,
  }));
  const marketRoutes = markets.map((m) => ({
    url: `/exports/${m.slug}`,
    priority: '0.7',
    src: MARKETS,
  }));
  const updateRoutes = [
    ...(updates.length ? [{ url: '/updates', priority: '0.6', src: CONTENT }] : []),
    ...updates.map((u) => ({ url: `/updates/${u.slug}`, priority: '0.6', src: CONTENT })),
  ];
  const pageRoutes = customPages.map((p) => ({
    url: `/pages/${p.slug}`,
    priority: '0.5',
    src: CONTENT,
  }));
  return [
    ...STATIC_ROUTES,
    ...updateRoutes,
    ...pageRoutes,
    ...areaRoutes,
    ...productRoutes,
    ...guideRoutes,
    ...marketRoutes,
  ];
}

async function buildSsrBundle() {
  await build({
    root,
    logLevel: 'warn',
    build: {
      ssr: path.join(root, 'src/entry-server.jsx'),
      outDir: 'dist-ssr',
      emptyOutDir: true,
    },
  });
}

/** <link rel="preload"> tags for the fonts every page paints above the fold
 *  (the headline serif and the three sans weights). Without them the browser
 *  finds the fonts only after parsing the CSS, paints the fallback first and
 *  then shifts the text when the real font arrives — a layout shift on phones.
 *  File names are hashed by Vite, so they are read from dist/assets. */
let fontPreloads = '';
async function findFontPreloads() {
  const files = await readdir(path.join(dist, 'assets'));
  const wanted = [
    /^fraunces-latin-opsz-normal-.*\.woff2$/,
    /^ibm-plex-sans-latin-400-normal-.*\.woff2$/,
    /^ibm-plex-sans-latin-500-normal-.*\.woff2$/,
    /^ibm-plex-sans-latin-600-normal-.*\.woff2$/,
  ];
  fontPreloads = wanted
    .map((re) => files.find((f) => re.test(f)))
    .filter(Boolean)
    .map(
      (f) =>
        `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin>`
    )
    .join('\n    ');
}

function inject(template, { html, head }) {
  let out = template.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  if (fontPreloads) out = out.replace('</head>', `  ${fontPreloads}\n  </head>`);
  if (head) {
    // The page supplies its own title/description, so drop the shell's
    // defaults rather than shipping two of each.
    out = out
      .replace(/<title>[\s\S]*?<\/title>\s*/i, '')
      .replace(/<meta\s+name="description"[\s\S]*?>\s*/i, '')
      .replace('</head>', `  ${head}\n  </head>`);
  }
  return out;
}

const xmlEscape = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

async function run() {
  const catalogue = await loadCatalogue();
  const routes = allRoutes(catalogue);

  console.log(`[prerender] building SSR bundle…`);
  await buildSsrBundle();

  const { render } = await import(
    pathToFileURL(path.join(ssrDist, 'entry-server.js')).href
  );

  await findFontPreloads();
  const template = await readFile(path.join(dist, 'index.html'), 'utf8');

  for (const { url } of routes) {
    const html = inject(template, render(url));
    const outDir = url === '/' ? dist : path.join(dist, url);
    await mkdir(outDir, { recursive: true });
    await writeFile(path.join(outDir, 'index.html'), html, 'utf8');
  }
  console.log(`[prerender] wrote ${routes.length} pages`);

  // A 404 that is still a real page, for hosts that serve one.
  const notFound = inject(template, render('/__not-found__'));
  await writeFile(path.join(dist, '404.html'), notFound, 'utf8');

  const sitemap =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    routes
      .map(
        ({ url, priority, src }) =>
          `  <url>\n` +
          `    <loc>${xmlEscape(SITE_URL + url)}</loc>\n` +
          `    <lastmod>${lastModified(src)}</lastmod>\n` +
          `    <changefreq>monthly</changefreq>\n` +
          `    <priority>${priority}</priority>\n` +
          `  </url>`
      )
      .join('\n') +
    `\n</urlset>\n`;
  await writeFile(path.join(dist, 'sitemap.xml'), sitemap, 'utf8');
  console.log(`[prerender] sitemap.xml: ${routes.length} urls`);

  await writeFile(
    path.join(dist, 'robots.txt'),
    process.env.VITE_NOINDEX === 'true'
      ? // Staging copy: ask every crawler to stay away.
        `User-agent: *\nDisallow: /\n`
      : `User-agent: *\nDisallow: /hq\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
    'utf8'
  );

  await rm(ssrDist, { recursive: true, force: true });
  console.log('[prerender] done');
}

run().catch((err) => {
  console.error('[prerender] failed:', err);
  process.exit(1);
});
