'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 via-gray-900/15 to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        {/* Main Footer Content */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src="/logo/sultana-silk-logo.png"
                alt="Sultana Silk"
                width={160}
                height={64}
                className="h-14 w-auto"
              />
            </div>
            <p className="font-caslon text-gray-300 leading-relaxed mb-6 max-w-md text-xs tracking-wide">
              Sultana Silk represents the pinnacle of luxury silk craftsmanship. Each scarf
              is a masterpiece of elegance, designed for the discerning woman who appreciates
              timeless beauty and exceptional quality.
            </p>

            {/* Social Media */}
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-caslon text-base font-normal mb-4 tracking-wide text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 font-caslon">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors text-xs tracking-wide">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/collection" className="text-gray-300 hover:text-white transition-colors text-xs tracking-wide">
                  Collection
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-xs tracking-wide">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-xs tracking-wide">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/care-guide" className="text-gray-300 hover:text-white transition-colors text-xs tracking-wide">
                  Care Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-caslon text-base font-normal mb-4 tracking-wide text-white">
              Contact
            </h3>
            <div className="space-y-2 font-caslon">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 text-xs tracking-wide">
                  Dubai, UAE
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 text-xs tracking-wide">
                  +971 50 185 9905
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 text-xs tracking-wide">
                  info@sultanasilk.com
                </span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="font-caslon font-normal text-white mb-2 text-sm tracking-wide">
                Newsletter
              </h4>
              <p className="text-gray-300 text-xs mb-3 font-caslon tracking-wide">
                Subscribe for exclusive offers and new collections
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-1.5 bg-gray-800/50 border border-white/20 rounded-md focus:outline-none focus:border-white/40 text-xs font-caslon text-white placeholder-gray-400 tracking-wide"
                />
                <button className="px-3 py-1.5 bg-white text-black rounded-md hover:bg-gray-100 transition-colors font-caslon text-xs font-normal tracking-wide">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="font-caslon text-gray-300 text-xs tracking-wide">
              © 2024 Sultana Silk. All rights reserved.
            </div>
            <div className="flex space-x-4 font-caslon text-xs">
              <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors tracking-wide">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white transition-colors tracking-wide">
                Terms of Service
              </Link>
              <Link href="/shipping" className="text-gray-300 hover:text-white transition-colors tracking-wide">
                Shipping Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
