import logo_1 from '@/public/svgs/logo_1.svg'
import logo_2 from '@/public/svgs/logo_2.svg'
import logo_3 from '@/public/svgs/logo_3.svg'
import logo_4 from '@/public/svgs/logo_4.svg'
import logo_5 from '@/public/svgs/logo_5.svg'
import logo_6 from '@/public/svgs/logo_6.svg'
import logo_7 from '@/public/svgs/logo_7.svg'
import logo_8 from '@/public/svgs/logo_8.svg'
import logo_9 from '@/public/svgs/logo_9.svg'
import Image from 'next/image'
const clients = [
  logo_1,
  logo_2,
  logo_3,
  logo_4,
  logo_5,
  logo_6,
  logo_7,
  logo_8,
  logo_9,
  logo_1,
  logo_2,
  logo_3,
]

const WhoWeAre = () => {
  return (
    <section>
      <div className="w-[90%] mx-auto max-w-[1280px] pt-[7.5rem] flex flex-col gap-[3.75rem] pb-[13.79rem]">
        <h2 className="font-playfair italic text-[7.5rem] font-semibold leading-[120%]">
          Who we are
        </h2>

        <div className="ml-auto -translate-x-16 max-w-[45rem] flex flex-col gap-3 text-2xl leading-[160%] font-medium">
          <p>
            <span>
              We’re <span className="font-playfair italic font-bold">BeStamped</span> — an
              innovation-led creative agency built to
            </span>
            <span>break the box and then design it better.</span>
          </p>

          <p>
            <span>We design mind-bending, awe-inducing digital experiences that</span>
            <span>tell bold stories.</span>
          </p>
          <p>
            <span>From strategy to 3D interactions, we stamp brands into the</span>
            <span>future with tools, tech, and taste.</span>
          </p>
          <p>
            <span>
              Why <span className="font-playfair italic font-bold">“BeStamped”?</span> Because we
              believe unforgettable brands
            </span>
            <span>leave a mark — and we make it bold, interactive, and yours.</span>
          </p>
          <p>
            <span>Yes, it’s a lot to ask from pixels and code. But trust us — they’re</span>
            <span>up for it.</span>
          </p>
        </div>

        <div className="mt-[9.94rem] ml-auto space-y-6 max-w-[35.0625rem]">
          <h2 className="font-playfair text-[5rem] italic leading-[120%] font-semibold">
            Clients We’ve Stamped
          </h2>
          <p className="text-2xl font-medium leading-[160%] inline-flex flex-col">
            <span>We’ve worked with daring startups, global giants,</span>
            <span>and visionaries who want more than just “good.”</span>
            <span>They want transformative, beautiful, strategic — </span>
            <span>and they come to us for it.</span>
          </p>
        </div>

        <div className="grid grid-cols-3 gap-x-[2.66rem] gap-y-[2.3rem]">
          {clients.map((client, i) => (
            <div
              key={i}
              className="max-w-[24.06106rem] h-[9.64244rem] py-[0.94625rem] px-[1.80231rem] flex items-center justify-center bg-white rounded-xl"
            >
              <Image src={client} alt="Client" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre
