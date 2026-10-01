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
 *
 * Props
 *   title        page title; the company name is appended unless already there.
 *                null → the home-page title.
 *   description  meta description (aim for 120–160 characters).
 *   path         the page's own path — drives the canonical and og:url.
 *   jsonLd       one schema.org object, or an array of them.
 *   image        social-share image path or URL; defaults to SITE.ogImage.
 *   type         'website' (default) or 'article'.
 *   article      { published, modified } ISO dates, for type="article".
 *   noindex      keep the page out of search results (used by the 404).
 */
export default function Seo({
  title,
  description,
  path = '/',
  jsonLd,
  image,
  type = 'website',
  article,
  noindex = false,
}) {
  // Catalogue titles already end in the company name — sometimes after a pipe,
  // sometimes after a dash — so only append it when it is not there already.
  const trimmed = title?.trim();
  const fullTitle = !trimmed
    ? SITE.homeTitle
    : trimmed.endsWith(SITE.name)
      ? trimmed
      : `${trimmed} | ${SITE.name}`;

  const desc = description || SITE.description;
  const url = `${SITE.url}${path}`;
  const img = (image || SITE.ogImage).startsWith('http')
    ? image || SITE.ogImage
    : `${SITE.url}${image || SITE.ogImage}`;

  const tags = [
    { kind: 'title', text: fullTitle },
    { kind: 'meta', attrs: { name: 'description', content: desc } },
    { kind: 'link', attrs: { rel: 'canonical', href: url } },
    {
      kind: 'meta',
      attrs: {
        name: 'robots',
        content: noindex
          ? 'noindex, follow'
          : 'index, follow, max-image-preview:large, max-snippet:-1',
      },
    },

    { kind: 'meta', attrs: { property: 'og:type', content: type } },
    { kind: 'meta', attrs: { property: 'og:site_name', content: SITE.name } },
    { kind: 'meta', attrs: { property: 'og:locale', content: SITE.locale } },
    { kind: 'meta', attrs: { property: 'og:title', content: fullTitle } },
    { kind: 'meta', attrs: { property: 'og:description', content: desc } },
    { kind: 'meta', attrs: { property: 'og:url', content: url } },
    { kind: 'meta', attrs: { property: 'og:image', content: img } },
    { kind: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
    { kind: 'meta', attrs: { property: 'og:image:height', content: '630' } },
    { kind: 'meta', attrs: { property: 'og:image:alt', content: fullTitle } },

    { kind: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
    { kind: 'meta', attrs: { name: 'twitter:title', content: fullTitle } },
    { kind: 'meta', attrs: { name: 'twitter:description', content: desc } },
    { kind: 'meta', attrs: { name: 'twitter:image', content: img } },
  ];

  if (type === 'article' && article?.published) {
    tags.push({
      kind: 'meta',
      attrs: { property: 'article:published_time', content: article.published },
    });
    tags.push({
      kind: 'meta',
      attrs: {
        property: 'article:modified_time',
        content: article.modified || article.published,
      },
    });
  }

  // Search Console / Bing Webmaster ownership tags, when the real values are
  // set at build time (see .env.example).
  const gsc = import.meta.env.VITE_GSC_VERIFICATION;
  const bing = import.meta.env.VITE_BING_VERIFICATION;
  if (gsc) {
    tags.push({ kind: 'meta', attrs: { name: 'google-site-verification', content: gsc } });
  }
  if (bing) {
    tags.push({ kind: 'meta', attrs: { name: 'msvalidate.01', content: bing } });
  }

  for (const block of [].concat(jsonLd || [])) {
    tags.push({ kind: 'jsonLd', json: JSON.stringify(block) });
  }

  // On the server this records the tags for the prerender; in the browser it
  // writes them to the DOM before paint, so the title never flashes.
  if (isServer) applyHead(tags);

  useInsertionEffect(() => {
    if (!isServer) applyHead(tags);
  });

  return null;
}
