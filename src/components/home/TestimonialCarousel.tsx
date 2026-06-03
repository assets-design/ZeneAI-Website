import { useCallback, useEffect, useRef, useState } from 'react'
import arrowNext from '@/assets/figma/home/section-9/arrow-next.png'
import arrowPrev from '@/assets/figma/home/section-9/arrow-prev.png'
import { TestimonialCard, type Testimonial } from '@/components/home/TestimonialCard'

const SCROLL_SPEED = 0.6
const MANUAL_NAV_PAUSE_MS = 800
const MOBILE_AUTO_STEP_MS = 5000
const MOBILE_HOME_MQ = '(max-width: 639px)'

type TestimonialCarouselProps = {
  items: readonly Testimonial[]
  variant?: 'home' | 'about'
}

function useMobileHomeCarousel(variant: TestimonialCarouselProps['variant']) {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(MOBILE_HOME_MQ).matches : false,
  )

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_HOME_MQ)
    const handleChange = () => setIsMobile(mq.matches)
    handleChange()
    mq.addEventListener('change', handleChange)
    return () => mq.removeEventListener('change', handleChange)
  }, [])

  return (variant === 'home' || variant === 'about') && isMobile
}

export function TestimonialCarousel({ items, variant = 'home' }: TestimonialCarouselProps) {
  const useMobileHomeLayout = useMobileHomeCarousel(variant)
  const trackRef = useRef<HTMLDivElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)
  const offsetRef = useRef(0)
  const loopWidthRef = useRef(0)
  const pausedRef = useRef(false)
  const manualNavUntilRef = useRef(0)
  const rafRef = useRef<number | null>(null)
  const slideWidthRef = useRef(0)
  const activeIndexRef = useRef(0)
  const [slideWidth, setSlideWidth] = useState(0)

  const applyOffset = useCallback((offset: number, behavior: ScrollBehavior = 'auto') => {
    const track = trackRef.current
    if (!track) return
    track.style.transition = behavior === 'smooth' ? 'transform 400ms ease' : 'none'
    track.style.transform = `translate3d(-${offset}px, 0, 0)`
    offsetRef.current = offset
  }, [])

  const goToIndex = useCallback(
    (index: number, behavior: ScrollBehavior = 'smooth') => {
      const width = slideWidthRef.current
      if (width <= 0) return

      const normalized = ((index % items.length) + items.length) % items.length
      activeIndexRef.current = normalized
      applyOffset(normalized * width, behavior)
    },
    [applyOffset, items.length],
  )

  const getStep = useCallback(() => {
    const track = trackRef.current
    if (!track) return 0

    const cardWidth = track.querySelector('article')?.getBoundingClientRect().width ?? 0
    const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || '0')
    return cardWidth + gap
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
      manualNavUntilRef.current = Date.now() + MANUAL_NAV_PAUSE_MS

      if (useMobileHomeLayout) {
        goToIndex(activeIndexRef.current + direction)
        return
      }

      const step = getStep()
      if (step <= 0) return

      offsetRef.current = wrapOffset(offsetRef.current + direction * step)
      applyOffset(offsetRef.current)
    },
    [applyOffset, getStep, goToIndex, useMobileHomeLayout, wrapOffset],
  )

  useEffect(() => {
    if (!useMobileHomeLayout) return

    const viewport = viewportRef.current
    if (!viewport) return

    const syncSlideWidth = () => {
      const width = Math.floor(viewport.clientWidth)
      slideWidthRef.current = width
      setSlideWidth(width)
      viewport.style.setProperty('--testimonial-card-w', `${width}px`)
      activeIndexRef.current = 0
      applyOffset(0, 'auto')
    }

    syncSlideWidth()
    const resizeObserver = new ResizeObserver(syncSlideWidth)
    resizeObserver.observe(viewport)
    return () => resizeObserver.disconnect()
  }, [applyOffset, useMobileHomeLayout])

  useEffect(() => {
    if (useMobileHomeLayout) {
      const timer = window.setInterval(() => {
        const manualNavActive = Date.now() < manualNavUntilRef.current
        if (pausedRef.current || manualNavActive || slideWidthRef.current <= 0) return

        goToIndex(activeIndexRef.current + 1)
      }, MOBILE_AUTO_STEP_MS)

      return () => window.clearInterval(timer)
    }

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
  }, [applyOffset, goToIndex, items.length, measureLoopWidth, useMobileHomeLayout, wrapOffset])

  const loopItems = [...items, ...items]
  const displayItems = useMobileHomeLayout ? items : loopItems

  return (
    <div
      className={
        useMobileHomeLayout
          ? 'testimonial-carousel testimonial-carousel--mobile-home relative flex min-w-0 flex-col items-stretch overflow-hidden'
          : 'testimonial-carousel relative flex min-w-0 flex-col items-stretch overflow-hidden sm:flex-row sm:items-center'
      }
      style={{
        width: 'var(--testimonial-track-width)',
        minHeight: useMobileHomeLayout ? undefined : 'var(--testimonial-card-h)',
        marginTop: 'var(--testimonial-heading-to-carousel)',
        paddingLeft: useMobileHomeLayout ? undefined : 'var(--testimonial-carousel-pl)',
      }}
      data-node-id="767:1962"
    >
      <div
        className="relative z-20 flex shrink-0 items-center justify-start"
        style={{
          gap: 'var(--testimonial-arrow-gap)',
          marginRight: useMobileHomeLayout ? undefined : 'var(--testimonial-arrow-to-track)',
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
        ref={viewportRef}
        className="testimonial-carousel-viewport relative min-w-0 flex-1 overflow-hidden"
        style={{ height: useMobileHomeLayout ? undefined : 'var(--testimonial-card-h)' }}
        onMouseEnter={() => {
          pausedRef.current = true
        }}
        onMouseLeave={() => {
          pausedRef.current = false
        }}
      >
        {!useMobileHomeLayout ? (
          <div
            className="testimonial-carousel-fade pointer-events-none absolute inset-y-0 left-0 z-10"
            style={{
              width: 'var(--testimonial-fade-w)',
              background:
                'linear-gradient(to right, #ffffff 79.464%, rgba(255, 255, 255, 0))',
            }}
            data-node-id="767:1963"
          />
        ) : null}

        <div className="h-full w-full min-w-0 overflow-hidden">
          <div
            ref={trackRef}
            className={
              useMobileHomeLayout
                ? 'testimonial-mobile-track flex h-full will-change-transform'
                : 'flex h-full w-max will-change-transform'
            }
            style={{ gap: useMobileHomeLayout ? 0 : 'var(--testimonial-card-gap)' }}
          >
            {displayItems.map((item, index) =>
              useMobileHomeLayout ? (
                <div
                  key={`${item.nodeId}-mobile-${index}`}
                  className="testimonial-mobile-slide shrink-0 overflow-hidden"
                  style={{ width: slideWidth > 0 ? slideWidth : '100%' }}
                  aria-hidden={index !== activeIndexRef.current ? true : undefined}
                >
                  <TestimonialCard {...item} layout="mobile-home" />
                </div>
              ) : (
                <TestimonialCard key={`${item.nodeId}-${index}`} {...item} layout="default" />
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
