'use client'

import { useState } from 'react'

export default function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null)

  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
      title: "AI Content Creation",
      description: "Generate compelling blogs, marketing copy, social media content, and documentation with AI precision.",
      features: [
        "Blog posts & articles",
        "Marketing copy & ads",
        "Social media content",
        "Technical documentation",
        "Email campaigns",
        "SEO-optimized content"
      ],
      gradient: "from-primary-600 to-primary-700",
      detailedInfo: {
        overview: "Our AI Content Creation service leverages advanced language models to produce high-quality, engaging content that drives results. From blog posts that rank on Google to marketing copy that converts, we deliver content that sounds human while being powered by cutting-edge AI.",
        process: [
          "Content brief analysis and keyword research",
          "AI-powered content generation with your brand voice",
          "Human review and optimization for quality assurance",
          "SEO optimization and performance tracking setup"
        ],
        benefits: [
          "10x faster content production than traditional methods",
          "Consistent brand voice across all content pieces",
          "SEO-optimized content that ranks higher on search engines",
          "Cost-effective scaling of content marketing efforts",
          "Real-time content performance analytics and optimization"
        ],
        pricing: "Starting at $299/month for 20 articles or equivalent content",
        timeline: "Most content delivered within 24-48 hours",
        examples: [
          "E-commerce product descriptions (500+ completed)",
          "SaaS blog content series (50+ articles monthly)",
          "Social media campaigns (1000+ posts generated)",
          "Email marketing sequences (200+ sequences created)"
        ]
      }
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
        </svg>
      ),
      title: "AI Design Solutions",
      description: "Create stunning visuals, branding, and user interfaces powered by advanced AI design tools.",
      features: [
        "Logo & brand design",
        "Web & app interfaces",
        "Marketing materials",
        "Presentations",
        "Infographics",
        "Social media graphics"
      ],
      gradient: "from-gray-600 to-gray-700",
      detailedInfo: {
        overview: "Transform your visual identity with AI-powered design solutions. Our advanced design AI creates professional logos, stunning websites, and marketing materials that capture your brand essence and engage your audience effectively.",
        process: [
          "Brand discovery and style preference analysis",
          "AI-generated design concepts and variations",
          "Iterative refinement based on your feedback",
          "Final delivery with all file formats and brand guidelines"
        ],
        benefits: [
          "Professional designs at a fraction of traditional agency costs",
          "Unlimited revisions until you're completely satisfied",
          "Consistent brand identity across all design elements",
          "Fast turnaround times (24-72 hours for most projects)",
          "Complete ownership of all design assets and source files"
        ],
        pricing: "Logo packages from $199, complete brand identity from $799",
        timeline: "Logo designs in 24 hours, complete branding in 3-5 days",
        examples: [
          "Tech startup complete brand identity (50+ companies)",
          "E-commerce website designs (100+ stores)",
          "Marketing campaign visuals (300+ campaigns)",
          "Mobile app UI/UX designs (25+ apps launched)"
        ]
      }
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      ),
      title: "Business Automation",
      description: "Streamline operations with intelligent automation solutions that scale with your business.",
      features: [
        "Workflow automation",
        "Data processing",
        "Customer service bots",
        "Email automation",
        "Report generation",
        "Process optimization"
      ],
      gradient: "from-gray-700 to-gray-800",
      detailedInfo: {
        overview: "Eliminate repetitive tasks and supercharge your team's productivity with intelligent business automation. Our AI-powered solutions handle everything from customer inquiries to data processing, freeing your team to focus on strategic growth.",
        process: [
          "Business process audit and automation opportunity identification",
          "Custom AI automation development and integration",
          "Testing and optimization in a controlled environment",
          "Full deployment with training and ongoing support"
        ],
        benefits: [
          "90% reduction in manual processing time",
          "24/7 automated customer service capabilities",
          "Significant cost savings on operational overhead",
          "Improved accuracy and consistency in business processes",
          "Scalable solutions that grow with your business"
        ],
        pricing: "Custom automation from $1,999, chatbots from $499/month",
        timeline: "Simple automations in 1-2 weeks, complex systems in 4-8 weeks",
        examples: [
          "Customer service chatbots (50+ businesses automated)",
          "Invoice processing systems (saving 20+ hours/week)",
          "Lead qualification workflows (300% efficiency increase)",
          "Inventory management automation (99.5% accuracy rate)"
        ]
      }
    }
  ];

  const openServiceModal = (index: number) => {
    setSelectedService(index)
  }

  const closeModal = () => {
    setSelectedService(null)
  }
        "Email automation",
        "Report generation",
        "Process optimization"
      ],
      gradient: "from-gray-700 to-gray-800",
      detailedInfo: {
        overview: "Eliminate repetitive tasks and supercharge your team's productivity with intelligent business automation. Our AI-powered solutions handle everything from customer inquiries to data processing, freeing your team to focus on strategic growth.",
        process: [
          "Business process audit and automation opportunity identification",
          "Custom AI automation development and integration",
          "Testing and optimization in a controlled environment",
          "Full deployment with training and ongoing support"
        ],
        benefits: [
          "90% reduction in manual processing time",
          "24/7 automated customer service capabilities",
          "Significant cost savings on operational overhead",
          "Improved accuracy and consistency in business processes",
          "Scalable solutions that grow with your business"
        ],
        pricing: "Custom automation from $1,999, chatbots from $499/month",
        timeline: "Simple automations in 1-2 weeks, complex systems in 4-8 weeks",
        examples: [
          "Customer service chatbots (50+ businesses automated)",
          "Invoice processing systems (saving 20+ hours/week)",
          "Lead qualification workflows (300% efficiency increase)",
          "Inventory management automation (99.5% accuracy rate)"
        ]
      }
    }
  ];

  const openServiceModal = (index: number) => {
    setSelectedService(index)
  }

  const closeModal = () => {
    setSelectedService(null)
  }

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AI-Powered Services That
            <span className="text-primary-600"> Drive Results</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every service is built on cutting-edge AI technology, delivering exceptional quality 
            and speed that traditional methods simply cannot match.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* AI Content Creation Image */}
              {index === 0 && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Team collaborating on AI content creation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    Photo by fauxels
                  </div>
                </div>
              )}

              {/* AI Design Solutions Image */}
              {index === 1 && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Designer working on AI-powered digital solutions"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    Photo by Pexels
                  </div>
                </div>
              )}

              {/* Business Automation Image */}
              {index === 2 && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Business automation and AI-powered workflow systems"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    Photo by Pexels
                  </div>
                </div>
              )}

              {/* Header with Gradient */}
              <div className={`bg-gradient-to-r ${service.gradient} p-6 text-white`}>
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-white/90">{service.description}</p>
              </div>

              {/* Features List */}
              <div className="p-6">
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => openServiceModal(index)}
                  className="w-full mt-6 bg-gray-100 hover:bg-primary-600 hover:text-white text-gray-700 font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Get a free consultation and discover how AI can accelerate your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Free Consultation
              </button>
              <button className="border-2 border-gray-300 hover:border-primary-600 text-gray-700 hover:text-primary-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedService !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">
                {services[selectedService].title}
              </h2>
              <button 
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6">
              {/* Overview */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Service Overview</h3>
                <p className="text-gray-600 leading-relaxed">
                  {services[selectedService].detailedInfo.overview}
                </p>
              </div>

              {/* Process */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Process</h3>
                <div className="grid gap-4">
                  {services[selectedService].detailedInfo.process.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-gray-600">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h3>
                <ul className="grid gap-3">
                  {services[selectedService].detailedInfo.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Examples */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Success Examples</h3>
                <ul className="grid gap-3">
                  {services[selectedService].detailedInfo.examples.map((example, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing & Timeline */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-2">Pricing</h4>
                  <p className="text-gray-600">{services[selectedService].detailedInfo.pricing}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-2">Timeline</h4>
                  <p className="text-gray-600">{services[selectedService].detailedInfo.timeline}</p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 text-center">
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors mr-4">
                  Get Started Now
                </button>
                <button className="border-2 border-gray-300 hover:border-primary-600 text-gray-700 hover:text-primary-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}