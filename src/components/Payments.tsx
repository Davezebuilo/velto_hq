import coins from '../assets/coins.webp'
import paypal from '../assets/icon-paypal.svg'
import paystack from '../assets/icon-paystack.svg'
import stripe from '../assets/icon-stripe.svg'
import usdt from '../assets/icon-usdt.svg'
import { Reveal } from './Reveal'

const methods = [
  { icon: usdt, label: 'Stable coins' },
  { icon: stripe, label: null, alt: 'Stripe', wide: true },
  { icon: paystack, label: 'Paystack' },
  { icon: paypal, label: 'Paypal' },
]

export function Payments() {
  return (
    <section className="container-site relative z-10 lg:mt-[61px]">
      <Reveal>
        <div className="glass-card flex flex-col gap-8 px-[26px] pt-10 pb-6 lg:h-[517px] lg:flex-row lg:items-center lg:justify-between lg:gap-0 lg:px-[90px] lg:py-0">
          {/* Soft light blooms */}
          <div className="pointer-events-none absolute -top-20 left-4 size-[133px] rounded-full bg-[#d9d9d9]/40 blur-[90px]" />
          <div className="pointer-events-none absolute right-[30%] bottom-[-40px] size-[89px] rounded-full bg-[#d9d9d9]/30 blur-[80px]" />

          <div className="relative max-w-[728px]">
            <h2 className="text-[25px] leading-tight font-extrabold lg:text-[50px] lg:leading-[61px]">
              Various payment methods to make things easier and more secure
            </h2>
            <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 lg:mt-[92px] lg:gap-x-[50px]">
              {methods.map((m) => (
                <li key={m.label ?? m.alt} className="flex items-center gap-2">
                  <img
                    src={m.icon}
                    alt={m.alt ?? ''}
                    className={m.wide ? 'h-11 w-auto lg:h-14' : 'h-5 w-auto lg:h-[29px]'}
                  />
                  {m.label && <span className="text-xs lg:text-xl">{m.label}</span>}
                </li>
              ))}
            </ul>
          </div>

          <img
            src={coins}
            alt="Gold coins stacked behind a shield with a check mark"
            className="relative mx-auto w-[300px] lg:mx-0 lg:mr-[-12px] lg:w-[436px]"
          />
        </div>
      </Reveal>
    </section>
  )
}
