import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, Package } from 'lucide-react'
import Img from '../common/Img.jsx'
import Button from '../common/Button.jsx'
import { services } from '../../data/services.js'
import { cn } from '../../utils/cn.js'

export default function ServiceTabs() {
  const { hash } = useLocation()
  const hashIndex = services.findIndex((s) => `#${s.id}` === hash)
  // A user click wins until the URL hash changes again.
  const [picked, setPicked] = useState({ hash, index: hashIndex >= 0 ? hashIndex : 0 })
  const active = picked.hash === hash || hashIndex < 0 ? picked.index : hashIndex
  const setActive = (index) => setPicked({ hash, index })
  const panelRef = useRef(null)

  useEffect(() => {
    if (hashIndex < 0) return
    const id = setTimeout(() => panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
    return () => clearTimeout(id)
  }, [hashIndex])

  const s = services[active]
  const Icon = s.icon

  return (
    <div className="grid gap-8 lg:grid-cols-12">
      {/* Tab list */}
      <div className="lg:col-span-4" role="tablist" aria-label="Services">
        <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 [scrollbar-width:none]">
          {services.map((item, i) => {
            const ItemIcon = item.icon
            const isActive = i === active
            return (
              <button
                key={item.id}
                id={`tab-${item.id}`}
                role="tab"
                aria-selected={isActive}
                aria-controls="service-panel"
                onClick={() => setActive(i)}
                className={cn(
                  'relative flex shrink-0 items-center gap-3 rounded-2xl border px-4 py-3.5 text-left transition-all duration-300 lg:w-full',
                  isActive ? 'border-navy bg-navy text-white' : 'border-ink/10 bg-white text-ink hover:border-violet/40',
                )}
              >
                <span className={cn('grid size-9 shrink-0 place-items-center rounded-xl', isActive ? 'bg-lime text-navy' : 'bg-violet/10 text-violet')}><ItemIcon className="size-4" /></span>
                <span className="whitespace-nowrap font-heading font-semibold lg:whitespace-normal">{item.title}</span>
                {isActive && <motion.span layoutId="service-active" className="absolute -left-px top-1/2 hidden h-8 w-1 -translate-y-1/2 rounded-r-full bg-lime lg:block" />}
              </button>
            )
          })}
        </div>
      </div>

      {/* Panel */}
      <div ref={panelRef} className="scroll-mt-28 lg:col-span-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={s.id}
            id="service-panel"
            role="tabpanel"
            aria-labelledby={`tab-${s.id}`}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-3xl bg-white shadow-[0_30px_80px_-40px_rgba(16,20,38,0.3)]"
          >
            <div className="img-zoom relative aspect-[16/8] overflow-hidden">
              <Img src={s.image} alt={s.imageAlt} className="size-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-navy/80 to-transparent" aria-hidden="true" />
              <div className="absolute bottom-5 left-5 flex items-center gap-3 md:bottom-7 md:left-7">
                <span className="grid size-12 place-items-center rounded-2xl bg-lime text-navy"><Icon className="size-5" /></span>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-lavender">Service {s.number}</p>
                  <h3 className="font-heading text-2xl font-bold text-white md:text-3xl">{s.title}</h3>
                </div>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <p className="lead text-ink/75">{s.long}</p>
              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <div>
                  <h4 className="eyebrow text-violet"><span className="h-px w-5 bg-violet" />What's included</h4>
                  <ul className="mt-4 grid gap-2.5">
                    {s.features.map((f) => <li key={f} className="flex items-center gap-3 text-ink"><span className="grid size-6 place-items-center rounded-full bg-lime text-navy"><Check className="size-3.5" /></span>{f}</li>)}
                  </ul>
                  <h4 className="eyebrow mt-8 text-violet"><span className="h-px w-5 bg-violet" />Key benefits</h4>
                  <ul className="mt-4 space-y-2 text-ink/75">
                    {s.benefits.map((b) => <li key={b} className="flex gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-violet" />{b}</li>)}
                  </ul>
                </div>
                <div className="rounded-2xl bg-light p-6">
                  <h4 className="flex items-center gap-2 font-heading font-bold text-ink"><Package className="size-4 text-violet" /> Deliverables</h4>
                  <ul className="mt-4 space-y-3">
                    {s.deliverables.map((d, i) => (
                      <li key={d} className="flex items-start gap-3 text-sm text-ink/80"><span className="font-heading text-xs font-bold text-violet">0{i + 1}</span>{d}</li>
                    ))}
                  </ul>
                  <Button to={`/contact?service=${s.id}`} variant="primary" className="mt-6 w-full">Get a Quote</Button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
