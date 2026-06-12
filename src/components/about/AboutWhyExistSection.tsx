import aboutStoryIllustration from '@/assets/figma/about/story-illustration.gif'
import './AboutWhyExistSection.css'
import { useEffect, useState } from 'react'

export function AboutWhyExistSection() {
  const [isDesktop, setIsDesktop] = useState<boolean>(false)

  useEffect(() => {
    function update() {
      if (typeof window === 'undefined') return
      setIsDesktop(window.matchMedia('(min-width: 640px)').matches)
    }

    update()
    const m = window.matchMedia('(min-width: 640px)')
    const listener = () => update()
    m.addEventListener?.('change', listener)
    // fallback for older browsers
    if (!m.addEventListener) m.addListener?.(listener)
    return () => {
      m.removeEventListener?.('change', listener)
      if (!m.removeEventListener) m.removeListener?.(listener)
    }
  }, [])

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
              className="section-eyebrow font-body uppercase text-black"
              style={{
                fontSize: 'var(--section-text-eyebrow)',
                fontVariationSettings: "'opsz' 14",
              }}
            >
              The story
            </p>

            <h2
              id="about-why-heading"
              className="font-heading font-medium uppercase leading-none text-black"
              style={{
                fontSize: 'var(--section-text-heading)',
                marginTop: 'var(--about-why-eyebrow-to-heading)',
              }}
              data-node-id="1047:2030"
            >
              <span className="max-sm:whitespace-normal sm:whitespace-nowrap">
                Zene was born to
              </span>
              <br />
              <span
                className="heading-highlight"
                data-node-id="1047:2033"
              >
                <span data-node-id="1047:2035">create impact.</span>
              </span>
            </h2>

            <div
              className="about-why-body about-why-body-desc normal-case font-body leading-normal text-black sm:text-[22px] sm:font-semibold"
              style={{
                ...(isDesktop ? { fontSize: '22px', fontWeight: 600 } : {}),
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
            <img
              src={aboutStoryIllustration}
              alt="Students collaborating with the Zene AI robot at a learning table"
              className="about-why-gif block h-auto max-w-full object-contain"
              style={{
                width: 'var(--about-why-video-w)',
                maxHeight: 'var(--about-why-video-h)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
