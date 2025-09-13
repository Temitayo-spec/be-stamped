import Header from '../../shared/Header'
import about_hero_banner from '@/public/images/about_hero_banner.png'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full">
      <Header />
      <Image
        src={about_hero_banner}
        alt="about hero banner"
        className="absolute top-0 left-0 w-full h-full pointer-events-none object-cover"
        fill
        quality={100}
        placeholder="blur"
      />

      <div className="relative mt-[7.5rem] w-[90%] mx-auto max-w-[1280px] flex justify-between">
        <div className="flex flex-col gap-[6.25rem]">
          <div className="flex flex-col gap-2">
            <h2 className="font-playfair italic font-semibold leading-[120%] text-[5rem]">10k+</h2>
            <p className="font-satoshi text-xl font-normal leading-[140%]">Completed projects</p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-playfair italic font-semibold leading-[120%] text-[5rem]">190k+</h2>
            <p className="font-satoshi text-xl font-normal leading-[140%]">Clients and partners</p>
          </div>
        </div>

        <div className="space-y-[3.75rem] flex flex-col items-start">
          <h2 className="font-playfair italic text-[4rem] font-bold leading-[140%] inline-flex flex-col">
            <span>We are not Just a Studio.</span>
            <span>We are a Signature.</span>
          </h2>

          <div className="flex flex-col gap-[1.75rem] items-start">
            <div className="py-1 px-4 flex items-center justify-center rounded-2xl border-[1.2px] border-white uppercase text-xl font-bold leading-[140%]">
              About us
            </div>

            <div>
              <p className="inline-flex flex-col text-2xl font-medium leading-[140%]">
                <span>We’re not building brands.</span>
                <span>We’re forging movements — one immersive,</span>
                <span>unapologetic experience at a time.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
