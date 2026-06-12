import platformMockup from '@/assets/figma/the-edge/platform-mockup.png'
import { SectionEyebrow } from '@/components/SectionEyebrow'

export function TheEdgePlatformSection() {
  return (
    <section
      id="the-edge-platform"
      className="program-platform--the-edge w-full px-[5px] pt-[5px]"
      aria-labelledby="the-edge-platform-heading"
      data-node-id="1150:770"
    >
      <div
        className="relative mx-auto w-full overflow-hidden section-card-shell bg-white"
        style={{ maxWidth: 'var(--section-card-max-w)' }}
        data-node-id="1100:2048"
      >
        <div
          className="the-edge-platform-inner"
          style={{
            paddingLeft: 'var(--section-padding-x)',
            paddingRight: 'var(--section-padding-x)',
            paddingTop: 'var(--english-ai-platform-padding-top)',
            paddingBottom: 'var(--english-ai-platform-padding-bottom)',
          }}
        >
          <div className="the-edge-platform-grid grid min-w-0 items-start gap-y-[var(--english-ai-platform-row-gap)] lg:grid-cols-[minmax(0,688px)_1fr] lg:gap-x-[var(--english-ai-platform-columns-gap)]">
            <div className="the-edge-platform-copy min-w-0 lg:col-start-1 lg:row-start-1">
              <SectionEyebrow data-node-id="1100:2162">Platform intro</SectionEyebrow>

              <h2
                id="the-edge-platform-heading"
                className="section-heading max-w-[var(--english-ai-heading-max-w)] font-heading font-medium uppercase text-black"
                style={{
                  fontSize: 'var(--section-text-heading)',
                  marginTop: 'var(--english-ai-platform-eyebrow-to-content)',
                }}
                data-node-id="1100:2163"
              >
                <span className="whitespace-nowrap">One platform. Every</span>
                <br />
                <span className="whitespace-nowrap">
                  <span className="heading-highlight">
                    leadership skill
                  </span>{' '}
                  measured.
                </span>
              </h2>

              <p
                className="normal-case font-body font-normal leading-normal text-black"
                style={{
                  fontSize: 'var(--section-text-body)',
                  fontVariationSettings: "'opsz' 14",
                  maxWidth: 'var(--english-ai-platform-body-max-w)',
                  marginTop: 'var(--english-ai-platform-heading-to-body)',
                }}
                data-node-id="1100:2060"
              >
                Communication, resilience, financial literacy, entrepreneurship, and active citizenship
                — one structured programme from middle school to graduation. A leadership profile report
                is generated after every module. Non-academic growth is measured with the same rigour
                as academic performance.
              </p>
            </div>

            <p
              className="the-edge-platform-tagline font-heading font-normal normal-case leading-normal text-black lg:col-start-1 lg:row-start-2"
              style={{
                fontSize: 'var(--code-monkey-platform-tagline-size, var(--english-ai-platform-tagline-size))',
              }}
              data-node-id="1100:2059"
            >
              <span className="block whitespace-nowrap max-md:whitespace-normal">
                Built to develop leaders.
              </span>
              <span className="block whitespace-nowrap max-md:whitespace-normal">
                Designed to prove it with data.
              </span>
            </p>

            <div
              className="the-edge-platform-mockup relative mx-auto min-w-0 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:justify-self-end"
              style={{
                width: 'var(--the-edge-platform-mockup-w)',
                maxWidth: '100%',
                height: 'var(--the-edge-platform-mockup-h)',
              }}
              data-node-id="1100:2237"
            >
              <img
                src={platformMockup}
                alt="The Edge platform on desktop, tablet, and mobile"
                className="size-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
