'use client'
import React, {useState, useRef} from 'react'
import {motion, useMotionValue, animate, PanInfo} from 'framer-motion'

export default function DraggableCarousel({profiles}: {profiles: Profile[]}) {
  const [isDragging, setIsDragging] = useState(false)
  const [showDragHint, setShowDragHint] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)

  const CARD_WIDTH = 200
  const CARD_SPACING = 40
  const TOTAL_WIDTH = profiles.length * (CARD_WIDTH + CARD_SPACING)

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false)

    const velocity = info.velocity.x
    const momentum = velocity * 0.2
    const finalX = x.get() + momentum

    const maxDrag = 100
    const minDrag = -(TOTAL_WIDTH - window.innerWidth + 100)

    let constrainedX = finalX
    if (finalX > maxDrag) {
      constrainedX = maxDrag
    } else if (finalX < minDrag) {
      constrainedX = minDrag
    }

    animate(x, constrainedX, {
      type: 'spring',
      stiffness: 300,
      damping: 30,
    })
  }

  const handleDragStart = () => {
    setIsDragging(true)
    if (showDragHint) {
      setShowDragHint(false)
    }
  }

  return (
    <div className="relative">
      {/* Main carousel container */}
      <div
        ref={containerRef}
        className="relative h-full flex items-center cursor-grab active:cursor-grabbing"
      >
        {/* Drag indicator */}
        {showDragHint && (
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30"
          >
            <motion.div
              animate={{
                x: [0, 20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="bg-white/90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium shadow-lg w-16 h-16 flex items-center justify-center"
            >
              Drag
            </motion.div>
          </motion.div>
        )}

        <motion.div
          drag="x"
          dragConstraints={{
            left: -(TOTAL_WIDTH - window.innerWidth + 100),
            right: 100,
          }}
          dragElastic={0.1}
          dragTransition={{bounceStiffness: 300, bounceDamping: 30}}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          style={{x}}
          className="flex items-center gap-10 px-20"
        >
          {profiles.map((profile, index) => {
            // Alternate between up and down positions
            const isEven = index % 2 === 0
            const yOffset = isEven ? 80 : -80

            return (
              <motion.div
                key={profile.id}
                initial={{opacity: 0, scale: 0.8}}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: yOffset,
                }}
                transition={{
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.1,
                  transition: {duration: 0.2},
                }}
                className="relative flex-shrink-0 group"
              >
                {/* Profile container */}
                <div className="flex flex-col items-center">
                  {/* Profile Image */}
                  <motion.div
                    className="relative w-48 h-48 mb-4"
                    whileHover={{
                      y: isEven ? -10 : 10,
                      transition: {duration: 0.3},
                    }}
                  >
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 bg-white/5 rounded-full blur-2xl scale-125 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Image container with border */}
                    <div className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-gray-800 group-hover:ring-gray-700 transition-all duration-300">
                      <img
                        src={profile.image}
                        alt={profile.name}
                        className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                        draggable={false}
                      />

                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-40" />
                    </div>
                  </motion.div>

                  {/* Name */}
                  <motion.h3
                    className="text-white text-lg font-medium text-center whitespace-nowrap"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: index * 0.1 + 0.2}}
                  >
                    {profile.name}
                  </motion.h3>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}
