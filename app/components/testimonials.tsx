
'use client'

import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

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
    text: "Our 1920s Queenslander needed special care and attention. Cameron's experience with heritage homes really showed. He preserved the character while giving it a fresh, modern look.",
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
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-manrope">What Our Customers Say</h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real feedback from satisfied customers across Queensland
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="mb-16">
          <div className="rounded-lg text-card-foreground bg-blue-50 border border-blue-200 shadow-lg max-w-4xl mx-auto">
            <div className="p-8 lg:p-12">
              <div className="text-center space-y-6">
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-current text-yellow-500" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed italic font-medium">
                  "{testimonials[0].text}"
                </blockquote>
                <div className="space-y-4">
                  <div className="text-xl font-bold text-gray-900">{testimonials[0].name}</div>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                      <span>{testimonials[0].location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                      <span>{testimonials[0].date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                      <span>{testimonials[0].project}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 pt-6">
                  <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:text-accent-foreground h-9 rounded-full p-2 border-blue-300 text-blue-600 hover:bg-blue-100">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <div className="flex space-x-2">
                    {[...Array(6)].map((_, i) => (
                      <button key={i} className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                        i === 0 ? 'bg-blue-600' : 'bg-blue-300'
                      }`}></button>
                    ))}
                  </div>
                  <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:text-accent-foreground h-9 rounded-full p-2 border-blue-300 text-blue-600 hover:bg-blue-100">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`rounded-lg bg-card text-card-foreground cursor-pointer transition-all duration-300 hover:shadow-lg border-2 ${
                index === 0 ? 'border-blue-600 shadow-md shadow-blue-600/20' : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                    <div className="text-xs text-gray-600 flex items-center gap-1">
                      <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                      {testimonial.location} • {testimonial.date}
                    </div>
                    <div className="text-xs text-blue-600 font-medium mt-1">{testimonial.project}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
