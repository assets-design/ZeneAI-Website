import { useCallback, useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

const AUTO_SLIDE_MS = 5000

type ActionFeatureItem = {
  image: string
  title: string
  body: string
  nodeId?: string
  imageNodeId?: string
  textNodeId?: string
}

type ActionFeaturesCarouselProps = {
  features: readonly ActionFeatureItem[]
}

function ActionFeatureTile({
  image,
  title,
  body,
  nodeId,
  imageNodeId,
  textNodeId,
}: ActionFeatureItem) {
  return (
    <article className="action-feature-tile flex min-w-0 flex-1 flex-col items-center text-center" data-node-id={nodeId}>
      <img
        src={image}
        alt=""
        aria-hidden
        className="action-feature-tile__img object-contain"
        style={{
          width: 'var(--action-feature-carousel-img-w, var(--action-feature-img-w))',
          height: 'var(--action-feature-carousel-img-h, var(--action-feature-img-h))',
        }}
        data-node-id={imageNodeId}
      />
      <p
        className="text-center normal-case font-body font-normal leading-normal text-black"
        style={{
          fontSize: 'var(--section-text-body)',
          fontVariationSettings: "'opsz' 14",
          marginTop: 'var(--action-feature-text-gap)',
        }}
        data-node-id={textNodeId}
      >
        <span className="font-semibold">{title}</span>
        <br />
        {body}
      </p>
    </article>
  )
}

function buildSlides(features: readonly ActionFeatureItem[]) {
  if (features.length === 0) return []
  if (features.length === 1) return [[features[0], features[0]]]

  return features.map((_, index) => {
    const next = (index + 1) % features.length
    return [features[index], features[next]] as const
  })
}

export function ActionFeaturesCarousel({ features }: ActionFeaturesCarouselProps) {
  const slides = buildSlides(features)
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
    <div
      className="action-features-carousel xl:hidden"
      style={{ marginTop: 'var(--action-features-carousel-mt)' }}
    >
      <div
        ref={trackRef}
        className="action-features-track flex snap-x snap-mandatory overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-roledescription="carousel"
        aria-label="Feature highlights"
      >
        {slides.map((pair, index) => (
          <div
            key={`slide-${index}`}
            className="action-features-slide flex w-full shrink-0 snap-center snap-always"
            style={{ gap: 'var(--action-feature-carousel-gap)' }}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${slides.length}`}
          >
            {pair.map((feature, featureIndex) => (
              <ActionFeatureTile
                key={`${feature.title}-${featureIndex}`}
                {...feature}
              />
            ))}
          </div>
        ))}
      </div>

      <div
        className="flex items-center justify-center"
        role="tablist"
        aria-label="Choose feature slide"
        style={{
          marginTop: 'var(--action-feature-carousel-to-dots)',
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
