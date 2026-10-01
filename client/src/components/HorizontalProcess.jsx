import { useEffect, useRef } from 'react';
import './HorizontalProcess.css';

/**
 * The page's one orchestrated scroll moment: a dark band that pins to the
 * screen while vertical scrolling slides the process steps sideways.
 *
 * How it works: the outer section is made (100vh + horizontal distance) tall;
 * the inner stage is `position: sticky`, so it stays put while the section
 * scrolls past. Scroll progress through that extra height drives a translateX
 * on the track and the width of the progress rail. No re-renders — the values
 * are written straight to the DOM in a rAF loop.
 *
 * Below 900px, or with reduced motion, none of that runs: the track is a
 * normal horizontally scrollable, snap-aligned row.
 */
export default function HorizontalProcess({ title, steps }) {
  const outerRef = useRef(null);
  const trackRef = useRef(null);
  const fillRef = useRef(null);

  useEffect(() => {
    const outer = outerRef.current;
    const track = trackRef.current;
    const fill = fillRef.current;
    if (!outer || !track || !fill) return undefined;

    const mq = window.matchMedia(
      '(min-width: 900px) and (prefers-reduced-motion: no-preference)'
    );
    let raf = 0;
    let distance = 0;

    const measure = () => {
      if (!mq.matches) {
        // Sideways-scrolling row: it must be reachable by keyboard.
        track.setAttribute('tabindex', '0');
        distance = 0;
        outer.style.height = '';
        track.style.transform = '';
        fill.style.transform = '';
        outer.classList.remove('hp--pinned');
        return;
      }
      // Pinned mode moves with the page scroll, so the track is not a
      // scrollable region and should not take focus.
      track.removeAttribute('tabindex');
      outer.classList.add('hp--pinned');
      distance = Math.max(0, track.scrollWidth - outer.clientWidth);
      outer.style.height = `${window.innerHeight + distance}px`;
      apply();
    };

    function apply() {
      raf = 0;
      if (!distance) return;
      const rect = outer.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, -rect.top / distance));
      track.style.transform = `translate3d(${-p * distance}px, 0, 0)`;
      fill.style.transform = `scaleX(${p})`;
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(apply);
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', measure);
    mq.addEventListener('change', measure);
    // Fonts load after mount and change the track's width.
    document.fonts?.ready.then(measure);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', measure);
      mq.removeEventListener('change', measure);
    };
  }, []);

  return (
    <section
      className="hp"
      ref={outerRef}
      aria-labelledby="hp-title"
    >
      <div className="hp__stage">
        <div className="wrap hp__head">
          <h2 id="hp-title">{title}</h2>
        </div>

        <div className="wrap hp__rail" aria-hidden="true">
          <span>Start</span>
          <span className="hp__rail-line">
            <span className="hp__rail-fill" ref={fillRef} />
          </span>
          <span>{steps.length} steps</span>
        </div>

        <ol
          className="hp__track"
          ref={trackRef}
          tabIndex={0}
          aria-label="Process steps"
        >
          {steps.map((step, i) => (
            <li
              className="hp__step"
              key={step.title}
              data-num={String(i + 1).padStart(2, '0')}
            >
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              {step.tag ? <span className="hp__tag">{step.tag}</span> : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
