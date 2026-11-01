import { AboutRings } from './AboutRings'
import { Reveal } from './Reveal'

export function About() {
  return (
    <section id="about" className="container-site mt-12 lg:mt-[47px]">
      <Reveal>
        <div className="glass-card flex flex-col rounded-[20px] border-white/15 bg-linear-to-br from-white/5 to-brand-pink/5 backdrop-blur-[4px] lg:block lg:h-[736px] lg:rounded-[40px]">
          <div className="relative z-10 px-[18px] pt-[52px] lg:max-w-[840px] lg:pt-[141px] lg:pr-0 lg:pl-[63px]">
            <h2 className="text-center text-[25px] font-extrabold lg:text-left lg:text-[50px] lg:leading-[35px]">
              About Velto
            </h2>
            <div className="mt-[18px] space-y-[13px] text-lg leading-[28px] text-white/60 lg:mt-12 lg:space-y-[34px] lg:text-2xl lg:leading-[50px]">
              <p className="lg:max-w-[755px]">
                Velto is a Telegram bot designed for creators, coaches, community leaders, etc, who
                want to monetize access to private Telegram groups.
              </p>
              <p className="lg:max-w-[737px]">
                Whether you’re running a coaching program, sharing premium content, or building a
                close-knit community, Velto Bot takes care of payments and automation so you can
                focus on creating value while your group runs smoothly.
              </p>
            </div>
          </div>

          {/* Mobile: full ring centred under the text (overlapping it slightly); desktop: cropped ring on the right */}
          <AboutRings variant="mobile" className="-mt-[111px] block aspect-[390/546] w-full lg:hidden" />
          <AboutRings variant="desktop" className="absolute top-0 right-0 hidden aspect-[830/736] h-full lg:block" />
        </div>
      </Reveal>
    </section>
  )
}
