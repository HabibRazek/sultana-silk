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
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

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
          {/* Left side - Navigation Menu Button */}
          <div className="flex items-center flex-1">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className={cn(
                    "p-2 transition-colors duration-300",
                    isScrolled
                      ? "text-black hover:text-gray-800"
                      : "text-amber-200 hover:text-amber-300"
                  )}
                >
                  <Menu className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">Open navigation menu</span>
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[350px] sm:w-[400px] bg-white">
                <SheetHeader>
                  <SheetTitle className="sr-only">
                    Navigation
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-8 mt-12">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="font-caslon font-normal text-lg text-gray-800 hover:text-amber-700 transition-colors duration-300 py-6 pl-6 border-b border-gray-100 last:border-b-0"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Center - Logo */}
          <div className="flex items-center justify-center py-6 relative z-10">
            <Link href="/" className="flex items-center mx-4 sm:mx-12 px-2 sm:px-6 py-2">
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
          <div className="flex items-center space-x-4 lg:flex-1 lg:justify-end">
            {/* Search */}
            <button className={cn(
              "p-2 transition-colors duration-300",
              isScrolled
                ? "text-black hover:text-gray-800"
                : "text-amber-200 hover:text-amber-300"
            )}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </button>

            {/* User Account */}
            <button className={cn(
              "p-2 transition-colors duration-300",
              isScrolled
                ? "text-black hover:text-gray-800"
                : "text-amber-200 hover:text-amber-300"
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
                  : "text-amber-200 hover:text-amber-300"
              )}
            >
              <ShoppingBag className="h-5 w-5" />
              {cartItemsCount() > 0 && (
                <span className={cn(
                  "absolute -top-1 -right-1 h-5 w-5 text-white text-xs font-medium rounded-full flex items-center justify-center",
                  isScrolled ? "bg-black" : "bg-amber-300/80"
                )}>
                  {cartItemsCount()}
                </span>
              )}
              <span className="sr-only">Shopping cart</span>
            </button>


          </div>
        </div>


      </nav>
    </header>
  )
}
