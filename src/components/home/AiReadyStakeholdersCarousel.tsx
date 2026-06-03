import { useCallback, useEffect, useRef, useState } from 'react'
import { SpriteCharacter } from '@/components/home/SpriteCharacter'
import { cn } from '@/lib/utils'

const AUTO_SLIDE_MS = 5000

const STAKEHOLDERS = [
  {
    key: 'student',
    title: 'Student',
    body: 'Every student gets the 1-on-1 practice no classroom period can offer.',
    sprite: {
      imageWidth: '273.8%',
      imageHeight: '162.8%',
      imageLeft: '0',
      imageTop: '-23.37%',
      nodeId: '765:1742',
      imageNodeId: '765:1742',
    },
    titleNodeId: '765:1741',
    bodyNodeId: '765:1749',
  },
  {
    key: 'schools',
    title: 'schools',
    body: 'Your teachers see skill-level data classroom observation can never capture.',
    sprite: {
      imageWidth: '342.86%',
      imageHeight: '174.45%',
      imageLeft: '-125.22%',
      imageTop: '-30.66%',
      nodeId: '765:1745',
      imageNodeId: '765:1745',
    },
    titleNodeId: '765:1744',
    bodyNodeId: '765:1751',
  },
  {
    key: 'parent',
    title: 'Parent.',
    body: "Parents see exactly which skills their child is building — and what's next.",
    sprite: {
      imageWidth: '302.96%',
      imageHeight: '206.43%',
      imageLeft: '-199.01%',
      imageTop: '-53.02%',
      nodeId: '765:1748',
      imageNodeId: '765:1748',
    },
    titleNodeId: '765:1754',
    bodyNodeId: '765:1755',
  },
] as const

function StakeholderSlide({
  stakeholderKey,
  title,
  body,
  sprite,
  titleNodeId,
  bodyNodeId,
}: (typeof STAKEHOLDERS)[number]) {
  return (
    <article className="ai-ready-stakeholder-slide flex w-full min-w-0 flex-col items-center text-center">
      <div
        className={cn(
          'ai-ready-stakeholder-slide__character shrink-0 overflow-hidden',
          `ai-ready-stakeholder-slide__character--${stakeholderKey}`,
        )}
      >
        <SpriteCharacter {...sprite} />
      </div>
      <h3
        className="font-heading font-medium uppercase leading-none text-black"
        style={{
          fontSize: 'var(--section-text-tab)',
          marginTop: 'var(--ai-ready-carousel-title-mt)',
        }}
        data-node-id={titleNodeId}
      >
        {title}
      </h3>
      <p
        className="ai-ready-stakeholder-slide__body capitalize font-body font-normal leading-normal text-black"
        style={{
          fontSize: 'var(--section-text-body)',
          fontVariationSettings: "'opsz' 14",
          maxWidth: 'var(--ai-ready-carousel-body-max-w)',
          marginTop: 'var(--ai-ready-carousel-body-mt)',
        }}
        data-node-id={bodyNodeId}
      >
        {body}
      </p>
    </article>
  )
}

export function AiReadyStakeholdersCarousel() {
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
  }, [])

  useEffect(() => {
    const timer = window.setInterval(() => {
      const nextIndex = (activeIndexRef.current + 1) % STAKEHOLDERS.length
      scrollToIndex(nextIndex)
    }, AUTO_SLIDE_MS)

    return () => window.clearInterval(timer)
  }, [scrollToIndex])

  return (
    <div className="ai-ready-stakeholders-carousel sm:hidden">
      <div
        ref={trackRef}
        className="ai-ready-stakeholders-track flex snap-x snap-mandatory overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-roledescription="carousel"
        aria-label="AI-ready stakeholders"
      >
        {STAKEHOLDERS.map((item, index) => (
          <div
            key={item.sprite.nodeId}
            className="ai-ready-stakeholders-slide flex w-full shrink-0 snap-center snap-always"
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${STAKEHOLDERS.length}`}
          >
            <StakeholderSlide {...item} />
          </div>
        ))}
      </div>

      <div
        className="flex items-center justify-center"
        role="tablist"
        aria-label="Choose stakeholder slide"
        style={{
          marginTop: 'var(--ai-ready-carousel-to-dots)',
          gap: 'var(--hero-badge-dot-gap)',
        }}
      >
        {STAKEHOLDERS.map((item, index) => (
          <button
            key={`dot-${item.sprite.nodeId}`}
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
