import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, type ReactNode } from 'react'

import imgBeaverAchiever from '@/assets/figma/the-edge/courses/beaver-achiever.png'
import imgCodemonkeyJr from '@/assets/figma/the-edge/courses/codemonkey-jr.png'
import imgDodoDoesMath from '@/assets/figma/the-edge/courses/dodo-does-math.png'
import imgArtificialIntelligence from '@/assets/figma/code-monkey/journey/artificial-intelligence.png'
import imgBananaTales from '@/assets/figma/code-monkey/journey/banana-tales.png'
import imgCodingAdventure from '@/assets/figma/code-monkey/journey/coding-adventure.png'
import imgCodingChatbots from '@/assets/figma/code-monkey/journey/coding-chatbots.png'
import imgDataScience from '@/assets/figma/code-monkey/journey/data-science.png'
import imgDigitalLiteracy from '@/assets/figma/code-monkey/journey/digital-literacy.png'
import imgGameBuilder from '@/assets/figma/code-monkey/journey/game-builder.png'
import imgHighSchoolCs from '@/assets/figma/code-monkey/journey/high-school-cs.png'
import { cn } from '@/lib/utils'

import { CodeMonkeySampleVideoModal } from '@/components/code-monkey/CodeMonkeySampleVideoModal'

const COURSES = [
  {
    image: imgCodemonkeyJr,
    title: 'CodeMonkey Jr. Pre-K & Kindergarten',
    body: 'Block-based coding for the youngest learners. Sequencing and loops, taught through play.',
    imageNodeId: '1297:1068',
    titleNodeId: '1294:844',
    bodyNodeId: '1294:845',
    linkNodeId: '1297:1044',
  },
  {
    image: imgBeaverAchiever,
    title: 'Beaver Achiever Grade 1 & 2',
    body: 'A block-based coding game for beginners. Logic, patterns, and problem-solving.',
    imageNodeId: '1297:1069',
    titleNodeId: '1297:1050',
    bodyNodeId: '1297:1051',
    linkNodeId: '1297:1048',
  },
  {
    image: imgDodoDoesMath,
    title: 'Dodo Does Math Grade 2 to 4',
    body: 'A coding game for practicing math concepts. Geometry, fractions, and arithmetic through code.',
    imageNodeId: '1297:1070',
    titleNodeId: '1297:1055',
    bodyNodeId: '1297:1056',
    linkNodeId: '1297:1053',
  },
  {
    image: imgCodingAdventure,
    title: 'Coding Adventure Grade 3 to 5',
    body: 'The flagship Code Monkey course. Students learn real CoffeeScript syntax through a banana-catching game.',
    imageNodeId: '1297:1071',
    titleNodeId: '1297:1073',
    bodyNodeId: '1297:1074',
    linkNodeId: '1297:1072',
  },
  {
    image: imgGameBuilder,
    title: 'Game Builder Grade 4 to 6',
    body: 'Students start creating their own games. Game design fundamentals, with real code.',
    imageNodeId: '1297:2292',
    titleNodeId: '1297:1076',
    bodyNodeId: '1297:1077',
    linkNodeId: '1297:1075',
  },
  {
    image: imgBananaTales,
    title: 'Banana Tales Grade 5 to 7',
    body: 'Python introduced through a story-based adventure. Real text-based coding, no syntax memorization.',
    imageNodeId: '1297:2296',
    titleNodeId: '1297:1079',
    bodyNodeId: '1297:1080',
    linkNodeId: '1297:1078',
  },
  {
    image: imgCodingChatbots,
    title: 'Coding Chatbots Grade 6 to 8',
    body: 'Build a Python-based guessing game chatbot. Variables, conditionals, and user input.',
    imageNodeId: '1297:2297',
    titleNodeId: '1297:1084',
    bodyNodeId: '1297:1087',
    linkNodeId: '1297:1081',
  },
  {
    image: imgDataScience,
    title: 'Data Science Course Grade 7 to 9',
    body: (
      <>
        An introduction to data analysis, visualization, and{' '}
        <br className="hidden xl:block" aria-hidden />
        statistics — using Python.
      </>
    ),
    imageNodeId: '1297:2298',
    titleNodeId: '1297:1085',
    bodyNodeId: '1297:1088',
    linkNodeId: '1297:1082',
  },
  {
    image: imgArtificialIntelligence,
    title: 'Artificial Intelligence Course Grade 8 to 10',
    body: 'Hands-on AI concepts — machine learning basics, neural networks, and model training.',
    imageNodeId: '1297:2299',
    titleNodeId: '1297:1086',
    bodyNodeId: '1297:1089',
    linkNodeId: '1297:1083',
  },
  {
    image: imgDigitalLiteracy,
    title: 'Digital Literacy Courses All grades',
    body: 'Online safety, digital citizenship, and computational thinking. The foundation every student needs.',
    imageNodeId: '1297:2300',
    titleNodeId: '1297:1091',
    bodyNodeId: '1297:1092',
    linkNodeId: '1297:1090',
  },
  {
    image: imgHighSchoolCs,
    title: 'High School CS Courses Grade 9 to 12',
    body: 'AP Computer Science Principles, Intro to CS, Web Development, Game Design in JavaScript.',
    imageNodeId: '1297:2301',
    titleNodeId: '1297:1094',
    bodyNodeId: '1297:1095',
    linkNodeId: '1297:1093',
  },
] as const

