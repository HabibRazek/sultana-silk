'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function AboutLuxurySection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            {/* Section Label */}
            <div>
              <h3 className="font-caslon text-sm font-normal text-gray-600 tracking-[0.2em] uppercase mb-8">
                ABOUT US
              </h3>
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              <p className="font-caslon text-lg text-gray-700 leading-relaxed">
                AT SULTANA SILK, OUR VISION IS TO PROVIDE OUR CLIENTS WITH PREMIUM SILK SCARVES AND ACCESSORIES THAT HAVE LUXURY, STYLE, AND QUALITY. OUR PRODUCTS WILL HELP YOU CREATE YOUR OWN STYLE STATEMENT THAT IS BOLD, CLASSY, AND PRISTINE.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/about"
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-caslon text-sm font-normal tracking-[0.1em] uppercase px-8 py-3 transition-colors duration-300"
              >
                READ MORE
              </Link>
              <Link
                href="/contact"
                className="inline-block border border-gray-400 hover:border-gray-600 text-gray-700 hover:text-gray-900 font-caslon text-sm font-normal tracking-[0.1em] uppercase px-8 py-3 transition-colors duration-300"
              >
                CONTACT
              </Link>
            </div>
          </div>

          {/* Images Side */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/products/black-women.PNG"
                alt="Luxury silk scarf elegance"
                fill
                className="object-cover"
              />
            </div>

            {/* Decorative Background Element */}
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full opacity-40 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
