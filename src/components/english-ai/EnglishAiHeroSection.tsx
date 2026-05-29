import heroRobot from '@/assets/figma/english-ai/hero-robot.png'
import heroStudents from '@/assets/figma/english-ai/hero-students.png'
import { ApplyNowButton } from '@/components/ApplyNowButton/ApplyNowButton'
import { cn } from '@/lib/utils'

import type { ProgramVariant } from '@/types/program'
import { isCustomProgramVariant } from '@/types/program'

type EnglishAiHeroSectionProps = {
  variant?: ProgramVariant
}

function CodeMonkeyHeroIllustration() {
  return (
    <div
      className="relative mx-auto w-full max-w-full shrink-0"
      style={{
        width: 'var(--english-ai-hero-illustration-w)',
        height: 'var(--english-ai-hero-illustration-h)',
        marginTop: 'var(--code-monkey-hero-illustration-margin-top)',
      }}
      data-node-id="1060:2209"
    >
      <img
        src={heroStudents}
        alt="Students learning with Zene AI Code Monkey"
        className="absolute inset-0 size-full object-contain"
        data-node-id="1060:2211"
      />
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden"
        style={{
          width: 'var(--english-ai-hero-robot-wrap-w)',
          height: 'var(--english-ai-hero-robot-wrap-h)',
        }}
        data-node-id="1060:2210"
      >
        <img
          src={heroRobot}
          alt=""
          aria-hidden
          className="absolute max-w-none object-cover"
          style={{
            width: 'var(--english-ai-hero-robot-scale-w)',
            height: 'var(--english-ai-hero-robot-scale-h)',
            left: 'var(--english-ai-hero-robot-offset-x)',
            top: 'var(--english-ai-hero-robot-offset-y)',
          }}
        />
      </div>
    </div>
  )
}

