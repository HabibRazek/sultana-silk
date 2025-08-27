'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src="/logo/sultana-silk-logo.png"
                alt="Sultana Silk"
                width={180}
                height={72}
                className="h-16 w-auto"
              />
            </div>
            <p className="font-red-hat text-gray-300 leading-relaxed mb-6 max-w-md">
              Sultana Silk represents the pinnacle of luxury silk craftsmanship. Each scarf 
              is a masterpiece of elegance, designed for the discerning woman who appreciates 
              timeless beauty and exceptional quality.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-luxurious text-xl font-light mb-6 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-3 font-red-hat">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/collection" className="text-gray-300 hover:text-white transition-colors">
                  Collection
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/care-guide" className="text-gray-300 hover:text-white transition-colors">
                  Care Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-luxurious text-xl font-light mb-6 tracking-wide">
              Contact
            </h3>
            <div className="space-y-4 font-red-hat">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Dubai, UAE
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  +971 50 185 9905
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  info@sultanasilk.com
                </span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="font-red-hat font-medium text-white mb-3">
                Newsletter
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                Subscribe for exclusive offers and new collections
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-gray-600 text-sm font-red-hat"
                />
                <button className="px-4 py-2 bg-white text-gray-900 rounded-r-lg hover:bg-gray-100 transition-colors font-red-hat text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="font-red-hat text-gray-400 text-sm">
              © 2024 Sultana Silk. All rights reserved.
            </div>
            <div className="flex space-x-6 font-red-hat text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/shipping" className="text-gray-400 hover:text-white transition-colors">
                Shipping Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
