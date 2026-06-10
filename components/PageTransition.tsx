'use client'

import { motion } from 'framer-motion'

const variants = {
  initial: { opacity: 0, y: 8 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
}

export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div initial="initial" animate="enter" exit="exit" variants={variants}>
      {children}
    </motion.div>
  )
}
