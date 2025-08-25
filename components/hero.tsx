'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-10">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/hero-section/luxury-fashion-woman-black-suit-designer-scarf-red-background.jpeg)'
        }}
      ></div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 "></div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Main headline */}
          <h1 className="font-red-hat text-6xl sm:text-7xl lg:text-8xl font-light text-white leading-tight mb-8 tracking-wide">
            Elegance in Every Thread
          </h1>

          {/* Call-to-action button */}
          <div className="mt-12">
            <Link
              href="/collection"
              className="btn-luxury font-red-hat inline-flex items-center justify-center text-lg font-medium tracking-wide uppercase"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>


    </section>
  )
}
