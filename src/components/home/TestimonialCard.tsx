import cardLogo from '@/assets/figma/home/section-9/card-logo.png'
import quoteIcon from '@/assets/figma/home/section-9/quote-icon.png'

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
        src={quoteIcon}
        alt=""
        aria-hidden
        className="pointer-events-none absolute object-contain object-left-top"
        style={{
          top: 'var(--testimonial-quote-top)',
          left: 'var(--testimonial-padding-x)',
          width: 'var(--testimonial-quote-icon-w)',
          height: 'var(--testimonial-quote-icon-h)',
        }}
      />

      <h3
        className="absolute font-heading font-medium uppercase leading-none text-black"
        style={{
          fontSize: 'var(--testimonial-name-size)',
          top: 'var(--testimonial-name-top)',
          left: 'var(--testimonial-padding-x)',
          maxWidth: 'var(--testimonial-name-max-w)',
        }}
      >
        {name}
      </h3>

      <p
        className="absolute capitalize font-body font-normal leading-normal text-black"
        style={{
          fontSize: 'var(--section-text-body)',
          fontVariationSettings: "'opsz' 14",
          top: 'var(--testimonial-body-top)',
          left: 'var(--testimonial-padding-x)',
          width: 'var(--testimonial-body-w)',
        }}
      >
        {quote}
      </p>

      <img
        src={cardLogo}
        alt=""
        aria-hidden
        className="pointer-events-none absolute object-contain object-right-bottom"
        style={{
          width: 'var(--testimonial-logo-w)',
          height: 'var(--testimonial-logo-h)',
          right: 0,
          bottom: 0,
        }}
      />
    </article>
  )
}
