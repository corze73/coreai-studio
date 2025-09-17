import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Process from '@/components/Process'
import Portfolio from '@/components/Portfolio'
import Capabilities from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Process />
      <Portfolio />
      <Capabilities />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}