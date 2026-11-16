import { motion } from 'framer-motion'
import { cn } from '../../utils/cn.js'

export default function PortfolioFilter({ categories, active, onChange, counts }) {
  return (
    <div className="-mx-5 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:px-0" role="tablist" aria-label="Filter projects">
      <div className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
        {categories.map((c) => {
          const isActive = c === active
          return (
            <button
              key={c}
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange(c)}
              className={cn('relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors', isActive ? 'text-navy' : 'text-muted hover:text-white')}
            >
              {isActive && <motion.span layoutId="filter-pill" className="absolute inset-0 rounded-full bg-lime" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}
              <span className="relative flex items-center gap-2">
                {c}
                <span className={cn('rounded-full px-1.5 text-[10px] font-bold', isActive ? 'bg-navy/15' : 'bg-white/10')}>{counts[c]}</span>
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
