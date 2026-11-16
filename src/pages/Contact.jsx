import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import SocialIcon from '../components/common/SocialIcon.jsx'
import PageWrapper from '../components/common/PageWrapper.jsx'
import PageHero from '../components/common/PageHero.jsx'
import SectionHeading from '../components/common/SectionHeading.jsx'
import Accordion from '../components/common/Accordion.jsx'
import Img from '../components/common/Img.jsx'
import { Reveal, RevealGroup, RevealItem } from '../components/common/Reveal.jsx'
import ContactForm from '../components/forms/ContactForm.jsx'
import { site, faqs } from '../data/site.js'


export default function Contact() {
  return (
    <PageWrapper title="Contact Us">
      <PageHero
        eyebrow="Contact"
        title={<>Let's Build Something That <span className="text-gradient">Moves Your Business Forward.</span></>}
        text="Tell us about your project. We reply to every enquiry within one business day, usually faster."
      />

      <section className="relative bg-light pb-20 pt-16 text-ink md:pb-28">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          {/* Info */}
          <div className="lg:col-span-4">
            <RevealGroup className="space-y-4" staggerChildren={0.08}>
              {[
                { icon: Mail, label: 'Email us', value: site.email, href: `mailto:${site.email}` },
                { icon: Phone, label: 'Call us', value: site.phone, href: site.phoneHref },
                { icon: MapPin, label: 'Visit us', value: site.address.join(', ') },
                { icon: Clock, label: 'Office hours', value: site.hours },
              ].map((c) => (
                <RevealItem key={c.label} className="group flex items-start gap-4 rounded-2xl bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-25px_rgba(121,87,255,0.5)]">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-violet/10 text-violet transition group-hover:bg-violet group-hover:text-white"><c.icon className="size-5" /></span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-ink/50">{c.label}</p>
                    {c.href ? <a href={c.href} className="mt-1 block font-semibold text-ink transition hover:text-violet">{c.value}</a> : <p className="mt-1 font-semibold text-ink">{c.value}</p>}
                  </div>
                </RevealItem>
              ))}
              <RevealItem className="rounded-2xl bg-navy p-5 text-white">
                <p className="text-xs uppercase tracking-[0.18em] text-lavender">Follow along</p>
                <ul className="mt-3 flex gap-2">
                  {site.socials.map((s) => {
                    return (
                      <li key={s.key}>
                        <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.name} className="grid size-10 place-items-center rounded-full border border-white/15 text-muted transition hover:border-lime hover:text-lime"><SocialIcon name={s.key} /></a>
                      </li>
                    )
                  })}
                </ul>
              </RevealItem>
              <RevealItem className="img-zoom overflow-hidden rounded-2xl">
                <Img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=900&q=80" alt="Modern agency office interior" className="aspect-[4/3] w-full object-cover" />
              </RevealItem>
            </RevealGroup>
          </div>

          {/* Form */}
          <Reveal className="lg:col-span-8" delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="section bg-navy">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Before you write" title={<>Quick answers to <span className="text-lime">common questions.</span></>} />
          </div>
          <Reveal className="lg:col-span-7" delay={0.1}>
            <Accordion items={faqs.slice(0, 4)} dark />
          </Reveal>
        </div>
      </section>
    </PageWrapper>
  )
}
