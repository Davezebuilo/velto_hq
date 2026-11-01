// Rising shield for the "Secure Payments" card, rebuilt from the Figma vectors. Coordinates are in
// the card's 658×475 design space; the resting pose (no animation) matches the design.

const SHIELD_PATH =
  'M116.807 264.782L129.75 259.19C156.887 247.544 180.32 228.696 197.512 204.686C214.704 180.677 224.999 152.421 227.281 122.979L233.608 41.779C233.711 38.416 232.656 35.12 230.621 32.442C228.585 29.763 225.691 27.865 222.423 27.064L116.807 0L11.191 26.478C7.925 27.279 5.032 29.176 2.996 31.853C0.96 34.53 -0.095 37.824 0.007 41.186L6.333 122.386C8.614 151.829 18.909 180.086 36.101 204.097C53.292 228.108 76.727 246.958 103.865 258.603L116.807 264.782Z'

const V_LEFT_PATH =
  'M16.426 0L43.02 62.428L48.141 74.159L53.98 87.4L38.548 87.399L0 0L16.426 0Z'

const V_RIGHT_PATH =
  'M64.951 0L41.664 53.727L32.4 74.79L23.233 53.852L0 0L18.775 0L32.476 41.391L46.176 0L64.951 0Z'

export function SecureShield() {
  return (
    <svg viewBox="0 0 658 475" className="pointer-events-none absolute inset-0 size-full" aria-hidden>
      <defs>
        {/* Figma inner shadows on a 40%-opacity fill: hard bands of #5C0559 (left) and #B402AD (right),
            27.8px wide. Built as masks: the shield minus a horizontally shifted copy of itself. */}
        <mask id="shield-edge-left" maskUnits="userSpaceOnUse">
          <path d={SHIELD_PATH} fill="#fff" />
          <path d={SHIELD_PATH} fill="#000" transform="translate(27.8 0)" />
        </mask>
        <mask id="shield-edge-right" maskUnits="userSpaceOnUse">
          <path d={SHIELD_PATH} fill="#fff" />
          <path d={SHIELD_PATH} fill="#000" transform="translate(-27.8 0)" />
        </mask>
      </defs>

      <g className="shield-rise">
        <g transform="translate(212 253.64)">
          <path d={SHIELD_PATH} fill="#0F0F0F" fillOpacity={0.4} />
          <rect x="-30" y="-10" width="300" height="290" fill="#5C0559" mask="url(#shield-edge-left)" />
          <rect x="-30" y="-10" width="300" height="290" fill="#B402AD" mask="url(#shield-edge-right)" />
        </g>
        <path d={V_LEFT_PATH} transform="translate(288.5 339.05)" fill="#4A0548" />
        <path d={V_RIGHT_PATH} transform="matrix(-1 0 0 1 376.874 348.778)" fill="#4A0548" fillRule="evenodd" />
      </g>
    </svg>
  )
}
