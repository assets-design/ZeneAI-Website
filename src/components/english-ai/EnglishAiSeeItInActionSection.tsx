import { cn } from '@/lib/utils'

const FEATURES = [
  {
    title: 'Speaking-first.',
    body: "Every session starts with the student's voice.",
    titleNodeId: '1060:2283',
    bodyNodeId: '1060:2284',
  },
  {
    title: 'Skill-level data.',
    body: "Not just 'correct/incorrect' — what they mastered, what they missed.",
    titleNodeId: '1060:2292',
    bodyNodeId: '1060:2293',
  },
  {
    title: 'Teacher and principal reports.',
    body: 'Auto-generated, board-ready.',
    titleNodeId: '1060:2295',
    bodyNodeId: '1060:2296',
  },
] as const

const CODE_MONKEY_FEATURES = [
  {
    title: 'Speaking time.',
    body: '12 min per student, per session.',
    titleNodeId: '1060:2283',
    bodyNodeId: '1060:2284',
  },
  {
    title: 'Skills covered.',
    body: '6/6',
    titleNodeId: '1060:2292',
    bodyNodeId: '1060:2293',
  },
  {
    title: 'Every interaction scored.',
    body: 'Every recording saved. Teachers see a full report by Monday morning.',
    titleNodeId: '1060:2295',
    bodyNodeId: '1060:2296',
  },
] as const

const THE_EDGE_FEATURES = [
  {
    title: 'Free demo.',
    body: 'No commitment required.',
    titleNodeId: '1060:2283',
    bodyNodeId: '1060:2284',
  },
  {
    title: 'Up and running.',
    body: 'In under 90 minutes.',
    titleNodeId: '1060:2292',
    bodyNodeId: '1060:2293',
  },
  {
    title: 'Leadership growth.',
    body: 'Tracked from day one.',
    titleNodeId: '1060:2295',
    bodyNodeId: '1060:2296',
  },
] as const

const DEMO_VIDEO = '/assets/figma/00%20How%20to%20get%20started_.mp4'

function ActionFeature({
  title,
  body,
  titleNodeId,
  bodyNodeId,
  normalCaseBody = false,
}: (typeof FEATURES)[number] & { normalCaseBody?: boolean }) {
  return (
    <article className="min-w-0">
      <p
        className={cn(
          'font-body font-normal leading-normal text-black',
          normalCaseBody ? 'normal-case' : 'capitalize',
        )}
        style={{
          fontSize: 'var(--section-text-body)',
          fontVariationSettings: "'opsz' 14",
        }}
      >
        <span className="font-semibold" data-node-id={titleNodeId}>
          {title}
        </span>
        <br />
        <span data-node-id={bodyNodeId}>{body}</span>
      </p>
    </article>
  )
}

import { isCustomProgramVariant } from '@/types/program'
import type { ProgramVariant } from '@/types/program'

type EnglishAiSeeItInActionSectionProps = {
  variant?: ProgramVariant
}

