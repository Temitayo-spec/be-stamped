'use client'
import logo from '@/public/svgs/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import burger from '@/public/svgs/burger.svg'
import {useNavigation} from '@/store/navigation'
import Navbar from './Navbar'
import {usePathname} from 'next/navigation'

const Header = () => {
  const {open, isOpen} = useNavigation()

  const pathname = usePathname()

  const checkForPathname =
    pathname === '/case-studies' ||
    pathname === '/about' ||
    pathname === '/contact' ||
    pathname === '/services'
  return (
    <>
      {isOpen && <Navbar />}
      <div className="relative z-10">
        <div className="flex justify-between items-center pt-8 w-[95%] mx-auto max-w-[1440px]">
          <Link href={'/'}>
            <Image src={logo} alt="Bestamped Logo" />
          </Link>

          <div className="flex items-center gap-6">
            {!checkForPathname && (
              <Link
                href="#"
                className="py-5 px-4 flex items-center justify-center bg-[linear-gradient(266deg,rgba(104,33,139,0.27)_-12.32%,rgba(17,36,74,0.07)_143.15%)] rounded-[0.375rem]"
              >
                Discover Your Archetype
              </Link>
            )}

            <div className="cursor-pointer" onClick={open}>
              <Image src={burger} alt="hamburger menu" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
