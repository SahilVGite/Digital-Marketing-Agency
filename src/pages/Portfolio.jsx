import { useMemo, useState } from 'react'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import PageWrapper from '../components/common/PageWrapper.jsx'
import PageHero from '../components/common/PageHero.jsx'
import SectionHeading from '../components/common/SectionHeading.jsx'
import Button from '../components/common/Button.jsx'
import { Reveal, RevealGroup, RevealItem } from '../components/common/Reveal.jsx'
import ProjectCard from '../components/portfolio/ProjectCard.jsx'
import ProjectModal from '../components/portfolio/ProjectModal.jsx'
import PortfolioFilter from '../components/portfolio/PortfolioFilter.jsx'
import Testimonials from '../components/sections/Testimonials.jsx'
import FinalCTA from '../components/sections/FinalCTA.jsx'
import { projects, categories } from '../data/projects.js'

const highlights = [
  { value: '10', label: 'Demo case studies' },
  { value: '6', label: 'Industries represented' },
  { value: '5', label: 'Service categories' },
]

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const [open, setOpen] = useState(null)

  const counts = useMemo(() => Object.fromEntries(categories.map((c) => [c, c === 'All' ? projects.length : projects.filter((p) => p.category === c).length])), [])
  const visible = useMemo(() => (active === 'All' ? projects : projects.filter((p) => p.category === active)), [active])
  const featured = projects.filter((p) => p.featured)

  return (
    <PageWrapper title="Our Work">
      <PageHero
        eyebrow="Our work"
        title={<>Work that moved <span className="text-gradient">the numbers.</span></>}
        text="A selection of projects across SEO, social, paid media, branding and web. All case studies are fictional demos with illustrative results."
      >
        <ul className="flex flex-wrap gap-8">
          {highlights.map((h) => (
            <li key={h.label}>
              <p className="font-heading text-4xl font-bold text-lime">{h.value}</p>
              <p className="text-sm text-muted">{h.label}</p>
            </li>
          ))}
        </ul>
      </PageHero>

      {/* Featured */}
      <section className="section bg-navy">
        <div className="container-x">
          <SectionHeading eyebrow="Featured projects" title={<>Three projects we <span className="text-lime">keep coming back to.</span></>} />
          <div className="mt-12 grid gap-6 lg:grid-cols-12">
            <ProjectCard project={featured[0]} onOpen={setOpen} large aspect="aspect-[4/3] lg:aspect-[16/10]" className="lg:col-span-8" layout={false} />
            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1">
              <ProjectCard project={featured[1]} onOpen={setOpen} aspect="aspect-[4/3]" layout={false} />
              <ProjectCard project={featured[2]} onOpen={setOpen} aspect="aspect-[4/3]" layout={false} />
            </div>
          </div>
        </div>
      </section>

      {/* Grid with filters */}
      <section className="section border-t border-line bg-midnight">
        <div className="container-x">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading eyebrow="All projects" title="Browse by category." />
            <Reveal delay={0.1}><PortfolioFilter categories={categories} active={active} onChange={setActive} counts={counts} /></Reveal>
          </div>

          <LayoutGroup>
            <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {visible.map((p) => <ProjectCard key={p.id} project={p} onOpen={setOpen} />)}
              </AnimatePresence>
            </motion.div>
          </LayoutGroup>

          {visible.length === 0 && <p className="mt-12 text-center text-muted">No projects in this category yet.</p>}

          <RevealGroup className="mt-16 grid gap-4 rounded-3xl border border-white/10 bg-navy p-8 md:grid-cols-[1fr_auto] md:items-center">
            <RevealItem>
              <h3 className="font-heading text-2xl font-bold text-white">Want results like these?</h3>
              <p className="mt-2 text-muted">Every project starts with a free strategy call. No commitments, just useful ideas.</p>
            </RevealItem>
            <RevealItem><Button to="/contact" variant="lime">Book a strategy call</Button></RevealItem>
          </RevealGroup>
        </div>
      </section>

      <Testimonials />
      <FinalCTA />
      <ProjectModal project={open} onClose={() => setOpen(null)} />
    </PageWrapper>
  )
}
