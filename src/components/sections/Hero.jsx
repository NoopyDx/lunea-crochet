import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Button from '../ui/Button'
import CrochetPattern from '../decorative/CrochetPattern'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden texture-grain">
      <CrochetPattern className="z-0" opacity={0.04} />

      {/* Background image with parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <div className="absolute inset-0 grid grid-cols-3 gap-1 opacity-15">
          {['/images/creation-1.jpg', '/images/creation-3.jpg', '/images/creation-5.jpg'].map((src, i) => (
            <img key={i} src={src} alt="" className="w-full h-full object-cover" />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-cream/85 via-cream/92 to-cream" />
      </motion.div>

      <motion.div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full" style={{ opacity }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left - Text */}
          <div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '80px' }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-0.5 bg-dusty-rose mb-8"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-handwritten text-2xl md:text-3xl text-dusty-rose mb-4"
            >
              Par Léa Larminach
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-deep-brown leading-[0.9] tracking-tight"
            >
              LUNEA
              <span className="block text-4xl md:text-5xl font-medium text-dusty-rose mt-2">
                Crochet
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 text-lg md:text-xl text-deep-brown/70 max-w-md leading-relaxed"
            >
              Créations faites avec amour — Pièces uniques & personnalisées
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button href="#creations">Découvrir mes créations</Button>
              <Button href="#contact" variant="secondary">Me contacter</Button>
            </motion.div>
          </div>

          {/* Right - Floating creation images */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-full max-w-[380px] aspect-square">
              <div className="absolute top-0 right-0 w-[60%] h-[65%] rounded-2xl overflow-hidden shadow-2xl rotate-3 z-20">
                <img
                  src="/images/creation-3.jpg"
                  alt="Fleur décorative en crochet bordeaux et beige"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-4 left-0 w-[55%] h-[58%] rounded-2xl overflow-hidden shadow-xl -rotate-4 z-10">
                <img
                  src="/images/creation-1.jpg"
                  alt="Porte-clés marguerite en crochet"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-2 left-[10%] w-[42%] h-[45%] rounded-xl overflow-hidden shadow-lg rotate-6 z-30">
                <img
                  src="/images/creation-5.jpg"
                  alt="Pendentif marguerite en crochet"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-deep-brown/40 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border-2 border-deep-brown/20 flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-dusty-rose" />
        </motion.div>
      </motion.div>
    </section>
  )
}
