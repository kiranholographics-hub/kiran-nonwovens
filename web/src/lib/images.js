/**
 * Photography switch.
 *
 * No plant photos, product photos or hero video exist yet (pending from Sir —
 * see OWNER_INPUTS.md). While this is `false`, every picture slot
 * renders the theme's texture placeholder with a caption naming the shot that
 * belongs there.
 *
 * To go live with real photography:
 *   1. Drop the files into web/public/images/ at the paths the catalogue
 *      already references (e.g. /images/products/<slug>.jpg).
 *   2. Flip this to `true`.
 * No other code changes are needed.
 */
export const IMAGES_READY = false;
