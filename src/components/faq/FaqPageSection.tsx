import { ApplyNowButton } from '@/components/ApplyNowButton/ApplyNowButton'
import { FaqAccordionList } from '@/components/faq/FaqAccordionList'
import { HOME_FAQ_ITEMS } from '@/data/faqItems'
import { cn } from '@/lib/utils'

type FaqPageSectionProps = {
  panel?: boolean
}

export function FaqPageSection({ panel = false }: FaqPageSectionProps) {
  return (
    <section
      className={cn(
        'faq-page blog-post-page w-full px-[var(--section-card-gap)]',
        panel ? 'section-scroll-panel section-scroll-panel--form' : 'pt-[var(--section-card-gap)]',
      )}
      aria-labelledby="faq-page-heading"
    >
      <div
        className={cn(
          'blog-card relative mx-auto w-full overflow-hidden section-card-shell bg-white',
          panel && 'flex min-h-0 flex-col',
        )}
        style={{ maxWidth: 'var(--section-card-max-w)' }}
      >
        <div
          className={cn('blog-body blog-post-body', panel && 'blog-panel-body min-h-0 flex-1')}
          style={{
            paddingTop: panel
              ? 'var(--blog-panel-padding-top, var(--blog-padding-top))'
              : 'var(--blog-padding-top)',
            paddingBottom: panel
              ? 'var(--blog-panel-padding-bottom, var(--blog-padding-bottom))'
              : 'var(--blog-padding-bottom)',
          }}
        >
          <div
            id="faq-page-header"
            className="blog-post-header program-hero-inner flex min-w-0 flex-col"
            style={{ gap: 'var(--blog-header-gap)' }}
          >
            <div className="program-hero-top-row flex min-w-0 items-end justify-end">
              <div className="hero-apply-slot shrink-0">
                <ApplyNowButton href="/contact" className="max-w-full shrink-0" />
              </div>
            </div>

            <div className="blog-post-header-copy min-w-0">
              <p
                className="section-eyebrow font-body uppercase text-black"
                style={{
                  fontSize: 'var(--section-text-eyebrow)',
                  fontVariationSettings: "'opsz' 14",
                }}
              >
                Support
              </p>

              <h1
                id="faq-page-heading"
                className="max-w-none font-heading font-medium uppercase leading-none text-black"
                style={{
                  fontSize: 'var(--section-text-heading)',
                  marginTop: 'var(--blog-eyebrow-to-heading)',
                }}
              >
                Answers For{' '}
                <span className="heading-highlight">
                  Schools & Families
                </span>
              </h1>

              <p
                className="capitalize font-body font-normal leading-normal text-black"
                style={{
                  fontSize: 'var(--section-text-body)',
                  fontVariationSettings: "'opsz' 14",
                  marginTop: 'var(--blog-heading-to-body)',
                }}
              >
                Find clear answers about programs, trials, personalization, data privacy, and how
                Zene AI fits into your school.
              </p>
            </div>
          </div>

          <FaqAccordionList items={HOME_FAQ_ITEMS} />
        </div>
      </div>
    </section>
  )
}
