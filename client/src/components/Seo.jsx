import { useInsertionEffect } from 'react';
import { SITE } from '../lib.js';
import { applyHead, isServer } from '../head.js';

/**
 * Per-page <head>.
 *
 * Renders nothing. See src/head.js for why the tags stay out of the hydrated
 * tree — in short, React 19's metadata hoisting and `renderToString` do not
 * agree, and the result was a hydration mismatch on every page. The tags are
 * collected at prerender time and applied to the DOM in the browser instead.
 *
 * Every product and business-area page passes its own title and description,
 * so no two pages compete for the same query.
 */
export default function Seo({ title, description, path = '/', jsonLd }) {
  // Catalogue titles already end in the company name — sometimes after a pipe,
  // sometimes after a dash — so only append it when it is not there already.
  const trimmed = title?.trim();
  const fullTitle = !trimmed
    ? `${SITE.name} — ${SITE.tagline}`
    : trimmed.endsWith(SITE.name)
      ? trimmed
      : `${trimmed} | ${SITE.name}`;

  const desc = description || SITE.description;
  const url = `${SITE.url}${path}`;

  const tags = [
    { kind: 'title', text: fullTitle },
    { kind: 'meta', attrs: { name: 'description', content: desc } },
    { kind: 'link', attrs: { rel: 'canonical', href: url } },

    { kind: 'meta', attrs: { property: 'og:type', content: 'website' } },
    { kind: 'meta', attrs: { property: 'og:site_name', content: SITE.name } },
    { kind: 'meta', attrs: { property: 'og:title', content: fullTitle } },
    { kind: 'meta', attrs: { property: 'og:description', content: desc } },
    { kind: 'meta', attrs: { property: 'og:url', content: url } },

    { kind: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
    { kind: 'meta', attrs: { name: 'twitter:title', content: fullTitle } },
    { kind: 'meta', attrs: { name: 'twitter:description', content: desc } },
  ];

  if (jsonLd) tags.push({ kind: 'jsonLd', json: JSON.stringify(jsonLd) });

  // On the server this records the tags for the prerender; in the browser it
  // writes them to the DOM before paint, so the title never flashes.
  if (isServer) applyHead(tags);

  useInsertionEffect(() => {
    if (!isServer) applyHead(tags);
  });

  return null;
}
