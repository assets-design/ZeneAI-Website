import astronautRobot from '@/assets/figma/not-found/astronaut-robot.png'

export function NotFoundPage() {
  return (
    <section
      className="w-full px-[5px] pt-[5px]"
      aria-labelledby="not-found-heading"
      data-node-id="1029:1894"
    >
      <div
        className="relative mx-auto w-full overflow-hidden rounded-[var(--section-card-radius)] bg-white"
        style={{ maxWidth: 'var(--section-card-max-w)' }}
        data-node-id="735:1743"
      >
        <div
          className="grid min-w-0 items-center gap-[var(--not-found-columns-gap)] max-xl:grid-cols-1 xl:grid-cols-2"
          style={{
            paddingLeft: 'var(--section-padding-x)',
            paddingRight: 'var(--section-padding-x)',
            paddingTop: 'var(--not-found-padding-top)',
            paddingBottom: 'var(--not-found-padding-bottom)',
          }}
        >
          <div className="flex min-w-0 flex-col justify-center">
            <h1
              id="not-found-heading"
              className="font-heading font-medium uppercase leading-none text-black"
              style={{
                fontSize: 'var(--not-found-title-size)',
                maxWidth: 'var(--not-found-title-max-w)',
              }}
              data-node-id="735:1744"
            >
              Oops! Page Not Found
            </h1>

            <p
              className="capitalize font-heading font-normal leading-normal text-black"
              style={{
                fontSize: 'var(--not-found-subtitle-size)',
                maxWidth: 'var(--not-found-subtitle-max-w)',
                marginTop: 'var(--not-found-title-to-subtitle)',
              }}
              data-node-id="735:1749"
            >
              Looks like this page took a different route
            </p>

            <div
              className="capitalize font-body font-normal leading-normal text-black"
              style={{
                fontSize: 'var(--not-found-body-size)',
                fontVariationSettings: "'opsz' 14",
                maxWidth: 'var(--not-found-body-max-w)',
                marginTop: 'var(--not-found-subtitle-to-body)',
              }}
              data-node-id="735:1774"
            >
              <p className="mb-0">
                The page you&apos;re looking for may have been moved, renamed, or no longer exists.
              </p>
              <p style={{ marginTop: 'var(--not-found-body-paragraph-gap)' }}>
                But don&apos;t worry your journey toward future-ready learning continues with Zene AI.
              </p>
            </div>
          </div>

          <div
            className="flex w-full items-center justify-center"
            data-node-id="735:1789"
          >
            <div
              className="relative mx-auto w-full max-w-[var(--not-found-img-wrap-w)] overflow-hidden"
              style={{
                width: 'var(--not-found-img-wrap-w)',
                height: 'var(--not-found-img-wrap-h)',
              }}
            >
              <img
                src={astronautRobot}
                alt="Astronaut student with Zene robot looking at a star map"
                className="absolute max-w-none object-cover"
                style={{
                  width: 'var(--not-found-img-scale-w)',
                  height: 'var(--not-found-img-scale-h)',
                  left: 0,
                  top: 'var(--not-found-img-offset-y)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
