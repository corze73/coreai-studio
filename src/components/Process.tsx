export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Quick AI Consultation",
      description: "Answer 7 smart questions and get instant, personalized recommendations for your business needs.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
        </svg>
      ),
      color: "bg-primary-600"
    },
    {
      number: "02",
      title: "Choose Your Package",
      description: "Select from our affordable starter packages: £75 Blog Pack, £95 Design Kit, or £125 Mini Automation.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
        </svg>
      ),
      color: "bg-gray-600"
    },
    {
      number: "03",
      title: "Fast AI Production",
      description: "Our AI systems immediately start creating your content, designs, or automation workflows with precision.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      ),
      color: "bg-gray-700"
    },
    {
      number: "04",
      title: "Quality Review",
      description: "Every AI output is reviewed and refined to ensure it meets professional standards before delivery.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      color: "bg-gray-800"
    },
    {
      number: "05",
      title: "Rapid Delivery",
      description: "Receive your completed package within 24-48 hours - no lengthy project timelines or meetings required.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
      ),
      color: "bg-gray-500"
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Streamlined
            <span className="text-primary-600"> Package Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From AI consultation to delivery in 48 hours. No lengthy meetings, 
            no complex strategies - just fast, affordable AI solutions for your business.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gray-200"></div>
          
          <div className="grid lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Mobile Timeline */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-6 top-16 bottom-0 w-0.5 bg-gray-200"></div>
                )}
                
                <div className="text-center lg:text-center">
                  {/* Step Number Circle */}
                  <div className={`relative inline-flex items-center justify-center w-12 h-12 ${step.color} text-white rounded-full font-bold text-lg mb-4 shadow-lg`}>
                    {step.number}
                    <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                  </div>

                  {/* Content */}
                  <div className="lg:px-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{step.description}</p>
                    
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg text-gray-600">
                      {step.icon}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">48hr</div>
              <div className="text-primary-100">Package Delivery</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">£75+</div>
              <div className="text-primary-100">Starting Packages</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-primary-100">AI-Powered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}