import { useState } from 'react'
import { StudentFaceCircle } from '@/components/ApplyNowButton/StudentFaceCircle'
import { StartApplicationButton } from '@/components/home/StartApplicationButton'
import { cn } from '@/lib/utils'

type ApplyCtaSectionProps = {
  variant?: 'home' | 'about' | 'english-ai' | 'code-monkey' | 'the-edge'
}

function ApplyCtaBodyCopy({ variant }: { variant: ApplyCtaSectionProps['variant'] }) {
  if (variant === 'about') {
    return (
      <>
        From AI English speaking to coding and leadership — a complete future-ready skill set,
        trusted by schools across India
      </>
    )
  }

  if (variant === 'code-monkey') {
    return <>5-minute application. Selection decisions after a call with your school team.</>
  }

  return (
    <>5-minute application. Selection decisions after a call with your school team.</>
  )
}

export function ApplyCtaSection({ variant = 'home' }: ApplyCtaSectionProps) {
  const [buttonHover, setButtonHover] = useState(false)
  const isAbout = variant === 'about'
  const isEnglishAi = variant === 'english-ai'
  const isCodeMonkey = variant === 'code-monkey'
  const isTheEdge = variant === 'the-edge'
  const headingId = isAbout
    ? 'about-skills-heading'
    : isTheEdge
      ? 'the-edge-apply-heading'
      : isCodeMonkey
        ? 'code-monkey-apply-heading'
        : isEnglishAi
          ? 'english-ai-apply-heading'
          : 'apply-cta-heading'

  return (
    <section
      id={isAbout ? undefined : 'apply'}
      className={cn(
        'w-full px-[5px] pt-[5px]',
        isAbout && 'apply-cta-section--about',
        isEnglishAi && 'apply-cta-section--english-ai',
        isTheEdge && 'apply-cta-section--the-edge',
        isCodeMonkey && 'apply-cta-section--code-monkey',
      )}
      aria-labelledby={headingId}
      data-node-id={isAbout ? '642:1331' : isTheEdge ? '1134:3546' : '1025:1892'}
    >
      <div
        className="apply-cta-card relative mx-auto flex h-full min-h-0 w-full flex-col overflow-hidden section-card-shell bg-white"
        style={{ maxWidth: 'var(--section-card-max-w)' }}
        data-node-id={isAbout ? '642:1331' : isTheEdge ? '1134:3547' : '975:1976'}
      >
        <div
          className="apply-cta-inner flex justify-center px-[var(--section-padding-x)] sm:px-0"
          style={{
            paddingTop: 'var(--apply-cta-padding-top)',
            paddingBottom: 'var(--apply-cta-padding-bottom)',
          }}
        >
          <div
            className="apply-cta-stage relative mx-auto flex w-full max-w-[var(--apply-cta-stage-w)] flex-col items-center sm:flex-row sm:justify-center sm:min-h-[var(--apply-cta-yellow-size)]"
            style={{
              width: 'min(100%, var(--apply-cta-stage-w))',
            }}
          >
            <div
              className="apply-cta-yellow relative mx-auto flex aspect-square shrink-0 flex-col items-center justify-center overflow-hidden rounded-full bg-zene-yellow text-center sm:mx-0"
              style={{
                width: 'var(--apply-cta-yellow-size)',
                maxWidth: '100%',
                paddingLeft: 'var(--apply-cta-content-padding-x)',
                paddingRight: 'var(--apply-cta-content-padding-x)',
                paddingTop: 'var(--apply-cta-yellow-py)',
                paddingBottom: 'var(--apply-cta-yellow-py)',
              }}
              data-node-id={isAbout ? '642:1355' : isTheEdge ? '1134:3548' : '975:1977'}
            >
              <p
                className="section-eyebrow mx-auto mb-0 uppercase font-body text-black"
                style={{
                  fontSize: 'var(--section-text-eyebrow)',
                  fontVariationSettings: "'opsz' 14",
                  maxWidth: 'var(--apply-cta-heading-max-w)',
                  marginBottom: 'var(--apply-cta-eyebrow-to-heading)',
                }}
                data-node-id={
                  isAbout
                    ? '642:1355-eyebrow'
                    : isTheEdge
                      ? '1134:3548-eyebrow'
                      : isCodeMonkey
                        ? '1025:1892-eyebrow'
                        : isEnglishAi
                          ? '1060:2346-eyebrow'
                          : '975:1977-eyebrow'
                }
              >
                One last thing before you go
              </p>
              <h2
                id={headingId}
                style={{
                  fontSize: 'var(--apply-cta-heading-size)',
                  maxWidth: 'var(--apply-cta-heading-max-w)',
                }}
                className="mx-auto mt-0 font-heading font-medium uppercase leading-none text-black"
                data-node-id={isAbout ? '642:1357' : isTheEdge ? '1134:3549' : '975:1978'}
              >
                {isAbout ? (
                  <>
                    <span className="block whitespace-nowrap">Let&apos;s Build</span>
                    <span className="block whitespace-nowrap">Skills That Matter</span>
                  </>
                ) : isTheEdge ? (
                  <>
                    <span className="block sm:whitespace-nowrap">Apply to the AY</span>
                    <span className="block sm:whitespace-nowrap">2026–27 Cohort</span>
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
                  isCodeMonkey ? 'normal-case' : 'capitalize',
                )}
                style={{
                  fontSize: 'var(--apply-cta-body-size)',
                  fontVariationSettings: "'opsz' 14",
                  maxWidth: 'var(--apply-cta-body-max-w)',
                  marginTop: 'var(--apply-cta-heading-to-body)',
                }}
                data-node-id={isAbout ? '642:1358' : isTheEdge ? '1134:3550' : '975:1979'}
              >
                <ApplyCtaBodyCopy variant={variant} />
              </p>

              <div style={{ marginTop: 'var(--apply-cta-body-to-btn)' }}>
                <StartApplicationButton
                  label={isAbout ? 'Apply to the AI 2026–27' : undefined}
                  onMouseEnter={() => setButtonHover(true)}
                  onMouseLeave={() => setButtonHover(false)}
                />
              </div>
            </div>

            <StudentFaceCircle
              className="apply-cta-student relative z-[2] shrink-0 sm:mx-0"
              size="var(--apply-cta-student-circle-size)"
              studentSize="var(--apply-cta-student-face-size)"
              studentHoverSize="var(--apply-cta-student-face-hover-size)"
              hovered={buttonHover}
              nodeId={isAbout ? '642:1359' : isTheEdge ? '1134:3551' : '64:258'}
              innerNodeId={isAbout ? '642:1359' : isTheEdge ? '64:256' : '64:256'}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
