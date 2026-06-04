import { cn } from '@/lib/utils'

const ROWS = [
  {
    role: 'Student',
    roleNodeId: '1060:2311',
    without:
      '~3–5 minutes of individual speaking time per English period if called on.',
    withoutNodeId: '1060:2309',
    with: '40+ minutes of individual speaking practice every week, every student.',
    withNodeId: '1060:2310',
  },
  {
    role: 'Teacher',
    roleNodeId: '1060:2314',
    without:
      'Cannot individually grade speaking, pronunciation, or comprehension for 30 students in 40 minutes.',
    withoutNodeId: '1060:2312',
    with: 'Sees skill-level data for every student, updated daily. Knows exactly who needs intervention.',
    withNodeId: '1060:2313',
  },
  {
    role: 'Principal',
    roleNodeId: '1060:2317',
    without:
      'No measurable data on student English speaking ability — only term-end written exam scores.',
    withoutNodeId: '1060:2315',
    with: 'Class-level CEFR heatmaps and a board-ready term report — generated automatically.',
    withNodeId: '1060:2316',
  },
] as const

const CODE_MONKEY_ROWS = [
  {
    role: 'Student',
    roleNodeId: '1060:2311',
    without: 'English class is grammar drills and textbook reading. They rarely speak.',
    withoutNodeId: '1060:2309',
    with: 'Daily live speaking practice. Every skill measured. Visible progress every week.',
    withNodeId: '1060:2310',
  },
  {
    role: 'Teacher',
    roleNodeId: '1060:2314',
    without: '30+ students, no way to hear each one speak or grade every essay.',
    withoutNodeId: '1060:2312',
    with: 'AI handles individual practice. Teacher dashboard surfaces who needs help, on what.',
    withNodeId: '1060:2313',
  },
  {
    role: 'Principal',
    roleNodeId: '1060:2317',
    without: 'English outcomes are anecdotal. No data to share with parents or the board.',
    withoutNodeId: '1060:2315',
    with: 'A measurable English program with per-student reports. Board-defensible outcomes.',
    withNodeId: '1060:2316',
  },
] as const

const THE_EDGE_ROWS = [
  {
    role: 'Student',
    roleNodeId: '1060:2311',
    without: 'Vague sense of skills. Hard to prove growth.',
    withoutNodeId: '1060:2309',
    with: 'Verifiable portfolio. Clear career path.',
    withNodeId: '1060:2310',
  },
  {
    role: 'Teacher',
    roleNodeId: '1060:2314',
    without: 'Subjective grading. High administrative burden.',
    withoutNodeId: '1060:2312',
    with: 'Data-backed insights. Automated tracking.',
    withNodeId: '1060:2313',
  },
  {
    role: 'Principal',
    roleNodeId: '1060:2317',
    without: 'Limited visibility into student outcomes.',
    withoutNodeId: '1060:2315',
    with: 'Comprehensive dashboard of school-wide growth.',
    withNodeId: '1060:2316',
  },
] as const

type ComparisonRow = (typeof ROWS)[number]

