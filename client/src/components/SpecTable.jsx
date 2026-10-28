import { ORDERING, PLANT } from '../data/catalog.js';
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

/** Ordering terms (MOQ, lead time, packing, samples), the same for every product. */
export function OrderingTable({ caption }) {
  return (
    <div className="spec-table">
      <table>
        {caption ? <caption className="sr-only">{caption}</caption> : null}
        <tbody>
          <Row label="Minimum order" value={ORDERING.moq} />
          <Row label="Lead time" value={ORDERING.leadTime} />
          <Row label="Roll length" value={ORDERING.rollLength} />
          <Row label="Packing" value={ORDERING.packing} />
          <Row label="Samples" value={ORDERING.samples} />
        </tbody>
      </table>
    </div>
  );
}

const sameList =(a = [], b = []) =>
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
                ? 'Full production range — tell us the application and we will advise.'
                : null
            }
          />
          <Row
            label="GSM"
            value={gsm}
            caveat={
              gsmConfirmed
                ? null
                : 'Production capability — made to the GSM your application needs.'
            }
          />
          <Row label="Thickness" value={specs.thickness} />
          <Row label="Width" value={specs.width} />
          {/* Site-wide term, not the product record: see ORDERING. */}
          <Row label="Roll length" value={ORDERING.rollLength} />
          <Row label="Colour" value={specs.colour} />
        </tbody>
      </table>
    </div>
  );
}
