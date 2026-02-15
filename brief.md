# LUNEA CROCHET — Site Vitrine One-Page

## Contexte Projet

Refonte complète du site vitrine de **Lunea Crochet**, marque de créations artisanales en crochet fondée par **Léa Larminach**. Le site actuel (un template Framer wellness/coaching à peine modifié) ne reflète absolument pas l'univers de la marque. Il contient des photos stock de fitness, des textes en anglais génériques ("Corporate Wellness Program", "FIND YOUR BALANCE"), et des faux témoignages.

**L'objectif** : un site one-page vitrine (pas e-commerce) qui respire l'artisanat, le fait-main, la douceur du crochet. Le site doit être vivant, chaleureux, et fidèle à l'identité de Lunea.

**Stack** : React (Vite) + Tailwind CSS + Framer Motion

---

## Architecture : 2 Agents Parallèles

### Agent 1 — Recherche & Brief Créatif

**Mission** : Analyser le site Framer existant et l'Instagram de la cliente pour produire un brief complet.

**Instructions** :

1. **Utilise le MCP Chrome DevTools** pour naviguer sur `https://lunea-crochet.framer.website/` et :
   - Capturer des screenshots de chaque section du site
   - Extraire TOUTES les URLs d'images des créations réelles (celles hébergées sur `framerusercontent.com`) — ce sont les seuls assets visuels exploitables
   - Noter la structure actuelle du site (sections, navigation)
   - Identifier les éléments de charte graphique réutilisables (couleurs, typo du logo "LUNEA")

2. **Utilise le MCP Chrome DevTools** pour naviguer sur `https://www.instagram.com/lunea_crochet` et :
   - Parcourir le feed pour comprendre l'univers visuel de la marque
   - Identifier les types de créations (amigurumis, accessoires, déco, vêtements, etc.)
   - Noter les couleurs récurrentes, l'ambiance des photos, le style de mise en scène
   - Récupérer les textes de bio et descriptions pertinentes
   - Télécharger les photos les plus représentatives des créations

3. **Produire un fichier `BRIEF.md`** contenant :
   - L'univers visuel identifié (palette, ambiance, mots-clés)
   - L'inventaire des créations par catégorie
   - Les textes récupérés/adaptés en français
   - La liste complète des assets (images) avec leurs URLs et descriptions
   - Les recommandations pour le nouveau site

### Agent 2 — Développement React

Utilise le skill frontend-design ! C'est important

**Mission** : Développer le site one-page en React selon le brief et les directives design ci-dessous.

**Attendre le `BRIEF.md` de l'Agent 1 avant de commencer le développement, mais peut commencer le setup technique immédiatement.**

---

## Directives Design

### Direction Artistique

**Ton** : Artisanal, chaleureux, doux, féminin mais pas mièvre. Quelque part entre un atelier cosy et une boutique d'artisan chic.

**Concept mémorable** : Le fil qui guide. Utiliser le motif du fil de laine/crochet comme élément graphique récurrent — un fil qui serpente entre les sections, des motifs de mailles en fond subtil, des textures tissées.

### Typographie

- **Display / Titres** : Une serif élégante avec du caractère artisanal — explorer des polices comme `Playfair Display`, `Cormorant Garamond`, `Libre Caslon Display`, ou `DM Serif Display`. Choisir quelque chose qui évoque le fait-main sans être kitsch.
- **Corps** : Un sans-serif doux et lisible — `Nunito`, `Quicksand`, `Poppins Light`, ou `Lato`.
- **Accent / Handwritten** : Pour des touches ponctuelles (citations, prix), une police manuscrite subtile comme `Caveat`, `Sacramento`, ou `Dancing Script`.

**ÉVITER** : Inter, Roboto, Arial, les polices génériques sans âme.

### Palette de Couleurs

S'inspirer de l'univers du crochet et des fils de laine. Palette douce et naturelle :

