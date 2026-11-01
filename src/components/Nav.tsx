import { useEffect, useState } from 'react'
import closeIcon from '../assets/icon-close.svg'
import menuIcon from '../assets/icon-menu.svg'
import logo from '../assets/logo-nav.svg'
import { NAV_LINKS } from '../content'
import { LaunchButton } from './LaunchButton'

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-30">
      {/* Backdrop lives on its own layer: a backdrop-filter on <header> would become the containing
          block for the fixed mobile menu inside it and shrink the menu to the header's height. */}
      <div
        aria-hidden
        className={`absolute inset-0 border-b bg-black/60 backdrop-blur-xl transition-[opacity,border-color] duration-300 ${
          scrolled ? 'border-white/10 opacity-100' : 'border-transparent opacity-0'
        }`}
      />
      <nav
        className={`relative mx-auto flex max-w-[1512px] items-center justify-between px-[23px] transition-[padding] duration-300 lg:px-[95px] ${
          scrolled ? 'py-4 lg:py-4' : 'pt-[30px] pb-4 lg:py-[30px]'
        }`}
      >
        <a href="#top" aria-label="Velto home" className="shrink-0">
          <img src={logo} alt="Velto" className="h-[17px] w-auto lg:h-[26px]" />
        </a>

        <ul className="hidden items-center gap-[50px] px-2.5 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-base leading-[34px] font-semibold text-white transition hover:text-white/70"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <LaunchButton variant="outline" />
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="-m-1 p-1 lg:hidden"
        >
          <img src={menuIcon} alt="" className="size-8" />
        </button>
      </nav>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        inert={!open}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-xl transition-opacity duration-300 lg:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          className="absolute top-[33px] right-[26px] z-10 p-1"
        >
          <img src={closeIcon} alt="" className="size-8" />
        </button>

        <div
          className={`flex h-full flex-col items-center justify-center gap-16 transition-transform duration-300 ${
            open ? 'translate-y-0' : '-translate-y-4'
          }`}
        >
          <ul className="flex flex-col items-center gap-10">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-semibold text-white transition hover:text-white/70"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <LaunchButton variant="outline" />
        </div>
      </div>
    </header>
  )
}
