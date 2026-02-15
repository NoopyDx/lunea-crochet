import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useCallback } from 'react'

export default function Lightbox({ images, currentIndex, onClose, onNext, onPrev }) {
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowRight') onNext()
    if (e.key === 'ArrowLeft') onPrev()
  }, [onClose, onNext, onPrev])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [handleKeyDown])

  if (currentIndex === null) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/90 backdrop-blur-sm"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-off-white/80 hover:text-off-white text-4xl cursor-pointer z-10 leading-none"
          aria-label="Fermer"
        >
          &times;
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); onPrev() }}
          className="absolute left-4 md:left-8 text-off-white/70 hover:text-off-white text-5xl cursor-pointer z-10 leading-none"
          aria-label="Image précédente"
        >
          &#8249;
        </button>

        <motion.img
          key={currentIndex}
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />

        <button
          onClick={(e) => { e.stopPropagation(); onNext() }}
          className="absolute right-4 md:right-8 text-off-white/70 hover:text-off-white text-5xl cursor-pointer z-10 leading-none"
          aria-label="Image suivante"
        >
          &#8250;
        </button>

        <div className="absolute bottom-6 text-off-white/60 text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
