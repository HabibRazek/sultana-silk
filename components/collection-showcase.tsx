'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function CollectionShowcase() {
  return (
    <section className="w-full pt-8 lg:pt-12">
      {/* Title Section */}
      <div className="text-center mb-8 lg:mb-10">
        <div className="inline-block bg-[#600703] text-white px-8 py-3 font-caslon text-lg uppercase tracking-[0.2em]">
          ALL COLLECTIONS
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 px-4 lg:px-8">
        {/* Left Collection - National Day UAE */}
        <div className="relative h-[70vh] overflow-hidden group">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/collection/1.jpeg"
              alt="National Day UAE Collection"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 h-full flex flex-col justify-center px-8 lg:px-12">
            {/* Limited Edition Badge */}
            <div className="mb-4">
              <span className="font-caslon text-sm text-white/90 uppercase tracking-[0.3em] border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm">
                Limited Edition
              </span>
            </div>

            {/* Main Title */}
            <h2 className="font-caslon text-4xl lg:text-5xl font-normal text-white mb-8 tracking-wide leading-tight">
              National Day UAE
            </h2>

            {/* CTA Button */}
            <div>
              <Link
                href="/collections/national-day-uae"
                className="inline-block border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 font-caslon text-lg font-normal tracking-wide uppercase transition-all duration-300 backdrop-blur-sm"
              >
                Explore Collection
              </Link>
            </div>
          </div>
        </div>

        {/* Right Collection - Sultana */}
        <div className="relative h-[70vh] overflow-hidden group">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/collection/2.jpeg"
              alt="Sultana Collection"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/40 to-transparent"></div>
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 h-full flex flex-col justify-center px-8 lg:px-12">
            {/* New Arrival Badge */}
            <div className="mb-4">
              <span className="font-caslon text-sm text-white/90 uppercase tracking-[0.3em] border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm">
                New Arrival
              </span>
            </div>

            {/* Main Title */}
            <h2 className="font-caslon text-4xl lg:text-5xl font-normal text-white mb-8 tracking-wide leading-tight">
              SULTANA
            </h2>

            {/* CTA Button */}
            <div>
              <Link
                href="/collections/sultana"
                className="inline-block border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 font-caslon text-lg font-normal tracking-wide uppercase transition-all duration-300 backdrop-blur-sm"
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
