import classroomIllustration from '@/assets/figma/the-edge/beyond-classroom/classroom-illustration.png'

const TRACKS = [
  {
    title: 'Entrepreneurship track',
    body: 'Students design and pitch a real venture. Market research, business model, prototype, presentation.',
    imageNodeId: '1126:2476',
    titleNodeId: '1126:2474',
    bodyNodeId: '1126:2475',
  },
  {
    title: 'Internship track',
    body: 'Students complete a structured internship challenge. Real problem. Real deliverable.',
    imageNodeId: '1126:2479',
    titleNodeId: '1126:2477',
    bodyNodeId: '1126:2478',
  },
] as const

const highlightStyle = {
  minHeight: 'var(--english-ai-highlight-h)',
  paddingLeft: 'var(--english-ai-highlight-pad-x)',
  paddingRight: 'var(--english-ai-highlight-pad-x)',
} as const

function TrackCard({
  title,
  body,
  imageNodeId,
  titleNodeId,
  bodyNodeId,
}: (typeof TRACKS)[number]) {
  return (
    <article className="the-edge-beyond-track flex min-w-0 flex-col items-center text-center">
      <div className="the-edge-beyond-track-image overflow-hidden" data-node-id={imageNodeId}>
        <img
          src={classroomIllustration}
          alt=""
          aria-hidden
          className="size-full object-cover"
          draggable={false}
        />
      </div>
      <h3
        className="font-heading font-medium uppercase leading-none text-black"
        style={{
          fontSize: 'var(--the-edge-beyond-track-title-size)',
          marginTop: 'var(--the-edge-beyond-image-to-title)',
        }}
        data-node-id={titleNodeId}
      >
        {title}
      </h3>
      <p
        className="mb-0 capitalize font-body font-normal leading-normal text-black"
        style={{
          fontSize: 'var(--section-text-body)',
          fontVariationSettings: "'opsz' 14",
          maxWidth: 'var(--the-edge-beyond-track-body-max-w)',
          marginTop: 'var(--the-edge-beyond-title-to-body)',
        }}
        data-node-id={bodyNodeId}
      >
        {body}
      </p>
    </article>
  )
}

export function TheEdgeBeyondClassroomSection() {
  return (
    <section
      id="the-edge-beyond-classroom"
      className="the-edge-beyond-classroom w-full px-[5px] pt-[5px]"
      aria-labelledby="the-edge-beyond-classroom-heading"
      data-node-id="1153:773"
    >
      <div
        className="relative mx-auto w-full overflow-hidden section-card-shell bg-white"
        style={{ maxWidth: 'var(--section-card-max-w)' }}
        data-node-id="1126:2468"
      >
        <div
          className="the-edge-beyond-classroom-inner"
          style={{
            paddingLeft: 'var(--section-padding-x)',
            paddingRight: 'var(--section-padding-x)',
            paddingTop: 'var(--english-ai-grid-padding-top)',
            paddingBottom: 'var(--english-ai-grid-padding-bottom)',
          }}
        >
          <p
            className="section-eyebrow uppercase font-body text-black"
            style={{
              fontSize: 'var(--section-text-eyebrow)',
              fontVariationSettings: "'opsz' 14",
            }}
            data-node-id="1126:2470"
          >
            Beyond the classroom
          </p>

          <h2
            id="the-edge-beyond-classroom-heading"
            className="section-heading max-w-[var(--english-ai-heading-max-w)] font-heading font-medium uppercase text-black"
            style={{
              fontSize: 'var(--section-text-heading)',
              marginTop: 'var(--english-ai-grid-eyebrow-to-heading)',
            }}
            data-node-id="1126:2473"
          >
            Where skills{' '}
            <span className="inline-flex items-center bg-zene-cyan" style={highlightStyle}>
              become experience.
            </span>
          </h2>

          <p
            className="normal-case font-body font-normal leading-normal text-black"
            style={{
              fontSize: 'var(--section-text-body)',
              fontVariationSettings: "'opsz' 14",
              maxWidth: 'var(--the-edge-beyond-subtitle-max-w)',
              marginTop: 'var(--english-ai-grid-heading-to-subtitle)',
            }}
            data-node-id="1126:2469"
          >
            Skills are only real when they&apos;re applied.
          </p>

          <div
            className="the-edge-beyond-tracks grid min-w-0 grid-cols-1 gap-x-[var(--the-edge-beyond-columns-gap)] gap-y-[var(--the-edge-beyond-row-gap)] md:grid-cols-2"
            style={{ marginTop: 'var(--the-edge-beyond-subtitle-to-tracks)' }}
          >
            {TRACKS.map(track => (
              <TrackCard key={track.titleNodeId} {...track} />
            ))}
          </div>

          <p
            className="text-center capitalize font-body font-semibold leading-normal text-black"
            style={{
              fontSize: 'var(--section-text-body)',
              fontVariationSettings: "'opsz' 14",
              maxWidth: 'var(--the-edge-beyond-footer-max-w)',
              marginTop: 'var(--the-edge-beyond-tracks-to-footer)',
              marginInline: 'auto',
            }}
            data-node-id="1126:2483"
          >
            Both tracks add a documented project to the student&apos;s leadership profile.
          </p>
        </div>
      </div>
    </section>
  )
}
