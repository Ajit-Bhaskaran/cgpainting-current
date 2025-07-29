'use client'

import { Shield, Award, MapPin, Clock, Truck, Star } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed QBCC contractor with comprehensive insurance coverage for your peace of mind.",
    detail: "QBCC L197221"
  },
  {
    icon: Award,
    title: "20+ Years Experience",
    description: "Two decades of professional painting experience across domestic, commercial, and industrial projects.",
    detail: "1000+ Projects"
  },
  {
    icon: MapPin,
    title: "We Travel To You",
    description: "From city homes to remote properties, we bring our professional service wherever you need us.",
    detail: "All Areas in and Around Hervey Bay"
  },
  {
    icon: Clock,
    title: "Reliable Service",
    description: "On-time arrival, honest quotes, and quality workmanship you can count on every time.",
    detail: "98% On Time"
  },
  {
    icon: Truck,
    title: "Full Equipment",
    description: "Professional equipment and quality materials travel with us to ensure the best results.",
    detail: "Premium Materials"
  },
  {
    icon: Star,
    title: "Quality Guarantee",
    description: "We stand behind our work with a satisfaction guarantee and post-job follow-up.",
    detail: "5-Star Service"
  }
]

export default function Features() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-manrope">Why Choose CG Painting</h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional painting services with the experience and reliability you can trust
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            
            return (
              <div 
                key={index}
                className="rounded-lg text-card-foreground bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 card-hover"
              >
                <div className="p-8">
                  <div className="text-center space-y-6">
                    <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center ${
                      index === 0 ? 'bg-blue-100' : 
                      index === 1 ? 'bg-green-100' : 
                      index === 2 ? 'bg-purple-100' : 
                      index === 3 ? 'bg-orange-100' : 
                      index === 4 ? 'bg-red-100' : 'bg-yellow-100'
                    }`}>
                      <IconComponent className={`w-8 h-8 ${
                        index === 0 ? 'text-blue-600' : 
                        index === 1 ? 'text-green-600' : 
                        index === 2 ? 'text-purple-600' : 
                        index === 3 ? 'text-orange-600' : 
                        index === 4 ? 'text-red-600' : 'text-yellow-600'
                      }`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 font-manrope">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    <div className={`inline-flex items-center rounded-full border text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80 font-bold px-4 py-2 ${
                      index === 0 ? 'bg-blue-100 text-blue-800 border-blue-200' : 
                      index === 1 ? 'bg-green-100 text-green-800 border-green-200' : 
                      index === 2 ? 'bg-purple-100 text-purple-800 border-purple-200' : 
                      index === 3 ? 'bg-orange-100 text-orange-800 border-orange-200' : 
                      index === 4 ? 'bg-red-100 text-red-800 border-red-200' : 'bg-yellow-100 text-yellow-800 border-yellow-200'
                    }`}>
                      {feature.detail}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}