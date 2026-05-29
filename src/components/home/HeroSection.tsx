import { ApplyNowButton } from '@/components/ApplyNowButton/ApplyNowButton'
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
      className="w-full px-[5px]"
      aria-labelledby="hero-heading"
      data-node-id="642:1123"
    >
      <div
        className="relative mx-auto w-full overflow-hidden rounded-[var(--hero-card-radius)] bg-white pb-[var(--hero-gap)]"
        style={{ maxWidth: 'var(--hero-card-max-w)' }}
      >
        <div
          className="relative z-[1] flex flex-col"
          style={{
            paddingLeft: 'var(--hero-padding-x)',
            paddingRight: 'var(--hero-padding-x)',
            gap: 'var(--hero-gap)',
            paddingTop: 'var(--hero-gap)',
          }}
        >
          {/* Top row — robot animation left, Apply Now right */}
          <div
            className="flex items-start justify-between"
            style={{
              gap: 'var(--hero-gap)',
              minHeight: 'var(--apply-btn-h)',
            }}
          >
            <HeroRobotVideo />
            <div className="shrink-0" data-node-id="780:2207">
              <ApplyNowButton className="max-w-full" />
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

          {/* Trust badges */}
          <ul
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4"
            style={{ gap: 'var(--hero-gap)' }}
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
                    maxWidth: 'calc(382px * var(--header-font-scale))',
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
