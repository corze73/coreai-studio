import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import GoogleAnalytics from '../components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CoreAi-Studio | AI-Powered Content, Design & Automation',
  description: 'Professional AI-powered content creation, design, and automation services that move businesses faster. Transform your workflow with cutting-edge AI solutions.',
  keywords: 'AI content, AI design, automation, artificial intelligence, business solutions, content creation',
  authors: [{ name: 'CoreAi-Studio' }],
  creator: 'CoreAi-Studio',
  publisher: 'CoreAi-Studio',
  openGraph: {
    title: 'CoreAi-Studio | AI-Powered Content, Design & Automation',
    description: 'Professional AI-powered content creation, design, and automation services that move businesses faster.',
    url: 'https://coreai-studio.com',
    siteName: 'CoreAi-Studio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CoreAi-Studio | AI-Powered Content, Design & Automation',
    description: 'Professional AI-powered content creation, design, and automation services that move businesses faster.',
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