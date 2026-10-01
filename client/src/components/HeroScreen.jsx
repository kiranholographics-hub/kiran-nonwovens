import { useEffect, useRef } from 'react';
import VideoBackdrop from './VideoBackdrop.jsx';
import './HeroScreen.css';

/**
 * The full-screen opening of a page: a looping video fills the whole first
 * screen, the navbar floats transparent over it, and the only text is a small
 * label, two buttons and a one-line tag at the bottom — the video does the
 * talking. Used by the Home and Manufacturing pages.
 *
 * Props
 *   video       a VIDEOS entry (see lib.js)
 *   fallback    another VIDEOS entry to play if `video`'s own file is missing
 *   variant     which woven texture shows until a video / photo exists
 *   eyebrow     the page's <h1>, styled as a small tracked label
 *   foot        the one-line tag at the bottom left
 *   scrollHref  where the "Scroll" cue jumps to (the next section's id)
 *   children    the buttons
 *
 * The Header (components/Header.jsx) must list the page's route in
 * OVERLAY_ROUTES so the navbar turns transparent over this hero.
 */
export default function HeroScreen({
  video,
  fallback,
  variant = 1,
  eyebrow,
  foot,
  scrollHref = '#main',
  children,
}) {
  const ref = useRef(null);

  // Parallax: as you scroll off the hero the video drifts slower than the page
  // and the copy eases away. One CSS variable, written in a rAF loop.
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const p = Math.min(1, Math.max(0, window.scrollY / el.offsetHeight));
      el.style.setProperty('--hero-p', p.toFixed(3));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <section className="hero-screen" ref={ref}>
      <VideoBackdrop
        video={video}
        fallback={fallback}
        variant={variant}
        eager
        className="hero-screen__media"
      />
      <div className="hero-screen__shade" aria-hidden="true" />
      <div className="wrap hero-screen__inner">
        <div className="hero-screen__copy">
          <h1 className="hero-screen__eyebrow">
            <span className="hero-screen__line" aria-hidden="true" />
            {eyebrow}
          </h1>
          <div className="cta-row">{children}</div>
        </div>
        <div className="hero-screen__foot">
          {foot ? (
            <span className="hero-screen__tag">
              <i aria-hidden="true" />
              {foot}
            </span>
          ) : (
            <span />
          )}
          <a href={scrollHref} className="hero-screen__scroll">
            Scroll
            <i aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
