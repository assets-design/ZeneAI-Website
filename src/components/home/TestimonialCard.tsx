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
      className="relative flex shrink-0 flex-col overflow-hidden rounded-[var(--testimonial-card-radius)]"
      style={{
        width: 'var(--testimonial-card-w)',
        height: 'var(--testimonial-card-h)',
        backgroundColor: bg,
        paddingLeft: 'var(--testimonial-padding-x)',
        paddingRight: 'var(--testimonial-padding-x)',
        paddingTop: 'var(--testimonial-quote-top)',
        paddingBottom: 'var(--testimonial-padding-x)',
      }}
      data-node-id={nodeId}
    >
      <img
        src={quoteIcon}
        alt=""
        aria-hidden
        className="shrink-0 object-contain object-left-top"
        style={{
          width: 'var(--testimonial-quote-icon-w)',
          height: 'var(--testimonial-quote-icon-h)',
        }}
      />

      <p
        className="mt-4 min-h-0 flex-1 capitalize font-body font-normal leading-normal text-black"
        style={{
          fontSize: 'var(--section-text-body)',
          fontVariationSettings: "'opsz' 14",
        }}
      >
        {quote}
      </p>

      <div className="relative mt-4 shrink-0">
        <h3
          className="font-heading font-medium uppercase leading-none text-black"
          style={{
            fontSize: 'var(--testimonial-name-size)',
            maxWidth: 'calc(100% - var(--testimonial-logo-w) - 12px)',
          }}
        >
          {name}
        </h3>

        <img
          src={cardLogo}
          alt=""
          aria-hidden
          className="pointer-events-none absolute object-contain object-right-bottom"
          style={{
            width: 'var(--testimonial-logo-w)',
            height: 'var(--testimonial-logo-h)',
            right: 'calc(-1 * var(--testimonial-padding-x))',
            bottom: 'calc(-1 * var(--testimonial-padding-x))',
          }}
        />
      </div>
    </article>
  )
}
