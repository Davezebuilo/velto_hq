import { useEffect, useRef } from 'react'
import { RING_ARCS } from './aboutRings.data'

// Neon rings around the V logo in the About card, rebuilt from the Figma vectors so each ring can
// orbit the shared centre. Arcs are grouped by diameter; neighbouring rings turn in opposite
// directions, inner ones faster. The solid inner ring and the logo stay still.

const ORBITS: Record<number, { duration: number; reverse?: boolean }> = {
  563: { duration: 40 },
  615: { duration: 55, reverse: true },
  669: { duration: 70 },
  734: { duration: 85, reverse: true },
  800: { duration: 100 },
  874: { duration: 115, reverse: true },
  954: { duration: 130 },
}

const STOPS = (
  <>
    <stop offset="0" stopColor="#F00BE9" />
    <stop offset="1" stopColor="#1D9BF0" />
  </>
)

// Where the ring centre sits in each card, in that card's design space (desktop 1412×736, cropped to
// the 830px on the right; mobile 390×546 strip under the text, drawn at 0.536 scale). The mobile
// design uses the same rings turned 90° (the logo is not turned).
const LAYOUTS = {
  desktop: { viewBox: '582 0 830 736', cx: 1256.65, cy: 368.65, scale: 1, ringTurn: 0 },
  mobile: { viewBox: '0 0 390 546', cx: 196, cy: 361.6, scale: 0.536, ringTurn: 90 },
}

export function AboutRings({ variant, className = '' }: { variant: keyof typeof LAYOUTS; className?: string }) {
  const ref = useRef<SVGSVGElement>(null)
  const { viewBox, cx, cy, scale, ringTurn } = LAYOUTS[variant]
  const id = `rings-${variant}`

  // Pause the orbits while the card is off screen.
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) =>
      el.classList.toggle('rings-paused', !entry.isIntersecting),
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const diameters = Object.keys(ORBITS).map(Number)

  return (
    <svg ref={ref} viewBox={viewBox} className={`pointer-events-none ${className}`} aria-hidden>
      <defs>
        {RING_ARCS.map((a, i) => (
          <linearGradient key={i} id={`${id}-g${i}`} gradientUnits="userSpaceOnUse" x1={a.g[0]} y1={a.g[1]} x2={a.g[2]} y2={a.g[3]}>
            {STOPS}
          </linearGradient>
        ))}
        <linearGradient id={`${id}-core`} gradientUnits="userSpaceOnUse" x1="-177.24" y1="-343.24" x2="143.76" y2="294.76">
          {STOPS}
        </linearGradient>
        {/* Logo shadow from Figma: y 1.5, blur 27.5, black 25% */}
        <filter id={`${id}-logo-shadow`} x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="1.5" stdDeviation="13.77" floodColor="#000" floodOpacity="0.25" />
        </filter>
      </defs>

      <g transform={`translate(${cx} ${cy}) scale(${scale})`}>
        <g transform={`rotate(${ringTurn})`}>
          {diameters.map((dia) => {
            const { duration, reverse } = ORBITS[dia]
            return (
              <g
                key={dia}
                className="ring-orbit"
                style={{ animationDuration: `${duration}s`, animationDirection: reverse ? 'reverse' : 'normal' }}
              >
                {RING_ARCS.map((a, i) =>
                  a.dia === dia ? (
                    <path key={i} d={a.d} transform={`matrix(${a.m.join(' ')})`} fill={`url(#${id}-g${i})`} opacity={a.o} />
                  ) : null,
                )}
              </g>
            )
          })}

          {/* Solid inner ring (static) */}
          <path
            d="M255.65 0A255.65 255.65 0 1 1 -255.65 0A255.65 255.65 0 1 1 255.65 0ZM225.58 0A225.58 225.58 0 1 0 -225.58 0A225.58 225.58 0 1 0 225.58 0Z"
            fill={`url(#${id}-core)`}
            fillRule="evenodd"
            opacity={0.8}
            stroke="#fff"
            strokeOpacity={0.03}
          />
        </g>

        {/* V logo (static, never turned) */}
        <g transform="translate(-131.19 -128.68)" filter={`url(#${id}-logo-shadow)`} fill="#fff">
          <path d="M27.54 26.0325C50.8401 26.0325 71.889 39.9449 81.0208 61.381L128.171 172.063L140.15 199.502L153.808 230.475C131.868 230.474 111.997 217.52 103.144 197.446L27.54 26.0325Z" />
          <path
            d="M82.3228 48.7878L136.797 174.466L158.466 223.735L179.909 174.757L234.255 48.7878C208.039 48.7878 184.775 65.5926 176.537 90.4809L158.289 145.608L140.041 90.481C131.803 65.5927 108.539 48.7878 82.3228 48.7878Z"
            fillRule="evenodd"
          />
        </g>
      </g>
    </svg>
  )
}
