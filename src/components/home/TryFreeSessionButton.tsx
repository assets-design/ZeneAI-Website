import type { CSSProperties } from 'react'
import { cn } from '@/lib/utils'

type TryFreeSessionButtonProps = {
  href?: string
  className?: string
  style?: CSSProperties
  label?: string
  labelSize?: 'default' | 'long'
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export function TryFreeSessionButton({
  href = '#try-session',
  className,
  style,
  label = 'Try a Free Session',
  labelSize = 'default',
  onMouseEnter,
  onMouseLeave,
}: TryFreeSessionButtonProps) {
  const isLongLabel = labelSize === 'long'
  return (
    <a
      href={href}
      className={cn(
        'rotating-split-border relative inline-flex w-full max-w-[var(--section-try-btn-w)] items-center text-black no-underline transition-none hover:text-black sm:w-[var(--section-try-btn-w)]',
        className,
      )}
      style={{
        height: 'var(--section-try-btn-h)',
        borderWidth: 'var(--section-try-btn-border)',
        borderRadius: 'var(--section-try-btn-radius)',
        ...style,
      }}
      data-node-id="642:1289"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span
        className={cn(
          'relative z-[1] font-heading font-normal uppercase leading-none',
          isLongLabel && 'whitespace-nowrap',
        )}
        style={{
          fontSize: isLongLabel
            ? 'var(--section-try-btn-label-long)'
            : 'var(--section-text-tab)',
          paddingLeft: 'calc(56px * var(--header-font-scale))',
        }}
      >
        {label}
      </span>

      <img
        src="/assets/figma/Vector.png"
        alt=""
        aria-hidden
        className="absolute z-[1] object-contain"
        style={{
          right: 'calc(56px * var(--header-font-scale))',
          width: 'calc(24px * var(--header-font-scale))',
          height: 'calc(24px * var(--header-font-scale))',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      />
    </a>
  )
}
