import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Terms & Conditions | CoreAi Studio',
  description:
    'Read the Terms & Conditions for CoreAi Studio, including services, pricing, payment terms, intellectual property, liability, confidentiality and governing law.',
  openGraph: {
    title: 'Terms & Conditions | CoreAi Studio',
    description:
      'Terms & Conditions covering CoreAi Studio services, pricing, delivery, liability, confidentiality and governing law.',
    url: 'https://coreai-studio.com/terms-and-conditions',
    type: 'website',
  },
}

const sections = [
  {
    title: 'About CoreAi Studio',
    paragraphs: [
      'CoreAi Studio is the trading style of a sole trader consultancy providing practical web, software and automation services for businesses.',
      'These Terms & Conditions apply to all services supplied by CoreAi Studio unless a separate written agreement states otherwise.',
    ],
  },
  {
    title: 'Services provided',
    paragraphs: [
      'Services may include website development, web applications, dashboards, business automation, technical consultancy, maintenance and related digital support.',
      'The precise scope of work will be described in the proposal, statement of work, quotation or written email confirmation agreed with the client.',
    ],
  },
  {
    title: 'Quotes and pricing',
    paragraphs: [
      'All quotes are based on the information available at the time they are issued and remain valid for the period stated in the quotation.',
      'Unless agreed otherwise in writing, pricing is exclusive of VAT and any third-party costs, subscriptions, hosting fees or license charges required for the project.',
    ],
  },
  {
    title: 'Payment terms',
    paragraphs: [
      'Invoices are payable within 14 days of the invoice date unless another payment schedule has been agreed in writing.',
      'CoreAi Studio may suspend work, delivery or access to project materials if an invoice remains unpaid after the due date.',
    ],
  },
  {
    title: 'Project delivery',
    paragraphs: [
      'Any delivery dates are estimates unless expressly confirmed as fixed in writing.',
      'The client acknowledges that project timelines may change where the scope changes, information is delayed or third-party services are outside CoreAi Studio’s control.',
    ],
  },
  {
    title: 'Client responsibilities',
    items: [
      'Provide accurate and complete information needed to deliver the work.',
      'Review drafts, feedback and approvals promptly.',
      'Obtain any permissions, content rights or third-party consents required for the project.',
      'Ensure internal stakeholders are available where sign-off or access is needed.',
    ],
  },
  {
    title: 'Intellectual property',
    paragraphs: [
      'Unless otherwise agreed in writing, CoreAi Studio retains ownership of pre-existing materials, tools, templates, code libraries and working methods used to create the deliverables.',
      'Upon full payment, the client will receive the rights necessary to use the final deliverables for the agreed purpose, subject to any third-party or open-source licence terms.',
    ],
  },
  {
    title: 'Limitation of liability',
    paragraphs: [
      'CoreAi Studio will exercise reasonable skill and care in providing the services, but does not guarantee that any particular outcome, commercial result or uninterrupted service will be achieved.',
      'To the fullest extent permitted by law, CoreAi Studio will not be liable for indirect, consequential or special losses, or for losses arising from information supplied by the client or third-party systems.',
    ],
  },
  {
    title: 'Confidentiality',
    paragraphs: [
      'Both parties will keep confidential information private and will only use it for the purpose of performing the services or receiving them.',
      'Confidential information may be disclosed where required by law, a court order or a competent authority.',
    ],
  },
  {
    title: 'Termination of services',
    paragraphs: [
      'Either party may end the engagement by giving reasonable written notice unless a separate agreement sets out different notice terms.',
      'On termination, the client remains responsible for payment for work completed up to the termination date and any approved third-party costs incurred.',
    ],
  },
  {
    title: 'Governing law',
    paragraphs: [
      'These Terms & Conditions are governed by the law of England and Wales.',
      'Any dispute arising in connection with these terms will be subject to the exclusive jurisdiction of the courts of England and Wales.',
    ],
  },
]

export default function TermsAndConditionsPage() {
  return (
    <LegalPage
      eyebrow="Terms & Conditions"
      title="Terms & Conditions"
      intro="These terms set out how CoreAi Studio provides consultancy and development services to clients in a clear and professional manner."
      lastUpdated="24 June 2026"
      sections={sections}
    />
  )
}