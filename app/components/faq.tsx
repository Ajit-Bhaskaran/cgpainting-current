
'use client'

import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: "Do you travel to remote locations?",
    answer: "Yes! As 'The Travelling Painter,' we travel to remote locations across Queensland. From sealed roads to dirt tracks, we deliver quality painting services wherever you need us. Contact us to discuss your location and we'll let you know if we can service your area."
  },
  {
    question: "What types of properties do you paint?",
    answer: "We paint all types of properties including residential homes, commercial buildings, industrial facilities, heritage properties, and rural properties. From cozy country homes to modern city houses, we bring quality paint jobs to your doorstep no matter where you are."
  },
  {
    question: "How do you provide quotes for remote locations?",
    answer: "For remote locations, we can provide initial quotes based on photos and detailed descriptions. For accurate pricing, we prefer to visit the site, but we understand this isn't always possible. We'll work with you to provide the best possible estimate and can arrange site visits when feasible."
  },
  {
    question: "What happens if weather delays the job?",
    answer: "Weather can affect exterior painting projects. We monitor weather forecasts and will reschedule if conditions aren't suitable for quality work. We'll keep you informed of any delays and work with you to find the best alternative dates. Your satisfaction and the quality of our work are our priorities."
  },
  {
    question: "Do you handle insurance work?",
    answer: "Yes, we handle insurance work for both residential and commercial properties. We can work directly with your insurance company and provide detailed quotes and documentation. We understand the insurance process and can help ensure your claim is processed smoothly."
  },
  {
    question: "What preparation work is included?",
    answer: "Our service includes thorough preparation work such as cleaning surfaces, filling holes and cracks, sanding rough areas, applying primer where needed, and protecting surrounding areas. Proper preparation is crucial for a long-lasting finish, and we never skip this important step."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Absolutely! We are fully licensed QBCC contractors (L197221) and carry comprehensive insurance including public liability and workers' compensation. This protects both you and our team during the project. We're happy to provide proof of licensing and insurance upon request."
  },
  {
    question: "How far in advance do I need to book?",
    answer: "We recommend booking 2-4 weeks in advance, especially during peak seasons. However, we can often accommodate urgent projects or smaller jobs with shorter notice. Contact us with your timeline and we'll do our best to work with your schedule."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-manrope">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Common questions about our painting services and how we work
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-lg text-card-foreground bg-white border border-gray-200 shadow-sm">
              <div className="p-0">
                <button 
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-blue-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