const COURSE_COUNT = COURSES.length
const LOOP_SETS = 3
const AUTO_SLIDE_MS = 4500

const highlightStyle = {
  minHeight: 'var(--english-ai-highlight-h)',
  paddingLeft: 'var(--english-ai-highlight-pad-x)',
  paddingRight: 'var(--english-ai-highlight-pad-x)',
} as const

function getVisibleCount(width: number) {
  if (width >= 640) return 3
  return 1
}

function getSlideGapPx(element: HTMLElement) {
  const gap = getComputedStyle(element).gap
  const parsed = Number.parseFloat(gap)
  return Number.isFinite(parsed) ? parsed : 24
}

function JourneyCourseCard({
  image,
  title,
  body,
  imageNodeId,
  titleNodeId,
  bodyNodeId,
  linkNodeId,
  onWatchSample,
}: {
  image: (typeof COURSES)[number]['image']
  title: (typeof COURSES)[number]['title']
  body: ReactNode
  imageNodeId: (typeof COURSES)[number]['imageNodeId']
  titleNodeId: (typeof COURSES)[number]['titleNodeId']
  bodyNodeId: (typeof COURSES)[number]['bodyNodeId']
  linkNodeId: (typeof COURSES)[number]['linkNodeId']
  onWatchSample: () => void
}) {
  return (
    <article className="code-monkey-journey-card flex min-w-0 flex-col items-start text-left">
      <div
        className="code-monkey-journey-card-image flex items-start justify-start overflow-hidden"
        data-node-id={imageNodeId}
      >
        <img
          src={image}
          alt=""
          aria-hidden
          className="block h-full max-w-full object-contain object-left"
          draggable={false}
        />
      </div>
      <h3
        className="mb-0 font-body font-semibold capitalize leading-normal text-black"
        style={{
          fontSize: 'var(--section-text-body)',
          fontVariationSettings: "'opsz' 14",
          marginTop: 'var(--code-monkey-journey-image-to-title)',
        }}
        data-node-id={titleNodeId}
      >
        {title}
      </h3>
      <p
        className="mb-0 font-body font-normal capitalize leading-normal text-black"
        style={{
          fontSize: 'var(--section-text-body)',
          fontVariationSettings: "'opsz' 14",
          marginTop: 'var(--code-monkey-journey-title-to-body)',
        }}
        data-node-id={bodyNodeId}
      >
        {body}
      </p>
      <button
        type="button"
        className="cursor-pointer border-0 bg-transparent p-0 text-left font-body font-normal capitalize leading-normal text-zene-blue transition-opacity hover:opacity-80"
        style={{
          fontSize: 'var(--section-text-body)',
          fontVariationSettings: "'opsz' 14",
          marginTop: 'var(--code-monkey-journey-body-to-link)',
        }}
        data-node-id={linkNodeId}
        onClick={onWatchSample}
      >
        Watch sample →
      </button>
    </article>
  )
}

function JourneyDots({
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
        marginTop: 'var(--code-monkey-journey-carousel-to-dots)',
        gap: 'var(--code-monkey-journey-dot-gap)',
      }}
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
            width: 'var(--code-monkey-journey-dot-size)',
            height: 'var(--code-monkey-journey-dot-size)',
          }}
        />
      ))}
    </div>
  )
}

