import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import Seo from '../components/Seo.jsx';
import VideoBackdrop from '../components/VideoBackdrop.jsx';
import StatsBand from '../components/StatsBand.jsx';
import HorizontalProcess from '../components/HorizontalProcess.jsx';
import SpecFinder from '../components/SpecFinder.jsx';
import BusinessAreaCard, {
  BusinessAreaGrid,
} from '../components/BusinessAreaCard.jsx';
import ProductCard, { ProductGrid } from '../components/ProductCard.jsx';
import FeatureGrid from '../components/FeatureGrid.jsx';
import Reveal from '../components/Reveal.jsx';
import Faq from '../components/Faq.jsx';
import { useCatalogue } from '../CatalogueContext.jsx';
import { PLANT } from '../data/catalog.js';
import { guides } from '../data/guides.js';
import { HOME_FAQ, plain } from '../data/seo.js';
import {
  PRESENCE,
  SITE,
  VIDEOS,
  faqLd,
  isPlaceholder,
  organizationLd,
  websiteLd,
} from '../lib.js';
import './Home.css';

const STATS = [
  { value: PLANT.widthLabel, label: 'Roll width' },
  { value: PLANT.gsmLabel, label: 'GSM range' },
  { value: 'Needle punch', label: '+ thermal bonded' },
  { value: 'PP · PET · Viscose', label: 'Virgin, recycled, blends' },
];

/** From fibre to finished roll — general needle-punch / thermal-bond process
 *  steps plus the plant's own capability figures. Nothing else is claimed. */
const PROCESS = [
  {
    title: 'Fibre selection',
    text: 'Polyester, PP (virgin and recycled), viscose or a custom blend — chosen for what the material has to do.',
    tag: 'Fibre',
  },
  {
    title: 'Carding & web forming',
    text: 'Fibres are opened, blended and carded into an even web, layered to the weight the order calls for.',
    tag: `${PLANT.gsmLabel} GSM`,
  },
  {
    title: 'Needle punching',
    text: 'Barbed needles entangle the web into a strong, dimensionally stable felt — density and thickness are set here.',
    tag: 'Needle punch',
  },
  {
    title: 'Thermal bonding',
    text: 'Where softness and loft matter, heat fuses low-melt fibres to lock the structure without adhesives.',
    tag: 'Thermal bond',
  },
  {
    title: 'Finished rolls',
    text: `Wound to the agreed width and roll length — widths of ${PLANT.widthLabel} — ready for cutting, laminating or moulding on your line.`,
    tag: PLANT.widthLabel,
  },
];

/** Every point is drawn from the plant capability and the company's
 *  product-description document. */
const WHY = [
  {
    title: 'Made to your specification',
    text: 'GSM, thickness, width, density, fibre blend, colour and roll length are set for each order, so the material fits the product it will become.',
  },
  {
    title: 'Wide rolls, wide range',
    text: `Roll widths of ${PLANT.widthLabel} and a ${PLANT.gsmLabel} GSM range — from light linings to dense geotextiles and filter felt.`,
  },
  {
    title: 'Two processes, many fibres',
    text: 'Needle punched and thermal bonded nonwovens in polyester, PP (virgin and recycled), viscose and custom blends.',
  },
  {
    title: 'Ready for your process',
    text: 'Our fabrics cut, stitch, laminate, mould, emboss, die-cut and bond cleanly, so they move straight into your production.',
  },
];

