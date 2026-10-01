import './PlaceholderNote.css';

/** The rust-ruled note the theme uses for a short, real clarification — for
 *  example that a material is made to order. Always shown. */
export default function Note({ children }) {
  return <p className="note">{children}</p>;
}
