'use client'

import Image from 'next/image'

export default function AboutUsProcess() {
  return (
    <section className="w-full py-8 lg:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="font-caslon text-2xl lg:text-3xl font-normal text-[#600703] mb-4 tracking-wide leading-tight">
            About us
          </h2>
          <p className="font-caslon text-lg lg:text-xl font-normal text-gray-900 tracking-wide">
            From A to Z
          </p>
        </div>

        {/* Three Column Process */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

          {/* The Design */}
          <div className="text-center">
            {/* Image */}
            <div className="relative h-[300px] lg:h-[400px] mb-6 overflow-hidden rounded-lg">
              <Image
                src="/about/1.jpeg"
                alt="The Design Process - Sultana Silk Studio"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Title */}
            <h3 className="font-caslon text-lg lg:text-xl font-normal text-gray-900 mb-4 tracking-wide">
              The design
            </h3>

            {/* Description */}
            <p className="font-caslon text-sm lg:text-base text-gray-700 leading-relaxed tracking-wide">
              At SULTANA, we create our SILK Scarves with you in mind. All our products are imagined and designed in Tunisia, in our offices on Mahdia.
            </p>
          </div>

          {/* Materials */}
          <div className="text-center">
            {/* Image */}
            <div className="relative h-[300px] lg:h-[400px] mb-6 overflow-hidden rounded-lg">
              <Image
                src="/about/2.jpeg"
                alt="Premium Materials - Silk Production"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Title */}
            <h3 className="font-caslon text-lg lg:text-xl font-normal text-gray-900 mb-4 tracking-wide">
              Materials
            </h3>

            {/* Description */}
            <p className="font-caslon text-sm lg:text-base text-gray-700 leading-relaxed tracking-wide">
              Our Silk come exclusively from hides recovered from the Nature. We work exclusively with tanneries in Italy and France.
            </p>
          </div>

          {/* The Know-How */}
          <div className="text-center">
            {/* Image */}
            <div className="relative h-[300px] lg:h-[400px] mb-6 overflow-hidden rounded-lg">
              <Image
                src="/about/3.jpeg"
                alt="The Know-How - Traditional Weaving Process"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Title */}
            <h3 className="font-caslon text-lg lg:text-xl font-normal text-gray-900 mb-4 tracking-wide">
              The know-how
            </h3>

            {/* Description */}
            <p className="font-caslon text-sm lg:text-base text-gray-700 leading-relaxed tracking-wide">
              Each step of the manufacturing process is carried out according to the strict specifications of the leatherworker&apos;s craft.
            </p>
          </div>

        </div>

        {/* Additional Content Section */}
        <div className="mt-10 lg:mt-12 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="font-caslon text-base lg:text-lg text-gray-600 leading-relaxed tracking-wide mb-8">
              Every Sultana Silk scarf tells a story of meticulous craftsmanship, from the initial design concept in our Tunisian atelier to the final luxurious product that graces your wardrobe.
            </p>
            <div className="inline-block border-2 border-[#600703] text-[#600703] hover:bg-[#600703] hover:text-white px-8 py-4 font-caslon text-base font-normal tracking-wide uppercase transition-all duration-300 cursor-pointer">
              Discover Our Heritage
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