export default function Home() {
  const { businessAreas, products, areaName } = useCatalogue();
  const heroRef = useRef(null);

  // One product from each of three industries — the breadth of the range.
  const featured = businessAreas
    .map((area) => products.find((p) => p.category === area.slug))
    .filter(Boolean)
    .slice(0, 3);

  // Real figures only; the band stays hidden until one is filled in lib.js.
  const presence = PRESENCE.filter((item) => !isPlaceholder(item.value));

  // Hero parallax: --hero-p runs 0 → 1 as the hero scrolls away. Home.css
  // uses it to drift the film and fade the copy. Written straight to the
  // element in a rAF, so scrolling never re-renders the page.
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const h = el.offsetHeight || 1;
      const p = Math.min(Math.max(window.scrollY / h, 0), 1);
      el.style.setProperty('--hero-p', p.toFixed(3));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <Seo
        title={null}
        description={SITE.description}
        path="/"
        jsonLd={[
          organizationLd(),
          websiteLd(),
          faqLd(HOME_FAQ.map((f) => ({ q: f.q, a: plain(f.a) }))),
        ]}
      />

      <section className="home__hero" ref={heroRef}>
        <VideoBackdrop
          video={VIDEOS.hero}
          variant={1}
          eager
          className="home__hero-media"
        />
        <div className="home__hero-shade" aria-hidden="true" />
        {/* Plain, film-first hero (the Kiran Global Exports layout): just a
            brand line, two buttons, a tagline and a scroll cue. The page
            heading stays in the HTML for search engines and screen readers,
            but is not shown over the film. */}
        <div className="home__hero-inner">
          <div className="home__hero-copy">
            <h1 className="sr-only">
              Kiran Nonwovens — needle punched and thermal bonded nonwoven felt
              and geotextile manufacturer
            </h1>
            <p className="home__hero-brand">Kiran Nonwovens</p>
            <div className="cta-row home__hero-ctas">
              <Link to="/products" className="btn btn--light">
                Explore products
              </Link>
              <Link to="/contact#enquiry" className="btn btn--ghost-light">
                Contact our export team
              </Link>
            </div>
          </div>
          <div className="home__hero-foot">
            <span className="home__hero-tag">
              Nonwoven solutions for a better tomorrow
            </span>
            <a href="#intro" className="home__scroll">
              <i aria-hidden="true" />
              Scroll
            </a>
          </div>
        </div>
      </section>

      <section className="block" id="intro">
        <div className="wrap home__intro">
          <Reveal>
            <p className="eyebrow">Kiran Nonwovens</p>
            <h2>Nonwovens made to the job they have to do.</h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="lead">
              We manufacture needle punched and thermal bonded nonwoven fabrics
              and felts — {products.length} standard products across{' '}
              {businessAreas.length} industries, plus fully customised
              development.
            </p>
            <p style={{ marginTop: 14 }}>
              GSM, thickness, width, density, fibre blend, colour and roll
              length are set for each order, so the material matches the
              product it is going to become — a geotextile under a highway, an
              acoustic liner in a car door or the shoulder of a tailored blazer.
            </p>
            <div className="cta-row">
              <Link to="/about" className="btn">
                About the company
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <StatsBand stats={STATS} />

      <HorizontalProcess title="From fibre to finished roll" steps={PROCESS} />

      <section className="block home__areas">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">Where we work</p>
              <h2>Business Areas</h2>
            </div>
            <Link to="/business-areas" className="section-link">
              All business areas →
            </Link>
          </div>
          <BusinessAreaGrid>
            {businessAreas.map((area, i) => (
              <BusinessAreaCard key={area.slug} area={area} index={i} />
            ))}
          </BusinessAreaGrid>
        </div>
      </section>

      <section className="block block--sand" id="spec-finder">
        <div className="wrap">
          <p className="eyebrow">Find your material</p>
          <h2>Spec Finder</h2>
          <SpecFinder />
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <p className="eyebrow">Nonwoven solutions for a better tomorrow</p>
          <h2>Why Kiran Nonwovens</h2>
          <Reveal>
            <FeatureGrid items={WHY} />
          </Reveal>
        </div>
      </section>

      <section className="block home__featured-block">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">A closer look</p>
              <h2>Featured materials</h2>
            </div>
            <Link to="/products" className="section-link">
              All products →
            </Link>
          </div>
          <div className="home__featured">
            <ProductGrid>
              {featured.map((product, i) => (
                <Reveal key={product.slug} delay={i * 90}>
                  <ProductCard
                    product={product}
                    areaName={areaName(product.category)}
                    variant={(i % 2) + 1}
                  />
                </Reveal>
              ))}
            </ProductGrid>
          </div>
        </div>
      </section>

      {presence.length ? (
        <section className="home__presence">
          <div className="wrap home__presence-row">
            {presence.map((item) => (
              <div key={item.label}>
                <b>{item.value}</b>
                <small>{item.label}</small>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="home__closing">
        <VideoBackdrop video={VIDEOS.cta} variant={2} />
        <div className="home__closing-shade" aria-hidden="true" />
        <div className="wrap home__closing-inner">
          <h2>Looking for something else?</h2>
          <p>
            If nothing here matches your exact requirement, tell us what you
            need. We develop custom material to your GSM, width, fibre and
            colour.
          </p>
          <div className="cta-row">
            <Link
              to="/products/industrial/customised-nonwoven-solutions"
              className="btn btn--light"
            >
              Customised solutions
            </Link>
            <Link to="/contact#enquiry" className="btn btn--ghost-light">
              Send an enquiry
            </Link>
          </div>
        </div>
      </section>

      {guides.length ? (
        <section className="block">
          <div className="wrap">
            <div className="section-head">
              <div>
                <p className="eyebrow">For buyers</p>
                <h2>Buyer&apos;s guides</h2>
              </div>
              <Link to="/guides" className="section-link">
                All guides →
              </Link>
            </div>
            <ul className="home__guides">
              {guides.slice(0, 3).map((g) => (
                <li key={g.slug}>
                  <Link to={`/guides/${g.slug}`}>
                    <span>Guide</span>
                    <strong>{g.title}</strong>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="block block--sand">
        <div className="wrap">
          <Faq items={HOME_FAQ} title="Common questions" id="home-faq" />
        </div>
      </section>
    </>
  );
}
