export const ease = [0.22, 1, 0.36, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease } },
}

export const stagger = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
})

export const clipReveal = {
  hidden: { clipPath: 'inset(0 0 100% 0)', scale: 1.08 },
  show: { clipPath: 'inset(0 0 0% 0)', scale: 1, transition: { duration: 1.1, ease } },
}

export const viewport = { once: true, margin: '-80px' }
