'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const heroImages = [
  '/hero-section/1.jpeg',
  '/hero-section/2.jpeg',
  '/hero-section/3.jpeg',
  '/hero-section/4.jpeg',
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isPlaying])

  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden"
      aria-label="Sultana Silk luxury scarves hero section"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Luxury Diaporama Background */}
      <div className="absolute inset-0 w-full h-full">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide
                ? 'opacity-100'
                : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        ))}
      </div>

      {/* Luxury Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>

      {/* Main Content Container - Using w-9/12 and mx-auto */}
      <div className="relative z-10 flex items-center h-full w-full">
        <div className="w-8/12 mx-auto">
          <div className="text-left">
            {/* Small Label */}
            <p className="font-caslon text-sm sm:text-base text-white/90 mb-4 tracking-[0.3em] uppercase animate-fade-in-up">
              Trusted Source Finest Silk
            </p>

            {/* Main Heading */}
            <h1 className="font-caslon text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal text-white mb-8 tracking-wide leading-tight animate-fade-in-up animation-delay-200">
              Elegance<br />
              in Every Thread
            </h1>

            {/* Shop Now Button */}
            <div className="mt-8 animate-fade-in-up animation-delay-400">
              <Link
                href="/shop"
                className="group relative inline-block overflow-hidden border-2 border-amber-400 text-amber-400 bg-transparent hover:text-black px-8 py-4 font-caslon text-lg font-normal tracking-wide uppercase transition-all duration-500 backdrop-blur-sm hover:shadow-2xl hover:scale-105"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                <span className="relative z-10">Shop Now</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Luxury Carousel Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-6">
          {/* Previous Button */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)}
            className="group p-3 border border-white/30 backdrop-blur-sm hover:border-amber-400 hover:bg-amber-400/10 transition-all duration-300 rounded-full"
            aria-label="Previous image"
          >
            <svg className="w-5 h-5 text-white group-hover:text-amber-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Slide Indicators */}
          <div className="flex space-x-3">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-amber-400 scale-125'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % heroImages.length)}
            className="group p-3 border border-white/30 backdrop-blur-sm hover:border-amber-400 hover:bg-amber-400/10 transition-all duration-300 rounded-full"
            aria-label="Next image"
          >
            <svg className="w-5 h-5 text-white group-hover:text-amber-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}
