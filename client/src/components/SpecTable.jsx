import { PLANT } from '../data/catalog.js';
import './SpecTable.css';

/**
 * The specification table, as real HTML text — never an image. This is the
 * page's most valuable indexable content, so it stays crawlable and selectable.
 *
 * Two honesty rules live here:
 *  - A spec nobody has supplied renders as an italic "To be confirmed" rather
 *    than a guessed number.
 *  - A value that is the plant-wide default rather than a figure confirmed for
 *    this product carries a caveat saying so.
 */
function Row({ label, value, caveat }) {
  const empty = value === null || value === undefined || value === '';
  return (
    <tr>
      <th scope="row">{label}</th>
      {empty ? (
        <td className="spec-table__tbd">To be confirmed</td>
      ) : (
        <td>
          {value}
          {caveat ? <span className="spec-table__caveat">{caveat}</span> : null}
        </td>
      )}
    </tr>
  );
}

const sameList = (a = [], b = []) =>
  a.length === b.length && a.every((v, i) => v === b[i]);

export default function SpecTable({ specs, gsmConfirmed = false, caption }) {
  const gsm =
    specs.gsmMin != null && specs.gsmMax != null
      ? `${specs.gsmMin} – ${specs.gsmMax}`
      : null;

  const fibre = specs.fibre?.length ? specs.fibre.join(', ') : null;
  // Only caveat the fibre when it is still the untouched plant-wide list.
  const fibreIsPlantDefault = sameList(specs.fibre, PLANT.fibres);

  return (
    <div className="spec-table">
      <table>
        {caption ? <caption className="sr-only">{caption}</caption> : null}
        <tbody>
          <Row label="Process" value={specs.process} />
          <Row
            label="Fibre"
            value={fibre}
            caveat={
              fibreIsPlantDefault
                ? 'Full plant range — tell us the application and we will advise.'
                : null
            }
          />
          <Row
            label="GSM"
            value={gsm}
            caveat={
              gsmConfirmed
                ? null
                : 'Plant capability — made to the GSM your application needs.'
            }
          />
          <Row label="Thickness" value={specs.thickness} />
          <Row label="Width" value={specs.width} />
          <Row label="Roll length" value={specs.rollLength} />
          <Row label="Colour" value={specs.colour} />
        </tbody>
      </table>
    </div>
  );
}
