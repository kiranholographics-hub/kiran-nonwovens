/**
 * Content managed in the /hq panel and downloaded when the site is built
 * (see scripts/fetch-content.mjs). Each list is empty until something is
 * published, and every page or section that uses it stays out of the site
 * while its list is empty.
 */
import remote from './remote.generated.js';

const list = (key) => (Array.isArray(remote[key]) ? remote[key] : []);

export const updates = list('updates').map((u) => ({
  ...u,
  publishedAt: u.publishedAt ? String(u.publishedAt).slice(0, 10) : '',
}));
export const customPages = list('pages');
export const testimonials = list('testimonials');
export const team = list('team');
export const certifications = list('certifications');

export const updateBySlug = (slug) => updates.find((u) => u.slug === slug);
export const customPageBySlug = (slug) => customPages.find((p) => p.slug === slug);

/**
 * The small markup the panel's text boxes use, turned into blocks:
 *
 *   ## Heading          ### Sub-heading
 *   - bullet            1. numbered item
 *   ![alt text](/images/photo.jpg)      (or an https:// address)
 *   anything else is a paragraph; a blank line ends it.
 *
 * Inline, inside any block: **bold**, [text](/page) and [text](https://…).
 * Nothing is ever treated as HTML.
 */
export function parseBlocks(text = '') {
  const lines = String(text).replace(/\r\n?/g, '\n').split('\n');
  const blocks = [];
  let para = [];
  let list = null;

  const flushPara = () => {
    if (para.length) blocks.push({ type: 'p', text: para.join(' ') });
    para = [];
  };
  const flushList = () => {
    if (list) blocks.push(list);
    list = null;
  };

  for (const raw of lines) {
    const line = raw.trim();
    let m;
    if (!line) {
      flushPara();
      flushList();
    } else if ((m = line.match(/^(#{2,3})\s+(.+)$/))) {
      flushPara();
      flushList();
      blocks.push({ type: m[1].length === 2 ? 'h2' : 'h3', text: m[2] });
    } else if ((m = line.match(/^!\[([^\]]*)\]\(([^)\s]+)\)$/))) {
      flushPara();
      flushList();
      blocks.push({ type: 'img', alt: m[1], src: m[2] });
    } else if ((m = line.match(/^[-*]\s+(.+)$/))) {
      flushPara();
      if (list?.type !== 'ul') {
        flushList();
        list = { type: 'ul', items: [] };
      }
      list.items.push(m[1]);
    } else if ((m = line.match(/^\d+[.)]\s+(.+)$/))) {
      flushPara();
      if (list?.type !== 'ol') {
        flushList();
        list = { type: 'ol', items: [] };
      }
      list.items.push(m[1]);
    } else {
      flushList();
      para.push(line);
    }
  }
  flushPara();
  flushList();
  return blocks;
}

/** Text with the markup removed, for search-result descriptions. */
export const plainText = (text = '') =>
  parseBlocks(text)
    .filter((b) => b.type === 'p' || b.type === 'ul' || b.type === 'ol')
    .map((b) => (b.items ? b.items.join(' ') : b.text))
    .join(' ')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();

/** Paragraph strings of plain body text (kept for older callers). */
export const paragraphs = (text = '') =>
  parseBlocks(text)
    .filter((b) => b.type === 'p')
    .map((b) => b.text);
