import { useState } from 'react'
import { cn } from '../../utils/cn.js'

/** Image with lazy loading and a graceful gradient fallback if the remote asset fails. */
export default function Img({ src, alt, className, ...rest }) {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn('bg-[linear-gradient(135deg,#191F38,#7957FF_60%,#B9A9FF)]', className)}
        {...rest}
      />
    )
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
      {...rest}
    />
  )
}
