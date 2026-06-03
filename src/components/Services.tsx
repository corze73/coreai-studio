'use client';

import { useState } from 'react';

export default function Services() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const services = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h10" />
        </svg>
      ),
      title: "Website Development",
      description: "Responsive business websites, landing pages and frontend experiences designed to look professional and perform well across all devices.",
      features: [
        "Business websites",
        "Landing pages",
        "Responsive design",
        "SEO-friendly structure",
        "Contact forms",
        "Deployment support"
      ],
      gradient: "from-primary-600 to-primary-700",
      detailedInfo: {
        overview: "Website projects are scoped around the business goals first, then designed and built to support clarity, speed and conversion. The result is a practical website that presents the business professionally and works properly across devices.",
        process: [
          "Understand the business, audience and website goals",
          "Plan the structure, content and page flow",
          "Design and build the website for desktop and mobile",
          "Review copy, forms and technical details",
          "Deploy and support the launch"
        ],
        benefits: [
          "Built around business objectives",
          "Responsive across mobile and desktop",
          "Clean structure that supports SEO",
          "Simple forms and clear calls to action",
          "Easy to maintain after launch"
        ],
        pricing: {
          starter: "Starter Website Projects - quoted after consultation",
          professional: "Business website refreshes - quoted after consultation",
          enterprise: "Custom website builds - quoted after consultation"
        },
        deliveryTime: "Timeline depends on scope and content readiness"
      }
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 6.75A2.75 2.75 0 015.75 4h12.5A2.75 2.75 0 0121 6.75v7.5A2.75 2.75 0 0118.25 17H5.75A2.75 2.75 0 013 14.25v-7.5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 10.5h8M8 14h5" />
        </svg>
      ),
      title: "Web & Mobile App Development",
      description: "Modern web applications, dashboards, booking systems and mobile-friendly platforms built using scalable technologies.",
      features: [
        "React web apps",
        "Mobile-friendly PWAs",
        "Booking systems",
        "User dashboards",
        "Admin areas",
        "API integration"
      ],
      gradient: "from-gray-600 to-gray-700",
      detailedInfo: {
        overview: "This service covers functional web applications, internal dashboards and mobile-friendly systems that help businesses run more efficiently. The focus is on usability, maintainability and a clean user experience.",
        process: [
          "Define the workflow, roles and key screens",
          "Map the user journey and technical requirements",
          "Build the interface and application logic",
          "Test on mobile, tablet and desktop",
          "Deploy and iterate with feedback"
        ],
        benefits: [
          "Built for real business workflows",
          "Clear dashboards and admin views",
          "Mobile-friendly by default",
          "Scales with the business",
          "Suitable for customer-facing or internal tools"
        ],
        pricing: {
          starter: "Web App / Dashboard Projects - quoted after consultation",
          professional: "Feature-based builds - quoted after consultation",
          enterprise: "Ongoing product development - quoted after consultation"
        },
        deliveryTime: "Scoped by features, integrations and testing requirements"
      }
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h7m-7 5h7m-7 5h7" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5h6v14h-6z" />
        </svg>
      ),
      title: "Business Automation",
      description: "Workflow systems, admin tools and automation solutions designed to improve efficiency and simplify business processes.",
      features: [
        "Workflow automation",
        "Form-to-email systems",
        "Customer follow-ups",
        "Internal tools",
        "AI-assisted productivity tools",
        "Lightweight integrations"
      ],
      gradient: "from-gray-700 to-gray-800",
      detailedInfo: {
        overview: "Automation projects are designed to reduce repetitive manual tasks and improve consistency across business operations. The emphasis is on practical systems that fit the way your team already works.",
        process: [
          "Review the current process and identify bottlenecks",
          "Design the automation flow and hand-off points",
          "Build the workflow and connect required tools",
          "Test edge cases and failure points",
          "Launch with support and refinement"
        ],
        benefits: [
          "Less repetitive admin work",
          "More consistent follow-up and communication",
          "Better internal visibility",
          "Reduced manual errors",
          "AI used only where it adds value"
        ],
        pricing: {
          starter: "Automation Projects - quoted after consultation",
          professional: "Multi-step workflow builds - quoted after consultation",
          enterprise: "System integrations and support - quoted after consultation"
        },
        deliveryTime: "Depends on the number of systems and approval steps involved"
      }
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.5h9m-9 4h6" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6.8A2.8 2.8 0 016.8 4h10.4A2.8 2.8 0 0120 6.8v6.4a2.8 2.8 0 01-2.8 2.8H11l-3.8 3v-3H6.8A2.8 2.8 0 014 13.2V6.8z" />
        </svg>
      ),
      title: "Technical Support & Improvements",
      description: "Ongoing support, UI improvements, troubleshooting and technical enhancements for existing systems and websites.",
      features: [
        "Issue troubleshooting",
        "UI and UX refinements",
        "Performance improvements",
        "Deployment assistance",
        "Technical updates",
        "Ongoing support"
      ],
      gradient: "from-gray-500 to-gray-700",
      detailedInfo: {
        overview: "This service is for businesses that already have a website or app and need dependable technical help to keep things running smoothly and improving over time.",
        process: [
          "Review current setup and identify issues",
          "Prioritise fixes and practical improvements",
          "Implement changes in controlled updates",
          "Test across devices and core user flows",
          "Continue support where needed"
        ],
        benefits: [
          "Faster issue resolution",
          "Clearer user experience",
          "Improved reliability",
          "Reduced technical friction",
          "Ongoing improvement plan"
        ],
        pricing: {
          starter: "Support retainers - quoted after consultation",
          professional: "Improvement sprints - quoted after consultation",
          enterprise: "Long-term technical support - quoted after consultation"
        },
        deliveryTime: "Based on issue complexity and update scope"
      }
    }
  ];

  return (
    <section id="services" className="py-14 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Services Built For
            <span className="text-primary-600"> Practical Business Needs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            CoreAI Studio focuses on clear, useful digital work that helps businesses look professional, work efficiently and grow with confidence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-8 items-stretch">
          {services.map((service, index) => (
            <div 
              key={index}
              className="brand-card bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full border border-gray-200/80"
            >
              {index === 0 && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Business website planning"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {index === 1 && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Web and mobile app development"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {index === 2 && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80"
                    alt="Business automation dashboards and workflow operations"
                    className="w-full h-full object-cover brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent"></div>
                </div>
              )}

              {index === 3 && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80"
                    alt="Technical troubleshooting and support workstation"
                    className="w-full h-full object-cover brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/25 via-transparent to-transparent"></div>
                </div>
              )}

              <div className={`bg-gradient-to-r ${service.gradient} p-6 text-white`}>
                <div className="brand-icon-shell brand-icon-shell-dark mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-white/90 leading-relaxed">{service.description}</p>
              </div>

              <div className="p-6 flex-1 flex flex-col">
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
                  className="brand-btn brand-btn-secondary w-full mt-6 bg-gray-100 hover:bg-primary-600 hover:text-white text-gray-700 font-semibold py-3 px-6 rounded-lg"
                >
                  {expandedService === index ? 'Show Less' : 'Learn More'}
                </button>
              </div>

              {expandedService === index && (
                <div className="border-t bg-gray-50 p-6 animate-fadeIn">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Overview</h4>
                      <p className="text-gray-600 leading-relaxed">{service.detailedInfo.overview}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">How It Works</h4>
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

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Delivery Timeline</h4>
                      <p className="text-gray-600 bg-white rounded-lg p-3 border border-gray-200">
                        <span className="font-medium">{service.detailedInfo.deliveryTime}</span>
                      </p>
                    </div>

                    <div className="pt-4 border-t">
                      <div className="flex flex-col sm:flex-row gap-3">
                        <a
                          href="#contact"
                          className="brand-btn brand-btn-primary flex-1 bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg font-semibold text-center"
                        >
                          Discuss Your Project
                        </a>
                        <button 
                          onClick={() => setExpandedService(expandedService === index ? null : index)}
                          className="brand-btn brand-btn-secondary flex-1 border-2 border-gray-300 hover:border-primary-600 text-gray-700 hover:text-primary-600 py-3 px-6 rounded-lg font-semibold"
                        >
                          Close Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-9 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a website, app or automation project scoped properly?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Share what you need and I&apos;ll suggest the most practical approach for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="brand-btn brand-btn-primary bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold">
                Discuss Your Project
              </a>
              <a href="#portfolio" className="brand-btn brand-btn-secondary border-2 border-gray-300 hover:border-primary-600 text-gray-700 hover:text-primary-600 px-8 py-3 rounded-lg font-semibold">
                View Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}