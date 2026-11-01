import wave from '../assets/wave.webp'
import { Reveal } from './Reveal'

export function BuiltFor() {
  return (
    <section className="relative mt-[60px] overflow-hidden lg:mt-[130px]">
      <img
        src={wave}
        alt=""
        className="pointer-events-none absolute top-1/2 left-1/2 w-[605px] max-w-none -translate-x-1/2 -translate-y-1/2 lg:w-full lg:min-w-[1512px]"
      />
      <Reveal className="relative">
        <h2 className="mx-auto max-w-[381px] px-5 py-5 text-center text-[25px] leading-tight font-extrabold lg:max-w-[1109px] lg:py-[90px] lg:text-[75px] lg:leading-[1.2]">
          Built for Telegram community admins and creators
        </h2>
      </Reveal>
    </section>
  )
}
