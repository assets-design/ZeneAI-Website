import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import imgBeaverAchiever from '@/assets/figma/the-edge/courses/beaver-achiever.png'
import imgCodemonkeyJr from '@/assets/figma/the-edge/courses/codemonkey-jr.png'
import imgCodingAdventure from '@/assets/figma/the-edge/courses/coding-adventure.png'
import imgDodoDoesMath from '@/assets/figma/the-edge/courses/dodo-does-math.png'
import { cn } from '@/lib/utils'

const COURSES = [
  {
    image: imgCodemonkeyJr,
    caption: 'Block - based coding Pre - K & K',
    imageNodeId: '1100:2072',
    captionNodeId: '1100:2062',
  },
  {
    image: imgBeaverAchiever,
    caption: 'Block - based coding 1 & 2 Grade',
    imageNodeId: '1100:2073',
    captionNodeId: '1100:2063',
  },
  {
    image: imgDodoDoesMath,
    caption: 'Maths & Coding Practice 2 & 4 Grade',
    imageNodeId: '1100:2074',
    captionNodeId: '1100:2064',
  },
  {
    image: imgCodingAdventure,
    caption: 'Text based coding 3 & 5 Grade',
    imageNodeId: '1100:2075',
    captionNodeId: '1100:2065',
  },
] as const

const COURSE_COUNT = COURSES.length
const LOOP_SETS = 3
const AUTO_SLIDE_MS = 4500

function getVisibleCount(width: number) {
  if (width >= 1280) return 4
  if (width >= 640) return 2
  return 1
}

function getSlideGapPx(element: HTMLElement) {
  const gap = getComputedStyle(element).gap
  const parsed = Number.parseFloat(gap)
  return Number.isFinite(parsed) ? parsed : 24
}

function CourseCard({
  image,
  caption,
  imageNodeId,
  captionNodeId,
}: (typeof COURSES)[number]) {
  return (
    <article className="the-edge-courses-card flex min-w-0 flex-col items-center text-center">
      <div className="the-edge-courses-card-image overflow-hidden" data-node-id={imageNodeId}>
        <img
          src={image}
          alt=""
          aria-hidden
          className="block w-full h-auto object-contain max-xl:object-contain xl:size-full xl:object-cover"
          draggable={false}
        />
      </div>
      <p
        className="mb-0 capitalize font-body font-normal leading-normal text-black"
        style={{
          fontSize: 'var(--section-text-body)',
          fontVariationSettings: "'opsz' 14",
          maxWidth: 'var(--the-edge-courses-caption-max-w)',
          marginTop: 'var(--the-edge-courses-image-to-caption)',
        }}
        data-node-id={captionNodeId}
      >
        {caption}
      </p>
    </article>
  )
}

function CourseDots({
  count,
  activeIndex,
  onSelect,
}: {
  count: number
  activeIndex: number
  onSelect: (index: number) => void
}) {
  return (
    <div
      className="flex items-center justify-center"
      role="tablist"
      aria-label="Choose course slide"
      style={{
        marginTop: 'var(--the-edge-courses-grid-to-dots)',
        gap: 'var(--the-edge-courses-dot-gap)',
      }}
      data-node-id="1100:2066"
    >
      {Array.from({ length: count }, (_, index) => (
        <button
          key={index}
          type="button"
          role="tab"
          aria-label={`Show course ${index + 1}`}
          aria-selected={activeIndex === index}
          onClick={() => onSelect(index)}
          className={cn(
            'rounded-full border border-black p-0 transition-colors',
            activeIndex === index ? 'bg-black' : 'bg-transparent',
          )}
          style={{
            width: 'var(--the-edge-courses-dot-size)',
            height: 'var(--the-edge-courses-dot-size)',
          }}
        />
      ))}
    </div>
  )
}

