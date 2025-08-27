'use client'

import Image from 'next/image'

export default function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="font-luxurious text-5xl lg:text-6xl font-light text-gray-900 mb-8 tracking-wide">
              The Art of Silk
            </h2>
            
            <div className="space-y-6 font-red-hat text-lg text-gray-600 leading-relaxed">
              <p>
                At Sultana Silk, we believe that true luxury lies in the perfect harmony between 
                tradition and innovation. Each scarf in our collection is a testament to the 
                timeless art of silk craftsmanship, reimagined for the modern woman.
              </p>
              
              <p>
                Our artisans carefully select the finest silk fibers, weaving them into 
                masterpieces that capture the essence of elegance and sophistication. Every 
                thread tells a story of passion, precision, and uncompromising quality.
              </p>
              
              <p>
                From the vibrant blooms of Sultana Blossom to the mysterious depths of 
                Sultana Midnight, each design is inspired by the beauty of nature and the 
                strength of the feminine spirit.
              </p>
            </div>

            {/* Features */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="font-luxurious text-xl font-light text-gray-900 mb-3 tracking-wide">
                  Premium Silk
                </h3>
                <p className="font-red-hat text-gray-600">
                  100% pure mulberry silk, sourced from the finest producers
                </p>
              </div>
              
              <div>
                <h3 className="font-luxurious text-xl font-light text-gray-900 mb-3 tracking-wide">
                  Handcrafted
                </h3>
                <p className="font-red-hat text-gray-600">
                  Each scarf is meticulously crafted by skilled artisans
                </p>
              </div>
              
              <div>
                <h3 className="font-luxurious text-xl font-light text-gray-900 mb-3 tracking-wide">
                  Unique Designs
                </h3>
                <p className="font-red-hat text-gray-600">
                  Exclusive patterns inspired by nature and elegance
                </p>
              </div>
              
              <div>
                <h3 className="font-luxurious text-xl font-light text-gray-900 mb-3 tracking-wide">
                  Timeless Quality
                </h3>
                <p className="font-red-hat text-gray-600">
                  Built to last, designed to be treasured for generations
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] relative rounded-lg overflow-hidden">
              <Image
                src="/products/women-design.jpeg"
                alt="Luxury silk scarf craftsmanship"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full opacity-60 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
