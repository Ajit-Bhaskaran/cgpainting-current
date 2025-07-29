
'use client'

import { Star, Quote, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import { useState, useEffect } from 'react'

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "Hervey Bay, QLD",
    rating: 5,
    text: "Cameron did an outstanding job painting our weatherboard home. His attention to detail and professionalism exceeded our expectations. He traveled out to our semi-rural property and completed the job on time and within budget.",
    project: "Exterior House Painting",
    date: "October 2024"
  },
  {
    name: "David Thompson",
    location: "Maryborough, QLD",
    rating: 5,
    text: "Professional service from start to finish. Cameron understood our business needs and worked around our operating hours. The quality of work was exceptional and the shopfront looks brand new.",
    project: "Commercial Shopfront",
    date: "September 2024"
  },
  {
    name: "Lisa Chen",
    location: "Bundaberg, QLD",
    rating: 5,
    text: "We needed our entire interior painted after renovations. Cameron's work was meticulous and he was very accommodating with our timeline. The results are beautiful and we couldn't be happier.",
    project: "Interior Renovation",
    date: "August 2024"
  },
  {
    name: "Robert Wilson",
    location: "Childers, QLD",
    rating: 5,
    text: "Cameron tackled our industrial painting project with expertise and efficiency. He understood the safety requirements and delivered a professional finish that meets all our compliance standards.",
    project: "Industrial Facility",
    date: "July 2024"
  },
  {
    name: "Emma Rodriguez",
    location: "Kingaroy, QLD",
    rating: 5,
    text: "Our 1920s Queenslander needed special care and attention. Cameron's experience with heritage homes really showed. He preserved the character while giving it a beautiful fresh look.",
    project: "Heritage Home Restoration",
    date: "June 2024"
  },
  {
    name: "Mark Anderson",
    location: "Gympie, QLD",
    rating: 5,
    text: "Living on a rural property, it's hard to find reliable tradespeople. Cameron traveled the distance and did exceptional work on our farm buildings. Highly recommend for rural properties.",
    project: "Rural Property",
    date: "May 2024"
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Auto-scroll functionality - 5 seconds
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      handleNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [isPaused, currentIndex])

  const handleNext = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      setIsTransitioning(false)
    }, 300)
  }

  const handlePrevious = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
      setIsTransitioning(false)
    }, 300)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex(index)
      setIsTransitioning(false)
    }, 300)
  }

  const togglePause = () => {
    setIsPaused(!isPaused)
  }

  return (
    <section id="testimonials" className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 font-manrope">What Our Customers Say</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real feedback from satisfied customers across Queensland
          </p>
        </div>

        {/* Compact Testimonial Card */}
        <div className="relative">
          <div className="bg-blue-50 rounded-xl border border-gray-200 shadow-lg overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="text-center space-y-6">
                {/* Stars */}
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current text-yellow-500" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <div className="relative min-h-[80px] md:min-h-[100px] flex items-center justify-center">
                  <blockquote 
                    className={`text-lg md:text-xl text-gray-700 leading-relaxed italic font-medium transition-all duration-300 ease-in-out ${
                      isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
                    }`}
                  >
                    "{testimonials[currentIndex].text}"
                  </blockquote>
                </div>

                {/* Customer Info */}
                <div className={`space-y-3 transition-all duration-300 ease-in-out ${
                  isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
                }`}>
                  <div className="text-xl font-bold text-gray-900">{testimonials[currentIndex].name}</div>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>{testimonials[currentIndex].location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>{testimonials[currentIndex].date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-blue-600 font-medium">{testimonials[currentIndex].project}</span>
                    </div>
                  </div>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center justify-center gap-4 pt-4">
                  {/* Previous Button */}
                  <button 
                    onClick={handlePrevious}
                    disabled={isTransitioning}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-300 text-gray-600 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  {/* Play/Pause Button */}
                  <button 
                    onClick={togglePause}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200"
                  >
                    {isPaused ? <Play className="w-4 h-4 ml-0.5" /> : <Pause className="w-4 h-4" />}
                  </button>

                  {/* Next Button */}
                  <button 
                    onClick={handleNext}
                    disabled={isTransitioning}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-300 text-gray-600 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center space-x-2 pt-4">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      disabled={isTransitioning}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                          ? 'bg-blue-600 scale-110' 
                          : 'bg-blue-300 hover:bg-blue-400'
                      } ${isTransitioning ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
