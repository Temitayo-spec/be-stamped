'use client'
import * as Icons from 'lucide-react'
import Link from 'next/link'
import location from '@/public/svgs/location.svg'
import phone from '@/public/svgs/phone.svg'
import Image from 'next/image'
import {useNavigation} from '@/store/navigation'

const Links = [
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Services',
    href: '/services',
  },
  {
    title: 'Case Studies',
    href: '/case-studies',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
]

const Navbar = () => {
  const {close} = useNavigation()

  return (
    <div className="bg-[rgba(0,0,0,0.25)] backdrop-blur-xs fixed top-0 left-0 w-full h-screen z-50">
      <div className="flex flex-col pt-8 w-[95%] mx-auto max-w-[1440px]">
        <div className="ml-auto cursor-pointer" onClick={close}>
          <Icons.X className="text-white w-10 h-10" />
        </div>

        <div className="flex justify-between mt-[7.5rem]">
          <ul className="flex flex-col gap-9 font-playfair italic text-[3.25rem] font-semibold">
            {Links.map((link) => (
              <li key={link.title}>
                <Link href={link.href} className="leading-[140%]">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>

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
      </div>
    </div>
  )
}

export default Navbar
