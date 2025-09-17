export default function Capabilities() {
  const capabilities = [
    {
      title: "AI Content Generation",
      description: "Create high-quality content 10x faster than traditional methods",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
      stats: "10x Faster",
      color: "bg-primary-600"
    },
    {
      title: "Design Automation",
      description: "AI-powered design solutions that maintain professional consistency",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
        </svg>
      ),
      stats: "100% Consistent",
      color: "bg-gray-700"
    },
    {
      title: "Process Optimization",
      description: "Intelligent automation that scales with your business needs",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      ),
      stats: "24/7 Automation",
      color: "bg-primary-700"
    },
    {
      title: "Quality Assurance",
      description: "Every output meets professional standards through AI quality checks",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      stats: "99% Accuracy",
      color: "bg-gray-600"
    },
    {
      title: "Rapid Delivery",
      description: "Fast turnaround times without compromising on quality",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      ),
      stats: "24-72 Hours",
      color: "bg-primary-500"
    },
    {
      title: "Scalable Solutions",
      description: "AI systems that grow and adapt with your business requirements",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15.586 13H14a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
      stats: "Infinite Scale",
      color: "bg-gray-800"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose
            <span className="text-primary-600"> AI-Powered Solutions?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the competitive advantages that artificial intelligence brings to modern business operations.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {capabilities.map((capability, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Icon & Stats */}
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${capability.color} rounded-lg flex items-center justify-center text-white`}>
                  {capability.icon}
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">{capability.stats}</div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">{capability.title}</h3>
              <p className="text-gray-600 leading-relaxed">{capability.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Experience AI-Powered Growth?</h3>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join the businesses already leveraging artificial intelligence to accelerate their growth and efficiency.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-2">Free Consultation</h4>
              <p className="text-primary-100">30-minute AI strategy session to identify opportunities in your business</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-2">Custom Solutions</h4>
              <p className="text-primary-100">Tailored AI implementations designed specifically for your industry and needs</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Get Started Today
            </a>
            <a
              href="#services"
              className="border-2 border-white/30 hover:border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}