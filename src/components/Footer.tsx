import Link from 'next/link'
import Logo from './Logo'
import { CheckCircle2, Code2, LayoutDashboard } from 'lucide-react'

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
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <span className="brand-icon-shell brand-icon-shell-dark h-7 w-7 rounded-md text-primary-300">
                  <CheckCircle2 className="w-4 h-4" strokeWidth={1.8} />
                </span>
                Freelance-led
              </div>
              <div className="flex items-center gap-2">
                <span className="brand-icon-shell brand-icon-shell-dark h-7 w-7 rounded-md text-gray-200">
                  <LayoutDashboard className="w-4 h-4" strokeWidth={1.8} />
                </span>
                Business-focused
              </div>
              <div className="flex items-center gap-2">
                <span className="brand-icon-shell brand-icon-shell-dark h-7 w-7 rounded-md text-gray-200">
                  <Code2 className="w-4 h-4" strokeWidth={1.8} />
                </span>
                Practical delivery
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}