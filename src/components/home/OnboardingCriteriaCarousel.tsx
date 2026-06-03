import { useCallback, useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

const AUTO_SLIDE_MS = 5000

type CriterionItem = {
  title: string
  body: string
  nodeId: string
  imageNodeId: string
  titleNodeId: string
  bodyNodeId: string
}

type OnboardingCriteriaCarouselProps = {
  criteria: readonly CriterionItem[]
  image: string
  className?: string
}

function CriterionSlide({
  item,
  image,
}: {
  item: CriterionItem
  image: string
}) {
  return (
    <article
      className="onboarding-criteria-slide flex min-w-0 max-w-full flex-col items-center text-center"
      data-node-id={item.nodeId}
    >
      <div className="onboarding-criteria-slide__media overflow-hidden">
        <img
          src={image}
          alt=""
          aria-hidden
          className="onboarding-criteria-slide__img max-w-full object-cover"
          style={{
            width: 'var(--onboard-image-w)',
            height: 'var(--onboard-image-h)',
          }}
          data-node-id={item.imageNodeId}
        />
      </div>
      <h3
        className="min-w-0 max-w-full font-heading font-medium uppercase leading-none text-black"
        style={{
          fontSize: 'var(--onboard-carousel-title-size, var(--section-text-tab))',
          marginTop: 'var(--onboard-image-to-title)',
        }}
        data-node-id={item.titleNodeId}
      >
        {item.title}
      </h3>
      <p
        className="min-w-0 max-w-full normal-case font-body font-normal leading-normal text-black"
        style={{
          fontSize: 'var(--section-text-body)',
          fontVariationSettings: "'opsz' 14",
          maxWidth: 'var(--onboard-copy-max-w)',
          marginTop: 'var(--onboard-title-to-body)',
        }}
        data-node-id={item.bodyNodeId}
      >
        {item.body}
      </p>
    </article>
  )
}

export function OnboardingCriteriaCarousel({
  criteria,
  image,
  className,
}: OnboardingCriteriaCarouselProps) {
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
  }, [criteria.length])

  useEffect(() => {
    if (criteria.length <= 1) return

    const timer = window.setInterval(() => {
      const nextIndex = (activeIndexRef.current + 1) % criteria.length
      scrollToIndex(nextIndex)
    }, AUTO_SLIDE_MS)

    return () => window.clearInterval(timer)
  }, [criteria.length, scrollToIndex])

  if (criteria.length === 0) return null

  return (
    <div
      className={cn(
        'onboarding-criteria-carousel min-w-0 max-w-full overflow-hidden',
        className,
      )}
      style={{ marginTop: 'var(--onboard-body-to-cards)' }}
    >
      <div
        ref={trackRef}
        className="onboarding-criteria-carousel-track flex w-full max-w-full min-w-0 snap-x snap-mandatory overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-roledescription="carousel"
        aria-label="Who Zene works with criteria"
      >
        {criteria.map((item) => (
          <div
            key={item.nodeId}
            className="onboarding-criteria-carousel-slide-wrap box-border flex min-w-0 max-w-full shrink-0 grow-0 basis-full snap-center snap-always"
            role="group"
            aria-roledescription="slide"
          >
            <CriterionSlide item={item} image={image} />
          </div>
        ))}
      </div>

      <div
        className="onboarding-criteria-carousel-dots flex items-center justify-center"
        role="tablist"
        aria-label="Choose criteria slide"
        style={{
          marginTop: 'var(--onboard-carousel-to-dots)',
          gap: 'var(--hero-badge-dot-gap)',
        }}
      >
        {criteria.map((item, index) => (
          <button
            key={`dot-${item.nodeId}`}
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