export function TheEdgeCoursesSection() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const isJumpingRef = useRef(false)
  const isHoveredRef = useRef(false)
  const isAutoAdvancingRef = useRef(false)
  const activeIndexRef = useRef(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const [slideWidth, setSlideWidth] = useState<number | null>(null)

  const loopSlides = useMemo(
    () =>
      Array.from({ length: LOOP_SETS }, (_, setIndex) =>
        COURSES.map((course, courseIndex) => ({
          ...course,
          key: `${course.captionNodeId}-${setIndex}`,
          logicalIndex: courseIndex,
        })),
      ).flat(),
    [],
  )

  const setLogicalIndex = useCallback((logicalIndex: number) => {
    activeIndexRef.current = logicalIndex
    setActiveIndex(logicalIndex)
  }, [])

  const updateSlideWidth = useCallback(() => {
    const carousel = carouselRef.current
    const track = trackRef.current
    if (!carousel || !track) return

    const width = carousel.clientWidth
    if (width <= 0) return

    const visibleCount = getVisibleCount(width)
    const gap = getSlideGapPx(track)
    const nextWidth = (width - (visibleCount - 1) * gap) / visibleCount

    setSlideWidth(nextWidth)
    track.style.setProperty('--the-edge-courses-slide-w', `${nextWidth}px`)
  }, [])

  const getClosestSlideIndex = useCallback((track: HTMLDivElement) => {
    const slides = Array.from(track.children) as HTMLElement[]
    if (slides.length === 0) return 0

    let closestIndex = 0
    let closestDistance = Number.POSITIVE_INFINITY

    slides.forEach((slide, index) => {
      const distance = Math.abs(track.scrollLeft - slide.offsetLeft)
      if (distance < closestDistance) {
        closestDistance = distance
        closestIndex = index
      }
    })

    return closestIndex
  }, [])

  const scrollToLogicalIndex = useCallback(
    (logicalIndex: number, behavior: ScrollBehavior = 'smooth') => {
      const track = trackRef.current
      if (!track) return

      const slide = track.children[COURSE_COUNT + logicalIndex] as HTMLElement | undefined
      if (!slide) return

      if (behavior === 'auto') isJumpingRef.current = true
      track.scrollTo({ left: slide.offsetLeft, behavior })
      setLogicalIndex(logicalIndex)

      if (behavior === 'auto') {
        requestAnimationFrame(() => {
          isJumpingRef.current = false
        })
      }
    },
    [setLogicalIndex],
  )

  const normalizeScroll = useCallback(() => {
    const track = trackRef.current
    if (!track || isJumpingRef.current || isAutoAdvancingRef.current) return

    const closestIndex = getClosestSlideIndex(track)
    const logicalIndex = ((closestIndex % COURSE_COUNT) + COURSE_COUNT) % COURSE_COUNT

    setLogicalIndex(logicalIndex)

    if (closestIndex < COURSE_COUNT) {
      const target = track.children[closestIndex + COURSE_COUNT] as HTMLElement | undefined
      if (!target) return

      isJumpingRef.current = true
      track.scrollTo({ left: target.offsetLeft, behavior: 'auto' })
      requestAnimationFrame(() => {
        isJumpingRef.current = false
      })
      return
    }

    if (closestIndex >= COURSE_COUNT * 2) {
      const target = track.children[closestIndex - COURSE_COUNT] as HTMLElement | undefined
      if (!target) return

      isJumpingRef.current = true
      track.scrollTo({ left: target.offsetLeft, behavior: 'auto' })
      requestAnimationFrame(() => {
        isJumpingRef.current = false
      })
    }
  }, [getClosestSlideIndex, setLogicalIndex])

  useEffect(() => {
    updateSlideWidth()

    const carousel = carouselRef.current
    if (!carousel) return

    const resizeObserver = new ResizeObserver(() => {
      updateSlideWidth()
      scrollToLogicalIndex(activeIndexRef.current, 'auto')
    })
    resizeObserver.observe(carousel)

    return () => resizeObserver.disconnect()
  }, [scrollToLogicalIndex, updateSlideWidth])

  useEffect(() => {
    if (slideWidth == null) return

    requestAnimationFrame(() => {
      scrollToLogicalIndex(0, 'auto')
    })
  }, [slideWidth, scrollToLogicalIndex])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const handleScroll = () => {
      if (isJumpingRef.current) return

      const closestIndex = getClosestSlideIndex(track)
      setLogicalIndex(((closestIndex % COURSE_COUNT) + COURSE_COUNT) % COURSE_COUNT)
    }

    let scrollEndTimer: ReturnType<typeof setTimeout> | undefined

    const handleScrollEnd = () => {
      if (scrollEndTimer) clearTimeout(scrollEndTimer)
      if (!isAutoAdvancingRef.current) normalizeScroll()
    }

    const handleScrollWithFallback = () => {
      handleScroll()
      if (scrollEndTimer) clearTimeout(scrollEndTimer)
      scrollEndTimer = setTimeout(handleScrollEnd, 150)
    }

    track.addEventListener('scroll', handleScrollWithFallback, { passive: true })
    track.addEventListener('scrollend', handleScrollEnd)

    return () => {
      track.removeEventListener('scroll', handleScrollWithFallback)
      track.removeEventListener('scrollend', handleScrollEnd)
      if (scrollEndTimer) clearTimeout(scrollEndTimer)
    }
  }, [getClosestSlideIndex, normalizeScroll, setLogicalIndex])

  const advanceSlide = useCallback(() => {
    const track = trackRef.current
    if (!track) return

    const slides = Array.from(track.children) as HTMLElement[]
    if (slides.length === 0) return

    const closestIndex = getClosestSlideIndex(track)
    const nextIndex =
      closestIndex + 1 < slides.length ? closestIndex + 1 : COURSE_COUNT
    const nextSlide = slides[nextIndex]
    if (!nextSlide) return

    const nextLogical = loopSlides[nextIndex]?.logicalIndex ?? nextIndex % COURSE_COUNT

    isAutoAdvancingRef.current = true
    track.classList.add('the-edge-courses-track--autoplay')
    track.scrollTo({ left: nextSlide.offsetLeft, behavior: 'smooth' })
    setLogicalIndex(nextLogical)

    window.setTimeout(() => {
      track.classList.remove('the-edge-courses-track--autoplay')
      isAutoAdvancingRef.current = false
      normalizeScroll()
    }, 650)
  }, [getClosestSlideIndex, normalizeScroll, setLogicalIndex, loopSlides])

  useEffect(() => {
    const carousel = carouselRef.current
    const section = carousel?.closest('section')
    if (!carousel || !section) return

    let timer: ReturnType<typeof setInterval> | undefined

    const tick = () => {
      if (isHoveredRef.current || isJumpingRef.current || isAutoAdvancingRef.current) return
      if (carousel.clientWidth <= 0) return
      advanceSlide()
    }

    const startAutoplay = () => {
      if (timer != null) return
      timer = window.setInterval(tick, AUTO_SLIDE_MS)
      window.setTimeout(tick, 800)
    }

    const stopAutoplay = () => {
      if (timer == null) return
      window.clearInterval(timer)
      timer = undefined
    }

    const observer = new IntersectionObserver(
      entries => {
        if (entries.some(entry => entry.isIntersecting && entry.intersectionRatio >= 0.15)) {
          startAutoplay()
        } else {
          stopAutoplay()
        }
      },
      { threshold: [0, 0.15, 0.35] },
    )

    observer.observe(section)

    const rect = carousel.getBoundingClientRect()
    if (rect.width > 0 && rect.top < window.innerHeight && rect.bottom > 0) {
      startAutoplay()
    }

    return () => {
      stopAutoplay()
      observer.disconnect()
    }
  }, [advanceSlide])

  return (
    <section
      id="the-edge-courses"
      className="the-edge-courses w-full px-[5px] pt-[5px]"
      aria-labelledby="the-edge-courses-heading"
      data-node-id="1150:772"
    >
      <div
        className="relative mx-auto w-full overflow-hidden section-card-shell bg-white"
        style={{ maxWidth: 'var(--section-card-max-w)' }}
        data-node-id="1100:2053"
      >
        <div
          className="the-edge-courses-inner"
          style={{
            paddingLeft: 'var(--section-padding-x)',
            paddingRight: 'var(--section-padding-x)',
            paddingTop: 'var(--english-ai-curriculum-padding-top)',
            paddingBottom: 'var(--english-ai-curriculum-padding-bottom)',
          }}
        >
          <p
            className="section-eyebrow font-body uppercase text-black"
            style={{
              fontSize: 'var(--section-text-eyebrow)',
              fontVariationSettings: "'opsz' 14",
            }}
          >
            Leadership pathways
          </p>
          <h2
            id="the-edge-courses-heading"
            className="section-heading max-w-[var(--english-ai-heading-max-w)] font-heading font-medium uppercase text-black"
            style={{
              fontSize: 'var(--section-text-heading)',
              marginTop: 'var(--section-eyebrow-to-heading)',
            }}
            data-node-id="1100:2236"
          >
            The edge{' '}
            <span className="heading-highlight">
              courses
            </span>
          </h2>

          <div
            style={{ marginTop: 'var(--the-edge-courses-heading-to-grid)' }}
            onMouseEnter={() => {
              isHoveredRef.current = true
            }}
            onMouseLeave={() => {
              isHoveredRef.current = false
            }}
          >
            <div ref={carouselRef} className="the-edge-courses-carousel" data-node-id="1100:2061">
              <div
                ref={trackRef}
                className="the-edge-courses-track flex overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                aria-roledescription="carousel"
                aria-label="The Edge courses"
              >
                {loopSlides.map(course => (
                  <div
                    key={course.key}
                    className="the-edge-courses-slide shrink-0 snap-start snap-always"
                    style={slideWidth != null ? { width: slideWidth } : undefined}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${course.logicalIndex + 1} of ${COURSE_COUNT}`}
                  >
                    <CourseCard {...course} />
                  </div>
                ))}
              </div>
            </div>

            <CourseDots
              count={COURSE_COUNT}
              activeIndex={activeIndex}
              onSelect={index => scrollToLogicalIndex(index)}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
