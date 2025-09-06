'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface Product {
  id: string
  name: string
  description: string
  fullDescription: string
  price: string
  image: string
  colors: string[]
}

const products: Product[] = [
  {
    id: 'sultana-blossom',
    name: 'Sultana Blossom Silk',
    description: 'A vibrant silk scarf blooming with green, coral, and fuchsia tones.',
    fullDescription: 'An ode to freshness and vitality, Sultana Blossom Silk is inspired by the magic of spring in full bloom. Tender green and aqua shades echo nature\'s rebirth, while coral and fuchsia add radiance and energy. Woven in the finest silk, this scarf is more than an accessory – it is a wearable work of art, a symbol of refinement and joy, designed to illuminate every silhouette with elegance and modern grace.',
    price: '600 AED',
    image: '/products/green-orange.png',
    colors: ['Green', 'Coral', 'Fuchsia', 'Aqua']
  },
  {
    id: 'sultana-midnight',
    name: 'Sultana Midnight Silk',
    description: 'A bold silk scarf blending deep grey, rich burgundy, and teal elegance.',
    fullDescription: 'Mysterious and refined, Sultana Midnight Silk captures the allure of nightfall illuminated by precious shades. The deep grey evokes timeless elegance, the burgundy embodies passion and strength, while the teal brings balance and modernity. Woven from sumptuous silk, this scarf is more than an accessory – it is a symbol of distinction, designed to reveal bold elegance and sophistication on every occasion.',
    price: '600 AED',
    image: '/products/black-red-blue.png',
    colors: ['Deep Grey', 'Burgundy', 'Teal']
  },
  {
    id: 'sultana-royal',
    name: 'Sultana Royal Silk',
    description: 'A refined silk scarf uniting ivory, deep purple, soft green, and rich burgundy.',
    fullDescription: 'Majestic and timeless, Sultana Royal Silk evokes the grace of noble traditions reimagined for modern elegance. The deep purple recalls regal splendor, ivory brings a touch of purity, soft green whispers freshness, while burgundy embodies depth and refinement. Crafted from luxurious silk, this scarf is a statement of sophistication — a versatile piece designed to elevate every silhouette with poise and distinction.',
    price: '600 AED',
    image: '/products/beige-violet.png',
    colors: ['Ivory', 'Deep Purple', 'Soft Green', 'Burgundy']
  },
  {
    id: 'sultana-flame',
    name: 'Sultana Flame Silk',
    description: 'A vibrant silk scarf igniting orange, fuchsia, and turquoise tones with bold elegance.',
    fullDescription: 'Radiant and powerful, Sultana Flame Silk embodies the fiery energy of passion and creativity. The warm orange and mandarin hues spark vitality, the bold fuchsia adds intensity, while the turquoise brings a refreshing balance. Crafted in the finest silk, this scarf is designed for those who embrace life with confidence — a striking accessory that transforms every outfit into a statement of elegance and strength.',
    price: '600 AED',
    image: '/products/orange.png',
    colors: ['Orange', 'Fuchsia', 'Turquoise', 'Mandarin']
  },
  {
    id: 'sultana-ocean',
    name: 'Sultana Ocean Silk',
    description: 'A radiant silk scarf blending ocean blues, ivory light, and golden warmth.',
    fullDescription: 'Inspired by the meeting of sea and sun, Sultana Ocean Silk captures the essence of freedom and vitality. The deep blue mirrors the vast horizon, the turquoise reflects crystal-clear waters, ivory evokes pure light, and golden yellow brings the warmth of the sun. Woven from the finest silk, this scarf is a luminous statement piece — a celebration of elegance, energy, and timeless beauty.',
    price: '600 AED',
    image: '/products/blue-yellow.png',
    colors: ['Deep Blue', 'Turquoise', 'Ivory', 'Golden Yellow']
  }
]

