export default function Capabilities() {
  const capabilities = [
    {
      title: "Mobile-first development",
      description: "Interfaces are designed to work properly on phones, tablets and desktops.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
      stats: "Mobile",
      color: "bg-primary-600"
    },
    {
      title: "Clear communication",
      description: "Practical updates, straightforward scope and clear handover points.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
        </svg>
      ),
      stats: "Simple",
      color: "bg-gray-700"
    },
    {
      title: "Business-focused delivery",
      description: "Builds are shaped around real workflows, outcomes and operational needs.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      ),
      stats: "Practical",
      color: "bg-primary-700"
    },
    {
      title: "Support after launch",
      description: "Ongoing help is available for fixes, updates, deployment and improvements.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      stats: "Support",
      color: "bg-gray-600"
    },
    {
      title: "AI-assisted where useful",
      description: "AI tools can speed up delivery, but judgment and quality control remain human-led.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      ),
      stats: "Balanced",
      color: "bg-primary-500"
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Delivery Principles</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A freelance setup built for clear communication, practical delivery and digital work that supports how businesses actually operate.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6 mb-10 sm:mb-16">
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
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-6 sm:p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Modern Tools, Practical Delivery</h3>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            CoreAI Studio uses modern frontend frameworks, responsive design principles, cloud deployment workflows and database-backed systems to build practical digital solutions for businesses.
          </p>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            React, JavaScript, HTML/CSS, PostgreSQL, GitHub, Netlify and AI-assisted development tools.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-2">Practical Delivery</h4>
              <p className="text-primary-100">Websites, web apps and automation systems built around business goals</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-2">Support After Launch</h4>
              <p className="text-primary-100">Help with updates, fixes, deployment and ongoing improvements</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Discuss Your Project
            </a>
            <a
              href="#services"
              className="border-2 border-white/30 hover:border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}