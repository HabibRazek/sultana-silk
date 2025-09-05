'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function AboutSection() {
  return (
    <section className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Content */}
          <div className="space-y-6">
            {/* Section Label */}
            <div className="mb-6">
              <span className="font-caslon text-xs font-normal text-amber-600 tracking-[0.3em] uppercase">
                Our Story
              </span>
            </div>

            <h2 className="font-caslon text-3xl lg:text-4xl font-normal text-gray-900 mb-8 tracking-wide leading-tight">
              The Art of Silk
            </h2>

            <div className="space-y-4 font-caslon text-sm text-gray-700 leading-relaxed">
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


      </div>
    </section>
  )
}
