import { useCallback, useEffect, useRef, useState } from 'react'

import { cn } from '@/lib/utils'

const TRACKS = [
  {
    title: 'Entrepreneurship Track',
    body: 'Students design and pitch a real venture. Market research, business model, prototype, presentation.',
    tags: ['Market research', 'Business model', 'Prototype', 'Pitch day'],
    cardNodeId: '1297:2984',
    titleNodeId: '1297:2985',
    bodyNodeId: '1297:2986',
  },
  {
    title: 'Internship Track',
    body: 'Students complete a structured internship challenge. Real problem. Real deliverable.',
    tags: ['Brief from host', 'Field work', 'Deliverable', 'Review'],
    cardNodeId: '1297:3000',
    titleNodeId: '1297:3002',
    bodyNodeId: '1297:3003',
  },
] as const

const highlightStyle = {
  minHeight: 'var(--english-ai-highlight-h)',
  paddingLeft: 'var(--english-ai-highlight-pad-x)',
  paddingRight: 'var(--english-ai-highlight-pad-x)',
} as const

function TrackCard({
  title,
  body,
  tags,
  cardNodeId,
  titleNodeId,
  bodyNodeId,
}: (typeof TRACKS)[number]) {
  return (
    <article
      className="the-edge-beyond-track-card flex min-h-[var(--the-edge-beyond-track-card-min-h)] min-w-0 flex-col bg-[#f0f0f0]"
      style={{
        borderRadius: 'var(--the-edge-beyond-track-card-radius)',
        padding: 'var(--the-edge-beyond-track-card-padding)',
      }}
      data-node-id={cardNodeId}
    >
      <h3
        className="font-body font-semibold capitalize leading-normal text-black"
        style={{
          fontSize: 'var(--section-text-body)',
          fontVariationSettings: "'opsz' 14",
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
          marginTop: 'var(--the-edge-beyond-track-title-to-body)',
        }}
        data-node-id={bodyNodeId}
      >
        {body}
      </p>
      <ul
        className="the-edge-beyond-track-pills mb-0 flex list-none flex-wrap p-0"
        style={{
          gap: 'var(--the-edge-beyond-pill-gap)',
          marginTop: 'var(--the-edge-beyond-track-body-to-pills)',
        }}
        aria-label={`${title} milestones`}
      >
        {tags.map((tag) => (
          <li key={tag}>
            <span
              className="the-edge-beyond-track-pill inline-flex items-center justify-center bg-white font-body font-normal capitalize leading-normal text-black"
              style={{
                fontSize: 'var(--the-edge-beyond-pill-font-size)',
                fontVariationSettings: "'opsz' 14",
                height: 'var(--the-edge-beyond-pill-height)',
                borderRadius: 'var(--the-edge-beyond-pill-radius)',
                paddingInline: 'var(--the-edge-beyond-pill-padding-x)',
              }}
            >
              {tag}
            </span>
          </li>
        ))}
      </ul>
    </article>
  )
}

function BeyondTrackDots({
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
      className="the-edge-beyond-dots flex items-center justify-center sm:hidden"
      role="tablist"
      aria-label="Choose track slide"
      style={{
        marginTop: 'var(--the-edge-beyond-tracks-to-dots)',
        gap: 'var(--the-edge-beyond-dot-gap)',
      }}
    >
      {Array.from({ length: count }, (_, index) => (
        <button
          key={index}
          type="button"
          role="tab"
          aria-label={`Show track ${index + 1}`}
          aria-selected={activeIndex === index}
          onClick={() => onSelect(index)}
          className={cn(
            'rounded-full border border-black p-0 transition-colors',
            activeIndex === index ? 'bg-black' : 'bg-transparent',
          )}
          style={{
            width: 'var(--the-edge-beyond-dot-size)',
            height: 'var(--the-edge-beyond-dot-size)',
          }}
        />
      ))}
    </div>
  )
}

