'use client'
import React, { useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const ClientReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const reviews = [
    {
      id: 1,
      name: 'Adrian Metcalfe',
      title: 'Creative Director',
      company: 'TechStart Studios',
      image: '👨‍💼',
      rating: 5,
      text: 'Cyrus Graphics exceeded our expectations with their exceptional branding work. The team understood our vision perfectly and delivered designs that truly represent our brand identity. Highly recommend!',
      verified: true
    },
    {
      id: 2,
      name: 'Maria Santos',
      title: 'Marketing Manager',
      company: 'Global Retail Co',
      image: '👩‍💼',
      rating: 5,
      text: 'The print quality and turnaround time were outstanding. From concept to delivery, Cyrus Graphics demonstrated professionalism and attention to detail. Our marketing campaign was a huge success!',
      verified: true
    },
    {
      id: 3,
      name: 'James Wilson',
      title: 'Founder & CEO',
      company: 'InnovateTech',
      image: '👨‍💻',
      rating: 5,
      text: 'We\'ve been working with Cyrus Graphics for over 2 years. Consistently delivering premium designs and prints. Their team is responsive, creative, and truly cares about client satisfaction.',
      verified: true
    },
    {
      id: 4,
      name: 'Emma Thompson',
      title: 'Brand Manager',
      company: 'Elite Fashion Group',
      image: '👩‍🎓',
      rating: 5,
      text: 'From packaging design to promotional materials, Cyrus Graphics has been our go-to partner. Their creativity and quality are unmatched. We trust them with all our design needs.',
      verified: true
    },
    {
      id: 5,
      name: 'David Chen',
      title: 'Operations Director',
      company: 'Premium Solutions Ltd',
      image: '👨‍🔧',
      rating: 5,
      text: 'Best decision we made was partnering with Cyrus Graphics. Their designs have elevated our brand presence significantly. Exceptional service and quality every single time.',
      verified: true
    },
  ]

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const displayedReviews = [
    reviews[currentIndex],
    reviews[(currentIndex + 1) % reviews.length],
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-b from-[#06070e] to-[#0a0c14]">
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
            What Our Clients Say
          </h2>
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-2">
            Trusted by hundreds of brands worldwide. See why businesses choose Cyrus Graphics for their design and print needs.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="relative mb-12">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {displayedReviews.map((review, idx) => (
              <div
                key={review.id}
                className="group rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-5 sm:p-8 lg:p-10 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:from-white/10"
              >
                {/* Stars */}
                <div className="flex gap-1.5 mb-4 sm:mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 min-h-[80px] sm:min-h-[120px]">
                  "{review.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-white/10">
                  <div className="text-3xl sm:text-4xl flex-shrink-0">{review.image}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-semibold text-white text-sm sm:text-lg">
                        {review.name}
                      </h3>
                      {review.verified && (
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-500/20 flex-shrink-0">
                          <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      {review.title}
                    </p>
                    <p className="text-xs text-slate-500">
                      {review.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 hidden lg:flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all hover:scale-110"
            aria-label="Previous reviews"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 hidden lg:flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all hover:scale-110"
            aria-label="Next reviews"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mb-12">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`transition-all duration-300 rounded-full ${
                idx === currentIndex
                  ? 'w-8 h-3 bg-gradient-to-r from-amber-400 to-amber-300'
                  : 'w-3 h-3 bg-white/20 hover:bg-white/30'
              }`}
              aria-label={`Go to review ${idx + 1}`}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-20 rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-amber-500/10 p-6 sm:p-12 lg:p-16 text-center">
          <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-2">
            Ready to bring your ideas to life?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            Join hundreds of satisfied clients who have transformed their brand with Cyrus Graphics.
          </p>
          <Link
            href="/request-quote"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-6 sm:px-10 py-3 sm:py-4 text-sm sm:text-lg font-semibold text-slate-950 transition-all hover:shadow-lg hover:shadow-amber-500/50 hover:scale-105"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ClientReviewsSection
