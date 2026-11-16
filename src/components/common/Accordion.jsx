import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { cn } from '../../utils/cn.js'

export default function Accordion({ items, dark = false, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className={cn('divide-y', dark ? 'divide-white/10' : 'divide-ink/10')}>
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.q}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className={cn('flex w-full items-center justify-between gap-6 py-5 text-left font-heading text-lg font-semibold transition-colors', dark ? 'text-white hover:text-lime' : 'text-ink hover:text-violet')}
            >
              {item.q}
              <span className={cn('grid size-8 shrink-0 place-items-center rounded-full border transition-all duration-300', isOpen ? 'rotate-45 border-violet bg-violet text-white' : dark ? 'border-white/20' : 'border-ink/20')}>
                <Plus className="size-4" aria-hidden="true" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className={cn('pb-6 pr-12 leading-relaxed', dark ? 'text-muted' : 'text-ink/70')}>{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