export function EnglishAiHeroSection({ variant = 'english-ai' }: EnglishAiHeroSectionProps) {
  const isCodeMonkey = variant === 'code-monkey'
  const isTheEdge = variant === 'the-edge'
  const isCustomProgram = isCustomProgramVariant(variant)
  const headingId = isCodeMonkey
    ? 'code-monkey-hero-heading'
    : isTheEdge
      ? 'the-edge-hero-heading'
      : 'english-ai-hero-heading'

  const headingContent = isTheEdge ? (
    <>
      <span className="block">Every student leaves with</span>
      <span className="block">
        <span
          className="inline-flex items-center bg-zene-cyan"
          style={{
            minHeight: 'var(--english-ai-highlight-h)',
            paddingLeft: 'var(--english-ai-highlight-pad-x)',
            paddingRight: 'var(--english-ai-highlight-pad-x)',
          }}
        >
          documented proof
        </span>
      </span>
      <span className="block">of who they are becoming.</span>
    </>
  ) : isCodeMonkey ? (
    <>
      <span className="block whitespace-nowrap">Where every student finds</span>
      <span className="block whitespace-nowrap">
        <span
          className="inline-flex items-center bg-zene-cyan"
          style={{
            minHeight: 'var(--english-ai-highlight-h)',
            paddingLeft: 'var(--english-ai-highlight-pad-x)',
            paddingRight: 'var(--english-ai-highlight-pad-x)',
          }}
        >
          their voice
        </span>{' '}
        in English.
      </span>
    </>
  ) : (
    <>
      <span className="block max-lg:whitespace-normal xl:whitespace-nowrap">
        Where every student finds
      </span>
      <span className="block max-lg:whitespace-normal xl:whitespace-nowrap">
        their voice in English.
      </span>
    </>
  )

  const bodyContent = isTheEdge
    ? 'A research-backed life-readiness program that builds communication, critical thinking, employability, citizenship, and personal development — and gives every student a downloadable leadership profile.'
    : isCodeMonkey
    ? 'Zene.ai is an AI-powered English program built for Indian classrooms. Every student speaks, listens, reads, and writes — every session. Every skill, measured.'
    : 'Cambridge research: it takes 200 hours to move up one CEFR level and most of those hours are passive listening. Zene turns them into active speaking practice, individually graded for every student.'

  return (
    <section
      className={cn('w-full px-[5px] pt-[5px]', isCustomProgram && 'program-hero--code-monkey')}
      aria-labelledby={headingId}
      data-node-id="1060:2194"
    >
      <div
        className="relative mx-auto w-full overflow-hidden rounded-[var(--section-card-radius)] bg-white"
        style={{ maxWidth: 'var(--section-card-max-w)' }}
      >
        <div
          className="relative"
          style={{
            paddingLeft: 'var(--section-padding-x)',
            paddingRight: 'var(--section-padding-x)',
            paddingTop: 'var(--english-ai-hero-padding-top)',
            paddingBottom: 'var(--english-ai-hero-padding-bottom)',
          }}
        >
          {isCustomProgram ? (
            <div
              className="relative z-[1] grid min-w-0 grid-cols-1 items-start gap-x-[var(--english-ai-hero-columns-gap)] gap-y-[var(--english-ai-hero-row-gap)] xl:grid-cols-[60%_40%]"
            >
              <div className="order-2 min-w-0 xl:order-1 xl:pt-[var(--code-monkey-hero-text-offset-top)]">
                <p
                  className="font-body text-black"
                  style={{
                    fontSize: 'var(--code-monkey-hero-eyebrow-size)',
                    fontVariationSettings: "'opsz' 14",
                  }}
                  data-node-id="1060:2225"
                >
                  {isTheEdge ? 'Life-readiness for Grades 6–12' : 'For Schools · Grades 3–10'}
                </p>

                <h1
                  id={headingId}
                  className="section-heading max-w-none font-heading font-medium uppercase text-black"
                  style={{
                    fontSize: 'var(--english-ai-hero-title-size)',
                    marginTop: 'var(--code-monkey-hero-eyebrow-to-heading)',
                  }}
                  data-node-id="1060:2203"
                >
                  {headingContent}
                </h1>

                <p
                  className="normal-case font-body font-normal leading-normal text-black"
                  style={{
                    fontSize: 'var(--code-monkey-hero-body-size)',
                    fontVariationSettings: "'opsz' 14",
                    maxWidth: 'var(--english-ai-hero-body-max-w)',
                    marginTop: 'var(--english-ai-hero-title-to-body)',
                  }}
                  data-node-id="1060:2204"
                >
                  {bodyContent}
                </p>
              </div>

              <div className="order-1 flex w-full min-w-0 flex-col items-end xl:order-2">
                <ApplyNowButton className="max-w-full shrink-0" />
                <CodeMonkeyHeroIllustration />
              </div>
            </div>
          ) : (
            <>
              <div
                className="flex justify-end lg:absolute lg:right-[var(--section-padding-x)] lg:top-[var(--english-ai-hero-padding-top)] lg:z-[3]"
                data-node-id="1060:2233"
              >
                <ApplyNowButton className="max-w-full shrink-0" />
              </div>

              <p
                className="font-body uppercase text-black lg:mt-0 lg:max-w-[calc(100%-var(--apply-btn-w)-24px)]"
                style={{
                  fontSize: 'var(--section-text-eyebrow)',
                  fontVariationSettings: "'opsz' 14",
                  marginTop: 'var(--english-ai-hero-eyebrow-to-apply)',
                }}
                data-node-id="1060:2225"
              >
                The AI English Speaking Lab
              </p>

              <div
                className="relative z-[1] grid min-w-0 grid-cols-1 items-start gap-x-[var(--english-ai-hero-columns-gap)] gap-y-[var(--english-ai-hero-row-gap)] lg:grid-cols-[minmax(0,1fr)_auto]"
                style={{ marginTop: 'var(--english-ai-hero-eyebrow-to-content)' }}
              >
                <div className="min-w-0">
                  <h1
                    id={headingId}
                    className="section-heading font-heading font-medium uppercase text-black"
                    style={{
                      fontSize: 'var(--english-ai-hero-title-size)',
                      maxWidth: 'var(--english-ai-hero-title-max-w)',
                    }}
                    data-node-id="1060:2203"
                  >
                    {headingContent}
                  </h1>

                  <p
                    className="capitalize font-body font-normal leading-normal text-black"
                    style={{
                      fontSize: 'var(--english-ai-hero-body-size)',
                      fontVariationSettings: "'opsz' 14",
                      maxWidth: 'var(--english-ai-hero-body-max-w)',
                      marginTop: 'var(--english-ai-hero-title-to-body)',
                    }}
                    data-node-id="1060:2204"
                  >
                    {bodyContent}
                  </p>
                </div>

                <div
                  className="relative mx-auto w-full max-w-full shrink-0 sm:mt-[var(--english-ai-hero-illustration-margin-top)] lg:mx-0 lg:w-auto"
                  style={{
                    width: 'var(--english-ai-hero-illustration-w)',
                    height: 'var(--english-ai-hero-illustration-h)',
                  }}
                  data-node-id="1060:2209"
                >
                  <img
                    src={heroStudents}
                    alt="Students learning English with Zene AI"
                    className="absolute inset-0 size-full object-contain"
                    data-node-id="1060:2211"
                  />
                  <div
                    className="absolute overflow-hidden"
                    style={{
                      width: 'var(--english-ai-hero-robot-wrap-w)',
                      height: 'var(--english-ai-hero-robot-wrap-h)',
                      left: 'var(--english-ai-hero-robot-left)',
                      top: 'var(--english-ai-hero-robot-top)',
                    }}
                    data-node-id="1060:2210"
                  >
                    <img
                      src={heroRobot}
                      alt=""
                      aria-hidden
                      className="absolute max-w-none object-cover"
                      style={{
                        width: 'var(--english-ai-hero-robot-scale-w)',
                        height: 'var(--english-ai-hero-robot-scale-h)',
                        left: 'var(--english-ai-hero-robot-offset-x)',
                        top: 'var(--english-ai-hero-robot-offset-y)',
                      }}
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
