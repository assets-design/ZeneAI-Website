import {
  TRACK_ITEMS,
  TrackItem,
  TrackingItemsCarousel,
} from '@/components/home/TrackingItemsCarousel'

export function TrackingSection() {
  return (
    <section
      className="w-full px-[5px] pt-[5px]"
      aria-labelledby="tracking-heading"
      data-node-id="762:1685"
    >
      <div
        className="relative mx-auto w-full overflow-hidden section-card-shell bg-white"
        style={{ maxWidth: 'var(--section-card-max-w)' }}
      >
        <div
          style={{
            paddingLeft: 'var(--section-padding-x)',
            paddingRight: 'var(--section-padding-x)',
            paddingTop: 'var(--track-padding-top)',
            paddingBottom: 'var(--track-padding-bottom)',
          }}
        >
          <p
            className="section-eyebrow font-body uppercase text-black"
            style={{
              fontSize: 'var(--section-text-eyebrow)',
              fontVariationSettings: "'opsz' 14",
            }}
          >
            Measurable outcomes for your school
          </p>
          <h2
            id="tracking-heading"
            className="font-heading font-medium uppercase leading-none text-black"
            style={{
              fontSize: 'var(--section-text-heading)',
              marginTop: 'var(--section-eyebrow-to-heading)',
            }}
            data-node-id="762:1691"
          >
            What schools can now{' '}
            <span className="bg-[#78F3FA]" data-node-id="762:1690">
              TRACK
            </span>{' '}
            for the first time
          </h2>

          <div
            className="hidden min-w-0 grid-cols-1 xl:grid xl:grid-cols-3"
            style={{
              gap: 'var(--track-columns-gap)',
              marginTop: 'var(--track-heading-to-cards)',
            }}
          >
            {TRACK_ITEMS.map((item) => (
              <TrackItem key={item.nodeId} {...item} />
            ))}
          </div>

          <div
            className="xl:hidden"
            style={{ marginTop: 'var(--track-heading-to-cards)' }}
          >
            <TrackingItemsCarousel />
          </div>
        </div>
      </div>
    </section>
  )
}
