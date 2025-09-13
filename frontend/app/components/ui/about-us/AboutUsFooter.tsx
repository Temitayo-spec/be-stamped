import Link from 'next/link'
import location from '@/public/svgs/location.svg'
import phone from '@/public/svgs/phone.svg'
import Image from 'next/image'

const AboutUsFooter = () => {
  return (
    <footer className='pt-[19rem] pb-48'>
      <div className="flex justify-between gap-10 w-[90%] mx-auto max-w-[1280px]">
        <div className="inline-flex flex-col gap-6 max-w-[40.375rem]">
          <h2 className="inline-flex flex-col font-playfair italic text-[4rem] leading-[120%] font-bold">
            Ready to leave your mark?
          </h2>
          <p className="text-[2rem] leading-[160%] font-medium">Let’s stamp your brand into the future.</p>
        </div>

        <div className="self-end justify-self-end translate-y-28">
          <div className="flex flex-col gap-8">
            <div className="flex gap-3">
              <span>
                <Image src={location} alt="location icon" />
              </span>
              <p className="text-lg leading-[140%] max-w-[15.4375rem]">
                901 N Pitt Str., Suite 170 Lagos, Nigeria.
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <span>
                <Image src={phone} alt="phone icon" />
              </span>
              <p className="text-[1.875rem] font-bold leading-[120%]">(234) 81-2555-0120</p>
            </div>
          </div>

          <div className="flex items-center mt-[3.2rem] gap-9 text-lg font-medium pb-[1.1rem] border-b border-b-grey-500">
            <Link href="#" target="_blank" className="leading-[140%]">
              Facebook
            </Link>
            <Link href="#" target="_blank" className="leading-[140%]">
              Linkedin
            </Link>
            <Link href="#" target="_blank" className="leading-[140%]">
              Instagram
            </Link>
          </div>

          <Link
            href="mailto:info@bestamped.com"
            target="_blank"
            className="mt-4 text-[2.5rem] font-bold leading-[120%] block"
          >
            info@bestamped.com
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default AboutUsFooter
