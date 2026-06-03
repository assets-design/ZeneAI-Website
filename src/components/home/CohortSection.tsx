import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import bookFlame from '@/assets/figma/home/section-10/book-flame.png'
import chist from '@/assets/figma/home/section-10/chist.png'
import edgewater from '@/assets/figma/home/section-10/edgewater.png'
import helpInternational from '@/assets/figma/home/section-10/help-international.png'
import montfort from '@/assets/figma/home/section-10/montfort.png'
import oakValley from '@/assets/figma/home/section-10/oak-valley.png'
import sanctaMaria from '@/assets/figma/home/section-10/sancta-maria.png'
import schechter from '@/assets/figma/home/section-10/schechter.png'
import ssvm from '@/assets/figma/home/section-10/ssvm.png'
import stPatricks from '@/assets/figma/home/section-10/st-patricks.png'
import { cn } from '@/lib/utils'

type CohortLogo = {
  src: string
  alt: string
  maxW: string
  maxH: string
  nodeId: string
  scale?: number
}

const COHORT_LOGOS: CohortLogo[] = [
  {
    src: helpInternational,
    alt: 'Help International School',
    maxW: 'var(--cohort-logo-help-w)',
    maxH: 'var(--cohort-logo-help-h)',
    scale: 1.12,
    nodeId: '975:1934',
  },
  {
    src: chist,
    alt: 'CHIST',
    maxW: 'var(--cohort-logo-chist-w)',
    maxH: 'var(--cohort-logo-chist-h)',
    scale: 1.08,
    nodeId: '975:1935',
  },
  {
    src: sanctaMaria,
    alt: 'Sancta Maria International School',
    maxW: 'var(--cohort-logo-sancta-w)',
    maxH: 'var(--cohort-logo-sancta-h)',
    scale: 1.1,
    nodeId: '975:1937',
  },
  {
    src: bookFlame,
    alt: 'Seek Truth School',
    maxW: 'var(--cohort-logo-book-w)',
    maxH: 'var(--cohort-logo-book-h)',
    nodeId: '975:1938',
  },
  {
    src: ssvm,
    alt: 'SSVM Institutions',
    maxW: 'var(--cohort-logo-ssvm-w)',
    maxH: 'var(--cohort-logo-ssvm-h)',
    nodeId: '975:1936',
  },
  {
    src: schechter,
    alt: 'Schechter School of Long Island',
    maxW: 'var(--cohort-logo-schechter-w)',
    maxH: 'var(--cohort-logo-schechter-h)',
    nodeId: '975:1939',
  },
  {
    src: edgewater,
    alt: 'Edgewater Elementary',
    maxW: 'var(--cohort-logo-edgewater-w)',
    maxH: 'var(--cohort-logo-edgewater-h)',
    nodeId: '975:1940',
  },
  {
    src: stPatricks,
    alt: "St. Patrick's High School",
    maxW: 'var(--cohort-logo-patricks-w)',
    maxH: 'var(--cohort-logo-patricks-h)',
    scale: 1.35,
    nodeId: '975:1941',
  },
  {
    src: oakValley,
    alt: 'Oak Valley International School',
    maxW: 'var(--cohort-logo-oak-w)',
    maxH: 'var(--cohort-logo-oak-h)',
    nodeId: '975:1942',
  },
  {
    src: montfort,
    alt: 'Montfort School',
    maxW: 'var(--cohort-logo-montfort-w)',
    maxH: 'var(--cohort-logo-montfort-h)',
    nodeId: '975:1943',
  },
]

const COHORT_LOOP_SETS = 3
const COHORT_AUTO_SLIDE_MS = 4500
const COHORT_TABLET_MQ = '(min-width: 640px) and (max-width: 1279px)'
const COHORT_FIRST_LOGO_NODE_ID = COHORT_LOGOS[0].nodeId

function buildHomeCohortSlides(visibleCount: number, step: number) {
  const count = COHORT_LOGOS.length
  const slides: (typeof COHORT_LOGOS)[number][][] = []

  if (step >= visibleCount) {
    for (let index = 0; index < count; index += step) {
      slides.push(
        Array.from({ length: visibleCount }, (_, offset) => COHORT_LOGOS[(index + offset) % count]),
      )
    }
    return slides
  }

  return Array.from({ length: count }, (_, index) =>
    Array.from({ length: visibleCount }, (_, offset) => COHORT_LOGOS[(index + offset) % count]),
  )
}

