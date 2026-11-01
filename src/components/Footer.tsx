import farcaster from '../assets/icon-farcaster.svg'
import linkedin from '../assets/icon-linkedin.svg'
import telegram from '../assets/icon-telegram.svg'
import x from '../assets/icon-x.svg'
import logo from '../assets/logo-footer.svg'
import { NAV_LINKS, SOCIAL_LINKS } from '../content'

const socials = [
  { icon: telegram, label: 'Telegram', href: SOCIAL_LINKS.telegram },
  { icon: x, label: 'X', href: SOCIAL_LINKS.x },
  { icon: linkedin, label: 'LinkedIn', href: SOCIAL_LINKS.linkedin },
  { icon: farcaster, label: 'Farcaster', href: SOCIAL_LINKS.farcaster },
]

const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="relative mt-[80px] overflow-hidden lg:mt-[130px]">
      <div className="pointer-events-none absolute -bottom-24 left-1/2 h-[200px] w-[600px] -translate-x-1/2 rounded-full bg-white/10 blur-[100px]" />
      <div className="relative mx-auto max-w-[1512px] px-[23px] pt-10 pb-8 lg:px-[114px] lg:pt-[74px] lg:pb-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <a href="#top" aria-label="Velto home">
            <img src={logo} alt="Velto — Gate. Grow. Get Paid." className="h-[39px] w-auto lg:h-[47px]" />
          </a>

          <ul className="flex flex-col gap-4 lg:flex-row lg:gap-[50px]">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-base font-medium transition hover:text-white/70 lg:text-lg lg:leading-[34px]">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex items-center justify-center gap-4 lg:gap-[23px]">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block opacity-80 transition hover:opacity-100"
                >
                  <img src={s.icon} alt="" className="size-8 lg:size-10" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-10 text-center text-sm text-white/60 lg:mt-12 lg:text-lg">© {YEAR}</p>
      </div>
    </footer>
  )
}
