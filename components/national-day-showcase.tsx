'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function NationalDayShowcase() {
  return (
    <section className="w-full py-8 lg:py-12">
      <div className="max-w-full mx-auto px-2 lg:px-4">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4">

          {/* Left Section - Text and Gift Box */}
          <div className="flex flex-col h-[600px] lg:h-[700px]">
            {/* Text Content */}
            <div className="bg-white p-8 flex-shrink-0">
              <span className="font-caslon text-sm text-[#600703] uppercase tracking-[0.2em] mb-2 block">
                Limited Edition
              </span>
              <h2 className="font-caslon text-3xl lg:text-4xl font-normal text-[#600703] mb-6 tracking-wide leading-tight">
                National Day UAE
              </h2>
              <Link
                href="/collections/national-day-uae"
                className="inline-block border-2 border-[#600703] text-[#600703] hover:bg-[#600703] hover:text-white px-6 py-3 font-caslon text-base font-normal tracking-wide uppercase transition-all duration-300"
              >
                Explore Collection
              </Link>
            </div>

            {/* Gift Box Image */}
            <div className="relative flex-1 overflow-hidden group">
              <Image
                src="/national-day/1.jpeg"
                alt="Sultana Silk Gift Box"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Center Section - Model with Scarf */}
          <div className="relative h-[600px] lg:h-[700px] overflow-hidden group">
            <Image
              src="/national-day/2.jpeg"
              alt="UAE National Day Collection Model"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

            {/* Bottom Text Overlay */}
            <div className="absolute bottom-8 left-8 right-8 z-10 text-center">
              <h3 className="font-caslon text-2xl lg:text-3xl font-normal text-white mb-2 tracking-wide">
                UAE NATIONAL DAY
              </h3>
              <p className="font-caslon text-sm text-white/90 tracking-[0.2em] uppercase">
                Presented by<br />
                <span className="text-lg">Sultana Silk Scarves</span>
              </p>
            </div>
          </div>

          {/* Right Section - Scarf Display */}
          <div className="relative h-[600px] lg:h-[700px] overflow-hidden group">
            <Image
              src="/national-day/3.jpeg"
              alt="UAE Flag Scarf Design"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Light overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent"></div>
          </div>

        </div>
      </div>
    </section>
  )
}
