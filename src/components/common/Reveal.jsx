import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '../../utils/motion.js'

/** Fade-and-slide reveal when the element scrolls into view. */
export function Reveal({ children, className, delay = 0, as = 'div', ...rest }) {
  const Tag = motion[as] || motion.div
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={{ ...fadeUp, show: { ...fadeUp.show, transition: { ...fadeUp.show.transition, delay } } }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/** Wrap a list of <RevealItem> to stagger their entrance. */
export function RevealGroup({ children, className, staggerChildren = 0.1, delayChildren = 0, as = 'div', ...rest }) {
  const Tag = motion[as] || motion.div
  return (
    <Tag className={className} initial="hidden" whileInView="show" viewport={viewport} variants={stagger(staggerChildren, delayChildren)} {...rest}>
      {children}
    </Tag>
  )
}

export function RevealItem({ children, className, as = 'div', ...rest }) {
  const Tag = motion[as] || motion.div
  return (
    <Tag className={className} variants={fadeUp} {...rest}>
      {children}
    </Tag>
  )
}
