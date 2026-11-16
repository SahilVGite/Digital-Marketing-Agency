import { cn } from '../../utils/cn.js'

/** Infinite horizontal marquee. Children are rendered twice to create a seamless loop. */
export default function Marquee({ children, className, trackClassName, reverse = false }) {
  return (
    <div className={cn('marquee relative overflow-hidden', className)}>
      <div className="marquee-track" style={reverse ? { animationDirection: 'reverse' } : undefined}>
        <div className={cn('flex shrink-0', trackClassName)}>{children}</div>
        {/* Visual duplicate only: hidden so screen readers don't announce every item twice. */}
        <div className={cn('flex shrink-0', trackClassName)} aria-hidden="true">{children}</div>
      </div>
    </div>
  )
}