function ComparisonMobileCard({
  role,
  roleNodeId,
  without,
  withoutNodeId,
  with: withZene,
  withNodeId,
  normalCaseBody = false,
  withoutLabel = 'Without Zene',
  withLabel = 'With Zene',
}: ComparisonRow & {
  normalCaseBody?: boolean
  withoutLabel?: string
  withLabel?: string
}) {
  return (
    <article
      className="overflow-hidden rounded-[var(--english-ai-comparison-table-radius)] border border-black/10"
      data-node-id={roleNodeId}
    >
      <div
        className="bg-[#177EC0] font-heading font-medium uppercase leading-none text-white"
        style={{
          fontSize: 'var(--section-text-body)',
          paddingLeft: 'var(--english-ai-comparison-cell-px)',
          paddingRight: 'var(--english-ai-comparison-cell-px)',
          paddingTop: 'var(--english-ai-comparison-mobile-label-py)',
          paddingBottom: 'var(--english-ai-comparison-mobile-label-py)',
        }}
      >
        {role}
      </div>
      <div
        style={{
          paddingLeft: 'var(--english-ai-comparison-cell-px)',
          paddingRight: 'var(--english-ai-comparison-cell-px)',
          paddingTop: 'var(--english-ai-comparison-mobile-body-py)',
          paddingBottom: 'var(--english-ai-comparison-mobile-body-py)',
        }}
      >
        <p
          className="mb-0 font-heading font-medium uppercase leading-none text-black"
          style={{ fontSize: 'var(--english-ai-comparison-mobile-label-size)' }}
        >
          {withoutLabel}
        </p>
        <p
          className={cn(
            'english-ai-comparison-mobile-body mb-0 font-body font-normal leading-normal text-black',
            normalCaseBody ? 'normal-case' : 'capitalize',
          )}
          style={{
            fontSize: 'var(--english-ai-comparison-mobile-body-size, var(--section-text-body))',
            fontVariationSettings: "'opsz' 14",
            marginTop: 'var(--english-ai-comparison-mobile-text-gap)',
          }}
          data-node-id={withoutNodeId}
        >
          {without}
        </p>
        <p
          className="mb-0 font-heading font-medium uppercase leading-none text-black"
          style={{
            fontSize: 'var(--english-ai-comparison-mobile-label-size)',
            marginTop: 'var(--english-ai-comparison-mobile-block-gap)',
          }}
        >
          {withLabel}
        </p>
        <p
          className={cn(
            'english-ai-comparison-mobile-body mb-0 font-body font-normal leading-normal text-black',
            normalCaseBody ? 'normal-case' : 'capitalize',
          )}
          style={{
            fontSize: 'var(--english-ai-comparison-mobile-body-size, var(--section-text-body))',
            fontVariationSettings: "'opsz' 14",
            marginTop: 'var(--english-ai-comparison-mobile-text-gap)',
          }}
          data-node-id={withNodeId}
        >
          {withZene}
        </p>
      </div>
    </article>
  )
}

import type { ProgramVariant } from '@/types/program'
import { isCustomProgramVariant } from '@/types/program'

type EnglishAiComparisonSectionProps = {
  variant?: ProgramVariant
}

