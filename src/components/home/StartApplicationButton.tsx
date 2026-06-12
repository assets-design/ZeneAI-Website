import { cn } from '@/lib/utils'
import { CONTACT_PAGE_PATH } from '@/lib/contact'
import arrowRight from '@/assets/figma/home/section-12/arrow-right.svg'

type StartApplicationButtonProps = {
  href?: string
  className?: string
  label?: string
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export function StartApplicationButton({
  href = CONTACT_PAGE_PATH,
  className,
  label = 'Start application',
  onMouseEnter,
  onMouseLeave,
}: StartApplicationButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        'relative inline-flex w-full max-w-[var(--apply-cta-btn-w)] items-center justify-between text-black no-underline transition-none hover:text-black sm:w-[var(--apply-cta-btn-w)]',
        className,
      )}
      style={{
        height: 'var(--apply-cta-btn-h)',
        paddingLeft: 'var(--apply-cta-btn-padding-x-left)',
        paddingRight: 'var(--apply-cta-btn-padding-x)',
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      data-node-id="975:1981"
      aria-label="Start application"
    >
      <span
        className="rotating-split-border absolute inset-0"
        style={{
          borderWidth: 'var(--apply-cta-btn-border)',
          borderRadius: 'var(--apply-cta-btn-radius)',
        }}
        aria-hidden
      />

      <span
        className="relative z-[1] shrink-0 font-heading font-normal uppercase leading-none"
        style={{
          fontSize: 'var(--apply-cta-btn-text-size)',
          marginRight: 'var(--apply-cta-btn-text-to-arrow)',
        }}
        data-node-id="I975:1981;420:1143"
      >
        {label}
      </span>

      <img
        src={arrowRight}
        alt=""
        aria-hidden
        className="relative z-[1] shrink-0 object-contain"
        style={{
          width: 'var(--apply-cta-btn-arrow-size)',
          height: 'auto',
          marginRight: 'var(--apply-cta-btn-arrow-gap-right)',
        }}
        data-node-id="I975:1981;420:1144"
      />
    </a>
  )
}
