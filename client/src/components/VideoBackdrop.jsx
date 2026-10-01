import { useEffect, useRef, useState } from 'react';
import { IMAGES_READY, VIDEOS_READY } from '../lib.js';
import './VideoBackdrop.css';

const MOBILE_QUERY = '(max-width: 899px)';

/**
 * A full-bleed background: looping muted video, with a poster / texture
 * fallback. Fills its positioned parent (position: absolute; inset: 0).
 *
 *  - VIDEOS_READY false  → the theme texture, slowly drifting, with a caption
 *    naming the clip that belongs there (same convention as <Media>).
 *  - VIDEOS_READY true, or `ready: true` on this one video → <video autoplay
 *    muted loop playsinline>. If the file is missing or fails, it drops back
 *    to the poster, then the texture.
 *  - `mobileMp4` / `mobilePoster` → a separate portrait cut for phones. Such a
 *    video is chosen in the browser after load, so a phone never downloads
 *    the desktop file (and vice versa); the prerendered HTML carries only the
 *    poster frames.
 *  - Reduced motion / data-saver → the video is not started; the poster stays.
 *  - Off-screen backdrops (eager = false) only load when they near the viewport.
 */
export default function VideoBackdrop({
  video,
  variant = 1,
  eager = false,
  className = '',
  showLabel = true,
}) {
  const ref = useRef(null);
  const [failed, setFailed] = useState(false);
  const [live, setLive] = useState(eager);
  // For two-cut videos: null until the browser has picked 'mobile'/'desktop'.
  const [cut, setCut] = useState(null);
  const [calm, setCalm] = useState(false); // reduced motion or data saver

  const ready = VIDEOS_READY || video?.ready === true;
  const twoCuts = Boolean(video?.mobileMp4);
  const useVideo = ready && video?.mp4 && !failed && !calm;
  const usePoster = (IMAGES_READY || video?.ready === true) && video?.poster;

  // Lazy-load: only attach sources when the backdrop is about to be seen.
  useEffect(() => {
    if (eager || live) return undefined;
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setLive(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLive(true);
          io.disconnect();
        }
      },
      { rootMargin: '300px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [eager, live]);

  // Reduced motion / data saver: keep the poster, never start the film.
  // Two-cut videos: pick the cut for this screen, and follow resizes.
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const saver = navigator.connection?.saveData === true;
    const mq = window.matchMedia(MOBILE_QUERY);
    const decide = () => {
      if (reduce || saver) setCalm(true);
      else if (twoCuts) setCut(mq.matches ? 'mobile' : 'desktop');
    };
    decide();
    if (reduce || saver || !twoCuts) return undefined;
    mq.addEventListener('change', decide);
    return () => mq.removeEventListener('change', decide);
  }, [twoCuts]);

  const src = twoCuts
    ? cut === 'mobile'
      ? video.mobileMp4
      : cut === 'desktop'
        ? video.mp4
        : null
    : video?.mp4;

  const poster = usePoster ? (
    video.mobilePoster ? (
      <picture>
        <source media={MOBILE_QUERY} srcSet={video.mobilePoster} />
        <img className="vbd__video" src={video.poster} alt="" />
      </picture>
    ) : (
      <img className="vbd__video" src={video.poster} alt="" loading="lazy" />
    )
  ) : null;

  const texture = (
    <>
      <svg
        className="vbd__texture"
        viewBox="0 0 600 500"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <rect width="100%" height="100%" filter={`url(#nwTex${variant})`} />
      </svg>
      {showLabel && video?.label && !ready ? (
        <span className="vbd__label">{video.label} — pending</span>
      ) : null}
    </>
  );

  return (
    <div ref={ref} className={`vbd ${className}`.trim()} aria-hidden="true">
      {poster || texture}
      {useVideo && live && src ? (
        <video
          key={src}
          className="vbd__video"
          src={twoCuts ? src : undefined}
          autoPlay
          muted
          loop
          playsInline
          preload={eager ? 'auto' : 'metadata'}
          poster={usePoster && !twoCuts ? video.poster : undefined}
          onError={() => setFailed(true)}
        >
          {twoCuts ? null : (
            <>
              {video.webm ? <source src={video.webm} type="video/webm" /> : null}
              <source src={video.mp4} type="video/mp4" />
            </>
          )}
        </video>
      ) : null}
    </div>
  );
}
