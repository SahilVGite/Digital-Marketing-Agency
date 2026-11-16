import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import SectionHeading from '../common/SectionHeading.jsx'
import Img from '../common/Img.jsx'
import { Reveal } from '../common/Reveal.jsx'
import { testimonials } from '../../data/testimonials.js'
import { cn } from '../../utils/cn.js'

export default function Testimonials() {
  const [[index, dir], setIndex] = useState([0, 1])
  const [paused, setPaused] = useState(false)
  const count = testimonials.length

  const go = useCallback((d) => setIndex(([i]) => [(i + d + count) % count, d]), [count])

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => go(1), 6000)
    return () => clearInterval(id)
  }, [paused, go])

  const t = testimonials[index]

  return (
    <section className="section relative overflow-hidden bg-midnight">
      <div className="absolute -left-24 bottom-0 size-96 rounded-full bg-violet/20 blur-[120px]" aria-hidden="true" />
      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Client stories" title={<>Kind words from <span className="text-lime">brave brands.</span></>} text="Fictional demo testimonials for template purposes." />
            <Reveal delay={0.2} className="mt-8 flex items-center gap-3">
              <button onClick={() => go(-1)} className="grid size-12 place-items-center rounded-full border border-white/15 text-white transition hover:border-lime hover:text-lime" aria-label="Previous testimonial"><ChevronLeft className="size-5" /></button>
              <button onClick={() => go(1)} className="grid size-12 place-items-center rounded-full border border-white/15 text-white transition hover:border-lime hover:text-lime" aria-label="Next testimonial"><ChevronRight className="size-5" /></button>
              <span className="ml-3 font-heading text-sm text-muted"><span className="text-white">0{index + 1}</span> / 0{count}</span>
            </Reveal>
          </div>

          <div className="lg:col-span-8" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            <Reveal className="glass relative overflow-hidden rounded-3xl p-7 md:p-10">
              <Quote className="absolute right-8 top-8 size-20 text-violet/30" aria-hidden="true" />
              <div className="relative min-h-[16rem]">
                <AnimatePresence mode="wait" custom={dir}>
                  <motion.figure
                    key={t.id}
                    custom={dir}
                    initial={{ opacity: 0, x: dir * 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: dir * -50 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={cn('size-4', i < t.rating ? 'fill-lime text-lime' : 'text-white/20')} aria-hidden="true" />
                      ))}
                    </div>
                    <blockquote className="mt-6 font-heading text-xl font-medium leading-snug text-white md:text-2xl lg:text-[1.75rem]">
                      “{t.quote}”
                    </blockquote>
                    <figcaption className="mt-8 flex items-center gap-4">
                      <Img src={t.image} alt={`Portrait of ${t.name}`} className="size-14 rounded-full object-cover ring-2 ring-lime/50" />
                      <div>
                        <p className="font-semibold text-white">{t.name}</p>
                        <p className="text-sm text-muted">{t.role}, {t.company}</p>
                      </div>
                    </figcaption>
                  </motion.figure>
                </AnimatePresence>
              </div>
              <div className="mt-8 flex gap-2" role="tablist" aria-label="Testimonials">
                {testimonials.map((x, i) => (
                  <button key={x.id} role="tab" aria-selected={i === index} aria-label={`Show testimonial ${i + 1}`} onClick={() => setIndex([i, i > index ? 1 : -1])} className={cn('h-1.5 rounded-full transition-all duration-500', i === index ? 'w-10 bg-lime' : 'w-4 bg-white/20 hover:bg-white/40')} />
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
