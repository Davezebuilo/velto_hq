// Rising arrows for the "Recurring Subscription" card, rebuilt from the Figma vectors so each arrow
// can animate on its own. Coordinates are in the card's 658×475 design space; the resting pose
// (no animation) matches the design.

const ARROW_PATH =
  'M324.17 35.068L247.266 98.134L240.873 62.46C155.779 95.763 111.189 175.45 111.189 272.322L0 272.322C0 166.834 144.731 70.618 238.015 35.711L231.101 0L324.17 35.068Z'

// Figma places both arrows rotated -15° (matrix rows from the vector's absolute transform).
const ARROWS = [
  'matrix(0.9659 -0.2588 0.2588 0.9659 70 340.5542)',
  'matrix(0.9659 -0.2588 0.2588 0.9659 204.0601 329.5889)',
]

export function RecurringArrows() {
  return (
    <svg viewBox="0 0 658 475" className="pointer-events-none absolute inset-0 size-full" aria-hidden>
      <defs>
        {/* Figma inner shadow: #073D77, offset (-8.7, 6.3), no blur — measured in card space */}
        <filter id="arrow-inner-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feOffset in="SourceAlpha" dx="-8.7" dy="6.3" result="shifted" />
          <feComposite in="SourceAlpha" in2="shifted" operator="out" result="edge" />
          <feFlood floodColor="#073D77" />
          <feComposite in2="edge" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode in="shadow" />
          </feMerge>
        </filter>
      </defs>
      {ARROWS.map((transform, i) => (
        <g key={transform} className="arrow-rise" style={{ animationDelay: `${i * 0.22}s` }}>
          <g filter="url(#arrow-inner-shadow)">
            <path d={ARROW_PATH} transform={transform} fill="#1F86F3" />
          </g>
        </g>
      ))}
    </svg>
  )
}