```
--cream:        #F5F0EB    /* Fond principal — laine écrue */
--warm-beige:   #E8DDD3    /* Fond secondaire */
--dusty-rose:   #C4A08A    /* Accent chaud — fil de laine */
--soft-sage:    #A8B5A0    /* Accent nature */
--deep-brown:   #5C4033    /* Texte principal — bois/terre */
--golden:       #D4A574    /* Accent doré — aiguilles */
--off-white:    #FEFCF9    /* Blanc cassé */
--charcoal:     #3A3A3A    /* Texte foncé */
```

**Note** : Adapter en fonction des couleurs récurrentes trouvées sur l'Instagram par l'Agent 1.

### Animations & Interactions (Framer Motion)

Le site doit être **vivant** mais pas agressif. Ambiance douce et fluide :

- **Entrées de sections** : Fade-in + léger slide-up au scroll (IntersectionObserver + Framer Motion)
- **Images des créations** : Scale subtil au hover (1.02-1.05), ombre douce qui s'intensifie
- **Fil conducteur animé** : Un SVG de fil/laine qui se dessine progressivement au scroll (stroke-dashoffset animé)
- **Parallaxe léger** : Sur la hero section et la galerie, des éléments à vitesses légèrement différentes
- **Micro-interactions** : Boutons avec transition douce, liens avec underline animé
- **Curseur custom** (optionnel) : Un petit cercle doux qui suit la souris, avec trailing effect

### Textures & Backgrounds

- Utiliser des textures subtiles évoquant le textile : motif de mailles, trame de tissu, grain de papier kraft
- Ces textures doivent être générées en CSS (patterns SVG ou CSS) ou être très légères
- Jamais de fond blanc pur — toujours le cream/off-white texturé

---

## Structure du Site One-Page

### 1. Navigation (sticky)

```
Logo "LUNEA" | Créations | À propos | Galerie | Contact | [Boutique Etsy ➜]
```

