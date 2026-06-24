import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Cookie Policy | CoreAi Studio',
  description:
    'Read CoreAi Studio’s Cookie Policy covering essential cookies, analytics cookies, cookie preferences and contact details.',
  openGraph: {
    title: 'Cookie Policy | CoreAi Studio',
    description:
      'Cookie Policy for CoreAi Studio explaining essential cookies, analytics cookies and preference management.',
    url: 'https://coreai-studio.com/cookie-policy',
    type: 'website',
  },
}

const sections = [
  {
    title: 'What cookies are',
    paragraphs: [
      'Cookies are small text files stored on your device when you visit a website. They help a site function properly and can also support analytics or preference settings.',
      'CoreAi Studio uses cookies only where they are needed to operate the website effectively or to understand how the site is used.',
    ],
  },
  {
    title: 'Essential cookies',
    paragraphs: [
      'Essential cookies are necessary for the website to function and cannot usually be switched off in our systems.',
      'These cookies may be used to support core site features, security, navigation and basic performance.',
    ],
  },
  {
    title: 'Analytics cookies',
    paragraphs: [
      'Analytics cookies help CoreAi Studio understand how visitors use the website so that pages, content and performance can be improved.',
      'Where analytics cookies are used, they are intended to collect aggregated information rather than directly identifying individual visitors.',
    ],
  },
  {
    title: 'Managing cookie preferences',
    paragraphs: [
      'You can control cookies through your browser settings, including blocking or deleting cookies already stored on your device.',
      'If cookie preferences are offered on the site, you can use those controls to manage non-essential cookies.',
    ],
  },
  {
    title: 'Contact information',
    paragraphs: [
      'If you have any questions about this Cookie Policy, please contact CoreAi Studio using the details below.',
    ],
  },
]

export default function CookiePolicyPage() {
  return (
    <LegalPage
      eyebrow="Cookie Policy"
      title="Cookie Policy"
      intro="This policy explains how CoreAi Studio uses cookies and how you can manage your preferences."
      lastUpdated="24 June 2026"
      sections={sections}
    />
  )
}