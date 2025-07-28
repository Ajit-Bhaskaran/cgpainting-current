
'use client'

import Image from 'next/image'
import { Button } from './ui/button'
import { Phone } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://cdn.abacus.ai/images/d333196f-ff3d-4904-a5fb-bbb1c6acd2e5.png"
          alt="Before and After House Painting Transformation"
          fill
          className="object-cover opacity-80"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-gray-800/50 to-blue-900/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                Transform Your Property
              </h1>
              <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed">
                From sealed roads to dirt tracks, we deliver quality painting services wherever you need us across Queensland
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
