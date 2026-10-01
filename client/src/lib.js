/**
 * Site-wide constants and the things still pending from Sir.
 *
 * Every value marked PLACEHOLDER renders on the page in visibly unfinished
 * form (square brackets) on purpose — nothing here is guessed. Replace the
 * value and it flows through the whole site. See OWNER_INPUTS.md.
 */

export const SITE = {
  name: 'Kiran Nonwovens',
  /** PLACEHOLDER — real domain pending. Override with VITE_SITE_URL. */
  url: import.meta.env.VITE_SITE_URL || 'http://localhost:3100',
  tagline: 'Needle punched & thermal bonded nonwovens',
  /** Home-page <title>: the phrase buyers search, then the brand. */
  homeTitle: 'Nonwoven Felt & Geotextile Manufacturer | Kiran Nonwovens',
  /** Default social-share image (1200×630), used when a page has none. */
  ogImage: '/images/og-default.jpg',
  locale: 'en_IN',
  description:
    'Needle punched and thermal bonded nonwoven felt and geotextiles for civil, automotive, apparel and industrial use. 100–1200 GSM, up to 5.2 m wide. Export from India.',
};

/** Contact details. Address, phone and email are confirmed; the WhatsApp
 *  number, working hours and the factory address are still pending from Sir
 *  (a bracketed value renders as a visible placeholder). */
export const CONTACT = {
  address: '221-C, Frontier Colony, Opposite PNB Bank, Adarsh Nagar, Jaipur – 302004',
  /** Same address, split out for schema.org PostalAddress. */
  addressParts: {
    streetAddress: '221-C, Frontier Colony, Opposite PNB Bank, Adarsh Nagar',
    addressLocality: 'Jaipur',
    addressRegion: 'Rajasthan',
    postalCode: '302004',
    addressCountry: 'IN',
  },
  phone: '+91 78781 09226',
  phoneHref: 'tel:+917878109226',
  whatsapp: '[WhatsApp — pending]',
  email: 'kirannonwovens@gmail.com',
  emailHref: 'mailto:kirannonwovens@gmail.com',
  hours: '[Working hours — pending]',
};

/** PLACEHOLDER — global-presence figures pending from Sir. */
export const PRESENCE = [
  { value: '[X]', label: 'Years in manufacturing' },
  { value: '[X]', label: 'Export countries' },
  { value: '[X]', label: 'Tons produced annually' },
];

/** True for any string that is still a bracketed placeholder. */
export const isPlaceholder = (value) =>
  typeof value === 'string' && value.trim().startsWith('[');

/**
 * Photography switch.
 *
 * No plant photos, product photos or hero video exist yet (pending from Sir —
 * see OWNER_INPUTS.md). While this is `false`, every picture slot renders the
 * theme's texture placeholder with a caption naming the shot that belongs
 * there.
 *
 * To go live with real photography: drop the files into client/public/images/
 * at the paths the catalogue already references, then flip this to `true`.
 */
export const IMAGES_READY = false;

/**
 * Video switch — the same idea as IMAGES_READY, for the cinematic backdrops.
 *
 * While this is `false`, every video slot paints the theme's texture with a
 * caption naming the clip that belongs there. To go live: drop the files into
 * client/public/videos/ at the paths in VIDEOS below (see
 * public/videos/README.md for size and format notes), then flip this to
 * `true`. A slot whose file is missing simply falls back to its poster/texture.
 */
export const VIDEOS_READY = false;

/** One entry per backdrop. `mp4` is required, `webm` and `poster` optional. */
export const VIDEOS = {
  /** Live: the company's own hero film, in two cuts — landscape for desktop,
   *  portrait for phones. `ready: true` switches this one video on without
   *  waiting for VIDEOS_READY (the other clips are still to come). */
  hero: {
    ready: true,
    mp4: '/videos/hero-desktop.mp4',
    mobileMp4: '/videos/hero-mobile.mp4',
    poster: '/videos/hero-desktop.webp',
    mobilePoster: '/videos/hero-mobile.webp',
    label: 'Hero video — fibre and felt close-ups',
  },
  /** Live: the finished-rolls / warehouse end of the production film. Used
   *  for the closing band on Home and the line band on Manufacturing. */
  cta: {
    ready: true,
    mp4: '/videos/closing-desktop.mp4',
    mobileMp4: '/videos/closing-mobile.mp4',
    poster: '/videos/closing-desktop.webp',
    mobilePoster: '/videos/closing-mobile.webp',
    label: 'Closing video — finished rolls, dispatch',
  },
  products: {
    mp4: '/videos/products.mp4',
    poster: '/images/hero/products-poster.jpg',
    label: 'Products banner video — felt close-ups',
  },
  product: {
    mp4: '/videos/product.mp4',
    poster: '/images/hero/products-poster.jpg',
    label: 'Product banner video — felt close-up',
  },
  about: {
    mp4: '/videos/about.mp4',
    poster: '/images/plant/overview.jpg',
    label: 'About banner video — plant walk-through',
  },
  /** Live: the company's production-line film, landscape + portrait cuts. */
  manufacturing: {
    ready: true,
    mp4: '/videos/manufacturing-desktop.mp4',
    mobileMp4: '/videos/manufacturing-mobile.mp4',
    poster: '/videos/manufacturing-desktop.webp',
    mobilePoster: '/videos/manufacturing-mobile.webp',
    label: 'Manufacturing banner video — production line',
  },
  contact: {
    mp4: '/videos/contact.mp4',
    poster: '/images/plant/entrance.jpg',
    label: 'Contact banner video — plant / office',
  },
};

/** Per-business-area banner video: /videos/business-areas/<slug>.mp4 */
export const areaVideo = (slug, name) => ({
  mp4: `/videos/business-areas/${slug}.mp4`,
  poster: `/images/business-areas/${slug}.jpg`,
  label: `${name} banner video`,
});


/* ── Structured data (schema.org JSON-LD) ─────────────────────────────────
 * Built only from facts already on the site. Nothing here claims a
 * certification, a founding year, a capacity or a street address — those are
 * still pending from the company. */

const abs = (path) => (path.startsWith('http') ? path : `${SITE.url}${path}`);

/** BreadcrumbList from the same [{ to?, label }] trail the breadcrumbs use. */
export function breadcrumbLd(trail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.to ? { item: abs(item.to) } : {}),
    })),
  };
}

/** FAQPage from [{ q, a }]. Answers are plain text. */
export function faqLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

/** A list page (category, all products, guides) as a CollectionPage + ItemList. */
export function collectionLd({ name, description, path, items }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description,
    url: abs(path),
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: items.map((it, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: it.name,
        url: abs(it.path),
      })),
    },
  };
}

/** The company, with the contact points that are confirmed. */
export function organizationLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    logo: abs('/images/brand/logo-mark.png'),
    description: SITE.description,
    email: CONTACT.email,
    telephone: '+917878109226',
    address: { '@type': 'PostalAddress', ...CONTACT.addressParts },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        telephone: '+917878109226',
        email: CONTACT.email,
        availableLanguage: ['English', 'Hindi'],
      },
    ],
    knowsAbout: [
      'Needle punched nonwoven felt',
      'Thermal bonded nonwoven fabric',
      'Geotextiles',
      'Automotive NVH felt',
      'Nonwoven fabric for apparel and footwear',
    ],
  };
}

export function websiteLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    inLanguage: 'en',
    publisher: { '@id': `${SITE.url}/#organization` },
  };
}
