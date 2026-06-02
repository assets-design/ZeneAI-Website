import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SectionScrollPanelProps = {
  children: ReactNode
  className?: string
  variant?: 'snap' | 'form'
}

/** Wraps a homepage section for full-viewport snap scrolling. */
export function SectionScrollPanel({
  children,
  className,
  variant = 'snap',
}: SectionScrollPanelProps) {
  return (
    <div
      className={cn(
        'section-scroll-panel',
        variant === 'form' ? 'section-scroll-panel--form' : 'section-scroll-panel--snap',
        className,
      )}
    >
      {children}
    </div>
  )
}
