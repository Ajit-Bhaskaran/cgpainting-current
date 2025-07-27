
import Header from '@/components/header'
import Hero from '@/components/hero'
import Services from '@/components/services'
import Features from '@/components/features'
import Testimonials from '@/components/testimonials'
import FAQ from '@/components/faq'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Features />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  )
}
