'use client';

import { useState } from 'react';
import AIConsultation from './AIConsultation';

export default function Services() {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [showConsultation, setShowConsultation] = useState(false);
  const [consultationService, setConsultationService] = useState<string | null>(null);

  const scrollToPricing = () => {
    // Scroll to the first expanded service or just to services section
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    // Expand all services to show pricing
    setExpandedService(0);
  };

  const startConsultation = (serviceType: string) => {
    setConsultationService(serviceType);
    setShowConsultation(true);
  };

  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
      title: "AI Content Creation",
      description: "Professional blog posts and content creation starting with our popular Starter Blog Pack.",
      features: [
        "SEO-optimized blog posts",
        "Social media content",
        "Marketing copy",
        "Email newsletters",
        "Product descriptions",
        "Fast 48-hour delivery"
      ],
      gradient: "from-primary-600 to-primary-700",
      detailedInfo: {
        overview: "Our AI Content Creation service leverages advanced language models to produce high-quality, engaging content at scale. From blog posts to marketing campaigns, we help businesses maintain consistent, professional communication across all channels.",
        process: [
          "Content strategy consultation and goal setting",
          "AI model training on your brand voice and style",
          "Automated content generation with human oversight",
          "Quality assurance and optimization",
          "Performance tracking and iteration"
        ],
        benefits: [
          "10x faster content production than traditional methods",
          "Consistent brand voice across all content",
          "SEO optimization built into every piece",
          "24/7 content generation capability",
          "Significant cost reduction vs. hiring full-time writers"
        ],
        pricing: {
          starter: "£75.00 - Starter Blog Pack (5-10 pieces)",
          professional: "£150.00 - Professional Blog Bundle (15-20 pieces)",
          enterprise: "Custom pricing for ongoing content needs"
        },
        deliveryTime: "Starter Blog Pack delivered within 48 hours, larger packages within 3-5 days"
      }
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
        </svg>
      ),
      title: "AI Design Solutions",
      description: "Complete branding packages starting with our Logo & Social Kit for instant brand recognition.",
      features: [
        "Professional logo design",
        "Social media graphics",
        "Brand color schemes",
        "Business card designs",
        "Letterhead templates",
        "Brand style guides"
      ],
      gradient: "from-gray-600 to-gray-700",
      detailedInfo: {
        overview: "Transform your visual identity with AI-powered design solutions. Our service combines cutting-edge AI design tools with human creative direction to deliver professional-grade visuals that elevate your brand and engage your audience.",
        process: [
          "Brand analysis and visual requirements gathering",
          "AI-generated design concepts and variations",
          "Collaborative refinement and customization",
          "Final design delivery in all required formats",
          "Brand guidelines and asset library creation"
        ],
        benefits: [
          "Professional design quality at a fraction of traditional costs",
          "Rapid iteration and concept exploration",
          "Consistent brand application across all materials",
          "Scalable design production for growing businesses",
          "Access to latest design trends and techniques"
        ],
        pricing: {
          starter: "£95.00 - Logo & Social Kit (logo + 5 social graphics)",
          professional: "£195.00 - Complete Brand Package (logo + 15 assets)",
          enterprise: "Custom pricing for comprehensive brand systems"
        },
        deliveryTime: "Logo & Social Kit delivered within 24-48 hours, complete packages within 5 days"
      }
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      ),
      title: "Business Automation",
      description: "Streamline your workflows with our Mini Automation packages for immediate efficiency gains.",
      features: [
        "Email automation",
        "Social media scheduling",
        "Lead generation systems",
        "Customer follow-ups",
        "Report generation",
        "Task management"
      ],
      gradient: "from-gray-700 to-gray-800",
      detailedInfo: {
        overview: "Revolutionize your business operations with intelligent automation. Our solutions integrate seamlessly with your existing systems to eliminate repetitive tasks, reduce errors, and free up your team to focus on high-value strategic work.",
        process: [
          "Comprehensive workflow analysis and optimization opportunities",
          "Custom automation strategy development",
          "AI system integration and deployment",
          "Staff training and change management support",
          "Ongoing monitoring and optimization"
        ],
        benefits: [
          "Up to 80% reduction in manual processing time",
          "Significant decrease in human errors and inconsistencies",
          "24/7 automated operations capability",
          "Improved customer response times and satisfaction",
          "Detailed analytics and performance insights"
        ],
        pricing: {
          starter: "£125.00 - Mini Automation (1-2 simple workflows)",
          professional: "£275.00 - Business Automation Suite (3-5 workflows)",
          enterprise: "Custom pricing for enterprise-wide automation"
        },
        deliveryTime: "Mini Automation setup within 3-5 days, larger automations within 1-2 weeks"
      }
    }
  ];

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
                  onClick={() => setExpandedService(expandedService === index ? null : index)}
                  className="w-full mt-6 bg-gray-100 hover:bg-primary-600 hover:text-white text-gray-700 font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                >
                  {expandedService === index ? 'Show Less' : 'Learn More'}
                </button>
              </div>

              {/* Expanded Details */}
              {expandedService === index && (
                <div className="border-t bg-gray-50 p-6 animate-fadeIn">
                  <div className="space-y-6">
                    {/* Overview */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Overview</h4>
                      <p className="text-gray-600 leading-relaxed">{service.detailedInfo.overview}</p>
                    </div>

                    {/* Process */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Our Process</h4>
                      <ol className="space-y-2">
                        {service.detailedInfo.process.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start">
                            <span className="flex-shrink-0 w-6 h-6 bg-primary-600 text-white text-sm rounded-full flex items-center justify-center mr-3 mt-0.5">
                              {stepIndex + 1}
                            </span>
                            <span className="text-gray-600">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Benefits</h4>
                      <ul className="space-y-2">
                        {service.detailedInfo.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start">
                            <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Pricing Options</h4>
                      <div className="bg-white rounded-lg p-4 space-y-2">
                        <div className="flex justify-between items-center py-2 border-b border-gray-200">
                          <span className="font-medium text-gray-700">Starter</span>
                          <span className="text-primary-600 font-semibold">{service.detailedInfo.pricing.starter}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-gray-200">
                          <span className="font-medium text-gray-700">Professional</span>
                          <span className="text-primary-600 font-semibold">{service.detailedInfo.pricing.professional}</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <span className="font-medium text-gray-700">Enterprise</span>
                          <span className="text-primary-600 font-semibold">{service.detailedInfo.pricing.enterprise}</span>
                        </div>
                      </div>
                    </div>

                    {/* Delivery Time */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Delivery Timeline</h4>
                      <p className="text-gray-600 bg-white rounded-lg p-3 border border-gray-200">
                        <span className="font-medium">⏱️ {service.detailedInfo.deliveryTime}</span>
                      </p>
                    </div>

                    {/* CTA */}
                    <div className="pt-4 border-t">
                      <div className="flex flex-col sm:flex-row gap-3">
                        <button 
                          onClick={() => {
                            const serviceType = index === 0 ? 'content' : index === 1 ? 'design' : 'automation';
                            startConsultation(serviceType);
                          }}
                          className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                        >
                          Get AI Consultation
                        </button>
                        <button 
                          onClick={() => setExpandedService(expandedService === index ? null : index)}
                          className="flex-1 border-2 border-gray-300 hover:border-primary-600 text-gray-700 hover:text-primary-600 py-3 px-6 rounded-lg font-semibold transition-colors"
                        >
                          View Pricing Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
              <button 
                onClick={() => startConsultation('content')} // Default to content, but could be dynamic
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Free AI Consultation
              </button>
              <button 
                onClick={scrollToPricing}
                className="border-2 border-gray-300 hover:border-primary-600 text-gray-700 hover:text-primary-600 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* AI Consultation Modal */}
      <AIConsultation 
        isOpen={showConsultation}
        onClose={() => setShowConsultation(false)}
        serviceType={consultationService}
      />
    </section>
  )
}