export function CodeMonkeyJourneySection() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const isJumpingRef = useRef(false)
  const isHoveredRef = useRef(false)
  const isAutoAdvancingRef = useRef(false)
  const activeIndexRef = useRef(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const [slideWidth, setSlideWidth] = useState<number | null>(null)
  const [videoModalOpen, setVideoModalOpen] = useState(false)

  const loopSlides = useMemo(
    () =>
      Array.from({ length: LOOP_SETS }, (_, setIndex) =>
        COURSES.map((course, courseIndex) => ({
          ...course,
          key: `${course.titleNodeId}-${setIndex}`,
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
    track.style.setProperty('--code-monkey-journey-slide-w', `${nextWidth}px`)
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

  const moveSlide = useCallback(
    (direction: 1 | -1) => {
      const track = trackRef.current
      if (!track) return

      const slides = Array.from(track.children) as HTMLElement[]
      if (slides.length === 0) return

      const closestIndex = getClosestSlideIndex(track)
      const targetIndex =
        direction === 1
          ? closestIndex + 1 < slides.length
            ? closestIndex + 1
            : COURSE_COUNT
          : closestIndex > 0
            ? closestIndex - 1
            : slides.length - 1
      const targetSlide = slides[targetIndex]
      if (!targetSlide) return

      const targetLogical =
        loopSlides[targetIndex]?.logicalIndex ?? ((targetIndex % COURSE_COUNT) + COURSE_COUNT) % COURSE_COUNT

      isAutoAdvancingRef.current = true
      track.classList.add('code-monkey-journey-track--autoplay')
      track.scrollTo({ left: targetSlide.offsetLeft, behavior: 'smooth' })
      setLogicalIndex(targetLogical)

      window.setTimeout(() => {
        track.classList.remove('code-monkey-journey-track--autoplay')
        isAutoAdvancingRef.current = false
        normalizeScroll()
      }, 650)
    },
    [getClosestSlideIndex, loopSlides, normalizeScroll, setLogicalIndex],
  )

  const advanceSlide = useCallback(() => moveSlide(1), [moveSlide])

  useLayoutEffect(() => {
    updateSlideWidth()
  }, [updateSlideWidth])

  useEffect(() => {
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

  useEffect(() => {
    const carousel = carouselRef.current
    const section = carousel?.closest('section')
    if (!carousel || !section) return

    let timer: ReturnType<typeof setInterval> | undefined

    const tick = () => {
      if (videoModalOpen || isHoveredRef.current || isJumpingRef.current || isAutoAdvancingRef.current) return
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
  }, [advanceSlide, videoModalOpen])

  return (
    <section
      id="code-monkey-journey"
      className="code-monkey-journey w-full px-[5px] pt-[5px]"
      aria-labelledby="code-monkey-journey-heading"
      data-node-id="1319:829"
    >
      <div
        className="relative mx-auto w-full overflow-hidden section-card-shell bg-white"
        style={{ maxWidth: 'var(--section-card-max-w)' }}
      >
        <div
          className="code-monkey-journey-inner"
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
            data-node-id="1294:821"
          >
            Pre-K to High School — one progression
          </p>

          <h2
            id="code-monkey-journey-heading"
            className="code-monkey-journey-heading section-heading max-w-none font-heading font-medium uppercase leading-none text-black max-md:whitespace-normal md:whitespace-nowrap"
            style={{
              fontSize: 'var(--code-monkey-journey-heading-size, var(--section-text-heading))',
              marginTop: 'var(--english-ai-grid-eyebrow-to-heading)',
            }}
            data-node-id="1294:824"
          >
            A coding journey{' '}
            <span className="inline-flex items-center bg-zene-cyan" style={highlightStyle}>
              that grows
            </span>{' '}
            with every student.
          </h2>

          <p
            className="capitalize font-body font-normal leading-normal text-black"
            style={{
              fontSize: 'var(--section-text-body)',
              fontVariationSettings: "'opsz' 14",
              maxWidth: 'var(--code-monkey-journey-subtitle-max-w)',
              marginTop: 'var(--english-ai-grid-heading-to-subtitle)',
            }}
            data-node-id="1294:800"
          >
            Eleven structured courses. Block coding for early learners. Real programming languages for
            older students. AI and data science for high school.
          </p>

          <div
            style={{ marginTop: 'var(--code-monkey-journey-subtitle-to-carousel)' }}
            onMouseEnter={() => {
              isHoveredRef.current = true
            }}
            onMouseLeave={() => {
              isHoveredRef.current = false
            }}
          >
            <div className="code-monkey-journey-carousel-shell min-w-0">
              <div
                ref={carouselRef}
                className="code-monkey-journey-carousel min-w-0 w-full overflow-hidden"
                data-node-id="1319:826"
              >
                <div
                  ref={trackRef}
                  className="code-monkey-journey-track flex overflow-x-auto snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                  aria-roledescription="carousel"
                  aria-label="Code Monkey courses"
                >
                  {loopSlides.map(course => (
                    <div
                      key={course.key}
                      className="code-monkey-journey-slide shrink-0 snap-start snap-always"
                      style={slideWidth != null ? { width: slideWidth } : undefined}
                      role="group"
                      aria-roledescription="slide"
                      aria-label={`${course.logicalIndex + 1} of ${COURSE_COUNT}`}
                    >
                      <JourneyCourseCard {...course} onWatchSample={() => setVideoModalOpen(true)} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <JourneyDots
              count={COURSE_COUNT}
              activeIndex={activeIndex}
              onSelect={index => scrollToLogicalIndex(index)}
            />
          </div>

          <p
            className="text-center capitalize font-heading font-normal leading-normal text-black"
            style={{
              fontSize: 'var(--code-monkey-journey-footer-size)',
              maxWidth: 'var(--code-monkey-journey-footer-max-w)',
              marginTop: 'var(--code-monkey-journey-dots-to-footer)',
              marginInline: 'auto',
            }}
            data-node-id="1297:1096"
          >
            One curriculum. Pre-K through Grade 12. Every step, structured.
          </p>
        </div>
      </div>

      <CodeMonkeySampleVideoModal open={videoModalOpen} onClose={() => setVideoModalOpen(false)} />
    </section>
  )
}
