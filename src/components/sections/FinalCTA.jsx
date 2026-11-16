import { motion, useReducedMotion } from 'framer-motion'
import Button from '../common/Button.jsx'
import Marquee from '../common/Marquee.jsx'
import { Reveal } from '../common/Reveal.jsx'
import { site } from '../../data/site.js'

const tape = ['Strategy', 'Creative', 'Performance', 'Growth', 'Brand', 'Content', 'SEO', 'Paid Media']

export default function FinalCTA({ title = 'Ready to Make Your Brand Impossible to Ignore?', text = 'Tell us about your goals. We will come back within one business day with ideas, not a sales pitch.', cta = 'Start Your Project' }) {
  const reduce = useReducedMotion()
  return (
    <section className="relative overflow-hidden bg-navy">
      <Marquee className="border-y border-white/10 py-4">
        {tape.map((w, i) => (
          <span key={`${w}-${i}`} className="mx-6 flex items-center gap-6 font-heading text-lg font-semibold uppercase tracking-[0.2em] text-muted">
            {w} <span className="size-2 rounded-full bg-lime" />
          </span>
        ))}
      </Marquee>

      <div className="mesh-dark noise relative">
        <div className="grid-lines absolute inset-0" aria-hidden="true" />
        <motion.div
          className="absolute left-1/2 top-1/2 size-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet/30"
          animate={reduce ? undefined : { scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        />
        <motion.div
          className="absolute left-1/2 top-1/2 size-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-lime/20"
          animate={reduce ? undefined : { scale: [1.1, 0.95, 1.1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        />
        <div className="absolute left-1/2 top-1/2 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/30 blur-[120px]" aria-hidden="true" />

        <div className="container-x relative py-28 text-center md:py-40">
          <Reveal>
            <h2 className="heading-display mx-auto max-w-4xl text-white">{title}</h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="lead mx-auto mt-6 max-w-xl text-muted">{text}</p>
          </Reveal>
          <Reveal delay={0.3} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button to="/contact" variant="lime" size="lg">{cta}</Button>
            <Button href={`mailto:${site.email}`} variant="outline" size="lg" arrow={false}>{site.email}</Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
