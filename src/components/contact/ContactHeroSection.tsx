import contactHeroIllustration from '@/assets/figma/contact/hero-illustration.gif'
import { ApplyNowButton } from '@/components/ApplyNowButton/ApplyNowButton'
import { cn } from '@/lib/utils'

type ContactHeroSectionProps = {
  panel?: boolean
}

export function ContactHeroSection({ panel = false }: ContactHeroSectionProps) {
  return (
    <section
      id="contact-hero"
      className={cn(
        'w-full px-[5px]',
        panel && 'section-scroll-panel section-scroll-panel--hero',
      )}
      aria-labelledby="contact-hero-heading"
      data-node-id="1039:1895"
    >
      <div
        className={cn(
          'contact-hero-card section-card-shell relative mx-auto flex w-full flex-col overflow-hidden bg-white',
          panel && 'h-full min-h-0',
        )}
        style={{ maxWidth: 'var(--section-card-max-w)' }}
        data-node-id="642:2089"
      >
        <div
          className={cn(
            'contact-hero-inner relative z-[1] flex min-h-0 flex-1 flex-col',
            panel && 'contact-hero-panel-body',
          )}
          style={{
            paddingLeft: 'var(--section-padding-x)',
            paddingRight: 'var(--section-padding-x)',
            paddingTop: 'var(--contact-hero-padding-top)',
            paddingBottom: 'var(--contact-hero-padding-bottom)',
            gap: 'var(--hero-gap)',
          }}
        >
          {/* Top row — Apply Now right (same pattern as homepage hero) */}
          <div className="contact-hero-top-row flex min-w-0 items-end justify-end">
            <div className="hero-apply-slot shrink-0 reveal">
              <ApplyNowButton className="max-w-full shrink-0" />
            </div>
          </div>

          <div
            className="contact-hero-content grid w-full min-w-0 items-center gap-x-[var(--contact-hero-columns-gap)] gap-y-[var(--contact-hero-columns-gap)] max-xl:grid-cols-1 xl:grid-cols-2"
          >
            <div className="contact-hero-copy flex min-w-0 flex-col justify-start xl:col-start-1 xl:row-start-1">
              <p
                className="section-eyebrow reveal-left font-body uppercase text-black"
                style={{
                  fontSize: 'var(--section-text-eyebrow)',
                  fontVariationSettings: "'opsz' 14",
                }}
              >
                Get in touch
              </p>
              <h1
                id="contact-hero-heading"
                className="reveal-left section-heading font-heading font-medium uppercase text-black"
                style={{
                  fontSize: 'var(--hero-text-headline)',
                  lineHeight: 'var(--section-heading-line-height)',
                  marginTop: 'var(--section-eyebrow-to-heading)',
                }}
                data-node-id="642:2091"
              >
                Bring AI-powered
                <br />
                <span className="max-sm:whitespace-normal sm:whitespace-nowrap">
                  learning to your school
                </span>
              </h1>

              <p
                className="reveal-left capitalize font-heading font-normal leading-normal text-black"
                style={{
                  fontSize: 'var(--contact-hero-subtitle-size)',
                  maxWidth: 'var(--contact-hero-subtitle-max-w)',
                  marginTop: 'var(--contact-hero-title-to-subtitle)',
                }}
                data-node-id="642:2098"
              >
                Let&apos;s help you introduce structured, future-ready programs that build
                real-world skills for your students.
              </p>
            </div>

            <div
              className={cn(
                'flex w-full min-w-0 justify-center xl:col-start-2 xl:row-start-1 xl:justify-end',
                panel && 'contact-hero-panel-image',
              )}
              data-node-id="642:2159"
            >
              <img
                src={contactHeroIllustration}
                alt="Student working on a laptop beside a school program form"
                className="reveal-right section-fit-media contact-hero-gif block h-auto max-w-full object-contain object-bottom"
                style={{
                  width: 'var(--contact-hero-illustration-w)',
                  maxHeight: 'var(--contact-hero-illustration-h)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
