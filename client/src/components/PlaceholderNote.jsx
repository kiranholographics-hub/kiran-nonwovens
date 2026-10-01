import { SHOW_PLACEHOLDER_LABELS } from '../lib.js';
import './PlaceholderNote.css';

/**
 * A note that says content is still awaiting input ("pending from Sir",
 * "draft", …). It is for the team, not for visitors, so it renders nothing
 * unless VITE_SHOW_PLACEHOLDER_LABELS=true is set — the live site never shows
 * unfinished-business notes. Use <Note> for anything a visitor should read.
 */
export default function PlaceholderNote({ children }) {
  if (!SHOW_PLACEHOLDER_LABELS) return null;
  return <p className="note">{children}</p>;
}
