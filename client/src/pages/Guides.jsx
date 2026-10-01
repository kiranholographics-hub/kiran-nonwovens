import { Link } from 'react-router-dom';

import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import { guides } from '../data/guides.js';
import { PAGE_SEO } from '../data/seo.js';
import { VIDEOS, breadcrumbLd, collectionLd } from '../lib.js';
import './Guides.css';

export default function Guides() {
  const trail = [{ to: '/', label: 'Home' }, { label: 'Guides' }];
  const seo = PAGE_SEO.guides;

  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description}
        path="/guides"
        jsonLd={[
          breadcrumbLd(trail),
          collectionLd({
            name: 'Nonwoven felt and geotextile buyer’s guides',
            description: seo.description,
            path: '/guides',
            items: guides.map((g) => ({ name: g.title, path: `/guides/${g.slug}` })),
          }),
        ]}
      />
      <PageHero
        trail={trail}
        kicker="Guides"
        title="Buyer’s guides"
        lead="Plain-language answers for the people who specify, buy and process nonwoven felt and geotextile."
        video={VIDEOS.about}
        variant={2}
      />

      <section className="block">
        <div className="wrap">
          <ol className="guides__list">
            {guides.map((g, i) => (
              <Reveal as="li" key={g.slug} delay={(i % 2) * 90}>
                <Link to={`/guides/${g.slug}`} className="guides__item">
                  <span className="guides__meta">{g.readMins} min read</span>
                  <h2>{g.title}</h2>
                  <p>{g.description}</p>
                  <span className="guides__more">Read the guide</span>
                </Link>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
