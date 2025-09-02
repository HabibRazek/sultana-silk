'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function HeritageStory() {
  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            {/* Small Label */}
            <div className="font-caslon text-xs text-gray-600 uppercase tracking-[0.3em]">
              ABOUT US
            </div>

            {/* Main Title */}
            <h2 className="font-caslon text-2xl lg:text-3xl font-normal text-gray-900 leading-tight tracking-wide">
              A Story of Passion and Heritage
            </h2>

            {/* Description */}
            <p className="font-caslon text-base text-gray-700 leading-relaxed">
              Sultana Silk Scarves was born from a dream: to preserve and elevate the rare art of handwoven silk into the world of timeless luxury. Rooted in the historic medina of Mahdia, heir to more than a thousand years of weaving tradition, and inspired by the elegance of the Gulf, Sultana is a cultural coalition between Tunisian craftsmanship and Emirati luxury vision. Each scarf is a promise: a rare object, a bridge between tradition and modernity, and a wearable piece of art.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link
                href="/about"
                className="bg-gradient-to-r from-red-800 to-red-900 hover:from-red-900 hover:to-red-950 text-white px-6 py-3 font-caslon text-sm font-normal tracking-wide uppercase transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
              >
                READ MORE
              </Link>
              <Link
                href="/contact"
                className="border-2 border-red-800 text-red-800 hover:bg-gradient-to-r hover:from-red-800 hover:to-red-900 hover:text-white px-6 py-3 font-caslon text-sm font-normal tracking-wide uppercase transition-all duration-300 inline-flex items-center justify-center"
              >
                CONTACT
              </Link>
            </div>
          </div>

          {/* Right Side - Images */}
          <div className="relative ">
            {/* Main Large Image */}
            <div className="relative aspect-[4/3] overflow-hidden shadow-2xl w-4/5 ml-auto">
              <Image
                src="/fabrication/2.jpeg"
                alt="Silk fabrication process"
                fill
                className="object-cover"
              />
              {/* Black Overlay Effect */}
              <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-all duration-300"></div>
            </div>

            {/* Overlapping Smaller Image */}
            <div className="absolute top-1/2 -left-16 transform -translate-y-1/2 w-48 h-56 lg:w-56 lg:h-64 z-10">
              {/* Gradient Border Container */}
              <div className="relative w-full h-full p-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-red-900 shadow-2xl">
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="/national-day/1.jpeg"
                    alt="Sultana Silk branded packaging with maroon box and gold logo"
                    fill
                    className="object-cover"
                  />
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-black/10 hover:bg-black/5 transition-all duration-300"></div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}
