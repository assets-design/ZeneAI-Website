import { useEffect, useState } from 'react'
import { SectionEyebrow } from '@/components/SectionEyebrow'
import { cn } from '@/lib/utils'

import detailPersonalDev from '@/assets/figma/the-edge/framework/detail-personal-dev.png'
import ellipseInner from '@/assets/figma/the-edge/framework/ellipse-inner.svg'
import ellipseOuter from '@/assets/figma/the-edge/framework/ellipse-outer.svg'
import ellipseRing from '@/assets/figma/the-edge/framework/ellipse-ring.svg'
import pillarCitizenship from '@/assets/figma/the-edge/framework/pillar-citizenship.png'
import pillarCommunication from '@/assets/figma/the-edge/framework/pillar-communication.png'
import pillarCriticalThinking from '@/assets/figma/the-edge/framework/pillar-critical-thinking.png'
import pillarFinancialLiteracy from '@/assets/figma/the-edge/framework/pillar-financial-literacy.png'
import pillarPersonalDev from '@/assets/figma/the-edge/framework/pillar-personal-dev.png'
import theEdgeHeroLogoOverlay from '@/assets/figma/the-edge/hero-logo-overlay.png'
import gainCommunication from '@/assets/figma/english-ai/gain-pronunciation.png'
import gainCriticalThinking from '@/assets/figma/english-ai/gain-reading.png'
import gainFinancialLiteracy from '@/assets/figma/english-ai/gain-grammar.png'
import gainCitizenship from '@/assets/figma/english-ai/gain-data.png'

const PILLARS = [
  {
    id: 'personal-development',
    title: 'Personal Development',
    body: 'Self-awareness, goal-setting, time management, resilience.',
    icon: pillarPersonalDev,
    detailImage: detailPersonalDev,
    angleDeg: -90,
    nodeId: '1103:2354',
  },
  {
    id: 'active-citizenship',
    title: 'Active Citizenship',
    body: 'Community engagement and civic responsibility measured with documented proof.',
    icon: pillarCitizenship,
    detailImage: gainCitizenship,
    angleDeg: 198,
    nodeId: '1106:2362',
  },
  {
    id: 'communication',
    title: 'Communication',
    body: 'Writing, speaking, and active listening developed through structured practice and feedback.',
    icon: pillarCommunication,
    detailImage: gainCommunication,
    angleDeg: -18,
    nodeId: '1106:2359',
  },
  {
    id: 'critical-thinking',
    title: 'Critical Thinking',
    body: 'Problem-solving, analysis, and decision-making assessed through scaffolded growth.',
    icon: pillarCriticalThinking,
    detailImage: gainCriticalThinking,
    angleDeg: 126,
    nodeId: '1108:2365',
  },
  {
    id: 'financial-literacy',
    title: 'Financial Literacy',
    body: 'Practical money skills and entrepreneurial thinking built into every module.',
    icon: pillarFinancialLiteracy,
    detailImage: gainFinancialLiteracy,
    angleDeg: 54,
    nodeId: '1108:2368',
  },
] as const

/** Middle (second) ring radius — dot sits on this stroke (diameter = 56.7%). */
const RING_RADIUS_PERCENT = 28.35
/** Outer fill radius (light-blue background, full diagram). */
const OUTER_FILL_RADIUS_PERCENT = 50
/** Inset from outer edge so character art does not touch the fill boundary. */
const OUTER_BAND_INSET_PERCENT = 3.5
/** Character icons sit in the third band — between the middle ring and outer fill. */
const ICON_RADIUS_PERCENT =
  (RING_RADIUS_PERCENT + OUTER_FILL_RADIUS_PERCENT - OUTER_BAND_INSET_PERCENT) / 2

function polarPosition(angleDeg: number, radiusPercent: number) {
  const rad = (angleDeg * Math.PI) / 180
  return {
    left: `${50 + radiusPercent * Math.cos(rad)}%`,
    top: `${50 + radiusPercent * Math.sin(rad)}%`,
  }
}

/** Shortest signed delta so the dot travels along the ring, not in a straight line. */
function shortestAngleDelta(fromDeg: number, toDeg: number) {
  return ((((toDeg - fromDeg) % 360) + 540) % 360) - 180
}

const highlightStyle = {
  minHeight: 'var(--english-ai-highlight-h)',
  paddingLeft: 'var(--english-ai-highlight-pad-x)',
  paddingRight: 'var(--english-ai-highlight-pad-x)',
} as const

