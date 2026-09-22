'use client';

import { useId, useRef, useState, useSyncExternalStore } from 'react';
import styles from './TabPanel.module.css';

const subscribeToHash = (onChange) => {
  window.addEventListener('hashchange', onChange);
  return () => window.removeEventListener('hashchange', onChange);
};

const readHash = () => window.location.hash.replace('#', '').toLowerCase();
const noHash = () => '';

/**
 * Tabs with full keyboard support (arrows, Home/End) per the WAI-ARIA tabs
 * pattern. All panels are rendered into the DOM and the inactive ones hidden,
 * so crawlers see every tab's content — Applications and Specifications are
 * exactly the text this site needs indexed.
 *
 * With `deepLink`, the URL hash selects a tab, so a header link to
 * /business-areas/geotextile#applications lands on the right one.
 * useSyncExternalStore hands the server an empty hash, so hydration matches
 * and only the client re-reads the real one.
 */
export default function TabPanel({ tabs, deepLink = false }) {
  const base = useId().replace(/:/g, '');
  const tabRefs = useRef([]);

  const hash = useSyncExternalStore(subscribeToHash, readHash, noHash);
  const hashIndex = deepLink ? tabs.findIndex((t) => t.id === hash) : -1;

  const [picked, setPicked] = useState(null);

  // A hash that names a tab wins, until the visitor clicks a different tab.
  // A hash that names something else on the page (#enquiry) leaves tabs alone.
  const active =
    hashIndex >= 0 && picked?.hash !== hash
      ? hashIndex
      : (picked?.index ?? (hashIndex >= 0 ? hashIndex : 0));

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
      <div className={styles.tabs} role="tablist" onKeyDown={onKeyDown}>
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
            className={styles.tab}
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
          className={styles.panel}
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
    <ul className={styles.list}>
      {items.map((item, i) => (
        <li key={typeof item === 'string' ? item : i}>{item}</li>
      ))}
    </ul>
  );
}
