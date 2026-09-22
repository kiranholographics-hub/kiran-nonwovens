import {
  businessAreas as localBusinessAreas,
  products as localProducts,
} from '@/data/catalog';

/**
 * Catalogue access for the site.
 *
 * The Express API is the source of truth once it is running. Until then — and
 * any time it is unreachable — these fall back to the local catalogue so every
 * page still renders and still server-renders for crawlers. A page is never
 * allowed to fail because the API is down.
 */

const API_BASE = (process.env.API_BASE_URL || '').replace(/\/$/, '');
const TIMEOUT_MS = 4000;

/** Matches the route segments' `revalidate` — see the page files. */
const revalidate = 300;

let warned = false;

async function fromApi(path) {
  if (!API_BASE) return null;
  try {
    const res = await fetch(`${API_BASE}${path}`, {
      signal: AbortSignal.timeout(TIMEOUT_MS),
      next: { revalidate },
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

const nonEmptyArray = (v) => (Array.isArray(v) && v.length ? v : null);

export async function getBusinessAreas() {
  return nonEmptyArray(await fromApi('/api/business-areas')) || localBusinessAreas;
}

export async function getBusinessArea(slug) {
  const fromDb = await fromApi(`/api/business-areas/${encodeURIComponent(slug)}`);
  if (fromDb?.slug) return fromDb;
  return localBusinessAreas.find((b) => b.slug === slug) || null;
}

export async function getProducts() {
  return nonEmptyArray(await fromApi('/api/products')) || localProducts;
}

export async function getProductsByCategory(category) {
  const fromDb = nonEmptyArray(
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

/** Everything the Spec Finder and the mega-menus need, in one pass. */
export async function getCatalogue() {
  const [areas, items] = await Promise.all([getBusinessAreas(), getProducts()]);
  return { businessAreas: areas, products: items };
}
