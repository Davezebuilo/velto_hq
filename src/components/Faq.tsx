import { useId, useState } from 'react'
import { FAQS } from '../content'

export function Faq() {
  const [open, setOpen] = useState<number | null>(null)
  const baseId = useId()

  return (
    <section id="faq" className="container-site mt-[60px] lg:mt-[130px] lg:max-w-[1362px]">
      <h2 className="section-title text-heading">FAQs</h2>
      <p className="section-sub mt-2.5 lg:mt-[22px]">We get these questions a lot</p>

      <ul className="mt-6 space-y-2.5 lg:mt-10 lg:space-y-10">
        {FAQS.map((item, i) => {
          const isOpen = open === i
          const panelId = `${baseId}-panel-${i}`
          const buttonId = `${baseId}-button-${i}`
          return (
            <li
              key={item.q}
              className="rounded-[15px] border border-white/20 bg-white/[0.03] backdrop-blur-[10px] transition-colors hover:border-white/30 lg:rounded-[20px]"
            >
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 px-[38px] py-[25px] text-left text-sm lg:py-[38px] lg:text-xl lg:leading-[34px] lg:font-medium"
                >
                  {item.q}
                  <span
                    aria-hidden
                    className={`relative size-4 shrink-0 transition-transform duration-300 lg:size-5 ${isOpen ? 'rotate-45' : ''}`}
                  >
                    <span className="absolute top-1/2 left-0 h-[2px] w-full -translate-y-1/2 rounded bg-white" />
                    <span className="absolute top-0 left-1/2 h-full w-[2px] -translate-x-1/2 rounded bg-white" />
                  </span>
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
              >
                <div className="overflow-hidden">
                  <p className="px-[38px] pb-[25px] text-sm leading-relaxed text-white/60 lg:pb-[38px] lg:text-lg lg:leading-[30px]">
                    {item.a}
                  </p>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
