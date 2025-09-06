'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function CollectionShowcase() {
  return (
    <section className="w-full pt-8 md:pt-12 lg:pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-10 px-4 md:px-6 lg:px-10">
        {/* Left Collection - National Day UAE */}
        <div className="relative h-[50vh] md:h-[65vh] overflow-hidden group">
          {/* Background Image - Different for mobile and desktop */}
          <div className="absolute inset-0">
            {/* Mobile Image */}
            <Image
              src="/hero-section/1-m.jpeg"
              alt="National Day UAE Collection"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 md:hidden"
              priority
            />
            {/* Desktop Image */}
            <Image
              src="/hero-section/4.jpeg"
              alt="National Day UAE Collection"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 hidden md:block"
              priority
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>

          {/* Content Overlay */}
          <div className="relative z-10 h-full flex flex-col justify-end pb-8 md:justify-center md:pb-0 px-6 md:px-10 lg:px-14">
            {/* Limited Edition Badge */}
            <div className="mb-4 md:mb-6">
              <span className="font-caslon text-xs text-white/90 uppercase tracking-[0.2em] border border-white/40 px-3 py-1.5 rounded-full backdrop-blur-sm">
                Limited Edition
              </span>
            </div>

            {/* Main Title */}
            <h2 className="font-caslon text-2xl md:text-3xl lg:text-4xl font-normal text-white mb-4 md:mb-6 tracking-wide leading-tight">
              National Day UAE
            </h2>

            {/* CTA Button */}
            <div>
              <Link
                href="/collections/national-day-uae"
                className="inline-block border border-white text-white hover:bg-white hover:text-black px-4 md:px-6 py-2 md:py-2.5 font-caslon text-xs md:text-sm font-normal tracking-wider uppercase transition-all duration-300 backdrop-blur-sm"
              >
                Explore Collection
              </Link>
            </div>
          </div>
        </div>

        {/* Right Collection - Sultana */}
        <div className="relative h-[50vh] md:h-[65vh] overflow-hidden group">
          {/* Background Image - Different for mobile and desktop */}
          <div className="absolute inset-0">
            {/* Mobile Image */}
            <Image
              src="/hero-section/2-m.jpeg"
              alt="Sultana Collection"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 md:hidden"
              priority
            />
            {/* Desktop Image */}
            <Image
              src="/hero-section/1.jpeg"
              alt="Sultana Collection"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 hidden md:block"
              priority
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>

          {/* Content Overlay */}
          <div className="relative z-10 h-full flex flex-col justify-end pb-8 md:justify-center md:pb-0 px-6 md:px-10 lg:px-14">
            {/* New Arrival Badge */}
            <div className="mb-4 md:mb-6">
              <span className="font-caslon text-xs text-white/90 uppercase tracking-[0.2em] border border-white/40 px-3 py-1.5 rounded-full backdrop-blur-sm">
                New Arrival
              </span>
            </div>

            {/* Main Title */}
            <h2 className="font-caslon text-2xl md:text-3xl lg:text-4xl font-normal text-white mb-4 md:mb-6 tracking-wide leading-tight">
              SULTANA
            </h2>

            {/* CTA Button */}
            <div>
              <Link
                href="/collections/sultana"
                className="inline-block border border-white text-white hover:bg-white hover:text-black px-4 md:px-6 py-2 md:py-2.5 font-caslon text-xs md:text-sm font-normal tracking-wider uppercase transition-all duration-300 backdrop-blur-sm"
              >
                Explore Collection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
