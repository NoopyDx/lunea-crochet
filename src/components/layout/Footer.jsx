export default function Footer() {
  return (
    <footer className="bg-deep-brown text-cream py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Logo & tagline */}
          <div>
            <h2 className="font-display text-3xl font-bold text-off-white tracking-wider">LUNEA</h2>
            <p className="mt-3 font-handwritten text-xl text-dusty-rose">
              Créations artisanales en crochet
            </p>
            <p className="mt-4 text-sm text-cream/60 leading-relaxed">
              Chaque pièce est unique, faite à la main avec soin et amour par Léa Larminach.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="font-display text-lg font-semibold text-off-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              {[
                { label: 'Créations', href: '#creations' },
                { label: 'À propos', href: '#about' },
                { label: 'Galerie', href: '#gallery' },
                { label: 'Contact', href: '#contact' },
                { label: 'Boutique Etsy', href: 'https://www.etsy.com/fr/shop/LuneaCrochet', external: true },
              ].map(({ label, href, external }) => (
                <li key={href}>
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="text-sm text-cream/70 hover:text-golden transition-colors duration-300"
                  >
                    {label}{external ? ' ↗' : ''}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold text-off-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-cream/70">
              <li>
                <a href="mailto:lunea_crochet@gmail.com" className="hover:text-golden transition-colors">
                  lunea_crochet@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/lunea_crochet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-golden transition-colors"
                >
                  @lunea_crochet
                </a>
              </li>
              <li className="text-cream/50">
                Livraison dans toute la France
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-cream/40">
            &copy; 2025 Lunea Crochet &mdash; Tous droits réservés
          </p>
          <p className="font-handwritten text-lg text-dusty-rose/70">
            Fait avec 🧶 et beaucoup d'amour
          </p>
        </div>
      </div>
    </footer>
  )
}
