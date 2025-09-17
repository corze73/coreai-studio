'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "How does AI-powered content creation work?",
      answer: "Our AI systems analyze your brand voice, target audience, and objectives to generate high-quality content that aligns perfectly with your goals. We use advanced language models combined with industry-specific training to ensure accuracy and relevance."
    },
    {
      question: "What makes CoreAi-Studio different from traditional agencies?",
      answer: "We leverage cutting-edge AI technology to deliver results 10x faster than traditional methods. Our entire workflow is AI-powered, from initial concept to final delivery, ensuring consistency, speed, and cost-effectiveness that traditional agencies cannot match."
    },
    {
      question: "How quickly can you deliver projects?",
      answer: "Most projects are completed within 24-72 hours, depending on scope. Simple content creation can be delivered same-day, while complex automation projects typically take 3-5 business days. Our AI-powered workflow eliminates traditional bottlenecks."
    },
    {
      question: "Do you offer revisions and customization?",
      answer: "Absolutely! While our AI generates high-quality initial outputs, we offer unlimited revisions within the project scope. Our AI can quickly adapt to feedback and generate multiple variations to ensure your complete satisfaction."
    },
    {
      question: "What industries do you work with?",
      answer: "Our AI solutions work across all industries including technology, healthcare, finance, e-commerce, manufacturing, and professional services. We customize our AI models and approaches based on industry-specific requirements and regulations."
    },
    {
      question: "How do you ensure quality and accuracy?",
      answer: "Every AI output goes through our multi-layer quality assurance process including automated checks, human review, and client feedback integration. We maintain a 99%+ accuracy rate and provide detailed quality reports for all deliverables."
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Yes! Our AI solutions are designed to integrate seamlessly with popular platforms including CRM systems, content management platforms, marketing automation tools, and custom APIs. We provide full integration support."
    },
    {
      question: "What are your pricing models?",
      answer: "We offer flexible pricing including project-based rates, monthly retainers, and custom enterprise packages. All pricing is transparent with no hidden fees. Contact us for a personalized quote based on your specific needs."
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
            Get answers to common questions about our AI-powered services and how we can help transform your business.
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
              Our AI experts are here to help you understand how our solutions can benefit your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Schedule a Call
              </button>
              <button className="border-2 border-gray-300 hover:border-primary-600 text-gray-700 hover:text-primary-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Email Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}