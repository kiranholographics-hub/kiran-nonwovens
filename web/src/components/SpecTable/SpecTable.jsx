import styles from './SpecTable.module.css';

/**
 * The specification table, as real HTML text — never an image. This is the
 * page's most valuable indexable content, so it stays crawlable and selectable.
 *
 * A spec Sir has not confirmed renders as an italic "To be confirmed" rather
 * than a guessed number.
 */
const TBD = (
  <td className={styles.tbd}>To be confirmed</td>
);

function Row({ label, value, caveat }) {
  return (
    <tr>
      <th scope="row">{label}</th>
      {value === null || value === undefined || value === '' ? (
        TBD
      ) : (
        <td>
          {value}
          {caveat ? <span className={styles.caveat}>{caveat}</span> : null}
        </td>
      )}
    </tr>
  );
}

export default function SpecTable({ specs, specsConfirmed = false, caption }) {
  const gsm =
    specs.gsmMin != null && specs.gsmMax != null
      ? `${specs.gsmMin} – ${specs.gsmMax}`
      : null;

  const fibre = specs.fibre?.length ? specs.fibre.join(', ') : null;

  return (
    <div className={styles.scroller}>
      <table className={styles.table}>
        {caption ? <caption className="srOnly">{caption}</caption> : null}
        <tbody>
          <Row label="Process" value={specs.process} />
          <Row
            label="Fibre"
            value={fibre}
            caveat={
              specsConfirmed
                ? null
                : 'Full plant range — per-product fibre to be confirmed.'
            }
          />
          <Row
            label="GSM"
            value={gsm}
            caveat={
              specsConfirmed
                ? null
                : 'Plant capability — per-product range to be confirmed.'
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
