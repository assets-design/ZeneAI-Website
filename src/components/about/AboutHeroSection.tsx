import robotSprite from '@/assets/figma/about/robot-sprite.png'
import { ApplyNowButton } from '@/components/ApplyNowButton/ApplyNowButton'

export function AboutHeroSection() {
  return (
    <section
      id="about-hero"
      className="flex h-full min-h-0 w-full flex-col px-[5px] pt-[5px]"
      aria-labelledby="about-hero-heading"
      data-node-id="1047:2176"
    >
      <div
        className="about-hero-card relative mx-auto flex h-full min-h-0 w-full flex-1 flex-col section-card-shell bg-white"
        style={{ maxWidth: 'var(--section-card-max-w)' }}
        data-node-id="1047:1943"
      >
        <div
          className="about-hero-inner relative flex min-h-0 flex-1 flex-col"
          style={{
            paddingLeft: 'var(--section-padding-x)',
            paddingRight: 'var(--section-padding-x)',
            paddingTop: 'var(--about-hero-padding-top)',
            paddingBottom: 'var(--about-hero-padding-bottom)',
            gap: 'var(--hero-gap)',
          }}
        >
          <div
            className="hero-top-row flex min-w-0 items-end justify-between gap-[clamp(8px,2vw,var(--hero-gap))]"
            data-node-id="1047:2005"
          >
            <div
              className="hero-top-row-spacer shrink-0"
              aria-hidden
              style={{ width: 'var(--hero-decorative-w)' }}
            />
            <div className="hero-apply-slot shrink-0">
              <ApplyNowButton className="max-w-full shrink-0" />
            </div>
          </div>

          <div
            className="about-hero-body relative z-[1] min-w-0"
            style={{ marginTop: 'var(--about-hero-text-offset-top)' }}
          >
            <p
              className="section-eyebrow font-body uppercase text-black"
              style={{
                fontSize: 'var(--section-text-eyebrow)',
                fontVariationSettings: "'opsz' 14",
              }}
            >
              About Zene
            </p>

            <h1
              id="about-hero-heading"
              className="font-heading font-medium uppercase leading-none text-black"
              style={{
                fontSize: 'var(--about-hero-title-size)',
                maxWidth: 'var(--about-hero-title-max-w)',
                marginTop: 'var(--about-hero-eyebrow-to-heading)',
              }}
              data-node-id="1047:1949"
            >
              <span className="block max-sm:whitespace-normal sm:whitespace-nowrap">
                Built to give every student the
              </span>
              <span className="block max-sm:whitespace-normal sm:whitespace-nowrap">
                practice classroom time cannot.
              </span>
            </h1>

            <p
              className="w-full max-w-[var(--about-hero-subtitle-max-w)] font-heading font-normal leading-normal text-black"
              style={{
                fontSize: 'var(--about-hero-subtitle-size)',
                marginTop: 'var(--about-hero-title-to-subtitle)',
                paddingLeft: 'var(--about-hero-subtitle-indent)',
              }}
              data-node-id="1047:1950"
            >
              <span className="block max-sm:whitespace-normal sm:whitespace-nowrap">
                AI-powered English speaking, world-class coding, and life-readiness —
              </span>
              <span className="block max-sm:whitespace-normal sm:whitespace-nowrap">
                for every student, every day.
              </span>
            </p>
          </div>
        </div>

        <div
          className="about-hero-robot pointer-events-none absolute z-[2]"
          style={{
            right: 'calc(var(--section-padding-x) + var(--about-hero-robot-padding-right))',
            bottom: 'var(--about-hero-robot-inset-bottom)',
          }}
          data-node-id="1047:2072"
        >
          <div
            className="about-hero-robot-wrap relative shrink-0 overflow-hidden"
            style={{
              width: 'var(--about-hero-robot-w)',
              height: 'var(--about-hero-robot-h)',
            }}
          >
            <img
              src={robotSprite}
              alt="Zene AI robot mascot"
              className="h-full w-full object-cover object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
