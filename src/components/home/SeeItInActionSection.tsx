const FEATURES = [
  {
    image: '/assets/figma/home/section-3/feature-speaking.png',
    title: 'Speaking-first.',
    body: "Every session starts with the student's voice.",
    nodeId: '759:1670',
    imageNodeId: '751:1654',
    textNodeId: '751:1657',
  },
  {
    image: '/assets/figma/home/section-3/feature-teachers.png',
    title: 'Teachers get the data.',
    body: 'Not just the student. Not just the parent.',
    nodeId: '759:1669',
    imageNodeId: '751:1663',
    textNodeId: '751:1659',
  },
  {
    image: '/assets/figma/home/section-3/feature-principals.png',
    title: 'Principals get the report.',
    body: 'Board-ready, every term.',
    nodeId: '759:1668',
    imageNodeId: '751:1666',
    textNodeId: '751:1661',
  },
] as const

function ActionFeature({
  image,
  title,
  body,
  nodeId,
  imageNodeId,
  textNodeId,
}: (typeof FEATURES)[number]) {
  return (
    <article className="min-w-0" data-node-id={nodeId}>
      <img
        src={image}
        alt=""
        aria-hidden
        className="max-w-full object-contain"
        style={{
          width: 'var(--action-feature-img-w)',
          height: 'var(--action-feature-img-h)',
        }}
        data-node-id={imageNodeId}
      />
      <p
        className="capitalize font-body font-normal leading-normal text-black"
        style={{
          fontSize: 'var(--section-text-body)',
          fontVariationSettings: "'opsz' 14",
          marginTop: 'var(--action-feature-text-gap)',
        }}
        data-node-id={textNodeId}
      >
        <span className="font-semibold">{title}</span>
        <br />
        {body}
      </p>
    </article>
  )
}

export function SeeItInActionSection() {
  return (
    <section
      className="w-full px-[5px] pt-[5px]"
      aria-labelledby="see-it-in-action-heading"
      data-node-id="642:1125"
    >
      <div
        className="relative mx-auto w-full overflow-hidden rounded-[var(--section-card-radius)] bg-white"
        style={{ maxWidth: 'var(--section-card-max-w)' }}
      >
        <div
          className="flex flex-col"
          style={{
            paddingLeft: 'var(--section-padding-x)',
            paddingRight: 'var(--section-padding-x)',
            paddingTop: 'var(--action-padding-top)',
            paddingBottom: 'var(--action-padding-bottom)',
          }}
        >
          <p
            className="font-body uppercase text-black"
            style={{
              fontSize: 'var(--section-text-eyebrow)',
              fontVariationSettings: "'opsz' 14",
            }}
            data-node-id="751:1648"
          >
            See it in action
          </p>

          <div
            className="grid min-w-0 items-start xl:grid-cols-[13fr_7fr]"
            style={{
              gap: 'var(--action-columns-gap)',
              marginTop: 'var(--section-gap)',
            }}
          >
            {/* Left 70% — heading + main demo */}
            <div className="min-w-0">
              <h2
                id="see-it-in-action-heading"
                className="font-heading font-medium uppercase leading-none text-black"
                style={{
                  fontSize: 'var(--section-text-heading)',
                  maxWidth: '100%',
                }}
                data-node-id="751:1650"
              >
                Watch what{' '}
                <span className="bg-[#78F3FA]" data-node-id="751:1649">
                  your school
                </span>{' '}
                has never been able to measure.
              </h2>

              <div
                className="w-full overflow-hidden shadow-[0_0_6px_rgba(0,0,0,0.25)]"
                style={{
                  height: 'var(--action-demo-h)',
                  marginTop: 'var(--action-heading-to-demo)',
                  borderRadius: 'var(--action-demo-radius)',
                }}
                data-node-id="642:1324"
              >
                <img
                  src="/assets/figma/home/section-3/main-comp.png"
                  alt="Zene AI speaking lab demo with student and robot"
                  className="size-full object-cover"
                />
              </div>
            </div>

            {/* Right 30% — feature highlights */}
            <div
              className="flex min-w-0 flex-col"
              style={{ gap: 'var(--action-feature-gap)' }}
            >
              {FEATURES.map(feature => (
                <ActionFeature key={feature.title} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
