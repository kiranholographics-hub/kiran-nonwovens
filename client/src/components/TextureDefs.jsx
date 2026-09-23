/**
 * The two SVG noise filters every placeholder tile paints with. Rendered once,
 * at the top of the app, so each placeholder is a single <rect> referencing
 * them.
 */
export default function TextureDefs() {
  return (
    <svg
      width="0"
      height="0"
      style={{ position: 'absolute' }}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <filter id="nwTex1">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.015 0.05"
            numOctaves="3"
            seed="4"
          />
          <feColorMatrix values="0 0 0 0 .18  0 0 0 0 .28  0 0 0 0 .22  0 0 0 .9 0" />
        </filter>
        <filter id="nwTex2">
          <feTurbulence type="turbulence" baseFrequency="0.04" numOctaves="3" seed="9" />
          <feColorMatrix values="0 0 0 0 .16  0 0 0 0 .27  0 0 0 0 .21  0 0 0 .8 0" />
        </filter>
      </defs>
    </svg>
  );
}
