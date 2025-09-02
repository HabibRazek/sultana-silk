'use client'

import Link from 'next/link'


export default function Hero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden"
      aria-label="Sultana Silk luxury scarves hero section"
    >
      {/* Background Image for Desktop */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat hidden md:block"
        style={{
          backgroundImage: 'url(/hero-section/luxury-fashion-woman-black-suit-designer-scarf-red-background.jpeg)'
        }}
      ></div>

      {/* Background Image for Mobile */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat md:hidden"
        style={{
          backgroundImage: 'url(/hero-section/luxury-fashion-woman-black-suit-designer-scarf-red-background-mobile.jpeg)'
        }}
      ></div>

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent"></div>



      {/* Main Content Container */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          {/* Small Label */}
          <p className="font-caslon text-sm sm:text-base text-white/80 mb-4 tracking-[0.3em] uppercase">
            Trusted Source Finest Silk
          </p>

          {/* Main Heading */}
          <h1 className="font-caslon text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal text-white mb-8 tracking-wide leading-tight">
            WE BRING YOU<br />
            CLOSER TO YOUR<br />
            DREAM SILK.
          </h1>

          {/* Shop Now Button */}
          <div className="mt-8">
            <Link
              href="/shop"
              className="inline-block border-2 border-white text-white bg-transparent hover:bg-white hover:text-black px-8 py-4 font-caslon text-lg font-normal tracking-wide uppercase transition-all duration-300 backdrop-blur-sm"
            >
              Shop Now
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
