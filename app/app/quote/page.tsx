
import Header from '@/components/header'
import Footer from '@/components/footer'
import QuoteForm from '@/components/quote-form'

export const metadata = {
  title: 'Get Free Quote | CG Painting - The Travelling Painter',
  description: 'Get a free, detailed quote for your painting project. Professional estimates with no hidden costs.',
}

export default function QuotePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <QuoteForm />
      <Footer />
    </div>
  )
}