function useHomeCohortCarouselLayout() {
  const [isTablet, setIsTablet] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(COHORT_TABLET_MQ).matches : false,
  )

  useEffect(() => {
    const mq = window.matchMedia(COHORT_TABLET_MQ)
    const handleChange = () => setIsTablet(mq.matches)
    handleChange()
    mq.addEventListener('change', handleChange)
    return () => mq.removeEventListener('change', handleChange)
  }, [])

  return isTablet
    ? { visibleCount: 3, step: 1, isTablet: true as const }
    : { visibleCount: 2, step: 2, isTablet: false as const }
}

function HomeCohortLogoCarousel({ marginTop }: { marginTop: string }) {
  const { visibleCount, step, isTablet } = useHomeCohortCarouselLayout()
  const slides = useMemo(
    () => buildHomeCohortSlides(visibleCount, step),
    [visibleCount, step],
  )
  const loopSlides = useMemo(
    () =>
      Array.from({ length: COHORT_LOOP_SETS }, (_, setIndex) =>
        slides.map((group, slideIndex) => ({
          key: `home-cohort-${setIndex}-${slideIndex}`,
          logos: group,
          logicalIndex: slideIndex,
        })),
      ).flat(),
    [slides],
  )

  const trackRef = useRef<HTMLDivElement>(null)
  const isJumpingRef = useRef(false)
  const activeIndexRef = useRef(0)
  const [activeIndex, setActiveIndex] = useState(0)

  const setLogicalIndex = useCallback((logicalIndex: number) => {
    activeIndexRef.current = logicalIndex
    setActiveIndex(logicalIndex)
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
      if (!track || slides.length === 0) return

      const slide = track.children[slides.length + logicalIndex] as HTMLElement | undefined
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
    [setLogicalIndex, slides.length],
  )

  const normalizeScroll = useCallback(() => {
    const track = trackRef.current
    if (!track || isJumpingRef.current || slides.length === 0) return

    const closestIndex = getClosestSlideIndex(track)
    const count = slides.length
    const logicalIndex = ((closestIndex % count) + count) % count

    setLogicalIndex(logicalIndex)

    if (closestIndex < count) {
      const target = track.children[closestIndex + count] as HTMLElement | undefined
      if (!target) return

      isJumpingRef.current = true
      track.scrollTo({ left: target.offsetLeft, behavior: 'auto' })
      requestAnimationFrame(() => {
        isJumpingRef.current = false
      })
      return
    }

    if (closestIndex >= count * 2) {
      const target = track.children[closestIndex - count] as HTMLElement | undefined
      if (!target) return

      isJumpingRef.current = true
      track.scrollTo({ left: target.offsetLeft, behavior: 'auto' })
      requestAnimationFrame(() => {
        isJumpingRef.current = false
      })
    }
  }, [getClosestSlideIndex, setLogicalIndex, slides.length])

  useEffect(() => {
    activeIndexRef.current = 0
    setActiveIndex(0)
    requestAnimationFrame(() => {
      scrollToLogicalIndex(0, 'auto')
    })
  }, [isTablet, scrollToLogicalIndex, slides.length])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const handleScroll = () => {
      if (isJumpingRef.current || slides.length === 0) return

      const closestIndex = getClosestSlideIndex(track)
      const count = slides.length
      setLogicalIndex(((closestIndex % count) + count) % count)
    }

    let scrollEndTimer: ReturnType<typeof setTimeout> | undefined

    const handleScrollEnd = () => {
      if (scrollEndTimer) clearTimeout(scrollEndTimer)
      normalizeScroll()
    }

    const handleScrollWithFallback = () => {
      handleScroll()
      if (scrollEndTimer) clearTimeout(scrollEndTimer)
      scrollEndTimer = setTimeout(handleScrollEnd, 150)
    }

    track.addEventListener('scroll', handleScrollWithFallback, { passive: true })
    track.addEventListener('scrollend', handleScrollEnd)

    const resizeObserver = new ResizeObserver(() => {
      scrollToLogicalIndex(activeIndexRef.current, 'auto')
    })
    resizeObserver.observe(track)

    return () => {
      track.removeEventListener('scroll', handleScrollWithFallback)
      track.removeEventListener('scrollend', handleScrollEnd)
      if (scrollEndTimer) clearTimeout(scrollEndTimer)
      resizeObserver.disconnect()
    }
  }, [getClosestSlideIndex, normalizeScroll, scrollToLogicalIndex, setLogicalIndex, slides.length])

  useEffect(() => {
    if (slides.length <= 1) return

    const timer = window.setInterval(() => {
      const nextIndex = (activeIndexRef.current + 1) % slides.length
      scrollToLogicalIndex(nextIndex)
    }, COHORT_AUTO_SLIDE_MS)

    return () => window.clearInterval(timer)
  }, [scrollToLogicalIndex, slides.length])

  if (slides.length === 0) return null

  return (
    <div className="cohort-logo-carousel xl:hidden" style={{ marginTop }}>
      <div
        ref={trackRef}
        className="cohort-logo-track flex snap-x snap-mandatory overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-roledescription="carousel"
        aria-label="School partner logos"
      >
        {loopSlides.map((slide) => (
          <div
            key={slide.key}
            className="cohort-logo-slide flex w-full shrink-0 snap-center snap-always"
            style={{ minHeight: 'var(--cohort-logo-row-h)' }}
            role="group"
            aria-roledescription="slide"
            aria-label={`${slide.logicalIndex + 1} of ${slides.length}`}
          >
            {slide.logos.map((logo) => (
              <div
                key={`${slide.key}-${logo.nodeId}`}
                className="cohort-logo-slide__cell flex min-w-0 flex-1 items-center justify-center"
              >
                <CohortLogoCell
                  {...logo}
                  sizeMultiplier={
                    isTablet && logo.nodeId === COHORT_FIRST_LOGO_NODE_ID ? 0.9 : 1
                  }
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      <div
        className="flex items-center justify-center"
        role="tablist"
        aria-label="Choose partner logo slide"
        style={{
          marginTop: 'var(--cohort-carousel-to-dots)',
          gap: 'var(--cohort-dot-gap)',
        }}
      >
        {slides.map((group, index) => (
          <button
            key={`cohort-dot-${index}-${group[0]?.nodeId ?? index}`}
            type="button"
            role="tab"
            aria-label={`Show partner logos slide ${index + 1}`}
            aria-selected={activeIndex === index}
            onClick={() => scrollToLogicalIndex(index)}
            className={cn(
              'rounded-full border-0 p-0 transition-colors',
              activeIndex === index ? 'bg-black' : 'bg-black/20',
            )}
            style={{
              width: 'var(--cohort-dot-size)',
              height: 'var(--cohort-dot-size)',
            }}
          />
        ))}
      </div>
    </div>
  )
}

function LegacyCohortLogoCarousel({ marginTop }: { marginTop: string }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const isJumpingRef = useRef(false)
  const activeIndexRef = useRef(0)
  const [activeIndex, setActiveIndex] = useState(0)

  const setLogicalIndex = useCallback((logicalIndex: number) => {
    activeIndexRef.current = logicalIndex
    setActiveIndex(logicalIndex)
  }, [])

  const loopLogos = useMemo(
    () =>
      Array.from({ length: COHORT_LOOP_SETS }, (_, setIndex) =>
        COHORT_LOGOS.map((logo, logoIndex) => ({
          ...logo,
          key: `${logo.nodeId}-${setIndex}-${logoIndex}`,
          logicalIndex: logoIndex,
        })),
      ).flat(),
    [],
  )

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

      const slide = track.children[COHORT_LOGOS.length + logicalIndex] as HTMLElement | undefined
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
    if (!track || isJumpingRef.current) return

    const closestIndex = getClosestSlideIndex(track)
    const count = COHORT_LOGOS.length
    const logicalIndex = ((closestIndex % count) + count) % count

    setLogicalIndex(logicalIndex)

    if (closestIndex < count) {
      const target = track.children[closestIndex + count] as HTMLElement | undefined
      if (!target) return

      isJumpingRef.current = true
      track.scrollTo({ left: target.offsetLeft, behavior: 'auto' })
      requestAnimationFrame(() => {
        isJumpingRef.current = false
      })
      return
    }

    if (closestIndex >= count * 2) {
      const target = track.children[closestIndex - count] as HTMLElement | undefined
      if (!target) return

      isJumpingRef.current = true
      track.scrollTo({ left: target.offsetLeft, behavior: 'auto' })
      requestAnimationFrame(() => {
        isJumpingRef.current = false
      })
    }
  }, [getClosestSlideIndex, setLogicalIndex])

  useEffect(() => {
    requestAnimationFrame(() => {
      scrollToLogicalIndex(0, 'auto')
    })
  }, [scrollToLogicalIndex])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const handleScroll = () => {
      if (isJumpingRef.current) return

      const closestIndex = getClosestSlideIndex(track)
      const count = COHORT_LOGOS.length
      setLogicalIndex(((closestIndex % count) + count) % count)
    }

    let scrollEndTimer: ReturnType<typeof setTimeout> | undefined

    const handleScrollEnd = () => {
      if (scrollEndTimer) clearTimeout(scrollEndTimer)
      normalizeScroll()
    }

    const handleScrollWithFallback = () => {
      handleScroll()
      if (scrollEndTimer) clearTimeout(scrollEndTimer)
      scrollEndTimer = setTimeout(handleScrollEnd, 150)
    }

    track.addEventListener('scroll', handleScrollWithFallback, { passive: true })
    track.addEventListener('scrollend', handleScrollEnd)

    const resizeObserver = new ResizeObserver(() => {
      scrollToLogicalIndex(activeIndexRef.current, 'auto')
    })
    resizeObserver.observe(track)

    return () => {
      track.removeEventListener('scroll', handleScrollWithFallback)
      track.removeEventListener('scrollend', handleScrollEnd)
      if (scrollEndTimer) clearTimeout(scrollEndTimer)
      resizeObserver.disconnect()
    }
  }, [getClosestSlideIndex, normalizeScroll, scrollToLogicalIndex, setLogicalIndex])

  return (
    <div className="xl:hidden" style={{ marginTop }}>
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-roledescription="carousel"
        aria-label="School partner logos"
      >
        {loopLogos.map((logo, index) => (
          <div
            key={logo.key}
            className="flex w-1/2 shrink-0 snap-start snap-always items-center justify-center sm:w-1/3"
            style={{ minHeight: 'var(--cohort-logo-row-h)' }}
            role="group"
            aria-roledescription="slide"
            aria-label={`${(index % COHORT_LOGOS.length) + 1} of ${COHORT_LOGOS.length}`}
          >
            <CohortLogoCell {...logo} />
          </div>
        ))}
      </div>

      <div
        className="flex items-center justify-center"
        role="tablist"
        aria-label="Choose partner logo slide"
        style={{
          marginTop: 'var(--cohort-carousel-to-dots)',
          gap: 'var(--cohort-dot-gap)',
        }}
      >
        {COHORT_LOGOS.map((logo, index) => (
          <button
            key={logo.nodeId}
            type="button"
            role="tab"
            aria-label={`Show ${logo.alt}`}
            aria-selected={activeIndex === index}
            onClick={() => scrollToLogicalIndex(index)}
            className={cn(
              'rounded-full border-0 p-0 transition-colors',
              activeIndex === index ? 'bg-black' : 'bg-black/20',
            )}
            style={{
              width: 'var(--cohort-dot-size)',
              height: 'var(--cohort-dot-size)',
            }}
          />
        ))}
      </div>
    </div>
  )
}

function CohortLogoCarousel({
  marginTop,
  variant,
}: {
  marginTop: string
  variant: 'home' | 'about' | 'code-monkey' | 'the-edge'
}) {
  if (variant === 'home') {
    return <HomeCohortLogoCarousel marginTop={marginTop} />
  }

  return <LegacyCohortLogoCarousel marginTop={marginTop} />
}

type CohortSectionProps = {
  variant?: 'home' | 'about' | 'code-monkey' | 'the-edge'
}

function CohortLogoCell({
  src,
  alt,
  maxW,
  maxH,
  nodeId,
  scale = 1,
  sizeMultiplier = 1,
}: CohortLogo & { sizeMultiplier?: number }) {
  const totalScale = scale * sizeMultiplier

  return (
    <div
      className="flex items-center justify-center"
      style={{ minHeight: 'var(--cohort-logo-row-h)' }}
      data-node-id={nodeId}
    >
      <img
        src={src}
        alt={alt}
        className="max-w-full object-contain"
        style={{
          width: maxW,
          height: maxH,
          transform: totalScale !== 1 ? `scale(${totalScale})` : undefined,
        }}
        loading="lazy"
      />
    </div>
  )
}

function CohortHeader({ variant }: { variant: 'home' | 'about' | 'code-monkey' | 'the-edge' }) {
  if (variant === 'about') {
    return (
      <>
        <p
          className="section-eyebrow font-body uppercase text-black"
          style={{
            fontSize: 'var(--section-text-eyebrow)',
            fontVariationSettings: "'opsz' 14",
          }}
        >
          Our partners
        </p>
        <h2
          id="about-partners-heading"
          className="max-w-full font-heading font-medium uppercase leading-none text-black"
          style={{
            fontSize: 'var(--section-text-heading)',
            marginTop: 'var(--section-eyebrow-to-heading)',
          }}
          data-node-id="642:1396"
        >
        <span className="block" data-node-id="642:1397">
          trusted by
        </span>
        <span
          className="mt-[var(--section-gap)] flex flex-nowrap items-end"
          style={{ gap: 'var(--about-partners-heading-word-gap)' }}
        >
          <span
            className="inline-flex shrink-0 items-center bg-zene-cyan"
            style={{
              minHeight: 'var(--about-highlight-h)',
              paddingLeft: 'var(--about-highlight-pad-x)',
              paddingRight: 'var(--about-highlight-pad-x)',
            }}
            data-node-id="642:1400"
          >
            education
          </span>
          <span className="shrink-0" data-node-id="642:1398">
            Partners
          </span>
        </span>
      </h2>
      </>
    )
  }

  const isCustomProgram = variant === 'code-monkey' || variant === 'the-edge'
  const highlightStyle = {
    minHeight: 'var(--english-ai-highlight-h)',
    paddingLeft: 'var(--english-ai-highlight-pad-x)',
    paddingRight: 'var(--english-ai-highlight-pad-x)',
  } as const

  return (
    <>
      <p
        className="section-eyebrow font-body uppercase text-black"
        style={{
          fontSize: 'var(--section-text-eyebrow)',
          fontVariationSettings: "'opsz' 14",
        }}
        data-node-id="975:1931"
      >
        {variant === 'the-edge'
          ? 'Success stories'
          : isCustomProgram
            ? 'Partners'
            : 'Our cohort'}
      </p>

      <h2
        id={variant === 'the-edge' ? 'the-edge-cohort-heading' : 'cohort-heading'}
        className="font-heading font-medium uppercase leading-none text-black"
        style={{
          fontSize: 'var(--section-text-heading)',
          maxWidth: 'var(--cohort-heading-max-w)',
          marginTop: 'var(--cohort-eyebrow-to-heading)',
        }}
        data-node-id="975:1932"
      >
        {variant === 'the-edge' ? (
          <>
            Real students.{' '}
            <span className="inline-flex items-center bg-zene-cyan" style={highlightStyle}>
              Real progress.
            </span>
          </>
        ) : (
          <>
            Schools currently in the{' '}
            <span className="bg-[#78F3FA]" data-node-id="975:1930">
              Zene cohort.
            </span>
          </>
        )}
      </h2>

      {variant !== 'the-edge' && variant !== 'about' ? (
        <p
          className="normal-case font-body font-normal leading-normal text-black"
          style={{
            fontSize: 'var(--section-text-body)',
            fontVariationSettings: "'opsz' 14",
            maxWidth: 'var(--cohort-body-max-w)',
            marginTop: 'var(--cohort-heading-to-body)',
          }}
          data-node-id="975:1928"
        >
          Trusted by visionary schools across India and the US.
        </p>
      ) : null}
    </>
  )
}

export function CohortSection({ variant = 'home' }: CohortSectionProps) {
  const headingId =
    variant === 'about'
      ? 'about-partners-heading'
      : variant === 'the-edge'
        ? 'the-edge-cohort-heading'
        : 'cohort-heading'
  const logosMarginTop =
    variant === 'about'
      ? 'var(--about-partners-heading-to-logos)'
      : 'var(--cohort-body-to-logos)'

  return (
    <section
      className="w-full px-[5px] pt-[5px]"
      aria-labelledby={headingId}
      data-node-id={variant === 'about' ? '642:1330' : '1023:1891'}
    >
      <div
        className="cohort-card relative mx-auto flex h-full min-h-0 w-full flex-col overflow-hidden section-card-shell bg-white"
        style={{ maxWidth: 'var(--section-card-max-w)' }}
        data-node-id={variant === 'about' ? '642:1330' : '975:1926'}
      >
        <div
          className="cohort-card-inner"
          style={{
            paddingLeft: 'var(--section-padding-x)',
            paddingRight: 'var(--section-padding-x)',
            paddingTop: 'var(--cohort-padding-top)',
            paddingBottom: 'var(--cohort-padding-bottom)',
          }}
        >
          <CohortHeader variant={variant} />

          <CohortLogoCarousel marginTop={logosMarginTop} variant={variant} />

          <div
            className="hidden grid-cols-2 items-center justify-items-center md:grid-cols-3 xl:grid xl:grid-cols-5"
            style={{
              marginTop: logosMarginTop,
              paddingLeft: 'var(--cohort-logo-padding-x)',
              paddingRight: 'var(--cohort-logo-padding-x)',
              rowGap: 'var(--cohort-logo-row-gap)',
              columnGap: 'var(--cohort-grid-col-gap)',
            }}
            data-node-id={variant === 'about' ? '642:1401' : '975:1933'}
          >
            {COHORT_LOGOS.map(logo => (
              <CohortLogoCell key={logo.nodeId} {...logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
