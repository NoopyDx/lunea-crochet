import { motion } from 'framer-motion'
import AnimatedSection from '../ui/AnimatedSection'
import CrochetPattern from '../decorative/CrochetPattern'

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-warm-beige/40 overflow-hidden">
      <CrochetPattern opacity={0.04} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <AnimatedSection>
            <div className="relative">
              <motion.div
                whileInView={{ rotate: 0, scale: 1 }}
                initial={{ rotate: -3, scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src="/images/lea.jpg"
                  alt="Léa Larminach, créatrice de Lunea Crochet"
                  className="w-full aspect-[3/4] object-cover"
                  loading="lazy"
                />
              </motion.div>

              {/* Decorative card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -bottom-6 -right-6 bg-off-white rounded-2xl p-5 shadow-lg max-w-[200px]"
              >
                <p className="font-handwritten text-xl text-dusty-rose leading-snug">
                  "Chaque maille raconte une histoire"
                </p>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Text */}
          <div>
            <AnimatedSection>
              <span className="font-handwritten text-2xl text-dusty-rose">L'histoire de Lunea</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-deep-brown mt-2 mb-8">
                À propos de Léa
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <p className="text-deep-brown/70 leading-relaxed mb-6">
                Passionnée de crochet, je crée chaque pièce à la main avec soin et attention.
                Chaque création LUNEA est unique, pensée et réalisée avec des matériaux
                choisis pour leur qualité et leur douceur.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.25}>
              <p className="text-deep-brown/70 leading-relaxed mb-6">
                Que ce soit un amigurumi pour un cadeau de naissance, un accessoire pour
                votre quotidien ou une pièce de décoration pour votre intérieur, je prends
                le temps d'imaginer et de réaliser des créations qui vous ressemblent.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.35}>
              <p className="text-deep-brown/70 leading-relaxed mb-8">
                N'hésitez pas à me contacter pour une commande personnalisée — ensemble,
                donnons vie à vos idées !
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.45}>
              <div className="flex flex-wrap gap-6 text-center">
                {[
                  { number: '100+', label: 'Créations réalisées' },
                  { number: '100%', label: 'Fait main' },
                  { number: '♡', label: 'Avec amour' },
                ].map(({ number, label }) => (
                  <div key={label} className="flex-1 min-w-[100px]">
                    <p className="font-display text-3xl font-bold text-dusty-rose">{number}</p>
                    <p className="text-xs text-deep-brown/50 mt-1 uppercase tracking-widest">{label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
