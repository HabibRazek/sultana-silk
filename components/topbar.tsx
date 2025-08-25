'use client'

import { MapPin, MessageCircle, Mail } from 'lucide-react'

export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-black text-white py-2 px-4">
      <div className="max-w-11/12 mx-auto flex items-center justify-between text-xs lg:text-sm font-red-hat">
        {/* Left side - Location and Phone */}
        <div className="flex items-center space-x-4 lg:space-x-6">
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-white" />
            <span className="text-lg">🇦🇪</span>
            <span>Dubai, UAE</span>
          </div>
          <a
            href="tel:+971501859905"
            className="flex items-center space-x-2 hover:text-gray-300 transition-colors duration-300"
          >
            <MessageCircle className="h-4 w-4 text-white" />
            <span>+971 50 185 9905</span>
          </a>
        </div>

        {/* Right side - Contact Email */}
        <a
          href="mailto:contact@sultanasilk.com"
          className="hidden md:flex items-center space-x-2 hover:text-gray-300 transition-colors duration-300"
        >
          <Mail className="h-4 w-4 text-white" />
          <span>contact@sultanasilk.com</span>
        </a>
      </div>
    </div>
  )
}
