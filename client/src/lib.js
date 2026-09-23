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
  description:
    'Needle punched and thermal bonded nonwoven felt and geotextiles for civil works, automotive, apparel, footwear and industrial use. 100–1200 GSM, roll widths to 5.2 m. Export supply from India.',
};

/** PLACEHOLDER — contact details pending from Sir. */
export const CONTACT = {
  address: '[Plot No. 15, Ram Krishna Marg, Sodala, Jaipur — to confirm]',
  phone: '[Phone — pending]',
  whatsapp: '[WhatsApp — pending]',
  email: '[Email — pending]',
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
