'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function AboutUsProcess() {
  return (
    <section className="w-full py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-caslon text-xl lg:text-2xl font-normal text-[#600703] mb-2 tracking-wide leading-tight">
            About us
          </h2>
          <div className="w-16 h-px bg-[#600703]/30 mx-auto mb-4"></div>
          <p className="font-caslon text-base lg:text-lg font-normal text-gray-900 tracking-wide">
            From A to Z
          </p>
        </div>

        {/* Three Column Process */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">

          {/* The Design */}
          <div className="text-center group">
            {/* Image with glassy hover effect */}
            <div className="relative h-[300px] lg:h-[400px] mb-6 overflow-hidden rounded-lg">
              <Image
                src="/about/1.jpeg"
                alt="The Design Process - Sultana Silk Studio"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Glass overlay on hover */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-700 backdrop-blur-0 group-hover:backdrop-blur-[2px]"></div>
              {/* Hover text */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <span className="font-caslon text-sm text-[#600703] bg-white/90 px-4 py-2 rounded-full tracking-wider uppercase">
                  Creative Process
                </span>
              </div>
            </div>

            {/* Title */}
            <h3 className="font-caslon text-lg font-normal text-gray-900 mb-4 tracking-wide">
              The Design
            </h3>

            {/* Description */}
            <p className="font-caslon text-sm text-gray-700 leading-relaxed tracking-wide">
              At SULTANA, we create our SILK Scarves with you in mind. All our products are imagined and designed in Tunisia, in our offices in Mahdia.
            </p>
          </div>

          {/* Materials */}
          <div className="text-center group">
            {/* Image with glassy hover effect */}
            <div className="relative h-[300px] lg:h-[400px] mb-6 overflow-hidden rounded-lg">
              <Image
                src="/about/2.jpeg"
                alt="Premium Materials - Silk Production"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Glass overlay on hover */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-700 backdrop-blur-0 group-hover:backdrop-blur-[2px]"></div>
              {/* Hover text */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <span className="font-caslon text-sm text-[#600703] bg-white/90 px-4 py-2 rounded-full tracking-wider uppercase">
                  Premium Quality
                </span>
              </div>
            </div>

            {/* Title */}
            <h3 className="font-caslon text-lg font-normal text-gray-900 mb-4 tracking-wide">
              Materials
            </h3>

            {/* Description */}
            <p className="font-caslon text-sm text-gray-700 leading-relaxed tracking-wide">
              Our silk comes exclusively from the finest natural sources. We work exclusively with the most reputable suppliers from Italy and France.
            </p>
          </div>

          {/* The Know-How */}
          <div className="text-center group">
            {/* Image with glassy hover effect */}
            <div className="relative h-[300px] lg:h-[400px] mb-6 overflow-hidden rounded-lg">
              <Image
                src="/about/3.jpeg"
                alt="The Know-How - Traditional Weaving Process"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Glass overlay on hover */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-700 backdrop-blur-0 group-hover:backdrop-blur-[2px]"></div>
              {/* Hover text */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <span className="font-caslon text-sm text-[#600703] bg-white/90 px-4 py-2 rounded-full tracking-wider uppercase">
                  Artisan Craft
                </span>
              </div>
            </div>

            {/* Title */}
            <h3 className="font-caslon text-lg font-normal text-gray-900 mb-4 tracking-wide">
              The Know-How
            </h3>

            {/* Description */}
            <p className="font-caslon text-sm text-gray-700 leading-relaxed tracking-wide">
              Each step of the manufacturing process is carried out according to the strict specifications of traditional silk craftsmanship.
            </p>
          </div>

        </div>

        {/* Additional Content Section */}
        <div className="mt-12 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="font-caslon text-sm text-gray-600 leading-relaxed tracking-wide mb-8">
              Every Sultana Silk scarf tells a story of meticulous craftsmanship, from the initial design concept in our Tunisian atelier to the final luxurious product that graces your wardrobe.
            </p>
            <Link
              href="/heritage"
              className="inline-block border border-[#600703] text-[#600703] hover:bg-[#600703] hover:text-white px-6 py-2.5 font-caslon text-sm font-normal tracking-wider uppercase transition-all duration-300"
            >
              Discover Our Heritage
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
