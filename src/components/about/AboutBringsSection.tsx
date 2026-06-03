import { useCallback, useEffect, useRef, useState } from 'react'
import feature1 from '@/assets/figma/about/section-3/feature-1.png'
import feature2 from '@/assets/figma/about/section-3/feature-2.png'
import feature3 from '@/assets/figma/about/section-3/feature-3.png'
import feature4 from '@/assets/figma/about/section-3/feature-4.png'
import { cn } from '@/lib/utils'

type AboutBringsFeature = {
  image: string
  title?: string
  titleLines?: readonly [string, string]
  description?: string
  imageNodeId: string
  titleNodeId: string
  descriptionNodeId?: string
  itemNodeId: string
  stagger?: boolean
}

export const ABOUT_BRINGS_FEATURES: AboutBringsFeature[] = [
  {
    image: feature1,
    title: 'AI English Speaking Lab',
    description: 'Daily speaking practice for every student. Graded by AI.',
    imageNodeId: '1047:2039',
    titleNodeId: '1047:2040',
    descriptionNodeId: '1047:2040-desc',
    itemNodeId: '1047:2038',
    stagger: false,
  },
  {
    image: feature2,
    title: 'Code Monkey',
    description:
      "The world's most loved K–12 coding program. 18,000+ schools globally.",
    imageNodeId: '1047:2045',
    titleNodeId: '1047:2046',
    descriptionNodeId: '1047:2046-desc',
    itemNodeId: '1047:2044',
    stagger: true,
  },
  {
    image: feature3,
    title: 'The Edge',
    description:
      'A Grade 6–12 life-readiness program. Every student leaves with a leadership profile.',
    imageNodeId: '1047:2048',
    titleNodeId: '1047:2049',
    descriptionNodeId: '1047:2049-desc',
    itemNodeId: '1047:2047',
    stagger: false,
  },
]

/** Four principles — about page section 4. */
export const ABOUT_BRINGS_PRINCIPLES_FEATURES: AboutBringsFeature[] = [
  {
    image: feature1,
    titleLines: ['Every student deserves', '1-on-1 attention.'],
    description: 'Not just the top performers. Every student.',
    imageNodeId: '1047:2039',
    titleNodeId: '1047:2040',
    descriptionNodeId: '1047:2040-desc',
    itemNodeId: '1047:2038',
    stagger: false,
  },
  {
    image: feature2,
    titleLines: ['Teachers need leverage,', 'not replacement.'],
    description: 'Our job is to make every teacher more effective.',
    imageNodeId: '1047:2045',
    titleNodeId: '1047:2046',
    descriptionNodeId: '1047:2046-desc',
    itemNodeId: '1047:2044',
    stagger: true,
  },
  {
    image: feature3,
    titleLines: ['Outcomes are measured,', "or they don't exist."],
    description: 'Every Zene program ends in a downloadable report.',
    imageNodeId: '1047:2048',
    titleNodeId: '1047:2049',
    descriptionNodeId: '1047:2049-desc',
    itemNodeId: '1047:2047',
    stagger: false,
  },
  {
    image: feature4,
    titleLines: ['Schools are partners,', 'not customers.'],
    description: "We don't sell. We work with you.",
    imageNodeId: '1047:2042',
    titleNodeId: '1047:2043',
    descriptionNodeId: '1047:2043-desc',
    itemNodeId: '1047:2041',
    stagger: true,
  },
]

export type AboutBringsSectionContent = {
  eyebrow: string
  headingLine1: string
  headingHighlight: string
  headingOnOneLine?: boolean
  carouselLabel: string
}

export const ABOUT_BRINGS_PROGRAMS_CONTENT: AboutBringsSectionContent = {
  eyebrow: 'Three programs. One mission.',
  headingLine1: 'What we bring to',
  headingHighlight: 'your school.',
  carouselLabel: 'What we bring to your school',
}

export const ABOUT_BRINGS_PRINCIPLES_CONTENT: AboutBringsSectionContent = {
  eyebrow: 'Four principles',
  headingLine1: 'What we ',
  headingHighlight: 'believe.',
  headingOnOneLine: true,
  carouselLabel: 'What we believe',
}

type AboutBringsSectionProps = {
  sectionId?: string
  features?: AboutBringsFeature[]
  content?: AboutBringsSectionContent
}

