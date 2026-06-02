import heroRobot from '@/assets/figma/english-ai/hero-robot.png'
import heroStudents from '@/assets/figma/english-ai/hero-students.png'
import theEdgeHeroIllustration from '@/assets/figma/the-edge/hero-illustration.png'
import theEdgeHeroLogoOverlay from '@/assets/figma/the-edge/hero-logo-overlay.png'
import { ApplyNowButton } from '@/components/ApplyNowButton/ApplyNowButton'
import { cn } from '@/lib/utils'

import type { ProgramVariant } from '@/types/program'

type EnglishAiHeroSectionProps = {
  variant?: ProgramVariant
}

function TheEdgeHeroIllustration() {
  return (
    <div
      className="the-edge-hero-illustration relative mx-auto w-full max-w-full shrink-0 bg-transparent lg:mx-0 lg:w-auto"
      style={{
        width: 'var(--english-ai-hero-illustration-w)',
        height: 'var(--english-ai-hero-illustration-h)',
      }}
      data-node-id="1060:2209"
    >
      <img
        src={theEdgeHeroIllustration}
        alt=""
        aria-hidden
        className="absolute inset-0 size-full object-contain object-bottom"
        data-node-id="1100:2107"
      />
      <div
        className="the-edge-hero-logo absolute overflow-hidden"
        style={{
          width: 'var(--the-edge-hero-logo-w)',
          height: 'var(--the-edge-hero-logo-h)',
          left: 'var(--the-edge-hero-logo-left)',
          top: 'var(--the-edge-hero-logo-top)',
        }}
        data-node-id="1100:2154"
      >
        <img
          src={theEdgeHeroLogoOverlay}
          alt="Students collaborating around the Zene leadership platform"
          className="size-full object-contain"
        />
      </div>
    </div>
  )
}

function EnglishAiHeroIllustration() {
  return (
    <div
      className="english-ai-hero-illustration relative mx-auto w-full max-w-full shrink-0 lg:mx-0 lg:w-auto"
      style={{
        width: 'var(--english-ai-hero-illustration-w)',
        height: 'var(--english-ai-hero-illustration-h)',
      }}
      data-node-id="1060:2209"
    >
      <img
        src={heroStudents}
        alt="Students learning English with Zene AI"
        className="absolute inset-0 size-full object-contain object-bottom"
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
  )
}

