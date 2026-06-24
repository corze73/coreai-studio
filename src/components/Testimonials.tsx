import { Bot, BriefcaseBusiness, LifeBuoy, MessageSquare, MonitorSmartphone } from 'lucide-react'

export default function Capabilities() {
  const capabilities = [
    {
      title: "Mobile-first development",
      description: "Interfaces are designed to work properly on phones, tablets and desktops.",
      icon: <MonitorSmartphone className="w-5 h-5" strokeWidth={1.8} />,
      stats: "Mobile",
      color: "bg-primary-600"
    },
    {
      title: "Clear communication",
      description: "Practical updates, straightforward scope and clear handover points.",
      icon: <MessageSquare className="w-5 h-5" strokeWidth={1.8} />,
      stats: "Simple",
      color: "bg-gray-700"
    },
    {
      title: "Business-focused delivery",
      description: "Builds are shaped around real workflows, outcomes and operational needs.",
      icon: <BriefcaseBusiness className="w-5 h-5" strokeWidth={1.8} />,
      stats: "Practical",
      color: "bg-primary-700"
    },
    {
      title: "Support after launch",
      description: "Ongoing help is available for fixes, updates, deployment and improvements.",
      icon: <LifeBuoy className="w-5 h-5" strokeWidth={1.8} />,
      stats: "Support",
      color: "bg-gray-600"
    },
    {
      title: "AI-assisted where useful",
      description: "AI tools can speed up delivery, but judgment and quality control remain human-led.",
      icon: <Bot className="w-5 h-5" strokeWidth={1.8} />,
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
              href="/#contact"
              className="brand-btn brand-btn-secondary whitespace-nowrap bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold inline-flex items-center justify-center"
            >
              Discuss Your Project
            </a>
            <a
              href="/#services"
              className="brand-btn whitespace-nowrap border-2 border-white/30 hover:border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold inline-flex items-center justify-center"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}