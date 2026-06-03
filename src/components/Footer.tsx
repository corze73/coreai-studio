import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Website Development', href: '#services' },
      { name: 'Web & Mobile Apps', href: '#services' },
      { name: 'Business Automation', href: '#services' },
      { name: 'Technical Support', href: '#contact' }
    ],
    projects: [
      { name: 'FACT', href: '#portfolio' },
      { name: 'AFMG', href: '#portfolio' },
      { name: 'Project Analytics Dashboard', href: '#portfolio' }
    ],
    contact: [
      { name: 'Freelancer Profile' },
      { name: 'LinkedIn' }
    ]
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {/* Brand Section */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="mb-5">
                <Link href="#home" className="flex items-center space-x-3">
                  <Logo size={36} className="transition-transform duration-200 hover:scale-110" />
                  <div className="flex flex-col">
                    <span className="text-xl font-bold">CoreAI Studio</span>
                    <span className="text-sm text-gray-400 -mt-0.5">Freelance Developer</span>
                  </div>
                </Link>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Web, mobile app and automation development for growing businesses.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-5">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Projects */}
            <div>
              <h3 className="text-lg font-semibold mb-5">Projects</h3>
              <ul className="space-y-3">
                {footerLinks.projects.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-5">Contact</h3>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:hello@coreai-studio.com" className="text-gray-400 hover:text-white transition-colors">
                    hello@coreai-studio.com
                  </a>
                </li>
                <li className="text-gray-400">UK-based freelance developer</li>
                {footerLinks.contact.map((link, index) => (
                  <li key={index} className="text-gray-400">{link.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © {currentYear} CoreAI Studio. All rights reserved.
            </div>
            
            {/* Trust Badges */}
            <div className="flex items-center space-x-6 text-gray-400 text-sm">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Freelance-led
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Business-focused
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                Practical delivery
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}