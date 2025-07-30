
'use client'

import { Paintbrush, Home, Building, Shield, ChevronDown, ChevronUp, Phone } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

const services = [
  {
    icon: Home,
    category: "DOMESTIC",
    title: "Domestic Painting",
    subtitle: "Quality work, no matter the location",
    description: "From cozy country homes to modern city houses, bringing quality paint jobs to your doorstep no matter where you are.",
    features: ["Interior & exterior painting", "Weatherboard restoration", "Roof painting", "Fence & deck painting", "Pressure cleaning", "Surface preparation"],
    image: "/domestic-house.jpg",
    detailedDescription: "Transform your home with our comprehensive residential painting services. We specialize in both interior and exterior projects, using premium paints and proven techniques to deliver lasting results that enhance your property's value and curb appeal."
  },
  {
    icon: Building,
    category: "COMMERCIAL",
    title: "Commercial Projects",
    subtitle: "Professional service, minimal disruption",
    description: "Professional painting services for offices, retail spaces, and commercial buildings with minimal disruption.",
    features: ["Office spaces", "Retail stores", "Warehouses", "Scheduled maintenance", "After-hours work", "Business consultation"],
    image: "/commercial-scaffolding.jpg",
    detailedDescription: "Keep your business looking professional with our commercial painting services. We work around your schedule to minimize disruption while delivering high-quality results that create a positive impression on customers and employees."
  },
  {
    icon: Shield,
    category: "INDUSTRIAL",
    title: "Industrial Coatings",
    subtitle: "Protective solutions for heavy-duty environments",
    description: "Specialized industrial painting and protective coatings for factories, warehouses, and industrial facilities.",
    features: ["Factory painting", "Warehouse coatings", "Protective finishes", "Safety compliance", "Equipment painting", "Maintenance programs"],
    image: "/industrial-spray-painting.jpg",
    detailedDescription: "Protect your industrial assets with our specialized coating services. We understand the unique requirements of industrial environments and provide durable, long-lasting solutions that meet safety and compliance standards."
  },
  {
    icon: Paintbrush,
    category: "SPECIALTY",
    title: "Specialty Services",
    subtitle: "Custom solutions for unique projects",
    description: "Custom painting solutions including heritage restoration, decorative finishes, and specialized techniques.",
    features: ["Heritage restoration", "Decorative finishes", "Texture coatings", "Color consultation", "Specialty techniques", "Custom solutions"],
    image: "/heritage-building.jpg",
    detailedDescription: "Bring your vision to life with our specialty painting services. From heritage restoration to modern decorative finishes, we have the expertise to handle unique projects that require special attention and techniques."
  }
]

export default function Services() {
  const [selectedService, setSelectedService] = useState(0)

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-manrope">Our Services</h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From sealed roads to dirt tracks, we deliver quality painting services wherever you need us
          </p>
        </div>

        {/* Service Category Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-white rounded-lg p-4 md:p-6 cursor-pointer transition-all duration-300 border-2 hover:shadow-lg ${
                selectedService === index 
                  ? 'border-blue-600 shadow-lg shadow-blue-600/20' 
                  : 'border-gray-200 hover:border-blue-300'
              }`}
              onClick={() => setSelectedService(index)}
            >
              <div className="text-center">
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 ${
                  selectedService === index ? 'bg-blue-100' : 'bg-gray-100'
                }`}>
                  <service.icon className={`w-6 h-6 md:w-8 md:h-8 ${
                    selectedService === index ? 'text-blue-600' : 'text-gray-600'
                  }`} />
                </div>
                <div className={`text-xs font-bold tracking-widest mb-1 ${
                  selectedService === index ? 'text-blue-600' : 'text-gray-500'
                }`}>
                  {service.category}
                </div>
                <h3 className={`text-sm md:text-base font-bold font-manrope ${
                  selectedService === index ? 'text-gray-900' : 'text-gray-700'
                }`}>
                  {service.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1 hidden md:block">
                  {service.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Expanded Service Details */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="order-1 lg:order-2">
              <img
                src={services[selectedService].image}
                alt={services[selectedService].title}
                className="rounded-lg shadow-xl object-cover w-full h-64 md:h-80 lg:h-96"
                onError={(e) => {
                  console.error('Image failed to load:', services[selectedService].image);
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            
            {/* Content Section */}
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  {(() => {
                    const ServiceIcon = services[selectedService].icon;
                    return <ServiceIcon className="w-6 h-6 text-blue-600" />;
                  })()}
                </div>
                <div>
                  <div className="text-xs font-bold text-blue-600 tracking-widest mb-1">
                    {services[selectedService].category}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 font-manrope">
                    {services[selectedService].title}
                  </h3>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {services[selectedService].description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Paintbrush className="w-5 h-5 text-blue-600" />
                  What We Do:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {services[selectedService].features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Link href="/quote">
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  Get Free Quote
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
