'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Sparkles, Crown, Heart } from 'lucide-react'

export default function ExploreCollection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-100 via-white to-gray-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-amber-200/30 to-amber-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-80 h-80 bg-gradient-to-br from-amber-100/40 to-amber-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-gray-200/20 to-gray-100/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Card */}
        <div className="relative rounded-3xl overflow-hidden bg-white/80 backdrop-blur-xl border border-gray-200/50 shadow-2xl">
          {/* Glass overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent"></div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
            {/* Content Side */}
            <div className="p-12 lg:p-16 flex flex-col justify-center relative z-10">
              {/* Floating Icons */}
              <div className="absolute top-8 right-8 flex space-x-3">
                <div className="w-12 h-12 bg-white/60 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-200/50 shadow-lg">
                  <Crown className="w-5 h-5 text-amber-600" />
                </div>
                <div className="w-12 h-12 bg-white/60 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-200/50 shadow-lg">
                  <Sparkles className="w-5 h-5 text-amber-600" />
                </div>
              </div>

              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-amber-100/80 backdrop-blur-sm border border-amber-200/60 rounded-full px-4 py-2 mb-8 w-fit shadow-sm">
                <Heart className="w-4 h-4 text-amber-600" />
                <span className="font-red-hat text-sm font-medium text-amber-700 tracking-wide">
                  EXCLUSIVE COLLECTION
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="font-luxurious text-5xl lg:text-6xl font-light text-gray-900 mb-6 tracking-wide leading-tight">
                Explore Our
                <span className="block text-gradient-gold">Luxury Collection</span>
              </h2>

              {/* Description */}
              <p className="font-red-hat text-xl text-gray-700 leading-relaxed mb-8 max-w-lg">
                Discover the artistry of silk craftsmanship. Each scarf tells a story of elegance,
                passion, and timeless beauty, designed for the woman who appreciates the finest things in life.
              </p>

              {/* Features List */}
              <div className="space-y-4 mb-10">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="font-red-hat text-gray-700">100% Pure Mulberry Silk</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="font-red-hat text-gray-700">Hand-Crafted by Master Artisans</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="font-red-hat text-gray-700">Limited Edition Designs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="font-red-hat text-gray-700">Worldwide Luxury Shipping</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/collection"
                  className="group inline-flex items-center justify-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 font-red-hat font-medium tracking-wide uppercase transition-all duration-300 hover:from-amber-400 hover:to-amber-500 hover:scale-105 hover:shadow-xl hover:shadow-amber-400/25 rounded-lg"
                >
                  View Collection
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <button className="inline-flex items-center justify-center bg-white/60 backdrop-blur-sm border border-gray-200/50 text-gray-900 px-8 py-4 font-red-hat font-medium tracking-wide uppercase transition-all duration-300 hover:bg-white/80 hover:scale-105 rounded-lg shadow-lg">
                  Book Consultation
                </button>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative lg:min-h-[600px] min-h-[400px]">
              {/* Main Image */}
              <div className="absolute inset-0">
                <Image
                  src="/products/women-design.jpeg"
                  alt="Luxury silk scarf collection"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Glass Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-900/10 to-gray-900/20"></div>

              {/* Floating Glass Cards */}
              <div className="absolute top-8 left-8 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-red-hat text-sm font-medium text-white">
                    6 Exclusive Designs
                  </span>
                </div>
              </div>

              <div className="absolute bottom-8 right-8 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="font-luxurious text-2xl font-light text-white mb-1">600</div>
                  <div className="font-red-hat text-xs text-gray-300 uppercase tracking-wide">AED Each</div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-1/2 left-4 w-1 h-16 bg-gradient-to-b from-amber-400 to-transparent rounded-full"></div>
              <div className="absolute top-1/3 right-4 w-1 h-20 bg-gradient-to-b from-amber-400 to-transparent rounded-full"></div>
            </div>
          </div>

          {/* Bottom Glass Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: '100%', label: 'Pure Silk' },
            { number: '6', label: 'Unique Designs' },
            { number: '48h', label: 'Express Delivery' },
            { number: '30d', label: 'Return Policy' }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-colors duration-300"
            >
              <div className="font-luxurious text-3xl font-light text-white mb-2">
                {stat.number}
              </div>
              <div className="font-red-hat text-sm text-gray-300 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
