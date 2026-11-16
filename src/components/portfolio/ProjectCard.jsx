import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Img from '../common/Img.jsx'
import { cn } from '../../utils/cn.js'

export default function ProjectCard({ project, onOpen, aspect = 'aspect-[4/3]', large = false, className, layout = true }) {
  return (
    <motion.article
      layout={layout}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={cn('group', className)}
    >
      <button onClick={() => onOpen?.(project)} className="block w-full text-left" aria-label={`Open case study: ${project.title}`}>
        <div className={cn('img-zoom relative overflow-hidden rounded-3xl bg-midnight', aspect)}>
          <Img src={project.image} alt={project.imageAlt} className="size-full object-cover" />
          {/* Reveal curtain */}
          <motion.span
            className="absolute inset-0 bg-violet"
            initial={{ scaleX: 1 }} whileInView={{ scaleX: 0 }} viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1, ease: [0.77, 0, 0.18, 1] }}
            style={{ transformOrigin: 'right' }}
            aria-hidden="true"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/40 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" aria-hidden="true" />
          <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5">
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur">{project.category}</span>
            <span className="grid size-10 place-items-center rounded-full bg-lime text-navy opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:rotate-45">
              <ArrowUpRight className="size-4" />
            </span>
          </div>
          <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-lavender">{project.client} · {project.industry}</p>
            <h3 className={cn('mt-2 font-heading font-bold text-white', large ? 'text-2xl md:text-3xl' : 'text-xl')}>{project.title}</h3>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
              {project.results.map((r) => (
                <span key={r.label} className="text-sm text-white"><strong className="font-heading text-lime">{r.value}</strong> {r.label}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.services.map((s) => (
            <span key={s} className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted">{s}</span>
          ))}
        </div>
      </button>
    </motion.article>
  )
}
