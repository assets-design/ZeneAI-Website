import platformMockup from '@/assets/figma/english-ai/platform-mockup.png'
import codeMonkeyPlatformMockup from '@/data/codemonkey-devices-desktop 1.png'
import { cn } from '@/lib/utils'
import type { ProgramVariant } from '@/types/program'

type EnglishAiPlatformSectionProps = {
  variant?: ProgramVariant
}

export function EnglishAiPlatformSection({ variant = 'english-ai' }: EnglishAiPlatformSectionProps) {
  const isCodeMonkey = variant === 'code-monkey'
  const isTheEdge = variant === 'the-edge'
  const headingId = isCodeMonkey
    ? 'code-monkey-platform-heading'
    : isTheEdge
      ? 'the-edge-platform-heading'
      : 'english-ai-platform-heading'
  return (
    <section
      className={cn(
        'w-full px-[5px] pt-[5px]',
        (variant === 'english-ai' || isCodeMonkey) && 'program-platform--english-ai',
      )}
      aria-labelledby={headingId}
      data-node-id="1060:2195"
    >
      <div
        className="relative mx-auto w-full overflow-hidden section-card-shell bg-white"
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
            className="section-eyebrow font-body uppercase text-black"
            style={{
              fontSize: 'var(--section-text-eyebrow)',
              fontVariationSettings: "'opsz' 14",
            }}
            data-node-id="1060:2226"
          >
            {isTheEdge ? 'Platform Intro' : isCodeMonkey ? 'The Platform' : 'The AI English Speaking Lab'}          </p>

          <div
            className="english-ai-platform-grid grid min-w-0 items-start gap-y-[var(--english-ai-platform-row-gap)] lg:grid-cols-[minmax(0,688px)_1fr] lg:gap-x-[var(--english-ai-platform-columns-gap)]"
            style={{ marginTop: 'var(--english-ai-platform-eyebrow-to-content)' }}
          >
            <div className="english-ai-platform-copy min-w-0 lg:col-start-1 lg:row-start-1">
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
                ) : (
                  <>
                    <span className="block whitespace-nowrap">One platform. Every</span>
                    <span className="block whitespace-nowrap">
                      English{' '}
                      <span
                        className="inline-flex items-center bg-zene-cyan"
                        style={{
                          minHeight: 'var(--english-ai-highlight-h)',
                          paddingLeft: 'var(--english-ai-highlight-pad-x)',
                          paddingRight: 'var(--english-ai-highlight-pad-x)',
                        }}
                        data-node-id="1060:2223"
                      >
                        skill covered.
                      </span>
                    </span>
                  </>
                )}
              </h2>

              <p
                className={cn(
                  'font-body font-normal leading-normal text-black',
                  isTheEdge ? 'normal-case' : 'capitalize',
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
                  ? 'The only platform that tracks and measures leadership development in real-time. Students build a verifiable portfolio of growth that goes beyond grades.'
                  : isCodeMonkey
                  ? 'Speaking, listening, reading, writing, grammar, vocabulary. Zene runs the individual practice — your teacher runs the class.'
                  : 'Speaking, listening, reading, writing, vocabulary, grammar, and pronunciation — all in one place. Personalised paths are assigned based on current ability. Progress is visible in real time for students, teachers, and parents.'}
              </p>
            </div>

            <p
              className={cn(
                'english-ai-platform-tagline font-heading font-normal leading-normal text-black lg:col-start-1 lg:row-start-2',
                isTheEdge ? 'normal-case' : 'capitalize',
              )}
              style={{
                fontSize: 'var(--english-ai-platform-tagline-size)',
                maxWidth: isTheEdge ? 'none' : 'var(--english-ai-platform-tagline-max-w)',
              }}
              data-node-id="1060:2213"
            >
              {isTheEdge ? (
                <>
                  <span className="block whitespace-nowrap max-md:whitespace-normal">
                    Skills development,
                  </span>
                  <span className="block whitespace-nowrap max-md:whitespace-normal">
                    tracked from A to Z.
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
              className="english-ai-platform-mockup relative mx-auto min-w-0 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:justify-self-end"
              style={{
                width: 'var(--english-ai-platform-mockup-w)',
                maxWidth: '100%',
                height: 'var(--english-ai-platform-mockup-h)',
              }}
              data-node-id="1060:2212"
            >
              <img
                src={isCodeMonkey ? codeMonkeyPlatformMockup : platformMockup}
                alt={
                  isCodeMonkey
                    ? 'CodeMonkey on laptop, tablet, and mobile'
                    : 'Zene English AI platform on desktop, tablet, and mobile'
                }
                className="size-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
