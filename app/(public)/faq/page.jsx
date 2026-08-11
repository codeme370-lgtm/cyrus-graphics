'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Phone, Mail } from 'lucide-react'
import { assets } from '@/assets/assets'

const faqs = [
  {
    question: 'How long does it take to complete an order?',
    answer: 'Standard orders typically take 5-7 business days from approval. Rush options are available for urgent projects—contact our team for specifics.'
  },
  {
    question: 'How do you handle rush orders?',
    answer: 'We offer expedited production timelines for rush requests. Availability depends on current workload, so we recommend contacting us directly with your deadline.'
  },
  {
    question: 'Do you offer design services?',
    answer: 'Yes! Our design team creates custom designs for branding, packaging, marketing materials, and more. We can also revise existing designs to meet your needs.'
  },
  {
    question: 'Can I get a sample before placing a large order?',
    answer: 'Absolutely. We offer sample prints so you can verify quality and colors before committing to a full order. Small sample fees may apply.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, bank transfers, Paystack, and mobile money payments. Custom payment arrangements can be discussed for large orders.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We support various payment options including online payments, bank transfers, and installment plans for corporate orders. Contact us for details.'
  },
  {
    question: 'Do you provide file format guidance?',
    answer: 'Yes, we provide complete file preparation support. We accept PDF, AI, PSD, and other formats. Our team can advise on resolution, color profiles, and bleeds.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept credit cards, bank transfers, mobile payments, and can arrange custom payment terms for bulk orders.'
  },
];

export default function FAQPage() {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <main className="min-h-screen bg-[#06070e]">
      {/* Header Section */}
      <section className="relative overflow-hidden h-48 sm:h-64 lg:h-80">
        <div className="absolute inset-0">
          <img
            src={assets.ba4}
            alt="FAQs background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative h-full flex items-end">
          <div className="w-full px-4 sm:px-6 pb-8 sm:pb-12 lg:pb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">FAQs</h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-[1400px] px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* FAQ Items - Left Side */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">{faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-lg sm:rounded-xl border border-white/10 bg-slate-900/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-white/20"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 flex items-center justify-between text-left hover:bg-slate-800/50 transition-colors"
                >
                  <span className="text-slate-200 font-semibold text-sm sm:text-base lg:text-lg pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`flex-shrink-0 text-amber-400 transition-transform duration-300 ${
                      expandedIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {expandedIndex === index && (
                  <div className="px-4 pb-4 sm:px-6 sm:pb-6 lg:px-8 lg:pb-8 border-t border-white/5">
                    <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Box - Right Side */}
          <div className="lg:col-span-1">
            <div className="rounded-lg sm:rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 p-6 sm:p-8 backdrop-blur-sm lg:sticky lg:top-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Still have questions?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mb-6 sm:mb-8">
                Our friendly team is here to help. Reach out and we'll respond as soon as possible.
              </p>

              {/* Contact Items */}
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                {/* Phone */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-amber-500/15 p-2 sm:p-3 rounded-full flex-shrink-0">
                    <Phone size={18} className="text-amber-400 sm:size-20" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-slate-400 mb-1">Call Us</p>
                    <a
                      href="tel:+233248608602"
                      className="text-white font-semibold text-sm hover:text-amber-400 transition break-words"
                    >
                      +233 24 860 8602
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-amber-500/15 p-2 sm:p-3 rounded-full flex-shrink-0">
                    <Mail size={18} className="text-amber-400 sm:size-20" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-slate-400 mb-1">Email Us</p>
                    <a
                      href="mailto:info@cyrusgraphics.com"
                      className="text-white font-semibold text-sm hover:text-amber-400 transition break-all"
                    >
                      info@cyrusgraphics.com
                    </a>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="block w-full text-center bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all hover:shadow-lg hover:shadow-amber-500/50 hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