export function EnglishAiSeeItInActionSection({
  variant = 'english-ai',
}: EnglishAiSeeItInActionSectionProps) {
  const isCodeMonkey = variant === 'code-monkey'
  const isTheEdge = variant === 'the-edge'
  const isCustomProgram = isCustomProgramVariant(variant)
  const features = isTheEdge ? THE_EDGE_FEATURES : isCodeMonkey ? CODE_MONKEY_FEATURES : FEATURES
  const headingId = isTheEdge
    ? 'the-edge-action-heading'
    : isCodeMonkey
      ? 'code-monkey-action-heading'
      : 'english-ai-action-heading'

  return (
    <section
      className="w-full px-[5px] pt-[5px]"
      aria-labelledby={headingId}
      data-node-id="1060:2199"
    >
      <div
        className="relative mx-auto w-full overflow-hidden rounded-[var(--section-card-radius)] bg-white"
        style={{ maxWidth: 'var(--section-card-max-w)' }}
      >
        <div
          className="flex flex-col"
          style={{
            paddingLeft: 'var(--section-padding-x)',
            paddingRight: 'var(--section-padding-x)',
            paddingTop: 'var(--action-padding-top)',
            paddingBottom: 'var(--action-padding-bottom)',
          }}
        >
          <p
            className={cn('font-body text-black', !isCustomProgram && 'uppercase')}
            style={{
              fontSize: 'var(--section-text-eyebrow)',
              fontVariationSettings: "'opsz' 14",
            }}
            data-node-id="1060:2242"
          >
            {isTheEdge ? 'Student Progress' : isCodeMonkey ? 'Live Demo' : 'See it in action'}
          </p>

          <div
            className="grid min-w-0 items-start lg:grid-cols-[13fr_7fr]"
            style={{
              gap: 'var(--action-columns-gap)',
              marginTop: 'var(--section-gap)',
            }}
          >
            <div className="min-w-0">
              <h2
                id={headingId}
                className="max-w-[var(--english-ai-heading-max-w)] font-heading font-medium uppercase leading-none text-black"
                style={{ fontSize: 'var(--section-text-heading)' }}
                data-node-id="1060:2325"
              >
                {isTheEdge ? (
                  <>
                    Real{' '}
                    <span
                      className="inline-flex items-center bg-zene-cyan"
                      style={{
                        minHeight: 'var(--english-ai-highlight-h)',
                        paddingLeft: 'var(--english-ai-highlight-pad-x)',
                        paddingRight: 'var(--english-ai-highlight-pad-x)',
                      }}
                    >
                      students.
                    </span>{' '}
                    Real progress.
                  </>
                ) : (
                  <>
                    One session.{' '}
                    <span
                      className={isCustomProgram ? 'inline-flex items-center bg-zene-cyan' : 'inline-block bg-[#78F3FA]'}
                      style={{
                        minHeight: 'var(--english-ai-highlight-h)',
                        paddingLeft: 'var(--english-ai-highlight-pad-x)',
                        paddingRight: 'var(--english-ai-highlight-pad-x)',
                      }}
                      data-node-id="1060:2324"
                    >
                      One student.
                    </span>{' '}
                    Every skill measured.
                  </>
                )}
              </h2>

              <p
                className={cn(
                  'font-body font-normal leading-normal text-black',
                  isCustomProgram ? 'normal-case' : 'capitalize',
                )}
                style={{
                  fontSize: 'var(--section-text-body)',
                  fontVariationSettings: "'opsz' 14",
                  maxWidth: 'var(--english-ai-action-subtitle-max-w)',
                  marginTop: 'var(--english-ai-action-heading-to-subtitle)',
                }}
                data-node-id="1060:2218"
              >
                {isTheEdge
                  ? 'Trusted by Georgetown University, Alliance College-Ready Public Schools, and 100+ institutions worldwide.'
                  : isCodeMonkey
                    ? 'Watch a 40-minute Zene session end to end. Speaking, comprehension, writing — all in one flow.'
                    : 'Watch a real Zene session — start to finish. The speaking exercise, the AI feedback, and the teacher report it generates.'}
              </p>

              <div
                className="w-full overflow-hidden bg-[#d9d9d9] shadow-[0_0_6px_rgba(0,0,0,0.25)]"
                style={{
                  height: 'var(--english-ai-action-demo-h)',
                  marginTop: 'var(--action-heading-to-demo)',
                  borderRadius: 'var(--action-demo-radius)',
                }}
                data-node-id="1060:2326"
              >
                <video
                  src={DEMO_VIDEO}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="size-full object-cover"
                  aria-label="Zene English AI session demo"
                />
              </div>
            </div>

            <div
              className="flex min-w-0 flex-col"
              style={{ gap: 'var(--action-feature-gap)' }}
            >
              {features.map(feature => (
                <ActionFeature key={feature.titleNodeId} {...feature} normalCaseBody={isCustomProgram} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
