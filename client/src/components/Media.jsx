import { IMAGES_READY } from '../lib.js';
import './Media.css';

/**
 * A picture slot.
 *
 * No real photography exists yet, so this paints the theme's woven-texture
 * placeholder and names what belongs there. Every slot already points at its
 * final path — drop the files into public/images and flip IMAGES_READY in
 * src/lib.js, and real photos appear everywhere with no other change.
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

  if (IMAGES_READY && src) {
    return (
      <div className={cls} style={style}>
        <img className="media__img" src={src} alt={alt} loading="lazy" />
      </div>
    );
  }

  return (
    <div className={cls} style={style} role="img" aria-label={label || alt}>
      <svg
        viewBox="0 0 600 500"
        preserveAspectRatio="xMidYMid slice"
        className="media__texture"
        aria-hidden="true"
        focusable="false"
      >
        <rect width="100%" height="100%" filter={`url(#nwTex${variant})`} />
      </svg>
      {label ? <span className="media__label">{label}</span> : null}
    </div>
  );
}
