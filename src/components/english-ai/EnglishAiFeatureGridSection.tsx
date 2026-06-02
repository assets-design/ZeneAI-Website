import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type FeatureItem = {
  image: string
  title: string
  body: string
  imageNodeId: string
  titleNodeId: string
  bodyNodeId: string
}

function FeatureCard({
  image,
  title,
  body,
  imageNodeId,
  titleNodeId,
  bodyNodeId,
  normalCaseBody = false,
}: FeatureItem & { normalCaseBody?: boolean }) {
  return (
    <article className="flex min-w-0 flex-col items-center text-center">
      <div
        className="relative flex w-full max-w-[var(--english-ai-grid-img-w)] items-center justify-center"
        style={{
          height: 'var(--english-ai-grid-img-h)',
          minHeight: 'var(--english-ai-grid-img-h)',
        }}
        data-node-id={imageNodeId}
      >
        <img
          src={image}
          alt=""
          aria-hidden
          className="max-h-full max-w-full object-contain object-bottom"
          draggable={false}
        />
      </div>
      <h3
        className="font-heading font-medium uppercase leading-none text-black"
        style={{
          fontSize: 'var(--section-text-body)',
          marginTop: 'var(--english-ai-grid-img-to-title)',
        }}
        data-node-id={titleNodeId}
      >
        {title}
      </h3>
      <p
        className={cn(
          'mb-0 font-body font-normal leading-normal text-black',
          normalCaseBody ? 'normal-case' : 'capitalize',
        )}
        style={{
          fontSize: 'var(--section-text-body)',
          fontVariationSettings: "'opsz' 14",
          maxWidth: 'var(--english-ai-grid-copy-max-w)',
          marginTop: 'var(--english-ai-grid-title-to-body)',
        }}
        data-node-id={bodyNodeId}
      >
        {body}
      </p>
    </article>
  )
}

function EnglishAiFeatureMobileCarousel({
  items,
  ariaLabel,
  normalCaseBody = false,
}: {
  items: FeatureItem[]
  ariaLabel: string
  normalCaseBody?: boolean
}) {
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
  }, [items.length])

  return (
    <div className="sm:hidden">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-roledescription="carousel"
        aria-label={ariaLabel}
      >
        {items.map((item, index) => (
          <div
            key={item.titleNodeId}
            className="w-full shrink-0 snap-center snap-always px-[2px]"
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${items.length}`}
          >
            <FeatureCard {...item} normalCaseBody={normalCaseBody} />
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
        {items.map((item, index) => (
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

import type { ProgramVariant } from '@/types/program'
import { isCustomProgramVariant } from '@/types/program'

type EnglishAiFeatureGridSectionProps = {
  variant?: ProgramVariant
  sectionNodeId: string
  eyebrow: string
  eyebrowNodeId: string
  heading: ReactNode
  headingId: string
  headingNodeId: string
  subtitle?: string
  subtitleNodeId: string
  items: FeatureItem[]
  footer?: string
  footerNodeId?: string
  footerAlign?: 'left' | 'center'
  carouselAriaLabel: string
}

export function EnglishAiFeatureGridSection({
  variant = 'english-ai',
  sectionNodeId,
  eyebrow,
  eyebrowNodeId,
  heading,
  headingId,
  headingNodeId,
  subtitle,
  subtitleNodeId,
  items,
  footer,
  footerNodeId,
  footerAlign = 'left',
  carouselAriaLabel,
}: EnglishAiFeatureGridSectionProps) {
  const isCustomProgram = isCustomProgramVariant(variant)

  return (
    <section
      className="w-full px-[5px] pt-[5px]"
      aria-labelledby={headingId}
      data-node-id={sectionNodeId}
    >
      <div
        className="relative mx-auto w-full overflow-hidden section-card-shell bg-white"
        style={{ maxWidth: 'var(--section-card-max-w)' }}
      >
        <div
          className={cn(footer && 'english-ai-feature-grid-inner')}
          style={{
            paddingLeft: 'var(--section-padding-x)',
            paddingRight: 'var(--section-padding-x)',
            paddingTop: 'var(--english-ai-grid-padding-top)',
            paddingBottom: 'var(--english-ai-grid-padding-bottom)',
          }}
        >
          <div className="shrink-0">
            <p
              className={cn('font-body text-black', !isCustomProgram && 'uppercase')}
              style={{
                fontSize: 'var(--section-text-eyebrow)',
                fontVariationSettings: "'opsz' 14",
              }}
              data-node-id={eyebrowNodeId}
            >
              {eyebrow}
            </p>

            <h2
              id={headingId}
              className="section-heading max-w-[var(--english-ai-heading-max-w)] font-heading font-medium uppercase text-black"
              style={{
                fontSize: 'var(--section-text-heading)',
                marginTop: 'var(--english-ai-grid-eyebrow-to-heading)',
              }}
              data-node-id={headingNodeId}
            >
              {heading}
            </h2>

            {subtitle ? (
              <p
                className={cn(
                  'font-body font-normal leading-normal text-black',
                  isCustomProgram ? 'normal-case' : 'capitalize',
                )}
                style={{
                  fontSize: 'var(--section-text-body)',
                  fontVariationSettings: "'opsz' 14",
                  maxWidth: 'var(--english-ai-grid-subtitle-max-w)',
                  marginTop: 'var(--english-ai-grid-heading-to-subtitle)',
                }}
                data-node-id={subtitleNodeId}
              >
                {subtitle}
              </p>
            ) : null}
          </div>

          <div
            className={cn('english-ai-feature-grid-items', footer && 'min-h-0 flex-1')}
            style={{
              marginTop: subtitle
                ? 'var(--english-ai-grid-subtitle-to-items)'
                : 'var(--english-ai-grid-heading-to-subtitle)',
            }}
          >
            <EnglishAiFeatureMobileCarousel
              items={items}
              ariaLabel={carouselAriaLabel}
              normalCaseBody={isCustomProgram}
            />

            <div className="english-ai-feature-grid-desktop hidden min-h-0 min-w-0 grid-cols-1 gap-x-[var(--english-ai-grid-gap-x)] gap-y-[var(--english-ai-grid-gap-y)] sm:grid sm:grid-cols-2 xl:grid-cols-3">
              {items.map(item => (
                <FeatureCard key={item.titleNodeId} {...item} normalCaseBody={isCustomProgram} />
              ))}
            </div>
          </div>

          {footer ? (
            <p
              className={cn(
                'english-ai-feature-grid-footer mt-auto w-full shrink-0 font-heading font-medium uppercase leading-none text-black',
                footerAlign === 'center' ? 'text-center' : 'text-left',
              )}
              style={{
                fontSize: 'var(--section-text-body)',
                paddingTop: 'var(--english-ai-grid-items-to-footer)',
              }}
              data-node-id={footerNodeId}
            >
              {footer}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  )
}
