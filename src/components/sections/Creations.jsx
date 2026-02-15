import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '../ui/AnimatedSection'
import Card from '../ui/Card'
import { creations, categories } from '../../data/creations'

export default function Creations() {
  const [activeCategory, setActiveCategory] = useState('Tout')

  const filtered = activeCategory === 'Tout'
    ? creations
    : creations.filter((c) => c.category === activeCategory)

  return (
    <section id="creations" className="relative py-24 md:py-32 texture-grain">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="font-handwritten text-2xl text-dusty-rose">Fait main, avec amour</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-deep-brown mt-2">
            Mes Créations
          </h2>
          <div className="w-16 h-0.5 bg-golden mx-auto mt-6" />
        </AnimatedSection>

        {/* Category filters */}
        <AnimatedSection delay={0.1} className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-dusty-rose text-off-white shadow-md'
                  : 'bg-warm-beige/50 text-deep-brown/70 hover:bg-warm-beige'
              }`}
            >
              {cat}
            </button>
          ))}
        </AnimatedSection>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((creation, i) => (
              <motion.div
                key={creation.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <Card creation={creation} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatedSection delay={0.2} className="text-center mt-16">
          <a
            href="https://www.etsy.com/fr/shop/LuneaCrochet"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-handwritten text-xl text-dusty-rose hover:text-deep-brown transition-colors"
          >
            Voir toute la collection sur Etsy
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
