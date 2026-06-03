export default function TrustExperience() {
  const points = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 13a1 1 0 01-1 1h-1v2a1 1 0 11-2 0v-2H6v2a1 1 0 11-2 0v-2H3a1 1 0 01-1-1V8a4 4 0 014-4h8a4 4 0 014 4v5zM8 7a1 1 0 100 2h4a1 1 0 100-2H8z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Technical Support Background',
      copy: 'Experience supporting live business systems where communication, reliability and problem-solving matter.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.172 7.707 7.879a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Systems & Deployment Experience',
      copy: 'Practical understanding of software deployment, operational workflows and business technology environments.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h8a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Business-Focused Development',
      copy: 'Websites, dashboards and automation tools built around real working processes and user needs.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 7H7v6h6V7z" />
          <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
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
            <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center mb-4">
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
