'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function NationalDayShowcase() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)

    return () => {
      window.removeEventListener('resize', checkIsMobile)
    }
  }, [])

  return (
    <section className="w-full py-8 md:py-12 lg:py-16">
      <div className="max-w-10/12 mx-auto px-4 lg:px-6">
        {/* Main Content Grid - Stack vertically on mobile */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-6">

          {/* Left Section - Text and Gift Box */}
          <div className="flex flex-col h-[400px] md:h-[500px] lg:h-[700px] bg-white rounded-lg overflow-hidden shadow-md md:shadow-none">
            {/* Text Content */}
            <div className="p-6 md:p-8 flex-shrink-0 ml-0 md:ml-2 text-center md:text-left">
              <span className="font-caslon text-xs text-[#600703] uppercase tracking-[0.2em] mb-2 block">
                Limited Edition
              </span>
              <h2 className="font-caslon text-2xl md:text-3xl font-normal text-[#600703] mb-4 md:mb-6 tracking-wide leading-tight">
                National Day UAE
              </h2>
              <Link
                href="/collections/national-day-uae"
                className="inline-block border border-[#600703] text-[#600703] hover:bg-[#600703] hover:text-white px-5 py-2.5 font-caslon text-sm font-normal tracking-wider uppercase transition-all duration-300 rounded-lg"
              >
                Explore Collection
              </Link>
            </div>

            {/* Gift Box Image */}
            <div className="relative flex-1 overflow-hidden group flex items-center justify-center p-4">
              <div className="relative w-full h-full">
                <Image
                  src="/national-day/1.jpeg"
                  alt="Sultana Silk Gift Box"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                  priority={isMobile}
                />
              </div>
            </div>
          </div>

          {/* Center Section - Model with Scarf */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[700px] overflow-hidden group flex items-center justify-center rounded-lg shadow-md md:shadow-none mt-4 md:mt-0">
            <div className="relative w-full h-full">
              <Image
                src="/national-day/2.jpeg"
                alt="UAE National Day Collection Model"
                fill
                className="object-cover md:object-contain transition-transform duration-700 group-hover:scale-105"
                priority={isMobile}
              />
            </div>

            {/* Text Overlay - Responsive adjustments */}
            <div className="absolute bottom-4 md:bottom-8 z-10 text-center mx-auto left-0 right-0 w-4/5 bg-black/70 p-3 md:p-4 rounded">
              <h3 className="font-caslon text-lg md:text-xl lg:text-2xl font-normal text-white mb-1 md:mb-2 tracking-wide">
                UAE NATIONAL DAY
              </h3>
              <p className="font-caslon text-xs text-white/90 tracking-[0.15em] md:tracking-[0.2em] uppercase">
                Presented by<br />
                <span className="text-xs md:text-sm">Sultana Silk Scarves</span>
              </p>
            </div>
          </div>

          {/* Right Section - Scarf Display */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[700px] overflow-hidden group flex items-center justify-center rounded-lg shadow-md md:shadow-none mt-4 md:mt-0">
            <div className="relative w-full h-full">
              <Image
                src="/national-day/3.jpeg"
                alt="UAE Flag Scarf Design"
                fill
                className="object-cover md:object-contain transition-transform duration-700 group-hover:scale-105"
                priority={isMobile}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
