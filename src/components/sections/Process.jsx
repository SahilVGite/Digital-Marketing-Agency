import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import SectionHeading from '../common/SectionHeading.jsx'
import { Reveal } from '../common/Reveal.jsx'
import { process } from '../../data/site.js'

export default function Process() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] })

  return (
    <section className="section bg-light text-ink">
      <div className="container-x">
        <SectionHeading dark={false} align="center" eyebrow="How we work" title={<>A process built for <span className="text-violet">momentum.</span></>} text="Four steps, repeated relentlessly. Simple on purpose." />

        <div ref={ref} className="relative mt-16">
          {/* Connecting line: vertical on mobile, horizontal on desktop. Each grows along one axis only. */}
          <div className="absolute left-6 top-0 h-full w-px bg-ink/10 lg:hidden" aria-hidden="true">
            <motion.div className="size-full origin-top bg-linear-to-b from-violet to-lime" style={{ scaleY: scrollYProgress }} />
          </div>
          <div className="absolute left-0 top-7 hidden h-px w-full bg-ink/10 lg:block" aria-hidden="true">
            <motion.div className="size-full origin-left bg-linear-to-r from-violet to-lime" style={{ scaleX: scrollYProgress }} />
          </div>

          <ol className="grid gap-10 lg:grid-cols-4 lg:gap-8">
            {process.map((p, i) => (
              <Reveal as="li" key={p.step} delay={i * 0.12} className="relative pl-20 lg:pl-0 lg:pt-20">
                <span className="absolute left-0 top-0 grid size-12 place-items-center rounded-full border-2 border-violet bg-light font-heading text-sm font-bold text-violet lg:top-1 lg:size-12">
                  {p.step}
                </span>
                <div className="group rounded-3xl bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(121,87,255,0.5)]">
                  <h3 className="font-heading text-2xl font-bold">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink/70">{p.text}</p>
                  <span className="mt-5 block h-1 w-10 rounded-full bg-lime transition-all duration-500 group-hover:w-full" aria-hidden="true" />
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