- Nav transparente qui devient opaque au scroll avec backdrop-blur
- Le logo "LUNEA" en typo display avec un petit motif de pelote ou crochet
- Le lien Boutique redirige vers Etsy : `https://www.etsy.com/fr/shop/LuneaCrochet` (vérifier le vrai lien avec l'Agent 1)
- Hamburger menu sur mobile avec animation fluide

### 2. Hero Section

- **Layout** : Grande image/galerie des plus belles créations en fond ou en split-screen
- **Texte** :
  - Nom : "LUNEA Crochet"
  - Sous-titre : "Créations faites avec amour — Pièces uniques & personnalisées ✨"
  - Créatrice : "Par Léa Larminach"
- **CTA** : "Découvrir mes créations" (scroll vers la section créations)
- **Animation** : Texte qui apparaît lettre par lettre ou mot par mot, image(s) avec léger parallaxe
- Élément décoratif : motif de mailles ou fil de laine en SVG animé

### 3. Section Créations (Catalogue Vitrine)

- **Grille** de cards présentant les catégories ou pièces individuelles
- Chaque card :
  - Photo de la création (récupérée du Framer/Instagram)
  - Nom de la création
  - Catégorie (ex: "Amigurumi", "Accessoire", "Décoration")
  - Prix indicatif ("À partir de XX€")
  - Pas de bouton d'achat — c'est vitrine uniquement
- **Layout** : Grille asymétrique/masonry pour éviter l'effet catalogue ennuyeux
- **Filtre** (optionnel) : par catégorie avec animation de transition
- **Hover** : Image zoom subtil + overlay doux avec le nom

### 4. Section À Propos

- **Photo de Léa** (récupérer du site Framer : `framerusercontent.com/images/6FJRnjx588OCix6P8IMZCBYZQPU.jpg`)
- **Texte de présentation** : Qui est Léa, sa passion pour le crochet, son histoire, sa démarche artisanale
  - Récupérer et adapter le texte de l'Instagram et du site actuel
  - Si pas assez de contenu, rédiger un texte placeholder authentique et chaleureux
- **Layout** : Image à gauche, texte à droite (ou inversé). Peut inclure un mini-carrousel de photos de l'atelier/process
- **Touch** : Citation manuscrite en police handwritten, motif de fil décoratif

### 5. Section Galerie

- **Galerie photos** des créations — format masonry ou grille irrégulière
- Récupérer les images du site Framer ET de l'Instagram
- **Lightbox** au clic pour voir les photos en grand
- **Animation** : Images qui apparaissent en stagger au scroll
- Possibilité d'intégrer un feed Instagram (ou juste les photos)

### 6. Section Contact

- **Titre** : "Prenons le temps d'imaginer une création qui vous ressemble"
- **Formulaire** simple : Prénom, Email, Téléphone (optionnel), Message
- **Infos** :
  - Email : lunea_crochet@gmail.com
  - Instagram : @lunea_crochet
  - Livraison disponible dans toute la France
- **Pas de numéro de téléphone US** (le +17364528200 du site actuel est celui du template, pas de la cliente)
- Le formulaire peut utiliser Formspree, EmailJS, ou simplement un `mailto:` en attendant un backend

### 7. Footer

- Logo Lunea
- Liens rapides (Créations, À propos, Contact, Boutique Etsy)
- Liens sociaux (Instagram, Etsy)
- © 2025 Lunea Crochet — Tous droits réservés
- "Fait avec 🧶 et beaucoup d'amour"

---

## Assets à Récupérer depuis le Framer

Voici les URLs des images identifiées sur le site actuel. L'Agent 1 devra les télécharger et les organiser :

```
# Photo de Léa (la créatrice)
https://framerusercontent.com/images/6FJRnjx588OCix6P8IMZCBYZQPU.jpg

# Créations (photos réelles)
https://framerusercontent.com/images/mlGX9mGLyXl29HhCLodh0kXPw4.jpg
https://framerusercontent.com/images/U7XPk7mSQ3HwwLhyrpku6wJjg.jpg
https://framerusercontent.com/images/0NBvw08a1ajnX24d3g7lWsrgDsE.jpg
https://framerusercontent.com/images/IM2WJlPwKhhhLKAuxg2cceEXsao.jpg
https://framerusercontent.com/images/wuAheb0gz2d1dVtIOgG8XS4eEss.jpg
https://framerusercontent.com/images/uui0U7kCcv8gULXO4XhEk22ggts.jpg
https://framerusercontent.com/images/vSaH7u2GE5MSXDbD5EVpRNHDc.jpg
https://framerusercontent.com/images/OXU91Zd35ocQNBOFShLCUgpegyU.jpg

# Photos du carrousel/hero (vérifier lesquelles sont des vraies créations vs stock)
https://framerusercontent.com/images/kOAO1KVMHWNAz0We40P2NOQ6cY.jpg
```

**⚠️ ATTENTION** : Certaines de ces images pourraient être des photos stock du template original (femmes fitness, yoga, etc.). L'Agent 1 doit vérifier visuellement chaque image et ne garder que celles qui montrent des créations crochet ou Léa elle-même.

---

## Spécifications Techniques

### Setup

```bash
npm create vite@latest lunea-crochet -- --template react
cd lunea-crochet
npm install
npm install -D tailwindcss @tailwindcss/vite
npm install framer-motion
npm install react-intersection-observer
```

### Structure de fichiers

```
src/
├── assets/
│   ├── images/          # Photos des créations (téléchargées par Agent 1)
│   └── textures/        # Patterns SVG, textures
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── Creations.jsx
│   │   ├── About.jsx
│   │   ├── Gallery.jsx
│   │   └── Contact.jsx
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Lightbox.jsx
│   │   └── AnimatedSection.jsx
│   └── decorative/
│       ├── YarnThread.jsx      # Le fil animé SVG
│       ├── CrochetPattern.jsx  # Motifs de mailles en fond
│       └── TextureOverlay.jsx  # Overlay texture textile
├── hooks/
│   └── useScrollAnimation.js
├── data/
│   └── creations.js     # Données des créations (nom, image, catégorie, prix)
├── styles/
│   └── index.css        # Tailwind + custom CSS (textures, animations)
├── App.jsx
└── main.jsx
```

### Utilisation de Context7 (MCP)

L'Agent 2 doit utiliser le MCP **Context7** pour :
- Consulter la documentation à jour de **Framer Motion** (API motion, useScroll, useInView, AnimatePresence)
- Consulter la documentation **Tailwind CSS v4** si nécessaire
- Consulter la documentation **React** pour les hooks et patterns

Exemple d'utilisation :
```
# Chercher la doc Framer Motion pour les animations au scroll
context7: resolve framer-motion useScroll animation
```

### Performance & SEO

- **Images** : Utiliser le lazy loading natif (`loading="lazy"`), formats WebP si possible
- **Fonts** : Charger via Google Fonts avec `display=swap`
- **Meta tags** : Title "LUNEA Crochet — Créations artisanales en crochet", description, Open Graph
- **Favicon** : Créer un simple favicon avec une pelote de laine ou un crochet en SVG
- **Responsive** : Mobile-first, breakpoints Tailwind standard (sm, md, lg, xl)

### Accessibilité

- Contraste suffisant sur tous les textes
- Alt text descriptif sur toutes les images
- Navigation au clavier fonctionnelle
- Aria-labels sur les éléments interactifs
- `prefers-reduced-motion` : désactiver les animations pour les utilisateurs qui le souhaitent

---

## Contenu Textuel (à adapter par l'Agent 1)

### Hero

> **LUNEA Crochet**
> Créations faites avec amour — Pièces uniques & personnalisées ✨
> *Par Léa Larminach*

### À Propos (placeholder — à remplacer avec le vrai contenu trouvé sur Instagram)

> Passionnée de crochet, je crée chaque pièce à la main avec soin et attention. Chaque création LUNEA est unique, pensée et réalisée avec des matériaux choisis pour leur qualité et leur douceur.
>
> Que ce soit un amigurumi pour un cadeau de naissance, un accessoire pour votre quotidien ou une pièce de décoration pour votre intérieur, je prends le temps d'imaginer et de réaliser des créations qui vous ressemblent.
>
> N'hésitez pas à me contacter pour une commande personnalisée — ensemble, donnons vie à vos idées !

### Contact

> Prenons le temps d'imaginer une création qui vous ressemble

### Footer

> © 2025 Lunea Crochet — Fait avec 🧶 et beaucoup d'amour

---

## Checklist Qualité

Avant de livrer, vérifier :

- [ ] Toutes les photos stock du template ont été remplacées par les vraies créations
- [ ] Aucun texte en anglais ne subsiste ("Corporate Wellness", "FIND YOUR BALANCE", etc.)
- [ ] Les faux témoignages (Sarah Mitchell, Maria Garcia, etc.) ont été supprimés
- [ ] Le numéro US +17364528200 a été supprimé
- [ ] Le lien Etsy pointe vers la vraie boutique de Lunea
- [ ] Le site est responsive et fonctionne sur mobile
- [ ] Les animations respectent `prefers-reduced-motion`
- [ ] Le formulaire de contact fonctionne (au minimum mailto)
- [ ] Les images sont optimisées et chargées en lazy
- [ ] Le fil/motif crochet décoratif est présent et donne une identité visuelle unique
- [ ] Le site se charge en moins de 3 secondes
- [ ] Aucune référence au template Wellbe ou à Framer ne subsiste

---

## Notes Importantes

1. **Ce n'est PAS un site e-commerce** — pas de panier, pas de paiement. C'est une vitrine qui redirige vers Etsy pour l'achat.

2. **L'identité visuelle doit être unique** — pas un template générique. Le visiteur doit immédiatement comprendre qu'il est chez une artisane crochet passionnée.

3. **Privilégier les vraies photos** — même si elles ne sont pas parfaitement professionnelles, l'authenticité prime sur le polish. Le fait-main, ça se voit et c'est une force.

4. **Le site doit raconter une histoire** — du hero à la section contact, il y a un parcours : on découvre les créations, on comprend qui est derrière, on est séduit par la galerie, on a envie de commander.

5. **Livrable** : Un projet React complet, fonctionnel, prêt à être déployé sur Vercel/Netlify.