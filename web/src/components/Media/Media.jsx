import Image from 'next/image';
import { IMAGES_READY } from '@/lib/images';
import styles from './Media.module.css';

/**
 * A picture slot.
 *
 * No real photography exists yet, so this paints the theme's woven-texture
 * placeholder and names what belongs there. Every slot already points at its
 * final path — drop the files in under /public/images and flip IMAGES_READY in
 * src/lib/images.js, and real photos appear everywhere with no other change.
 */
export default function Media({
  src,
  alt = '',
  label,
  variant = 1,
  tone = 'dark',
  ratio,
  minHeight,
  sizes = '(max-width: 900px) 100vw, 50vw',
  priority = false,
  className = '',
}) {
  const style = {};
  if (ratio) style.aspectRatio = ratio;
  if (minHeight) style.minHeight = minHeight;

  const frameClass = [
    styles.frame,
    tone === 'light' ? styles.frameLight : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (IMAGES_READY && src) {
    return (
      <div className={frameClass} style={style}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={styles.image}
        />
      </div>
    );
  }

  return (
    <div className={frameClass} style={style} role="img" aria-label={label || alt}>
      <svg
        viewBox="0 0 600 500"
        preserveAspectRatio="xMidYMid slice"
        className={styles.texture}
        aria-hidden="true"
        focusable="false"
      >
        <rect width="100%" height="100%" filter={`url(#nwTex${variant})`} />
      </svg>
      {label ? <span className={styles.label}>{label}</span> : null}
    </div>
  );
}
