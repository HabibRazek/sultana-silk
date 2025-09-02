'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function InnovativeSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const features = [
    {
      title: "Handcrafted Excellence",
      description: "Each silk scarf is meticulously handcrafted by master artisans, ensuring unparalleled quality and attention to detail.",
      icon: "✨",
      image: "/products/green-orange.png"
    },
    {
      title: "Premium Silk Quality",
      description: "We source only the finest mulberry silk, known for its lustrous sheen, smooth texture, and exceptional durability.",
      icon: "🌟",
      image: "/products/black-red-blue.png"
    },
    {
      title: "Timeless Designs",
      description: "Our designs blend traditional elegance with contemporary style, creating pieces that transcend seasonal trends.",
      icon: "💎",
      image: "/products/beige-violet.png"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [features.length])

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="font-caslon text-3xl lg:text-4xl font-normal text-gray-900 mb-4 tracking-wide">
            The Art of Luxury
          </h2>
          <p className="font-caslon text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover what makes Sultana Silk the epitome of elegance and craftsmanship
          </p>
        </div>

        {/* Interactive Feature Showcase */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image Carousel */}
            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-2xl">
                <Image
                  src={features[currentSlide].image}
                  alt={features[currentSlide].title}
                  fill
                  className="object-contain p-8 transition-all duration-700 ease-in-out"
                />

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <span className="text-2xl">{features[currentSlide].icon}</span>
                </div>
              </div>

              {/* Slide Indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-gray-900 scale-125'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Side - Feature Content */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    index === currentSlide
                      ? 'opacity-100 transform translate-x-0'
                      : 'opacity-30 transform translate-x-4'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white text-xl">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-caslon text-2xl font-normal text-gray-900 mb-3 tracking-wide">
                        {feature.title}
                      </h3>
                      <p className="font-caslon text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white rounded-xl shadow-lg">
            <div className="font-caslon text-4xl font-normal text-gray-900 mb-2">100%</div>
            <div className="font-caslon text-sm text-gray-600 uppercase tracking-wide">Pure Silk</div>
          </div>
          <div className="text-center p-8 bg-white rounded-xl shadow-lg">
            <div className="font-caslon text-4xl font-normal text-gray-900 mb-2">50+</div>
            <div className="font-caslon text-sm text-gray-600 uppercase tracking-wide">Unique Designs</div>
          </div>
          <div className="text-center p-8 bg-white rounded-xl shadow-lg">
            <div className="font-caslon text-4xl font-normal text-gray-900 mb-2">25</div>
            <div className="font-caslon text-sm text-gray-600 uppercase tracking-wide">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}
