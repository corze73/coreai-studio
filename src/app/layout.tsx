import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import GoogleAnalytics from '../components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CoreAI Studio | Freelance Web, Mobile App & Automation Developer',
  description: 'UK-based freelance developer building practical websites, mobile-friendly web apps, dashboards, booking systems and business automation solutions.',
  keywords: 'freelance web developer, mobile app developer, automation, dashboards, booking systems, UK developer, websites, web apps',
  authors: [{ name: 'CoreAi-Studio' }],
  creator: 'CoreAi-Studio',
  publisher: 'CoreAi-Studio',
  openGraph: {
    title: 'CoreAI Studio | Freelance Web, Mobile App & Automation Developer',
    description: 'UK-based freelance developer building practical websites, mobile-friendly web apps, dashboards and automation systems.',
    url: 'https://coreai-studio.com',
    siteName: 'CoreAi-Studio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CoreAI Studio | Freelance Web, Mobile App & Automation Developer',
    description: 'UK-based freelance developer building practical websites, mobile-friendly web apps, dashboards and automation systems.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}