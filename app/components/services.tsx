
'use client'

import { Paintbrush, Home, Building, Palette, Shield, Clock, ChevronDown, ChevronUp } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const services = [
  {
    icon: Home,
    title: "Residential Painting",
    description: "Interior and exterior painting for homes, apartments, and condos with premium quality finishes.",
    features: ["Interior walls & ceilings", "Exterior siding & trim", "Kitchen & bathroom painting", "Color consultation"],
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    detailedDescription: "Transform your home with our comprehensive residential painting services. We specialize in both interior and exterior projects, using premium paints and proven techniques to deliver lasting results that enhance your property's value and curb appeal."
  },
  {
    icon: Building,
    title: "Commercial Painting",
    description: "Professional painting services for offices, retail spaces, and commercial buildings.",
    features: ["Office spaces", "Retail stores", "Warehouses", "Scheduled maintenance"],
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    detailedDescription: "Keep your business looking professional with our commercial painting services. We work around your schedule to minimize disruption while delivering high-quality results that create a positive impression on customers and employees."
  },
  {
    icon: Palette,
    title: "Color Consultation",
    description: "Expert advice on color schemes and finishes to transform your space perfectly.",
    features: ["Color matching", "Trend analysis", "Lighting considerations", "Sample testing"],
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    detailedDescription: "Make the right color choices with our professional consultation services. Our experts help you select colors that complement your space, lighting, and personal style while considering current trends and timeless appeal."
  },
  {
    icon: Paintbrush,
    title: "Specialty Finishes",
    description: "Decorative painting techniques including textures, faux finishes, and custom work.",
    features: ["Textured walls", "Faux finishes", "Accent walls", "Custom designs"],
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    detailedDescription: "Add character and uniqueness to your space with our specialty finishing techniques. From elegant faux finishes to modern textured walls, we create custom looks that reflect your personal style and make your space truly one-of-a-kind."
  },
  {
    icon: Shield,
    title: "Surface Preparation",
    description: "Thorough preparation including cleaning, sanding, priming, and repair work.",
    features: ["Wall repairs", "Surface cleaning", "Primer application", "Crack filling"],
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    detailedDescription: "Proper preparation is the foundation of any great paint job. We meticulously prepare all surfaces, repair imperfections, and apply appropriate primers to ensure your paint adheres properly and lasts for years to come."
  },
  {
    icon: Clock,
    title: "Maintenance Services",
    description: "Regular maintenance and touch-up services to keep your property looking fresh.",
    features: ["Touch-up painting", "Regular inspections", "Preventive maintenance", "Emergency repairs"],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    detailedDescription: "Protect your investment with our ongoing maintenance services. We provide regular touch-ups, inspections, and preventive care to keep your painted surfaces looking fresh and extend the life of your paint job."
  }
]

export default function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null)

  const toggleService = (index: number) => {
    setSelectedService(selectedService === index ? null : index)
  }

  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
            Our Painting Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-manrope">
            From residential homes to commercial buildings, we provide comprehensive painting solutions 
            with attention to detail and quality craftsmanship.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            const isExpanded = selectedService === index
            
            return (
              <div 
                key={index}
                className={`bg-white rounded-xl border border-gray-200 p-8 transition-all duration-500 group cursor-pointer transform ${
                  isExpanded 
                    ? 'shadow-2xl scale-105 border-deep-blue bg-gradient-to-br from-white to-blue-50' 
                    : 'hover:shadow-2xl hover:scale-105 hover-lift'
                }`}
                onClick={() => toggleService(index)}
              >
                {/* Service Image */}
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className={`object-cover transition-all duration-500 ${
                      isExpanded ? 'scale-110' : 'group-hover:scale-110'
                    }`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className={`absolute inset-0 transition-all duration-500 ${
                    isExpanded 
                      ? 'bg-deep-blue/30' 
                      : 'bg-deep-blue/20 group-hover:bg-deep-blue/10'
                  }`}></div>
                  
                  {/* Expand/Collapse Indicator */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 transition-all duration-300">
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-deep-blue" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-deep-blue" />
                    )}
                  </div>
                </div>

                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    isExpanded 
                      ? 'bg-deep-blue' 
                      : 'bg-blue-100 group-hover:bg-deep-blue'
                  }`}>
                    <IconComponent className={`w-6 h-6 transition-all duration-300 ${
                      isExpanded 
                        ? 'text-white' 
                        : 'text-deep-blue group-hover:text-white'
                    }`} />
                  </div>
                  <h3 className={`text-xl font-bold ml-4 transition-all duration-300 ${
                    isExpanded 
                      ? 'text-deep-blue' 
                      : 'text-black group-hover:text-deep-blue'
                  }`}>
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed font-manrope">
                  {service.description}
                </p>
                
                {/* Expandable Content */}
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isExpanded ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'
                }`}>
                  <div className="border-t border-gray-200 pt-4 mb-4">
                    <p className="text-gray-700 mb-4 font-manrope leading-relaxed">
                      {service.detailedDescription}
                    </p>
                    <h4 className="font-semibold text-deep-blue mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-deep-blue rounded-full mr-3 animate-pulse"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button className={`flex items-center justify-between w-full text-left font-semibold transition-all duration-200 ${
                  isExpanded 
                    ? 'text-deep-blue' 
                    : 'text-deep-blue hover:text-blue-800'
                }`}>
                  <span>{isExpanded ? 'Show Less' : 'Learn More'}</span>
                  <div className="transition-transform duration-300">
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-deep-blue to-blue-600 rounded-2xl p-8 lg:p-12 text-white animate-fade-in-up hover-lift">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Transform Your Space?
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto font-manrope opacity-90">
              Get a free, no-obligation quote for your painting project. We'll assess your needs 
              and provide a detailed estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0413847063"
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover-lift hover:shadow-lg"
              >
                Call for Quote: 0413 847 063
              </a>
              <a 
                href="#contact"
                className="border-2 border-white text-white hover:bg-white hover:text-deep-blue px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover-lift hover:shadow-lg"
              >
                Request Online Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
