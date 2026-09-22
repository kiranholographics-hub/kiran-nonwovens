import { SITE } from './site';

/**
 * Builds a Next.js Metadata object from a page's own SEO fields.
 * Every product and business area carries its own `seo.title` and
 * `seo.metaDescription`, so no two pages share a title.
 */
export function pageMetadata({ title, description, path = '/', images }) {
  const url = `${SITE.url}${path}`;
  const desc = description || SITE.description;
  return {
    title,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: desc,
      url,
      siteName: SITE.name,
      type: 'website',
      ...(images?.length ? { images } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: desc,
    },
  };
}
