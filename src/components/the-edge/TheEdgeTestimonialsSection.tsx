import cardLogo from '@/assets/figma/the-edge/testimonials/card-logo.png'
import partnerCrest from '@/assets/figma/the-edge/testimonials/partner-crest.svg'
import partnerInnova from '@/assets/figma/the-edge/testimonials/partner-innova.png'
import partnerSeal from '@/assets/figma/the-edge/testimonials/partner-seal.png'
import partnerTigerhawks from '@/assets/figma/the-edge/testimonials/partner-tigerhawks.png'
import quoteIcon from '@/assets/figma/the-edge/testimonials/quote-icon.png'

const TESTIMONIALS = [
  {
    name: 'Haroot Hakopian',
    role: 'Academic Director',
    quote:
      'The most comprehensive and beneficial tool I have seen in 30 years of experience that covers life skills.',
    organization: 'Georgetown SCIP',
    bg: '#baf8d0',
    logo: cardLogo,
    nodeId: '1126:2485',
    nameNodeId: '1126:2486',
    roleNodeId: '1126:2510',
    quoteNodeId: '1126:2487',
    orgNodeId: '1134:2513',
    logoNodeId: '1126:2488',
  },
  {
    name: 'Daniel L.',
    role: 'Professor',
    quote:
      'The most comprehensive SEL curriculum that I have seen in my 35 years in education.',
    organization: 'Loyola Marymount School of Education',
    bg: '#fec9c9',
    logo: cardLogo,
    nodeId: '1126:2495',
    nameNodeId: '1126:2511',
    roleNodeId: '1126:2512',
    quoteNodeId: '1126:2497',
    orgNodeId: '1134:2514',
    logoNodeId: '1126:2499',
  },
] as const

const PARTNER_LOGOS = [
  {
    src: partnerInnova,
    alt: 'Innova Schools',
    width: 'var(--the-edge-testimonials-partner-innova-w)',
    height: 'var(--the-edge-testimonials-partner-innova-h)',
    nodeId: '1134:2518',
  },
  {
    src: partnerSeal,
    alt: 'Partner school seal',
    width: 'var(--the-edge-testimonials-partner-seal-w)',
    height: 'var(--the-edge-testimonials-partner-seal-h)',
    nodeId: '1134:2521',
    objectPosition: 'left center',
  },
  {
    src: partnerCrest,
    alt: 'Partner school crest',
    width: 'var(--the-edge-testimonials-partner-crest-w)',
    height: 'var(--the-edge-testimonials-partner-crest-h)',
    nodeId: '1134:3490',
  },
  {
    src: partnerTigerhawks,
    alt: 'North Fayette Valley Tigerhawks',
    width: 'var(--the-edge-testimonials-partner-tigerhawks-w)',
    height: 'var(--the-edge-testimonials-partner-tigerhawks-h)',
    nodeId: '1134:3492',
  },
] as const

function TestimonialCard({
  name,
  role,
  quote,
  organization,
  bg,
  logo,
  nodeId,
  nameNodeId,
  roleNodeId,
  quoteNodeId,
  orgNodeId,
  logoNodeId,
}: (typeof TESTIMONIALS)[number]) {
  return (
    <article
      className="the-edge-testimonials-card relative flex min-w-0 flex-col overflow-hidden"
      style={{ backgroundColor: bg }}
      data-node-id={nodeId}
    >
      <img
        src={quoteIcon}
        alt=""
        aria-hidden
        className="shrink-0 object-contain object-left-top"
        style={{
          width: 'var(--the-edge-testimonials-quote-w)',
          height: 'var(--the-edge-testimonials-quote-h)',
        }}
      />

      <h3
        className="font-heading font-medium uppercase leading-none text-black"
        style={{
          fontSize: 'var(--the-edge-testimonials-name-size)',
          marginTop: 'var(--the-edge-testimonials-quote-to-name)',
        }}
        data-node-id={nameNodeId}
      >
        {name}
      </h3>

      <p
        className="mb-0 capitalize font-body font-normal leading-normal text-black/50"
        style={{
          fontSize: 'var(--section-text-body)',
          fontVariationSettings: "'opsz' 14",
          marginTop: 'var(--the-edge-testimonials-name-to-role)',
        }}
        data-node-id={roleNodeId}
      >
        — {role}
      </p>

      <p
        className="mb-0 min-h-0 flex-1 capitalize font-body font-normal leading-normal text-black"
        style={{
          fontSize: 'var(--section-text-body)',
          fontVariationSettings: "'opsz' 14",
          maxWidth: 'var(--the-edge-testimonials-quote-body-max-w)',
          marginTop: 'var(--the-edge-testimonials-role-to-quote)',
        }}
        data-node-id={quoteNodeId}
      >
        {quote}
      </p>

      <div className="relative mt-auto shrink-0 pt-[var(--the-edge-testimonials-quote-to-footer)]">
        <p
          className="mb-0 capitalize font-body font-normal leading-normal text-black"
          style={{
            fontSize: 'var(--section-text-body)',
            fontVariationSettings: "'opsz' 14",
            maxWidth: 'calc(100% - var(--the-edge-testimonials-card-logo-w) - 12px)',
          }}
          data-node-id={orgNodeId}
        >
          {organization}
        </p>

        <img
          src={logo}
          alt=""
          aria-hidden
          className="pointer-events-none absolute object-contain object-right-bottom"
          style={{
            width: 'var(--the-edge-testimonials-card-logo-w)',
            height: 'var(--the-edge-testimonials-card-logo-h)',
            right: 'calc(-1 * var(--the-edge-testimonials-card-padding-x))',
            bottom: 'calc(-1 * var(--the-edge-testimonials-card-padding-x))',
          }}
          data-node-id={logoNodeId}
        />
      </div>
    </article>
  )
}

