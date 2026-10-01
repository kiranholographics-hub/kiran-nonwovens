import { useEffect, useRef, useState } from 'react';
import {
  HERO_PHOTOS_READY,
  SHOW_PLACEHOLDER_LABELS,
  VIDEOS_READY,
} from '../lib.js';
import './VideoBackdrop.css';

/** "/videos/hero.mp4" → "/videos/hero-mobile.mp4"; same for posters (.jpg). */
const mobileName = (p) => (p ? p.replace(/(\.[a-z0-9]+)$/i, '-mobile$1') : p);

/**
 * A full-bleed background: looping muted video, still photo, or the theme
 * texture. Fills its positioned parent (position: absolute; inset: 0).
 *
 * Desktop and mobile get different clips. For a slot whose video is
 * /videos/hero.mp4 the phone clip is /videos/hero-mobile.mp4, and the poster
 * /images/hero/home.jpg has /images/hero/home-mobile.jpg. Which one plays is
 * decided by the banner's own shape — taller than wide gets the portrait clip —
 * so a phone held sideways switches to the landscape one. If a -mobile file is
 * missing the desktop one is used instead.
 *
 * What it shows, bottom layer to top:
 *   1. The poster photo when there is one (this is what paints first, before
 *      any video bytes arrive, and what stays for reduced-motion / data-saver
 *      visitors); otherwise the woven texture.
 *   2. The video, which fades in once it is actually playing.
 *
 * Reduced motion and data-saver never download the video. Off-screen videos
 * pause. Off-screen backdrops (eager = false) only load when they near the
 * viewport. A missing file falls back one layer instead of breaking.
 */
function Backdrop({
  video,
  variant = 1,
  eager = false,
  className = '',
  onVideoFailed,
}) {
  const ref = useRef(null);
  const [videoFailed, setVideoFailed] = useState(false);
  const [posterFailed, setPosterFailed] = useState(false);
  const [live, setLive] = useState(eager);
  const [layout, setLayout] = useState(null); // 'desktop' | 'mobile', set after mount
  const [calm, setCalm] = useState(false); // reduced motion / data-saver
  // Which layout's clip is currently playing; a new clip starts un-faded.
  const [playingLayout, setPlayingLayout] = useState(null);
  const playing = playingLayout === layout;

  const wantVideo = VIDEOS_READY && !!video?.mp4 && !videoFailed;
  const posterDesktop = video?.poster;
  const posterMobile = mobileName(posterDesktop);
  const showPoster =
    !!posterDesktop && !posterFailed && (VIDEOS_READY || HERO_PHOTOS_READY);
  const showVideo = wantVideo && live && !!layout && !calm;

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

  // Pick the clip by the banner's shape, and keep it right if the shape changes.
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    setCalm(
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
        !!navigator.connection?.saveData
    );
    const apply = () => {
      const { width, height } = el.getBoundingClientRect();
      if (width && height) setLayout(width < height ? 'mobile' : 'desktop');
    };
    apply();
    if (typeof ResizeObserver === 'undefined') return undefined;
    const ro = new ResizeObserver(apply);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // A poster that already failed before hydration never fires React's onError.
  useEffect(() => {
    const img = ref.current?.querySelector('img.vbd__poster');
    if (img && img.complete && img.naturalWidth === 0) setPosterFailed(true);
  }, []);

  // Pause the clip while it is off-screen (saves battery and CPU).
  useEffect(() => {
    const el = ref.current;
    const v = el?.querySelector('video');
    if (!v || typeof IntersectionObserver === 'undefined') return undefined;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) v.play().catch(() => {});
      else v.pause();
    });
    io.observe(el);
    return () => io.disconnect();
  }, [showVideo, layout]);

  const fail = () => {
    setVideoFailed(true);
    onVideoFailed?.();
  };

  return (
    <div ref={ref} className={`vbd ${className}`.trim()} aria-hidden="true">
      {showPoster ? (
        <picture>
          <source media="(max-aspect-ratio: 1/1)" srcSet={posterMobile} />
          <img
            className="vbd__poster"
            src={posterDesktop}
            alt=""
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
            onError={() => setPosterFailed(true)}
          />
        </picture>
      ) : (
        <>
          <svg
            className="vbd__texture"
            viewBox="0 0 600 500"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <rect width="100%" height="100%" filter={`url(#nwTex${variant})`} />
          </svg>
          {SHOW_PLACEHOLDER_LABELS && video?.label ? (
            <span className="vbd__label">{video.label} — pending</span>
          ) : null}
        </>
      )}

      {showVideo ? (
        <video
          key={layout}
          className={`vbd__video${playing ? ' is-playing' : ''}`}
          autoPlay
          muted
          loop
          playsInline
          preload={eager ? 'auto' : 'metadata'}
          poster={
            showPoster
              ? layout === 'mobile'
                ? posterMobile
                : posterDesktop
              : undefined
          }
          onPlaying={() => setPlayingLayout(layout)}
          onError={fail}
        >
          {layout === 'mobile' ? (
            <source src={mobileName(video.mp4)} type="video/mp4" />
          ) : null}
          <source src={video.mp4} type="video/mp4" onError={fail} />
        </video>
      ) : null}
    </div>
  );
}

/**
 * The public component. Same as the backdrop above, plus an optional
 * `fallback`: another VIDEOS entry to play when this slot's own video file
 * is missing. That lets a page open on a real clip from day one (say the
 * Products page borrowing the home clip) and switch to its own the moment its
 * file is dropped into public/videos.
 */
export default function VideoBackdrop({ fallback, ...props }) {
  const [primaryFailed, setPrimaryFailed] = useState(false);
  if (primaryFailed && fallback) {
    return <Backdrop key="fallback" {...props} video={fallback} />;
  }
  return (
    <Backdrop
      key="primary"
      {...props}
      onVideoFailed={() => setPrimaryFailed(true)}
    />
  );
}
