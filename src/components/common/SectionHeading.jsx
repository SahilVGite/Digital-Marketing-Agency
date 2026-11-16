import { Reveal } from './Reveal.jsx'
import { cn } from '../../utils/cn.js'

export default function SectionHeading({ eyebrow, title, text, dark = true, align = 'left', className, size = 'heading-1' }) {
  const center = align === 'center'
  return (
    <Reveal className={cn('max-w-3xl', center && 'mx-auto text-center', className)}>
      {eyebrow && (
        <span className={cn('eyebrow mb-4', dark ? 'text-lime' : 'text-violet')}>
          <span className={cn('h-px w-6', dark ? 'bg-lime' : 'bg-violet')} />
          {eyebrow}
        </span>
      )}
      <h2 className={cn(size, dark ? 'text-white' : 'text-ink')}>{title}</h2>
      {text && <p className={cn('lead mt-5', dark ? 'text-muted' : 'text-ink/70')}>{text}</p>}
    </Reveal>
  )
}
