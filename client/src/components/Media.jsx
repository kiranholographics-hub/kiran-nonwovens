import { useEffect, useRef, useState } from 'react';
import { SHOW_PLACEHOLDER_LABELS } from '../lib.js';
import './Media.css';

/**
 * A picture slot.
 *
 * Every slot points at its final path (public/images/...). If a photo exists
 * there it is shown; if not, the slot paints the theme's woven texture instead
 * of a broken image, so photos can be added one at a time with no code change
 * and no on/off switch.
 */
export default function Media({
  src,
  alt = '',
  label,
  variant = 1,
  tone = 'dark',
  ratio,
  minHeight,
  className = '',
}) {
  // Remember *which* file failed, so moving to another product (same component
  // instance, different src) tries the new photo instead of staying on texture.
  const [failedSrc, setFailedSrc] = useState(null);
  const imgRef = useRef(null);

  // A photo that already failed before hydration never fires React's onError.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setFailedSrc(src);
  }, [src]);

  const style = {};
  if (ratio) style.aspectRatio = ratio;
  if (minHeight) style.minHeight = `${minHeight}px`;

  const cls = [
    'media',
    tone === 'light' ? 'media--light' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (src && failedSrc !== src) {
    return (
      <div className={cls} style={style}>
        <img
          ref={imgRef}
          className="media__img"
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => setFailedSrc(src)}
        />
      </div>
    );
  }

  // Without real photos the slot is decoration, so it is hidden from screen
  // readers — unless the team has turned the captions on to see what is missing.
  const decorative = !SHOW_PLACEHOLDER_LABELS;

  return (
    <div
      className={cls}
      style={style}
      {...(decorative
        ? { 'aria-hidden': 'true' }
        : { role: 'img', 'aria-label': label || alt })}
    >
      <svg
        viewBox="0 0 600 500"
        preserveAspectRatio="xMidYMid slice"
        className="media__texture"
        aria-hidden="true"
        focusable="false"
      >
        <rect width="100%" height="100%" filter={`url(#nwTex${variant})`} />
      </svg>
      {SHOW_PLACEHOLDER_LABELS && label ? (
        <span className="media__label">{label}</span>
      ) : null}
    </div>
  );
}
