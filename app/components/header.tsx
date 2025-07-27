
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from './ui/button'
import { Phone, Menu, X } from 'lucide-react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    // If we're on the quote page, navigate to home first
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    // If we're on the home page, scroll to the section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto">
        {/* Top Bar */}
        <div className="border-b border-gray-100">
          <div className="px-4 sm:px-6 lg:px-8 py-2">
            <div className="flex items-center justify-end">
              <div className="flex items-center">
                <a 
                  href="tel:0413847063" 
                  className="flex items-center gap-2 bg-deep-blue hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover-lift"
                >
                  <Phone className="w-4 h-4" />
                  CALL NOW 0413 847 063
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center hover:opacity-90 transition-all duration-200 hover-lift">
              <div className="w-12 h-12 bg-deep-blue rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-blue-800">
                <span className="text-white font-bold text-xl">CG</span>
              </div>
              <div className="ml-3 sm:ml-4">
                <h1 className="text-lg sm:text-2xl font-bold text-deep-blue">CG Painting</h1>
                <p className="text-xs sm:text-sm text-gray-600 font-medium font-manrope">The Travelling Painter</p>
              </div>
            </Link>

            {/* Navigation - Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-black hover:text-deep-blue font-medium transition-all duration-200 hover-lift relative group"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-deep-blue transition-all duration-200 group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-black hover:text-deep-blue font-medium transition-all duration-200 hover-lift relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-deep-blue transition-all duration-200 group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-black hover:text-deep-blue font-medium transition-all duration-200 hover-lift relative group"
              >
                Reviews
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-deep-blue transition-all duration-200 group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-black hover:text-deep-blue font-medium transition-all duration-200 hover-lift relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-deep-blue transition-all duration-200 group-hover:w-full"></span>
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-gray-600 hover:text-deep-blue hover:bg-gray-100 transition-all duration-200 hover-lift"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>

            {/* Get Quote Button - Desktop */}
            <div className="hidden sm:block">
              <Link href="/quote">
                <Button className="bg-deep-blue hover:bg-blue-800 text-white px-6 py-2 font-semibold transition-all duration-200 hover-lift hover:shadow-lg">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm animate-fade-in-up">
            <div className="px-4 py-4 space-y-4">
              <nav className="flex flex-col space-y-4">
                <button 
                  onClick={() => {
                    scrollToSection('services');
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-left text-black hover:text-deep-blue font-medium transition-all duration-200 py-2 px-2 rounded-lg hover:bg-gray-100 hover-lift"
                >
                  Services
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('about');
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-left text-black hover:text-deep-blue font-medium transition-all duration-200 py-2 px-2 rounded-lg hover:bg-gray-100 hover-lift"
                >
                  About
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('testimonials');
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-left text-black hover:text-deep-blue font-medium transition-all duration-200 py-2 px-2 rounded-lg hover:bg-gray-100 hover-lift"
                >
                  Reviews
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('contact');
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-left text-black hover:text-deep-blue font-medium transition-all duration-200 py-2 px-2 rounded-lg hover:bg-gray-100 hover-lift"
                >
                  Contact
                </button>
              </nav>
              
              {/* Mobile Get Quote Button */}
              <div className="pt-4 border-t border-gray-200">
                <Link href="/quote" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-deep-blue hover:bg-blue-800 text-white px-6 py-3 font-semibold transition-all duration-200 hover-lift">
                    Get Free Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
