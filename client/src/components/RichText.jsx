import { Link } from 'react-router-dom';

/**
 * Renders a string containing [text](/path) as text with internal links.
 * Only site-relative paths are turned into links; anything else stays as
 * plain text, so copy can never inject an arbitrary URL.
 */
export default function RichText({ text }) {
  const parts = [];
  const re = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;
  let last = 0;
  let m;
  let i = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push(
      <Link key={`l${i++}`} to={m[2]}>
        {m[1]}
      </Link>
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}
