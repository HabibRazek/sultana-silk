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
    image: '/products/green-orange.jpeg',
    colors: ['Green', 'Coral', 'Fuchsia', 'Aqua']
  },
  {
    id: 'sultana-midnight',
    name: 'Sultana Midnight Silk',
    description: 'A bold silk scarf blending deep grey, rich burgundy, and teal elegance.',
    fullDescription: 'Mysterious and refined, Sultana Midnight Silk captures the allure of nightfall illuminated by precious shades. The deep grey evokes timeless elegance, the burgundy embodies passion and strength, while the teal brings balance and modernity. Woven from sumptuous silk, this scarf is more than an accessory – it is a symbol of distinction, designed to reveal bold elegance and sophistication on every occasion.',
    price: '600 AED',
    image: '/products/black-red-blue.jpeg',
    colors: ['Deep Grey', 'Burgundy', 'Teal']
  },
  {
    id: 'sultana-royal',
    name: 'Sultana Royal Silk',
    description: 'A refined silk scarf uniting ivory, deep purple, soft green, and rich burgundy.',
    fullDescription: 'Majestic and timeless, Sultana Royal Silk evokes the grace of noble traditions reimagined for modern elegance. The deep purple recalls regal splendor, ivory brings a touch of purity, soft green whispers freshness, while burgundy embodies depth and refinement. Crafted from luxurious silk, this scarf is a statement of sophistication — a versatile piece designed to elevate every silhouette with poise and distinction.',
    price: '600 AED',
    image: '/products/beige-violet.jpeg',
    colors: ['Ivory', 'Deep Purple', 'Soft Green', 'Burgundy']
  },
  {
    id: 'sultana-flame',
    name: 'Sultana Flame Silk',
    description: 'A vibrant silk scarf igniting orange, fuchsia, and turquoise tones with bold elegance.',
    fullDescription: 'Radiant and powerful, Sultana Flame Silk embodies the fiery energy of passion and creativity. The warm orange and mandarin hues spark vitality, the bold fuchsia adds intensity, while the turquoise brings a refreshing balance. Crafted in the finest silk, this scarf is designed for those who embrace life with confidence — a striking accessory that transforms every outfit into a statement of elegance and strength.',
    price: '600 AED',
    image: '/products/orange.jpeg',
    colors: ['Orange', 'Fuchsia', 'Turquoise', 'Mandarin']
  },
  {
    id: 'sultana-coral',
    name: 'Sultana Coral Silk',
    description: 'A refreshing silk scarf blending orange, turquoise, red, and ivory in radiant harmony.',
    fullDescription: 'Inspired by the colors of seaside sunsets, Sultana Coral Silk radiates freshness and warmth in perfect balance. The vibrant orange captures the glow of twilight, the red adds intensity, the turquoise reflects the sea\'s brilliance, while the ivory brings serenity and elegance. Crafted from luxurious silk, this scarf is a symbol of effortless grace — a versatile accessory designed to illuminate every silhouette with timeless charm.',
    price: '600 AED',
    image: '/products/orange-blue.jpeg',
    colors: ['Orange', 'Turquoise', 'Red', 'Ivory']
  },
  {
    id: 'sultana-ocean',
    name: 'Sultana Ocean Silk',
    description: 'A radiant silk scarf blending ocean blues, ivory light, and golden warmth.',
    fullDescription: 'Inspired by the meeting of sea and sun, Sultana Ocean Silk captures the essence of freedom and vitality. The deep blue mirrors the vast horizon, the turquoise reflects crystal-clear waters, ivory evokes pure light, and golden yellow brings the warmth of the sun. Woven from the finest silk, this scarf is a luminous statement piece — a celebration of elegance, energy, and timeless beauty.',
    price: '600 AED',
    image: '/products/blue-yellow.jpeg',
    colors: ['Deep Blue', 'Turquoise', 'Ivory', 'Golden Yellow']
  }
]

export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-luxurious text-5xl lg:text-6xl font-light text-gray-900 mb-6 tracking-wide">
            Luxury Collection
          </h2>
          <p className="font-red-hat text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our exquisite collection of handcrafted silk scarves, each piece a masterwork of elegance and sophistication
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-[4/3] mb-6">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105 p-4"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
              </div>

              {/* Product Info */}
              <div className="text-center">
                <h3 className="font-luxurious text-2xl font-light text-gray-900 mb-3 tracking-wide">
                  {product.name}
                </h3>
                <p className="font-red-hat text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Color Palette */}
                <div className="flex justify-center space-x-2 mb-4">
                  {product.colors.map((color, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-red-hat text-gray-500 bg-gray-100 rounded-full"
                    >
                      {color}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <p className="font-luxurious text-2xl font-light text-gray-900 mb-6">
                  {product.price}
                </p>

                {/* CTA Button */}
                <button className="btn-luxury font-red-hat text-sm font-medium tracking-wide uppercase transition-transform hover:scale-105">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="float-right text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Product Image */}
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-50">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    className="object-contain p-6"
                  />
                </div>

                {/* Product Details */}
                <div>
                  <h3 className="font-luxurious text-4xl font-light text-gray-900 mb-4 tracking-wide">
                    {selectedProduct.name}
                  </h3>

                  <p className="font-red-hat text-lg text-gray-600 mb-6 leading-relaxed">
                    {selectedProduct.fullDescription}
                  </p>

                  {/* Color Palette */}
                  <div className="mb-6">
                    <h4 className="font-red-hat text-sm font-medium text-gray-900 mb-3 uppercase tracking-wide">
                      Color Palette
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.colors.map((color, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 text-sm font-red-hat text-gray-700 bg-gray-100 rounded-full"
                        >
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price */}
                  <p className="font-luxurious text-3xl font-light text-gray-900 mb-8">
                    {selectedProduct.price}
                  </p>

                  {/* Action Buttons */}
                  <div className="space-y-4">
                    <button className="w-full btn-luxury font-red-hat text-lg font-medium tracking-wide uppercase">
                      Add to Cart
                    </button>
                    <button className="w-full border-2 border-gray-900 text-gray-900 px-8 py-4 font-red-hat text-lg font-medium tracking-wide uppercase hover:bg-gray-900 hover:text-white transition-colors duration-300">
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
