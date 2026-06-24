import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Privacy Policy | CoreAi Studio',
  description:
    'Read CoreAi Studio’s Privacy Policy covering information collected, how it is used, contact forms, analytics, data storage, third-party services and user rights.',
  openGraph: {
    title: 'Privacy Policy | CoreAi Studio',
    description:
      'Privacy Policy for CoreAi Studio covering personal data, analytics, storage, third-party services and your rights.',
    url: 'https://coreai-studio.com/privacy-policy',
    type: 'website',
  },
}

const sections = [
  {
    title: 'Information collected',
    paragraphs: [
      'CoreAi Studio may collect personal information that you provide directly, such as your name, email address, company name, phone number and project details.',
      'Technical information may also be collected automatically when you visit the website, including device information, browser type, pages viewed and approximate location derived from your network data.',
    ],
  },
  {
    title: 'How information is used',
    paragraphs: [
      'Information is used to respond to enquiries, provide quotes, deliver services, manage client relationships and improve the website and service offering.',
      'CoreAi Studio may also use information to meet legal, regulatory or accounting obligations where required.',
    ],
  },
  {
    title: 'Contact form submissions',
    paragraphs: [
      'Messages submitted through the contact form are used to respond to your enquiry and assess whether CoreAi Studio can assist with the requested work.',
      'Contact form data may be retained for record-keeping, customer service and future reference unless you request deletion where applicable.',
    ],
  },
  {
    title: 'Analytics',
    paragraphs: [
      'CoreAi Studio may use analytics tools to understand website traffic, improve user experience and measure the performance of site content.',
      'Analytics data is used in aggregated or pseudonymised form wherever possible and is not intended to identify individual visitors unless required for security or troubleshooting.',
    ],
  },
  {
    title: 'Data storage',
    paragraphs: [
      'Personal data may be stored on secure systems, email accounts, cloud services and project management tools used to operate the business.',
      'Reasonable technical and organisational measures are used to protect personal data from unauthorised access, loss or misuse.',
    ],
  },
  {
    title: 'Third-party services',
    paragraphs: [
      'CoreAi Studio may rely on trusted third-party providers for hosting, analytics, email delivery, domain services and other operational tools.',
      'Where third-party services are used, your data may be processed under the privacy terms of those providers as well as this policy.',
    ],
  },
  {
    title: 'User rights',
    items: [
      'Request access to the personal data held about you.',
      'Ask for inaccurate information to be corrected.',
      'Request deletion or restriction of your data where legally available.',
      'Object to certain processing or withdraw consent where consent is the legal basis.',
    ],
  },
  {
    title: 'Contact information',
    paragraphs: [
      'If you have any questions about this Privacy Policy or wish to exercise your rights, please contact CoreAi Studio by email or through the website contact details below.',
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="Privacy Policy"
      intro="This policy explains how CoreAi Studio handles personal information in connection with its website, enquiries and consultancy services."
      lastUpdated="24 June 2026"
      sections={sections}
    />
  )
}