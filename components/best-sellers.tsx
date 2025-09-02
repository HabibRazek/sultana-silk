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
    <section className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="font-caslon text-2xl lg:text-3xl font-normal text-red-900 tracking-[0.2em] uppercase">
            Our Best Sellers
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-10">
          {bestSellerProducts.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer text-center"
              onClick={() => setSelectedProduct(product)}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden bg-white aspect-[4/5] mb-8 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105 p-2"
                />
              </div>

              {/* Product Name */}
              <h3 className="font-caslon text-sm lg:text-base font-normal text-gray-900 mb-2 tracking-wide leading-tight">
                {product.name.replace('Sultana ', '').replace(' Silk', '')}
              </h3>

              {/* Product Description - Short */}
              <p className="font-caslon text-xs lg:text-sm text-gray-600 mb-3 leading-relaxed">
                {product.colors.slice(0, 2).join(', ')}
              </p>

              {/* Price */}
              <p className="font-caslon text-sm lg:text-base font-normal text-gray-900">
                {product.price}
              </p>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/collection"
            className="btn-luxury font-caslon text-lg font-normal tracking-[0.1em] uppercase inline-flex items-center justify-center"
          >
            VIEW ALL
          </Link>
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="float-right text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Product Image */}
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>

                {/* Product Details */}
                <div>
                  <h3 className="font-caslon text-4xl font-normal text-gray-900 mb-4 tracking-wide">
                    {selectedProduct.name}
                  </h3>

                  <p className="font-caslon text-lg text-gray-600 mb-6 leading-relaxed">
                    {selectedProduct.fullDescription}
                  </p>

                  {/* Color Palette */}
                  <div className="mb-6">
                    <h4 className="font-caslon text-sm font-normal text-gray-900 mb-3 uppercase tracking-wide">
                      Color Palette
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.colors.map((color, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 text-sm font-caslon text-gray-700 bg-gray-100 rounded-full"
                        >
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price */}
                  <p className="font-caslon text-3xl font-normal text-gray-900 mb-8">
                    {selectedProduct.price}
                  </p>

                  {/* Action Buttons */}
                  <div className="space-y-4">
                    <button className="w-full btn-luxury font-caslon text-lg font-normal tracking-wide uppercase">
                      Add to Cart
                    </button>
                    <button className="w-full border-2 border-gray-900 text-gray-900 px-8 py-4 font-caslon text-lg font-normal tracking-wide uppercase hover:bg-gray-900 hover:text-white transition-colors duration-300">
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
