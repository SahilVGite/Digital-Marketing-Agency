import { createContext, useContext } from 'react'

// Kept apart from <ToastProvider> so that file only exports components (needed for Fast Refresh).
export const ToastContext = createContext(null)

/** Returns `{ toast(message, type?, duration?), dismiss(id) }`. Must be used inside <ToastProvider>. */
export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used inside ToastProvider')
  return ctx
}
