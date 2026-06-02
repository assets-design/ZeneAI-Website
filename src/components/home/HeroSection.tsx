import { ApplyNowButton } from '@/components/ApplyNowButton/ApplyNowButton'
import { HeroBadgesCarousel } from '@/components/home/HeroBadgesCarousel'
import { HeroRobotVideo } from '@/components/home/HeroRobotVideo'

const TRUST_BADGES = [
  {
    image: '/assets/figma/home/hero/badge-schools.png',
    alt: 'Schools cohort illustration',
    text: '{{N}} schools across India and the US currently in the Zene cohort',
    width: 'var(--hero-badge-1-w)',
    height: 'var(--hero-badge-1-h)',
  },
  {
    image: '/assets/figma/home/hero/badge-ncf.png',
    alt: 'NCF and NEP alignment illustration',
    text: 'NCF and NEP 2020 aligned your scope and sequence, mapped',
    width: 'var(--hero-badge-2-w)',
    height: 'var(--hero-badge-2-h)',
  },
  {
    image: '/assets/figma/home/hero/badge-elt.png',
    alt: 'ELT specialists illustration',
    text: 'Built by ELT specialists, AI engineers, and DPDP Act 2023 compliant',
    width: 'var(--hero-badge-3-w)',
    height: 'var(--hero-badge-3-h)',
  },
  {
    image: '/assets/figma/home/hero/badge-cefr.png',
    alt: 'CEFR progression illustration',
    text: 'Measurable CEFR-band progression proven on your principal dashboard',
    width: 'var(--hero-badge-4-w)',
    height: 'var(--hero-badge-4-h)',
  },
] as const

export function HeroSection() {
  return (
    <section
      className="hero-section w-full px-[5px]"
      aria-labelledby="hero-heading"
      data-node-id="642:1123"
    >
      <div
        className="hero-card hero-card-shell relative mx-auto flex h-full min-h-0 w-full flex-col overflow-hidden bg-white"
        style={{ maxWidth: 'var(--hero-card-max-w)' }}
      >
        <div
          className="hero-card-inner relative z-[1] flex min-h-0 flex-1 flex-col"
          style={{
            paddingLeft: 'var(--hero-padding-x)',
            paddingRight: 'var(--hero-padding-x)',
            gap: 'var(--hero-gap)',
          }}
        >
          {/* Top row — robot animation left, Apply Now right (same row, same offset) */}
          <div
            className="hero-top-row flex min-w-0 items-end justify-between gap-[clamp(8px,2vw,var(--hero-gap))]"
          >
            <HeroRobotVideo />
            <div className="hero-apply-slot shrink-0" data-node-id="780:2207">
              <ApplyNowButton />
            </div>
          </div>

          {/* Eyebrow */}
          <p
            className="font-body uppercase text-black"
            style={{
              fontSize: 'var(--hero-text-eyebrow)',
              fontVariationSettings: "'opsz' 14",
            }}
            data-node-id="751:512"
          >
            An AI English Speaking Lab for visionary schools.
          </p>

          {/* Headline */}
          <h1
            id="hero-heading"
            className="font-heading font-medium uppercase leading-none text-black"
            style={{
              fontSize: 'var(--hero-text-headline)',
              maxWidth: 'var(--hero-headline-max-w)',
            }}
            data-node-id="642:1130"
          >
            The English speaking practice your timetable cannot fit.
          </h1>

          {/* Body */}
          <p
            className="ml-0 capitalize font-heading font-normal leading-normal text-black xl:ml-[var(--hero-body-offset-x)]"
            style={{
              fontSize: 'var(--hero-text-body)',
              maxWidth: 'var(--hero-body-max-w)',
              paddingBottom: 'var(--hero-body-pb)',
            }}
            data-node-id="642:1131"
          >
            Research shows 1-on-1 attention helps students outperform 98% of classroom
            learners. Zene gives every student that 1-on-1 experience in speaking, reading,
            grammar, phonics, vocabulary, comprehension, live conversation, and more graded
            by AI, supervised by your teachers.
          </p>

          {/* Trust badges — carousel on mobile/tablet, grid on desktop */}
          <HeroBadgesCarousel badges={TRUST_BADGES} />

          <ul
            className="hero-badges mt-auto hidden grid-cols-4 xl:grid"
            style={{
              gap: 'var(--hero-gap)',
              paddingBottom: 0,
            }}
          >
            {TRUST_BADGES.map(badge => (
              <li key={badge.text} className="flex flex-col items-center text-center">
                <img
                  src={badge.image}
                  alt={badge.alt}
                  className="object-contain"
                  style={{ width: badge.width, height: badge.height }}
                />
                <p
                  className="capitalize font-body font-normal leading-normal text-black"
                  style={{
                    fontSize: 'var(--hero-text-badge)',
                    fontVariationSettings: "'opsz' 14",
                    maxWidth: 'calc(382px * var(--type-size))',
                    marginTop: 'var(--hero-gap)',
                  }}
                >
                  {badge.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
