export default function Credibility() {
  const cards = [
    {
      title: 'Real Technical Background',
      copy: 'Built on years of experience supporting live systems, troubleshooting technical issues and working directly with businesses in operational environments.',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 2a1 1 0 01.894.553l1.75 3.5 3.877.563a1 1 0 01.554 1.705l-2.806 2.734.662 3.861a1 1 0 01-1.451 1.054L10 13.827l-3.48 1.833a1 1 0 01-1.451-1.054l.662-3.861L2.925 7.821a1 1 0 01.554-1.705l3.877-.563 1.75-3.5A1 1 0 0110 2z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: 'Business-Focused Development',
      copy: 'Projects are designed around usability, workflow efficiency and practical business needs — not just visual appearance.',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h8a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: 'Modern Web & Mobile Solutions',
      copy: 'Responsive websites, dashboards and mobile-friendly applications built using modern frontend technologies and scalable development practices.',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 3a2 2 0 00-2 2v8a2 2 0 002 2h4v2H5a1 1 0 100 2h10a1 1 0 100-2h-3v-2h4a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 10H4V5h12v8z" />
          <path d="M13 7a1 1 0 100 2 1 1 0 000-2zm-6 0a1 1 0 100 2 1 1 0 000-2z" />
        </svg>
      )
    },
    {
      title: 'AI-Assisted, Human-Led',
      copy: 'Modern AI tools are used where useful to improve efficiency, while decisions, structure and quality remain human-led.',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 2a1 1 0 011 1v1.05a5.002 5.002 0 013.9 3.9H16a1 1 0 110 2h-1.1A5.002 5.002 0 0111 13.85V15a1 1 0 11-2 0v-1.15A5.002 5.002 0 015.1 9.95H4a1 1 0 110-2h1.05A5.002 5.002 0 019 4.05V3a1 1 0 011-1zm0 4a3 3 0 100 6 3 3 0 000-6z" />
        </svg>
      )
    },
    {
      title: 'Clear Communication & Support',
      copy: 'Direct communication, ongoing support and practical guidance throughout the project lifecycle.',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 5a3 3 0 013-3h10a3 3 0 013 3v7a3 3 0 01-3 3H9l-4 3v-3H5a3 3 0 01-3-3V5z" />
        </svg>
      )
    }
  ]

  return (
    <section id="credibility" className="relative overflow-hidden bg-gray-950 py-16 sm:py-20">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary-600/20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-white/5 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-300 mb-5">
            Credibility
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Businesses Work With CoreAI Studio
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            Modern development backed by real technical problem-solving experience.
          </p>
          <p className="mt-5 text-base sm:text-lg text-gray-400 leading-relaxed">
            CoreAI Studio combines modern web and mobile development with years of experience supporting business systems, solving technical problems and working in real operational environments.
            <span className="block mt-4">
              The focus is always on building practical, reliable solutions that improve usability, efficiency and long-term maintainability.
            </span>
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5 items-stretch">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/40 hover:bg-white/[0.06] hover:shadow-[0_0_0_1px_rgba(59,130,246,0.18),0_18px_40px_rgba(0,0,0,0.35)]"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary-500/20 bg-primary-500/10 text-primary-300 transition-colors group-hover:bg-primary-500/15 group-hover:text-primary-200">
                {card.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3 leading-snug">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-300 flex-1">
                {card.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}