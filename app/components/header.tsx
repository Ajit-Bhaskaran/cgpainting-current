
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { Phone, Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200"
                >
                  <Phone className="w-4 h-4" />
                  CALL NOW 0413 847 063
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              className="flex items-center hover:opacity-90 transition-opacity duration-200" 
              href="/"
            >
              <Image
                src="/logo.png"
                alt="CG Painting - The Travelling Painter"
                width={180}
                height={72}
                className="h-12 sm:h-16 w-auto object-contain"
                priority
              />
              <div className="ml-3 sm:ml-4">
                <h1 className="text-lg sm:text-2xl font-bold text-blue-600">CG Painting</h1>
                <p className="text-xs sm:text-sm text-gray-600 font-medium">The Travelling Painter</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Services
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                About
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Reviews
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Contact
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors"
                aria-label="Toggle mobile menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Get Quote Button */}
            <div className="hidden sm:block">
              <Link href="/quote">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 font-semibold">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-4">
              <a 
                href="#services" 
                className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#about" 
                className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#testimonials" 
                className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Reviews
              </a>
              <a 
                href="#contact" 
                className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <div className="pt-4">
                <Link href="/quote">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 font-semibold">
                    Get Quote
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
