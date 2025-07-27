
'use client'

import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Melbourne, VIC",
    rating: 5,
    text: "CG Painting transformed our entire house! The attention to detail was incredible, and they completed the job on time and within budget. Highly recommend!",
    project: "Full House Interior Painting"
  },
  {
    name: "Michael Chen",
    location: "Sydney, NSW",
    rating: 5,
    text: "Professional, reliable, and excellent quality work. They painted our office space and it looks amazing. The team was respectful and clean throughout the process.",
    project: "Commercial Office Painting"
  },
  {
    name: "Emma Williams",
    location: "Brisbane, QLD",
    rating: 5,
    text: "I was impressed by their professionalism from the initial quote to project completion. The color consultation was particularly helpful. Will definitely use them again!",
    project: "Kitchen & Living Room Renovation"
  },
  {
    name: "David Thompson",
    location: "Perth, WA",
    rating: 5,
    text: "Fantastic service! They painted the exterior of our home and it looks brand new. Great communication, fair pricing, and quality workmanship.",
    project: "Exterior House Painting"
  },
  {
    name: "Lisa Rodriguez",
    location: "Adelaide, SA",
    rating: 5,
    text: "CG Painting exceeded our expectations. They were punctual, professional, and the finish quality is outstanding. Our home has never looked better!",
    project: "Interior & Exterior Touch-ups"
  },
  {
    name: "James Mitchell",
    location: "Gold Coast, QLD",
    rating: 5,
    text: "Excellent work on our retail store renovation. They worked around our business hours and delivered exceptional results. Couldn't be happier with the service.",
    project: "Retail Store Renovation"
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers who have 
            experienced the CG Painting difference.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 relative"
            >
              <Quote className="w-8 h-8 text-blue-600 mb-4 opacity-60" />
              
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600 mb-2">{testimonial.location}</div>
                <div className="text-sm text-blue-600 font-medium">{testimonial.project}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-blue-600 rounded-2xl p-8 lg:p-12 text-white text-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">10+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">5.0</div>
              <div className="text-blue-100">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Satisfaction Rate</div>
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Join Our Happy Customers?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Experience the quality and professionalism that has earned us hundreds of 5-star reviews.
            </p>
            <a 
              href="tel:0413847063"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 inline-block"
            >
              Call Now: 0413 847 063
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
