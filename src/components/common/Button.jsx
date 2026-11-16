import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { cn } from '../../utils/cn.js'

const variants = {
  primary: 'bg-violet text-white hover:bg-[#6a46f5] shadow-[0_0_0_0_rgba(121,87,255,0)] hover:shadow-[0_12px_40px_-10px_rgba(121,87,255,0.7)]',
  lime: 'bg-lime text-navy hover:bg-[#d4f986] hover:shadow-[0_12px_40px_-10px_rgba(199,243,107,0.6)]',
  outline: 'border border-white/20 text-white hover:border-lime hover:text-lime',
  outlineDark: 'border border-ink/15 text-ink hover:border-violet hover:text-violet',
  ghost: 'text-white hover:text-lime',
}

const sizes = {
  md: 'px-6 py-3.5 text-sm',
  lg: 'px-8 py-4 text-base',
  sm: 'px-4 py-2.5 text-sm',
}

export default function Button({
  to, href, children, variant = 'primary', size = 'md', arrow = true, className, type = 'button', ...rest
}) {
  const cls = cn(
    'group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 active:scale-[0.97] disabled:opacity-60 disabled:pointer-events-none',
    variants[variant], sizes[size], className,
  )
  const inner = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
      )}
    </>
  )
  if (to) return <Link to={to} className={cls} {...rest}>{inner}</Link>
  if (href) return <a href={href} className={cls} {...rest}>{inner}</a>
  return <button type={type} className={cls} {...rest}>{inner}</button>
}
