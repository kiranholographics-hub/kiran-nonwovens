/**
 * Images uploaded from the /hq panel. Only JPEG, PNG and WebP are accepted,
 * and the file's own first bytes are checked rather than trusting the
 * declared type, so a script or SVG cannot be uploaded dressed as a picture.
 */
export const MAX_IMAGE_BYTES = 3 * 1024 * 1024;

export function sniffImage(buf) {
  if (!Buffer.isBuffer(buf) || buf.length < 12) return '';
  if (buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) return 'image/jpeg';
  if (buf.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) {
    return 'image/png';
  }
  if (buf.subarray(0, 4).toString('latin1') === 'RIFF' && buf.subarray(8, 12).toString('latin1') === 'WEBP') {
    return 'image/webp';
  }
  return '';
}
