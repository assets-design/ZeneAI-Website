import { useCallback, useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import curriculumCefr from '@/assets/figma/english-ai/curriculum-cefr.png'
import curriculumNcf from '@/assets/figma/english-ai/curriculum-ncf.png'
import curriculumTextbook from '@/assets/figma/english-ai/curriculum-textbook.png'

const ITEMS = [
  {
    image: curriculumNcf,
    title: 'NCF and NEP 2020 aligned.',
    body: 'Every activity mapped to a curriculum outcome. Your board reports stay defensible.',
    imageNodeId: '1060:2340',
    titleNodeId: '1060:2285',
    bodyNodeId: '1060:2286',
  },
  {
    image: curriculumCefr,
    title: 'CEFR-graded from Pre-A1 to B2.',
    body: 'The international standard, applied from day one.',
    imageNodeId: '1060:2341',
    titleNodeId: '1060:2287',
    bodyNodeId: '1060:2288',
  },
  {
    image: curriculumTextbook,
    title: 'Mapped to your textbook.',
    body: 'Tell us your English textbook. Our curriculum team maps every Zene lesson to your chapters.',
    imageNodeId: '1060:2342',
    titleNodeId: '1060:2289',
    bodyNodeId: '1060:2290',
  },
] as const

const CODE_MONKEY_ITEMS = [
  {
    image: curriculumNcf,
    title: 'Your textbook stays.',
    body: 'We align vocabulary, themes, and reading levels to the book you already use.',
    imageNodeId: '1060:2340',
    titleNodeId: '1060:2285',
    bodyNodeId: '1060:2286',
  },
  {
    image: curriculumCefr,
    title: 'Your scope stays.',
    body: "Zene practices what you're teaching this week — not its own curriculum.",
    imageNodeId: '1060:2341',
    titleNodeId: '1060:2287',
    bodyNodeId: '1060:2288',
  },
  {
    image: curriculumTextbook,
    title: 'Your sequence stays.',
    body: 'Teachers reorder, skip, or extend any module. Zene follows.',
    imageNodeId: '1060:2342',
    titleNodeId: '1060:2289',
    bodyNodeId: '1060:2290',
  },
] as const

const THE_EDGE_ITEMS = [
  {
    image: curriculumNcf,
    title: 'Code Monkey',
    body: 'Computational thinking and coding skills through game-based learning.',
    imageNodeId: '1060:2340',
    titleNodeId: '1060:2285',
    bodyNodeId: '1060:2286',
  },
  {
    image: curriculumCefr,
    title: 'English AI',
    body: 'Speaking-first English practice with AI feedback for every student.',
    imageNodeId: '1060:2341',
    titleNodeId: '1060:2287',
    bodyNodeId: '1060:2288',
  },
  {
    image: curriculumTextbook,
    title: 'Public Speaking',
    body: 'Confidence, clarity, and presentation skills developed through structured practice.',
    imageNodeId: '1060:2342',
    titleNodeId: '1060:2289',
    bodyNodeId: '1060:2290',
  },
  {
    image: curriculumNcf,
    title: 'Young Leaders',
    body: 'Leadership fundamentals for middle and high school students.',
    imageNodeId: '1060:2343',
    titleNodeId: '1060:2291',
    bodyNodeId: '1060:2292',
  },
] as const

type CurriculumItemData = (typeof ITEMS)[number]

function CurriculumItem({
  image,
  title,
  body,
  imageNodeId,
  titleNodeId,
  bodyNodeId,
  normalCaseBody = false,
}: CurriculumItemData & { normalCaseBody?: boolean }) {
  return (
    <article className="flex min-w-0 flex-col items-center text-center">
      <div
        className="relative w-full max-w-[var(--english-ai-grid-img-w)] overflow-hidden"
        style={{ height: 'var(--english-ai-grid-img-h)' }}
        data-node-id={imageNodeId}
      >
        <img
          src={image}
          alt=""
          aria-hidden
          className="size-full object-cover"
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
          maxWidth: 'var(--english-ai-curriculum-copy-max-w)',
          marginTop: 'var(--english-ai-grid-title-to-body)',
        }}
        data-node-id={bodyNodeId}
      >
        {body}
      </p>
    </article>
  )
}

