import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Database, Lightbulb, Target, FileBarChart, Users, TrendingUp } from 'lucide-react'
import SectionHeading from '../common/SectionHeading.jsx'
import Img from '../common/Img.jsx'
import { Reveal } from '../common/Reveal.jsx'
import { cn } from '../../utils/cn.js'

const reasons = [
  { icon: Database, title: 'Data-driven strategies', text: 'Every decision starts with research and ends with a metric. No guesswork, no gut-only calls.', stat: '100%', statLabel: 'of plans built on audience data' },
  { icon: Lightbulb, title: 'Creative thinking', text: 'Ideas that people remember, share and act on. We make performance creative that does not look like performance creative.', stat: '3x', statLabel: 'avg. engagement lift (demo)' },
  { icon: Target, title: 'Performance-focused campaigns', text: 'Structured for learning, optimised weekly and scaled only when the unit economics hold.', stat: '4.8x', statLabel: 'avg. ROAS across accounts (demo)' },
  { icon: FileBarChart, title: 'Transparent reporting', text: 'Live dashboards and plain-English summaries. You always know what is working and what we are fixing.', stat: '24/7', statLabel: 'dashboard access' },
  { icon: Users, title: 'Dedicated experts', text: 'A senior strategist leads every account, supported by specialists in each channel. No juniors learning on your budget.', stat: '8+', statLabel: 'years avg. team experience' },
  { icon: TrendingUp, title: 'Measurable business growth', text: 'We report on revenue, pipeline and brand equity — the metrics your board cares about.', stat: '3.4x', statLabel: 'average client growth (demo)' },
]

export default function WhyChooseUs() {
  const [active, setActive] = useState(0)
  const current = reasons[active]

  return (
    <section className="section bg-light text-ink">
      <div className="container-x">
        <SectionHeading
          dark={false}
          eyebrow="Why Nexora"
          title={<>Not another agency. <span className="text-violet">A growth partner.</span></>}
          text="Hover or tap each reason to see what it actually means for your business."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <ul className="space-y-1 lg:col-span-6" role="list">
            {reasons.map((r, i) => {
              const Icon = r.icon
              const isActive = active === i
              return (
                <Reveal key={r.title} as="li" delay={i * 0.05}>
                  <button
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={cn('group flex w-full items-center gap-5 rounded-2xl px-4 py-4 text-left transition-all duration-300 sm:px-5', isActive ? 'bg-navy text-white' : 'hover:bg-white')}
                    aria-pressed={isActive}
                  >
                    <span className={cn('grid size-11 shrink-0 place-items-center rounded-xl transition-colors', isActive ? 'bg-lime text-navy' : 'bg-violet/10 text-violet')}>
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="flex-1">
                      <span className="block font-heading text-lg font-bold md:text-xl">{r.title}</span>
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.span
                            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="block overflow-hidden text-sm text-muted lg:hidden"
                          >
                            <span className="block pt-1.5">{r.text}</span>
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </span>
                    <span className={cn('font-heading text-sm font-bold', isActive ? 'text-lime' : 'text-ink/30')}>0{i + 1}</span>
                  </button>
                </Reveal>
              )
            })}
          </ul>

          <Reveal className="relative hidden lg:col-span-6 lg:block" delay={0.2}>
            <div className="sticky top-28 overflow-hidden rounded-3xl bg-navy p-8 text-white">
              <Img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" alt="Team reviewing marketing performance together" className="absolute inset-0 size-full object-cover opacity-25" />
              <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/80 to-navy/30" aria-hidden="true" />
              <div className="relative flex min-h-[26rem] flex-col justify-end">
                <AnimatePresence mode="wait">
                  <motion.div key={active} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
                    <p className="font-heading text-7xl font-bold text-lime">{current.stat}</p>
                    <p className="mt-1 text-sm uppercase tracking-[0.18em] text-lavender">{current.statLabel}</p>
                    <h3 className="mt-8 font-heading text-2xl font-bold">{current.title}</h3>
                    <p className="mt-3 max-w-md text-muted">{current.text}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
