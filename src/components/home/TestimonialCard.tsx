import cardLogo from '@/assets/figma/home/section-9/card-logo.png'
import quoteMarks from '@/assets/figma/home/section-9/quote-marks-outline.png'

export type Testimonial = {
  name: string
  quote: string
  bg: string
  nodeId: string
}

type TestimonialCardProps = Testimonial & {
  layout?: 'default' | 'mobile-home'
}

export function TestimonialCard({
  name,
  quote,
  bg,
  nodeId,
  layout = 'default',
}: TestimonialCardProps) {
  const isMobileHome = layout === 'mobile-home'

  return (
    <article
      className={
        isMobileHome
          ? 'testimonial-card testimonial-card--mobile-home relative shrink-0 overflow-hidden rounded-[var(--testimonial-card-radius)]'
          : 'relative shrink-0 overflow-hidden rounded-[var(--testimonial-card-radius)]'
      }
      style={{
        width: 'var(--testimonial-card-w)',
        height: isMobileHome ? undefined : 'var(--testimonial-card-h)',
        backgroundColor: bg,
      }}
      data-node-id={nodeId}
    >
      <img
        src={quoteMarks}
        alt=""
        aria-hidden
        className={
          isMobileHome
            ? 'testimonial-card__quote pointer-events-none object-contain object-left-top'
            : 'pointer-events-none absolute object-contain object-left-top'
        }
        style={
          isMobileHome
            ? {
                width: 'var(--testimonial-quote-icon-w)',
                height: 'var(--testimonial-quote-icon-h)',
              }
            : {
                left: 'var(--testimonial-padding-x)',
                top: 'var(--testimonial-quote-top)',
                width: 'var(--testimonial-quote-icon-w)',
                height: 'var(--testimonial-quote-icon-h)',
              }
        }
      />

      <h3
        className={
          isMobileHome
            ? 'testimonial-card__name font-heading font-medium uppercase leading-none text-black'
            : 'absolute font-heading font-medium uppercase leading-none text-black'
        }
        style={
          isMobileHome
            ? { fontSize: 'var(--testimonial-name-size)' }
            : {
                left: 'var(--testimonial-padding-x)',
                top: 'var(--testimonial-name-top)',
                maxWidth: 'var(--testimonial-name-max-w)',
                fontSize: 'var(--testimonial-name-size)',
              }
        }
      >
        {name}
      </h3>

      <p
        className={
          isMobileHome
            ? 'testimonial-card__quote-body capitalize font-body font-normal leading-normal text-black'
            : 'absolute capitalize font-body font-normal leading-normal text-black'
        }
        style={
          isMobileHome
            ? {
                fontSize: 'var(--section-text-body)',
                fontVariationSettings: "'opsz' 14",
              }
            : {
                left: 'var(--testimonial-padding-x)',
                top: 'var(--testimonial-body-top)',
                width: 'var(--testimonial-body-w)',
                fontSize: 'var(--section-text-body)',
                fontVariationSettings: "'opsz' 14",
              }
        }
      >
        {quote}
      </p>

      <img
        src={cardLogo}
        alt=""
        aria-hidden
        className="testimonial-card__logo pointer-events-none absolute object-right-bottom"
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
