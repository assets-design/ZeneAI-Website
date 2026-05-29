import { useState } from 'react'
import { StudentFaceCircle } from '@/components/ApplyNowButton/StudentFaceCircle'
import { StartApplicationButton } from '@/components/home/StartApplicationButton'
import { cn } from '@/lib/utils'

type ApplyCtaSectionProps = {
  variant?: 'home' | 'about' | 'code-monkey' | 'the-edge'
}

export function ApplyCtaSection({ variant = 'home' }: ApplyCtaSectionProps) {
  const [buttonHover, setButtonHover] = useState(false)
  const isAbout = variant === 'about'
  const isCodeMonkey = variant === 'code-monkey'
  const isTheEdge = variant === 'the-edge'
  const headingId = isAbout
    ? 'about-skills-heading'
    : isTheEdge
      ? 'the-edge-apply-heading'
      : isCodeMonkey
        ? 'code-monkey-apply-heading'
        : 'apply-cta-heading'

  return (
    <section
      id={isAbout ? undefined : 'apply'}
      className="w-full px-[5px] pt-[5px]"
      aria-labelledby={headingId}
      data-node-id={isAbout ? '642:1331' : '1025:1892'}
    >
      <div
        className="relative mx-auto w-full overflow-hidden rounded-[var(--section-card-radius)] bg-white"
        style={{ maxWidth: 'var(--section-card-max-w)' }}
        data-node-id={isAbout ? '642:1331' : '975:1976'}
      >
        <div
          className="flex justify-center px-[var(--section-padding-x)] sm:px-0"
          style={{
            paddingTop: 'var(--apply-cta-padding-top)',
            paddingBottom: 'var(--apply-cta-padding-bottom)',
          }}
        >
          <div
            className="relative flex w-full max-w-[var(--apply-cta-stage-w)] flex-col items-center sm:block sm:min-h-[var(--apply-cta-yellow-size)]"
            style={{
              width: 'min(100%, var(--apply-cta-stage-w))',
            }}
          >
            <div
              className="relative mx-auto flex aspect-square shrink-0 flex-col items-center justify-center overflow-hidden rounded-full bg-zene-yellow text-center sm:absolute sm:left-0 sm:top-0"
              style={{
                width: 'var(--apply-cta-yellow-size)',
                maxWidth: '100%',
                paddingLeft: 'var(--apply-cta-content-padding-x)',
                paddingRight: 'var(--apply-cta-content-padding-x)',
                paddingTop: 'var(--apply-cta-yellow-py)',
                paddingBottom: 'var(--apply-cta-yellow-py)',
              }}
              data-node-id={isAbout ? '642:1355' : '975:1977'}
            >
              <h2
                id={headingId}
                className="mx-auto font-heading font-medium uppercase leading-none text-black"
                style={{
                  fontSize: 'var(--apply-cta-heading-size)',
                  maxWidth: 'var(--apply-cta-heading-max-w)',
                }}
                data-node-id={isAbout ? '642:1357' : '975:1978'}
              >
                {isAbout ? (
                  <>
                    <span className="block">Let&apos;s Build Skills</span>
                    <span className="block">That Matter</span>
                  </>
                ) : isTheEdge ? (
                  <>
                    <span className="block sm:whitespace-nowrap">Your students have the potential.</span>
                    <span className="block sm:whitespace-nowrap">The Edge builds the proof.</span>
                  </>
                ) : isCodeMonkey ? (
                  <>
                    <span className="block sm:whitespace-nowrap">Apply to the AY</span>
                    <span className="block sm:whitespace-nowrap">2026–27 cohort</span>
                  </>
                ) : (
                  <>
                    <span className="block sm:whitespace-nowrap">Apply to the AY</span>
                    <span className="block sm:whitespace-nowrap">2026–27 Cohort</span>
                  </>
                )}
              </h2>

              <p
                className={cn(
                  'mx-auto font-body font-normal leading-normal text-black',
                  isTheEdge || isCodeMonkey ? 'normal-case' : 'capitalize',
                )}
                style={{
                  fontSize: 'var(--apply-cta-body-size)',
                  fontVariationSettings: "'opsz' 14",
                  maxWidth: 'var(--apply-cta-body-max-w)',
                  marginTop: 'var(--apply-cta-heading-to-body)',
                }}
                data-node-id={isAbout ? '642:1358' : '975:1979'}
              >
                {isAbout
                  ? 'From AI English speaking to coding and leadership — a complete future-ready skill set, trusted by schools across India'
                  : isTheEdge
                    ? 'Trusted by Georgetown University, Alliance College-Ready Public Schools, and 100+ institutions worldwide. Every student leaves with documented proof of who they are becoming.'
                    : isCodeMonkey
                      ? 'Limited seats. Decisions rolling. Apply before the cohort closes.'
                      : '5-minute application. Selection decisions after a call with your school team.'}
              </p>

              <div style={{ marginTop: 'var(--apply-cta-body-to-btn)' }}>
                <StartApplicationButton
                  href={isAbout ? '/contact' : '#apply'}
                  label={isAbout ? 'Book a free demo' : undefined}
                  onMouseEnter={() => setButtonHover(true)}
                  onMouseLeave={() => setButtonHover(false)}
                />
              </div>
            </div>

            <StudentFaceCircle
              className="relative z-[2] -mt-[var(--apply-cta-student-overlap)] sm:absolute sm:right-[calc(-1*var(--apply-cta-student-overlap))] sm:top-1/2 sm:mt-0 sm:-translate-y-1/2"
              size="var(--apply-cta-student-circle-size)"
              studentSize="var(--apply-cta-student-face-size)"
              studentHoverSize="var(--apply-cta-student-face-hover-size)"
              hovered={buttonHover}
              nodeId={isAbout ? '642:1359' : '64:258'}
              innerNodeId={isAbout ? '642:1359' : '64:256'}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
