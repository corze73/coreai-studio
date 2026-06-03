'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What types of projects do you take on?",
      answer: "I work on business websites, web apps, dashboards, booking systems, automations and technical improvements for existing products."
    },
    {
      question: "What makes CoreAI Studio different from an agency?",
      answer: "You work directly with a freelance developer who handles the project end to end with a practical, business-focused approach."
    },
    {
      question: "How do you approach pricing?",
      answer: "Projects are quoted after a short consultation so the scope, features and support requirements can be priced properly."
    },
    {
      question: "Do you work on mobile-friendly experiences?",
      answer: "Yes. Mobile responsiveness is standard on all website, app and dashboard work."
    },
    {
      question: "Can you improve an existing website or system?",
      answer: "Yes. I can fix issues, improve UI, tidy the structure, help with deployment and add features to existing builds."
    },
    {
      question: "Do you use AI in your work?",
      answer: "Yes, where it adds value. I use AI-assisted tools to speed up research, planning and development, but the project is still designed and checked by a developer."
    },
    {
      question: "What support do you offer after launch?",
      answer: "I can help with updates, fixes, minor improvements, hosting/deployment support and ongoing technical maintenance."
    },
    {
      question: "What information should I send to get started?",
      answer: "A short summary of the project, the main goal, any examples you like, and the platform or tools you already use is enough to start."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked
            <span className="text-primary-600"> Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Answers to the most common questions about working with CoreAI Studio.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Send a message if you want to discuss your project before starting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
                Discuss Your Project
              </a>
              <a href="mailto:hello@coreai-studio.com" className="border-2 border-gray-300 hover:border-primary-600 text-gray-700 hover:text-primary-600 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}