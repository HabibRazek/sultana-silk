'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function HeritageStory() {
  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            {/* Small Label */}
            <div className="font-caslon text-sm text-gray-600 uppercase tracking-[0.3em]">
              ABOUT US
            </div>

            {/* Main Title */}
            <h2 className="font-caslon text-3xl lg:text-4xl font-normal text-gray-900 leading-tight tracking-wide">
              A Story of Passion and Heritage
            </h2>

            {/* Description */}
            <p className="font-caslon text-lg text-gray-700 leading-relaxed">
              Sultana Silk Scarves was born from a dream: to preserve and elevate the rare art of handwoven silk into the world of timeless luxury. Rooted in the historic medina of Mahdia, heir to more than a thousand years of weaving tradition, and inspired by the elegance of the Gulf, Sultana is a cultural coalition between Tunisian craftsmanship and Emirati luxury vision. Each scarf is a promise: a rare object, a bridge between tradition and modernity, and a wearable piece of art.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/about"
                className="bg-[#600703] hover:bg-[#5E0604] text-white px-8 py-4 font-caslon text-lg font-normal tracking-wide uppercase transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
              >
                READ MORE
              </Link>
              <Link
                href="/contact"
                className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 font-caslon text-lg font-normal tracking-wide uppercase transition-all duration-300 inline-flex items-center justify-center"
              >
                CONTACT
              </Link>
            </div>
          </div>

          {/* Right Side - Images */}
          <div className="relative">
            {/* Large Image */}
            <div className="relative aspect-[4/3] overflow-hidden shadow-2xl">
              <Image
                src="/fabrication/2.jpeg"
                alt="Silk fabrication process"
                fill
                className="object-cover"
              />
            </div>




          </div>
        </div>
      </div>
    </section>
  )
}
