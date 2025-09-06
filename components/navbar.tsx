'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, ShoppingBag, Search, User } from 'lucide-react'
import { useStore } from '@/lib/store'
import { cn } from '@/lib/utils'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { VisuallyHidden } from '@/components/ui/visually-hidden'

const navigation = [
  { name: 'HOME', href: '/' },
  { name: 'CLASSIC COLLECTION', href: '/classic-collection' },
  { name: 'LIMITED EDITIONS', href: '/limited-editions' },
  { name: 'ABOUT', href: '/about' },
  { name: 'CONTACT', href: '/contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { cartItemsCount, toggleCart } = useStore()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out"
    >
      {/* Glassy white background */}
      <div className={cn(
        "absolute inset-0 transition-all duration-300 ease-in-out",
        isScrolled ? "navbar-glassy-white shadow-lg" : "bg-transparent"
      )} />

      <nav className="relative mx-auto w-11/12 px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-20 items-center justify-between">
          {/* Left side - Menu Button (Desktop only) */}
          <div className="hidden lg:block">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className={cn(
                    "p-2 transition-colors duration-300",
                    isScrolled
                      ? "text-black hover:text-gray-800"
                      : "text-white hover:text-white/80"
                  )}
                >
                  <Menu className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">Open navigation menu</span>
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[380px] bg-black border-none text-white p-0">
                <VisuallyHidden>
                  <SheetTitle>Navigation Menu</SheetTitle>
                </VisuallyHidden>
                <div className="p-6 flex justify-center items-center">
                  <Image
                    src="/logo/sultana-silk-logo.png"
                    alt="Sultana Silk"
                    width={140}
                    height={56}
                    className="h-14 w-auto"
                  />
                </div>
                <div className="flex flex-col mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="font-sans text-xs uppercase tracking-wider text-gray-300 hover:text-white transition-colors duration-300 py-4 px-8 hover:bg-gray-900"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Center - Logo (Desktop) / Left - Logo (Mobile) */}
          <div className={cn(
            "flex items-center",
            "lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2"
          )}>
            <Link href="/" className="flex items-center">
              {/* Desktop Logo - White by default, black on hover/scroll */}
              <Image
                src={isScrolled ? "/logo/sultana-silk-logo-black-v.png" : "/logo/sultana-silk-logo.png"}
                alt="Sultana Silk"
                width={140}
                height={56}
                className="h-14 w-auto transition-all duration-300 hidden sm:block"
              />
              {/* Mobile Logo - White by default, black on scroll */}
              <Image
                src={isScrolled ? "/logo/sultana-silk-logo-black-v.png" : "/logo/sultana-silk-logo.png"}
                alt="Sultana Silk"
                width={110}
                height={44}
                className="h-11 w-auto transition-all duration-300 block sm:hidden"
              />
            </Link>
          </div>

          {/* Right side - Icons */}
          <div className="flex items-center space-x-4">
            {/* Search (hidden on mobile) */}
            <button className={cn(
              "p-2 transition-colors duration-300 hidden lg:block",
              isScrolled
                ? "text-black hover:text-gray-800"
                : "text-white hover:text-white/80"
            )}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </button>

            {/* User Account (hidden on mobile) */}
            <button className={cn(
              "p-2 transition-colors duration-300 hidden lg:block",
              isScrolled
                ? "text-black hover:text-gray-800"
                : "text-white hover:text-white/80"
            )}>
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </button>

            {/* Shopping Cart */}
            <button
              onClick={toggleCart}
              className={cn(
                "relative p-2 transition-colors duration-300",
                isScrolled
                  ? "text-black hover:text-gray-800"
                  : "text-white hover:text-white/80"
              )}
            >
              <ShoppingBag className="h-5 w-5" />
              {cartItemsCount() > 0 && (
                <span className={cn(
                  "absolute -top-1 -right-1 h-5 w-5 text-white text-xs font-medium rounded-full flex items-center justify-center",
                  isScrolled ? "bg-black" : "bg-white/80"
                )}>
                  {cartItemsCount()}
                </span>
              )}
              <span className="sr-only">Shopping cart</span>
            </button>

            {/* Menu Button (Mobile only) */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <button
                    type="button"
                    className={cn(
                      "p-2 transition-colors duration-300",
                      isScrolled
                        ? "text-black hover:text-gray-800"
                        : "text-white hover:text-white/80"
                    )}
                  >
                    <Menu className="h-5 w-5" aria-hidden="true" />
                    <span className="sr-only">Open navigation menu</span>
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full bg-black border-none text-white p-0" >
                  <VisuallyHidden>
                    <SheetTitle>Mobile Navigation Menu</SheetTitle>
                  </VisuallyHidden>
                  <div className="p-6 flex justify-center items-center">
                    <Image
                      src="/logo/sultana-silk-logo.png"
                      alt="Sultana Silk"
                      width={120}
                      height={48}
                      className="h-12 w-auto"
                    />
                  </div>
                  <div className="flex flex-col mt-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="font-sans text-xs uppercase tracking-wider text-gray-300 hover:text-white transition-colors duration-300 py-4 px-6 hover:bg-gray-900"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
