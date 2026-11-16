import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../../utils/motion.js'

/** Compact hero for inner pages. */
export default function PageHero({ eyebrow, title, text, children }) {
  return (
    <section className="mesh-dark noise relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="grid-lines absolute inset-0" aria-hidden="true" />
      <div className="absolute -right-32 top-10 size-[28rem] rounded-full bg-violet/30 blur-[120px] animate-pulse-glow" aria-hidden="true" />
      <div className="absolute -left-20 bottom-0 size-72 rounded-full bg-lime/15 blur-[100px]" aria-hidden="true" />
      <motion.div className="container-x relative" initial="hidden" animate="show" variants={stagger(0.12)}>
        {eyebrow && (
          <motion.span variants={fadeUp} className="eyebrow mb-5 text-lime">
            <span className="h-px w-6 bg-lime" />{eyebrow}
          </motion.span>
        )}
        <motion.h1 variants={fadeUp} className="heading-display max-w-5xl text-white">{title}</motion.h1>
        {text && <motion.p variants={fadeUp} className="lead mt-6 max-w-2xl text-muted">{text}</motion.p>}
        {children && <motion.div variants={fadeUp} className="mt-10">{children}</motion.div>}
      </motion.div>
    </section>
  )
}