export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-caslon text-lg md:text-xl lg:text-2xl font-normal text-gray-900 tracking-[0.15em] uppercase mb-2">
            SULTANA SILK
          </h2>
          <div className="w-12 md:w-16 h-px bg-gray-300 mx-auto mb-4"></div>
        </div>

        {/* Products Container - Horizontal scroll on mobile, grid on desktop */}
        <div className="mb-8 md:mb-12">
          {/* Mobile horizontal scroll */}
          <div className="md:hidden flex overflow-x-auto pb-4 scrollbar-hide space-x-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-[45vw] cursor-pointer text-center transition-all duration-300"
                onClick={() => setSelectedProduct(product)}
              >
                {/* Product Image */}
                <div className="relative overflow-hidden bg-white aspect-[3/4] mb-3 w-full rounded-lg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain transition-transform duration-500 hover:scale-105 p-2"
                  />
                </div>

                {/* Product Name */}
                <h3 className="font-caslon text-xs font-normal text-gray-900 mb-1 tracking-wider leading-tight line-clamp-2 px-1">
                  {product.name.replace('Sultana ', '').replace(' Silk', '')}
                </h3>

                {/* Product Description - Short */}
                <p className="font-caslon text-[10px] text-gray-600 mb-1 leading-relaxed tracking-wide line-clamp-2 px-1">
                  {product.colors.slice(0, 2).join(', ')}
                </p>

                {/* Price */}
                <p className="font-caslon text-xs font-normal text-gray-900 tracking-wider mb-2">
                  {product.price}
                </p>
              </div>
            ))}
          </div>

          {/* Desktop grid - 5 in one line */}
          <div className="hidden md:flex flex-nowrap gap-6 lg:gap-8 pb-4 overflow-x-auto scrollbar-hide">
            {products.map((product) => (
              <div
                key={product.id}
                className="group cursor-pointer text-center transition-all duration-300 min-w-[180px] lg:min-w-[200px] flex-shrink-0"
                onClick={() => setSelectedProduct(product)}
              >
                {/* Product Image */}
                <div className="relative overflow-hidden bg-white aspect-[4/5] mb-4 w-full rounded-lg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105 p-3"
                  />
                </div>

                {/* Product Name */}
                <h3 className="font-caslon text-sm font-normal text-gray-900 mb-2 tracking-wider leading-tight">
                  {product.name.replace('Sultana ', '').replace(' Silk', '')}
                </h3>

                {/* Product Description - Short */}
                <p className="font-caslon text-xs text-gray-600 mb-2 leading-relaxed tracking-wide">
                  {product.colors.slice(0, 2).join(', ')}
                </p>

                {/* Price */}
                <p className="font-caslon text-xs font-normal text-gray-900 tracking-wider">
                  {product.price}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/collection"
            className="inline-block border border-gray-900 px-4 md:px-6 py-2 font-caslon text-xs font-normal tracking-[0.2em] uppercase transition-all duration-300 hover:bg-gray-900 hover:text-white"
          >
            VIEW COLLECTION
          </Link>
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 md:p-6 lg:p-8">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="float-right text-gray-500 hover:text-gray-700 text-xl md:text-2xl transition-colors duration-300 p-1"
              >
                ×
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 pt-2">
                {/* Product Image */}
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    className="object-contain p-3 md:p-4"
                  />
                </div>

                {/* Product Details */}
                <div className="space-y-4 md:space-y-6">
                  <h3 className="font-caslon text-lg md:text-xl lg:text-2xl font-normal text-gray-900 tracking-wide">
                    {selectedProduct.name}
                  </h3>

                  <p className="font-caslon text-xs md:text-sm text-gray-600 leading-relaxed tracking-wide text-justify">
                    {selectedProduct.fullDescription}
                  </p>

                  {/* Color Palette */}
                  <div className="mb-4 md:mb-6">
                    <h4 className="font-caslon text-xs font-normal text-gray-900 mb-2 md:mb-3 uppercase tracking-wider">
                      Color Palette
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.colors.map((color, index) => (
                        <span
                          key={index}
                          className="px-2 md:px-3 py-1 text-xs font-caslon text-gray-700 bg-gray-100 rounded-full tracking-wide"
                        >
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price */}
                  <p className="font-caslon text-lg md:text-xl font-normal text-gray-900 mb-6 md:mb-8">
                    {selectedProduct.price}
                  </p>

                  {/* Action Buttons */}
                  <div className="space-y-2 md:space-y-3">
                    <button className="w-full bg-gray-900 text-white px-4 md:px-6 py-2.5 md:py-3 font-caslon text-xs font-normal tracking-widest uppercase transition-opacity hover:opacity-90">
                      Add to Cart
                    </button>
                    <button className="w-full border border-gray-900 text-gray-900 px-4 md:px-6 py-2.5 md:py-3 font-caslon text-xs font-normal tracking-widest uppercase transition-colors duration-300 hover:bg-gray-900 hover:text-white">
                      Contact for Custom Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hide scrollbar styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
