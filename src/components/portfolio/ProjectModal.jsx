import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import Img from '../common/Img.jsx'
import Button from '../common/Button.jsx'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-end justify-center bg-navy/80 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog" aria-modal="true" aria-labelledby="project-title"
        >
          <motion.div
            className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-t-3xl bg-midnight sm:rounded-3xl"
            initial={{ y: 60, opacity: 0, scale: 0.98 }} animate={{ y: 0, opacity: 1, scale: 1 }} exit={{ y: 40, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={onClose} className="absolute right-4 top-4 z-10 grid size-10 place-items-center rounded-full bg-navy/70 text-white backdrop-blur transition hover:bg-lime hover:text-navy" aria-label="Close">
              <X className="size-5" />
            </button>
            <div className="aspect-[16/9] overflow-hidden">
              <Img src={project.image} alt={project.imageAlt} className="size-full object-cover" />
            </div>
            <div className="p-6 md:p-10">
              <p className="text-xs uppercase tracking-[0.18em] text-lavender">{project.client} · {project.industry} · {project.year}</p>
              <h2 id="project-title" className="heading-2 mt-3 text-white">{project.title}</h2>
              <p className="mt-4 leading-relaxed text-muted">{project.overview}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {project.results.map((r) => (
                  <div key={r.label} className="rounded-2xl border border-white/10 p-5">
                    <p className="font-heading text-3xl font-bold text-lime">{r.value}</p>
                    <p className="mt-1 text-sm text-muted">{r.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.services.map((s) => <span key={s} className="rounded-full bg-violet/20 px-3 py-1 text-xs font-medium text-lavender">{s}</span>)}
              </div>
              <p className="mt-6 text-xs text-muted/70">Fictional demo case study. Results shown are illustrative only.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button to="/contact" variant="lime">Start a similar project</Button>
                <Button onClick={onClose} variant="outline" arrow={false}>Close</Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
