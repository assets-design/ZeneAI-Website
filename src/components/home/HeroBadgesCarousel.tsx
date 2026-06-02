import { useCallback, useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

const AUTO_SLIDE_MS = 5000

type HeroBadge = {
  image: string
  alt: string
  lines: readonly string[]
  width: string
  height: string
}

type HeroBadgesCarouselProps = {
  badges: readonly HeroBadge[]
}

function HeroBadgeSlide({ badge }: { badge: HeroBadge }) {
  return (
    <div className="flex w-full shrink-0 snap-center snap-always flex-col items-center px-2 text-center">
      <img
        src={badge.image}
        alt={badge.alt}
        className="object-contain"
        style={{ width: badge.width, height: badge.height }}
        draggable={false}
      />
      <p
        className="normal-case font-body font-normal leading-normal text-black"
        style={{
          fontSize: 'var(--section-text-body)',
          fontVariationSettings: "'opsz' 14",
          maxWidth: 'var(--hero-badge-text-max-w, calc(382px * var(--type-size)))',
          marginTop: 'var(--hero-gap)',
        }}
      >
        {badge.lines.map((line, index) => (
          <span key={line}>
            {line}
            {index < badge.lines.length - 1 ? <br /> : null}
          </span>
        ))}
      </p>
    </div>
  )
}

export function HeroBadgesCarousel({ badges }: HeroBadgesCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const activeIndexRef = useRef(0)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollToIndex = useCallback((index: number, behavior: ScrollBehavior = 'smooth') => {
    const track = trackRef.current
    if (!track) return

    const slide = track.children[index] as HTMLElement | undefined
    if (!slide) return

    track.scrollTo({ left: slide.offsetLeft, behavior })
    activeIndexRef.current = index
    setActiveIndex(index)
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const handleScroll = () => {
      const slides = Array.from(track.children) as HTMLElement[]
      if (slides.length === 0) return

      const viewportCenter = track.scrollLeft + track.clientWidth / 2
      let closestIndex = 0
      let closestDistance = Number.POSITIVE_INFINITY

      slides.forEach((slide, index) => {
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
  }, [badges.length])

  useEffect(() => {
    if (badges.length <= 1) return

    const timer = window.setInterval(() => {
      const nextIndex = (activeIndexRef.current + 1) % badges.length
      scrollToIndex(nextIndex)
    }, AUTO_SLIDE_MS)

    return () => window.clearInterval(timer)
  }, [badges.length, scrollToIndex])

  return (
    <div
      className="xl:hidden"
      style={{ marginTop: 'var(--hero-content-to-badges)' }}
    >
      <div
        ref={trackRef}
        className="hero-badges-track flex snap-x snap-mandatory overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-roledescription="carousel"
        aria-label="Trust badges"
      >
        {badges.map((badge, index) => (
          <div
            key={badge.lines.join(' ')}
            className="w-full shrink-0 sm:w-1/2"
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${badges.length}`}
          >
            <HeroBadgeSlide badge={badge} />
          </div>
        ))}
      </div>

      <div
        className="flex items-center justify-center"
        role="tablist"
        aria-label="Choose trust badge slide"
        style={{
          marginTop: 'var(--hero-badge-carousel-to-dots)',
          gap: 'var(--hero-badge-dot-gap)',
        }}
      >
        {badges.map((badge, index) => (
          <button
            key={badge.lines.join(' ')}
            type="button"
            role="tab"
            aria-label={`Show badge ${index + 1}`}
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
