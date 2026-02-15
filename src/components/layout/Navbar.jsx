import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Créations', href: '#creations' },
  { label: 'À propos', href: '#about' },
  { label: 'Galerie', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-18 md:h-20">
        {/* Logo */}
        <a href="#" className="font-display text-2xl md:text-3xl font-bold text-deep-brown tracking-wider">
          LUNEA
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="relative text-sm font-medium text-deep-brown/80 hover:text-deep-brown transition-colors duration-300 group"
            >
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-dusty-rose group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="https://www.etsy.com/fr/shop/LuneaCrochet"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-5 py-2 rounded-full bg-dusty-rose text-off-white text-sm font-semibold hover:bg-deep-brown transition-colors duration-300"
          >
            Boutique Etsy
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-deep-brown origin-center"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-deep-brown"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-deep-brown origin-center"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 top-18 bg-cream/98 backdrop-blur-lg z-30 flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-3xl text-deep-brown hover:text-dusty-rose transition-colors"
              >
                {label}
              </a>
            ))}
            <a
              href="https://www.etsy.com/fr/shop/LuneaCrochet"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-4 px-8 py-3 rounded-full bg-dusty-rose text-off-white font-semibold text-lg"
            >
              Boutique Etsy
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
