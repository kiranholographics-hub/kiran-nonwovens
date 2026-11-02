import { Link } from 'react-router-dom';

/**
 * Renders a string containing [text](/path) as text with internal links, and
 * **text** as bold. Only site-relative paths are turned into links; anything
 * else stays as plain text, so copy can never inject an arbitrary URL.
 */
const LINK = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;

function withLinks(text, keyPrefix) {
  const parts = [];
  let last = 0;
  let m;
  let i = 0;
  LINK.lastIndex = 0;
  while ((m = LINK.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push(
      <Link key={`${keyPrefix}l${i++}`} to={m[2]}>
        {m[1]}
      </Link>
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

export default function RichText({ text }) {
  // Split on **bold** first, then turn links into <Link> inside each piece.
  const pieces = String(text).split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {pieces.map((piece, n) =>
        piece.startsWith('**') && piece.endsWith('**') && piece.length > 4 ? (
          <strong key={`b${n}`}>{withLinks(piece.slice(2, -2), `b${n}`)}</strong>
        ) : (
          withLinks(piece, `p${n}`)
        )
      )}
    </>
  );
}
