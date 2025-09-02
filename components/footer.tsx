'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 via-gray-900/20 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                className="h-16 w-auto "
              />
            </div>
            <p className="font-caslon text-gray-300 leading-relaxed mb-6 max-w-md text-lg">
              Sultana Silk represents the pinnacle of luxury silk craftsmanship. Each scarf
              is a masterpiece of elegance, designed for the discerning woman who appreciates
              timeless beauty and exceptional quality.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-caslon text-2xl font-normal mb-6 tracking-wide text-white">
              Quick Links
            </h3>
            <ul className="space-y-4 font-caslon">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors text-lg">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/collection" className="text-gray-300 hover:text-white transition-colors text-lg">
                  Collection
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-lg">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-lg">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/care-guide" className="text-gray-300 hover:text-white transition-colors text-lg">
                  Care Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-caslon text-2xl font-normal mb-6 tracking-wide text-white">
              Contact
            </h3>
            <div className="space-y-4 font-caslon">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 text-lg">
                  Dubai, UAE
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 text-lg">
                  +971 50 185 9905
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 text-lg">
                  info@sultanasilk.com
                </span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="font-caslon font-normal text-white mb-3 text-xl tracking-wide">
                Newsletter
              </h4>
              <p className="text-gray-300 text-lg mb-4 font-caslon">
                Subscribe for exclusive offers and new collections
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-white/20 rounded-l-lg focus:outline-none focus:border-white/40 text-lg font-caslon text-white placeholder-gray-400"
                />
                <button className="px-6 py-3 bg-white text-black rounded-r-lg hover:bg-gray-100 transition-colors font-caslon text-lg font-normal tracking-wide">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="font-caslon text-gray-300 text-lg">
              © 2024 Sultana Silk. All rights reserved.
            </div>
            <div className="flex space-x-8 font-caslon text-lg">
              <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/shipping" className="text-gray-300 hover:text-white transition-colors">
                Shipping Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
