import { isCustomProgramVariant } from '@/types/program'
import type { ProgramVariant } from '@/types/program'
import { cn } from '@/lib/utils'
import { ENGLISH_AI_TAB_DEMO_VIDEO } from '@/lib/productVideos'

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
    title: 'Entrepreneurship track.',
    body: 'Students build and launch their own ventures with expert guidance.',
    titleNodeId: '1060:2283',
    bodyNodeId: '1060:2284',
  },
  {
    title: 'Internship track.',
    body: 'Real-world placement in professional environments for hands-on learning.',
    titleNodeId: '1060:2292',
    bodyNodeId: '1060:2293',
  },
  {
    title: 'Leadership profile.',
    body: 'Both tracks add a documented project to the student\'s leadership profile.',
    titleNodeId: '1060:2295',
    bodyNodeId: '1060:2296',
  },
] as const

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
      id="see-it-in-action"
      className="w-full px-[5px] pt-[5px]"
      aria-labelledby={headingId}
      data-node-id="1060:2199"
    >
      <div
        className="action-card section-card-shell relative mx-auto flex h-full min-h-0 w-full flex-col overflow-hidden bg-white"
        style={{ maxWidth: 'var(--section-card-max-w)' }}
      >
        <div
          className="action-inner flex min-h-0 flex-1 flex-col"
          style={{
            paddingLeft: 'var(--section-padding-x)',
            paddingRight: 'var(--section-padding-x)',
            paddingTop: 'var(--action-padding-top)',
            paddingBottom: 'var(--action-padding-bottom)',
            gap: 'var(--section-eyebrow-to-heading)',
          }}
        >
          <p
            className="section-eyebrow shrink-0 font-body uppercase text-black"
            style={{
              fontSize: 'var(--section-text-eyebrow)',
              fontVariationSettings: "'opsz' 14",
            }}
            data-node-id="1060:2242"
          >
            {isTheEdge ? 'Beyond the classroom' : isCodeMonkey ? 'Live Demo' : 'See it in action'}
          </p>

          <h2
            id={headingId}
            className={cn(
              'shrink-0 font-heading font-medium uppercase leading-none text-black',
              isTheEdge ? 'max-w-[var(--english-ai-heading-max-w)]' : 'max-w-none xl:whitespace-nowrap',
            )}
            style={{ fontSize: 'var(--section-text-heading)' }}
            data-node-id="1060:2325"
          >
            {isTheEdge ? (
              <>
                Where skills{' '}
                <span
                  className="inline-flex items-center bg-zene-cyan"
                  style={{
                    minHeight: 'var(--english-ai-highlight-h)',
                    paddingLeft: 'var(--english-ai-highlight-pad-x)',
                    paddingRight: 'var(--english-ai-highlight-pad-x)',
                  }}
                >
                  become experience.
                </span>
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

          <div
            className="action-columns grid min-h-0 flex-1 grid-rows-[auto_auto] items-stretch lg:grid-cols-[13fr_7fr]"
            style={{
              columnGap: 'var(--action-columns-gap)',
              rowGap: 'var(--action-columns-row-gap, var(--section-gap))',
            }}
          >
            <p
              className={cn(
                'min-w-0 font-body font-normal leading-normal text-black lg:col-span-2',
                isCustomProgram ? 'normal-case' : 'capitalize',
              )}
              style={{
                fontSize: 'var(--section-text-body)',
                fontVariationSettings: "'opsz' 14",
                maxWidth: 'var(--english-ai-action-subtitle-max-w)',
              }}
              data-node-id="1060:2218"
            >
              {isTheEdge
                ? 'Skills are only real when they\'re applied.'
                : isCodeMonkey
                  ? 'Watch a 40-minute Zene session end to end. Speaking, comprehension, writing — all in one flow.'
                  : 'Watch a real Zene session — start to finish. The speaking exercise, the AI feedback, and the teacher report it generates.'}
            </p>

            <div
              className="action-demo-media min-h-0 w-full self-stretch lg:col-start-1 lg:row-start-2"
              style={{
                minHeight: 'var(--action-demo-h, var(--english-ai-action-demo-h))',
              }}
              data-node-id="1060:2326"
            >
              <div className="action-demo-media-inner size-full overflow-hidden bg-white">
                <video
                  src={ENGLISH_AI_TAB_DEMO_VIDEO}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="size-full object-cover object-center"
                  aria-label="Zene product demo"
                />
              </div>
            </div>

            <div
              className="action-features-col flex min-h-0 min-w-0 flex-col justify-start lg:col-start-2 lg:row-start-2"
              style={{ gap: 'var(--english-ai-action-feature-gap, var(--action-feature-gap))' }}
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
