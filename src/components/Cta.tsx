import phone from '../assets/cta-phone.webp'
import logo from '../assets/logo.svg'
import { LaunchButton } from './LaunchButton'
import { Reveal } from './Reveal'

export function Cta() {
  return (
    <section className="container-site mt-[60px] lg:mt-[130px]">
      <Reveal>
        <div className="glass-card flex flex-col lg:h-[498px] lg:flex-row lg:items-start">
          <div className="pointer-events-none absolute -top-20 left-4 size-[133px] rounded-full bg-[#d9d9d9]/40 blur-[90px]" />

          <div className="relative z-10 px-[26px] pt-10 lg:max-w-[905px] lg:pt-[94px] lg:pl-[120px]">
            <h2 className="text-[25px] leading-tight font-extrabold lg:text-[50px] lg:leading-[61px]">
              Your Telegram Group Can Start Earning Today
            </h2>
            <p className="mt-5 flex items-center gap-2 text-[13.5px] font-semibold text-white/60 lg:mt-[30px]">
              With <img src={logo} alt="Velto" className="h-[28px] w-auto" />
            </p>
            <LaunchButton variant="solid" className="mt-10 lg:mt-[73px]" />
          </div>

          {/* Phone over concentric discs, clipped by the card edge */}
          <div className="relative mx-auto mt-10 h-[300px] w-full max-w-[390px] lg:absolute lg:top-0 lg:right-0 lg:mt-0 lg:h-full lg:w-[634px] lg:max-w-none">
            {/* Discs pulse out of phase so the glow ripples outward */}
            <div className="absolute top-[50px] left-1/2 size-[420px] -translate-x-1/2 animate-pulse-disc rounded-full bg-[#d9d9d9]/[0.06] backdrop-blur-[30px] [animation-delay:0.6s] lg:top-[79px] lg:size-[609px]" />
            <div className="absolute top-[85px] left-1/2 size-[350px] -translate-x-1/2 animate-pulse-disc rounded-full bg-[#d9d9d9]/[0.12] backdrop-blur-[30px] lg:top-[129px] lg:size-[509px]" />
            <img
              src={phone}
              alt="Velto bot chat in Telegram"
              className="absolute top-[20px] left-1/2 w-[240px] -translate-x-1/2 lg:top-[59px] lg:w-[352px]"
            />
          </div>
        </div>
      </Reveal>
    </section>
  )
}
