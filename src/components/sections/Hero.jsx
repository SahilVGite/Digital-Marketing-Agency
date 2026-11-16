import { Fragment } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { TrendingUp, MousePointerClick, Sparkles, BarChart3 } from 'lucide-react'
import Button from '../common/Button.jsx'
import { ease } from '../../utils/motion.js'

const words = ['Turn', 'Digital', 'Attention', 'Into', 'Real', 'Business', 'Growth.']

const wordVariants = {
  hidden: { opacity: 0, y: '60%', rotate: 3 },
  show: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.9, ease } },
}

function FloatCard({ className, delay = 0, children }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay, ease }}
      className={className}
    >
      <div className={reduce ? '' : 'animate-float'} style={{ animationDelay: `${delay * 2}s` }}>
        {children}
      </div>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section className="mesh-dark noise relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 lg:min-h-screen lg:flex lg:items-center">
      <div className="grid-lines absolute inset-0" aria-hidden="true" />

      {/* Glow orbs */}
      <div className="absolute -left-40 top-20 size-[32rem] rounded-full bg-violet/30 blur-[140px] animate-pulse-glow" aria-hidden="true" />
      <div className="absolute -right-32 bottom-0 size-[26rem] rounded-full bg-lime/15 blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }} aria-hidden="true" />

      {/* Rotating ring */}
      <div className="pointer-events-none absolute -right-40 top-1/2 hidden size-[40rem] -translate-y-1/2 rounded-full border border-white/5 lg:block animate-spin-slow" aria-hidden="true">
        <span className="absolute left-1/2 top-0 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime shadow-[0_0_24px_#C7F36B]" />
      </div>
      <div className="pointer-events-none absolute -right-20 top-1/2 hidden size-[28rem] -translate-y-1/2 rounded-full border border-dashed border-lavender/15 lg:block" aria-hidden="true" />

      <div className="container-x relative">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-lavender"
            >
              <span className="relative flex size-2"><span className="absolute inline-flex size-full animate-ping rounded-full bg-lime opacity-75" /><span className="relative inline-flex size-2 rounded-full bg-lime" /></span>
              Growth-focused digital agency
            </motion.span>

            <motion.h1
              className="heading-display mt-7 text-white"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } }}
              aria-label="Turn Digital Attention Into Real Business Growth."
            >
              {words.map((w, i) => (
                <Fragment key={w}>
                  {/* Bottom padding + matching negative margin: room for descenders (the "g") inside the
                      overflow mask without changing the line spacing. */}
                  <span className="-mb-[0.15em] inline-block overflow-hidden pr-[0.25em] pb-[0.15em] align-top">
                    <motion.span variants={wordVariants} className={`inline-block ${w === 'Attention' ? 'text-gradient' : ''} ${w === 'Growth.' ? 'text-lime' : ''}`} aria-hidden="true">
                      {w}
                    </motion.span>
                  </span>
                  {/* Outside the inline-block word, or it only adds an empty line inside it. Only md: there the
                      heading spans the full width; from lg it sits in a narrower column and wraps naturally. */}
                  {i === 2 && <br className="hidden md:block lg:hidden" />}
                </Fragment>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease }}
              className="lead mt-7 max-w-xl text-muted"
            >
              We build powerful digital experiences, creative campaigns, and growth strategies that help ambitious brands stand out and scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85, ease }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Button to="/contact" variant="lime" size="lg">Start a Project</Button>
              <Button to="/work" variant="outline" size="lg">Explore Our Work</Button>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted"
            >
              <li className="flex items-center gap-2"><Sparkles className="size-4 text-lime" /> Strategy + Creative + Performance</li>
              <li className="flex items-center gap-2"><TrendingUp className="size-4 text-lime" /> 140+ brands scaled (demo stat)</li>
            </motion.ul>
          </div>

          {/* Visual composition */}
          <div className="relative mx-auto h-[26rem] w-full max-w-md sm:h-[30rem] lg:col-span-5 lg:h-[34rem] lg:max-w-none">
            {/* Main analytics card */}
            <FloatCard delay={0.3} className="absolute left-1/2 top-1/2 w-[82%] -translate-x-1/2 -translate-y-1/2 sm:w-[78%]">
              <div className="glass rounded-3xl p-5 shadow-[0_30px_80px_-30px_rgba(121,87,255,0.6)]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-muted">Campaign revenue</p>
                    <p className="mt-1 font-heading text-3xl font-bold text-white">₹48.2L</p>
                  </div>
                  <span className="rounded-full bg-lime/15 px-2.5 py-1 text-xs font-semibold text-lime">+212%</span>
                </div>
                <svg viewBox="0 0 300 120" className="mt-4 w-full" aria-hidden="true">
                  <defs>
                    <linearGradient id="heroArea" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#7957FF" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#7957FF" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M0 100 C 40 95, 60 80, 90 78 S 140 60, 170 50 S 230 40, 260 20 L 300 10 L 300 120 L 0 120 Z"
                    fill="url(#heroArea)"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 1 }}
                  />
                  <motion.path
                    d="M0 100 C 40 95, 60 80, 90 78 S 140 60, 170 50 S 230 40, 260 20 L 300 10"
                    fill="none" stroke="#C7F36B" strokeWidth="3" strokeLinecap="round"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1, duration: 1.6, ease }}
                  />
                  <motion.circle cx="300" cy="10" r="5" fill="#C7F36B" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.5 }} />
                </svg>
                <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                  {[['ROAS', '4.8x'], ['CPA', '-37%'], ['CTR', '3.1%']].map(([k, v]) => (
                    <div key={k} className="rounded-xl bg-white/5 py-2">
                      <p className="text-[10px] uppercase tracking-wider text-muted">{k}</p>
                      <p className="font-heading text-sm font-bold text-white">{v}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FloatCard>

            {/* Top-left small card */}
            <FloatCard delay={0.6} className="absolute left-0 top-4 w-44 sm:-left-4">
              <div className="glass rounded-2xl p-4">
                <div className="flex items-center gap-2">
                  <span className="grid size-8 place-items-center rounded-lg bg-violet"><MousePointerClick className="size-4 text-white" /></span>
                  <p className="text-xs text-muted">Conversions</p>
                </div>
                <p className="mt-2 font-heading text-2xl font-bold text-white">12,480</p>
                <div className="mt-2 flex h-10 items-end gap-1">
                  {[30, 50, 40, 70, 60, 90, 100].map((h, i) => (
                    <motion.span key={i} className="w-2 rounded-sm bg-lavender/80" initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: 1.2 + i * 0.08, duration: 0.6, ease }} />
                  ))}
                </div>
              </div>
            </FloatCard>

            {/* Bottom-right card */}
            <FloatCard delay={0.9} className="absolute bottom-2 right-0 w-48 sm:-right-4">
              <div className="rounded-2xl bg-lime p-4 text-navy shadow-[0_20px_50px_-20px_rgba(199,243,107,0.6)]">
                <div className="flex items-center justify-between">
                  <BarChart3 className="size-5" />
                  <span className="text-[10px] font-semibold uppercase tracking-wider">Organic</span>
                </div>
                <p className="mt-2 font-heading text-2xl font-bold">+340%</p>
                <p className="text-xs font-medium opacity-70">search traffic in 6 months</p>
              </div>
            </FloatCard>

            {/* Decorative shapes */}
            <motion.div
              className="absolute -top-6 right-6 size-24 rounded-full border-[10px] border-violet/60 sm:right-10"
              initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2, duration: 0.8, ease }}
              aria-hidden="true"
            />
            <motion.div
              className="absolute bottom-10 left-2 size-14 rotate-12 rounded-2xl bg-linear-to-br from-lavender to-violet opacity-80 sm:left-0"
              initial={{ opacity: 0, rotate: -40 }} animate={{ opacity: 0.8, rotate: 12 }} transition={{ delay: 1.4, duration: 0.8, ease }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-muted lg:flex"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
        aria-hidden="true"
      >
        Scroll
        <span className="h-10 w-px overflow-hidden bg-white/10"><motion.span className="block h-1/2 w-full bg-lime" animate={{ y: ['-100%', '200%'] }} transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }} /></span>
      </motion.div>
    </section>
  )
}
