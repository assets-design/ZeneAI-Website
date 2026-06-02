const ABOUT_WHY_VIDEO = '/assets/figma/home/section-5/monitor-learning-progress.mp4'

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
            <p
              className="font-body uppercase text-black"
              style={{
                fontSize: 'var(--section-text-eyebrow)',
                fontVariationSettings: "'opsz' 14",
              }}
            >
              The story
            </p>

            <h2
              id="about-why-heading"
              className="flex flex-wrap items-end font-heading font-medium uppercase leading-none text-black"
              style={{
                fontSize: 'var(--about-why-heading-size)',
                gap: 'var(--about-why-heading-word-gap)',
                marginTop: 'var(--about-why-eyebrow-to-heading)',
              }}
              data-node-id="1047:2030"
            >
              <span className="block max-sm:whitespace-normal sm:whitespace-nowrap">
                Zene was born to
              </span>
              <span
                className="inline-flex items-center bg-zene-cyan"
                style={{
                  minHeight: 'var(--about-why-exist-highlight-h)',
                  paddingLeft: 'var(--about-why-exist-highlight-pad-x)',
                  paddingRight: 'var(--about-why-exist-highlight-pad-x)',
                }}
                data-node-id="1047:2033"
              >
                <span data-node-id="1047:2035">create impact.</span>
              </span>
            </h2>

            <div
              className="font-body font-medium leading-normal text-black"
              style={{
                fontSize: 'var(--about-why-body-size)',
                fontWeight: 'var(--about-why-body-weight)',
                fontVariationSettings: "'opsz' 14",
                maxWidth: 'var(--about-why-body-max-w)',
                marginTop: 'var(--about-why-heading-to-body)',
              }}
              data-node-id="1047:2036"
            >
              <p className="mb-0">
                In a world driven by AI, communication and leadership are non-negotiable.
                Yet most students still leave school without either.
              </p>
              <p className="mb-0" style={{ marginTop: 'var(--about-why-body-paragraph-gap)' }}>
                The classroom did not fail them. The math did. 30 students. 40 minutes. One
                teacher cannot give every student the individual practice these skills demand.
              </p>
            </div>

            <p
              className="font-heading font-normal leading-normal text-black"
              style={{
                fontSize: 'var(--about-why-tagline-size)',
                maxWidth: 'var(--about-why-tagline-max-w)',
                marginTop: 'var(--about-why-body-to-tagline)',
              }}
              data-node-id="1047:2031"
            >
              Zene was built to change that math.
            </p>
          </div>

          <div
            className="flex w-full min-w-0 items-center justify-center"
            data-node-id="1047:2071"
          >
            <div
              className="about-why-video flex w-full items-center justify-center overflow-hidden bg-black shadow-[0_0_6px_rgba(0,0,0,0.25)]"
              style={{
                maxWidth: 'var(--about-why-video-w)',
                height: 'var(--about-why-video-h)',
                borderRadius: 'var(--about-why-video-radius)',
              }}
            >
              <video
                src={ABOUT_WHY_VIDEO}
                autoPlay
                muted
                loop
                playsInline
                className="size-full object-contain object-center"
                aria-label="Zene AI classroom learning in action"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
