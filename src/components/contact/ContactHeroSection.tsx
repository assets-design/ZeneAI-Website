import contactHeroIllustration from '@/assets/figma/contact/hero-illustration.png'
import { ApplyNowButton } from '@/components/ApplyNowButton/ApplyNowButton'
import { cn } from '@/lib/utils'

type ContactHeroSectionProps = {
  panel?: boolean
}

export function ContactHeroSection({ panel = false }: ContactHeroSectionProps) {
  return (
    <section
      className={cn(
        'w-full px-[5px]',
        panel && 'section-scroll-panel section-scroll-panel--hero',
      )}
      aria-labelledby="contact-hero-heading"
      data-node-id="1039:1895"
    >
      <div
        className={cn(
          'relative mx-auto flex w-full items-center',
          panel ? 'h-full min-h-full' : 'overflow-hidden',
        )}
        style={{
          maxWidth: 'var(--section-card-max-w)',
          minHeight: panel ? undefined : 'var(--contact-hero-min-h)',
          borderRadius: 'var(--section-card-radius)',
          backgroundColor: '#fff',
        }}
        data-node-id="642:2089"
      >
        <div
          className="reveal absolute z-10"
          style={{
            top: 'var(--contact-hero-apply-top)',
            right: 'var(--contact-hero-apply-right)',
          }}
        >
          <ApplyNowButton className="max-w-full shrink-0" />
        </div>

        <div
          className={cn(
            'contact-hero-content relative z-[1] grid w-full min-w-0 items-center gap-x-[var(--contact-hero-columns-gap)] gap-y-[var(--contact-hero-columns-gap)] max-xl:grid-cols-1 xl:grid-cols-2',
            panel && 'contact-hero-panel-body',
          )}
          style={{
            paddingLeft: 'var(--section-padding-x)',
            paddingRight: 'var(--section-padding-x)',
            paddingTop: 'var(--contact-hero-padding-top)',
            paddingBottom: 'var(--contact-hero-padding-bottom)',
          }}
        >
          <div className="flex min-w-0 flex-col justify-center xl:col-start-1 xl:row-start-1">
            <h1
              id="contact-hero-heading"
              className="reveal-left font-heading font-medium uppercase leading-none text-black"
              style={{ fontSize: 'var(--hero-text-headline)' }}
              data-node-id="642:2091"
            >
              <span className="block">Bring AI-powered</span>
              <span className="block w-max max-w-none whitespace-nowrap max-sm:whitespace-normal">
                learning to your school
              </span>
            </h1>

            <p
              className="reveal-left capitalize font-heading font-normal leading-normal text-black"
              style={{
                fontSize: 'var(--hero-text-body)',
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
              className={cn(
                'reveal-right h-auto w-full max-w-full object-contain',
                !panel && 'xl:mt-[var(--contact-hero-apply-to-image-gap)]',
              )}
              style={
                panel
                  ? undefined
                  : {
                      width: 'var(--contact-hero-illustration-w)',
                      maxHeight: 'var(--contact-hero-illustration-h)',
                    }
              }
            />
          </div>
        </div>
      </div>
    </section>
  )
}
