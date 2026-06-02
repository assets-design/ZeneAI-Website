import robotSprite from '@/assets/figma/about/robot-sprite.png'
import { ApplyNowButton } from '@/components/ApplyNowButton/ApplyNowButton'

export function AboutHeroSection() {
  return (
    <section
      className="w-full px-[5px] pt-[5px]"
      aria-labelledby="about-hero-heading"
      data-node-id="1047:2176"
    >
      <div
        className="relative mx-auto w-full overflow-hidden section-card-shell bg-white"
        style={{ maxWidth: 'var(--section-card-max-w)' }}
        data-node-id="1047:1943"
      >
        <div
          className="about-hero-inner relative flex flex-col"
          style={{
            paddingLeft: 'var(--section-padding-x)',
            paddingRight: 'var(--section-padding-x)',
            paddingTop: 'var(--about-hero-padding-top)',
            paddingBottom: 'var(--about-hero-padding-bottom)',
            gap: 'var(--hero-gap)',
          }}
        >
          <div
            className="about-hero-top-row flex min-w-0 items-end justify-end"
            style={{ marginRight: 'var(--about-hero-apply-margin-right)' }}
            data-node-id="1047:2005"
          >
            <div className="hero-apply-slot shrink-0">
              <ApplyNowButton className="max-w-full shrink-0" />
            </div>
          </div>

          <div
            className="relative z-[1] grid min-w-0 grid-cols-1 items-end gap-x-[var(--about-hero-columns-gap)] gap-y-[var(--about-hero-row-gap)] sm:grid-cols-[minmax(0,1fr)_auto]"
          >
            <div className="min-w-0">
              <h1
                id="about-hero-heading"
                className="font-heading font-medium uppercase leading-none text-black"
                style={{
                  fontSize: 'var(--about-hero-title-size)',
                  maxWidth: 'var(--about-hero-title-max-w)',
                }}
                data-node-id="1047:1949"
              >
                <span className="block">Building future-ready learners</span>
                <span className="block max-sm:whitespace-normal sm:whitespace-nowrap">
                  with real-world skills
                </span>
              </h1>

              <p
                className="w-full max-w-full capitalize font-heading font-normal leading-normal text-black sm:w-max sm:max-w-[var(--about-hero-subtitle-max-w)]"
                style={{
                  fontSize: 'var(--about-hero-subtitle-size)',
                  marginTop: 'var(--about-hero-title-to-subtitle)',
                  paddingLeft: 'var(--about-hero-subtitle-indent)',
                }}
                data-node-id="1047:1950"
              >
                <span className="block max-sm:whitespace-normal sm:whitespace-nowrap">
                  Zene AI helps schools move beyond traditional learning by introducing
                </span>
                <span className="block max-sm:whitespace-normal sm:whitespace-nowrap">
                  structured, AI-powered programs that build thinking, creativity, and
                </span>
                <span className="block max-sm:whitespace-normal sm:whitespace-nowrap">
                  problem-solving skills.
                </span>
              </p>
            </div>

            <div
              className="flex w-full shrink-0 justify-end sm:w-auto"
              style={{ marginTop: 'var(--about-hero-robot-margin-top)' }}
              data-node-id="1047:2072"
            >
              <div
                className="relative overflow-hidden"
                style={{
                  width: 'var(--about-hero-robot-wrap-w)',
                  height: 'var(--about-hero-robot-wrap-h)',
                }}
              >
                <img
                  src={robotSprite}
                  alt="Zene AI robot mascot"
                  className="absolute max-w-none object-cover"
                  style={{
                    width: 'var(--about-hero-robot-scale-w)',
                    height: 'var(--about-hero-robot-scale-h)',
                    left: 'var(--about-hero-robot-offset-x)',
                    top: 'var(--about-hero-robot-offset-y)',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
