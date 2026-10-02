import { Link } from 'react-router-dom';
import { parseBlocks } from '../data/content.js';
import './Body.css';

/** Only a site address or an https one: never javascript:, data:, //host, etc. */
const safeUrl = (u) => (/^\/(?!\/)/.test(u) || /^https:\/\//i.test(u) ? u : '');

/** **bold**, [text](url) inside a line of text. */
function Inline({ text }) {
  const out = [];
  const re = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  let m;
  let i = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1]) {
      out.push(<strong key={i++}>{m[1]}</strong>);
    } else {
      const url = safeUrl(m[3]);
      if (!url) out.push(m[2]);
      else if (url.startsWith('/')) {
        out.push(<Link key={i++} to={url}>{m[2]}</Link>);
      } else {
        out.push(
          <a key={i++} href={url} target="_blank" rel="noopener noreferrer">
            {m[2]}
          </a>
        );
      }
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out}</>;
}

/** Renders text written in the panel (headings, lists, images, bold, links). */
export default function Body({ text }) {
  return (
    <div className="body-text">
      {parseBlocks(text).map((b, i) => {
        switch (b.type) {
          case 'h2':
            return <h2 key={i}><Inline text={b.text} /></h2>;
          case 'h3':
            return <h3 key={i}><Inline text={b.text} /></h3>;
          case 'ul':
            return <ul key={i}>{b.items.map((t, j) => <li key={j}><Inline text={t} /></li>)}</ul>;
          case 'ol':
            return <ol key={i}>{b.items.map((t, j) => <li key={j}><Inline text={t} /></li>)}</ol>;
          case 'img': {
            const src = safeUrl(b.src);
            return src ? (
              <figure key={i}>
                <img src={src} alt={b.alt} loading="lazy" decoding="async" />
                {b.alt ? <figcaption>{b.alt}</figcaption> : null}
              </figure>
            ) : null;
          }
          default:
            return <p key={i}><Inline text={b.text} /></p>;
        }
      })}
    </div>
  );
}
