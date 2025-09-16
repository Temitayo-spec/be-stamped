//'use client'
import Link from 'next/link'
import {Header, Navbar} from '../..'
import Image from 'next/image'
import blob from '@/public/images/blob.gif'
import {useNavigation} from '@/store/navigation'

const Inject = () => {
  return (
    <main className='bg-background min-h-screen'>
      <Header />

      <div
        className="bg-[linear-gradient(90deg,#214B97_-81.02%,#040409_94.07%)]
  h-screen fixed left-0 top-0 w-[40%] pointer-events-none
  mix-blend-screen opacity-80"
      ></div>

      <div
        className="bg-[linear-gradient(90deg,#214B97_-81.02%,#040409_94.07%)]
  h-screen fixed top-0 right-0 w-[40%] pointer-events-none rotate-180
  mix-blend-screen opacity-80"
      ></div>

      <div className="mx-auto flex flex-col items-center mt-[1.13rem] gap-[1.13rem]">
        <Link
          href="/case-studies"
          className="text-sm font-bold leading-[120%] underline underline-offset-4"
        >
          VIEW CASE STUDIES
        </Link>

        <div>
          <Image src={blob} alt="blob" className="" quality={100} />
        </div>
      </div>
    </main>
  )
}

export default Inject
