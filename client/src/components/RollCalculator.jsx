import { useState } from 'react';

const num = (v) => {
  const n = parseFloat(v);
  return Number.isFinite(n) && n > 0 ? n : 0;
};
const fmt = (n, d = 0) =>
  n.toLocaleString('en-IN', { minimumFractionDigits: d, maximumFractionDigits: d });

/**
 * Geotextile roll calculator. Pure arithmetic on the three numbers a buyer
 * already has (GSM, roll width, roll length) and, optionally, the area to
 * cover. It renders with sensible defaults, so the prerendered page already
 * shows a worked example before any script runs.
 */
export default function RollCalculator() {
  const [gsm, setGsm] = useState('200');
  const [width, setWidth] = useState('5.2');
  const [length, setLength] = useState('50');
  const [area, setArea] = useState('2600');
  const [allow, setAllow] = useState('0');

  const g = num(gsm);
  const w = num(width);
  const l = num(length);
  const a0 = num(area);
  // Overlap and waste allowance, a percentage the buyer or engineer chooses.
  const allowPct = Math.min(num(allow), 100);
  const a = a0 * (1 + allowPct / 100);

  const rollArea = w * l;
  const rollKg = (g * rollArea) / 1000;
  const m2PerTonne = g ? 1000000 / g : 0;
  const lengthNeeded = w ? a / w : 0;
  const rollsNeeded = l ? Math.ceil(lengthNeeded / l) : 0;
  const kgNeeded = (g * a) / 1000;

  return (
    <form
      className="roll-calc"
      aria-label="Geotextile roll calculator"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="roll-calc__inputs">
        <label>
          <span>GSM (g/m²)</span>
          <input
            type="number"
            inputMode="decimal"
            min="1"
            step="any"
            value={gsm}
            onChange={(e) => setGsm(e.target.value)}
          />
        </label>
        <label>
          <span>Roll width (m)</span>
          <input
            type="number"
            inputMode="decimal"
            min="0.1"
            step="any"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
        </label>
        <label>
          <span>Roll length (m)</span>
          <input
            type="number"
            inputMode="decimal"
            min="1"
            step="any"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </label>
        <label>
          <span>Area to cover (m²)</span>
          <input
            type="number"
            inputMode="decimal"
            min="1"
            step="any"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
        </label>
        <label>
          <span>Overlap and waste allowance (%)</span>
          <input
            type="number"
            inputMode="decimal"
            min="0"
            max="100"
            step="any"
            value={allow}
            onChange={(e) => setAllow(e.target.value)}
          />
        </label>
      </div>

      <dl className="roll-calc__out" aria-live="polite">
        <div>
          <dt>One roll covers</dt>
          <dd>{fmt(rollArea, 1)} m²</dd>
        </div>
        <div>
          <dt>One roll weighs (fabric only)</dt>
          <dd>{fmt(rollKg, 1)} kg</dd>
        </div>
        <div>
          <dt>One tonne covers</dt>
          <dd>{fmt(m2PerTonne)} m²</dd>
        </div>
        <div>
          <dt>Area to order, with allowance</dt>
          <dd>{fmt(a, 1)} m²</dd>
        </div>
        <div>
          <dt>Length needed for the area</dt>
          <dd>{fmt(lengthNeeded, 1)} m</dd>
        </div>
        <div>
          <dt>Rolls needed (rounded up)</dt>
          <dd>{fmt(rollsNeeded)}</dd>
        </div>
        <div>
          <dt>Fabric weight for the area</dt>
          <dd>{fmt(kgNeeded)} kg</dd>
        </div>
      </dl>
      <p className="roll-calc__note">
        Nominal figures before cores, packaging and the GSM tolerance. Leave the
        allowance at 0 for the bare area, or enter the overlap and waste your
        engineer specifies. Packed weights are confirmed with the order.
      </p>
    </form>
  );
}
