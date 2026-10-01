import { Link, useParams } from 'react-router-dom';

import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import Faq from '../components/Faq.jsx';
import RichText from '../components/RichText.jsx';
import ProductCard, { ProductGrid } from '../components/ProductCard.jsx';
import { useCatalogue } from '../CatalogueContext.jsx';
import { guideBySlug, guides, GUIDES_PUBLISHED } from '../data/guides.js';
import { plain } from '../data/seo.js';
import { SITE, VIDEOS, breadcrumbLd, faqLd } from '../lib.js';
import NotFound from './NotFound.jsx';
import './Guide.css';

const anchor = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

export default function Guide() {
  const { slug } = useParams();
  const { products } = useCatalogue();
  const guide = guideBySlug(slug);

  if (!guide) return <NotFound />;

  const trail = [
    { to: '/', label: 'Home' },
    { to: '/guides', label: 'Guides' },
    { label: guide.title },
  ];
  const path = `/guides/${guide.slug}`;

  const related = guide.relatedProducts
    .map((key) => products.find((p) => `${p.category}/${p.slug}` === key))
    .filter(Boolean);
  const moreGuides = guide.relatedGuides
    .map((s) => guides.find((g) => g.slug === s))
    .filter(Boolean);

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.description,
    datePublished: GUIDES_PUBLISHED,
    dateModified: GUIDES_PUBLISHED,
    inLanguage: 'en',
    mainEntityOfPage: `${SITE.url}${path}`,
    image: `${SITE.url}${SITE.ogImage}`,
    author: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
  };

  return (
    <>
      <Seo
        title={guide.seoTitle}
        description={guide.description}
        path={path}
        type="article"
        article={{ published: GUIDES_PUBLISHED, modified: GUIDES_PUBLISHED }}
        jsonLd={[
          articleLd,
          breadcrumbLd(trail),
          faqLd(guide.faqs.map((f) => ({ q: f.q, a: plain(f.a) }))),
        ]}
      />
      <PageHero
        trail={trail}
        kicker={`Guide · ${guide.readMins} min read`}
        title={guide.title}
        lead={guide.intro}
        video={VIDEOS.about}
        variant={1}
      />

      <article className="block guide">
        <div className="wrap guide__layout">
          <nav className="guide__toc" aria-label="In this guide">
            <p>In this guide</p>
            <ol>
              {guide.sections.map((s) => (
                <li key={s.h}>
                  <a href={`#${anchor(s.h)}`}>{s.h}</a>
                </li>
              ))}
              <li>
                <a href="#faq-title">Questions</a>
              </li>
            </ol>
          </nav>

          <div className="guide__body">
            {guide.sections.map((s) => (
              <section key={s.h} className="guide__section">
                <h2 id={anchor(s.h)}>{s.h}</h2>
                {s.p && !s.list && !s.table
                  ? s.p.map((t) => (
                      <p key={t.slice(0, 40)}>
                        <RichText text={t} />
                      </p>
                    ))
                  : null}
                {s.table ? (
                  <div className="guide__table">
                    <table>
                      <thead>
                        <tr>
                          {s.table.head.map((h, i) => (
                            <th key={i} scope="col">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {s.table.rows.map((row) => (
                          <tr key={row[0]}>
                            {row.map((cell, i) =>
                              i === 0 ? (
                                <th key={i} scope="row">
                                  {cell}
                                </th>
                              ) : (
                                <td key={i}>{cell}</td>
                              )
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : null}
                {s.list ? (
                  <ul className="guide__list">
                    {s.list.map((li) => (
                      <li key={li.slice(0, 40)}>
                        <RichText text={li} />
                      </li>
                    ))}
                  </ul>
                ) : null}
                {s.list && s.p
                  ? s.p.map((t) => (
                      <p key={t.slice(0, 40)}>
                        <RichText text={t} />
                      </p>
                    ))
                  : null}
              </section>
            ))}

            <div className="guide__faq">
              <Faq items={guide.faqs} title="Questions" id="faq" />
            </div>
          </div>
        </div>
      </article>

      {related.length ? (
        <section className="block block--sand">
          <div className="wrap">
            <div className="section-head">
              <h2>Related products</h2>
              <Link to="/products" className="section-link">
                All products
              </Link>
            </div>
            <div className="guide__related">
              <ProductGrid>
                {related.map((p, i) => (
                  <ProductCard key={p.slug} product={p} variant={(i % 2) + 1} />
                ))}
              </ProductGrid>
            </div>
          </div>
        </section>
      ) : null}

      <section className="block guide__next">
        <div className="wrap guide__next-row">
          <div>
            <h2>Have a specification in mind?</h2>
            <p>
              Send the application, fibre, GSM, width and quantity and our
              export team will reply with a quote. Samples are available on
              request.
            </p>
            <div className="cta-row">
              <Link to="/contact#enquiry" className="btn btn--fill">
                Send an enquiry
              </Link>
              <Link to="/guides" className="btn">
                All guides
              </Link>
            </div>
          </div>
          {moreGuides.length ? (
            <div className="guide__more">
              <p className="eyebrow">Keep reading</p>
              <ul>
                {moreGuides.map((g) => (
                  <li key={g.slug}>
                    <Link to={`/guides/${g.slug}`}>{g.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
