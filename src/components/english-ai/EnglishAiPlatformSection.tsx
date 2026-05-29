import platformMockup from '@/assets/figma/english-ai/platform-mockup.png'
import { cn } from '@/lib/utils'
import type { ProgramVariant } from '@/types/program'
import { isCustomProgramVariant } from '@/types/program'

type EnglishAiPlatformSectionProps = {
  variant?: ProgramVariant
}

export function EnglishAiPlatformSection({ variant = 'english-ai' }: EnglishAiPlatformSectionProps) {
  const isCodeMonkey = variant === 'code-monkey'
  const isTheEdge = variant === 'the-edge'
  const isCustomProgram = isCustomProgramVariant(variant)
  const headingId = isCodeMonkey
    ? 'code-monkey-platform-heading'
    : isTheEdge
      ? 'the-edge-platform-heading'
      : 'english-ai-platform-heading'
  return (
    <section
      className={cn('w-full px-[5px] pt-[5px]', isCustomProgram && 'program-platform--code-monkey')}      aria-labelledby={headingId}
      data-node-id="1060:2195"
    >
      <div
        className="relative mx-auto w-full overflow-hidden rounded-[var(--section-card-radius)] bg-white"
        style={{ maxWidth: 'var(--section-card-max-w)' }}
      >
        <div
          style={{
            paddingLeft: 'var(--section-padding-x)',
            paddingRight: 'var(--section-padding-x)',
            paddingTop: 'var(--english-ai-platform-padding-top)',
            paddingBottom: 'var(--english-ai-platform-padding-bottom)',
          }}
        >
          <p
            className={cn('font-body text-black', !isCustomProgram && 'uppercase')}            style={{
              fontSize: 'var(--section-text-eyebrow)',
              fontVariationSettings: "'opsz' 14",
            }}
            data-node-id="1060:2226"
          >
            {isTheEdge ? 'Platform Intro' : isCodeMonkey ? 'The Platform' : 'The AI English Speaking Lab'}          </p>

          <div
            className="grid min-w-0 items-start gap-y-[var(--english-ai-platform-row-gap)] lg:grid-cols-[minmax(0,688px)_1fr] lg:gap-x-[var(--english-ai-platform-columns-gap)]"
            style={{ marginTop: 'var(--english-ai-platform-eyebrow-to-content)' }}
          >
            <div className="min-w-0 lg:col-start-1 lg:row-start-1">
              <h2
                id={headingId}
                className="section-heading max-w-[var(--english-ai-heading-max-w)] font-heading font-medium uppercase text-black"
                style={{ fontSize: 'var(--section-text-heading)' }}
                data-node-id="1060:2224"
              >
                {isTheEdge ? (
                  <>
                    <span className="block whitespace-nowrap">One platform. Every</span>
                    <span className="block whitespace-nowrap">
                      <span
                        className="inline-flex items-center bg-zene-cyan"
                        style={{
                          minHeight: 'var(--english-ai-highlight-h)',
                          paddingLeft: 'var(--english-ai-highlight-pad-x)',
                          paddingRight: 'var(--english-ai-highlight-pad-x)',
                        }}
                      >
                        leadership skill
                      </span>{' '}
                      measured.
                    </span>
                  </>
                ) : isCodeMonkey ? (                  <>
                    <span className="block whitespace-nowrap">One platform. Every</span>
                    <span className="block whitespace-nowrap">
                      <span
                        className="inline-flex items-center bg-zene-cyan"
                        style={{
                          minHeight: 'var(--english-ai-highlight-h)',
                          paddingLeft: 'var(--english-ai-highlight-pad-x)',
                          paddingRight: 'var(--english-ai-highlight-pad-x)',
                        }}
                      >
                        English skill
                      </span>{' '}
                      covered.
                    </span>
                  </>
                ) : (
                  <>
                    One platform. Every{' '}
                    <span
                      className="inline-block bg-[#78F3FA]"
                      style={{
                        minHeight: 'var(--english-ai-highlight-h)',
                        paddingLeft: 'var(--english-ai-highlight-pad-x)',
                        paddingRight: 'var(--english-ai-highlight-pad-x)',
                      }}
                      data-node-id="1060:2223"
                    >
                      English skill covered.
                    </span>
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
                  maxWidth: 'var(--english-ai-platform-body-max-w)',
                  marginTop: 'var(--english-ai-platform-heading-to-body)',
                }}
                data-node-id="1060:2214"
              >
                {isTheEdge
                  ? 'Communication, resilience, financial literacy, entrepreneurship, and active citizenship — one structured programme from middle school to graduation. A leadership profile report is generated after every module. Non-academic growth is measured with the same rigour as academic performance.'
                  : isCodeMonkey
                  ? 'Speaking, listening, reading, writing, grammar, vocabulary. Zene runs the individual practice — your teacher runs the class.'
                  : 'Speaking, listening, reading, writing, vocabulary, grammar, and pronunciation — all in one place. Personalised paths are assigned based on current ability. Progress is visible in real time for students, teachers, and parents.'}
              </p>
            </div>

            <p
              className={cn(
                'font-heading font-normal leading-normal text-black lg:col-start-1 lg:row-start-2',
                isCustomProgram ? 'normal-case' : 'capitalize',
              )}
              style={{
                fontSize: isCustomProgram
                  ? 'var(--code-monkey-platform-tagline-size)'
                  : 'var(--english-ai-platform-tagline-size)',
                maxWidth: isCustomProgram ? 'none' : 'var(--english-ai-platform-tagline-max-w)',
              }}
              data-node-id="1060:2213"
            >
              {isTheEdge ? (
                <>
                  <span className="block whitespace-nowrap max-md:whitespace-normal">
                    Built to develop leaders.
                  </span>
                  <span className="block whitespace-nowrap max-md:whitespace-normal">
                    Designed to prove it with data.
                  </span>
                </>
              ) : isCodeMonkey ? (                <>
                  <span className="block whitespace-nowrap max-md:whitespace-normal">
                    Built for your board, framework, and textbook.
                  </span>
                  <span className="block whitespace-nowrap max-md:whitespace-normal">
                    Runs on the devices your school already has.
                  </span>
                </>
              ) : (
                'Built to be used daily. Designed to be loved by students.'
              )}
            </p>

            <div
              className="relative mx-auto min-w-0 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:justify-self-end"
              style={{
                width: 'var(--english-ai-platform-mockup-w)',
                maxWidth: '100%',
                height: 'var(--english-ai-platform-mockup-h)',
              }}
              data-node-id="1060:2212"
            >
              <img
                src={platformMockup}
                alt="Zene English AI platform on desktop, tablet, and mobile"
                className="size-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
