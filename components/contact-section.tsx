'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

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
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-24">
          {/* Section Label */}
          <div className="mb-6">
            <span className="font-caslon text-sm font-normal text-amber-600 tracking-[0.3em] uppercase">
              Contact Us
            </span>
          </div>

          <h2 className="font-caslon text-6xl lg:text-7xl font-normal text-gray-900 mb-8 tracking-wide leading-tight">
            Get in Touch
          </h2>
          <p className="font-caslon text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Experience luxury personalized. Contact us for bespoke consultations and exclusive collections
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h3 className="font-caslon text-4xl font-normal text-gray-900 mb-8 tracking-wide">
                Visit Our Boutique
              </h3>
              <p className="font-caslon text-lg text-gray-600 leading-relaxed">
                Step into a world of luxury where every detail reflects our commitment to excellence and timeless elegance.
              </p>
            </div>

            <div className="space-y-8">
              {/* Location */}
              <div className="flex items-start space-x-6 group">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-caslon text-xl font-normal text-gray-900 mb-3 tracking-wide">Location</h4>
                  <p className="font-caslon text-lg text-gray-600 leading-relaxed">
                    Dubai, UAE<br />
                    Luxury Fashion District
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-6 group">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-caslon text-xl font-normal text-gray-900 mb-3 tracking-wide">Phone</h4>
                  <p className="font-caslon text-lg text-gray-600">
                    +971 50 185 9905
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-6 group">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-caslon text-xl font-normal text-gray-900 mb-3 tracking-wide">Email</h4>
                  <p className="font-caslon text-lg text-gray-600">
                    info@sultanasilk.com
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-6 group">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-caslon text-xl font-normal text-gray-900 mb-3 tracking-wide">Hours</h4>
                  <div className="font-caslon text-lg text-gray-600 space-y-2">
                    <p>Sunday - Thursday: 10:00 AM - 8:00 PM</p>
                    <p>Friday - Saturday: 10:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="mt-16 p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
              <h4 className="font-caslon text-3xl font-normal text-gray-900 mb-8 tracking-wide">
                Our Services
              </h4>
              <div className="grid grid-cols-1 gap-4 font-caslon text-lg text-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <p>Personal styling consultations</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <p>Custom scarf design</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <p>Gift wrapping and presentation</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <p>International shipping</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <p>Care and maintenance guidance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-10 shadow-2xl border border-gray-100">
            <div className="mb-10">
              <h3 className="font-caslon text-4xl font-normal text-gray-900 mb-4 tracking-wide">
                Send us a Message
              </h3>
              <p className="font-caslon text-lg text-gray-600">
                Share your vision with us and let&apos;s create something extraordinary together.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-caslon text-lg font-normal text-gray-700 mb-3 tracking-wide">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 font-caslon text-lg bg-white/80 backdrop-blur-sm"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-caslon text-lg font-normal text-gray-700 mb-3 tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 font-caslon text-lg bg-white/80 backdrop-blur-sm"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block font-caslon text-lg font-normal text-gray-700 mb-3 tracking-wide">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 font-caslon text-lg bg-white/80 backdrop-blur-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-caslon text-lg font-normal text-gray-700 mb-3 tracking-wide">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 font-caslon text-lg resize-none bg-white/80 backdrop-blur-sm"
                  placeholder="Tell us about your interest in our luxury silk scarves..."
                  required
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-5 rounded-xl font-caslon text-xl font-normal tracking-wide uppercase transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
