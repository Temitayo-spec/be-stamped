import Link from 'next/link'
import React from 'react'

const ServicesFooter = () => {
  return (
    <footer className='pt-[15rem]'>
      <div className="w-[90%] mx-auto max-w-[1280px] flex flex-col gap-[3.75rem] items-center">
        <div className="flex items-center flex-col gap-8 text-center">
          <h2 className="max-w-[49.8125rem] text-[4rem] font-playfair italic font-bold leading-[140%]">
            Let’s make something iconic.
          </h2>
          <p className="max-w-[36.1875rem] text-2xl font-medium leading-[140%]">
            Whether you’re starting from scratch or ready to reinvent, we’re here to build brands
            that make waves.
          </p>
        </div>

        <Link
          href="/"
          className="w-[6.25rem] h-[6.25rem] py-[2.875rem] px-6 flex items-center justify-center rounded-full bg-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="66"
            height="12"
            viewBox="0 0 66 12"
            fill="none"
          >
            <path d="M0 10.9783L64 10.9783L51.4393 1.02272" stroke="#1A1E23" strokeWidth="0.8" />
          </svg>
        </Link>
      </div>
    </footer>
  )
}

export default ServicesFooter