
'use client'

import Image from 'next/image'
import { Button } from './ui/button'
import { Star, Phone, MapPin } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [experienceCount, setExperienceCount] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      let count = 0
      const interval = setInterval(() => {
        count += 1
        setExperienceCount(count)
        if (count >= 10) {
          clearInterval(interval)
        }
      }, 100)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-deep-blue overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://cdn.abacus.ai/images/d333196f-ff3d-4904-a5fb-bbb1c6acd2e5.png"
          alt="Weathered to Beautiful - Professional Painting Transformation"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Give New Life to
                  <span className="block text-yellow-400 animate-fade-in-up" style={{animationDelay: '0.3s'}}>Your Old Home</span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed font-manrope animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                  Transform your space with CG Painting - The Travelling Painter. 
                  Quality workmanship, reliable service, and competitive prices across the region.
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 animate-fade-in-up" style={{animationDelay: '0.9s'}}>
                <div className="flex items-center gap-2 hover-lift">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
                    ))}
                  </div>
                  <span className="text-white font-medium text-lg">5.0 Rating</span>
                </div>
                <div className="flex items-center gap-2 hover-lift">
                  <MapPin className="w-6 h-6 text-yellow-400 animate-bounce-gentle" />
                  <span className="text-white font-medium text-lg">Local & Reliable</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{animationDelay: '1.2s'}}>
                <a href="tel:0413847063">
                  <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 text-lg font-bold w-full sm:w-auto hover-lift hover-glow transition-all duration-300">
                    <Phone className="w-5 h-5 mr-2 animate-pulse" />
                    Call Now: 0413 847 063
                  </Button>
                </a>
                <a href="#contact">
                  <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold w-full sm:w-auto hover-lift transition-all duration-300">
                    Get Free Quote
                  </Button>
                </a>
              </div>

              {/* Key Benefits with Animation */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 stagger-animation">
                <div className="text-center sm:text-left hover-lift">
                  <div className="text-4xl font-bold text-yellow-400 animate-counter">
                    {experienceCount}+
                  </div>
                  <div className="text-gray-200 font-manrope">Years of On-the-Road Painting Experience</div>
                </div>
                <div className="text-center sm:text-left hover-lift">
                  <div className="text-4xl font-bold text-yellow-400">100%</div>
                  <div className="text-gray-200 font-manrope">Satisfaction Guaranteed</div>
                </div>
                <div className="text-center sm:text-left hover-lift">
                  <div className="text-4xl font-bold text-yellow-400">Free</div>
                  <div className="text-gray-200 font-manrope">Quotes & Estimates</div>
                </div>
              </div>
            </div>

            {/* Right Content - Additional Visual Elements */}
            <div className="relative lg:block hidden animate-slide-in-right">
              <div className="relative z-10 space-y-6 stagger-animation">
                {/* Floating Cards */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover-lift hover-glow transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">Professional Results</h3>
                  <p className="text-gray-200 font-manrope">Expert craftsmanship with attention to every detail</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover-lift hover-glow ml-8 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">Quality Materials</h3>
                  <p className="text-gray-200 font-manrope">Premium paints and tools for lasting results</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover-lift hover-glow transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">Reliable Service</h3>
                  <p className="text-gray-200 font-manrope">On-time completion with full insurance coverage</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400/20 rounded-full opacity-60 animate-pulse-glow"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/10 rounded-full opacity-40 animate-pulse-glow" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center hover-lift cursor-pointer">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
