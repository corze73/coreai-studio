import Logo from './Logo'

export default function About() {
  return (
    <section id="about" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Practical Development
              <span className="text-primary-600"> for Real Businesses</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              CoreAI Studio focuses on building practical digital solutions for businesses, including websites, mobile-friendly applications, dashboards and automation systems.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Projects are approached with a problem-solving mindset shaped by experience in technical support, systems deployment and modern development workflows.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              The focus is always on usability, reliability and building solutions that help businesses operate more effectively.
            </p>
          </div>

          {/* Visual Element */}
          <div className="mt-10 lg:mt-0">
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-50 to-gray-50 rounded-2xl p-8 transform rotate-3 shadow-lg">
                <div className="bg-white rounded-xl p-6 transform -rotate-3 shadow-md">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-md">
                      <Logo size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Freelance Technical Partner</h3>
                    <p className="text-gray-600 text-sm">
                      A flexible, business-focused service for clients who need practical digital solutions and dependable support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}