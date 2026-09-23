import { useEffect, useId, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './TabPanel.css';

/**
 * Tabs with full keyboard support (arrows, Home/End) per the WAI-ARIA tabs
 * pattern. All panels are rendered into the DOM and the inactive ones hidden,
 * so crawlers see every tab's content — Applications and Specifications are
 * exactly the text this site needs indexed.
 *
 * With `deepLink`, the URL hash selects a tab, so a header link to
 * /business-areas/geotextile#applications lands on the right one.
 */
export default function TabPanel({ tabs, deepLink = false }) {
  const base = useId().replace(/:/g, '');
  const tabRefs = useRef([]);

  // The hash is deliberately empty on the first render.
  //
  // The prerendered page has no hash, so it always shows the first tab. React
  // does not repair attribute differences while hydrating — it keeps the
  // server's `aria-selected` and `hidden` — so a first render that picked a
  // different tab left the markup showing tab one while the component thought
  // it was on tab two. Reading the hash only after mount makes the first
  // render agree with the HTML, and the tab then switches as an ordinary
  // update, which React does apply.
  const routerHash = useLocation().hash;
  const [hashAfterMount, setHashAfterMount] = useState('');

  useEffect(() => {
    const sync = () => setHashAfterMount(window.location.hash);
    sync(); // re-runs on in-app navigation too, via the dependency below
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, [routerHash]);

  const hash = hashAfterMount.replace('#', '').toLowerCase();

  const hashIndex = deepLink ? tabs.findIndex((t) => t.id === hash) : -1;
  const [picked, setPicked] = useState(null);

  // A hash that names a tab wins, until the visitor clicks a different tab.
  // A hash that names something else on the page (#enquiry) leaves tabs alone.
  const active =
    hashIndex >= 0 && picked?.hash !== hash
      ? hashIndex
      : picked?.index ?? (hashIndex >= 0 ? hashIndex : 0);

  const setActive = (index) => setPicked({ hash, index });

  const onKeyDown = (e) => {
    const last = tabs.length - 1;
    let next = null;
    if (e.key === 'ArrowRight') next = active === last ? 0 : active + 1;
    else if (e.key === 'ArrowLeft') next = active === 0 ? last : active - 1;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = last;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div>
      <div className="tabs" role="tablist" onKeyDown={onKeyDown}>
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            id={`${base}-tab-${tab.id}`}
            aria-selected={active === i}
            aria-controls={`${base}-panel-${tab.id}`}
            tabIndex={active === i ? 0 : -1}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            className="tabs__tab"
            onClick={() => setActive(i)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {tabs.map((tab, i) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`${base}-panel-${tab.id}`}
          aria-labelledby={`${base}-tab-${tab.id}`}
          hidden={active !== i}
          tabIndex={0}
          className="tabs__panel"
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}

/** The rust-dashed list used inside Applications / Downloads panels. */
export function RuledList({ items }) {
  return (
    <ul className="ruled-list">
      {items.map((item, i) => (
        <li key={typeof item === 'string' ? item : i}>{item}</li>
      ))}
    </ul>
  );
}
