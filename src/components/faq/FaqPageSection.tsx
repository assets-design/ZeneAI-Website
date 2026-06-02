import { ApplyNowButton } from '@/components/ApplyNowButton/ApplyNowButton'
import { FaqAccordionList } from '@/components/faq/FaqAccordionList'
import { HOME_FAQ_ITEMS } from '@/data/faqItems'
import { cn } from '@/lib/utils'

type FaqPageSectionProps = {
  panel?: boolean
}

const highlightStyle = {
  minHeight: 'var(--english-ai-highlight-h)',
  paddingLeft: 'var(--english-ai-highlight-pad-x)',
  paddingRight: 'var(--english-ai-highlight-pad-x)',
} as const

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
          <div className="blog-header grid min-w-0 grid-cols-1 items-start gap-[var(--blog-header-gap)] xl:grid-cols-[minmax(0,1fr)_auto]">
            <div className="min-w-0">
              <p
                className="font-body uppercase text-black"
                style={{
                  fontSize: 'var(--section-text-eyebrow)',
                  fontVariationSettings: "'opsz' 14",
                }}
              >
                Support
              </p>

              <h1
                id="faq-page-heading"
                className="font-heading font-medium uppercase leading-none text-black"
                style={{
                  fontSize: 'var(--section-text-heading)',
                  maxWidth: 'var(--blog-heading-max-w)',
                  marginTop: 'var(--blog-eyebrow-to-heading)',
                }}
              >
                Answers For{' '}
                <span className="inline-flex items-center bg-zene-cyan" style={highlightStyle}>
                  Schools & Families
                </span>
              </h1>

              <p
                className="capitalize font-body font-normal leading-normal text-black"
                style={{
                  fontSize: 'var(--section-text-body)',
                  fontVariationSettings: "'opsz' 14",
                  maxWidth: 'var(--blog-body-max-w)',
                  marginTop: 'var(--blog-heading-to-body)',
                }}
              >
                Find clear answers about programs, trials, personalization, data privacy, and how
                Zene AI fits into your school.
              </p>
            </div>

            <div className="hero-apply-slot mx-auto shrink-0 self-start xl:mx-0">
              <ApplyNowButton href="/contact" className="max-w-full shrink-0" />
            </div>
          </div>

          <FaqAccordionList items={HOME_FAQ_ITEMS} />
        </div>
      </div>
    </section>
  )
}
