import PageWrapper from '../components/common/PageWrapper.jsx'
import PageHero from '../components/common/PageHero.jsx'
import SectionHeading from '../components/common/SectionHeading.jsx'
import Accordion from '../components/common/Accordion.jsx'
import Button from '../components/common/Button.jsx'
import { Reveal, RevealGroup } from '../components/common/Reveal.jsx'
import ServiceCard from '../components/services/ServiceCard.jsx'
import ServiceTabs from '../components/services/ServiceTabs.jsx'
import Process from '../components/sections/Process.jsx'
import FinalCTA from '../components/sections/FinalCTA.jsx'
import { services } from '../data/services.js'
import { faqs } from '../data/site.js'

export default function Services() {
  return (
    <PageWrapper title="Services">
      <PageHero
        eyebrow="Our services"
        title={<>Everything you need to <span className="text-gradient">grow online.</span></>}
        text="Six specialist services, one integrated team. Pick what you need now and expand as you scale."
      >
        <div className="flex flex-wrap gap-3">
          <Button href="#explore" variant="lime" size="lg">Explore services</Button>
          <Button to="/contact" variant="outline" size="lg">Request a strategy</Button>
        </div>
      </PageHero>

      <section className="section relative bg-navy">
        <div className="container-x">
          <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" staggerChildren={0.08}>
            {services.map((s) => <ServiceCard key={s.id} service={s} />)}
          </RevealGroup>
        </div>
      </section>

      <section id="explore" className="section scroll-mt-20 bg-light text-ink">
        <div className="container-x">
          <SectionHeading dark={false} eyebrow="Service details" title={<>Explore each service <span className="text-violet">in depth.</span></>} text="Select a service to see what is included, the benefits and the exact deliverables." />
          <div className="mt-12">
            <ServiceTabs />
          </div>
        </div>
      </section>

      <Process />

      <section className="section bg-navy">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="FAQ" title={<>Questions we <span className="text-lime">hear a lot.</span></>} text="Something else on your mind? Send us a note and we will answer within one business day." />
            <Reveal delay={0.2}><Button to="/contact" variant="outline" className="mt-8">Ask a question</Button></Reveal>
          </div>
          <Reveal className="lg:col-span-7" delay={0.1}>
            <Accordion items={faqs} dark />
          </Reveal>
        </div>
      </section>

      <FinalCTA title="Need a custom marketing strategy?" text="Tell us your goals and budget and we will put together a tailored plan, free of charge." cta="Request a Custom Strategy" />
    </PageWrapper>
  )
}
