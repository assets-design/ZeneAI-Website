import { ApplyNowButton } from '@/components/ApplyNowButton/ApplyNowButton'
import { HeroBadgesCarousel } from '@/components/home/HeroBadgesCarousel'
import { HeroRobotVideo } from '@/components/home/HeroRobotVideo'

const TRUST_BADGES = [
  {
    image: '/assets/figma/home/hero/badge-schools.png',
    alt: 'Schools cohort illustration',
    lines: ['{{N}} schools across India and the', 'US currently in the Zene cohort'],
    width: 'var(--hero-badge-1-w)',
    height: 'var(--hero-badge-1-h)',
  },
  {
    image: '/assets/figma/home/hero/badge-ncf.png',
    alt: 'NCF and NEP alignment illustration',
    lines: ['NCF and NEP 2020 aligned your', 'scope and sequence, mapped'],
    width: 'var(--hero-badge-2-w)',
    height: 'var(--hero-badge-2-h)',
  },
  {
    image: '/assets/figma/home/hero/badge-elt.png',
    alt: 'ELT specialists illustration',
    lines: ['Built by ELT specialists, AI engineers,', 'and DPDP Act 2023 compliant'],
    width: 'var(--hero-badge-3-w)',
    height: 'var(--hero-badge-3-h)',
  },
  {
    image: '/assets/figma/home/hero/badge-cefr.png',
    alt: 'CEFR progression illustration',
    lines: ['Measurable CEFR-band progression', 'proven on your principal dashboard'],
    width: 'var(--hero-badge-4-w)',
    height: 'var(--hero-badge-4-h)',
  },
] as const

function HeroBadgeText({ lines }: { lines: readonly string[] }) {
  return (
    <p
      className="normal-case font-body font-normal leading-normal text-black"
      style={{
        fontSize: 'var(--section-text-body)',
        fontVariationSettings: "'opsz' 14",
        maxWidth: 'var(--hero-badge-text-max-w)',
        marginTop: 'var(--hero-gap)',
      }}
    >
      {lines.map((line, index) => (
        <span key={line}>
          {line}
          {index < lines.length - 1 ? <br /> : null}
        </span>
      ))}
    </p>
  )
}

export function HeroSection() {
  return (
    <section
      id="home-hero"
      className="hero-section w-full px-[5px]"
      aria-labelledby="hero-heading"
      data-node-id="1176:780"
    >
      <div
        className="hero-card hero-card-shell relative mx-auto flex h-full min-h-0 w-full flex-col overflow-hidden bg-white section-card-shell"
        style={{ maxWidth: 'var(--hero-card-max-w)' }}
        data-node-id="642:1123"
      >
        <div
          className="hero-card-inner relative z-[1] flex min-h-0 flex-1 flex-col"
          style={{
            paddingLeft: 'var(--hero-padding-x)',
            paddingRight: 'var(--hero-padding-x)',
            gap: 'var(--hero-gap)',
          }}
        >
          <div className="hero-top-row flex min-w-0 items-end justify-between gap-[clamp(8px,2vw,var(--hero-gap))]">
            <HeroRobotVideo />
            <div className="hero-apply-slot shrink-0" data-node-id="780:2207">
              <ApplyNowButton className="max-w-full shrink-0" />
            </div>
          </div>

          <p
            className="section-eyebrow font-body uppercase text-black"
            style={{
              fontSize: 'var(--section-text-eyebrow)',
              fontVariationSettings: "'opsz' 14",
            }}
            data-node-id="751:512"
          >
            An AI English Speaking Lab for visionary schools.
          </p>

          <h1
            id="hero-heading"
            className="section-heading font-heading font-medium uppercase leading-none text-black"
            style={{
              fontSize: 'var(--english-ai-hero-title-size)',
              maxWidth: 'var(--hero-headline-max-w)',
              marginTop: 'var(--home-hero-eyebrow-to-heading, 0px)',
            }}
            data-node-id="642:1130"
          >
            <span className="block">The English speaking practice</span>
            <span className="block">your timetable cannot fit.</span>
          </h1>

          <p
            className="ml-0 normal-case font-body font-medium leading-normal text-black xl:ml-[var(--hero-body-offset-x)]"
            style={{
              fontSize: 'var(--english-ai-hero-body-size)',
              fontVariationSettings: "'opsz' 14",
              maxWidth: 'var(--hero-body-max-w)',
              marginTop: 'var(--english-ai-hero-title-to-body)',
              paddingBottom: 'var(--hero-body-pb)',
            }}
            data-node-id="642:1131"
          >
            Research shows 1-on-1 attention helps students outperform 98% of classroom
            learners. Zene gives
            <br />
            every student that 1-on-1 experience in speaking, reading, grammar, phonics,
            vocabulary,
            <br />
            comprehension, live conversation, and more graded by AI, supervised by your
            teachers.
          </p>

          <HeroBadgesCarousel badges={TRUST_BADGES} />

          <ul
            className="hero-badges mt-auto hidden min-w-0 grid-cols-4 xl:grid"
            style={{
              gap: 'var(--hero-badges-gap, var(--hero-gap))',
              paddingBottom: 0,
            }}
          >
            {TRUST_BADGES.map(badge => (
              <li key={badge.lines.join(' ')} className="flex min-w-0 flex-col items-center text-center">
                <img
                  src={badge.image}
                  alt={badge.alt}
                  className="object-contain"
                  style={{ width: badge.width, height: badge.height }}
                />
                <HeroBadgeText lines={badge.lines} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
