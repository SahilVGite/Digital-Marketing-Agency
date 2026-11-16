import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

/** Element targeted by a URL hash. Uses getElementById so hashes like "#1" can't throw. */
function hashTarget(hash) {
  if (!hash || hash === '#') return null
  try {
    return document.getElementById(decodeURIComponent(hash.slice(1)))
  } catch {
    return null // malformed percent-encoding
  }
}

export default function PageWrapper({ children, title }) {
  const { hash } = useLocation()

  useEffect(() => { if (title) document.title = `${title} — Nexora` }, [title])

  // Runs after this page has rendered, so anchors on a freshly loaded page exist.
  useEffect(() => {
    hashTarget(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [hash])

  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.main>
  )
}
