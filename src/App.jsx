import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Gallery from './components/Gallery'
import Booking from './components/Booking'
import About from './components/About'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Gallery />
        <Booking />
        <About />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
