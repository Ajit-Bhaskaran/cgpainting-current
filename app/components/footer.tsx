
'use client'

import { Phone, Mail, MapPin, Shield, Award, Truck, Clock, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white relative">
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center mb-6">
                <img
                  src="/logo.png"
                  alt="CG Painting Logo"
                  className="h-12 sm:h-16 w-auto object-contain mr-3 sm:mr-4"
                  onError={(e) => {
                    console.error('Footer logo image failed to load');
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div>
                  <h3 className="text-2xl font-bold text-white">CG Painting</h3>
                  <p className="text-gray-400 font-medium">The Travelling Painter</p>
                </div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <p className="text-gray-300 leading-relaxed italic">
                  "From Town to Town from a sealed road to a Dirt Track<br/>
                  From a 7Eleven on every road to the Outback"
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-gray-300">
                  <Shield className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Award className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">20+ Years Experience</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Truck className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">We Travel To You</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white">Our Services</h4>
              <div className="space-y-4">
                <a href="#domestic-painting" className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors">
                  <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                  <span>Domestic Painting</span>
                </a>
                <a href="#commercial-projects" className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors">
                  <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                  <span>Commercial Projects</span>
                </a>
                <div className="flex items-center gap-3 text-gray-400">
                  <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                  <span>Industrial Coatings</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                  <span>Specialty Services</span>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-700">
                <Link href="/quote">
                  <button className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 font-semibold rounded-lg transition-all duration-200">
                    Get Free Quote
                  </button>
                </Link>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white">Contact Us</h4>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-semibold">Phone</span>
                  </div>
                  <a href="tel:0413847063" className="text-blue-400 hover:text-blue-300 transition-colors font-bold block pl-7">
                    0413 847 063
                  </a>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-semibold">Email</span>
                  </div>
                  <a href="mailto:info@cgpainting.com.au" className="text-blue-400 hover:text-blue-300 transition-colors block pl-7 break-all">
                    info@cgpainting.com.au
                  </a>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-semibold">Service Areas</span>
                  </div>
                  <div className="pl-7">
                    <p className="text-gray-400 text-sm">All Areas - We Travel To You</p>
                    <p className="text-gray-500 text-xs">Based around Hervey Bay</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white">Why Choose Us</h4>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3 text-gray-300">
                  <Clock className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Reliable Service</p>
                    <p className="text-gray-400">On-time arrival and honest quotes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-gray-300">
                  <Star className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Quality Guarantee</p>
                    <p className="text-gray-400">100% satisfaction guaranteed</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-gray-300">
                  <Shield className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Fully Insured</p>
                    <p className="text-gray-400">QBCC L197221</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-red-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white">
              <div className="flex items-center gap-4 text-sm">
                <span className="font-semibold">© 2024 Cameron Geise - CG Painting</span>
                <span className="text-red-200">•</span>
                <span className="text-red-200">ABN 54272142307</span>
              </div>
              <div className="text-center text-sm">
                <span className="font-semibold">Professional Painter & Decorator</span>
                <span className="text-red-200 mx-2">•</span>
                <span className="text-red-200">Licensed • Experienced • Reliable</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
