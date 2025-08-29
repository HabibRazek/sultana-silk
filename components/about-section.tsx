'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function AboutSection() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Section Label */}
            <div className="mb-6">
              <span className="font-caslon text-sm font-normal text-amber-600 tracking-[0.3em] uppercase">
                Our Story
              </span>
            </div>

            <h2 className="font-caslon text-6xl lg:text-7xl font-normal text-gray-900 mb-8 tracking-wide leading-tight">
              The Art of Silk
            </h2>

            <div className="space-y-8 font-caslon text-xl text-gray-700 leading-relaxed">
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

            {/* Call to Action */}
            <div className="pt-8">
              <Link
                href="/about"
                className="inline-flex items-center font-caslon text-lg font-normal text-amber-600 hover:text-amber-700 tracking-wide uppercase transition-colors duration-300 group"
              >
                Discover Our Heritage
                <svg className="ml-3 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/sultana-women.jpeg"
                alt="Sultana Silk - Luxury silk scarf elegance"
                fill
                className="object-contain"
              />
            </div>

            {/* Subtle Decorative Elements */}
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-amber-50 to-amber-100 rounded-full opacity-70 -z-10"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-tl from-amber-50 to-amber-100 rounded-full opacity-50 -z-10"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h3 className="font-caslon text-4xl font-normal text-gray-900 tracking-wide">
              Crafted with Excellence
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h4 className="font-caslon text-xl font-normal text-gray-900 mb-3 tracking-wide">
                Premium Silk
              </h4>
              <p className="font-caslon text-gray-600 leading-relaxed">
                100% pure mulberry silk, sourced from the finest producers worldwide
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h4 className="font-caslon text-xl font-normal text-gray-900 mb-3 tracking-wide">
                Handcrafted
              </h4>
              <p className="font-caslon text-gray-600 leading-relaxed">
                Each scarf is meticulously crafted by skilled artisans with decades of experience
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="font-caslon text-xl font-normal text-gray-900 mb-3 tracking-wide">
                Unique Designs
              </h4>
              <p className="font-caslon text-gray-600 leading-relaxed">
                Exclusive patterns inspired by nature&apos;s beauty and feminine elegance
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-caslon text-xl font-normal text-gray-900 mb-3 tracking-wide">
                Timeless Quality
              </h4>
              <p className="font-caslon text-gray-600 leading-relaxed">
                Built to last and designed to be treasured for generations to come
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
