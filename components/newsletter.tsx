'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubscribed(true)
      setEmail('')
    }, 1000)
  }

  return (
    <section
      className="relative w-full h-[60vh] overflow-hidden"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/newsletter-bg.jpeg'), url('/newslettre/newslettre.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#8B4513' // Fallback brown color similar to weaving
      }}
    >

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          {/* Small Label */}
          <p className="font-caslon text-sm text-white/80 mb-4 tracking-[0.3em] uppercase">
            Keep me updated
          </p>

          {/* Main Heading */}
          <h2 className="font-caslon text-4xl lg:text-6xl font-normal text-white mb-6 tracking-wide">
            Newsletter
          </h2>

          {/* Description */}
          <p className="font-caslon text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto mb-8">
            Subscribe to get notified about product launches, special offers and company news.
          </p>

          {/* Newsletter Form */}
          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail:"
                  className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 font-caslon text-sm focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-white text-black font-caslon text-sm font-normal tracking-wide uppercase transition-all duration-300 hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
            </form>
          ) : (
            <div className="max-w-md mx-auto">
              <div className="bg-white/10 backdrop-blur-sm border border-white/30 px-6 py-4 rounded">
                <p className="font-caslon text-white text-sm">
                  ✓ Thank you for subscribing! You&apos;ll receive our latest updates soon.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
