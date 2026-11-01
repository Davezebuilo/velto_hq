import heroGlow from '../assets/hero-glow.webp'
import heroRings from '../assets/hero-rings.webp'
import logo from '../assets/logo.svg'
import { LaunchButton } from './LaunchButton'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[110px] pb-16 lg:h-[804px] lg:pt-[184px] lg:pb-0">
      {/* Background: soft top glow + glass rings fading into black */}
      <img
        src={heroGlow}
        alt=""
        className="pointer-events-none absolute top-0 left-1/2 w-[1630px] max-w-none -translate-x-1/2 opacity-60"
      />
      <img
        src={heroRings}
        alt=""
        className="pointer-events-none absolute top-[200px] left-1/2 w-[640px] max-w-none -translate-x-1/2 opacity-70 lg:top-[317px] lg:w-[1068px]"
        style={{ maskImage: 'radial-gradient(ellipse 50% 70% at 50% 60%, #000 55%, transparent 100%)' }}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-linear-to-b from-transparent to-black" />

      <div className="relative z-10 mx-auto flex max-w-[990px] flex-col items-center px-[25px] text-center">
        <img src={logo} alt="" className="mb-10 hidden h-[38px] w-auto lg:block" />
        <h1 className="text-[35px] leading-tight font-extrabold text-heading lg:text-[50px]">
          The smart Telegram paywall bot
        </h1>
        <p className="mt-[30px] text-base text-white/60 lg:text-[30px] lg:leading-[46px]">
          Making it easier for private Telegram groups and community owners to manage access to
          their platforms
        </p>
        <LaunchButton variant="hero" className="mt-[30px] lg:mt-[86px]" />
      </div>
    </section>
  )
}
