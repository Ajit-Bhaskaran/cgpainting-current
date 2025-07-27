'use client'

import { CheckCircle, Award, Users, Clock, Shield, Star } from 'lucide-react'
import Image from 'next/image'

const features = [
  {
    icon: Award,
    title: "Years of On-the-Road Painting Experience",
    description: "Over a decade of professional painting experience with hundreds of satisfied customers across the region."
  },
  {
    icon: CheckCircle,
    title: "Quality Guaranteed",
    description: "We stand behind our work with a satisfaction guarantee and use only premium materials."
  },
  {
    icon: Users,
    title: "Professional Team",
    description: "Skilled, insured, and reliable painters who treat your property with respect and care."
  },
  {
    icon: Clock,
    title: "On-Time Service",
    description: "We respect your schedule and complete projects on time, every time."
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Complete insurance coverage for your peace of mind and property protection."
  },
  {
    icon: Star,
    title: "5-Star Reviews",
    description: "Consistently rated 5 stars by our customers for quality work and excellent service."
  }
]

export default function Features() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
            Why Choose CG Painting?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-manrope">
            We're not just painters - we're craftsmen dedicated to transforming your space 
            with quality, reliability, and exceptional service.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 text-center group hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-deep-blue transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-deep-blue group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4 group-hover:text-deep-blue transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed font-manrope">{feature.description}</p>
              </div>
            )
          })}
        </div>

        {/* About Section - Two Column Layout */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-black mb-6">
                Years of On-the-Road Painting Experience
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed font-manrope">
                <p>
                  With over 10 years of experience in the painting industry, CG Painting has built 
                  a reputation for excellence throughout the region. We specialize in both residential 
                  and commercial painting projects, bringing quality craftsmanship to every job.
                </p>
                <p>
                  Our "travelling painter" approach means we come to you, providing convenient, 
                  professional service wherever you need it. From small touch-ups to complete 
                  property transformations, we handle projects of all sizes with the same attention 
                  to detail and commitment to quality.
                </p>
                <p>
                  We use only premium paints and materials, employ proper preparation techniques, 
                  and maintain the highest standards of workmanship. Your satisfaction is our 
                  priority, and we're not finished until you're completely happy with the results.
                </p>
              </div>

              <div className="mt-8">
                <a 
                  href="tel:0413847063"
                  className="bg-deep-blue hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 inline-block hover-lift"
                >
                  Get Your Free Quote Today
                </a>
              </div>
            </div>
            
            {/* Right Column - Promise Box */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-deep-blue/5 rounded-xl p-6 border border-blue-100">
                <h4 className="text-lg font-bold text-black mb-4">Our Promise to You</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-deep-blue mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-manrope">Free, detailed quotes with no hidden costs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-deep-blue mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-manrope">Clean, professional work environment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-deep-blue mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-manrope">Respect for your property and schedule</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-deep-blue mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-manrope">100% satisfaction guarantee</span>
                  </li>
                </ul>
              </div>

              {/* Experience Highlight */}
              <div className="bg-deep-blue rounded-xl p-6 text-white text-center">
                <div className="text-4xl font-bold mb-2 animate-counter">10+</div>
                <div className="font-manrope">Years of Professional Experience</div>
                <div className="text-sm opacity-90 mt-2">Serving customers across the region</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}