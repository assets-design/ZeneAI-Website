import { useState } from 'react'
import { cn } from '@/lib/utils'
import { StudentFaceCircle } from '@/components/ApplyNowButton/StudentFaceCircle'

type ApplyNowButtonProps = {
  href?: string
  className?: string
  onClick?: () => void
}

export function ApplyNowButton({
  href = '#apply',
  className,
  onClick,
}: ApplyNowButtonProps) {
  const [pillHovered, setPillHovered] = useState(false)

  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        'relative inline-block max-w-full text-black no-underline transition-none hover:text-black',
        className,
      )}
      style={{
        width: 'var(--apply-btn-w)',
        height: 'var(--apply-btn-h)',
      }}
      data-node-id="981:2034"
      aria-label="Apply now"
    >
      <span
        className="absolute left-0 z-[2]"
        style={{
          top: 'var(--apply-btn-pill-top)',
          width: 'var(--apply-btn-pill-w)',
          height: 'var(--apply-btn-pill-h)',
        }}
        onMouseEnter={() => setPillHovered(true)}
        onMouseLeave={() => setPillHovered(false)}
        data-node-id="981:2035"
      >
        <span
          className="rotating-split-border absolute inset-0"
          style={{
            borderWidth: 'var(--apply-btn-pill-border)',
            borderRadius: 'var(--apply-btn-pill-radius)',
          }}
          aria-hidden
        />

        <span
          className="relative z-[1] flex h-full items-center font-heading uppercase leading-none"
          style={{
            paddingLeft: 'var(--apply-btn-text-left)',
            fontSize: 'var(--apply-btn-text)',
          }}
          data-node-id="I981:2035;414:591"
        >
          Apply now
        </span>
      </span>

      <StudentFaceCircle
        className="absolute top-0 z-[3] pointer-events-none"
        style={{ left: 'var(--apply-btn-circle-left)' }}
        size="var(--apply-btn-circle-size)"
        studentSize="var(--apply-btn-student-size)"
        studentHoverSize="var(--apply-btn-student-hover-size)"
        hovered={pillHovered}
        selfHover={false}
        nodeId="I981:2035;414:593"
        innerNodeId="I981:2035;414:594"
      />
    </a>
  )
}