export function TheEdgeTestimonialsSection() {
  return (
    <section
      id="the-edge-testimonials"
      className="the-edge-testimonials w-full px-[5px] pt-[5px]"
      aria-labelledby="the-edge-testimonials-heading"
      data-node-id="1155:774"
    >
      <div
        className="relative mx-auto w-full overflow-hidden section-card-shell bg-white"
        style={{ maxWidth: 'var(--section-card-max-w)' }}
        data-node-id="1126:2504"
      >
        <div
          className="the-edge-testimonials-inner"
          style={{
            paddingLeft: 'var(--section-padding-x)',
            paddingRight: 'var(--section-padding-x)',
            paddingTop: 'var(--testimonial-padding-top)',
            paddingBottom: 'var(--testimonial-padding-bottom)',
          }}
        >
          <div className="the-edge-testimonials-layout grid min-w-0 items-start gap-x-[var(--the-edge-testimonials-columns-gap)] gap-y-[var(--the-edge-testimonials-row-gap)] lg:grid-cols-[minmax(0,var(--the-edge-testimonials-heading-col-w))_1fr]">
            <div className="lg:row-start-1">
              <p
                className="section-eyebrow font-body uppercase text-black"
                style={{
                  fontSize: 'var(--section-text-eyebrow)',
                  fontVariationSettings: "'opsz' 14",
                }}
              >
                From our partner schools
              </p>
              <h2
                id="the-edge-testimonials-heading"
                className="section-heading font-heading font-medium uppercase leading-none text-black"
                style={{
                  fontSize: 'var(--section-text-heading)',
                  marginTop: 'var(--testimonial-eyebrow-to-heading)',
                }}
                data-node-id="1126:2505"
              >
              <span data-node-id="1126:2506">
                Real Students.
              </span>
              <br />
              <span
                className="heading-highlight"
                data-node-id="1126:2509"
              >
                Real Progress.
              </span>
              </h2>
            </div>

            <div
              className="the-edge-testimonials-cards grid min-w-0 grid-cols-1 gap-[var(--the-edge-testimonials-card-gap)] md:grid-cols-2 lg:col-start-2 lg:row-start-1"
              data-node-id="1134:2515"
            >
              {TESTIMONIALS.map(item => (
                <TestimonialCard key={item.nodeId} {...item} />
              ))}
            </div>

            <div
              className="the-edge-testimonials-partners flex min-w-0 flex-wrap items-center justify-center gap-x-[var(--the-edge-testimonials-partner-gap-x)] gap-y-[var(--the-edge-testimonials-partner-gap-y)] lg:col-span-2 lg:col-start-1 lg:justify-center"
              style={{ marginTop: 'var(--the-edge-testimonials-cards-to-logos)' }}
              data-node-id="1134:3494"
            >
              {PARTNER_LOGOS.map(logo => (
                <div
                  key={logo.nodeId}
                  className="relative shrink-0 overflow-hidden"
                  style={{ width: logo.width, height: logo.height }}
                  data-node-id={logo.nodeId}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="size-full object-contain"
                    style={logo.objectPosition ? { objectPosition: logo.objectPosition } : undefined}
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
