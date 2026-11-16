import { useState } from 'react'
import SectionHeading from '../common/SectionHeading.jsx'
import Button from '../common/Button.jsx'
import { Reveal } from '../common/Reveal.jsx'
import ProjectCard from '../portfolio/ProjectCard.jsx'
import ProjectModal from '../portfolio/ProjectModal.jsx'
import { projects } from '../../data/projects.js'

export default function FeaturedWork() {
  const featured = projects.filter((p) => p.featured).slice(0, 3)
  const [open, setOpen] = useState(null)

  return (
    <section className="section relative overflow-hidden bg-navy">
      <div className="absolute right-0 top-0 size-[30rem] rounded-full bg-violet/10 blur-[140px]" aria-hidden="true" />
      <div className="container-x relative">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="Selected work" title={<>Results that speak <span className="text-gradient">louder than pitches.</span></>} text="A few recent projects. Demo case studies with illustrative outcomes." />
          <Reveal delay={0.2}><Button to="/work" variant="outline">View All Projects</Button></Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <ProjectCard project={featured[0]} onOpen={setOpen} large aspect="aspect-[4/3] lg:aspect-[16/11]" className="lg:col-span-7" layout={false} />
          <div className="grid gap-6 lg:col-span-5 lg:pt-16">
            <ProjectCard project={featured[1]} onOpen={setOpen} aspect="aspect-[4/3] lg:aspect-[16/10]" layout={false} />
            <ProjectCard project={featured[2]} onOpen={setOpen} aspect="aspect-[4/3] lg:aspect-[16/10]" layout={false} />
          </div>
        </div>
      </div>
      <ProjectModal project={open} onClose={() => setOpen(null)} />
    </section>
  )
}
