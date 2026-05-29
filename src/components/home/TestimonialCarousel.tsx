import { useCallback, useEffect, useRef } from 'react'
import arrowNext from '@/assets/figma/home/section-9/arrow-next.png'
import arrowPrev from '@/assets/figma/home/section-9/arrow-prev.png'
import { TestimonialCard, type Testimonial } from '@/components/home/TestimonialCard'

const SCROLL_SPEED = 0.6
const MANUAL_NAV_PAUSE_MS = 800

type TestimonialCarouselProps = {
  items: readonly Testimonial[]
}

export function TestimonialCarousel({ items }: TestimonialCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const offsetRef = useRef(0)
  const loopWidthRef = useRef(0)
  const pausedRef = useRef(false)
  const manualNavUntilRef = useRef(0)
  const rafRef = useRef<number | null>(null)

  const applyOffset = useCallback((offset: number) => {
    const track = trackRef.current
    if (!track) return
    track.style.transform = `translate3d(-${offset}px, 0, 0)`
  }, [])

  const measureLoopWidth = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    loopWidthRef.current = track.scrollWidth / 2
  }, [])

  const wrapOffset = useCallback((offset: number) => {
    const loopWidth = loopWidthRef.current
    if (loopWidth <= 0) return offset

    let next = offset
    while (next >= loopWidth) next -= loopWidth
    while (next < 0) next += loopWidth
    return next
  }, [])

  const scrollByCard = useCallback(
    (direction: -1 | 1) => {
      const track = trackRef.current
      if (!track) return

      manualNavUntilRef.current = Date.now() + MANUAL_NAV_PAUSE_MS

      const cardWidth = track.querySelector('article')?.getBoundingClientRect().width ?? 0
      const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || '0')
      const step = cardWidth + gap

      offsetRef.current = wrapOffset(offsetRef.current + direction * step)
      applyOffset(offsetRef.current)
    },
    [applyOffset, wrapOffset],
  )

  useEffect(() => {
    measureLoopWidth()

    const track = trackRef.current
    if (!track) return

    const resizeObserver = new ResizeObserver(measureLoopWidth)
    resizeObserver.observe(track)

    const tick = () => {
      const manualNavActive = Date.now() < manualNavUntilRef.current

      if (!pausedRef.current && !manualNavActive && loopWidthRef.current > 0) {
        offsetRef.current = wrapOffset(offsetRef.current + SCROLL_SPEED)
        applyOffset(offsetRef.current)
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      resizeObserver.disconnect()
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [applyOffset, items.length, measureLoopWidth, wrapOffset])

  const loopItems = [...items, ...items]

  return (
    <div
      className="relative mx-auto flex min-w-0 flex-col items-stretch gap-4 overflow-hidden px-[var(--section-padding-x)] sm:flex-row sm:items-center sm:px-0"
      style={{
        width: 'var(--testimonial-track-width)',
        minHeight: 'var(--testimonial-card-h)',
        marginTop: 'var(--testimonial-heading-to-carousel)',
      }}
      data-node-id="767:1962"
    >
      <div
        className="relative z-20 flex shrink-0 items-center justify-center overflow-hidden sm:justify-start"
        style={{
          gap: 'var(--testimonial-arrow-gap)',
          paddingRight: 'var(--testimonial-arrow-to-track)',
          height: 'var(--testimonial-arrow-size)',
        }}
        data-node-id="770:2050"
      >
        <button
          type="button"
          className="shrink-0 cursor-pointer border-0 bg-transparent p-0 transition-opacity hover:opacity-80"
          style={{
            width: 'var(--testimonial-arrow-size)',
            height: 'var(--testimonial-arrow-size)',
          }}
          onClick={() => scrollByCard(-1)}
          aria-label="Previous testimonial"
        >
          <img src={arrowPrev} alt="" className="size-full object-contain" draggable={false} />
        </button>
        <button
          type="button"
          className="shrink-0 cursor-pointer border-0 bg-transparent p-0 transition-opacity hover:opacity-80"
          style={{
            width: 'var(--testimonial-arrow-size)',
            height: 'var(--testimonial-arrow-size)',
          }}
          onClick={() => scrollByCard(1)}
          aria-label="Next testimonial"
          data-node-id="767:1957"
        >
          <img src={arrowNext} alt="" className="size-full object-contain" draggable={false} />
        </button>
      </div>

      <div
        className="relative min-w-0 flex-1 overflow-hidden"
        style={{ height: 'var(--testimonial-card-h)' }}
        onMouseEnter={() => {
          pausedRef.current = true
        }}
        onMouseLeave={() => {
          pausedRef.current = false
        }}
      >
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10"
          style={{
            width: 'var(--testimonial-fade-w)',
            background:
              'linear-gradient(to right, #ffffff 79.464%, rgba(255, 255, 255, 0))',
          }}
          data-node-id="767:1963"
        />

        <div className="h-full w-full min-w-0 overflow-hidden">
          <div
            ref={trackRef}
            className="flex h-full w-max will-change-transform"
            style={{ gap: 'var(--testimonial-card-gap)' }}
          >
            {loopItems.map((item, index) => (
              <TestimonialCard key={`${item.nodeId}-${index}`} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
