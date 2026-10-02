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

/** Paragraphs from the plain text typed in the panel (blank line = new paragraph). */
export const paragraphs = (text = '') =>
  String(text)
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
