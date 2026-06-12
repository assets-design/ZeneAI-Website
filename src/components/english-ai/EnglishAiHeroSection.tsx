import codeMonkeyHeroGif from '@/data/KOTHI.gif'
import englishAiHeroGif from '@/data/ROBO.gif'
import theEdgeHeroGif from '@/data/LOGO.gif'
import { ApplyNowButton } from '@/components/ApplyNowButton/ApplyNowButton'
import { cn } from '@/lib/utils'

import type { ProgramVariant } from '@/types/program'

type EnglishAiHeroSectionProps = {
  variant?: ProgramVariant
}

function ProgramHeroIllustration({
  src,
  alt,
}: {
  src: string
  alt: string
}) {
  return (
    <img
      src={src}
      alt={alt}
      className="section-fit-media english-ai-hero-gif block h-auto object-contain object-left-bottom"
      style={{
        width: 'var(--english-ai-hero-illustration-w)',
        maxHeight: 'var(--english-ai-hero-illustration-h)',
        marginTop: 'var(--english-ai-hero-illustration-margin-top)',
      }}
      data-node-id="1060:2209"
    />
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
    <>
      <span className="max-lg:whitespace-normal xl:whitespace-nowrap">
        Every student leaves with documented proof
      </span>
      <br />
      <span className="max-lg:whitespace-normal xl:whitespace-nowrap">
        of who they are becoming.
      </span>
    </>
  ) : isCodeMonkey ? (
    <>
      <span className="whitespace-nowrap max-xl:whitespace-normal">Code Monkey — the world's most loved</span>
      <br />
      <span className="whitespace-nowrap max-xl:whitespace-normal">
        coding program for kids
        {', now in your school.'}
      </span>
    </>
  ) : (
    <>
      <span className="max-lg:whitespace-normal xl:whitespace-nowrap">
        Where every student finds
      </span>
      <br />
      <span className="max-lg:whitespace-normal xl:whitespace-nowrap">
        their voice in English.
      </span>
    </>
  )

  const bodyContent = isTheEdge
    ? 'A research-backed life-readiness program that builds communication, critical thinking, employability, citizenship, and personal development — and gives every student a downloadable leadership profile.'
    : isCodeMonkey
      ? (
          <>
            <span className="block max-sm:inline">
              Code Monkey is an award-winning K–12 coding curriculum used by 18,000+ schools globally. Students learn real programming languages through game-based challenges, starting from Pre-K with block coding and building all the way to AI, data science, and high-school computer science.{' '}
            </span>
            <span
              className="block max-sm:inline font-normal"
              style={{ marginTop: '30px' }}
            >
              Zene brings Code Monkey to Indian schools — with localized onboarding, teacher training, and cohort support.
            </span>
          </>
        )
      : (
          <>
            <span className="block max-sm:inline">
              Cambridge research: it takes 200 hours to move up one{' '}
            </span>
            <span className="block max-sm:inline">
              CEFR level and most of those hours are passive listening.{' '}
            </span>
            <span className="block max-sm:inline">
              Zene turns them into active speaking practice, individually{' '}
            </span>
            <span className="block max-sm:inline">graded for every student.</span>
          </>
        )

  const eyebrowContent = isTheEdge
    ? 'Life-readiness for Grades 6–12'
    : isCodeMonkey
      ? 'In partnership with CodeMonkey Studios'
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
                className="program-hero-content-grid relative z-[1] grid min-h-0 min-w-0 flex-1 grid-cols-1 items-end gap-x-[var(--english-ai-hero-columns-gap)] gap-y-[var(--english-ai-hero-row-gap)] sm:grid-cols-[minmax(0,1fr)_auto] xl:grid-cols-[60%_40%]"
              >
                <div className="min-w-0 self-center xl:self-auto">
                  <p
                    className="section-eyebrow font-body uppercase text-black"
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
                  <ProgramHeroIllustration
                    src={theEdgeHeroGif}
                    alt="Students collaborating around the Zene leadership platform"
                  />
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
                <div className="english-ai-hero-copy min-w-0">
                  <p
                    className="section-eyebrow font-body uppercase text-black"
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
                      maxWidth: 'var(--english-ai-hero-title-max-w)',
                      marginTop: 'var(--english-ai-hero-eyebrow-to-heading)',
                    }}
                    data-node-id="1060:2203"
                  >
                    {headingContent}
                  </h1>

                  <p
                    className="font-body font-medium capitalize leading-normal text-black"
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
                  <ProgramHeroIllustration
                    src={isCodeMonkey ? codeMonkeyHeroGif : englishAiHeroGif}
                    alt={
                      isCodeMonkey
                        ? 'CodeMonkey students with the monkey mascot'
                        : 'Students learning with Zene AI'
                    }
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
