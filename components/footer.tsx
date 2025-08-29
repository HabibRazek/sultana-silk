'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-red-900 via-red-950 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-800/30 via-red-900/20 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent"></div>
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
                className="h-16 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="font-caslon text-amber-100 leading-relaxed mb-6 max-w-md text-lg">
              Sultana Silk represents the pinnacle of luxury silk craftsmanship. Each scarf
              is a masterpiece of elegance, designed for the discerning woman who appreciates
              timeless beauty and exceptional quality.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-12 h-12 bg-amber-600/20 border border-amber-500/30 rounded-full flex items-center justify-center hover:bg-amber-500/30 hover:border-amber-400 transition-all duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5 text-amber-200" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-amber-600/20 border border-amber-500/30 rounded-full flex items-center justify-center hover:bg-amber-500/30 hover:border-amber-400 transition-all duration-300"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5 text-amber-200" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-amber-600/20 border border-amber-500/30 rounded-full flex items-center justify-center hover:bg-amber-500/30 hover:border-amber-400 transition-all duration-300"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5 text-amber-200" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-caslon text-2xl font-normal mb-6 tracking-wide text-amber-300">
              Quick Links
            </h3>
            <ul className="space-y-4 font-caslon">
              <li>
                <Link href="/" className="text-amber-100 hover:text-amber-300 transition-colors text-lg">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/collection" className="text-amber-100 hover:text-amber-300 transition-colors text-lg">
                  Collection
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-amber-100 hover:text-amber-300 transition-colors text-lg">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-amber-100 hover:text-amber-300 transition-colors text-lg">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/care-guide" className="text-amber-100 hover:text-amber-300 transition-colors text-lg">
                  Care Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-caslon text-2xl font-normal mb-6 tracking-wide text-amber-300">
              Contact
            </h3>
            <div className="space-y-4 font-caslon">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-amber-100 text-lg">
                  Dubai, UAE
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-amber-100 text-lg">
                  +971 50 185 9905
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-amber-100 text-lg">
                  info@sultanasilk.com
                </span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="font-caslon font-normal text-amber-300 mb-3 text-xl tracking-wide">
                Newsletter
              </h4>
              <p className="text-amber-100 text-lg mb-4 font-caslon">
                Subscribe for exclusive offers and new collections
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 bg-red-800/50 border border-amber-500/30 rounded-l-lg focus:outline-none focus:border-amber-400 text-lg font-caslon text-amber-100 placeholder-amber-200/60"
                />
                <button className="px-6 py-3 bg-amber-600 text-red-900 rounded-r-lg hover:bg-amber-500 transition-colors font-caslon text-lg font-normal tracking-wide">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-amber-500/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="font-caslon text-amber-200 text-lg">
              © 2024 Sultana Silk. All rights reserved.
            </div>
            <div className="flex space-x-8 font-caslon text-lg">
              <Link href="/privacy" className="text-amber-200 hover:text-amber-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-amber-200 hover:text-amber-300 transition-colors">
                Terms of Service
              </Link>
              <Link href="/shipping" className="text-amber-200 hover:text-amber-300 transition-colors">
                Shipping Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
