import { getCatalogue } from '@/lib/api';
import { SITE } from '@/lib/site';

// Pages regenerate every 5 minutes, so catalogue edits go live without a rebuild.
export const revalidate = 300;

/**
 * sitemap.xml, generated from the live catalogue — products and business areas
 * are never listed by hand, so a new product is discoverable as soon as it is
 * added.
 */
export default async function sitemap() {
  const { businessAreas, products } = await getCatalogue();
  const now = new Date();

  const staticPages = [
    { path: '/', priority: 1 },
    { path: '/business-areas', priority: 0.8 },
    { path: '/products', priority: 0.9 },
    { path: '/about', priority: 0.6 },
    { path: '/manufacturing', priority: 0.7 },
    { path: '/contact', priority: 0.6 },
  ].map(({ path, priority }) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority,
  }));

  const areaPages = businessAreas.flatMap((area) => [
    {
      url: `${SITE.url}/business-areas/${area.slug}`,
      lastModified: area.updatedAt ? new Date(area.updatedAt) : now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE.url}/products/${area.slug}`,
      lastModified: area.updatedAt ? new Date(area.updatedAt) : now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]);

  const productPages = products.map((product) => ({
    url: `${SITE.url}/products/${product.category}/${product.slug}`,
    lastModified: product.updatedAt ? new Date(product.updatedAt) : now,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  return [...staticPages, ...areaPages, ...productPages];
}
