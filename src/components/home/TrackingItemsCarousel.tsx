import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import trackSpeaking from '@/assets/figma/home/section-6/track-speaking.png'
import trackMastery from '@/assets/figma/home/section-6/track-mastery.png'
import trackHeatmaps from '@/assets/figma/home/section-6/track-heatmaps.png'
import { cn } from '@/lib/utils'

const AUTO_SLIDE_MS = 5000
const TABLET_CAROUSEL_MQ = '(min-width: 640px)'
const MOBILE_CAROUSEL_MQ = '(max-width: 639px)'

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false,
  )

  useEffect(() => {
    const mq = window.matchMedia(query)
    const handleChange = () => setMatches(mq.matches)
    handleChange()
    mq.addEventListener('change', handleChange)
    return () => mq.removeEventListener('change', handleChange)
  }, [query])

  return matches
}

export const TRACK_ITEMS = [
  {
    image: trackSpeaking,
    title: 'Individual speaking quality',
    bodyLines: ['pronunciation, fluency, and confidence,', 'scored automatically.'],
    mobileBodyLines: [
      'pronunciation, fluency, and',
      'confidence, scored automatically.',
    ],
    textMaxW: 'var(--track-text-max-w-body)',
    imageOffset: false,
    nodeId: '762:1710',
    imageNodeId: '762:1693',
    textNodeId: '762:1694',
  },
  {
    image: trackMastery,
    title: 'Skill-level mastery, per student',
    titleOneLine: true,
    bodyLines: ['reading, comprehension, vocabulary,', 'grammar, all measured separately.'],
    textMaxW: 'var(--track-text-max-w-body)',
    imageOffset: true,
    nodeId: '762:1708',
    imageNodeId: '762:1696',
    textNodeId: '762:1695',
  },
  {
    image: trackHeatmaps,
    title: 'Class-level skill heatmaps',
    bodyLines: [
      'your academic head sees the',
      'weakest skill across every section in ',
      'one screen.',
    ],
    mobileBodyLines: [
      'your academic head sees the weakest skill',
      'across every section in one screen.',
    ],
    textMaxW: 'var(--track-text-max-w-body)',
    imageOffset: false,
    nodeId: '762:1709',
    imageNodeId: '762:1706',
    textNodeId: '762:1697',
  },
] as const

export type TrackItemProps = (typeof TRACK_ITEMS)[number]

export function TrackItem({
  image,
  title,
  bodyLines,
  mobileBodyLines,
  textMaxW,
  imageOffset,
  titleOneLine = false,
  nodeId,
  imageNodeId,
  textNodeId,
}: TrackItemProps) {
  const isMobileLayout = useMediaQuery(MOBILE_CAROUSEL_MQ)
  const captionLines =
    isMobileLayout && mobileBodyLines && mobileBodyLines.length > 0
      ? mobileBodyLines
      : bodyLines

  return (
    <article
      className={cn(
        'flex min-w-0 flex-col items-center text-center',
        imageOffset && 'xl:mt-[var(--track-img-offset)]',
      )}
      style={{
        paddingLeft: 'var(--track-img-padding-x)',
        paddingRight: 'var(--track-img-padding-x)',
      }}
      data-node-id={nodeId}
    >
      <img
        src={image}
        alt=""
        aria-hidden
        width={323}
        height={216}
        className="h-[var(--track-img-h)] w-[var(--track-img-w)] max-w-full object-contain"
        data-node-id={imageNodeId}
      />
      <p
        className="track-item-caption normal-case font-body font-normal leading-normal text-black"
        style={{
          fontSize: 'var(--section-text-body)',
          fontVariationSettings: "'opsz' 14",
          maxWidth: textMaxW,
          marginTop: 'var(--track-img-to-text)',
        }}
        data-node-id={textNodeId}
      >
        <span className={cn('font-semibold block', titleOneLine && 'xl:whitespace-nowrap')}>
          {title}
        </span>
        <span className="track-item-caption__body block">
          {captionLines.map((line) => (
            <span key={line} className="block xl:whitespace-nowrap">
              {line}
            </span>
          ))}
        </span>
      </p>
    </article>
  )
}

function useTabletCarouselLayout() {
  return useMediaQuery(TABLET_CAROUSEL_MQ)
}

