import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import SocialIcon from '../common/SocialIcon.jsx'
import Logo from '../common/Logo.jsx'
import NewsletterForm from '../forms/NewsletterForm.jsx'
import { navLinks, site } from '../../data/site.js'
import { services } from '../../data/services.js'


const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-navy">
      <div className="absolute -bottom-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-violet/15 blur-[140px]" aria-hidden="true" />
      <div className="container-x relative py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-sm text-muted">
              A creative digital marketing agency helping ambitious brands turn attention into growth through strategy, creativity and performance.
            </p>
            <ul className="mt-6 flex gap-3">
              {site.socials.map((s) => {
                return (
                  <li key={s.key}>
                    <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.name} className="grid size-10 place-items-center rounded-full border border-white/10 text-muted transition hover:-translate-y-0.5 hover:border-lime hover:text-lime">
                      <SocialIcon name={s.key} />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Navigation</h3>
              <ul className="mt-5 space-y-3">
                {navLinks.map((l) => (
                  <li key={l.to}><Link to={l.to} className="link-underline text-muted transition hover:text-white">{l.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Services</h3>
              <ul className="mt-5 space-y-3">
                {services.map((s) => (
                  <li key={s.id}><Link to={`/services#${s.id}`} className="link-underline text-muted transition hover:text-white">{s.short}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Contact</h3>
              <ul className="mt-5 space-y-3 text-muted">
                <li><a href={`mailto:${site.email}`} className="flex items-start gap-2.5 transition hover:text-white"><Mail className="mt-0.5 size-4 shrink-0 text-lime" />{site.email}</a></li>
                <li><a href={site.phoneHref} className="flex items-start gap-2.5 transition hover:text-white"><Phone className="mt-0.5 size-4 shrink-0 text-lime" />{site.phone}</a></li>
                <li className="flex items-start gap-2.5"><MapPin className="mt-0.5 size-4 shrink-0 text-lime" /><span>{site.address.join(', ')}</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-8 rounded-3xl border border-white/10 bg-midnight/60 p-6 md:grid-cols-2 md:items-center md:p-8">
          <div>
            <h3 className="font-heading text-xl font-bold text-white">Growth notes, twice a month.</h3>
            <p className="mt-1.5 text-sm text-muted">Practical marketing insights, no fluff. Unsubscribe anytime.</p>
          </div>
          <NewsletterForm />
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {YEAR} {site.name}. All rights reserved. Demo template with fictional content.</p>
          <div className="flex gap-6">
            <a href="#" className="transition hover:text-white">Privacy Policy</a>
            <a href="#" className="transition hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
