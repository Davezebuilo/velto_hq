import { AccessKey } from './AccessKey'
import { Gears } from './Gears'
import { RecurringArrows } from './RecurringArrows'
import { Reveal } from './Reveal'
import { SecureShield } from './SecureShield'

// Each card's art is an animated SVG drawn in the 658×475 design space, so it scales with the card
// on every breakpoint and is clipped by the card edge like in Figma.
const features = [
  {
    title: 'Secure Payments',
    text: 'Global payment methods (Stripe, PayPal, Crypto)',
    art: <SecureShield />,
    card: 'from-[#ff1cf7] to-[#d216cc] shadow-[inset_-15px_-10px_0_#a80aa3]',
  },
  {
    title: 'Automated paywalls',
    text: 'No manual approval needed. keep your group members exclusive',
    art: <Gears />,
    card: 'from-[#ff8c00] to-[#bc6903] shadow-[inset_-15px_-10px_0_#ba6802]',
  },
  {
    title: 'Real-Time Access Control',
    text: 'Instantly add or remove members based on payments',
    art: <AccessKey />,
    card: 'from-[#00d564] to-[#008c41] shadow-[inset_-15px_-10px_0_#007737]',
  },
  {
    title: 'Recurring Subscription',
    text: 'Members get access instantly after payment',
    art: <RecurringArrows />,
    card: 'from-[#007bff] to-[#025ec1] shadow-[inset_-15px_-10px_0_#004a99]',
  },
]

export function Features() {
  return (
    <section className="container-site mt-[70px] lg:mt-[130px] lg:max-w-[1386px]">
      <h2 className="section-title">Key Features</h2>
      <p className="section-sub mt-2.5 lg:mt-[22px]">What makes Velto right for you</p>

      <div className="mt-[41px] grid gap-[18px] md:grid-cols-2 lg:mt-[77px] lg:gap-[30px]">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={(i % 2) * 120}>
            <article
              className={`relative aspect-[658/475] overflow-hidden rounded-[18px] bg-linear-to-b p-[24px] transition-transform duration-300 hover:-translate-y-1 lg:rounded-[30px] lg:p-10 ${f.card}`}
            >
              <h3 className="text-[23.7px] leading-tight font-extrabold xl:text-[40px] xl:leading-[34px]">
                {f.title}
              </h3>
              <p className="mt-2 max-w-[514px] text-[16.5px] leading-snug font-medium xl:mt-9 xl:text-[28px] xl:leading-[38px]">
                {f.text}
              </p>
              {f.art}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
