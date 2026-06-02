import cardLogo from '@/assets/figma/home/section-9/card-logo.png'
import quoteMarks from '@/assets/figma/home/section-9/quote-marks-outline.png'

export type Testimonial = {
  name: string
  quote: string
  bg: string
  nodeId: string
}

type TestimonialCardProps = Testimonial

export function TestimonialCard({ name, quote, bg, nodeId }: TestimonialCardProps) {
  return (
    <article
      className="relative shrink-0 overflow-hidden rounded-[var(--testimonial-card-radius)]"
      style={{
        width: 'var(--testimonial-card-w)',
        height: 'var(--testimonial-card-h)',
        backgroundColor: bg,
      }}
      data-node-id={nodeId}
    >
      <img
        src={quoteMarks}
        alt=""
        aria-hidden
        className="pointer-events-none absolute object-contain object-left-top"
        style={{
          left: 'var(--testimonial-padding-x)',
          top: 'var(--testimonial-quote-top)',
          width: 'var(--testimonial-quote-icon-w)',
          height: 'var(--testimonial-quote-icon-h)',
        }}
      />

      <h3
        className="absolute font-heading font-medium uppercase leading-none text-black"
        style={{
          left: 'var(--testimonial-padding-x)',
          top: 'var(--testimonial-name-top)',
          maxWidth: 'var(--testimonial-name-max-w)',
          fontSize: 'var(--testimonial-name-size)',
        }}
      >
        {name}
      </h3>

      <p
        className="absolute capitalize font-body font-normal leading-normal text-black"
        style={{
          left: 'var(--testimonial-padding-x)',
          top: 'var(--testimonial-body-top)',
          width: 'var(--testimonial-body-w)',
          fontSize: 'var(--section-text-body)',
          fontVariationSettings: "'opsz' 14",
        }}
      >
        {quote}
      </p>

      <img
        src={cardLogo}
        alt=""
        aria-hidden
        className="pointer-events-none absolute object-right-bottom"
        style={{
          width: 'var(--testimonial-logo-w)',
          height: 'var(--testimonial-logo-h)',
          right: 'var(--testimonial-logo-right)',
          bottom: 'var(--testimonial-logo-bottom)',
        }}
      />
    </article>
  )
}