export function EnglishAiHeroSection({ variant = 'english-ai' }: EnglishAiHeroSectionProps) {
  const isCodeMonkey = variant === 'code-monkey'
  const isTheEdge = variant === 'the-edge'
  const headingId = isCodeMonkey
    ? 'code-monkey-hero-heading'
    : isTheEdge
      ? 'the-edge-hero-heading'
      : 'english-ai-hero-heading'

  const headingContent = isTheEdge ? (
    <>Every student leaves with documented proof of who they are becoming.</>
  ) : isCodeMonkey ? (
    <>
      <span className="block whitespace-nowrap max-xl:whitespace-normal">Where every student finds</span>
      <span className="block whitespace-nowrap max-xl:whitespace-normal">
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

  const eyebrowContent = isTheEdge
    ? 'Life-readiness for Grades 6–12'
    : isCodeMonkey
      ? 'For Schools · Grades 3–10'
      : 'The AI English Speaking Lab'

  return (
    <section
      id={isTheEdge ? 'the-edge-hero' : isCodeMonkey ? 'code-monkey-hero' : 'english-ai-hero'}
      className={cn(
        'w-full px-[5px]',
        (isCodeMonkey || variant === 'english-ai') && 'program-hero--english-ai',
        isCodeMonkey && 'program-hero--code-monkey',
      )}
      aria-labelledby={headingId}
      data-node-id="1060:2194"
    >
      <div
        className="relative mx-auto flex w-full min-h-0 flex-col overflow-hidden section-card-shell bg-white"
        style={{ maxWidth: 'var(--section-card-max-w)' }}
      >
        <div
          className="program-hero-body relative flex min-h-0 flex-1 flex-col"
          style={{
            paddingLeft: 'var(--section-padding-x)',
            paddingRight: 'var(--section-padding-x)',
            paddingTop: 'var(--english-ai-hero-padding-top)',
            paddingBottom: 'var(--english-ai-hero-padding-bottom)',
          }}
        >
          {isTheEdge ? (
            <div
              className="program-hero-inner flex min-h-0 flex-1 flex-col"
              style={{ gap: 'var(--hero-gap)' }}
            >
              <div className="program-hero-top-row flex min-w-0 items-end justify-end">
                <div className="hero-apply-slot shrink-0">
                  <ApplyNowButton className="max-w-full shrink-0" />
                </div>
              </div>

              <div
                className="relative z-[1] grid min-h-0 min-w-0 flex-1 grid-cols-1 items-end gap-x-[var(--english-ai-hero-columns-gap)] gap-y-[var(--english-ai-hero-row-gap)] sm:grid-cols-[minmax(0,1fr)_auto] xl:grid-cols-[60%_40%]"
              >
                <div className="min-w-0 self-center xl:self-auto">
                  <p
                    className="font-body text-black"
                    style={{
                      fontSize: 'var(--section-text-eyebrow)',
                      fontVariationSettings: "'opsz' 14",
                    }}
                    data-node-id="1060:2225"
                  >
                    {eyebrowContent}
                  </p>

                  <h1
                    id={headingId}
                    className="section-heading max-w-none font-heading font-medium uppercase text-black"
                    style={{
                      fontSize: 'var(--english-ai-hero-title-size)',
                      marginTop: 'var(--english-ai-hero-eyebrow-to-heading)',
                    }}
                    data-node-id="1060:2203"
                  >
                    {headingContent}
                  </h1>

                  <p
                    className="normal-case font-body font-normal leading-normal text-black"
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

                  <p
                    className="normal-case font-body font-semibold leading-normal text-black"
                    style={{
                      fontSize: 'var(--english-ai-hero-body-size)',
                      fontVariationSettings: "'opsz' 14",
                      maxWidth: 'var(--english-ai-hero-body-max-w)',
                      marginTop: 'var(--english-ai-hero-title-to-body)',
                    }}
                  >
                    Trusted by Georgetown SCIP and 40+ global institutions.
                  </p>
                </div>

                <div className="flex w-full min-w-0 items-end justify-center sm:justify-end">
                  <TheEdgeHeroIllustration />
                </div>
              </div>
            </div>
          ) : (
            <div
              className="program-hero-inner flex min-h-0 flex-1 flex-col"
              style={{ gap: 'var(--hero-gap)' }}
            >
              <div className="program-hero-top-row flex min-w-0 items-end justify-end">
                <div className="hero-apply-slot shrink-0">
                  <ApplyNowButton className="max-w-full shrink-0" />
                </div>
              </div>

              <div
                className="program-hero-content-grid relative z-[1] grid min-h-0 min-w-0 flex-1 grid-cols-1 items-end gap-x-[var(--english-ai-hero-columns-gap)] gap-y-[var(--english-ai-hero-row-gap)] sm:grid-cols-[minmax(0,1fr)_auto] xl:grid-cols-[58%_42%]"
              >
                <div className="min-w-0 self-center xl:self-auto">
                  <p
                    className={cn(
                      'font-body text-black',
                      !isCodeMonkey && 'uppercase',
                    )}
                    style={{
                      fontSize: isCodeMonkey
                        ? 'var(--code-monkey-hero-eyebrow-size)'
                        : 'var(--section-text-eyebrow)',
                      fontVariationSettings: "'opsz' 14",
                    }}
                    data-node-id="1060:2225"
                  >
                    {eyebrowContent}
                  </p>

                  <h1
                    id={headingId}
                    className="section-heading max-w-none font-heading font-medium uppercase text-black"
                    style={{
                      fontSize: 'var(--english-ai-hero-title-size)',
                      maxWidth: isCodeMonkey ? undefined : 'var(--english-ai-hero-title-max-w)',
                      marginTop: isCodeMonkey
                        ? 'var(--code-monkey-hero-eyebrow-to-heading)'
                        : 'var(--english-ai-hero-eyebrow-to-heading)',
                    }}
                    data-node-id="1060:2203"
                  >
                    {headingContent}
                  </h1>

                  <p
                    className={cn(
                      'font-body leading-normal text-black',
                      isCodeMonkey
                        ? 'normal-case font-medium'
                        : 'capitalize font-medium',
                    )}
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

                <div className="flex w-full min-w-0 items-end justify-center sm:justify-end">
                  <EnglishAiHeroIllustration />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
