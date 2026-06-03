export default function TrustExperience() {
  const points = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 9.5h15M8 6.5h8M6.5 17.5h11" />
          <rect x="4" y="4" width="16" height="16" rx="2.5" />
        </svg>
      ),
      title: 'Technical Support Background',
      copy: 'Experience supporting live business systems where communication, reliability and problem-solving matter.'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 7h12M6 12h8M6 17h5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l2 2 3-3" />
        </svg>
      ),
      title: 'Systems & Deployment Experience',
      copy: 'Practical understanding of software deployment, operational workflows and business technology environments.'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 7.5h7M3.5 12h7M3.5 16.5h7" />
          <rect x="12" y="6" width="8.5" height="12" rx="1.8" />
        </svg>
      ),
      title: 'Business-Focused Development',
      copy: 'Websites, dashboards and automation tools built around real working processes and user needs.'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <rect x="7" y="7" width="10" height="10" rx="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2M12 19v2M3 12h2M19 12h2M5.5 5.5l1.4 1.4M17.1 17.1l1.4 1.4M18.5 5.5l-1.4 1.4M6.9 17.1l-1.4 1.4" />
        </svg>
      ),
      title: 'AI-Assisted, Human-Led',
      copy: 'AI tools are used where useful to improve efficiency, while decisions, structure and quality remain human-led.'
    }
  ]

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Built on
            <span className="text-primary-600"> Real Technical Experience</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            CoreAI Studio combines modern development tools with years of real-world technical problem solving, systems support and business-focused delivery.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {points.map((point, index) => (
            <div key={index} className="brand-card bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div className="brand-icon-shell mb-4">
                {point.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">{point.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{point.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
