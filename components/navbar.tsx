'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react'
import { useStore } from '@/lib/store'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'HOME', href: '/' },
  { name: 'CLASSIC COLLECTION', href: '/classic-collection' },
  { name: 'LIMITED EDITIONS', href: '/limited-editions' },
  { name: 'ABOUT', href: '/about' },
  { name: 'CONTACT', href: '/contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const { cartItemsCount, toggleCart } = useStore()

  return (
    <header
      className="fixed top-10 left-0 right-0 z-50 transition-all duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glassy white background */}
      <div className={cn(
        "absolute inset-0 transition-all duration-300 ease-in-out",
        isHovered ? "navbar-glassy-white shadow-lg" : "bg-transparent"
      )} />

      <nav className="relative mx-auto w-11/12 px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-20 items-center justify-between">
          {/* Left side - Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8 lg:flex-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "font-red-hat font-medium text-sm transition-all duration-300 relative group",
                  isHovered
                    ? "text-gray-800 hover:text-black"
                    : "text-white/90 hover:text-white"
                )}
              >
                {item.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full",
                  isHovered ? "bg-black" : "bg-white"
                )}></span>
              </Link>
            ))}
          </div>

          {/* Center - Logo */}
          <div className="flex items-center justify-center py-6 relative z-10">
            <Link href="/" className="flex items-center mx-4 sm:mx-12 px-2 sm:px-6 py-2">
              {/* Desktop Logo - White by default, black on hover */}
              <Image
                src={isHovered ? "/logo/sultana-silk-logo-black-v.png" : "/logo/sultana-silk-logo.png"}
                alt="Sultana Silk"
                width={140}
                height={56}
                className="h-14 w-auto transition-all duration-300 hidden sm:block"
              />
              {/* Mobile Logo - White by default, black on hover */}
              <Image
                src={isHovered ? "/logo/sultana-silk-logo-black-v.png" : "/logo/sultana-silk-logo.png"}
                alt="Sultana Silk"
                width={110}
                height={44}
                className="h-11 w-auto transition-all duration-300 block sm:hidden"
              />
            </Link>
          </div>

          {/* Right side - Icons */}
          <div className="flex items-center space-x-4 lg:flex-1 lg:justify-end">
            {/* Search */}
            <button className={cn(
              "p-2 transition-colors duration-300",
              isHovered
                ? "text-gray-800 hover:text-black"
                : "text-white/90 hover:text-white"
            )}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </button>

            {/* User Account */}
            <button className={cn(
              "p-2 transition-colors duration-300",
              isHovered
                ? "text-gray-800 hover:text-black"
                : "text-white/90 hover:text-white"
            )}>
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </button>

            {/* Shopping Cart */}
            <button
              onClick={toggleCart}
              className={cn(
                "relative p-2 transition-colors duration-300",
                isHovered
                  ? "text-gray-800 hover:text-black"
                  : "text-white/90 hover:text-white"
              )}
            >
              <ShoppingBag className="h-5 w-5" />
              {cartItemsCount() > 0 && (
                <span className={cn(
                  "absolute -top-1 -right-1 h-5 w-5 text-white text-xs font-medium rounded-full flex items-center justify-center",
                  isHovered ? "bg-gray-800" : "bg-white/20"
                )}>
                  {cartItemsCount()}
                </span>
              )}
              <span className="sr-only">Shopping cart</span>
            </button>

            {/* Mobile menu button */}
            <button
              type="button"
              className={cn(
                "lg:hidden p-2 transition-colors duration-300",
                isHovered
                  ? "text-gray-800 hover:text-black"
                  : "text-white/90 hover:text-white"
              )}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'lg:hidden transition-all duration-300 ease-in-out overflow-hidden',
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className={cn(
            "py-4 space-y-1 border-t transition-colors duration-300",
            isHovered ? "border-gray-200" : "border-white/20"
          )}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block px-4 py-3 font-red-hat font-medium text-sm transition-colors duration-300",
                  isHovered
                    ? "text-gray-800 hover:text-black hover:bg-gray-100"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
