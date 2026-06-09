import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'

import award01 from '@/assets/figma/code-monkey/awards/award-01.png'
import award02 from '@/assets/figma/code-monkey/awards/award-02.png'
import award03 from '@/assets/figma/code-monkey/awards/award-03.png'
import award04 from '@/assets/figma/code-monkey/awards/award-04.png'
import award05 from '@/assets/figma/code-monkey/awards/award-05.png'
import award06 from '@/assets/figma/code-monkey/awards/award-06.png'
import award07 from '@/assets/figma/code-monkey/awards/award-07.png'
import award08 from '@/assets/figma/code-monkey/awards/award-08.png'
import award09 from '@/assets/figma/code-monkey/awards/award-09.png'
import award10 from '@/assets/figma/code-monkey/awards/award-10.png'
import award11 from '@/assets/figma/code-monkey/awards/award-11.png'
import award12 from '@/assets/figma/code-monkey/awards/award-12.png'
import { cn } from '@/lib/utils'

const AWARD_LOGOS = [
  {
    src: award01,
    alt: 'Practical Homeschooling 2023 i-Learn Awards',
    nodeId: '1329:1983',
  },
  {
    src: award02,
    alt: 'Tech and Learning Best of Show ISTELive 22 Winner',
    nodeId: '1329:1982',
  },
  {
    src: award03,
    alt: 'EdTechReview EdTech Solution for K-12',
    nodeId: '1329:1984',
  },
  {
    src: award04,
    alt: 'Education Alliance Finland 2018 Certified',
    nodeId: '1329:1985',
  },
  {
    src: award05,
    alt: "Parents' Picks Awards 2024",
    nodeId: '1329:1986',
  },
  {
    src: award06,
    alt: 'Practical Homeschooling 2024 i-Learn Awards',
    nodeId: '1329:1987',
  },
  {
    src: award07,
    alt: "Mom's Choice Awards Honoring Excellence",
    nodeId: '1329:1988',
  },
  {
    src: award08,
    alt: "What's On 4 Kids 2019 Awards Winner",
    nodeId: '1329:1989',
  },
  {
    src: award09,
    alt: 'The Golden Bridge Awards Best 2019',
    nodeId: '1329:1991',
  },
  {
    src: award10,
    alt: "Parents' Choice Approved",
    nodeId: '1329:1990',
  },
  {
    src: award11,
    alt: 'Best of STEM Educators Pick Winner 2024',
    nodeId: '1329:1992',
  },
  {
    src: award12,
    alt: 'EdTech Breakthrough Awards',
    nodeId: '1329:1993',
  },
] as const

const STATS = [
  {
    value: '18,000+',
    body: 'Schools globally use Code Monkey.',
    valueNodeId: '1297:1138',
    bodyNodeId: '1297:1139',
  },
  {
    value: '10+ yrs',
    body: 'Refining a curriculum that works in real classrooms.',
    valueNodeId: '1297:1141',
    bodyNodeId: '1297:1140',
  },
  {
    value: 'Millions',
    body: 'Of students have learned to code through the platform.',
    valueNodeId: '1297:1144',
    bodyNodeId: '1297:1142',
  },
  {
    value: 'COPPA',
    body: 'Safe Harbor Certified for student data protection.',
    valueNodeId: '1297:1145',
    bodyNodeId: '1297:1143',
  },
] as const

const LOOP_SETS = 3
const AUTO_SLIDE_MS = 4500
const SLIDE_STEP = 2

const highlightStyle = {
  minHeight: 'var(--english-ai-highlight-h)',
  paddingLeft: 'var(--english-ai-highlight-pad-x)',
  paddingRight: 'var(--english-ai-highlight-pad-x)',
} as const

function getVisibleLogoCount(width: number) {
  if (width >= 640) return 8
  return 4
}

function buildAwardSlides(visibleCount: number) {
  const count = AWARD_LOGOS.length
  const slides: (typeof AWARD_LOGOS)[number][][] = []

  if (visibleCount >= count) {
    slides.push([...AWARD_LOGOS])
    return slides
  }

  for (let start = 0; start <= count - visibleCount; start += SLIDE_STEP) {
    slides.push(AWARD_LOGOS.slice(start, start + visibleCount))
  }

  return slides
}

function WhyDots({
  count,
  activeIndex,
  onSelect,
}: {
  count: number
  activeIndex: number
  onSelect: (index: number) => void
}) {
  if (count <= 1) return null

  return (
    <div
      className="flex items-center justify-center"
      role="tablist"
      aria-label="Choose award logo slide"
      style={{
        marginTop: 'var(--code-monkey-why-carousel-to-dots)',
        gap: 'var(--code-monkey-why-dot-gap)',
      }}
    >
      {Array.from({ length: count }, (_, index) => (
        <button
          key={index}
          type="button"
          role="tab"
          aria-label={`Show awards ${index + 1}`}
          aria-selected={activeIndex === index}
          onClick={() => onSelect(index)}
          className={cn(
            'rounded-full border border-black p-0 transition-colors',
            activeIndex === index ? 'bg-black' : 'bg-transparent',
          )}
          style={{
            width: 'var(--code-monkey-why-dot-size)',
            height: 'var(--code-monkey-why-dot-size)',
          }}
        />
      ))}
    </div>
  )
}

function AwardLogoCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const isJumpingRef = useRef(false)
  const isHoveredRef = useRef(false)
  const isAutoAdvancingRef = useRef(false)
  const activeIndexRef = useRef(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(8)

  const slides = useMemo(() => buildAwardSlides(visibleCount), [visibleCount])
  const slideCount = slides.length

  const loopSlides = useMemo(
    () =>
      Array.from({ length: LOOP_SETS }, (_, setIndex) =>
        slides.map((logos, slideIndex) => ({
          key: `code-monkey-awards-${setIndex}-${slideIndex}`,
          logos,
          logicalIndex: slideIndex,
        })),
      ).flat(),
    [slides],
  )

  const setLogicalIndex = useCallback((logicalIndex: number) => {
    activeIndexRef.current = logicalIndex
    setActiveIndex(logicalIndex)
  }, [])

  const updateVisibleCount = useCallback(() => {
    const carousel = carouselRef.current
    if (!carousel) return
    const width = carousel.clientWidth
    if (width <= 0) return
    setVisibleCount(getVisibleLogoCount(width))
  }, [])

  const getClosestSlideIndex = useCallback((track: HTMLDivElement) => {
    const slideEls = Array.from(track.children) as HTMLElement[]
    if (slideEls.length === 0) return 0

    let closestIndex = 0
    let closestDistance = Number.POSITIVE_INFINITY

    slideEls.forEach((slide, index) => {
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
      if (!track || slideCount === 0) return

      const slide = track.children[slideCount + logicalIndex] as HTMLElement | undefined
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
    [setLogicalIndex, slideCount],
  )

  const normalizeScroll = useCallback(() => {
    const track = trackRef.current
    if (!track || isJumpingRef.current || isAutoAdvancingRef.current || slideCount === 0) return

    const closestIndex = getClosestSlideIndex(track)
    const logicalIndex = ((closestIndex % slideCount) + slideCount) % slideCount

    setLogicalIndex(logicalIndex)

    if (closestIndex < slideCount) {
      const target = track.children[closestIndex + slideCount] as HTMLElement | undefined
      if (!target) return

      isJumpingRef.current = true
      track.scrollTo({ left: target.offsetLeft, behavior: 'auto' })
      requestAnimationFrame(() => {
        isJumpingRef.current = false
      })
      return
    }

    if (closestIndex >= slideCount * 2) {
      const target = track.children[closestIndex - slideCount] as HTMLElement | undefined
      if (!target) return

      isJumpingRef.current = true
      track.scrollTo({ left: target.offsetLeft, behavior: 'auto' })
      requestAnimationFrame(() => {
        isJumpingRef.current = false
      })
    }
  }, [getClosestSlideIndex, setLogicalIndex, slideCount])

  const advanceSlide = useCallback(() => {
    const track = trackRef.current
    if (!track || slideCount <= 1) return

    const slidesEls = Array.from(track.children) as HTMLElement[]
    if (slidesEls.length === 0) return

    const closestIndex = getClosestSlideIndex(track)
    const targetIndex =
      closestIndex + 1 < slidesEls.length ? closestIndex + 1 : slideCount
    const targetSlide = slidesEls[targetIndex]
    if (!targetSlide) return

    const targetLogical =
      loopSlides[targetIndex]?.logicalIndex ??
      ((targetIndex % slideCount) + slideCount) % slideCount

    isAutoAdvancingRef.current = true
    track.classList.add('code-monkey-why-track--autoplay')
    track.scrollTo({ left: targetSlide.offsetLeft, behavior: 'smooth' })
    setLogicalIndex(targetLogical)

    window.setTimeout(() => {
      track.classList.remove('code-monkey-why-track--autoplay')
      isAutoAdvancingRef.current = false
      normalizeScroll()
    }, 650)
  }, [getClosestSlideIndex, loopSlides, normalizeScroll, setLogicalIndex, slideCount])

  useLayoutEffect(() => {
    updateVisibleCount()
  }, [updateVisibleCount])

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const resizeObserver = new ResizeObserver(() => {
      updateVisibleCount()
      scrollToLogicalIndex(0, 'auto')
    })
    resizeObserver.observe(carousel)

    return () => resizeObserver.disconnect()
  }, [scrollToLogicalIndex, updateVisibleCount])

  useEffect(() => {
    activeIndexRef.current = 0
    setActiveIndex(0)
    requestAnimationFrame(() => {
      scrollToLogicalIndex(0, 'auto')
    })
  }, [visibleCount, scrollToLogicalIndex])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const handleScroll = () => {
      if (isJumpingRef.current || slideCount === 0) return

      const closestIndex = getClosestSlideIndex(track)
      setLogicalIndex(((closestIndex % slideCount) + slideCount) % slideCount)
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
  }, [getClosestSlideIndex, normalizeScroll, setLogicalIndex, slideCount])

  useEffect(() => {
    const carousel = carouselRef.current
    const section = carousel?.closest('section')
    if (!carousel || !section || slideCount <= 1) return

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
  }, [advanceSlide, slideCount])

  return (
    <div
      data-node-id="1333:820"
      onMouseEnter={() => {
        isHoveredRef.current = true
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false
      }}
    >
      <div ref={carouselRef} className="code-monkey-why-carousel min-w-0 overflow-hidden">
        <div
          ref={trackRef}
          className="code-monkey-why-track flex overflow-x-auto snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-roledescription="carousel"
          aria-label="Code Monkey awards and certifications"
        >
          {loopSlides.map(slide => (
            <div
              key={slide.key}
              className="code-monkey-why-slide shrink-0 snap-start snap-always"
              role="group"
              aria-roledescription="slide"
              aria-label={`${slide.logicalIndex + 1} of ${slideCount}`}
            >
              <div className="code-monkey-why-logo-row">
                {slide.logos.map(logo => (
                  <div
                    key={`${slide.key}-${logo.nodeId}`}
                    className="code-monkey-why-logo-cell"
                    data-node-id={logo.nodeId}
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="code-monkey-why-logo"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <WhyDots count={slideCount} activeIndex={activeIndex} onSelect={index => scrollToLogicalIndex(index)} />
    </div>
  )
}

export function CodeMonkeyWhySection() {
  return (
    <section
      id="code-monkey-why"
      className="code-monkey-why w-full px-[5px] pt-[5px]"
      aria-labelledby="code-monkey-why-heading"
      data-node-id="1331:819"
    >
      <div
        className="relative mx-auto w-full overflow-hidden section-card-shell bg-white"
        style={{ maxWidth: 'var(--section-card-max-w)' }}
      >
        <div
          className="code-monkey-why-inner"
          style={{
            paddingLeft: 'var(--section-padding-x)',
            paddingRight: 'var(--section-padding-x)',
            paddingTop: 'var(--english-ai-grid-padding-top)',
            paddingBottom: 'var(--english-ai-grid-padding-bottom)',
          }}
        >
          <p
            className="section-eyebrow font-body uppercase text-black"
            style={{
              fontSize: 'var(--section-text-eyebrow)',
              fontVariationSettings: "'opsz' 14",
            }}
            data-node-id="1294:826"
          >
            Trusted globally. Now in India.
          </p>

          <h2
            id="code-monkey-why-heading"
            className="section-heading max-w-[var(--english-ai-heading-max-w)] font-heading font-medium uppercase text-black"
            style={{
              fontSize: 'var(--section-text-heading)',
              marginTop: 'var(--english-ai-grid-eyebrow-to-heading)',
            }}
            data-node-id="1294:891"
          >
            Why bring{' '}
            <span className="inline-flex items-center bg-zene-cyan" style={highlightStyle}>
              Code Monkey
            </span>{' '}
            to your school.
          </h2>

          <p
            className="capitalize font-body font-normal leading-normal text-black"
            style={{
              fontSize: 'var(--section-text-body)',
              fontVariationSettings: "'opsz' 14",
              maxWidth: 'var(--code-monkey-why-subtitle-max-w)',
              marginTop: 'var(--english-ai-grid-heading-to-subtitle)',
            }}
            data-node-id="1294:802"
          >
            Code Monkey has spent ten years building the world&apos;s most engaging K–12 coding
            curriculum. Zene brings it to Indian schools — with the local support your team needs.
          </p>

          <div
            className="code-monkey-why-stats"
            style={{ marginTop: 'var(--code-monkey-why-subtitle-to-stats)' }}
            data-node-id="1331:818"
          >
            {STATS.map((stat, index) => (
              <div key={stat.valueNodeId} className="code-monkey-why-stat min-w-0">
                {index > 0 ? <div className="code-monkey-why-stat-divider" aria-hidden /> : null}
                <p
                  className="code-monkey-why-stat-value mb-0 font-heading font-bold uppercase leading-none text-black"
                  style={{ fontSize: 'var(--code-monkey-why-stat-value-size)' }}
                  data-node-id={stat.valueNodeId}
                >
                  {stat.value}
                </p>
                <p
                  className="code-monkey-why-stat-body mb-0 capitalize font-body font-normal leading-normal text-black"
                  style={{
                    fontSize: 'var(--section-text-body)',
                    fontVariationSettings: "'opsz' 14",
                    marginTop: 'var(--code-monkey-why-stat-value-to-body)',
                  }}
                  data-node-id={stat.bodyNodeId}
                >
                  {stat.body}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 'var(--code-monkey-why-stats-to-carousel)' }}>
            <AwardLogoCarousel />
          </div>
        </div>
      </div>
    </section>
  )
}
