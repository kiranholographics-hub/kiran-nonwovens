/**
 * Per-page document head, kept out of the hydrated React tree.
 *
 * React 19 hoists <title>, <meta> and <link> into the head wherever they are
 * rendered. That is lovely in a browser, but `renderToString` has no document
 * to hoist into: it emits them at the front of the markup instead, and then
 * hydration fails — React expects to hoist tags the server left sitting in the
 * body (React error #418), whether or not the prerender moves them to <head>.
 *
 * So the tags never enter the hydrated tree at all. During the prerender each
 * page records its head tags here and the prerender writes them into <head>.
 * In the browser the same description is applied straight to the DOM, so the
 * head still updates on every client-side route change.
 */

export const isServer = typeof window === 'undefined';

let sink = [];
let lang = 'en';

/** Prerender only: start a fresh collection before rendering a route. */
export function resetHead() {
  sink = [];
  lang = 'en';
}

/**
 * The page's language. The shell's <html lang> is a single fixed value, so a
 * page written in another language would otherwise declare itself English —
 * which is the one thing that page cannot afford, since it exists to be found
 * in that language.
 */
export function setLang(value) {
  if (isServer) {
    lang = value || 'en';
    return;
  }
  document.documentElement.lang = value || 'en';
}

/** Prerender only: the language of the last rendered route. */
export function collectLang() {
  return lang;
}

/** Prerender only: the tags collected during the last render, as HTML. */
export function collectHead() {
  return sink
    .map((tag) => {
      // `data-seo` marks these as this page's tags, so when the browser
      // navigates to another route it can clear them before writing the next
      // page's — otherwise the prerendered ones would linger and the document
      // would end up with two canonicals.
      if (tag.kind === 'title') return `<title>${escapeHtml(tag.text)}</title>`;
      if (tag.kind === 'jsonLd')
        return `<script type="application/ld+json" data-seo>${tag.json}</script>`;
      const attrs = Object.entries(tag.attrs)
        .map(([k, v]) => `${k}="${escapeAttr(v)}"`)
        .join(' ');
      return `<${tag.kind} ${attrs} data-seo>`;
    })
    .join('\n    ');
}

function escapeHtml(value) {
  return String(value).replace(/[&<>]/g, (c) => `&${{ '&': 'amp', '<': 'lt', '>': 'gt' }[c]};`);
}

function escapeAttr(value) {
  return String(value).replace(/[&<>"]/g, (c) => `&${{ '&': 'amp', '<': 'lt', '>': 'gt', '"': 'quot' }[c]};`);
}

/**
 * Describes one page's head. `tags` is a plain list so the same description
 * drives both the prerender and the live DOM.
 */
export function applyHead(tags) {
  if (isServer) {
    sink.push(...tags);
    return;
  }

  // Replace whatever the previous route left behind, then write this page's.
  document
    .querySelectorAll('[data-seo]')
    .forEach((el) => el.remove());

  for (const tag of tags) {
    if (tag.kind === 'title') {
      document.title = tag.text;
      continue;
    }
    let el;
    if (tag.kind === 'jsonLd') {
      el = document.createElement('script');
      el.type = 'application/ld+json';
      el.textContent = tag.json;
    } else {
      el = document.createElement(tag.kind);
      for (const [k, v] of Object.entries(tag.attrs)) el.setAttribute(k, v);
    }
    el.setAttribute('data-seo', '');
    document.head.appendChild(el);
  }
}
