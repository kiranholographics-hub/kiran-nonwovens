import { Link, useParams } from 'react-router-dom';

import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import RichText from '../components/RichText.jsx';
import { paragraphs, updateBySlug } from '../data/content.js';
import { SITE, VIDEOS, breadcrumbLd } from '../lib.js';
import NotFound from './NotFound.jsx';

const clip = (s, n) => (s.length <= n ? s : `${s.slice(0, n - 1).trimEnd()}…`);

export default function Update() {
  const { slug } = useParams();
  const update = updateBySlug(slug);
  if (!update) return <NotFound />;

  const path = `/updates/${update.slug}`;
  const trail = [
    { to: '/', label: 'Home' },
    { to: '/updates', label: 'Updates' },
    { label: update.title },
  ];
  const text = paragraphs(update.body);
  const description = clip(update.excerpt || text[0] || update.title, 160);

  return (
    <>
      <Seo
        title={clip(update.title, 46)}
        description={description}
        path={path}
        type="article"
        article={{ published: update.publishedAt, modified: update.publishedAt }}
        jsonLd={[
          breadcrumbLd(trail),
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: update.title,
            description,
            datePublished: update.publishedAt,
            mainEntityOfPage: `${SITE.url}${path}`,
            author: { '@type': 'Organization', name: SITE.name, url: SITE.url },
            publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
          },
        ]}
      />
      <PageHero
        trail={trail}
        kicker={`Update · ${update.publishedAt}`}
        title={update.title}
        video={VIDEOS.about}
        variant={1}
      />
      <article className="block">
        <div className="wrap exports__intro">
          {text.map((p) => (
            <p key={p.slice(0, 40)}>
              <RichText text={p} />
            </p>
          ))}
          <p>
            <Link to="/updates">All updates</Link> ·{' '}
            <Link to="/contact#enquiry">Send an enquiry</Link>
          </p>
        </div>
      </article>
    </>
  );
}
