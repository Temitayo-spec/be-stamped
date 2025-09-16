import Image from 'next/image'
import {ServicesHeroSection} from '../..'
import ServicesFooter from './ServicesFooter'
import ServicesSection from './ServicesSection'
import footer_gradient from '@/public/svgs/footer_gradient.svg'

const Inject = () => {
  return (
    <main className="bg-grey-800">
      <ServicesHeroSection />
      <div className="relative pb-40">
        <Image
          src={footer_gradient}
          alt="footer gradient"
          className="absolute bottom-0 right-0 pointer-events-none object-contain"
        />
        <ServicesSection />
        <ServicesFooter />
      </div>
    </main>
  )
}

export default Inject
