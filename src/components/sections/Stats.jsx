import { useCountUp } from '../../hooks/useCountUp.js'
import { RevealGroup, RevealItem } from '../common/Reveal.jsx'
import { stats } from '../../data/site.js'

function Stat({ value, suffix, label, decimals = 0 }) {
  const { ref, value: v } = useCountUp(value, { decimals })
  return (
    <RevealItem className="group relative rounded-3xl border border-white/10 bg-midnight/50 p-7 transition-colors hover:border-lime/40 md:p-8">
      <span className="absolute left-7 top-0 h-1 w-10 rounded-b-full bg-lime transition-all duration-500 group-hover:w-20" aria-hidden="true" />
      <p ref={ref} className="font-heading text-5xl font-bold tabular-nums text-white md:text-6xl">
        {decimals ? v.toFixed(decimals) : Math.round(v)}<span className="text-lime">{suffix}</span>
      </p>
      <p className="mt-3 text-muted">{label}</p>
    </RevealItem>
  )
}

export default function Stats({ className = 'bg-navy' }) {
  return (
    <section className={`section relative overflow-hidden ${className}`}>
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-lime/40 to-transparent" aria-hidden="true" />
      <div className="container-x">
        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" staggerChildren={0.1}>
          {stats.map((s) => <Stat key={s.label} {...s} />)}
        </RevealGroup>
        <p className="mt-6 text-center text-xs text-muted/70">Illustrative sample data for template demonstration.</p>
      </div>
    </section>
  )
}
