import telegramIcon from '../assets/icon-telegram-btn.svg'
import { BOT_URL } from '../content'

type Variant = 'hero' | 'solid' | 'outline'

const styles: Record<Variant, string> = {
  // Hero CTA: gradient pill with Telegram icon (321×88 at desktop).
  hero: 'gap-2.5 rounded-[60px] bg-linear-to-r from-brand-pink to-brand-blue px-5 py-3 text-sm font-semibold shadow-[0_4px_7px_rgba(0,0,0,0.23),0_4px_44px_rgba(240,11,233,0.25),inset_0_4px_6px_rgba(0,0,0,0.25),inset_-1px_-4px_7px_rgba(0,0,0,0.25)] lg:px-[30px] lg:py-6 lg:text-xl',
  // Compact gradient pill (CTA banner).
  solid: 'rounded-[60px] bg-linear-to-r from-brand-pink to-brand-blue px-[26px] py-2.5 text-base font-semibold lg:text-xl lg:leading-[34px]',
  // Outlined pill (nav, mobile menu) with a spinning brand-gradient border glow.
  outline: 'glow-border rounded-full px-6 py-2 text-base font-bold leading-[34px]',
}

export function LaunchButton({
  variant = 'solid',
  className = '',
}: {
  variant?: Variant
  className?: string
}) {
  return (
    <a
      href={BOT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center whitespace-nowrap text-white transition duration-200 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:scale-[0.98] ${styles[variant]} ${className}`}
    >
      {variant === 'hero' && (
        <img src={telegramIcon} alt="" className="size-5 lg:size-10" />
      )}
      Launch on Telegram
    </a>
  )
}
