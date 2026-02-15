import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Creations from './components/sections/Creations'
import About from './components/sections/About'
import Gallery from './components/sections/Gallery'
import Contact from './components/sections/Contact'
import YarnThread from './components/decorative/YarnThread'

export default function App() {
  return (
    <div className="relative">
      <YarnThread />
      <Navbar />
      <main>
        <Hero />
        <Creations />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
