import { Link } from 'react-router-dom'
import { cn } from '../../utils/cn.js'

export default function Logo({ dark = false, className }) {
  return (
    <Link to="/" className={cn('group inline-flex items-center gap-2.5', className)} aria-label="Nexora home">
      <span className="relative grid size-9 place-items-center rounded-xl bg-violet transition-transform duration-500 group-hover:rotate-[-8deg]">
        <svg viewBox="0 0 64 64" className="size-6" aria-hidden="true">
          <path d="M18 46V18l28 28V18" stroke="#C7F36B" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
        <span className="absolute -right-1 -top-1 size-2.5 rounded-full bg-lime" />
      </span>
      <span className={cn('font-heading text-xl font-bold tracking-tight', dark ? 'text-ink' : 'text-white')}>
        Nexora<span className="text-lime">.</span>
      </span>
    </Link>
  )
}
