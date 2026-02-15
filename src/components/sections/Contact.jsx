import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '../ui/AnimatedSection'
import Button from '../ui/Button'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const messageRef = useRef(null)

  // Listen for external input events (from Card click)
  useEffect(() => {
    const el = messageRef.current
    if (!el) return
    const onInput = (e) => {
      setFormData((prev) => ({ ...prev, message: e.target.value }))
    }
    el.addEventListener('input', onInput)
    return () => el.removeEventListener('input', onInput)
  }, [])

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent('Demande depuis le site Lunea Crochet')
    const body = encodeURIComponent(
      `Bonjour Léa,\n\nJe m'appelle ${formData.name}.\n\n${formData.message}\n\n${formData.phone ? `Téléphone : ${formData.phone}\n` : ''}Email : ${formData.email}`
    )
    window.location.href = `mailto:lunea_crochet@gmail.com?subject=${subject}&body=${body}`
  }

  const inputClasses =
    'w-full px-5 py-3 rounded-xl bg-off-white border border-warm-beige focus:border-dusty-rose focus:ring-2 focus:ring-dusty-rose/20 outline-none transition-all duration-300 text-deep-brown placeholder-deep-brown/30'

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-warm-beige/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Text */}
          <div>
            <AnimatedSection>
              <span className="font-handwritten text-2xl text-dusty-rose">Envie d'une création unique ?</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-deep-brown mt-2 mb-6">
                Prenons le temps d'imaginer une création qui vous ressemble
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <p className="text-deep-brown/70 leading-relaxed mb-10">
                Vous avez une idée en tête ? Un cadeau personnalisé à offrir ?
                Décrivez-moi votre projet et je vous répondrai avec plaisir pour
                donner vie à vos envies.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.25}>
              <div className="space-y-5">
                <a
                  href="mailto:lunea_crochet@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-dusty-rose/10 flex items-center justify-center group-hover:bg-dusty-rose/20 transition-colors">
                    <svg className="w-5 h-5 text-dusty-rose" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-deep-brown/50">Email</p>
                    <p className="text-deep-brown font-medium group-hover:text-dusty-rose transition-colors">lunea_crochet@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/lunea_crochet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-dusty-rose/10 flex items-center justify-center group-hover:bg-dusty-rose/20 transition-colors">
                    <svg className="w-5 h-5 text-dusty-rose" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-deep-brown/50">Instagram</p>
                    <p className="text-deep-brown font-medium group-hover:text-dusty-rose transition-colors">@lunea_crochet</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-dusty-rose/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-dusty-rose" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H18.75M15 12a3 3 0 11-6 0 3 3 0 016 0zm0 0h1.125c.621 0 1.125.504 1.125 1.125v1.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-deep-brown/50">Livraison</p>
                    <p className="text-deep-brown font-medium">Dans toute la France</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right - Form */}
          <AnimatedSection delay={0.2}>
            <motion.form
              onSubmit={handleSubmit}
              className="bg-off-white rounded-3xl p-8 md:p-10 shadow-lg"
            >
              <h3 className="font-display text-2xl font-semibold text-deep-brown mb-6">
                Écrivez-moi
              </h3>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-deep-brown/60 mb-1.5">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre prénom"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-deep-brown/60 mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-deep-brown/60 mb-1.5">
                    Téléphone <span className="text-deep-brown/30">(optionnel)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="06 12 34 56 78"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-deep-brown/60 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    ref={messageRef}
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet, votre idée de création..."
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <Button className="w-full text-center mt-2">
                  Envoyer mon message
                </Button>
              </div>
            </motion.form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
