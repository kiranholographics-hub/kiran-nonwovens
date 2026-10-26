import { Link, useParams } from 'react-router-dom';

import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import Body from '../components/Body.jsx';
import { plainText, updateBySlug } from '../data/content.js';
import { CONTACT, SITE, VIDEOS, breadcrumbLd } from '../lib.js';
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
  const description = clip(update.excerpt || plainText(update.body) || update.title, 160);

  return (
    <>
      <Seo
        title={
          // The office's city goes in the title when it fits; a long title
          // keeps its words instead, and the place stays in the schema below.
          update.title.length <= 44 ? `${update.title} – Jaipur` : clip(update.title, 58)
        }
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
            // Every update is news from the Jaipur office, so say where it
            // happened and who it is from, as local-business pages do.
            contentLocation: {
              '@type': 'Place',
              name: 'Jaipur, Rajasthan, India',
              address: { '@type': 'PostalAddress', ...CONTACT.addressParts },
            },
            author: { '@type': 'Organization', '@id': `${SITE.url}/#organization`, name: SITE.name, url: SITE.url },
            publisher: { '@type': 'Organization', '@id': `${SITE.url}/#organization`, name: SITE.name, url: SITE.url },
          },
        ]}
      />
      <PageHero
        trail={trail}
        kicker={`Update · Jaipur · ${update.publishedAt}`}
        title={update.title}
        video={VIDEOS.about}
        variant={1}
      />
      <article className="block">
        <div className="wrap exports__intro" style={{ maxWidth: "none" }}>
          {/^(\/(?!\/)|https:\/\/)/.test(update.coverImage || '') ? (
            <img
              src={update.coverImage}
              alt={update.title}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          ) : null}
          <Body text={update.body} />
          <p>
            <Link to="/updates">All updates</Link> ·{' '}
            <Link to="/contact#enquiry">Send an enquiry</Link>
          </p>
        </div>
      </article>
    </>
  );
}
