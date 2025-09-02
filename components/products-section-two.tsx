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
    id: 'sultana-flame',
    name: 'Sultana Flame Silk',
    description: 'A vibrant silk scarf igniting orange, fuchsia, and turquoise tones with bold elegance.',
    fullDescription: 'Radiant and powerful, Sultana Flame Silk embodies the fiery energy of passion and creativity. The warm orange and mandarin hues spark vitality, the bold fuchsia adds intensity, while the turquoise brings a refreshing balance. Crafted in the finest silk, this scarf is designed for those who embrace life with confidence — a striking accessory that transforms every outfit into a statement of elegance and strength.',
    price: '600 AED',
    image: '/products/orange.png',
    colors: ['Orange', 'Fuchsia', 'Turquoise', 'Mandarin']
  },
  {
    id: 'sultana-coral',
    name: 'Sultana Coral Silk',
    description: 'A refreshing silk scarf blending orange, turquoise, red, and ivory in radiant harmony.',
    fullDescription: 'Inspired by the colors of seaside sunsets, Sultana Coral Silk radiates freshness and warmth in perfect balance. The vibrant orange captures the glow of twilight, the red adds intensity, the turquoise reflects the sea\'s brilliance, while the ivory brings serenity and elegance. Crafted from luxurious silk, this scarf is a symbol of effortless grace — a versatile accessory designed to illuminate every silhouette with timeless charm.',
    price: '600 AED',
    image: '/products/orange-blue.png',
    colors: ['Orange', 'Turquoise', 'Red', 'Ivory']
  },
  {
    id: 'sultana-ocean',
    name: 'Sultana Ocean Silk',
    description: 'A radiant silk scarf blending ocean blues, ivory light, and golden warmth.',
    fullDescription: 'Inspired by the meeting of sea and sun, Sultana Ocean Silk captures the essence of freedom and vitality. The deep blue mirrors the vast horizon, the turquoise reflects crystal-clear waters, ivory evokes pure light, and golden yellow brings the warmth of the sun. Woven from the finest silk, this scarf is a luminous statement piece — a celebration of elegance, energy, and timeless beauty.',
    price: '600 AED',
    image: '/products/blue-yellow.png',
    colors: ['Deep Blue', 'Turquoise', 'Ivory', 'Golden Yellow']
  },
  {
    id: 'sultana-blossom-2',
    name: 'Sultana Blossom Silk',
    description: 'A vibrant silk scarf blooming with green, coral, and fuchsia tones.',
    fullDescription: 'An ode to freshness and vitality, Sultana Blossom Silk is inspired by the magic of spring in full bloom. Tender green and aqua shades echo nature\'s rebirth, while coral and fuchsia add radiance and energy. Woven in the finest silk, this scarf is more than an accessory – it is a wearable work of art, a symbol of refinement and joy, designed to illuminate every silhouette with elegance and modern grace.',
    price: '600 AED',
    image: '/products/green-orange.png',
    colors: ['Green', 'Coral', 'Fuchsia', 'Aqua']
  }
]

export default function ProductsSectionTwo() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <section className="py-6 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="font-caslon text-2xl lg:text-3xl font-normal text-gray-900 tracking-[0.2em] uppercase mb-4">
            Featured Collection
          </h2>
          <p className="font-caslon text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover our most beloved designs, each telling a unique story of elegance and craftsmanship
          </p>
        </div>

        {/* Products Grid - 4 products in a row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer text-center transition-all duration-300"
              onClick={() => setSelectedProduct(product)}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden bg-white aspect-[4/5] mb-6 w-full rounded-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105 p-2"
                />
              </div>

              {/* Product Name */}
              <h3 className="font-caslon text-lg font-normal text-gray-900 mb-3 tracking-wide leading-tight">
                {product.name.replace('Sultana ', '').replace(' Silk', '')}
              </h3>

              {/* Product Description - Short */}
              <p className="font-caslon text-sm text-gray-600 mb-4 leading-relaxed">
                {product.colors.slice(0, 2).join(', ')}
              </p>

              {/* Price */}
              <p className="font-caslon text-lg font-normal text-gray-900 mb-4">
                {product.price}
              </p>

              {/* Quick View Button */}
              <button className="w-full border-2 border-[#600703] text-[#600703] hover:bg-[#600703] hover:text-white px-6 py-3 font-caslon text-sm font-normal tracking-wide uppercase transition-all duration-300">
                Quick View
              </button>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/collection"
            className="btn-luxury font-caslon text-lg font-normal tracking-[0.1em] uppercase inline-flex items-center justify-center"
          >
            VIEW FULL COLLECTION
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
                    <button className="w-full border-2 border-[#600703] text-[#600703] hover:bg-[#600703] hover:text-white px-8 py-4 font-caslon text-lg font-normal tracking-wide uppercase transition-all duration-300">
                      Add to Cart
                    </button>
                    <button className="w-full border-2 border-[#600703] text-[#600703] hover:bg-[#600703] hover:text-white px-8 py-4 font-caslon text-lg font-normal tracking-wide uppercase transition-all duration-300">
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
