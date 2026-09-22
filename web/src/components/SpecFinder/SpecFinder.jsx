'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { PLANT } from '@/data/catalog';
import PlaceholderNote from '@/components/PlaceholderNote/PlaceholderNote';
import styles from './SpecFinder.module.css';

const ANY = '';
const MAX_RESULTS = 6;

/**
 * Filters the catalogue by industry, fibre and GSM.
 *
 * Note on GSM: per-product ranges are still to be confirmed, so products whose
 * specs are unconfirmed are matched against the plant's full 100–1200
 * capability. The note under the results says so rather than implying the
 * filter is tighter than it is.
 */
export default function SpecFinder({ businessAreas, products }) {
  const [industry, setIndustry] = useState(ANY);
  const [fibre, setFibre] = useState(ANY);
  const [gsm, setGsm] = useState(300);

  const matches = useMemo(() => {
    return products.filter((p) => {
      if (industry && p.category !== industry) return false;
      if (fibre && !(p.specs?.fibre || []).includes(fibre)) return false;
      const min = p.specs?.gsmMin ?? PLANT.gsmMin;
      const max = p.specs?.gsmMax ?? PLANT.gsmMax;
      return gsm >= min && gsm <= max;
    });
  }, [products, industry, fibre, gsm]);

  const areaName = (slug) =>
    businessAreas.find((b) => b.slug === slug)?.name || slug;

  const anyUnconfirmed = matches.some((p) => !p.gsmConfirmed);

  return (
    <>
      <div className={styles.finder}>
        <div className={styles.field}>
          <label htmlFor="sf-industry">Industry</label>
          <select
            id="sf-industry"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
          >
            <option value={ANY}>All industries</option>
            {businessAreas.map((area) => (
              <option key={area.slug} value={area.slug}>
                {area.name}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label htmlFor="sf-fibre">Fibre</label>
          <select
            id="sf-fibre"
            value={fibre}
            onChange={(e) => setFibre(e.target.value)}
          >
            <option value={ANY}>Any fibre</option>
            {PLANT.fibres.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label htmlFor="sf-gsm">
            GSM — <span className={styles.gsmValue}>{gsm}</span>
          </label>
          <input
            id="sf-gsm"
            type="range"
            min={PLANT.gsmMin}
            max={PLANT.gsmMax}
            step={25}
            value={gsm}
            onChange={(e) => setGsm(Number(e.target.value))}
          />
        </div>
      </div>

      <p className={styles.summary} aria-live="polite">
        {matches.length} product{matches.length === 1 ? '' : 's'} match
        {matches.length === 1 ? 'es' : ''} — {fibre || 'any fibre'}, {gsm} GSM
        {industry ? `, ${areaName(industry)}` : ''}
      </p>

      <div className={styles.results}>
        {matches.length ? (
          matches.slice(0, MAX_RESULTS).map((p) => (
            <Link key={p.slug} href={`/products/${p.category}/${p.slug}`}>
              <span>
                <h3>{p.name}</h3>
                <small>{areaName(p.category)}</small>
              </span>
              <span className={styles.go}>View →</span>
            </Link>
          ))
        ) : (
          <p className={styles.none}>
            Nothing in the standard range matches that combination —{' '}
            <Link href="/products/industrial/customised-nonwoven-solutions">
              we develop custom material to spec
            </Link>
            .
          </p>
        )}
      </div>

      {matches.length > MAX_RESULTS ? (
        <Link href="/products" className={styles.more}>
          See all {matches.length} products →
        </Link>
      ) : null}

      {anyUnconfirmed ? (
        <PlaceholderNote>
          These materials are made to order, so results are matched against the
          plant&apos;s full {PLANT.gsmLabel} GSM capability rather than a fixed
          per-product range. Send an enquiry with the GSM you need and we will
          confirm it.
        </PlaceholderNote>
      ) : null}
    </>
  );
}
