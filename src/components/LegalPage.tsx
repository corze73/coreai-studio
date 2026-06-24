import Link from 'next/link'
import Footer from './Footer'
import Navigation from './Navigation'

type LegalSection = {
  title: string
  paragraphs?: string[]
  items?: string[]
}

type LegalPageProps = {
  eyebrow: string
  title: string
  intro: string
  lastUpdated: string
  sections: LegalSection[]
}

export default function LegalPage({ eyebrow, title, intro, lastUpdated, sections }: LegalPageProps) {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-16">
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50/40 border-b border-gray-100">
          <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 1px 1px, rgba(15, 23, 42, 0.9) 1px, transparent 0)',
                backgroundSize: '22px 22px',
              }}
            />
          </div>

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <div className="max-w-3xl">
              <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-primary-700 bg-primary-50 border border-primary-200 rounded-full">
                {eyebrow}
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                {title}
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
                {intro}
              </p>
              <p className="mt-4 text-sm font-medium text-gray-500">
                Last updated: {lastUpdated}
              </p>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {sections.map((section) => (
                <article key={section.title} className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    {section.paragraphs?.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                    {section.items && (
                      <ul className="space-y-3">
                        {section.items.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-primary-500 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              ))}

              <article className="bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-2xl p-6 sm:p-8 shadow-lg">
                <h2 className="text-2xl font-bold mb-3">Contact CoreAi Studio</h2>
                <p className="text-primary-50 leading-relaxed mb-6 max-w-3xl">
                  If you have any questions about these terms or policies, please contact CoreAi Studio using the details below.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 text-sm sm:text-base">
                  <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                    <p className="font-semibold mb-1">Email</p>
                    <a href="mailto:hello@coreai-studio.com" className="text-white underline decoration-white/40 underline-offset-4">
                      hello@coreai-studio.com
                    </a>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                    <p className="font-semibold mb-1">Website</p>
                    <a href="https://coreai-studio.com" className="text-white underline decoration-white/40 underline-offset-4" target="_blank" rel="noreferrer">
                      https://coreai-studio.com
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}