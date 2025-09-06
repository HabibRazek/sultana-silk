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

const bestSellerProducts: Product[] = [
  {
    id: 'sultana-heritage',
    name: 'Sultana Heritage Silk',
    description: 'A timeless silk scarf featuring traditional Tunisian patterns.',
    fullDescription: 'Inspired by the rich heritage of Tunisian craftsmanship, Sultana Heritage Silk embodies centuries of weaving tradition. This exquisite piece features intricate patterns passed down through generations, woven in the finest silk with meticulous attention to detail. Each thread tells a story of cultural pride and artistic excellence, making this scarf a treasured heirloom for the modern connoisseur.',
    price: '650 AED',
    image: '/products/green-orange.png',
    colors: ['Deep Burgundy', 'Gold', 'Ivory', 'Forest Green']
  },
  {
    id: 'sultana-artisan',
    name: 'Sultana Artisan Silk',
    description: 'A premium silk scarf with hand-embroidered gold accents.',
    fullDescription: 'Crafted by master artisans in the historic medina of Mahdia, Sultana Artisan Silk represents the pinnacle of luxury craftsmanship. Each scarf features delicate hand-embroidered gold threads that catch the light beautifully, creating an ethereal glow. This piece is a testament to the skill and dedication of our artisans, designed for those who appreciate true luxury and authenticity.',
    price: '750 AED',
    image: '/products/black-red-blue.png',
    colors: ['Midnight Blue', 'Gold', 'Silver', 'Deep Purple']
  },
  {
    id: 'sultana-royal-limited',
    name: 'Sultana Royal Limited',
    description: 'An exclusive limited edition silk scarf with royal motifs.',
    fullDescription: 'A masterpiece of luxury and exclusivity, Sultana Royal Limited is our most coveted creation. This limited edition scarf features royal motifs inspired by ancient Tunisian palaces, woven with the finest silk and adorned with precious metallic threads. Only a select few pieces are created each season, making this scarf a true collector\'s item for the discerning luxury enthusiast.',
    price: '850 AED',
    image: '/products/beige-violet.png',
    colors: ['Royal Purple', 'Gold', 'Ivory', 'Emerald'],
  },
  {
    id: 'sultana-ocean-2',
    name: 'Sultana Ocean Silk',
    description: 'A radiant silk scarf blending ocean blues, ivory light, and golden warmth.',
    fullDescription: 'Inspired by the meeting of sea and sun, Sultana Ocean Silk captures the essence of freedom and vitality. The deep blue mirrors the vast horizon, the turquoise reflects crystal-clear waters, ivory evokes pure light, and golden yellow brings the warmth of the sun. Woven from the finest silk, this scarf is a luminous statement piece — a celebration of elegance, energy, and timeless beauty.',
    price: '600 AED',
    image: '/products/blue-yellow.png',
    colors: ['Deep Blue', 'Turquoise', 'Ivory', 'Golden Yellow']
  },
]

export default function BestSellers() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-caslon text-sm md:text-lg lg:text-xl font-normal text-red-900 tracking-[0.15em] uppercase">
            Our Best Sellers
          </h2>
        </div>

        {/* Products Grid - 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
          {bestSellerProducts.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer text-center transition-all duration-300"
              onClick={() => setSelectedProduct(product)}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden bg-white aspect-[3/4] mb-3 md:mb-6 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105 p-2 md:p-3"
                />
              </div>

              {/* Product Name */}
              <h3 className="font-caslon text-xs md:text-sm font-normal text-gray-900 mb-1 md:mb-2 tracking-wider leading-tight line-clamp-2">
                {product.name.replace('Sultana ', '').replace(' Silk', '')}
              </h3>

              {/* Product Description - Short */}
              <p className="font-caslon text-[10px] md:text-xs text-gray-600 mb-1 md:mb-2 leading-relaxed tracking-wide line-clamp-2">
                {product.colors.slice(0, 2).join(', ')}
              </p>

              {/* Price */}
              <p className="font-caslon text-xs md:text-xs font-normal text-gray-900 tracking-wider">
                {product.price}
              </p>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/collection"
            className="inline-block border border-red-900 text-red-900 px-4 md:px-6 py-1.5 md:py-2 font-caslon text-xs font-normal tracking-[0.2em] uppercase transition-all duration-300 hover:bg-red-900 hover:text-white"
          >
            VIEW ALL
          </Link>
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 md:p-8">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="float-right text-gray-500 hover:text-gray-700 text-xl transition-colors"
              >
                ×
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 pt-2">
                {/* Product Image */}
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    className="object-contain p-2 md:p-4"
                  />
                </div>

                {/* Product Details */}
                <div className="mt-4 md:mt-0">
                  <h3 className="font-caslon text-lg md:text-2xl font-normal text-gray-900 mb-3 md:mb-4 tracking-wide">
                    {selectedProduct.name}
                  </h3>

                  <p className="font-caslon text-xs md:text-sm text-gray-600 mb-4 md:mb-6 leading-relaxed tracking-wide">
                    {selectedProduct.fullDescription}
                  </p>

                  {/* Color Palette */}
                  <div className="mb-4 md:mb-6">
                    <h4 className="font-caslon text-xs font-normal text-gray-900 mb-2 md:mb-3 uppercase tracking-wider">
                      Color Palette
                    </h4>
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {selectedProduct.colors.map((color, index) => (
                        <span
                          key={index}
                          className="px-2 md:px-3 py-0.5 md:py-1 text-[10px] md:text-xs font-caslon text-gray-700 bg-gray-100 rounded-full tracking-wide"
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
                    <button className="w-full bg-gray-900 text-white px-4 md:px-6 py-2 md:py-3 font-caslon text-xs font-normal tracking-widest uppercase transition-opacity hover:opacity-90">
                      Add to Cart
                    </button>
                    <button className="w-full border border-gray-900 text-gray-900 px-4 md:px-6 py-2 md:py-3 font-caslon text-xs font-normal tracking-widest uppercase transition-colors duration-300 hover:bg-gray-900 hover:text-white">
                      Contact for Custom Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
