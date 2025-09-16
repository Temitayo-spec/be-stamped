import Header from '../../shared/Header'
import services_hero_banner from '@/public/images/services_hero_banner.png'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full">
      <Header />
      <Image
        src={services_hero_banner}
        alt="services hero banner"
        className="absolute top-0 left-0 w-full h-full pointer-events-none object-cover"
        fill
        quality={100}
        placeholder="blur"
      />

      <header className="relative mt-[7.5rem] w-[90%] mx-auto max-w-[1280px] flex flex-col items-center gap-9">
        <div className="py-1 px-4 flex items-center justify-center rounded-2xl border-[1.2px] border-white uppercase text-xl font-bold leading-[140%]">
          SERVICES
        </div>
        <div className="flex flex-col gap-8 items-center text-center">
          <h1 className="font-playfair italic max-w-[52.8125rem] text-[4rem] font-bold leading-[140%]">
            We build bold brands that leave a mark.
          </h1>
          <p className="text-2xl font-medium leading-[140%] max-w-[46.9375rem]">
            From strategy to storytelling, design to digital, we help you own your space —
            beautifully and unapologetically.
          </p>
        </div>
      </header>
    </section>
  )
}

export default HeroSection
