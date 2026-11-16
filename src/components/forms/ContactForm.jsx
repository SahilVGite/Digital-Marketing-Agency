import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Loader2, CheckCircle2, ArrowLeft } from 'lucide-react'
import Button from '../common/Button.jsx'
import { useToast } from '../../hooks/useToast.js'
import { services } from '../../data/services.js'
import { submitEnquiry } from '../../utils/api.js'
import { cn } from '../../utils/cn.js'

const budgets = ['Under ₹25,000', '₹25,000 – ₹50,000', '₹50,000 – ₹1,00,000', '₹1,00,000 – ₹3,00,000', 'Above ₹3,00,000']

function Field({ label, id, error, required, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-ink">
        {label} {required && <span className="text-violet" aria-hidden="true">*</span>}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-1.5 text-xs font-medium text-red-500" role="alert">
            {error.message}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

function Select({ id, error, children, ...rest }) {
  return (
    <div className="relative">
      <select id={id} className={cn('input appearance-none pr-11', error && 'input-error')} aria-invalid={!!error} {...rest}>
        {children}
      </select>
      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-ink/50" aria-hidden="true" />
    </div>
  )
}

export default function ContactForm() {
  const [params] = useSearchParams()
  const { toast } = useToast()
  const [status, setStatus] = useState('idle') // idle | loading | success
  const [ref, setRef] = useState('')
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: { service: params.get('service') || '' },
  })

  const onSubmit = async (data) => {
    setStatus('loading')
    try {
      const res = await submitEnquiry(data)
      setRef(res.id)
      setStatus('success')
      toast('Enquiry sent. We will be in touch within one business day.', 'success')
      reset()
    } catch (err) {
      setStatus('idle')
      toast(err.message || 'Could not send your enquiry. Please try again.', 'error', 6000)
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
        className="relative overflow-hidden rounded-3xl bg-navy p-8 text-center text-white md:p-12"
      >
        <div className="absolute -right-20 -top-20 size-64 rounded-full bg-violet/40 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-20 -left-20 size-64 rounded-full bg-lime/20 blur-3xl" aria-hidden="true" />
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.1 }} className="relative mx-auto grid size-20 place-items-center rounded-full bg-lime text-navy">
          <CheckCircle2 className="size-10" />
        </motion.div>
        <h3 className="heading-2 relative mt-6">Your enquiry is on its way.</h3>
        <p className="relative mt-3 text-muted">Thanks for reaching out. A strategist will review your project and reply within one business day.</p>
        <p className="relative mt-4 font-heading text-sm text-lavender">Reference: {ref}</p>
        <div className="relative mt-8 flex flex-wrap justify-center gap-3">
          <Button to="/work" variant="lime">Browse our work</Button>
          <Button onClick={() => setStatus('idle')} variant="outline" arrow={false}><ArrowLeft className="size-4" /> Send another</Button>
        </div>
      </motion.div>
    )
  }

  const loading = status === 'loading'

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="rounded-3xl bg-white p-6 shadow-[0_40px_80px_-40px_rgba(16,20,38,0.35)] md:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" id="name" required error={errors.name}>
          <input id="name" placeholder="Priya Sharma" className={cn('input', errors.name && 'input-error')} aria-invalid={!!errors.name}
            {...register('name', { required: 'Please enter your name', minLength: { value: 2, message: 'Name is too short' } })} />
        </Field>
        <Field label="Work Email" id="email" required error={errors.email}>
          <input id="email" type="email" placeholder="priya@company.com" className={cn('input', errors.email && 'input-error')} aria-invalid={!!errors.email}
            {...register('email', { required: 'Please enter your work email', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address' } })} />
        </Field>
        <Field label="Phone Number" id="phone" required error={errors.phone}>
          <input id="phone" type="tel" placeholder="+91 98765 43210" className={cn('input', errors.phone && 'input-error')} aria-invalid={!!errors.phone}
            {...register('phone', { required: 'Please enter your phone number', pattern: { value: /^[+\d][\d\s()-]{7,}$/, message: 'Enter a valid phone number' } })} />
        </Field>
        <Field label="Company Name" id="company" required error={errors.company}>
          <input id="company" placeholder="Acme Pvt. Ltd." className={cn('input', errors.company && 'input-error')} aria-invalid={!!errors.company}
            {...register('company', { required: 'Please enter your company name' })} />
        </Field>
        <Field label="Service Required" id="service" required error={errors.service}>
          <Select id="service" error={errors.service} {...register('service', { required: 'Please select a service' })}>
            <option value="">Select a service</option>
            {services.map((s) => <option key={s.id} value={s.id}>{s.title}</option>)}
            <option value="other">Not sure yet / Other</option>
          </Select>
        </Field>
        <Field label="Estimated Budget" id="budget" required error={errors.budget}>
          <Select id="budget" error={errors.budget} {...register('budget', { required: 'Please select a budget range' })}>
            <option value="">Select a budget range</option>
            {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
          </Select>
        </Field>
        <div className="sm:col-span-2">
          <Field label="Project Description" id="message" required error={errors.message}>
            <textarea id="message" rows={5} placeholder="Tell us about your goals, timeline and anything else we should know." className={cn('input resize-y', errors.message && 'input-error')} aria-invalid={!!errors.message}
              {...register('message', { required: 'Please describe your project', minLength: { value: 20, message: 'Give us a little more detail (20+ characters)' } })} />
          </Field>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink/50">Fields marked <span className="text-violet">*</span> are required. Demo form — no data is sent anywhere.</p>
        <Button type="submit" variant="primary" size="lg" disabled={loading} arrow={!loading} className="sm:min-w-48">
          {loading ? <><Loader2 className="size-4 animate-spin" /> Sending</> : 'Send Enquiry'}
        </Button>
      </div>
    </form>
  )
}
