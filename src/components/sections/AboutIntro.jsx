import { motion } from 'framer-motion'
import Button from '../common/Button.jsx'
import Img from '../common/Img.jsx'
import { Reveal } from '../common/Reveal.jsx'
import { clipReveal, viewport } from '../../utils/motion.js'

export default function AboutIntro() {
  return (
    <section className="section bg-light text-ink">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5 lg:pt-10">
            <Reveal>
              <span className="eyebrow mb-4 text-violet"><span className="h-px w-6 bg-violet" />Who we are</span>
              <h2 className="heading-1">
                A creative studio <span className="text-violet">obsessed</span> with growth that shows up in your numbers.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead mt-6 text-ink/70">
                Nexora is a team of strategists, designers, writers and media buyers who believe great creative and hard performance data belong in the same room. We help brands earn attention and turn it into revenue.
              </p>
              <ul className="mt-8 space-y-3 text-ink/80">
                {['Full-funnel thinking from brand to conversion', 'Senior team on every account, no hand-offs', 'Transparent reporting tied to business outcomes'].map((t) => (
                  <li key={t} className="flex items-start gap-3"><span className="mt-2 size-2 shrink-0 rounded-full bg-lime ring-4 ring-lime/30" />{t}</li>
                ))}
              </ul>
              <Button to="/about" className="mt-10">Discover Our Story</Button>
            </Reveal>
          </div>

          <div className="relative lg:col-span-7">
            <div className="grid grid-cols-12 gap-4">
              <motion.div className="col-span-8 overflow-hidden rounded-3xl" initial="hidden" whileInView="show" viewport={viewport} variants={clipReveal}>
                <Img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" alt="Agency team collaborating around a laptop in a bright studio" className="aspect-[4/3] w-full object-cover" />
              </motion.div>
              <motion.div className="col-span-4 self-end overflow-hidden rounded-3xl" initial="hidden" whileInView="show" viewport={viewport} variants={{ ...clipReveal, show: { ...clipReveal.show, transition: { ...clipReveal.show.transition, delay: 0.2 } } }}>
                <Img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80" alt="Creative team brainstorming ideas in a meeting" className="aspect-[3/4] w-full object-cover" />
              </motion.div>
            </div>
            <Reveal delay={0.4} className="absolute -bottom-6 left-4 rounded-2xl bg-navy p-5 text-white shadow-2xl sm:left-10 md:p-6">
              <p className="font-heading text-4xl font-bold text-lime">8+</p>
              <p className="mt-1 text-sm text-muted">years of helping brands grow<br />(illustrative)</p>
            </Reveal>
            <div className="absolute -right-6 -top-6 -z-0 size-40 rounded-full bg-violet/15 blur-3xl" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
