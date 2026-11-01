// Key-and-keyhole art for the "Real-Time Access Control" card, rebuilt from the Figma vectors so
// the key can slide in and twist. Coordinates are in the card's 658×475 design space; the resting
// pose (no animation) matches the design exactly.

const KEYHOLE_PATH =
  'M120.843 14.7821C107.812 5.18469 92.0545 0.0051172 75.8709 0C59.169 0.000734823 42.934 5.51234 29.6837 15.6801C16.4334 25.8478 6.90827 40.1035 2.58544 56.2363C-1.73738 72.3691 -0.616297 89.4774 5.77482 104.908C12.1659 120.339 23.4699 133.23 37.9338 141.581V189.686L38.1994 194.124C39.3414 203.726 44.1067 212.529 51.5216 218.735C58.9366 224.942 68.4414 228.082 78.0942 227.515C87.747 226.949 96.8191 222.718 103.457 215.686C110.095 208.655 113.797 199.355 113.808 189.686V141.581L118.892 138.357C132.219 129.175 142.261 115.974 147.552 100.679C152.843 85.3849 153.105 68.7996 148.299 53.3458C143.494 37.8921 133.874 24.3796 120.843 14.7821Z'

const KEY_PATH =
  'M88.5 118C72.275 118 59 104.725 59 88.5C59 72.275 72.275 59 88.5 59C104.725 59 118 72.275 118 88.5C118 104.725 104.725 118 88.5 118ZM171.1 59C159.3 25.075 126.85 0 88.5 0C39.825 0 0 39.825 0 88.5C0 137.175 39.825 177 88.5 177C126.85 177 159.3 151.925 171.1 118H221.25V147.5C221.25 163.792 234.458 177 250.75 177C267.043 177 280.25 163.792 280.25 147.5V118C293.091 118 303.5 107.591 303.5 94.75V88.5C303.5 72.2076 290.293 59 274 59H171.1Z'

export function AccessKey() {
  return (
    <svg viewBox="0 0 658 475" className="pointer-events-none absolute inset-0 size-full" aria-hidden>
      {/* Keyhole with its hard (4, 4) shadow; the face lights up when the key turns */}
      <g transform="translate(341.3 271.6)">
        <path d={KEYHOLE_PATH} fill="#05572B" transform="translate(4 4)" />
        <path className="keyhole-face" d={KEYHOLE_PATH} fill="#033118" />
      </g>

      {/* Key with its hard (5, 4) shadow. Slides along x, twists by squashing around the shaft axis (y = 347.5). */}
      <g className="key-unlock">
        <g transform="translate(165 259)">
          <path d={KEY_PATH} fill="#094224" transform="translate(5 4)" />
          <path d={KEY_PATH} fill="#05552A" />
        </g>
      </g>
    </svg>
  )
}
