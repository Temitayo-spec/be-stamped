'use client'
import * as Icons from 'lucide-react'
import Link from 'next/link'
import location from '@/public/svgs/location.svg'
import phone from '@/public/svgs/phone.svg'
import Image from 'next/image'
import {useNavigation} from '@/store/navigation'
import {motion, AnimatePresence} from 'framer-motion'
import {useState, useEffect} from 'react'

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
  const {close, isOpen} = useNavigation()
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    if (isOpen) {
      // Show content after navbar scales up
      const timer = setTimeout(() => setShowContent(true), 300)
      return () => clearTimeout(timer)
    } else {
      // Hide content immediately when closing starts
      setShowContent(false)
    }
  }, [isOpen])

  const handleClose = () => {
    setShowContent(false)
    // Wait for content to animate out before closing navbar
    setTimeout(() => close(), 800)
  }

  // Navbar container animation
  const navbarVariants = {
    hidden: {
      scaleY: 0,
      transformOrigin: 'top',
    },
    visible: {
      scaleY: 1,
      transformOrigin: 'top',
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: {
      scaleY: 0,
      transformOrigin: 'top',
      transition: {
        duration: 0.8,
        ease: [0.55, 0.06, 0.68, 0.19],
      },
    },
  }

  const linksContainerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.25,
      },
    },
    exit: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        staggerDirection: -1,
      },
    },
  }

  // Individual link animation
  const linkVariants = {
    hidden: {
      y: '100%',
      opacity: 0,
    },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: {
      y: '100%',
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: [0.55, 0.06, 0.68, 0.19],
      },
    },
  }

  // Contact info animation
  const contactVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.6, // Delay after links appear
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="bg-[rgba(0,0,0,0.25)] backdrop-blur-xs fixed top-0 left-0 w-full h-screen z-50"
          variants={navbarVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="flex flex-col pt-8 w-[95%] mx-auto max-w-[1440px] h-full">
            <div className="overflow-hidden ml-auto">
              <motion.div
                className="cursor-pointer"
                onClick={handleClose}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Icons.X className="text-white w-10 h-10" />
              </motion.div>
            </div>

            <div className="flex justify-between mt-[7.5rem] flex-1">
              <AnimatePresence>
                {showContent && (
                  <motion.ul
                    className="flex flex-col gap-9 font-playfair italic text-[3.25rem] font-semibold"
                    variants={linksContainerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {Links.map((link, index) => (
                      <li key={link.title} className="overflow-hidden">
                        <motion.div variants={linkVariants}>
                          <Link
                            href={link.href}
                            className="leading-[140%] block"
                            onClick={handleClose}
                          >
                            {link.title}
                          </Link>
                        </motion.div>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {showContent && (
                  <motion.div
                    className="self-end justify-self-end -translate-y-20"
                    variants={contactVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
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
                        <p className="text-[1.875rem] font-bold leading-[120%]">
                          (234) 81-2555-0120
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center mt-[3.2rem] gap-9 text-lg font-medium pb-[1.1rem] border-b border-b-grey-500">
                      <Link
                        href="#"
                        target="_blank"
                        className="leading-[140%]"
                        onClick={handleClose}
                      >
                        Facebook
                      </Link>
                      <Link
                        href="#"
                        target="_blank"
                        className="leading-[140%]"
                        onClick={handleClose}
                      >
                        Linkedin
                      </Link>
                      <Link
                        href="#"
                        target="_blank"
                        className="leading-[140%]"
                        onClick={handleClose}
                      >
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
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Navbar
