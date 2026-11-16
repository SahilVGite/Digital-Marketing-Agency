import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { RevealItem } from '../common/Reveal.jsx'
import { cn } from '../../utils/cn.js'

// On hover the accent fill covers the card, so text colours are chosen per accent for contrast.
const accents = {
  violet: {
    fill: 'bg-violet',
    glow: 'group-hover:shadow-[0_30px_60px_-30px_rgba(121,87,255,0.8)]',
    chip: 'text-white group-hover:bg-navy',
    text: 'group-hover:text-white',
    subtext: 'group-hover:text-white/85',
  },
  lime: {
    fill: 'bg-lime',
    glow: 'group-hover:shadow-[0_30px_60px_-30px_rgba(199,243,107,0.6)]',
    chip: 'text-navy group-hover:bg-navy group-hover:text-lime',
    text: 'group-hover:text-navy',
    subtext: 'group-hover:text-navy/80',
  },
  lavender: {
    fill: 'bg-lavender',
    glow: 'group-hover:shadow-[0_30px_60px_-30px_rgba(185,169,255,0.7)]',
    chip: 'text-navy group-hover:bg-navy group-hover:text-lavender',
    text: 'group-hover:text-navy',
    subtext: 'group-hover:text-navy/80',
  },
}

export default function ServiceCard({ service }) {
  const Icon = service.icon
  const a = accents[service.accent] || accents.violet
  return (
    <RevealItem>
      <Link
        to={`/services#${service.id}`}
        className={cn('group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-midnight/60 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/20', a.glow)}
      >
        {/* Accent fill that expands from the corner to cover the whole card on hover */}
        <span className={cn('absolute -right-10 -top-10 size-24 rounded-full opacity-20 transition-[scale,opacity] duration-700 ease-out group-hover:scale-[14] group-hover:opacity-100', a.fill)} aria-hidden="true" />

        <div className="relative flex items-start justify-between">
          <span className={cn('grid size-12 place-items-center rounded-2xl transition-all duration-500 group-hover:rotate-[-8deg] group-hover:scale-110', a.fill, a.chip)}>
            <Icon className="size-5" aria-hidden="true" />
          </span>
          <span className={cn('font-heading text-sm font-bold text-muted transition-colors duration-500', a.text)}>{service.number}</span>
        </div>

        <h3 className={cn('relative mt-8 font-heading text-xl font-bold text-white transition-colors duration-500 md:text-2xl', a.text)}>{service.title}</h3>
        <p className={cn('relative mt-3 flex-1 leading-relaxed text-muted transition-colors duration-500', a.subtext)}>{service.description}</p>

        <span className={cn('relative mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors duration-500', a.text)}>
          Learn more
          <span className="grid size-7 place-items-center rounded-full border border-white/20 transition-all duration-500 group-hover:border-navy/30 group-hover:bg-navy group-hover:text-white">
            <ArrowUpRight className="size-3.5 transition-transform duration-500 group-hover:rotate-45" />
          </span>
        </span>
      </Link>
    </RevealItem>
  )
}
