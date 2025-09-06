'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function HeritageStory() {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="lg:col-span-2 space-y-4 md:space-y-6 max-w-sm lg:max-w-none mx-auto lg:mx-0">
            {/* Small Label */}
            <div className="font-caslon text-xs text-gray-600 uppercase tracking-[0.2em] mb-2 text-center lg:text-left">
              OUR HERITAGE
            </div>

            {/* Main Title */}
            <h2 className="font-caslon text-xl md:text-2xl font-normal text-gray-900 leading-tight tracking-wide text-center lg:text-left">
              A Legacy of Passion & Craftsmanship
            </h2>

            {/* Description - Always Justified */}
            <p className="font-caslon text-sm text-gray-700 leading-relaxed text-justify">
              Sultana Silk Scarves was born from a dream: to preserve and elevate the rare art of handwoven silk into the world of timeless luxury. Rooted in the historic medina of Mahdia, heir to more than a thousand years of weaving tradition, and inspired by the elegance of the Gulf, Sultana is a cultural coalition between Tunisian craftsmanship and Emirati luxury vision. Each scarf is a promise: a rare object, a bridge between tradition and modernity, and a wearable piece of art.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center lg:justify-start">
              <Link
                href="/about"
                className="bg-red-900 text-white px-5 py-2.5 font-caslon text-xs font-normal tracking-wider uppercase transition-all duration-300 hover:bg-red-800 inline-flex items-center justify-center"
              >
                Discover More
              </Link>
              <Link
                href="/contact"
                className="border border-red-900 text-red-900 hover:bg-red-900 hover:text-white px-5 py-2.5 font-caslon text-xs font-normal tracking-wider uppercase transition-all duration-300 inline-flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Side - Full Image Display */}
          <div className="lg:col-span-3 relative order-first lg:order-last">
            <div className="relative w-full h-full min-h-[350px] md:min-h-[500px] lg:min-h-[600px]">
              <Image
                src="/heritage.jpeg"
                alt="Sultana Silk Heritage"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
