import { useState, type CSSProperties } from 'react'
import { cn } from '@/lib/utils'

type StudentFaceCircleProps = {
  size: string
  studentSize: string
  studentHoverSize?: string
  hovered?: boolean
  selfHover?: boolean
  className?: string
  style?: CSSProperties
  nodeId?: string
  innerNodeId?: string
}

export function StudentFaceCircle({
  size,
  studentSize,
  studentHoverSize,
  hovered = false,
  selfHover = true,
  className,
  style,
  nodeId,
  innerNodeId,
}: StudentFaceCircleProps) {
  const [internalHover, setInternalHover] = useState(false)
  const faceHover = hovered || (selfHover && internalHover)
  const hoverSize = studentHoverSize ?? `calc(${size} * 0.68)`

  return (
    <span
      className={cn('relative block shrink-0 overflow-hidden rounded-full bg-zene-cyan', className)}
      style={{ width: size, height: size, ...style }}
      onMouseEnter={selfHover ? () => setInternalHover(true) : undefined}
      onMouseLeave={selfHover ? () => setInternalHover(false) : undefined}
      data-node-id={nodeId}
    >
      <span
        className="absolute left-1/2 top-1/2 transition-[width,height] duration-300 ease-in-out"
        style={{
          width: faceHover ? hoverSize : studentSize,
          height: faceHover ? hoverSize : studentSize,
          transform: 'translate(-50%, -50%)',
        }}
        data-node-id={innerNodeId}
      >
        <img
          src="/assets/figma/apply-now/student-normal.png"
          alt=""
          aria-hidden
          className={cn(
            'absolute inset-0 size-full object-cover transition-opacity duration-300 ease-in-out',
            faceHover ? 'opacity-0' : 'opacity-100',
          )}
        />
        <img
          src="/assets/figma/apply-now/student-hover.png"
          alt=""
          aria-hidden
          className={cn(
            'absolute inset-0 size-full object-cover transition-opacity duration-300 ease-in-out',
            faceHover ? 'opacity-100' : 'opacity-0',
          )}
        />
      </span>
    </span>
  )
}
