import whyExistIllustration from '@/assets/figma/about/section-2/illustration.png'

export function AboutWhyExistSection() {
  return (
    <section
      className="w-full px-[5px] pt-[5px]"
      aria-labelledby="about-why-heading"
      data-node-id="1054:2191"
    >
      <div
        className="relative mx-auto w-full overflow-hidden section-card-shell bg-white"
        style={{ maxWidth: 'var(--section-card-max-w)' }}
        data-node-id="1047:1944"
      >
        <div
          className="grid min-w-0 grid-cols-1 items-center gap-x-[var(--about-why-columns-gap)] gap-y-[var(--about-why-row-gap)] sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]"
          style={{
            paddingLeft: 'var(--section-padding-x)',
            paddingRight: 'var(--section-padding-x)',
            paddingTop: 'var(--about-why-padding-top)',
            paddingBottom: 'var(--about-why-padding-bottom)',
          }}
        >
          <div className="flex min-w-0 flex-col justify-center" data-node-id="1047:2029">
            <h2
              id="about-why-heading"
              className="flex flex-wrap items-end font-heading font-medium uppercase leading-none text-black"
              style={{
                fontSize: 'var(--about-why-heading-size)',
                gap: 'var(--about-why-heading-word-gap)',
              }}
              data-node-id="1047:2030"
            >
              <span data-node-id="1047:2032">Why we</span>
              <span
                className="inline-flex items-center bg-zene-cyan"
                style={{
                  minHeight: 'var(--about-why-exist-highlight-h)',
                  paddingLeft: 'var(--about-why-exist-highlight-pad-x)',
                  paddingRight: 'var(--about-why-exist-highlight-pad-x)',
                }}
                data-node-id="1047:2033"
              >
                <span data-node-id="1047:2035">exist</span>
              </span>
            </h2>

            <div
              className="capitalize font-body font-normal leading-normal text-black"
              style={{
                fontSize: 'var(--about-why-body-size)',
                fontVariationSettings: "'opsz' 14",
                maxWidth: 'var(--about-why-body-max-w)',
                marginTop: 'var(--about-why-heading-to-body)',
              }}
              data-node-id="1047:2036"
            >
              <p className="mb-0">
                Education is changing, but most classrooms are not.
              </p>
              <p>
                We believe students need more than marks — they need skills that
                prepare them for a world driven by technology and AI.
              </p>
            </div>

            <p
              className="capitalize font-heading font-normal leading-normal text-black"
              style={{
                fontSize: 'var(--about-why-tagline-size)',
                maxWidth: 'var(--about-why-tagline-max-w)',
                marginTop: 'var(--about-why-body-to-tagline)',
              }}
              data-node-id="1047:2031"
            >
              Zene AI is built to bridge that gap.
            </p>
          </div>

          <div
            className="flex w-full min-w-0 items-center justify-center"
            data-node-id="1047:2071"
          >
            <img
              src={whyExistIllustration}
              alt="Students collaborating with Zene AI around a laptop in a futuristic classroom"
              className="mx-auto h-auto w-full max-w-[var(--about-why-illustration-w)] object-contain"
              style={{ maxHeight: 'var(--about-why-illustration-h)' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
