import Logo from './Logo'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Leading the AI Revolution in
              <span className="text-primary-600"> Business Solutions</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At CoreAi-Studio, we harness the power of artificial intelligence to transform how businesses create content, 
              design experiences, and automate processes. Our AI-first approach delivers exceptional results at unprecedented speed.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Every solution we deliver is powered by cutting-edge AI technology, ensuring consistency, efficiency, 
              and innovation that traditional methods simply cannot match.
            </p>

            {/* Key Points */}
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">100% AI-Powered Workflow</h3>
                  <p className="text-gray-600">Every project leverages advanced AI technology for optimal results</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Lightning-Fast Delivery</h3>
                  <p className="text-gray-600">AI automation enables rapid turnaround without compromising quality</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Professional Excellence</h3>
                  <p className="text-gray-600">Consistent, high-quality output that exceeds industry standards</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="mt-12 lg:mt-0">
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-50 to-gray-50 rounded-2xl p-8 transform rotate-3 shadow-lg">
                <div className="bg-white rounded-xl p-6 transform -rotate-3 shadow-md">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-md">
                      <Logo size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">AI-First Approach</h3>
                    <p className="text-gray-600 text-sm">
                      We don&apos;t just use AI as a tool – it&apos;s the foundation of everything we create
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