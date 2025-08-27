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
    <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-luxurious text-5xl lg:text-6xl font-light text-gray-900 mb-6 tracking-wide">
            Get in Touch
          </h2>
          <p className="font-red-hat text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience luxury personalized. Contact us for bespoke consultations and exclusive collections
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="font-luxurious text-3xl font-light text-gray-900 mb-8 tracking-wide">
              Visit Our Boutique
            </h3>
            
            <div className="space-y-8">
              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-red-hat font-medium text-gray-900 mb-2">Location</h4>
                  <p className="font-red-hat text-gray-600 leading-relaxed">
                    Dubai, UAE<br />
                    Luxury Fashion District
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-red-hat font-medium text-gray-900 mb-2">Phone</h4>
                  <p className="font-red-hat text-gray-600">
                    +971 50 185 9905
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-red-hat font-medium text-gray-900 mb-2">Email</h4>
                  <p className="font-red-hat text-gray-600">
                    info@sultanasilk.com
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-red-hat font-medium text-gray-900 mb-2">Hours</h4>
                  <div className="font-red-hat text-gray-600 space-y-1">
                    <p>Sunday - Thursday: 10:00 AM - 8:00 PM</p>
                    <p>Friday - Saturday: 10:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="mt-12">
              <h4 className="font-luxurious text-2xl font-light text-gray-900 mb-6 tracking-wide">
                Our Services
              </h4>
              <div className="space-y-3 font-red-hat text-gray-600">
                <p>• Personal styling consultations</p>
                <p>• Custom scarf design</p>
                <p>• Gift wrapping and presentation</p>
                <p>• International shipping</p>
                <p>• Care and maintenance guidance</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="font-luxurious text-3xl font-light text-gray-900 mb-8 tracking-wide">
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-red-hat text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors font-red-hat"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-red-hat text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors font-red-hat"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block font-red-hat text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors font-red-hat"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-red-hat text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors font-red-hat resize-none"
                  placeholder="Tell us about your interest in our luxury silk scarves..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-luxury font-red-hat text-lg font-medium tracking-wide uppercase"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
