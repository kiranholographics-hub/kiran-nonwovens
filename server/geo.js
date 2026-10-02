import geoip from 'geoip-lite';

const names = new Intl.DisplayNames(['en'], { type: 'region' });

/**
 * The visitor's country name (e.g. "United States") from their IP, looked up
 * in an offline database on this server — nothing is sent to a third party.
 * Returns '' when it cannot be told (private/unknown address). The IP address
 * is used for this one lookup and is never stored.
 */
export function countryOf(ip) {
  try {
    const code = geoip.lookup(String(ip || '').replace(/^::ffff:/, ''))?.country;
    return code ? names.of(code) || code : '';
  } catch {
    return '';
  }
}
