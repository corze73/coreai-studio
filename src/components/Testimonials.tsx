export default function Capabilities() {
  const capabilities = [
    {
      title: "Mobile-first development",
      description: "Interfaces are designed to work properly on phones, tablets and desktops.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <rect x="4" y="5" width="12" height="9" rx="1.8" />
          <rect x="17" y="7" width="3" height="10" rx="0.8" />
        </svg>
      ),
      stats: "Mobile",
      color: "bg-primary-600"
    },
    {
      title: "Clear communication",
      description: "Practical updates, straightforward scope and clear handover points.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 6.5A2.5 2.5 0 017.5 4h9A2.5 2.5 0 0119 6.5v7a2.5 2.5 0 01-2.5 2.5H10l-3.5 3v-3H7.5A2.5 2.5 0 015 13.5v-7z" />
        </svg>
      ),
      stats: "Simple",
      color: "bg-gray-700"
    },
    {
      title: "Business-focused delivery",
      description: "Builds are shaped around real workflows, outcomes and operational needs.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h9M4 12h9M4 17h9" />
          <rect x="14" y="6" width="6" height="12" rx="1.5" />
        </svg>
      ),
      stats: "Practical",
      color: "bg-primary-700"
    },
    {
      title: "Support after launch",
      description: "Ongoing help is available for fixes, updates, deployment and improvements.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 12.5l3 3 7-7" />
          <circle cx="12" cy="12" r="8" />
        </svg>
      ),
      stats: "Support",
      color: "bg-gray-600"
    },
    {
      title: "AI-assisted where useful",
      description: "AI tools can speed up delivery, but judgment and quality control remain human-led.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <rect x="7" y="7" width="10" height="10" rx="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2M12 19v2M3 12h2M19 12h2" />
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
              className="brand-card bg-gray-50 rounded-2xl p-6 border border-gray-200/70"
            >
              {/* Icon & Stats */}
              <div className="flex items-center justify-between mb-4">
                <div className="brand-icon-shell">
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
            CoreAI Studio uses modern frontend frameworks, responsive design principles, cloud deployment workflows and database-backed systems to build practical digital solutions.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {['React', 'JavaScript', 'HTML/CSS', 'PostgreSQL', 'GitHub', 'Netlify', 'AI-assisted development tools'].map((tech) => (
              <span key={tech} className="bg-white/15 border border-white/25 px-3 py-1.5 rounded-full text-sm text-white/95">
                {tech}
              </span>
            ))}
          </div>
          
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
              className="brand-btn brand-btn-secondary bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold inline-flex items-center justify-center"
            >
              Discuss Your Project
            </a>
            <a
              href="#services"
              className="brand-btn border-2 border-white/30 hover:border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold inline-flex items-center justify-center"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}