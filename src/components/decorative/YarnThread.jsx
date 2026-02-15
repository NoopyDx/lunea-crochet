import { motion, useScroll, useTransform } from 'framer-motion'

export default function YarnThread() {
  const { scrollYProgress } = useScroll()
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 hidden lg:block">
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1440 5000"
        fill="none"
        preserveAspectRatio="xMidYMin slice"
      >
        <motion.path
          d="M -20 0
             C 200 200, 400 100, 350 400
             C 300 700, 600 600, 500 900
             C 400 1200, 700 1100, 650 1400
             C 600 1700, 900 1600, 850 1900
             C 800 2200, 1100 2100, 1050 2400
             C 1000 2700, 1300 2600, 1250 2900
             C 1200 3200, 900 3400, 1000 3700
             C 1100 4000, 800 4200, 900 4500
             C 1000 4800, 1200 4900, 1460 5000"
          stroke="#C4A08A"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          style={{ pathLength }}
          opacity={0.15}
        />
      </svg>
    </div>
  )
}
