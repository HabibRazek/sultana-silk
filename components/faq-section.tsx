'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FAQItem {
  id: string
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    id: 'silk-quality',
    question: 'What makes Sultana Silk scarves exceptional?',
    answer: 'Our scarves are crafted from 100% pure mulberry silk, the finest grade available. Each piece undergoes meticulous quality control and is hand-finished by skilled artisans. We use premium dyes that maintain their vibrancy while ensuring the silk\'s natural luster and softness.'
  },
  {
    id: 'care-instructions',
    question: 'How should I care for my luxury silk scarf?',
    answer: 'For optimal longevity, we recommend dry cleaning or gentle hand washing in cold water with silk-specific detergent. Avoid direct sunlight when drying, and store flat or loosely rolled. Iron on low heat with a protective cloth. Our care guide provides detailed instructions with each purchase.'
  },
  {
    id: 'sizing-dimensions',
    question: 'What are the dimensions of your silk scarves?',
    answer: 'Our luxury scarves measure 90cm x 90cm (35" x 35"), the perfect size for versatile styling. This classic dimension allows for multiple wearing styles - from elegant neck draping to sophisticated head wraps, shoulder throws, or even as a luxury accent for handbags.'
  },
  {
    id: 'shipping-delivery',
    question: 'What are your shipping and delivery options?',
    answer: 'We offer complimentary worldwide shipping on all orders. Standard delivery takes 3-5 business days within the UAE, 7-10 days internationally. Express shipping is available for urgent orders. Each scarf arrives in our signature luxury packaging, perfect for gifting.'
  },
  {
    id: 'custom-designs',
    question: 'Do you offer custom or bespoke designs?',
    answer: 'Yes, we provide exclusive bespoke services for discerning clients. Our design team can create personalized patterns, incorporate specific color palettes, or develop unique motifs. Custom orders require 4-6 weeks and include personal consultations with our design specialists.'
  },
  {
    id: 'authenticity-guarantee',
    question: 'How can I verify the authenticity of my Sultana Silk scarf?',
    answer: 'Every authentic Sultana Silk scarf includes a certificate of authenticity, unique serial number, and our signature care card. The silk quality, hand-rolled edges, and precise pattern alignment are hallmarks of our craftsmanship. We also provide authentication services for pre-owned pieces.'
  },
  {
    id: 'return-policy',
    question: 'What is your return and exchange policy?',
    answer: 'We offer a 30-day return policy for unworn items in original packaging. Exchanges are complimentary within the UAE, with return shipping covered internationally. Custom or personalized items are final sale. Our customer service team ensures a seamless return experience.'
  },
  {
    id: 'styling-consultation',
    question: 'Do you provide styling consultations?',
    answer: 'Absolutely. Our personal styling consultants offer complimentary sessions to help you discover the perfect scarf for your wardrobe and lifestyle. We provide styling guides, seasonal recommendations, and tips for incorporating luxury silk into your daily and special occasion looks.'
  }
]

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-amber-100/30 to-amber-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-gray-100/40 to-gray-200/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-luxurious text-5xl lg:text-6xl font-light text-gray-900 mb-6 tracking-wide">
            Frequently Asked Questions
          </h2>
          <p className="font-red-hat text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about our luxury silk scarves and exceptional service
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="group bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/50 transition-colors duration-300"
              >
                <h3 className="font-red-hat text-lg font-medium text-gray-900 pr-4 leading-relaxed">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.includes(item.id) ? (
                    <ChevronUp className="w-5 h-5 text-gray-600 transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600 transition-transform duration-300" />
                  )}
                </div>
              </button>

              {/* Answer */}
              <div className={cn(
                "overflow-hidden transition-all duration-500 ease-in-out",
                openItems.includes(item.id) 
                  ? "max-h-96 opacity-100" 
                  : "max-h-0 opacity-0"
              )}>
                <div className="px-8 pb-6 pt-2">
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4"></div>
                  <p className="font-red-hat text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white/60 backdrop-blur-sm border border-white/50 rounded-2xl p-8 shadow-lg">
            <h3 className="font-luxurious text-2xl font-light text-gray-900 mb-4 tracking-wide">
              Still Have Questions?
            </h3>
            <p className="font-red-hat text-gray-600 mb-6 leading-relaxed">
              Our luxury consultants are here to assist you with personalized guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-luxury font-red-hat text-sm font-medium tracking-wide uppercase">
                Contact Our Experts
              </button>
              <button className="border-2 border-gray-900 text-gray-900 px-6 py-3 font-red-hat text-sm font-medium tracking-wide uppercase hover:bg-gray-900 hover:text-white transition-colors duration-300 rounded-lg">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
