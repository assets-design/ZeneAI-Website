import platformMockup from '@/assets/figma/english-ai/platform-mockup.png'
import codeMonkeyPlatformMockup from '@/data/codemonkey-devices-desktop 1.png'
import { cn } from '@/lib/utils'
import type { ProgramVariant } from '@/types/program'

type EnglishAiPlatformSectionProps = {
  variant?: ProgramVariant
}

export function EnglishAiPlatformSection({ variant = 'english-ai' }: EnglishAiPlatformSectionProps) {
  const isEnglishAi = variant === 'english-ai'
  const isCodeMonkey = variant === 'code-monkey'
  const isTheEdge = variant === 'the-edge'
  const usesRefinedPlatformLayout = isEnglishAi || isCodeMonkey
  const headingId = isCodeMonkey
    ? 'code-monkey-platform-heading'
    : isTheEdge
      ? 'the-edge-platform-heading'
      : 'english-ai-platform-heading'

  const tagline = isTheEdge ? (
    <>
      <span className="block whitespace-nowrap max-md:whitespace-normal">Skills development,</span>
      <span className="block whitespace-nowrap max-md:whitespace-normal">
        tracked from A to Z.
      </span>
    </>
  ) : isCodeMonkey ? (
    <>
      <span className="block whitespace-nowrap max-md:whitespace-normal">
        Built for your board, framework, and textbook.
      </span>
      <span className="block whitespace-nowrap max-md:whitespace-normal">
        Runs on the devices your school already has.
      </span>
    </>
  ) : (
    'Built to be used daily. Designed to be loved by students.'
  )

  const taglineClassName = cn(
    'english-ai-platform-tagline font-heading font-normal leading-normal text-black',
    isTheEdge ? 'normal-case' : 'capitalize',
  )

  const taglineStyle = {
    fontSize: 'var(--english-ai-platform-tagline-size)',
    maxWidth: isTheEdge ? undefined : 'var(--english-ai-platform-tagline-max-w)',
    marginTop: usesRefinedPlatformLayout ? 'var(--about-why-body-to-tagline)' : undefined,
  } as const

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
            className={cn(
              'english-ai-platform-grid grid min-w-0',
              usesRefinedPlatformLayout
                ? 'items-center gap-x-[var(--english-ai-platform-columns-gap)] gap-y-[var(--about-why-row-gap)] sm:grid-cols-[minmax(0,688px)_1fr]'
                : 'items-start gap-y-[var(--english-ai-platform-row-gap)] lg:grid-cols-[minmax(0,688px)_1fr] lg:gap-x-[var(--english-ai-platform-columns-gap)]',
            )}
            style={{ marginTop: 'var(--english-ai-platform-eyebrow-to-content)' }}
          >
            <div
              className={cn(
                'english-ai-platform-copy flex min-w-0 flex-col justify-center',
                !usesRefinedPlatformLayout && 'lg:col-start-1 lg:row-start-1',
              )}
            >
              <h2
                id={headingId}
                className="section-heading max-w-[var(--english-ai-heading-max-w)] font-heading font-medium uppercase text-black"
                style={{ fontSize: 'var(--section-text-heading)' }}
                data-node-id="1060:2224"
              >
                {isTheEdge ? (
                  <>
                    <span className="whitespace-nowrap">One platform. Every</span>
                    <br />
                    <span className="whitespace-nowrap">
                      <span
                        className="heading-highlight"
                      >
                        leadership skill
                      </span>{' '}
                      measured.
                    </span>
                  </>
                ) : (
                  <>
                    <span className="whitespace-nowrap">One platform. Every</span>
                    <br />
                    <span className="whitespace-nowrap">
                      English{' '}
                      <span
                        className="heading-highlight"
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

              {usesRefinedPlatformLayout ? (
                <p
                  className={taglineClassName}
                  style={taglineStyle}
                  data-node-id="1060:2213"
                >
                  {tagline}
                </p>
              ) : null}
            </div>

            {!usesRefinedPlatformLayout ? (
              <p
                className={cn(
                  taglineClassName,
                  'lg:col-start-1 lg:row-start-2',
                )}
                style={taglineStyle}
                data-node-id="1060:2213"
              >
                {tagline}
              </p>
            ) : null}

            <div
              className={cn(
                'english-ai-platform-mockup min-w-0',
                usesRefinedPlatformLayout
                  ? 'w-full'
                  : 'relative mx-auto lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:justify-self-end',
              )}
              style={
                usesRefinedPlatformLayout
                  ? undefined
                  : {
                      width: 'var(--english-ai-platform-mockup-w)',
                      maxWidth: '100%',
                      height: 'var(--english-ai-platform-mockup-h)',
                    }
              }
              data-node-id="1060:2212"
            >
              <img
                src={isCodeMonkey ? codeMonkeyPlatformMockup : platformMockup}
                alt={
                  isCodeMonkey
                    ? 'CodeMonkey on laptop, tablet, and mobile'
                    : 'Zene English AI platform on desktop, tablet, and mobile'
                }
                className={
                  usesRefinedPlatformLayout ? 'block h-auto w-full' : 'size-full object-contain'
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
