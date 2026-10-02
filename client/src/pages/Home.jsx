import { Link } from 'react-router-dom';

import Seo from '../components/Seo.jsx';
import Reveal from '../components/Reveal.jsx';
import VideoBackdrop from '../components/VideoBackdrop.jsx';
import HeroScreen from '../components/HeroScreen.jsx';
import HorizontalProcess from '../components/HorizontalProcess.jsx';
import StatsBand from '../components/StatsBand.jsx';
import SpecFinder from '../components/SpecFinder.jsx';
import BusinessAreaCard, {
  BusinessAreaGrid,
} from '../components/BusinessAreaCard.jsx';
import ProductCard, { ProductGrid } from '../components/ProductCard.jsx';
import Faq from '../components/Faq.jsx';
import FeatureGrid from '../components/FeatureGrid.jsx';
import { useCatalogue } from '../CatalogueContext.jsx';
import { PLANT } from '../data/catalog.js';
import { guides } from '../data/guides.js';
import { testimonials } from '../data/content.js';
import { HOME_FAQ, plain } from '../data/seo.js';
import {
  PRESENCE,
  isPlaceholder,
  SITE,
  VIDEOS,
  faqLd,
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

/** Every point below is drawn from the plant capability and the company's
 *  product-description document — nothing is claimed that those don't say. */
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

/** The process, in the order a roll is made. Each line restates what the
 *  About / Manufacturing pages and the product document already say. */
const STEPS = [
  {
    title: 'Fibre',
    text: 'Polyester, PP (virgin or recycled), viscose or a custom blend — chosen for the job the felt has to do.',
    tag: 'PP · PET · Viscose',
  },
  {
    title: 'Web forming',
    text: 'Fibre is carded into a web, the base of every roll and the starting point for the width you need.',
    tag: `Rolls ${PLANT.widthLabel}`,
  },
  {
    title: 'Needle punching',
    text: 'Barbed needles entangle the web into a strong, dimensionally stable felt. Density and thickness are set here.',
    tag: `${PLANT.gsmLabel} GSM`,
  },
  {
    title: 'Thermal bonding',
    text: 'Heat fuses low-melt fibres to lock the structure without adhesives — a lighter, loftier material.',
    tag: 'No adhesives',
  },
  {
    title: 'Finish & colour',
    text: 'Colour and surface finish are set to your requirement, and the fabric stays ready for lamination, embossing and bonding.',
    tag: 'Colour to order',
  },
  {
    title: 'Rolled for export',
    text: 'Roll length and packaging are made to requirement, and the material ships from India to buyers abroad.',
    tag: 'Export supply',
  },
];

export default function Home() {
  const { businessAreas, products, areaName } = useCatalogue();
  const featured = products.slice(0, 3);

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

      {/* ── Hero: full-screen looping video, minimal text ───────── */}
      <HeroScreen
        video={VIDEOS.hero}
        eyebrow="Nonwoven felt & geotextiles"
        foot="Needle punched & thermal bonded nonwovens"
        scrollHref="#intro"
      >
        <Link to="/products" className="btn btn--light">
          Explore products
        </Link>
        <Link to="/contact#enquiry" className="btn btn--ghost-light">
          Contact our export team
        </Link>
      </HeroScreen>

      <StatsBand stats={STATS} />

      {/* ── Introduction ────────────────────────────────────────── */}
      <section className="block" id="intro">
        <div className="wrap home__intro">
          <Reveal>
            <h2>Needle punched and thermal bonded nonwovens, made to your specification.</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="lead">
              Kiran Nonwovens manufactures nonwoven felt and geotextiles for
              civil works, automotive, apparel and footwear, and industrial
              use — {products.length} standard products across{' '}
              {businessAreas.length} industries, plus fully customised
              development. We work to specification rather than from a fixed
              list, and supply export buyers from India.
            </p>
            <div className="cta-row">
              <Link to="/about" className="btn">
                About us
              </Link>
              <Link to="/manufacturing" className="btn">
                Manufacturing
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Business areas ──────────────────────────────────────── */}
      <section className="home__areas">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">Where we work</p>
              <h2>Business Areas</h2>
            </div>
            <Link to="/business-areas" className="section-link">
              All business areas
            </Link>
          </div>
          <BusinessAreaGrid>
            {businessAreas.map((area, i) => (
              <BusinessAreaCard key={area.slug} area={area} index={i} />
            ))}
          </BusinessAreaGrid>
        </div>
      </section>

      {/* ── Process: pinned, scrolls sideways ───────────────────── */}
      <HorizontalProcess title="From fibre to finished felt." steps={STEPS} />

      {/* ── Spec finder ─────────────────────────────────────────── */}
      <section className="block block--sand" id="spec-finder">
        <div className="wrap">
          <p className="eyebrow">Find your material</p>
          <h2>Spec Finder</h2>
          <SpecFinder />
        </div>
      </section>

      {/* ── Why ─────────────────────────────────────────────────── */}
      <section className="block">
        <div className="wrap">
          <h2>Why Kiran Nonwovens</h2>
          <FeatureGrid items={WHY} numbered={false} />
        </div>
      </section>

      {/* ── Featured materials ──────────────────────────────────── */}
      <section className="block home__featured-block">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">A closer look</p>
              <h2>Featured materials</h2>
            </div>
            <Link to="/products" className="section-link">
              All products
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

      {/* ── Global presence — shown only once the figures are confirmed ── */}
      {PRESENCE.some((item) => isPlaceholder(item.value)) ? null : (
        <section className="home__presence">
          <div className="wrap home__presence-row">
            {PRESENCE.map((item) => (
              <div key={item.label}>
                <b>{item.value}</b>
                <small>{item.label}</small>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Buyer's guides ──────────────────────────────────────── */}
      <section className="block block--sand">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">Before you specify</p>
              <h2>Buyer’s guides</h2>
            </div>
            <Link to="/guides" className="section-link">
              All guides
            </Link>
          </div>
          <ul className="home__guides">
            {guides.slice(0, 3).map((g) => (
              <li key={g.slug}>
                <Link to={`/guides/${g.slug}`}>
                  <span>{g.readMins} min read</span>
                  <strong>{g.title}</strong>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Buyer testimonials: only once some are published in /hq ── */}
      {testimonials.length ? (
        <section className="block block--sand">
          <div className="wrap">
            <p className="eyebrow">Buyers</p>
            <h2>What buyers say.</h2>
            <ul className="home__quotes">
              {testimonials.map((t) => (
                <li key={`${t.name}-${t.quote.slice(0, 20)}`}>
                  <blockquote>{t.quote}</blockquote>
                  <p>
                    <strong>{t.name}</strong>
                    {[t.role, t.company, t.country].filter(Boolean).length
                      ? `, ${[t.role, t.company, t.country].filter(Boolean).join(', ')}`
                      : ''}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {/* ── FAQ ─────────────────────────────────────────────────── */}
      <section className="block">
        <div className="wrap">
          <Faq items={HOME_FAQ} title="Common questions from buyers" id="home-faq" />
        </div>
      </section>

      {/* ── Closing video band ──────────────────────────────────── */}
      <section className="home__closing">
        <VideoBackdrop video={VIDEOS.manufacturing} variant={2} />
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
              Contact our export team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
