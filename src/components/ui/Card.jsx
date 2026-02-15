import { motion } from 'framer-motion'

export default function Card({ creation, index }) {
  const handleClick = () => {
    const message = `Bonjour Léa, je suis intéressé(e) par "${creation.name}" (${creation.price}). Est-ce encore disponible ?`
    const messageField = document.getElementById('message')
    const contactSection = document.getElementById('contact')

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
      // Small delay to let scroll finish before filling
      setTimeout(() => {
        if (messageField) {
          // Trigger React's onChange by using native setter
          const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
            window.HTMLTextAreaElement.prototype, 'value'
          ).set
          nativeInputValueSetter.call(messageField, message)
          messageField.dispatchEvent(new Event('input', { bubbles: true }))
          messageField.focus()
        }
      }, 800)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative overflow-hidden rounded-2xl mb-4">
        <img
          src={creation.image}
          alt={creation.alt}
          loading="lazy"
          className="w-full aspect-[3/4] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 rounded-full bg-off-white/80 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest text-deep-brown/70">
            {creation.category}
          </span>
        </div>

        {/* Subtle hover hint */}
        <div className="absolute bottom-0 inset-x-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <div className="bg-gradient-to-t from-deep-brown/50 to-transparent pt-10 pb-3 px-4 flex items-center justify-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-off-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <span className="text-xs font-medium text-off-white/90 tracking-wide">
              Me contacter pour cette création
            </span>
          </div>
        </div>
      </div>

      <div className="px-1">
        <h3 className="font-display text-lg font-semibold text-deep-brown group-hover:text-dusty-rose transition-colors duration-300">{creation.name}</h3>
        <p className="font-handwritten text-xl text-dusty-rose mt-0.5">{creation.price}</p>
      </div>
    </motion.div>
  )
}
