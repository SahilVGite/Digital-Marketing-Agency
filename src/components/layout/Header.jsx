import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import Logo from '../common/Logo.jsx'
import Button from '../common/Button.jsx'
import { navLinks, site } from '../../data/site.js'
import { useScrolled } from '../../hooks/useScrolled.js'
import { cn } from '../../utils/cn.js'

export default function Header() {
  const scrolled = useScrolled(30)
  const { pathname } = useLocation()
  const [openOn, setOpenOn] = useState(null)
  const open = openOn === pathname

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const close = () => setOpenOn(null)
    const onKey = (e) => { if (e.key === 'Escape') close() }
    // The drawer is hidden at lg+, so close it (and release the scroll lock) if the viewport grows.
    const desktop = window.matchMedia('(min-width: 1024px)')
    const onResize = (e) => { if (e.matches) close() }
    window.addEventListener('keydown', onKey)
    desktop.addEventListener('change', onResize)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      desktop.removeEventListener('change', onResize)
    }
  }, [open])

  return (
    <header className={cn('fixed inset-x-0 top-0 z-50 transition-all duration-500', scrolled ? 'py-3' : 'py-5')}>
      {/* Stacked above the mobile drawer (z-40) so the logo and close button stay usable. */}
      <div className="container-x relative z-50">
        <div className={cn(
          'flex items-center justify-between rounded-full px-4 transition-all duration-500 sm:px-5',
          scrolled ? 'glass py-2.5 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]' : 'py-2',
        )}>
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) => cn('relative rounded-full px-4 py-2 text-sm font-medium transition-colors', isActive ? 'text-white' : 'text-muted hover:text-white')}
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-white/10" transition={{ type: 'spring', stiffness: 350, damping: 30 }} />
                    )}
                    <span className="relative">{l.label}</span>
                    {isActive && <span className="absolute -bottom-0.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-lime" />}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button to="/contact" variant="lime" size="sm" className="hidden sm:inline-flex">Let's Talk</Button>
            <button
              onClick={() => setOpenOn(open ? null : pathname)}
              className="grid size-10 place-items-center rounded-full border border-white/15 text-white transition hover:border-lime hover:text-lime lg:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 z-40 bg-navy/95 backdrop-blur-xl lg:hidden"
          >
            <div className="mesh-dark absolute inset-0 opacity-70" aria-hidden="true" />
            <motion.nav
              className="relative flex h-full flex-col justify-between px-6 pt-28 pb-10"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
              aria-label="Mobile"
            >
              <ul className="space-y-2">
                {navLinks.map((l, i) => (
                  <motion.li key={l.to} variants={{ hidden: { opacity: 0, x: -24 }, show: { opacity: 1, x: 0 } }}>
                    <NavLink
                      to={l.to}
                      end={l.to === '/'}
                      className={({ isActive }) => cn('group flex items-center justify-between border-b border-white/10 py-4 font-heading text-3xl font-bold', isActive ? 'text-lime' : 'text-white')}
                    >
                      <span className="flex items-baseline gap-4"><span className="text-sm text-muted">0{i + 1}</span>{l.label}</span>
                      <ArrowUpRight className="size-6 text-muted transition group-hover:text-lime" />
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
              <motion.div variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }} className="space-y-5">
                <Button to="/contact" variant="lime" size="lg" className="w-full">Let's Talk</Button>
                <div className="flex flex-wrap justify-between gap-3 text-sm text-muted">
                  <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
                  <a href={site.phoneHref} className="hover:text-white">{site.phone}</a>
                </div>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
