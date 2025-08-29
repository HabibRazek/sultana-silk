'use client'

import Link from 'next/link'


export default function Hero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden"
      aria-label="Sultana Silk luxury scarves hero section"
    >
      {/* Background Image - Desktop */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
        style={{
          backgroundImage: 'url(/hero-section/luxury-fashion-woman-black-suit-designer-scarf-red-background.jpeg)'
        }}
        role="img"
        aria-label="Elegant woman wearing luxury silk scarf"
      />

      {/* Background Image - Mobile */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat block md:hidden"
        style={{
          backgroundImage: 'url(/hero-section/luxury-fashion-woman-black-suit-designer-scarf-red-background-mobile.jpeg)'
        }}
        role="img"
        aria-label="Elegant woman wearing luxury silk scarf on mobile"
      />



      {/* Main Content Container */}
      <div className="relative z-10 flex items-center h-full sm:mr-[500px]">
        <div className="w-full px-4 sm:px-6 lg:px-12 text-left">
          {/* Primary Heading - SEO Optimized */}
          <h1 className="font-caslon text-7xl sm:text-8xl lg:text-9xl font-normal text-center text-amber-300 leading-tight mb-8 tracking-wide">
            Elegance in <br></br>Every Thread
          </h1>

          {/* Animated Subtitle - Brand Positioning */}
          <div className="font-caslon text-2xl sm:text-3xl lg:text-4xl font-normal text-center text-amber-200 leading-tight mb-8 tracking-wide">
            Handcrafted luxury silk scarves for <br /> the discerning woman
          </div>

          {/* Call-to-Action */}
          <div className="mt-12 text-center">
            <Link
              href="/collection"
              className="btn-luxury font-caslon inline-flex items-center justify-center text-xl font-normal tracking-wide uppercase transition-transform hover:scale-105"
              aria-label="Shop luxury silk scarves collection"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