function buildSlides(items: readonly TrackItemProps[], pairItems: boolean) {
  if (items.length === 0) return []

  if (!pairItems) {
    return items.map((item) => [item] as const)
  }

  if (items.length === 1) return [[items[0], items[0]] as const]

  return items.map((_, index) => {
    const next = (index + 1) % items.length
    return [items[index], items[next]] as const
  })
}

export function TrackingItemsCarousel() {
  const isTabletLayout = useTabletCarouselLayout()
  const slides = useMemo(
    () => buildSlides(TRACK_ITEMS, isTabletLayout),
    [isTabletLayout],
  )
  const trackRef = useRef<HTMLDivElement>(null)
  const activeIndexRef = useRef(0)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollToIndex = useCallback((index: number, behavior: ScrollBehavior = 'smooth') => {
    const track = trackRef.current
    if (!track || slides.length === 0) return

    const slide = track.children[index] as HTMLElement | undefined
    if (!slide) return

    track.scrollTo({ left: slide.offsetLeft, behavior })
    activeIndexRef.current = index
    setActiveIndex(index)
  }, [slides.length])

  useEffect(() => {
    activeIndexRef.current = 0
    setActiveIndex(0)
    trackRef.current?.scrollTo({ left: 0, behavior: 'auto' })
  }, [isTabletLayout, slides.length])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const handleScroll = () => {
      const slideEls = Array.from(track.children) as HTMLElement[]
      if (slideEls.length === 0) return

      const viewportCenter = track.scrollLeft + track.clientWidth / 2
      let closestIndex = 0
      let closestDistance = Number.POSITIVE_INFINITY

      slideEls.forEach((slide, index) => {
        const slideCenter = slide.offsetLeft + slide.offsetWidth / 2
        const distance = Math.abs(viewportCenter - slideCenter)
        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = index
        }
      })

      activeIndexRef.current = closestIndex
      setActiveIndex(closestIndex)
    }

    handleScroll()
    track.addEventListener('scroll', handleScroll, { passive: true })
    return () => track.removeEventListener('scroll', handleScroll)
  }, [slides.length])

  useEffect(() => {
    if (slides.length <= 1) return

    const timer = window.setInterval(() => {
      const nextIndex = (activeIndexRef.current + 1) % slides.length
      scrollToIndex(nextIndex)
    }, AUTO_SLIDE_MS)

    return () => window.clearInterval(timer)
  }, [slides.length, scrollToIndex])

  if (slides.length === 0) return null

  return (
    <div className="tracking-items-carousel xl:hidden">
      <div
        ref={trackRef}
        className="tracking-items-track flex snap-x snap-mandatory overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-roledescription="carousel"
        aria-label="Tracking outcomes"
      >
        {slides.map((group, index) => (
          <div
            key={`slide-${isTabletLayout ? 'tablet' : 'mobile'}-${index}`}
            className="tracking-items-slide flex w-full shrink-0 snap-center snap-always"
            style={{ gap: 'var(--track-carousel-gap)' }}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${slides.length}`}
          >
            {group.map((item, itemIndex) => (
              <div
                key={`${item.nodeId}-${itemIndex}`}
                className={cn(
                  'tracking-items-slide__item min-w-0',
                  isTabletLayout ? 'flex-1' : 'w-full',
                )}
              >
                <TrackItem {...item} />
              </div>
            ))}
          </div>
        ))}
      </div>

      <div
        className="flex items-center justify-center"
        role="tablist"
        aria-label="Choose tracking slide"
        style={{
          marginTop: 'var(--track-carousel-to-dots)',
          gap: 'var(--hero-badge-dot-gap)',
        }}
      >
        {slides.map((_, index) => (
          <button
            key={`dot-${index}`}
            type="button"
            role="tab"
            aria-label={`Show slide ${index + 1}`}
            aria-selected={activeIndex === index}
            onClick={() => scrollToIndex(index)}
            className={cn(
              'rounded-full border-0 p-0 transition-colors',
              activeIndex === index ? 'bg-black' : 'bg-black/20',
            )}
            style={{
              width: 'var(--hero-badge-dot-size)',
              height: 'var(--hero-badge-dot-size)',
            }}
          />
        ))}
      </div>
    </div>
  )
}