function CurriculumMobileCarousel({
  items,
  ariaLabel,
  normalCaseBody = false,
}: {
  items: readonly CurriculumItemData[]
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
      const viewportCenter = track.scrollLeft + track.clientWidth / 2
      let closestIndex = 0
      let closestDistance = Number.POSITIVE_INFINITY

      slides.forEach((slide, index) => {
        const distance = Math.abs(viewportCenter - (slide.offsetLeft + slide.offsetWidth / 2))
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
            <CurriculumItem {...item} normalCaseBody={normalCaseBody} />
          </div>
        ))}
      </div>

      <div
        className="flex items-center justify-center"
        role="tablist"
        aria-label="Choose curriculum slide"
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

type EnglishAiCurriculumSectionProps = {
  variant?: import('@/types/program').ProgramVariant
}

export function EnglishAiCurriculumSection({ variant = 'english-ai' }: EnglishAiCurriculumSectionProps) {
  const isEnglishAi = variant === 'english-ai'
  const isCodeMonkey = variant === 'code-monkey'
  const isTheEdge = variant === 'the-edge'
  const isCustomProgram = isCodeMonkey || isTheEdge
  const items = isTheEdge ? THE_EDGE_ITEMS : isCodeMonkey ? CODE_MONKEY_ITEMS : ITEMS
  const headingId = isTheEdge
    ? 'the-edge-curriculum-heading'
    : isCodeMonkey
      ? 'code-monkey-curriculum-heading'
      : 'english-ai-curriculum-heading'

  const highlightStyle = {
    minHeight: 'var(--english-ai-highlight-h)',
    paddingLeft: 'var(--english-ai-highlight-pad-x)',
    paddingRight: 'var(--english-ai-highlight-pad-x)',
  } as const

  return (
    <section
      className="w-full px-[5px] pt-[5px]"
      aria-labelledby={headingId}
      data-node-id="1060:2202"
    >
      <div
        className="relative mx-auto w-full overflow-hidden section-card-shell bg-white"
        style={{ maxWidth: 'var(--section-card-max-w)' }}
      >
        <div
          style={{
            paddingLeft: 'var(--section-padding-x)',
            paddingRight: 'var(--section-padding-x)',
            paddingTop: 'var(--english-ai-curriculum-padding-top)',
            paddingBottom: 'var(--english-ai-curriculum-padding-bottom)',
          }}
        >
          <p
            className="section-eyebrow font-body uppercase text-black"
            style={{
              fontSize: 'var(--section-text-eyebrow)',
              fontVariationSettings: "'opsz' 14",
            }}
            data-node-id="1060:2244"
          >
            {isTheEdge ? 'The Edge courses' : isCodeMonkey ? 'Adapted to Your School' : 'Mapped to your school, page by page'}
          </p>

          <h2
            id={headingId}
            className="max-w-[var(--english-ai-heading-max-w)] font-heading font-medium uppercase leading-none text-black"
            style={{
              fontSize: 'var(--section-text-heading)',
              marginTop: 'var(--english-ai-curriculum-eyebrow-to-heading)',
            }}
            data-node-id="1060:2339"
          >
            {isTheEdge ? (
              <>
                the edge{' '}
                <span className="inline-flex items-center bg-zene-cyan" style={highlightStyle}>
                  courses
                </span>
                .
              </>
            ) : isCodeMonkey ? (
              <>
                Your{' '}
                <span className="inline-flex items-center bg-zene-cyan" style={highlightStyle}>
                  textbook
                </span>
                , your{' '}
                <span className="inline-flex items-center bg-zene-cyan" style={highlightStyle}>
                  scope
                </span>
                , your sequence.
              </>
            ) : (
              <>
                Your textbook,{' '}
                <span
                  className="inline-block bg-[#78F3FA]"
                  style={highlightStyle}
                  data-node-id="1060:2338"
                >
                  your scope,
                </span>{' '}
                your sequence.
              </>
            )}
          </h2>

          {!isTheEdge ? (
            <p
              className={cn(
                'font-body font-normal leading-normal text-black',
                isCustomProgram ? 'normal-case' : 'capitalize',
              )}
              style={{
                fontSize: 'var(--section-text-body)',
                fontVariationSettings: "'opsz' 14",
                maxWidth: 'var(--english-ai-curriculum-subtitle-max-w)',
                marginTop: 'var(--english-ai-curriculum-heading-to-subtitle)',
              }}
              data-node-id="1060:2220"
            >
              {isCodeMonkey
                ? 'We map Zene to your existing curriculum. No replacing books. No fighting your scope and sequence.'
                : 'Zene does not ask you to change your English curriculum. Every activity maps to the chapter your students are already studying.'}
            </p>
          ) : null}

          <div style={{ marginTop: 'var(--english-ai-curriculum-subtitle-to-items)' }}>
            <CurriculumMobileCarousel
              items={items}
              ariaLabel={
                isTheEdge
                  ? 'The Edge course features'
                  : isCodeMonkey
                    ? 'Code Monkey curriculum features'
                    : 'Curriculum mapping features'
              }
              normalCaseBody={isCustomProgram}
            />

            <div
              className={cn(
                'english-ai-curriculum-grid hidden min-w-0 grid-cols-1 gap-x-[var(--english-ai-curriculum-gap-x)] gap-y-[var(--english-ai-curriculum-gap-y)] sm:grid',
                isEnglishAi || isCodeMonkey
                  ? 'sm:grid-cols-3'
                  : cn('sm:grid-cols-2', isTheEdge ? 'lg:grid-cols-4' : 'lg:grid-cols-3'),
              )}
            >
              {items.map(item => (
                <CurriculumItem key={item.titleNodeId} {...item} normalCaseBody={isCustomProgram} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
