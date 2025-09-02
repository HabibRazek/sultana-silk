'use client'

import Link from 'next/link'


export default function Hero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden"
      aria-label="Sultana Silk luxury scarves hero section"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        aria-label="Sultana Silk luxury scarves video background"
      >
        <source src="/hero-section/sultana-silk-hero-section.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/hero-section/luxury-fashion-woman-black-suit-designer-scarf-red-background.jpeg)'
          }}
        />
      </video>

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent"></div>



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
