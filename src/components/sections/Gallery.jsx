import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '../ui/AnimatedSection'
import Lightbox from '../ui/Lightbox'
import { galleryImages } from '../../data/creations'

const masonryLayout = [
  'col-span-1 row-span-2',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-2',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
]

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const openLightbox = (i) => setLightboxIndex(i)
  const closeLightbox = () => setLightboxIndex(null)
  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % galleryImages.length)
  }, [])
  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }, [])

  return (
    <section id="gallery" className="relative py-24 md:py-32 texture-grain stitch-pattern">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="font-handwritten text-2xl text-dusty-rose">Inspirations</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-deep-brown mt-2">
            Galerie
          </h2>
          <div className="w-16 h-0.5 bg-golden mx-auto mt-6" />
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] md:auto-rows-[240px] gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`${masonryLayout[i] || 'col-span-1 row-span-1'} group cursor-pointer overflow-hidden rounded-2xl relative`}
              onClick={() => openLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-deep-brown/0 group-hover:bg-deep-brown/20 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-off-white/80 flex items-center justify-center">
                  <svg className="w-5 h-5 text-deep-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </section>
  )
}
