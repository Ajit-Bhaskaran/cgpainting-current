
'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "How do I get a quote for my painting project?",
    answer: "Getting a quote is easy! Simply call us at 0413 847 063 or use our online contact form. We'll schedule a convenient time to assess your project and provide a detailed, no-obligation quote. All quotes are free and include a breakdown of materials and labor costs."
  },
  {
    question: "What types of paint do you use?",
    answer: "We use only premium quality paints from trusted brands like Dulux, Taubmans, and Resene. We select the appropriate paint type based on your specific needs - whether it's interior walls, exterior surfaces, or specialty finishes. All our paints are environmentally friendly and low-VOC."
  },
  {
    question: "How long does a typical painting project take?",
    answer: "Project duration depends on the size and complexity of the job. A single room typically takes 1-2 days, while a full house interior might take 5-7 days. Exterior painting can take 3-5 days depending on weather conditions. We'll provide a detailed timeline with your quote."
  },
  {
    question: "Do you provide all the materials and equipment?",
    answer: "Yes, we provide all necessary materials including paints, primers, brushes, rollers, drop cloths, and equipment. The cost of materials is included in your quote, so there are no surprise charges. We also handle all cleanup after the job is complete."
  },
  {
    question: "Are you insured and licensed?",
    answer: "Absolutely! We are fully licensed and carry comprehensive insurance including public liability and workers' compensation. This protects both you and our team during the project. We're happy to provide proof of insurance upon request."
  },
  {
    question: "What preparation work is included?",
    answer: "Our service includes thorough preparation work such as cleaning surfaces, filling holes and cracks, sanding rough areas, and applying primer where needed. Proper preparation is crucial for a long-lasting finish, and we never skip this important step."
  },
  {
    question: "Do you offer a warranty on your work?",
    answer: "Yes, we stand behind our work with a comprehensive warranty. We offer a 2-year warranty on interior painting and a 5-year warranty on exterior painting, covering any defects in workmanship. We also provide touch-up services if needed."
  },
  {
    question: "Can you work around my schedule?",
    answer: "We understand that everyone has different schedules and needs. We offer flexible scheduling including evenings and weekends when possible. For commercial projects, we can work after hours to minimize disruption to your business operations."
  },
  {
    question: "What areas do you service?",
    answer: "As 'The Travelling Painter,' we service a wide area across multiple regions. We travel to where our customers need us most. Contact us to confirm if we service your specific location - we're often willing to travel for larger projects."
  },
  {
    question: "How do I prepare my space before you arrive?",
    answer: "We'll provide you with a preparation checklist, but generally you should remove or cover furniture, take down wall decorations, and ensure clear access to work areas. Don't worry - we'll also help move furniture and provide additional protection as needed."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about our painting services and process.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 lg:p-12 border border-gray-200">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We're here to help! Contact us directly and we'll be happy to answer any 
              specific questions about your painting project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0413847063"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
              >
                Call Us: 0413 847 063
              </a>
              <a 
                href="#contact"
                className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
              >
                Send Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