export function TheEdgeBeyondClassroomSection() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const syncActiveIndex = useCallback(() => {
    const track = trackRef.current
    if (!track || !window.matchMedia('(max-width: 639px)').matches) return

    const slides = Array.from(track.children) as HTMLElement[]
    if (slides.length === 0) return

    let closestIndex = 0
    let closestDistance = Number.POSITIVE_INFINITY

    slides.forEach((slide, index) => {
      const distance = Math.abs(track.scrollLeft - slide.offsetLeft)
      if (distance < closestDistance) {
        closestDistance = distance
        closestIndex = index
      }
    })

    setActiveIndex(closestIndex)
  }, [])

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

    const handleScroll = () => syncActiveIndex()

    track.addEventListener('scroll', handleScroll, { passive: true })
    return () => track.removeEventListener('scroll', handleScroll)
  }, [syncActiveIndex])

  return (
    <section
      id="the-edge-beyond-classroom"
      className="the-edge-beyond-classroom w-full px-[5px] pt-[5px]"
      aria-labelledby="the-edge-beyond-classroom-heading"
      data-node-id="1315:825"
    >
      <div
        className="relative mx-auto w-full overflow-hidden section-card-shell bg-white"
        style={{ maxWidth: 'var(--section-card-max-w)' }}
      >
        <div
          className="the-edge-beyond-classroom-inner"
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
            data-node-id="1297:2977"
          >
            Beyond the classroom
          </p>

          <h2
            id="the-edge-beyond-classroom-heading"
            className="section-heading max-w-[var(--english-ai-heading-max-w)] font-heading font-medium uppercase text-black"
            style={{
              fontSize: 'var(--section-text-heading)',
              marginTop: 'var(--english-ai-grid-eyebrow-to-heading)',
            }}
            data-node-id="1297:2980"
          >
            Where skills{' '}
            <span className="inline-flex items-center bg-zene-cyan" style={highlightStyle}>
              become experience.
            </span>
          </h2>

          <p
            className="capitalize font-body font-normal leading-normal text-black"
            style={{
              fontSize: 'var(--section-text-body)',
              fontVariationSettings: "'opsz' 14",
              maxWidth: 'var(--the-edge-beyond-subtitle-max-w)',
              marginTop: 'var(--english-ai-grid-heading-to-subtitle)',
            }}
            data-node-id="1297:2981"
          >
            Skills are only real when they&apos;re applied.
          </p>

          <div style={{ marginTop: 'var(--the-edge-beyond-subtitle-to-tracks)' }}>
            <div className="the-edge-beyond-carousel">
              <div
                ref={trackRef}
                className={cn(
                  'the-edge-beyond-tracks grid min-w-0 grid-cols-1 gap-x-[var(--the-edge-beyond-columns-gap)] gap-y-[var(--the-edge-beyond-row-gap)] md:grid-cols-2',
                  'max-sm:flex max-sm:overflow-x-auto max-sm:snap-x max-sm:snap-mandatory',
                  '[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
                )}
                aria-roledescription="carousel"
                aria-label="Beyond the classroom tracks"
              >
                {TRACKS.map((track, index) => (
                  <div
                    key={track.titleNodeId}
                    className="the-edge-beyond-slide min-w-0 max-sm:w-full max-sm:shrink-0 max-sm:snap-start max-sm:snap-always"
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${index + 1} of ${TRACKS.length}`}
                  >
                    <TrackCard {...track} />
                  </div>
                ))}
              </div>
            </div>

            <BeyondTrackDots
              count={TRACKS.length}
              activeIndex={activeIndex}
              onSelect={scrollToIndex}
            />
          </div>

          <p
            className="text-center capitalize font-heading font-normal leading-normal text-black"
            style={{
              fontSize: 'var(--the-edge-beyond-footer-size)',
              maxWidth: 'var(--the-edge-beyond-footer-max-w)',
              marginTop: 'var(--the-edge-beyond-tracks-to-footer)',
              marginInline: 'auto',
            }}
            data-node-id="1297:3016"
          >
            Both tracks add a documented project to the student&apos;s leadership profile.
          </p>
        </div>
      </div>
    </section>
  )
}
