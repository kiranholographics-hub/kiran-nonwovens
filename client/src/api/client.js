import {
  businessAreas as localBusinessAreas,
  products as localProducts,
} from '../data/catalog.js';

/**
 * Catalogue access for the site.
 *
 * The Express API is the source of truth once it is running. Until then — and
 * any time it is unreachable — these fall back to the local catalogue so every
 * page still renders. A page is never allowed to fail because the API is down,
 * which also means the prerender step always produces complete HTML.
 */

const BASE = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');
const TIMEOUT_MS = 4000;

let warned = false;

async function fromApi(path) {
  if (!BASE) return null;
  try {
    const res = await fetch(`${BASE}${path}`, {
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    if (!warned) {
      warned = true;
      console.warn(
        `[catalogue] API unreachable (${err.message}) — using the local fallback catalogue.`
      );
    }
    return null;
  }
}

const nonEmpty = (v) => (Array.isArray(v) && v.length ? v : null);

export async function getBusinessAreas() {
  return nonEmpty(await fromApi('/api/business-areas')) || localBusinessAreas;
}

export async function getBusinessArea(slug) {
  const fromDb = await fromApi(`/api/business-areas/${encodeURIComponent(slug)}`);
  if (fromDb?.slug) return fromDb;
  return localBusinessAreas.find((b) => b.slug === slug) || null;
}

export async function getProducts() {
  return nonEmpty(await fromApi('/api/products')) || localProducts;
}

export async function getProductsByCategory(category) {
  const fromDb = nonEmpty(
    await fromApi(`/api/products/category/${encodeURIComponent(category)}`)
  );
  if (fromDb) return fromDb;
  return localProducts.filter((p) => p.category === category);
}

export async function getProduct(slug) {
  const fromDb = await fromApi(`/api/products/${encodeURIComponent(slug)}`);
  if (fromDb?.slug) return fromDb;
  return localProducts.find((p) => p.slug === slug) || null;
}

/** Everything the mega-menus and the Spec Finder need, in one pass. */
export async function getCatalogue() {
  const [areas, items] = await Promise.all([getBusinessAreas(), getProducts()]);
  return { businessAreas: areas, products: items };
}

/** Sends an enquiry. Throws with a message the form can show the buyer. */
export async function postEnquiry(payload) {
  if (!BASE) {
    throw new Error(
      'The enquiry service is not connected yet. Please email us directly and we will pick it up.'
    );
  }
  let res;
  try {
    res = await fetch(`${BASE}/api/enquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(15000),
    });
  } catch {
    throw new Error(
      'We could not reach the server. Please try again in a moment, or email us directly.'
    );
  }
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const error = new Error(data.error || 'We could not send that just now.');
    error.fieldErrors = data.errors;
    throw error;
  }
  return data;
}
