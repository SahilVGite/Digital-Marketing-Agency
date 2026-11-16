import { motion } from 'framer-motion'
import { Compass, Eye, Sparkles } from 'lucide-react'
import SocialIcon from '../components/common/SocialIcon.jsx'
import PageWrapper from '../components/common/PageWrapper.jsx'
import PageHero from '../components/common/PageHero.jsx'
import SectionHeading from '../components/common/SectionHeading.jsx'
import Img from '../components/common/Img.jsx'
import Button from '../components/common/Button.jsx'
import { Reveal, RevealGroup, RevealItem } from '../components/common/Reveal.jsx'
import Stats from '../components/sections/Stats.jsx'
import Process from '../components/sections/Process.jsx'
import FinalCTA from '../components/sections/FinalCTA.jsx'
import { team, values } from '../data/team.js'
import { clipReveal, viewport } from '../utils/motion.js'

const reasons = [
  'Senior strategists on every account',
  'Creative and performance under one roof',
  'Weekly reporting tied to revenue',
  'Fast, honest communication',
  'Flexible engagements that scale with you',
  'A team that genuinely cares about your growth',
]

export default function About() {
  return (
    <PageWrapper title="About Us">
      <PageHero
        eyebrow="About Nexora"
        title={<>We make brands <span className="text-gradient">worth paying attention to.</span></>}
        text="Nexora is a creative digital marketing agency based in Bengaluru. We combine bold ideas with rigorous performance thinking to help ambitious brands grow."
      >
        <Button to="/contact" variant="lime" size="lg">Work with us</Button>
      </PageHero>

      {/* Story */}
      <section className="section bg-light text-ink">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading dark={false} eyebrow="Our story" title={<>Started in a co-working space. <span className="text-violet">Built on results.</span></>} />
            <Reveal delay={0.1}>
              <p className="mt-6 leading-relaxed text-ink/70">
                Nexora began in 2017 when three friends — a designer, a media buyer and a copywriter — got tired of watching agencies ship beautiful work that did not move the needle, and performance teams ship ugly ads that did.
              </p>
              <p className="mt-4 leading-relaxed text-ink/70">
                We believed the best growth happens when creative ambition and analytical rigour share a desk. Nearly a decade later, that is still the idea at the centre of everything we do, from brand launches to eight-figure media budgets.
              </p>
              <p className="mt-4 text-xs text-ink/50">Demo agency narrative for template purposes.</p>
            </Reveal>
          </div>
          <div className="relative lg:col-span-7">
            <motion.div className="overflow-hidden rounded-3xl" initial="hidden" whileInView="show" viewport={viewport} variants={clipReveal}>
              <Img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=80" alt="Agency team members working together at a shared table" className="aspect-[16/11] w-full object-cover" />
            </motion.div>
            <Reveal delay={0.3} className="absolute -bottom-8 -left-2 w-56 rounded-2xl bg-violet p-5 text-white shadow-2xl sm:left-8">
              <p className="font-heading text-sm uppercase tracking-[0.18em] text-lavender">Founded</p>
              <p className="font-heading text-4xl font-bold">2017</p>
              <p className="mt-1 text-sm text-white/80">Bengaluru, India</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section relative overflow-hidden bg-navy">
        <div className="absolute right-0 top-0 size-96 rounded-full bg-violet/20 blur-[120px]" aria-hidden="true" />
        <div className="container-x relative">
          <RevealGroup className="grid gap-6 md:grid-cols-2" staggerChildren={0.15}>
            {[
              { icon: Compass, label: 'Our mission', title: 'Make growth marketing creative again.', text: 'To help ambitious brands win attention and turn it into sustainable business growth, through work that is as effective as it is beautiful.' },
              { icon: Eye, label: 'Our vision', title: 'The partner brands call first.', text: 'To be the agency founders and marketing leaders trust when the stakes are high — the first call for launches, pivots and scale.' },
            ].map((c) => (
              <RevealItem key={c.label} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-midnight/60 p-8 md:p-10">
                <span className="absolute -right-10 -top-10 size-32 rounded-full bg-violet/30 blur-2xl transition-transform duration-700 group-hover:scale-150" aria-hidden="true" />
                <c.icon className="size-8 text-lime" aria-hidden="true" />
                <p className="mt-6 text-xs uppercase tracking-[0.2em] text-lavender">{c.label}</p>
                <h3 className="heading-2 mt-2 text-white">{c.title}</h3>
                <p className="mt-4 text-muted">{c.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          <div className="mt-20">
            <SectionHeading eyebrow="Core values" title={<>What we <span className="text-lime">stand for.</span></>} />
            <RevealGroup className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4" staggerChildren={0.08}>
              {values.map((v, i) => (
                <RevealItem key={v.title} className="group bg-navy p-7 transition-colors hover:bg-midnight">
                  <p className="font-heading text-sm font-bold text-violet transition-colors group-hover:text-lime">0{i + 1}</p>
                  <h3 className="mt-6 font-heading text-xl font-bold text-white">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{v.text}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-light text-ink">
        <div className="container-x">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading dark={false} eyebrow="The team" title={<>The people behind <span className="text-violet">the results.</span></>} text="A senior, multidisciplinary crew. Demo team profiles for template purposes." />
          </div>
          <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerChildren={0.1}>
            {team.map((m) => (
              <RevealItem key={m.name} className="group">
                <div className="img-zoom relative overflow-hidden rounded-3xl bg-midnight">
                  <Img src={m.image} alt={`Portrait of ${m.name}, ${m.role}`} className="aspect-[3/4] w-full object-cover" />
                  <div className="absolute inset-0 bg-linear-to-t from-navy/90 via-navy/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
                  <div className="absolute inset-x-0 bottom-0 translate-y-4 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm text-white/90">{m.bio}</p>
                    <a href={m.linkedin} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-lime" aria-label={`${m.name} on LinkedIn`}>
                      <SocialIcon name="linkedin" /> LinkedIn
                    </a>
                  </div>
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold">{m.name}</h3>
                <p className="text-sm text-ink/60">{m.role}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <Stats className="bg-navy" />

      <Process />

      {/* Why brands choose us */}
      <section className="section relative overflow-hidden bg-midnight">
        <div className="absolute -left-20 bottom-0 size-80 rounded-full bg-lime/10 blur-[100px]" aria-hidden="true" />
        <div className="container-x relative grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Why brands choose us" title={<>Big-agency thinking. <span className="text-lime">Studio-level care.</span></>} text="We stay deliberately small so every client gets our best people and our full attention." />
            <Reveal delay={0.2}><Button to="/contact" variant="lime" className="mt-8">Let's talk growth</Button></Reveal>
          </div>
          <RevealGroup className="grid gap-3 sm:grid-cols-2 lg:col-span-7" staggerChildren={0.07}>
            {reasons.map((r) => (
              <RevealItem key={r} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-navy/60 px-5 py-4 transition-colors hover:border-lime/40">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-lime/15 text-lime"><Sparkles className="size-4" /></span>
                <span className="font-medium text-white">{r}</span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <FinalCTA title="Let's build something your competitors will envy." cta="Start a Conversation" />
    </PageWrapper>
  )
}
