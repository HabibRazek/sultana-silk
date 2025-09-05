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
    <section className="py-10 lg:py-16 relative overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-[#600703]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-amber-100/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Luxury Section Header */}
        <div className="text-center mb-10 lg:mb-12">
          <div className="inline-block mb-6">
            <span className="font-caslon text-xs text-[#600703] uppercase tracking-[0.3em] border border-[#600703]/30 px-6 py-2 rounded-full bg-white/50 backdrop-blur-sm">
              Exclusive Consultation
            </span>
          </div>
          <h2 className="font-caslon text-2xl lg:text-3xl font-normal text-gray-900 mb-8 tracking-wide leading-tight">
            Connect with
            <span className="block text-[#600703] italic">Sultana Silk</span>
          </h2>
          <p className="font-caslon text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed tracking-wide">
            Experience personalized luxury through bespoke consultations and exclusive silk collections crafted for the discerning connoisseur
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Luxury Contact Information */}
          <div className="space-y-12">
            <div>
              <h3 className="font-caslon text-xl lg:text-2xl font-normal text-gray-900 mb-8 tracking-wide leading-tight">
                Atelier & <span className="text-[#600703] italic">Boutique</span>
              </h3>
              <p className="font-caslon text-sm lg:text-base text-gray-600 leading-relaxed tracking-wide">
                Visit our exclusive showroom for private consultations and personalized silk scarf experiences
              </p>
            </div>

            <div className="space-y-8">
              <div className="group">
                <div className="flex items-start space-x-4 p-6 bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-2xl hover:border-[#600703]/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-[#600703]/10 rounded-full flex items-center justify-center group-hover:bg-[#600703]/20 transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-[#600703]" />
                  </div>
                  <div>
                    <h4 className="font-caslon text-base font-normal text-gray-900 mb-2 tracking-wide">Location</h4>
                    <p className="font-caslon text-sm text-gray-600 leading-relaxed">
                      Dubai, UAE<br />
                      <span className="text-xs text-gray-500">Luxury Fashion District</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start space-x-4 p-6 bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-2xl hover:border-[#600703]/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-[#600703]/10 rounded-full flex items-center justify-center group-hover:bg-[#600703]/20 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-[#600703]" />
                  </div>
                  <div>
                    <h4 className="font-caslon text-base font-normal text-gray-900 mb-2 tracking-wide">Phone</h4>
                    <p className="font-caslon text-sm text-gray-600 leading-relaxed">
                      +971 50 185 9905<br />
                      <span className="text-xs text-gray-500">Available 9 AM - 8 PM GST</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start space-x-4 p-6 bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-2xl hover:border-[#600703]/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-[#600703]/10 rounded-full flex items-center justify-center group-hover:bg-[#600703]/20 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-[#600703]" />
                  </div>
                  <div>
                    <h4 className="font-caslon text-base font-normal text-gray-900 mb-2 tracking-wide">Email</h4>
                    <p className="font-caslon text-sm text-gray-600 leading-relaxed">
                      info@sultanasilk.com<br />
                      <span className="text-xs text-gray-500">Response within 24 hours</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Luxury Contact Form */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-200/50 relative overflow-hidden">
            {/* Form Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-[#600703]/5"></div>

            <div className="relative z-10">
              <div className="mb-10">
                <h3 className="font-caslon text-xl lg:text-2xl font-normal text-gray-900 mb-4 tracking-wide leading-tight">
                  Begin Your <span className="text-[#600703] italic">Journey</span>
                </h3>
                <p className="font-caslon text-sm lg:text-base text-gray-600 leading-relaxed tracking-wide">
                  Share your vision and let us craft the perfect silk experience for you
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block font-caslon text-sm font-normal text-gray-800 mb-4 tracking-wide">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-6 py-5 border-2 border-gray-200/70 rounded-2xl focus:ring-2 focus:ring-[#600703]/20 focus:border-[#600703] transition-all duration-300 font-caslon text-sm bg-white/70 backdrop-blur-sm placeholder-gray-400"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-caslon text-sm font-normal text-gray-800 mb-4 tracking-wide">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-5 border-2 border-gray-200/70 rounded-2xl focus:ring-2 focus:ring-[#600703]/20 focus:border-[#600703] transition-all duration-300 font-caslon text-sm bg-white/70 backdrop-blur-sm placeholder-gray-400"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block font-caslon text-sm font-normal text-gray-800 mb-4 tracking-wide">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-5 border-2 border-gray-200/70 rounded-2xl focus:ring-2 focus:ring-[#600703]/20 focus:border-[#600703] transition-all duration-300 font-caslon text-sm bg-white/70 backdrop-blur-sm placeholder-gray-400"
                    placeholder="+971 50 000 0000"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-caslon text-sm font-normal text-gray-800 mb-4 tracking-wide">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-6 py-5 border-2 border-gray-200/70 rounded-2xl focus:ring-2 focus:ring-[#600703]/20 focus:border-[#600703] transition-all duration-300 font-caslon text-sm resize-none bg-white/70 backdrop-blur-sm placeholder-gray-400"
                    placeholder="Share your vision for the perfect silk scarf experience. Tell us about your style preferences, occasions, or any special requirements..."
                    required
                  ></textarea>
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full border-2 border-[#600703] text-[#600703] hover:bg-[#600703] hover:text-white px-8 py-6 rounded-2xl font-caslon text-base font-normal tracking-wide uppercase transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl backdrop-blur-sm"
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
