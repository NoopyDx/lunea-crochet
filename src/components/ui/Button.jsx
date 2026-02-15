import { motion } from 'framer-motion'

export default function Button({ children, href, onClick, variant = 'primary', className = '' }) {
  const base = 'inline-block px-8 py-3 rounded-full font-body font-semibold text-sm tracking-wide transition-all duration-300 cursor-pointer'
  const variants = {
    primary: 'bg-dusty-rose text-off-white hover:bg-deep-brown hover:shadow-lg',
    secondary: 'border-2 border-dusty-rose text-dusty-rose hover:bg-dusty-rose hover:text-off-white',
    golden: 'bg-golden text-off-white hover:bg-deep-brown hover:shadow-lg',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  )
}
