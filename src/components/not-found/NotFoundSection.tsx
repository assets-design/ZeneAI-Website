import astronautRobot from '@/assets/figma/not-found/astronaut-robot.png'
import { cn } from '@/lib/utils'

type NotFoundSectionProps = {
  panel?: boolean
}

function NotFoundIllustration() {
  return (
    <div
      className="not-found-image-wrap relative mx-auto w-full shrink-0 overflow-hidden max-xl:max-w-none xl:max-w-[var(--not-found-img-wrap-w)]"
      style={{
        width: 'var(--not-found-img-wrap-w)',
        height: 'var(--not-found-img-wrap-h)',
      }}
      data-node-id="735:1789"
      data-name="ChatGPT Image May 20, 2026, 06_05_44 PM 1"
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
  )
}

export function NotFoundSection({ panel = false }: NotFoundSectionProps) {
  return (
    <section
      className={cn(
        'w-full px-[5px]',
        panel ? 'section-scroll-panel section-scroll-panel--form' : 'pt-[5px]',
      )}
      aria-labelledby="not-found-heading"
      data-node-id="1029:1893"
    >
      <div
        className={cn(
          'not-found-card relative mx-auto w-full overflow-hidden section-card-shell bg-white',
          panel && 'flex min-h-0 flex-col',
        )}
        style={{ maxWidth: 'var(--section-card-max-w)' }}
        data-node-id="735:1743"
      >
        <div
          className={cn(
            'not-found-body grid min-w-0 grid-cols-1 items-center gap-[var(--not-found-columns-gap)] xl:grid-cols-2',
            panel && 'not-found-panel-body min-h-0 flex-1',
          )}
          style={{
            paddingLeft: 'var(--section-padding-x)',
            paddingRight: 'var(--section-padding-x)',
            paddingTop: panel
              ? 'var(--not-found-panel-padding-top, var(--not-found-padding-top))'
              : 'var(--not-found-padding-top)',
            paddingBottom: panel
              ? 'var(--not-found-panel-padding-bottom, var(--not-found-padding-bottom))'
              : 'var(--not-found-padding-bottom)',
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
            className={cn(
              'not-found-image-col flex w-full min-w-0 items-center justify-center xl:justify-end',
              panel && 'not-found-panel-image',
            )}
          >
            <NotFoundIllustration />
          </div>
        </div>
      </div>
    </section>
  )
}
