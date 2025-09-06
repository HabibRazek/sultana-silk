'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="py-12 lg:py-16 relative overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-[#600703]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-amber-100/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        {/* Luxury Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <span className="font-caslon text-xs text-[#600703] uppercase tracking-[0.2em] border border-[#600703]/20 px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-sm">
              Exclusive Consultation
            </span>
          </div>
          <h2 className="font-caslon text-xl lg:text-2xl font-normal text-gray-900 mb-4 tracking-wide leading-tight">
            Connect with
            <span className="block text-[#600703] italic">Sultana Silk</span>
          </h2>
          <div className="w-16 h-px bg-[#600703]/30 mx-auto mb-4"></div>
          <p className="font-caslon text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed tracking-wide">
            Experience personalized luxury through bespoke consultations and exclusive silk collections crafted for the discerning connoisseur
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16">
          {/* Luxury Contact Information */}
          <div className="space-y-10">
            <div>
              <h3 className="font-caslon text-lg font-normal text-gray-900 mb-6 tracking-wide leading-tight">
                Atelier & <span className="text-[#600703] italic">Boutique</span>
              </h3>
              <p className="font-caslon text-sm text-gray-600 leading-relaxed tracking-wide">
                Visit our exclusive showroom for private consultations and personalized silk scarf experiences
              </p>
            </div>

            <div className="space-y-6">
              <div className="group">
                <div className="flex items-start space-x-4 p-5 bg-white/70 backdrop-blur-sm border border-gray-200/30 rounded-xl hover:border-[#600703]/20 transition-all duration-300">
                  <div className="w-10 h-10 bg-[#600703]/10 rounded-full flex items-center justify-center group-hover:bg-[#600703]/15 transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-[#600703]" />
                  </div>
                  <div>
                    <h4 className="font-caslon text-sm font-normal text-gray-900 mb-1 tracking-wide">Location</h4>
                    <p className="font-caslon text-xs text-gray-600 leading-relaxed">
                      Dubai, UAE<br />
                      <span className="text-xs text-gray-500">Luxury Fashion District</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start space-x-4 p-5 bg-white/70 backdrop-blur-sm border border-gray-200/30 rounded-xl hover:border-[#600703]/20 transition-all duration-300">
                  <div className="w-10 h-10 bg-[#600703]/10 rounded-full flex items-center justify-center group-hover:bg-[#600703]/15 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-[#600703]" />
                  </div>
                  <div>
                    <h4 className="font-caslon text-sm font-normal text-gray-900 mb-1 tracking-wide">Phone</h4>
                    <p className="font-caslon text-xs text-gray-600 leading-relaxed">
                      +971 50 185 9905<br />
                      <span className="text-xs text-gray-500">Available 9 AM - 8 PM GST</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start space-x-4 p-5 bg-white/70 backdrop-blur-sm border border-gray-200/30 rounded-xl hover:border-[#600703]/20 transition-all duration-300">
                  <div className="w-10 h-10 bg-[#600703]/10 rounded-full flex items-center justify-center group-hover:bg-[#600703]/15 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-[#600703]" />
                  </div>
                  <div>
                    <h4 className="font-caslon text-sm font-normal text-gray-900 mb-1 tracking-wide">Email</h4>
                    <p className="font-caslon text-xs text-gray-600 leading-relaxed">
                      info@sultanasilk.com<br />
                      <span className="text-xs text-gray-500">Response within 24 hours</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Luxury Contact Form */}
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 lg:p-10 shadow-xl border border-gray-200/30 relative overflow-hidden">
            {/* Form Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-[#600703]/3"></div>

            <div className="relative z-10">
              <div className="mb-8">
                <h3 className="font-caslon text-lg font-normal text-gray-900 mb-3 tracking-wide leading-tight">
                  Begin Your <span className="text-[#600703] italic">Journey</span>
                </h3>
                <p className="font-caslon text-sm text-gray-600 leading-relaxed tracking-wide">
                  Share your vision and let us craft the perfect silk experience for you
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-caslon text-xs font-normal text-gray-800 mb-2 tracking-wide">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-3 border border-gray-200/50 rounded-xl focus:ring-1 focus:ring-[#600703]/20 focus:border-[#600703] transition-all duration-300 font-caslon text-sm bg-white/70 backdrop-blur-sm placeholder-gray-400"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-caslon text-xs font-normal text-gray-800 mb-2 tracking-wide">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-3 border border-gray-200/50 rounded-xl focus:ring-1 focus:ring-[#600703]/20 focus:border-[#600703] transition-all duration-300 font-caslon text-sm bg-white/70 backdrop-blur-sm placeholder-gray-400"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block font-caslon text-xs font-normal text-gray-800 mb-2 tracking-wide">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-3 border border-gray-200/50 rounded-xl focus:ring-1 focus:ring-[#600703]/20 focus:border-[#600703] transition-all duration-300 font-caslon text-sm bg-white/70 backdrop-blur-sm placeholder-gray-400"
                    placeholder="+971 50 000 0000"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-caslon text-xs font-normal text-gray-800 mb-2 tracking-wide">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-3 border border-gray-200/50 rounded-xl focus:ring-1 focus:ring-[#600703]/20 focus:border-[#600703] transition-all duration-300 font-caslon text-sm resize-none bg-white/70 backdrop-blur-sm placeholder-gray-400"
                    placeholder="Share your vision for the perfect silk scarf experience. Tell us about your style preferences, occasions, or any special requirements..."
                    required
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full border border-[#600703] text-[#600703] hover:bg-[#600703] hover:text-white px-6 py-3.5 rounded-xl font-caslon text-xs font-normal tracking-wider uppercase transition-all duration-300 backdrop-blur-sm"
                  >
                    Begin Your Journey
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
