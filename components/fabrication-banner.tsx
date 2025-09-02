'use client'

import Image from 'next/image'

export default function FabricationBanner() {
  return (
    <section className="relative w-full h-[60vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/fabrication 3.jpeg"
          alt="Silk fabrication process"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h2 className="font-caslon text-4xl lg:text-6xl font-normal text-white mb-6 tracking-wide">
            Crafted by Master Artisans
          </h2>
          <p className="font-caslon text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Every Sultana silk scarf is meticulously handwoven using traditional techniques passed down through generations. 
            Our artisans in the historic medina of Mahdia transform the finest silk threads into wearable masterpieces, 
            where each thread tells a story of heritage, passion, and uncompromising luxury.
          </p>
        </div>
      </div>
    </section>
  )
}
