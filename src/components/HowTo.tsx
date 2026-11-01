import grid from '../assets/grid.webp'
import phone from '../assets/howto-phone.webp'
import stepConnect from '../assets/step-connect.webp'
import stepPaid from '../assets/step-paid.webp'
import stepPreferences from '../assets/step-preferences.webp'
import streaks from '../assets/howto-streaks.webp'
import { STEPS } from '../content'
import { Reveal } from './Reveal'

const stepImages = [
  { src: stepConnect, alt: 'Velto connecting to Telegram' },
  { src: stepPreferences, alt: 'Preferences screen with subscription options' },
  { src: stepPaid, alt: 'Payment icons for stablecoins and cash' },
]

function StepNumber({ n }: { n: number }) {
  return (
    <div className="relative grid size-[52px] shrink-0 place-items-center rounded-full border border-white/30 shadow-[0_0_24px_rgba(255,255,255,0.25)] lg:size-[95px] lg:border-2">
      <div className="absolute inset-[3px] rounded-full border border-white/70 lg:inset-[6px] lg:border-2" />
      <div className="grid size-[38px] place-items-center rounded-full border border-white/45 bg-black lg:size-[69px] lg:border-2">
        <span className="text-[27px] leading-none font-semibold lg:text-[50px]">{n}</span>
      </div>
    </div>
  )
}

function StepCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="w-full max-w-[370px] rounded-xl border-[0.7px] border-white/50 bg-white/15 px-[18px] py-5 text-center shadow-[0_0_64px_rgba(255,255,255,0.1)] backdrop-blur-[28px] lg:rounded-[21px] lg:px-8 lg:py-9">
      <h3 className="text-[13px] font-bold text-white/90 lg:text-2xl lg:leading-[21px]">{title}</h3>
      <p className="mt-1.5 text-[10px] leading-[1.25] font-medium text-white/60 lg:mt-3 lg:text-lg lg:leading-[22px]">
        {text}
      </p>
    </div>
  )
}

export function HowTo() {
  return (
    <section className="relative mx-auto mt-[62px] max-w-[1512px] overflow-hidden rounded-[40px] pb-16 lg:pb-[167px]">
      {/* Background layers: dotted grid, pink bloom, light streaks */}
      <div
        className="pointer-events-none absolute inset-x-0 top-[211px] bottom-0 opacity-70"
        style={{ backgroundImage: `url(${grid})`, backgroundSize: '1449px auto', backgroundPosition: 'top center' }}
      />
      <div className="pointer-events-none absolute top-0 left-1/2 h-full w-[628px] -translate-x-1/2 rounded-full bg-brand-pink/10 blur-[200px]" />
      <img
        src={streaks}
        alt=""
        className="pointer-events-none absolute top-[60px] left-1/2 w-[760px] max-w-none -translate-x-1/2 lg:top-[228px] lg:w-[1486px]"
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[120px] bg-linear-to-b from-black to-transparent" />

      <div className="relative">
        <h2 className="section-title pt-10 lg:pt-[90px]">How to use Velto</h2>

        <Reveal className="mx-auto mt-6 w-[300px] lg:mt-[57px] lg:w-[583px]">
          <img src={phone} alt="Velto bot welcome screen in Telegram: “What can this bot do?”" />
        </Reveal>

        {/* Steps: alternating card / phone around a centre line (left-aligned line on mobile) */}
        <ol className="relative mx-auto mt-12 flex max-w-[1033px] flex-col gap-6 px-5 lg:mt-[80px] lg:gap-0 lg:px-0">
          <div className="absolute top-[26px] bottom-[26px] left-[46px] w-px bg-linear-to-b from-white/0 via-white/60 to-white/0 lg:top-[186px] lg:bottom-[186px] lg:left-1/2" />
          {STEPS.map((step, i) => {
            const cardLeft = i % 2 === 0
            const img = stepImages[i]
            return (
              <li
                key={step.title}
                className="relative grid grid-cols-[52px_1fr] items-center gap-x-4 gap-y-4 lg:h-[372px] lg:grid-cols-[1fr_95px_1fr] lg:gap-x-0"
              >
                <div className="lg:col-start-2 lg:row-start-1">
                  <StepNumber n={i + 1} />
                </div>
                <Reveal
                  className={`col-start-2 lg:row-start-1 lg:flex ${
                    cardLeft ? 'lg:col-start-1 lg:justify-end lg:pr-[18px]' : 'lg:col-start-3 lg:justify-start lg:pl-[18px]'
                  }`}
                >
                  <StepCard title={step.title} text={step.text} />
                </Reveal>
                <Reveal
                  delay={120}
                  className={`col-start-2 lg:row-start-1 lg:flex ${
                    cardLeft ? 'lg:col-start-3 lg:justify-start lg:pl-[115px]' : 'lg:col-start-1 lg:justify-end lg:pr-[115px]'
                  }`}
                >
                  <img src={img.src} alt={img.alt} className="w-[150px] lg:-my-8 lg:w-[245px]" />
                </Reveal>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
