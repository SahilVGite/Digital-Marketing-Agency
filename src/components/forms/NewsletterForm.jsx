import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Loader2, Send } from 'lucide-react'
import { useToast } from '../../hooks/useToast.js'
import { subscribeNewsletter } from '../../utils/api.js'
import { cn } from '../../utils/cn.js'

export default function NewsletterForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const onSubmit = async ({ email }) => {
    setLoading(true)
    try {
      await subscribeNewsletter(email)
      toast('You are on the list. Welcome aboard!', 'success')
      reset()
    } catch {
      toast('Something went wrong. Please try again.', 'error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="w-full">
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex-1">
          <label htmlFor="newsletter-email" className="sr-only">Email address</label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="you@company.com"
            className={cn('w-full rounded-full border bg-navy px-5 py-3.5 text-white placeholder:text-muted/70 outline-none transition focus:border-lime focus:ring-4 focus:ring-lime/10', errors.email ? 'border-red-400' : 'border-white/15')}
            aria-invalid={!!errors.email}
            {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' } })}
          />
        </div>
        <button type="submit" disabled={loading} className="group inline-flex items-center justify-center gap-2 rounded-full bg-lime px-6 py-3.5 text-sm font-semibold text-navy transition hover:bg-[#d4f986] disabled:opacity-60">
          {loading ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
          {loading ? 'Subscribing' : 'Subscribe'}
        </button>
      </div>
      {errors.email && <p className="mt-2 text-xs text-red-300">{errors.email.message}</p>}
    </form>
  )
}
