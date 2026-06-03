import { Bot, LayoutDashboard, MessageSquare, MonitorSmartphone, Wrench } from 'lucide-react'

export default function Credibility() {
  const cards = [
    {
      title: 'Real Technical Background',
      copy: 'Built on years of experience supporting live systems, troubleshooting technical issues and working directly with businesses in operational environments.',
      icon: <Wrench className="w-5 h-5" strokeWidth={1.8} />
    },
    {
      title: 'Business-Focused Development',
      copy: 'Projects are designed around usability, workflow efficiency and practical business needs — not just visual appearance.',
      icon: <LayoutDashboard className="w-5 h-5" strokeWidth={1.8} />
    },
    {
      title: 'Modern Web & Mobile Solutions',
      copy: 'Responsive websites, dashboards and mobile-friendly applications built using modern frontend technologies and scalable development practices.',
      icon: <MonitorSmartphone className="w-5 h-5" strokeWidth={1.8} />
    },
    {
      title: 'AI-Assisted, Human-Led',
      copy: 'Modern AI tools are used where useful to improve efficiency, while decisions, structure and quality remain human-led.',
      icon: <Bot className="w-5 h-5" strokeWidth={1.8} />
    },
    {
      title: 'Clear Communication & Support',
      copy: 'Direct communication, ongoing support and practical guidance throughout the project lifecycle.',
      icon: <MessageSquare className="w-5 h-5" strokeWidth={1.8} />
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