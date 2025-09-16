'use client'
import {motion} from 'framer-motion'
import * as React from 'react'
import {useEffect, useState} from 'react'

interface AnimatedTitleLinesProps {
  titleLines: string[]
  className?: string
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  tagClassName?: string
  extraDelay?: number
}

const AnimatedTitleLines: React.FC<AnimatedTitleLinesProps> = ({
  titleLines,
  className,
  tag = 'h1',
  tagClassName,
  extraDelay = 0,
}) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const displayLines = isMobile ? [titleLines.join(' ')] : titleLines

  const Tag = motion[tag] as any

  return (
    <div className={`text-center ${className}`}>
      {displayLines.map((line, index) => (
        <div key={index} className="overflow-hidden">
          <Tag
            initial={{y: '100%'}}
            whileInView={{y: 0}}
            transition={{
              duration: 1,
              delay: index * 0.3 + extraDelay,
              ease: [0.33, 1, 0.68, 1],
            }}
            className={
              tag === 'h1'
                ? `font-medium font-display text-4xl lg:text-[4.0625rem] tracking-[-0.03125rem] lg:tracking-[-0.0625rem] leading-[2.75rem] lg:leading-[4.375rem] ${tagClassName || ''}`
                : tagClassName
            }
            style={
              tag === 'h1'
                ? {
                    background:
                      'linear-gradient(145deg, #FFF 28.96%, rgba(255,255,255,0.39) 75.66%)',
                    color: 'transparent',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }
                : undefined
            }
          >
            {line}
          </Tag>
        </div>
      ))}
    </div>
  )
}

export default AnimatedTitleLines
