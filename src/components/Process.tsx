import { CheckCircle2, Code2, Rocket, Search, Route } from 'lucide-react'

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "Understanding goals, users and business requirements.",
      icon: <Search className="w-5 h-5" strokeWidth={1.8} />,
      color: "bg-primary-600"
    },
    {
      number: "02",
      title: "Planning",
      description: "Structuring the project, user flow and technical approach.",
      icon: <Route className="w-5 h-5" strokeWidth={1.8} />,
      color: "bg-gray-600"
    },
    {
      number: "03",
      title: "Build",
      description: "Developing the website, application or workflow system.",
      icon: <Code2 className="w-5 h-5" strokeWidth={1.8} />,
      color: "bg-gray-700"
    },
    {
      number: "04",
      title: "Review",
      description: "Testing, refining and improving usability across devices.",
      icon: <CheckCircle2 className="w-5 h-5" strokeWidth={1.8} />,
      color: "bg-gray-800"
    },
    {
      number: "05",
      title: "Launch & Support",
      description: "Deployment, updates and ongoing improvements where needed.",
      icon: <Rocket className="w-5 h-5" strokeWidth={1.8} />,
      color: "bg-gray-500"
    }
  ];

  return (
    <section id="process" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 px-4">
            A Clear Project
            <span className="text-primary-600"> Process</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            A straightforward process built for honest communication, sensible planning and dependable delivery.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gray-200"></div>
          
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative mb-8 lg:mb-0">
                {/* Mobile Timeline */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-6 top-16 w-0.5 bg-gray-200" style={{height: 'calc(100% + 2rem)'}}></div>
                )}
                
                <div className="text-center lg:text-center">
                  {/* Step Number Circle */}
                  <div className={`relative inline-flex items-center justify-center w-12 h-12 ${step.color} text-white rounded-full font-bold text-lg mb-4 shadow-lg z-10`}>
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="px-4 lg:px-2">
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 leading-tight">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 min-h-[4rem] lg:min-h-[5rem]">{step.description}</p>
                    
                    {/* Icon */}
                    <div className="brand-icon-shell">
                      {step.icon}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 lg:mt-20 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-6 lg:p-8 text-white mx-4 lg:mx-0">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 text-center">
            <div>
              <div className="text-2xl lg:text-3xl font-bold mb-2">5 Steps</div>
              <div className="text-primary-100 text-sm lg:text-base">From discovery to support</div>
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-bold mb-2">Mobile-first</div>
              <div className="text-primary-100 text-sm lg:text-base">Designed for modern users</div>
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-bold mb-2">Support</div>
              <div className="text-primary-100 text-sm lg:text-base">Launch help and follow-up</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}