function FrameworkDiagram({
  activeIndex,
  onSelect,
}: {
  activeIndex: number
  onSelect: (index: number) => void
}) {
  const [dotAngleDeg, setDotAngleDeg] = useState(PILLARS[0].angleDeg)

  useEffect(() => {
    const target = PILLARS[activeIndex].angleDeg
    setDotAngleDeg(prev => prev + shortestAngleDelta(prev, target))
  }, [activeIndex])

  return (
    <div
      className="the-edge-framework-diagram relative mx-auto aspect-square w-full max-w-[var(--the-edge-framework-diagram-size)]"
      role="tablist"
      aria-label="Five pillars framework"
    >
      <img
        src={ellipseOuter}
        alt=""
        aria-hidden
        className="absolute inset-0 size-full"
        data-node-id="1100:2343"
      />
      <img
        src={ellipseRing}
        alt=""
        aria-hidden
        className="the-edge-framework-ring absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        data-node-id="1103:2352"
      />
      <img
        src={ellipseInner}
        alt=""
        aria-hidden
        className="the-edge-framework-core absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        data-node-id="1103:2350"
      />
      <div
        className="the-edge-framework-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        data-node-id="1100:2344"
      >
        <img
          src={theEdgeHeroLogoOverlay}
          alt=""
          aria-hidden
          className="size-full object-contain"
        />
      </div>

      <div
        className="the-edge-framework-dot-orbit"
        aria-hidden
        style={{ transform: `rotate(${dotAngleDeg}deg)` }}
      >
        <span className="the-edge-framework-ring-dot" />
      </div>

      {PILLARS.map((pillar, index) => {
        const isActive = activeIndex === index
        const position = polarPosition(pillar.angleDeg, ICON_RADIUS_PERCENT)

        return (
          <button
            key={pillar.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-label={pillar.title}
            onClick={() => onSelect(index)}
            className={cn(
              'the-edge-framework-pillar absolute border-0 bg-transparent p-0',
              isActive && 'the-edge-framework-pillar--active',
            )}
            style={position}
            data-node-id={pillar.nodeId}
          >
            <img
              src={pillar.icon}
              alt=""
              aria-hidden
              className="pointer-events-none size-full object-contain"
            />
          </button>
        )
      })}
    </div>
  )
}

export function TheEdgeFrameworkSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activePillar = PILLARS[activeIndex]

  return (
    <section
      id="the-edge-framework"
      className="w-full px-[5px] pt-[5px]"
      aria-labelledby="the-edge-framework-heading"
      data-node-id="1142:753"
    >
      <div
        className="relative mx-auto w-full overflow-hidden section-card-shell bg-white"
        style={{ maxWidth: 'var(--section-card-max-w)' }}
        data-node-id="1100:2332"
      >
        <div
          className="the-edge-framework-inner"
          style={{
            paddingLeft: 'var(--section-padding-x)',
            paddingRight: 'var(--section-padding-x)',
            paddingTop: 'var(--the-edge-framework-padding-top)',
            paddingBottom: 'var(--the-edge-framework-padding-bottom)',
          }}
        >
          <SectionEyebrow
            style={{ marginTop: 0 }}
            data-node-id="1100:2336"
          >
            The framework
          </SectionEyebrow>

          <h2
            id="the-edge-framework-heading"
            className="max-w-[var(--english-ai-heading-max-w)] font-heading font-medium uppercase leading-none text-black"
            style={{
              fontSize: 'var(--section-text-heading)',
              marginTop: 'var(--the-edge-framework-eyebrow-to-heading)',
            }}
            data-node-id="1100:2335"
          >
            Five pillars.{' '}
            <span className="inline-flex items-center bg-zene-cyan" style={highlightStyle}>
              Every skill a graduate
            </span>{' '}
            needs.
          </h2>

          <p
            className="normal-case font-body font-normal leading-normal text-black max-lg:whitespace-normal lg:whitespace-nowrap"
            style={{
              fontSize: 'var(--section-text-body)',
              fontVariationSettings: "'opsz' 14",
              maxWidth: 'var(--the-edge-framework-subtitle-max-w)',
              marginTop: 'var(--the-edge-framework-heading-to-subtitle)',
            }}
            data-node-id="1100:2338"
          >
            What colleges admit. What employers hire. What life demands.
          </p>

          <div
            className="the-edge-framework-content grid min-w-0 items-center gap-x-[var(--the-edge-framework-columns-gap)] gap-y-[var(--the-edge-framework-row-gap)] lg:grid-cols-2"
            style={{ marginTop: 'var(--the-edge-framework-subtitle-to-content)' }}
          >
            <FrameworkDiagram activeIndex={activeIndex} onSelect={setActiveIndex} />

            <article
              className="the-edge-framework-detail min-w-0"
              role="tabpanel"
              aria-labelledby={`the-edge-framework-pillar-${activePillar.id}`}
            >
              <div
                className="the-edge-framework-detail-image overflow-hidden"
                data-node-id="1100:2341"
              >
                <img
                  src={activePillar.detailImage}
                  alt=""
                  aria-hidden
                  className="size-full object-cover"
                />
              </div>

              <h3
                id={`the-edge-framework-pillar-${activePillar.id}`}
                className="font-body font-semibold normal-case leading-normal text-black"
                style={{
                  fontSize: 'var(--section-text-body)',
                  fontVariationSettings: "'opsz' 14",
                  marginTop: 'var(--the-edge-framework-image-to-title)',
                }}
                data-node-id="1110:2371"
              >
                {activePillar.title}
              </h3>

              <p
                className="normal-case font-body font-normal leading-normal text-black"
                style={{
                  fontSize: 'var(--section-text-body)',
                  fontVariationSettings: "'opsz' 14",
                  maxWidth: 'var(--the-edge-framework-detail-body-max-w)',
                  marginTop: 'var(--the-edge-framework-title-to-body)',
                }}
                data-node-id="1110:2372"
              >
                {activePillar.body}
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
