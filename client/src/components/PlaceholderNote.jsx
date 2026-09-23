import './PlaceholderNote.css';

/**
 * The rust-ruled note the theme uses for anything provisional. Used to say
 * plainly, on the page, which content is still awaiting input rather than
 * dressing a placeholder up as finished.
 */
export default function PlaceholderNote({ children }) {
  return <p className="note">{children}</p>;
}
