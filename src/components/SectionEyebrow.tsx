import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SectionEyebrowProps = {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  id?: string
  'data-node-id'?: string
}

/** Shared section label — matches The Edge “The framework” eyebrow size and always renders uppercase. */
export function SectionEyebrow({ children, className, style, ...props }: SectionEyebrowProps) {
  return (
    <p
      className={cn('section-eyebrow font-body uppercase text-black', className)}
      style={{
        fontSize: 'var(--section-text-eyebrow)',
        fontVariationSettings: "'opsz' 14",
        ...style,
      }}
      {...props}
    >
      {children}
    </p>
  )
}
