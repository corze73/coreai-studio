export default function Credibility() {
  const cards = [
    {
      title: 'Real Technical Background',
      copy: 'Built on years of experience supporting live systems, troubleshooting technical issues and working directly with businesses in operational environments.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <rect x="4" y="4" width="16" height="16" rx="2.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 9.5H16.5M7.5 14h9" />
        </svg>
      )
    },
    {
      title: 'Business-Focused Development',
      copy: 'Projects are designed around usability, workflow efficiency and practical business needs — not just visual appearance.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h9M4 12h9M4 17h9" />
          <rect x="14" y="6" width="6" height="12" rx="1.5" />
        </svg>
      )
    },
    {
      title: 'Modern Web & Mobile Solutions',
      copy: 'Responsive websites, dashboards and mobile-friendly applications built using modern frontend technologies and scalable development practices.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <rect x="3.5" y="5" width="12.5" height="9" rx="1.8" />
          <rect x="17" y="7" width="3.5" height="10" rx="1" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 18h5" />
        </svg>
      )
    },
    {
      title: 'AI-Assisted, Human-Led',
      copy: 'Modern AI tools are used where useful to improve efficiency, while decisions, structure and quality remain human-led.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <rect x="7" y="7" width="10" height="10" rx="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2M12 19v2M3 12h2M19 12h2" />
        </svg>
      )
    },
    {
      title: 'Clear Communication & Support',
      copy: 'Direct communication, ongoing support and practical guidance throughout the project lifecycle.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 6.5A2.5 2.5 0 017.5 4h9A2.5 2.5 0 0119 6.5v7a2.5 2.5 0 01-2.5 2.5H10l-3.5 3v-3H7.5A2.5 2.5 0 015 13.5v-7z" />
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
              className="brand-card group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-sm hover:border-primary-500/40 hover:bg-white/[0.06]"
            >
              <div className="brand-icon-shell brand-icon-shell-dark mb-4">
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