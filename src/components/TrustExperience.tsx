export default function TrustExperience() {
  const cards = [
    {
      title: 'Technical Support Background',
      copy: 'Experience supporting real business systems where reliability, communication and problem-solving matter.'
    },
    {
      title: 'Systems & Deployment Experience',
      copy: 'Practical understanding of software deployment, business workflows and operational support.'
    },
    {
      title: 'Business-Focused Development',
      copy: 'Websites, dashboards and automation tools are built around real working processes, not just visual design.'
    },
    {
      title: 'AI-Assisted, Human-Led',
      copy: 'AI tools are used where useful to speed up delivery, but decisions, structure and quality remain human-led.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Built on
            <span className="text-primary-600"> Real Technical Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            CoreAI Studio combines modern development tools with years of practical experience supporting business technology, solving technical problems and working with live systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">{card.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
