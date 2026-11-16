import SectionHeading from '../common/SectionHeading.jsx'
import Button from '../common/Button.jsx'
import { RevealGroup, Reveal } from '../common/Reveal.jsx'
import ServiceCard from '../services/ServiceCard.jsx'
import { services } from '../../data/services.js'

export default function ServicesOverview() {
  return (
    <section className="section relative overflow-hidden bg-navy">
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-linear-to-r from-transparent via-violet to-transparent" aria-hidden="true" />
      <div className="absolute -left-40 top-1/3 size-96 rounded-full bg-violet/15 blur-[120px]" aria-hidden="true" />
      <div className="container-x relative">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="What we do"
            title={<>Six ways we help brands <span className="text-gradient">grow faster.</span></>}
            text="Every service is designed to work alone or as part of a full-funnel growth engine."
          />
          <Reveal delay={0.2}><Button to="/services" variant="outline">All services</Button></Reveal>
        </div>
        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" staggerChildren={0.08}>
          {services.map((s) => <ServiceCard key={s.id} service={s} />)}
        </RevealGroup>
      </div>
    </section>
  )
}
