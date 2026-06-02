import thankYouIllustration from '@/assets/figma/thank-you/hero-illustration.png'
import { cn } from '@/lib/utils'

type ThankYouSectionProps = {
  panel?: boolean
}

function ThankYouIllustration() {
  return (
    <div
      className="thank-you-image-wrap relative mx-auto w-full shrink-0 overflow-hidden max-sm:max-w-none sm:max-w-[var(--thank-you-img-wrap-w)]"
      style={{
        width: 'var(--thank-you-img-wrap-w)',
        height: 'var(--thank-you-img-wrap-h)',
      }}
      data-node-id="735:1739"
      data-name="ChatGPT Image May 20, 2026, 05_50_08 PM 1"
    >
      <img
        src={thankYouIllustration}
        alt="Teacher celebrating a successful demo request with students and AI learning scenes"
        className="absolute max-w-none object-cover"
        style={{
          width: 'var(--thank-you-img-scale-w)',
          height: 'var(--thank-you-img-scale-h)',
          left: 'var(--thank-you-img-offset-x)',
          top: 'var(--thank-you-img-offset-y)',
        }}
      />
    </div>
  )
}

export function ThankYouSection({ panel = false }: ThankYouSectionProps) {
  return (
    <section
      className={cn(
        'w-full px-[5px]',
        panel ? 'section-scroll-panel section-scroll-panel--form' : 'pt-[5px]',
      )}
      aria-labelledby="thank-you-heading"
      data-node-id="1162:768"
    >
      <div
        className={cn(
          'thank-you-card relative mx-auto w-full overflow-hidden section-card-shell bg-white',
          panel && 'flex min-h-0 flex-col',
        )}
        style={{ maxWidth: 'var(--section-card-max-w)' }}
        data-node-id="735:1648"
      >
        <div
          className={cn(
            'thank-you-body grid min-w-0 grid-cols-1 items-center gap-[var(--thank-you-columns-gap)] xl:grid-cols-2',
            panel && 'thank-you-panel-body min-h-0 flex-1',
          )}
          style={{
            paddingLeft: 'var(--section-padding-x)',
            paddingRight: 'var(--section-padding-x)',
            paddingTop: panel
              ? 'var(--thank-you-panel-padding-top, var(--thank-you-padding-top))'
              : 'var(--thank-you-padding-top)',
            paddingBottom: panel
              ? 'var(--thank-you-panel-padding-bottom, var(--thank-you-padding-bottom))'
              : 'var(--thank-you-padding-bottom)',
          }}
        >
          <div className="flex min-w-0 flex-col justify-center">
            <h1
              id="thank-you-heading"
              className="font-heading font-medium uppercase leading-none text-black"
              style={{
                fontSize: 'var(--thank-you-title-size)',
                maxWidth: 'var(--thank-you-title-max-w)',
              }}
              data-node-id="735:1650"
            >
              Thank You!
            </h1>

            <p
              className="capitalize font-heading font-normal leading-normal text-black"
              style={{
                fontSize: 'var(--thank-you-subtitle-size)',
                maxWidth: 'var(--thank-you-subtitle-max-w)',
                marginTop: 'var(--thank-you-title-to-subtitle)',
              }}
              data-node-id="735:1657"
            >
              Your demo request has been received
            </p>

            <div
              className="capitalize font-body font-normal leading-normal text-black"
              style={{
                fontSize: 'var(--thank-you-body-size)',
                fontVariationSettings: "'opsz' 14",
                maxWidth: 'var(--thank-you-body-max-w)',
                marginTop: 'var(--thank-you-subtitle-to-body)',
              }}
              data-node-id="735:1737"
            >
              <p className="mb-0">Thank you for connecting with Zene AI.</p>
              <p style={{ marginTop: 'var(--thank-you-body-paragraph-gap)' }}>
                We&apos;re excited to help your school build future-ready students with
                AI-powered learning experiences.
              </p>
            </div>
          </div>

          <div
            className={cn(
              'thank-you-image-col flex w-full min-w-0 items-center justify-center xl:justify-end',
              panel && 'thank-you-panel-image',
            )}
          >
            <ThankYouIllustration />
          </div>
        </div>
      </div>
    </section>
  )
}
