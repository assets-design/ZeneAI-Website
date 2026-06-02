import { useCallback, useEffect, useRef, useState } from 'react'
import feature1 from '@/assets/figma/about/section-3/feature-1.png'
import feature2 from '@/assets/figma/about/section-3/feature-2.png'
import feature3 from '@/assets/figma/about/section-3/feature-3.png'
import feature4 from '@/assets/figma/about/section-3/feature-4.png'
import { cn } from '@/lib/utils'

type AboutBringsFeature = {
  image: string
  label: string
  imageNodeId: string
  labelNodeId: string
  itemNodeId: string
  stagger: boolean
}

const FEATURES: AboutBringsFeature[] = [
  {
    image: feature1,
    label: 'AI-powered learning programs',
    imageNodeId: '1047:2039',
    labelNodeId: '1047:2040',
    itemNodeId: '1047:2038',
    stagger: false,
  },
  {
    image: feature2,
    label: 'Structured coding and language curriculum',
    imageNodeId: '1047:2045',
    labelNodeId: '1047:2046',
    itemNodeId: '1047:2044',
    stagger: true,
  },
  {
    image: feature3,
    label: 'Real-world skill development',
    imageNodeId: '1047:2048',
    labelNodeId: '1047:2049',
    itemNodeId: '1047:2047',
    stagger: false,
  },
  {
    image: feature4,
    label: 'Easy integration into school systems',
    imageNodeId: '1047:2042',
    labelNodeId: '1047:2043',
    itemNodeId: '1047:2041',
    stagger: true,
  },
]

function AboutBringsFeatureItem({ feature }: { feature: AboutBringsFeature }) {
  return (
    <div
      className="flex min-w-0 flex-col items-center"
      data-node-id={feature.itemNodeId}
    >
      <div
        className="relative w-full max-w-[var(--about-brings-feature-img-w)] overflow-hidden"
        style={{
          height: 'var(--about-brings-feature-img-h)',
        }}
        data-node-id={feature.imageNodeId}
      >
        <img
          src={feature.image}
          alt=""
          aria-hidden
          className="size-full object-contain"
          draggable={false}
        />
      </div>
      <p
        className="mb-0 w-full max-w-[var(--about-brings-label-max-w)] text-center capitalize font-body font-normal leading-normal text-black"
        style={{
          fontSize: 'var(--about-brings-label-size)',
          fontVariationSettings: "'opsz' 14",
          marginTop: 'var(--about-brings-feature-img-to-label)',
        }}
        data-node-id={feature.labelNodeId}
      >
        {feature.label}
      </p>
    </div>
  )
}

function AboutBringsMobileCarousel({ features }: { features: AboutBringsFeature[] }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollToIndex = useCallback((index: number) => {
    const track = trackRef.current
    if (!track) return

    const slide = track.children[index] as HTMLElement | undefined
    if (!slide) return

    track.scrollTo({
      left: slide.offsetLeft,
      behavior: 'smooth',
    })
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
  }, [features.length])

  return (
    <div
      className="sm:hidden"
      style={{ marginTop: 'var(--about-brings-heading-to-grid)' }}
    >
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-roledescription="carousel"
        aria-label="What Zene AI brings to schools"
      >
        {features.map((feature, index) => (
          <div
            key={feature.itemNodeId}
            className="w-full shrink-0 snap-center snap-always"
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${features.length}`}
          >
            <AboutBringsFeatureItem feature={feature} />
          </div>
        ))}
      </div>

      <div
        className="flex items-center justify-center"
        role="tablist"
        aria-label="Choose feature slide"
        style={{
          marginTop: 'var(--about-brings-carousel-to-dots)',
          gap: 'var(--about-brings-dot-gap)',
        }}
      >
        {features.map((feature, index) => (
          <button
            key={feature.itemNodeId}
            type="button"
            role="tab"
            aria-label={`Show ${feature.label}`}
            aria-selected={activeIndex === index}
            onClick={() => scrollToIndex(index)}
            className={cn(
              'rounded-full border-0 p-0 transition-colors',
              activeIndex === index ? 'bg-black' : 'bg-black/20',
            )}
            style={{
              width: 'var(--about-brings-dot-size)',
              height: 'var(--about-brings-dot-size)',
            }}
          />
        ))}
      </div>
    </div>
  )
}

export function AboutBringsSection() {
  return (
    <section
      className="w-full px-[5px] pt-[5px]"
      aria-labelledby="about-brings-heading"
      data-node-id="1055:2192"
    >
      <div
        className="relative mx-auto w-full overflow-hidden section-card-shell bg-white"
        style={{ maxWidth: 'var(--section-card-max-w)' }}
        data-node-id="1047:1946"
      >
        <div
          style={{
            paddingLeft: 'var(--section-padding-x)',
            paddingRight: 'var(--section-padding-x)',
            paddingTop: 'var(--about-brings-padding-top)',
            paddingBottom: 'var(--about-brings-padding-bottom)',
          }}
        >
          <h2
            id="about-brings-heading"
            className="max-w-full font-heading font-medium uppercase leading-none text-black"
            style={{
              fontSize: 'var(--about-brings-heading-size)',
              maxWidth: 'var(--about-brings-heading-max-w)',
            }}
            data-node-id="1047:2037"
          >
            <span className="block">What Zene AI</span>
            <span className="block">
              brings to{' '}
              <span
                className="inline-flex items-center bg-zene-cyan"
                style={{
                  minHeight: 'var(--about-brings-highlight-h)',
                  paddingLeft: 'var(--about-brings-highlight-pad-x)',
                  paddingRight: 'var(--about-brings-highlight-pad-x)',
                }}
              >
                schools
              </span>
            </span>
          </h2>

          <AboutBringsMobileCarousel features={FEATURES} />

          <ul
            className="hidden list-none grid-cols-2 gap-x-[var(--about-brings-grid-gap-x)] gap-y-[var(--about-brings-grid-gap-y)] p-0 sm:grid xl:grid-cols-4"
            style={{ marginTop: 'var(--about-brings-heading-to-grid)' }}
          >
            {FEATURES.map(feature => (
              <li
                key={feature.itemNodeId}
                className={cn(
                  feature.stagger && 'xl:mt-[var(--about-brings-stagger-offset)]',
                )}
              >
                <AboutBringsFeatureItem feature={feature} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
