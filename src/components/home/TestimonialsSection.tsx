import { TestimonialCarousel } from '@/components/home/TestimonialCarousel'
import type { Testimonial } from '@/components/home/TestimonialCard'

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Ananya S.',
    quote: 'Zene AI made learning English so much fun. I actually look forward to my sessions now!',
    bg: '#fec9c9',
    nodeId: '218:1363',
  },
  {
    name: 'Priya M.',
    quote: "My daughter's confidence has soared. The personalized approach really works.",
    bg: '#baf8d0',
    nodeId: '218:1373',
  },
  {
    name: 'Priya M.',
    quote: "My daughter's confidence has soared. The personalized approach really works.",
    bg: '#fef18b',
    nodeId: '218:1383',
  },
]

type TestimonialsSectionProps = {
  variant?: 'home' | 'about'
}

function TestimonialsHeader({ variant }: { variant: 'home' | 'about' }) {
  if (variant === 'about') {
    return (
      <>
        <p
          className="section-eyebrow font-body uppercase text-black"
          style={{
            fontSize: 'var(--section-text-eyebrow)',
            fontVariationSettings: "'opsz' 14",
          }}
        >
          What schools experience
        </p>
        <h2
          id="about-real-progress-heading"
          className="max-w-full font-heading font-medium uppercase leading-none text-black"
          style={{
            fontSize: 'var(--section-text-heading)',
            maxWidth: 'var(--about-real-progress-heading-max-w)',
            marginTop: 'var(--section-eyebrow-to-heading)',
          }}
          data-node-id="642:1344"
        >
        <span className="block" data-node-id="642:1345">
          Real Students.
        </span>
        <span
          className="mt-[var(--section-gap)] inline-flex items-center bg-zene-cyan"
          style={{
            minHeight: 'var(--about-highlight-h)',
            paddingLeft: 'var(--about-highlight-pad-x)',
            paddingRight: 'var(--about-highlight-pad-x)',
          }}
          data-node-id="642:1348"
        >
          Real Progress.
        </span>
      </h2>
      </>
    )
  }

  return (
    <>
      <p
        className="section-eyebrow font-body uppercase text-black"
        style={{
          fontSize: 'var(--section-text-eyebrow)',
          fontVariationSettings: "'opsz' 14",
        }}
        data-node-id="770:2051"
      >
        From the principals in our cohort
      </p>

      <h2
        id="testimonials-heading"
        className="font-heading font-medium uppercase leading-none text-black"
        style={{
          fontSize: 'var(--section-text-heading)',
          maxWidth: 'var(--testimonial-heading-max-w)',
          marginTop: 'var(--testimonial-eyebrow-to-heading)',
        }}
        data-node-id="767:1953"
      >
        What schools{' '}
        <span className="bg-[#78F3FA]" data-node-id="767:1955">
          say after their first
        </span>{' '}
        term with Zene.
      </h2>
    </>
  )
}

export function TestimonialsSection({ variant = 'home' }: TestimonialsSectionProps) {
  const headingId =
    variant === 'about' ? 'about-real-progress-heading' : 'testimonials-heading'

  return (
    <section
      className="w-full px-[5px] pt-[5px]"
      aria-labelledby={headingId}
      data-node-id={variant === 'about' ? '642:1343' : '767:1951'}
    >
      <div
        className="testimonials-card relative mx-auto flex h-full min-h-0 w-full flex-col overflow-hidden section-card-shell bg-white"
        style={{ maxWidth: 'var(--section-card-max-w)' }}
      >
        <div
          className="shrink-0"
          style={{
            paddingLeft: 'var(--section-padding-x)',
            paddingRight: 'var(--section-padding-x)',
            paddingTop: 'var(--testimonial-padding-top)',
          }}
        >
          <TestimonialsHeader variant={variant} />
        </div>

        <div
          className="testimonials-carousel-wrap flex justify-start"
          style={{ paddingBottom: 'var(--testimonial-padding-bottom)' }}
        >
          <TestimonialCarousel items={TESTIMONIALS} />
        </div>
      </div>
    </section>
  )
}