function AboutBringsFeatureTitle({ feature }: { feature: AboutBringsFeature }) {
  if (feature.titleLines) {
    return (
      <div
        className="mb-0 w-full max-w-[var(--about-brings-label-max-w)] text-center font-heading font-medium uppercase leading-normal text-black"
        style={{
          fontSize: 'var(--about-brings-title-size)',
          marginTop: 'var(--about-brings-feature-img-to-label)',
        }}
        data-node-id={feature.titleNodeId}
      >
        <span className="block">{feature.titleLines[0]}</span>
        <span className="block">{feature.titleLines[1]}</span>
      </div>
    )
  }

  return (
    <p
      className="mb-0 w-full max-w-[var(--about-brings-label-max-w)] text-center font-heading font-medium uppercase leading-normal text-black"
      style={{
        fontSize: 'var(--about-brings-title-size)',
        marginTop: 'var(--about-brings-feature-img-to-label)',
      }}
      data-node-id={feature.titleNodeId}
    >
      {feature.title}
    </p>
  )
}

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
      <AboutBringsFeatureTitle feature={feature} />
      {feature.description ? (
        <p
          className="mb-0 w-full max-w-[var(--about-brings-label-max-w)] text-center font-body font-normal leading-normal text-black"
          style={{
            fontSize: 'var(--about-brings-description-size)',
            fontVariationSettings: "'opsz' 14",
            marginTop: 'var(--about-brings-title-to-description)',
          }}
          data-node-id={feature.descriptionNodeId}
        >
          {feature.description}
        </p>
      ) : null}
    </div>
  )
}

function AboutBringsMobileCarousel({
  features,
  carouselLabel,
}: {
  features: AboutBringsFeature[]
  carouselLabel: string
}) {
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
        aria-label={carouselLabel}
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
        aria-label="Choose program slide"
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
            aria-label={`Show ${feature.titleLines?.join(' ') ?? feature.title ?? 'principle'}`}
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

export function AboutBringsSection({
  sectionId = 'about-brings',
  features = ABOUT_BRINGS_FEATURES,
  content = ABOUT_BRINGS_PROGRAMS_CONTENT,
}: AboutBringsSectionProps) {
  const headingId = `${sectionId}-heading`
  const isThreeColumn = features.length === 3

  return (
    <section
      className="w-full px-[5px] pt-[5px]"
      aria-labelledby={headingId}
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
          <p
            className="section-eyebrow font-body uppercase text-black"
            style={{
              fontSize: 'var(--section-text-eyebrow)',
              fontVariationSettings: "'opsz' 14",
            }}
          >
            {content.eyebrow}
          </p>

          <h2
            id={headingId}
            className="max-w-full font-heading font-medium uppercase leading-none text-black"
            style={{
              fontSize: 'var(--section-text-heading)',
              maxWidth: 'var(--about-brings-heading-max-w)',
              marginTop: 'var(--about-brings-eyebrow-to-heading)',
            }}
            data-node-id="1047:2037"
          >
            {content.headingOnOneLine ? (
              <span className="flex flex-wrap items-end gap-[var(--about-brings-heading-word-gap)]">
                <span>{content.headingLine1}</span>
                <span
                  className="inline-flex items-center bg-zene-cyan"
                  style={{
                    minHeight: 'var(--about-brings-highlight-h)',
                    paddingLeft: 'var(--about-brings-highlight-pad-x)',
                    paddingRight: 'var(--about-brings-highlight-pad-x)',
                  }}
                >
                  {content.headingHighlight}
                </span>
              </span>
            ) : (
              <>
                <span className="block max-sm:whitespace-normal sm:whitespace-nowrap">
                  {content.headingLine1}
                </span>
                <span className="block max-sm:whitespace-normal sm:whitespace-nowrap">
                  <span
                    className="inline-flex items-center bg-zene-cyan"
                    style={{
                      minHeight: 'var(--about-brings-highlight-h)',
                      paddingLeft: 'var(--about-brings-highlight-pad-x)',
                      paddingRight: 'var(--about-brings-highlight-pad-x)',
                    }}
                  >
                    {content.headingHighlight}
                  </span>
                </span>
              </>
            )}
          </h2>

          <AboutBringsMobileCarousel
            features={features}
            carouselLabel={content.carouselLabel}
          />

          <ul
            className={cn(
              'hidden list-none gap-x-[var(--about-brings-grid-gap-x)] gap-y-[var(--about-brings-grid-gap-y)] p-0 sm:grid',
              isThreeColumn ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-2 xl:grid-cols-4',
            )}
            style={{ marginTop: 'var(--about-brings-heading-to-grid)' }}
          >
            {features.map(feature => (
              <li
                key={feature.itemNodeId}
                className={cn(
                  feature.stagger &&
                    (isThreeColumn
                      ? 'sm:mt-[var(--about-brings-stagger-offset-three)]'
                      : 'xl:mt-[var(--about-brings-stagger-offset)]'),
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
