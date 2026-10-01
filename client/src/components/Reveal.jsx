import { useEffect, useRef } from 'react';

/**
 * Fade-up on first scroll into view.
 *
 * Deliberately conservative: the element is fully visible in the prerendered
 * HTML and for anyone without JavaScript. After mount, only an element that is
 * still below the fold gets hidden and then revealed — anything already on
 * screen is left alone, so nothing flashes. Reduced-motion visitors never see
 * the effect (see .reveal in global.css).
 */
export default function Reveal({
  as: Tag = 'div',
  delay = 0,
  className = '',
  children,
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight * 0.92) return undefined; // already in view

    el.classList.add('reveal--hidden');
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.classList.remove('reveal--hidden');
        io.disconnect();
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`.trim()}
      style={delay ? { '--reveal-delay': `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
