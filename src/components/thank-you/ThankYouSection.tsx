import thankYouIllustration from '@/assets/figma/thank-you/hero-illustration.png'

export function ThankYouSection() {
  return (
    <section
      className="w-full px-[5px] pt-[5px]"
      aria-labelledby="thank-you-heading"
      data-node-id="1044:1941"
    >
      <div
        className="relative mx-auto w-full overflow-hidden rounded-[var(--section-card-radius)] bg-white"
        style={{ maxWidth: 'var(--section-card-max-w)' }}
        data-node-id="1044:1899"
      >
        <div
          className="grid min-w-0 grid-cols-1 items-center gap-[var(--thank-you-columns-gap)] sm:grid-cols-2"
          style={{
            paddingLeft: 'var(--section-padding-x)',
            paddingRight: 'var(--section-padding-x)',
            paddingTop: 'var(--thank-you-padding-top)',
            paddingBottom: 'var(--thank-you-padding-bottom)',
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
              data-node-id="1044:1900"
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
              data-node-id="1044:1905"
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
              data-node-id="1044:1930"
            >
              <p className="mb-0">Thank you for connecting with Zene AI.</p>
              <p style={{ marginTop: 'var(--thank-you-body-paragraph-gap)' }}>
                We&apos;re excited to help your school build future-ready students with
                AI-powered learning experiences.
              </p>
            </div>
          </div>

          <div
            className="flex w-full min-w-0 items-center justify-center sm:justify-end"
            data-node-id="1044:1931"
          >
            <div
              className="relative mx-auto w-full overflow-hidden max-sm:max-w-none sm:max-w-[var(--thank-you-img-wrap-w)]"
              style={{
                width: 'var(--thank-you-img-wrap-w)',
                height: 'var(--thank-you-img-wrap-h)',
              }}
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
          </div>
        </div>
      </div>
    </section>
  )
}
