import { useCallback, useEffect, useRef, useState } from 'react'

import imgBaseline from '@/assets/figma/the-edge/multi-rater/beyond-personality-1.png'
import imgCapstone from '@/assets/figma/the-edge/multi-rater/beyond-personality-4.png'
import imgMultiRater from '@/assets/figma/the-edge/multi-rater/beyond-personality-3.png'
import imgScaffolded from '@/assets/figma/the-edge/multi-rater/beyond-personality-2.png'
import { cn } from '@/lib/utils'

const FEATURES = [
  {
    image: imgBaseline,
    title: 'Baseline assessments',
    body: 'Research-backed. 0.84 reliability score.',
    imageNodeId: '1100:2167',
    titleNodeId: '1100:2168',
    bodyNodeId: '1126:2460',
  },
  {
    image: imgScaffolded,
    title: 'Scaffolded growth tracking',
    body: "Mapped to Bloom's Taxonomy. Skill development, not participation.",
    imageNodeId: '1100:2172',
    titleNodeId: '1126:2461',
    bodyNodeId: '1126:2462',
  },
  {
    image: imgMultiRater,
    title: 'Multi-rater verification',
    body: 'Self-assessment + peer feedback + facilitator observation.',
    imageNodeId: '1100:2174',
    titleNodeId: '1126:2463',
    bodyNodeId: '1126:2464',
  },
  {
    image: imgCapstone,
    title: 'Capstone projects',
    body: 'Entrepreneurship and internship tracks. Real-world application.',
    imageNodeId: '1100:2170',
    titleNodeId: '1126:2465',
    bodyNodeId: '1126:2466',
  },
] as const

const highlightStyle = {
  minHeight: 'var(--english-ai-highlight-h)',
  paddingLeft: 'var(--english-ai-highlight-pad-x)',
  paddingRight: 'var(--english-ai-highlight-pad-x)',
} as const

function FeatureCard({
  image,
  title,
  body,
  imageNodeId,
  titleNodeId,
  bodyNodeId,
  staggered = false,
}: (typeof FEATURES)[number] & { staggered?: boolean }) {
  return (
    <article
      className={cn(
        'the-edge-multi-rater-card flex min-w-0 flex-col items-center text-center',
        staggered && 'the-edge-multi-rater-card--staggered',
      )}
    >
      <div
        className="the-edge-multi-rater-card-image relative w-full overflow-hidden"
        data-node-id={imageNodeId}
      >
        <img src={image} alt="" aria-hidden className="size-full object-contain" draggable={false} />
      </div>
      <h3
        className="font-body font-semibold capitalize leading-normal text-black"
        style={{
          fontSize: 'var(--section-text-body)',
          fontVariationSettings: "'opsz' 14",
          marginTop: 'var(--the-edge-multi-rater-img-to-title)',
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
          maxWidth: 'var(--the-edge-multi-rater-copy-max-w)',
          marginTop: 'var(--the-edge-multi-rater-title-to-body)',
        }}
        data-node-id={bodyNodeId}
      >
        {body}
      </p>
    </article>
  )
}

function MobileCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollToIndex = useCallback((index: number) => {
    const track = trackRef.current
    if (!track) return

    const slide = track.children[index] as HTMLElement | undefined
    if (!slide) return

    track.scrollTo({ left: slide.offsetLeft, behavior: 'smooth' })
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

      setActiveIndex(closestIndex)
    }

    handleScroll()
    track.addEventListener('scroll', handleScroll, { passive: true })
    return () => track.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="lg:hidden">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-roledescription="carousel"
        aria-label="Multi-rater features"
      >
        {FEATURES.map((item, index) => (
          <div
            key={item.titleNodeId}
            className="w-full shrink-0 snap-center snap-always px-[2px]"
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${FEATURES.length}`}
          >
            <FeatureCard {...item} />
          </div>
        ))}
      </div>

      <div
        className="flex items-center justify-center"
        role="tablist"
        aria-label="Choose feature slide"
        style={{
          marginTop: 'var(--english-ai-grid-carousel-to-dots)',
          gap: 'var(--english-ai-grid-dot-gap)',
        }}
      >
        {FEATURES.map((item, index) => (
          <button
            key={item.titleNodeId}
            type="button"
            role="tab"
            aria-label={`Show ${item.title}`}
            aria-selected={activeIndex === index}
            onClick={() => scrollToIndex(index)}
            className={cn(
              'rounded-full border-0 p-0 transition-colors',
              activeIndex === index ? 'bg-black' : 'bg-black/20',
            )}
            style={{
              width: 'var(--english-ai-grid-dot-size)',
              height: 'var(--english-ai-grid-dot-size)',
            }}
          />
        ))}
      </div>
    </div>
  )
}

export function TheEdgeMultiRaterSection() {
  return (
    <section
      id="the-edge-multi-rater"
      className="the-edge-multi-rater w-full px-[5px] pt-[5px]"
      aria-labelledby="the-edge-multi-rater-heading"
      data-node-id="1150:771"
    >
      <div
        className="relative mx-auto w-full overflow-hidden section-card-shell bg-white"
        style={{ maxWidth: 'var(--section-card-max-w)' }}
        data-node-id="1100:2049"
      >
        <div
          className="the-edge-multi-rater-inner"
          style={{
            paddingLeft: 'var(--section-padding-x)',
            paddingRight: 'var(--section-padding-x)',
            paddingTop: 'var(--english-ai-grid-padding-top)',
            paddingBottom: 'var(--english-ai-grid-padding-bottom)',
          }}
        >
          <p
            className="section-eyebrow uppercase font-body text-black"
            style={{
              fontSize: 'var(--section-text-eyebrow)',
              fontVariationSettings: "'opsz' 14",
            }}
            data-node-id="1126:2456"
          >
            Beyond personality tests
          </p>

          <h2
            id="the-edge-multi-rater-heading"
            className="section-heading max-w-[var(--english-ai-heading-max-w)] font-heading font-medium uppercase text-black"
            style={{
              fontSize: 'var(--section-text-heading)',
              marginTop: 'var(--english-ai-grid-eyebrow-to-heading)',
            }}
            data-node-id="1100:2166"
          >
            Multi-rater.{' '}
            <span className="inline-flex items-center bg-zene-cyan" style={highlightStyle}>
              Research-backed.
            </span>
          </h2>

          <p
            className="normal-case font-body font-normal leading-normal text-black"
            style={{
              fontSize: 'var(--section-text-body)',
              fontVariationSettings: "'opsz' 14",
              maxWidth: 'var(--the-edge-multi-rater-subtitle-max-w)',
              marginTop: 'var(--english-ai-grid-heading-to-subtitle)',
            }}
            data-node-id="1126:2459"
          >
            The Edge measures observable behavior — not labels.
          </p>

          <div style={{ marginTop: 'var(--english-ai-grid-subtitle-to-items)' }}>
            <MobileCarousel />

            <div className="the-edge-multi-rater-grid hidden min-w-0 lg:grid lg:grid-cols-4">
              {FEATURES.map((item, index) => (
                <FeatureCard key={item.titleNodeId} {...item} staggered={index % 2 === 1} />
              ))}
            </div>
          </div>

          <p
            className="font-heading font-normal normal-case leading-normal text-black"
            style={{
              fontSize: 'var(--the-edge-multi-rater-footer-size)',
              maxWidth: 'var(--the-edge-multi-rater-footer-max-w)',
              marginTop: 'var(--the-edge-multi-rater-items-to-footer)',
              textAlign: 'center',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
            data-node-id="1126:2467"
          >
            Not what they think of themselves. What they can actually do.
          </p>
        </div>
      </div>
    </section>
  )
}