export function EnglishAiComparisonSection({ variant = 'english-ai' }: EnglishAiComparisonSectionProps) {
  const isCodeMonkey = variant === 'code-monkey'
  const isTheEdge = variant === 'the-edge'
  const isCustomProgram = isCustomProgramVariant(variant)
  const rows = isTheEdge ? THE_EDGE_ROWS : isCodeMonkey ? CODE_MONKEY_ROWS : ROWS
  const headingId = isTheEdge
    ? 'the-edge-comparison-heading'
    : isCodeMonkey
      ? 'code-monkey-comparison-heading'
      : 'english-ai-comparison-heading'
  const withoutLabel = isTheEdge ? 'Without The Edge' : 'Without Zene'
  const withLabel = isTheEdge ? 'With The Edge' : 'With Zene'

  const highlightStyle = {
    minHeight: 'var(--english-ai-highlight-h)',
    paddingLeft: 'var(--english-ai-highlight-pad-x)',
    paddingRight: 'var(--english-ai-highlight-pad-x)',
  } as const

  return (
    <section
      className="w-full px-[5px] pt-[5px]"
      aria-labelledby={headingId}
      data-node-id="1060:2198"
    >
      <div
        className="relative mx-auto w-full overflow-hidden section-card-shell bg-white"
        style={{ maxWidth: 'var(--section-card-max-w)' }}
      >
        <div
          style={{
            paddingLeft: 'var(--section-padding-x)',
            paddingRight: 'var(--section-padding-x)',
            paddingTop: 'var(--english-ai-comparison-padding-top)',
            paddingBottom: 'var(--english-ai-comparison-padding-bottom)',
          }}
        >
          <p
            className="section-eyebrow font-body uppercase text-black"
            style={{
              fontSize: 'var(--section-text-eyebrow)',
              fontVariationSettings: "'opsz' 14",
            }}
            data-node-id="1060:2241"
          >
            {isTheEdge ? 'The difference, side by side' : isCustomProgram ? 'The Difference' : 'The difference, side by side'}
          </p>

          <h2
            id={headingId}
            className="max-w-[var(--english-ai-heading-max-w)] font-heading font-medium uppercase leading-none text-black"
            style={{
              fontSize: 'var(--section-text-heading)',
              marginTop: 'var(--english-ai-comparison-eyebrow-to-heading)',
            }}
            data-node-id="1060:2306"
          >
            {isCodeMonkey ? (
              'Without Zene. With Zene.'
            ) : isTheEdge ? (
              <span className="block max-lg:whitespace-normal lg:whitespace-nowrap">
                What your{' '}
                <span className="inline-flex items-center bg-zene-cyan" style={highlightStyle}>
                  school looks like,
                </span>{' '}
                with and without The Edge.
              </span>
            ) : (
              <span className="block max-lg:whitespace-normal lg:whitespace-nowrap">
                What your{' '}
                <span
                  className="inline-flex items-center bg-zene-cyan"
                  style={highlightStyle}
                  data-node-id="1060:2305"
                >
                  school looks like,
                </span>{' '}
                with and without Zene.
              </span>
            )}
          </h2>

          {isCodeMonkey ? null : isTheEdge || !isCustomProgram ? (
            <p
              className={cn(
                'english-ai-comparison-subtitle font-body font-normal leading-normal text-black max-lg:whitespace-normal lg:whitespace-nowrap',
                isTheEdge || isCustomProgram ? 'normal-case' : 'capitalize',
              )}
              style={{
                fontSize: 'var(--section-text-body)',
                fontVariationSettings: "'opsz' 14",
                maxWidth: isTheEdge ? 'var(--english-ai-comparison-subtitle-max-w)' : undefined,
                marginTop: 'var(--english-ai-comparison-heading-to-subtitle)',
              }}
              data-node-id="1060:2217"
            >
              {isTheEdge ? (
                <span className="block max-lg:whitespace-normal lg:whitespace-nowrap">
                  Three perspectives. One clear shift.
                </span>
              ) : (
                <span className="block max-lg:whitespace-normal lg:whitespace-nowrap">
                  Three perspectives. Three everyday realities. One clear shift.
                </span>
              )}
            </p>
          ) : null}

          <div
            className="flex flex-col md:hidden"
            style={{
              gap: 'var(--english-ai-comparison-mobile-card-gap)',
              marginTop: isCodeMonkey
                ? 'var(--english-ai-comparison-heading-to-subtitle)'
                : isTheEdge || !isCustomProgram
                  ? 'var(--english-ai-comparison-subtitle-to-table)'
                  : 'var(--english-ai-comparison-heading-to-subtitle)',
            }}
          >
            {rows.map(row => (
              <ComparisonMobileCard
                key={row.role}
                {...row}
                normalCaseBody={isCustomProgram}
                withoutLabel={withoutLabel}
                withLabel={withLabel}
              />
            ))}
          </div>

          <div
            className="hidden overflow-x-auto md:block"
            style={{
              marginTop: isCodeMonkey
                ? 'var(--english-ai-comparison-heading-to-subtitle)'
                : isTheEdge || !isCustomProgram
                  ? 'var(--english-ai-comparison-subtitle-to-table)'
                  : 'var(--english-ai-comparison-heading-to-subtitle)',
            }}
          >
            <div
              className="min-w-[var(--english-ai-comparison-table-min-w)] overflow-hidden rounded-[var(--english-ai-comparison-table-radius)] border border-black/10"
              data-node-id="1060:2320"
            >
              <div
                className="grid grid-cols-[var(--english-ai-comparison-role-col)_1fr_1fr] bg-[#177EC0]"
                style={{
                  minHeight: 'var(--english-ai-comparison-header-h)',
                  paddingLeft: 'var(--english-ai-comparison-cell-px)',
                  paddingRight: 'var(--english-ai-comparison-cell-px)',
                }}
                data-node-id="1060:2307"
              >
                <p
                  className="flex items-center font-heading font-medium uppercase leading-none text-white"
                  style={{ fontSize: 'var(--section-text-body)' }}
                  data-node-id="1060:2308"
                >
                  Perspective
                </p>
                <p
                  className="flex items-center font-heading font-medium uppercase leading-none text-white"
                  style={{ fontSize: 'var(--section-text-body)' }}
                  data-node-id="1060:2318"
                >
                  {withoutLabel}
                </p>
                <p
                  className="flex items-center font-heading font-medium uppercase leading-none text-white"
                  style={{
                    fontSize: 'var(--section-text-body)',
                    marginRight: 'calc(-1 * var(--english-ai-comparison-cell-px))',
                    paddingLeft: 'var(--english-ai-comparison-cell-px)',
                    paddingRight: 'var(--english-ai-comparison-cell-px)',
                  }}
                  data-node-id="1060:2319"
                >
                  {withLabel}
                </p>
              </div>

              {rows.map(row => (
                <div
                  key={row.role}
                  className="grid grid-cols-[var(--english-ai-comparison-role-col)_1fr_1fr] border-t border-black/10"
                  style={{
                    paddingTop: 'var(--english-ai-comparison-row-py)',
                    paddingBottom: 'var(--english-ai-comparison-row-py)',
                    paddingLeft: 'var(--english-ai-comparison-cell-px)',
                    paddingRight: 'var(--english-ai-comparison-cell-px)',
                  }}
                >
                  <p
                    className="font-heading font-medium uppercase leading-none text-black"
                    style={{ fontSize: 'var(--section-text-body)' }}
                    data-node-id={row.roleNodeId}
                  >
                    {row.role}
                  </p>
                  <p
                    className={cn(
                      'font-body font-normal leading-normal text-black',
                      isCustomProgram ? 'normal-case' : 'capitalize',
                    )}
                    style={{
                      fontSize: 'var(--section-text-body)',
                      fontVariationSettings: "'opsz' 14",
                      paddingRight: 'var(--english-ai-comparison-col-gap)',
                    }}
                    data-node-id={row.withoutNodeId}
                  >
                    {row.without}
                  </p>
                  <p
                    className={cn(
                      'font-body font-normal leading-normal text-black',
                      isCustomProgram ? 'normal-case' : 'capitalize',
                    )}
                    style={{
                      fontSize: 'var(--section-text-body)',
                      fontVariationSettings: "'opsz' 14",
                      marginRight: 'calc(-1 * var(--english-ai-comparison-cell-px))',
                      paddingLeft: 'var(--english-ai-comparison-cell-px)',
                      paddingRight: 'var(--english-ai-comparison-cell-px)',
                    }}
                    data-node-id={row.withNodeId}
                  >
                    {row.with}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {!isCodeMonkey && !isTheEdge ? (
            <p
              className="text-left font-heading font-medium uppercase leading-none text-black"
              style={{
                fontSize: 'var(--section-text-body)',
                marginTop: 'var(--english-ai-comparison-table-to-footer)',
              }}
            >
              Your English program does not change. Your school&apos;s ability to measure it does.
            </p>
          ) : isTheEdge ? (
            <p
              className="normal-case font-body font-normal leading-normal text-black"
              style={{
                fontSize: 'var(--section-text-body)',
                fontVariationSettings: "'opsz' 14",
                maxWidth: 'var(--english-ai-comparison-subtitle-max-w)',
                marginTop: 'var(--english-ai-comparison-table-to-footer)',
              }}
            >
              Life skills stop being a slogan. They become a transcript.
            </p>
          ) : null}
        </div>
      </div>
    </section>
  )
}
