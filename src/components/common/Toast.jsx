import { useCallback, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react'
import { ToastContext } from '../../hooks/useToast.js'
import { cn } from '../../utils/cn.js'

const icons = { success: CheckCircle2, error: AlertCircle, info: Info }
const styles = {
  success: 'border-lime/40 text-lime',
  error: 'border-red-400/40 text-red-300',
  info: 'border-lavender/40 text-lavender',
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const dismiss = useCallback((id) => setToasts((t) => t.filter((x) => x.id !== id)), [])

  const toast = useCallback((message, type = 'info', duration = 4000) => {
    const id = Date.now() + Math.random()
    setToasts((t) => [...t, { id, message, type }])
    setTimeout(() => dismiss(id), duration)
  }, [dismiss])

  const value = useMemo(() => ({ toast, dismiss }), [toast, dismiss])

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="pointer-events-none fixed inset-x-0 bottom-5 z-[100] flex flex-col items-center gap-3 px-4 sm:items-end sm:px-6" aria-live="polite">
        <AnimatePresence>
          {toasts.map((t) => {
            const Icon = icons[t.type] || Info
            return (
              <motion.div
                key={t.id}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.96 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={cn('glass pointer-events-auto flex w-full max-w-sm items-start gap-3 rounded-2xl px-4 py-3.5 shadow-2xl', styles[t.type])}
                role="status"
              >
                <Icon className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
                <p className="flex-1 text-sm text-white">{t.message}</p>
                <button onClick={() => dismiss(t.id)} className="text-muted transition hover:text-white" aria-label="Dismiss notification">
                  <X className="size-4" />
                </button>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  )
}
