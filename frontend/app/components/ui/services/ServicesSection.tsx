'use client'
import React, {useState} from 'react'

const ServicesSection = () => {
  return (
    <div>
      <ServicesShowcase />
    </div>
  )
}

export default ServicesSection

import {ChevronDown} from 'lucide-react'

interface Service {
  id: number
  title: string
  subtitle: string
  description: string
  image?: string
}

const ServicesShowcase: React.FC = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null)

  const services: Service[] = [
    {
      id: 1,
      title: 'Brand Strategy',
      subtitle: 'Positioning that sticks.',
      description:
        'We offer targeted creative support so your brand tells a story you understand as you evolve.',
    },
    {
      id: 2,
      title: 'Visual Identity',
      subtitle: 'Design systems that stand out.',
      description:
        "Creating cohesive visual languages that capture your brand's essence and resonate with your audience across all touchpoints.",
    },
    {
      id: 3,
      title: 'Website & Digital',
      subtitle: 'Sites that tell and sell.',
      description:
        'Digital experiences that combine beautiful design with strategic functionality to drive engagement and conversions.',
    },
    {
      id: 4,
      title: 'Content & Storytelling',
      subtitle: 'Narratives that resonate.',
      description:
        'Compelling content strategies that bring your brand story to life and create meaningful connections with your audience.',
    },
  ]

  const handleServiceClick = (serviceId: number) => {
    setExpandedService(expandedService === serviceId ? null : serviceId)
  }

  const formatNumber = (num: number) => num.toString().padStart(2, '0')

  return (
    <div className="min-h-screen">
      {/* Main Services Section */}
      <div className="max-w-7xl w-[80%] mx-auto py-[7.5rem]">
        {services.map((service, index) => (
          <div key={service.id} className="border-b border-gray-500 last:border-b-0">
            <div
              className="py-12 cursor-pointer group transition-all duration-300"
              onClick={() => handleServiceClick(service.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-start space-x-8">
                  <span className="text-white/20 text-2xl font-bold leading-[120%] mt-2">
                    {formatNumber(service.id)}
                  </span>
                  <div>
                    <h2 className="text-3xl lg:text-[2.5rem] font-medium leading-[140%] text-white mb-2 group-hover:text-gray-300 transition-colors duration-300">
                      {service.title}
                    </h2>
                    <p className="text-xl md:text-[2.5rem] text-grey-400 font-playfair italic font-medium">
                      {service.subtitle}
                    </p>
                  </div>
                </div>
                <button className="flex-shrink-0 w-16 h-16 border border-gray-600 rounded-full flex items-center justify-center group-hover:border-gray-400 transition-all duration-300 group-hover:bg-gray-800">
                  <ChevronDown
                    className={`w-6 h-6 text-gray-400 transition-all duration-300 ${
                      expandedService === service.id
                        ? 'rotate-180 text-white'
                        : 'group-hover:text-white'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Expanded Content */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expandedService === service.id ? 'max-h-96 pb-12' : 'max-h-0'
              }`}
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  <div className="flex-1 py-10 pl-[2rem]">
                    <p className="text-white text-2xl leading-[140%] font-medium">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex-1 lg:max-w-md">
                    <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                        alt="Team meeting"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
