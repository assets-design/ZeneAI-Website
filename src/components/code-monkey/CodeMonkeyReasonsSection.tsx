const REASONS = [
  {
    number: '01.',
    title: 'Game-based, but real coding.',
    body: 'Students write actual CoffeeScript and Python not drag-and-drop blocks dressed up to look like code.',
    numberNodeId: '1297:1104',
    titleNodeId: '1294:846',
    bodyNodeId: '1294:847',
  },
  {
    number: '02.',
    title: 'Teacher-friendly. No coding background needed.',
    body: 'Lesson plans, auto-grading, and a teacher dashboard mean any teacher can run a coding class even on day one.',
    numberNodeId: '1297:1105',
    titleNodeId: '1297:1099',
    bodyNodeId: '1297:1100',
  },
  {
    number: '03.',
    title: 'K–12 progression. No gaps.',
    body: 'One curriculum from Pre-K to Grade 12. Students never outgrow it.',
    numberNodeId: '1297:1106',
    titleNodeId: '1297:1102',
    bodyNodeId: '1297:1103',
  },
  {
    number: '04.',
    title: 'Aligned to global computer science standards.',
    body: "CSTA, ISTE, AP CS Principles. Your school's coding program holds up internationally.",
    numberNodeId: '1297:1107',
    titleNodeId: '1297:1108',
    bodyNodeId: '1297:1109',
  },
] as const

function ReasonItem({
  number,
  title,
  body,
  numberNodeId,
  titleNodeId,
  bodyNodeId,
}: (typeof REASONS)[number]) {
  return (
    <article className="code-monkey-reasons-item min-w-0">
      <p
        className="code-monkey-reasons-number mb-0 font-heading font-bold uppercase leading-none text-zene-blue"
        style={{ fontSize: 'var(--code-monkey-reasons-number-size)' }}
        data-node-id={numberNodeId}
      >
        {number}
      </p>
      <h3
        className="mb-0 font-body font-semibold capitalize leading-normal text-black"
        style={{
          fontSize: 'var(--section-text-body)',
          fontVariationSettings: "'opsz' 14",
          marginTop: 'var(--code-monkey-reasons-number-to-title)',
        }}
        data-node-id={titleNodeId}
      >
        {title}
      </h3>
      <p
        className="mb-0 font-body font-normal capitalize leading-normal text-black"
        style={{
          fontSize: 'var(--section-text-body)',
          fontVariationSettings: "'opsz' 14",
          marginTop: 'var(--code-monkey-reasons-title-to-body)',
        }}
        data-node-id={bodyNodeId}
      >
        {body}
      </p>
    </article>
  )
}

export function CodeMonkeyReasonsSection() {
  return (
    <section
      id="code-monkey-reasons"
      className="code-monkey-reasons w-full px-[5px] pt-[5px]"
      aria-labelledby="code-monkey-reasons-heading"
      data-node-id="1326:818"
    >
      <div
        className="relative mx-auto w-full overflow-hidden section-card-shell bg-white"
        style={{ maxWidth: 'var(--section-card-max-w)' }}
      >
        <div
          className="code-monkey-reasons-inner"
          style={{
            paddingLeft: 'var(--section-padding-x)',
            paddingRight: 'var(--section-padding-x)',
            paddingTop: 'var(--english-ai-grid-padding-top)',
            paddingBottom: 'var(--english-ai-grid-padding-bottom)',
          }}
        >
          <p
            className="section-eyebrow font-body uppercase text-black"
            style={{
              fontSize: 'var(--section-text-eyebrow)',
              fontVariationSettings: "'opsz' 14",
            }}
            data-node-id="1294:825"
          >
            Built for classrooms
          </p>

          <h2
            id="code-monkey-reasons-heading"
            className="section-heading max-w-[var(--english-ai-heading-max-w)] font-heading font-medium uppercase text-black"
            style={{
              fontSize: 'var(--section-text-heading)',
              marginTop: 'var(--english-ai-grid-eyebrow-to-heading)',
            }}
            data-node-id="1294:888"
          >
            Four reasons{' '}
            <span className="heading-highlight">
              schools choose
            </span>{' '}
            Code Monkey.
          </h2>

          <p
            className="capitalize font-body font-normal leading-normal text-black"
            style={{
              fontSize: 'var(--section-text-body)',
              fontVariationSettings: "'opsz' 14",
              maxWidth: 'var(--code-monkey-reasons-subtitle-max-w)',
              marginTop: 'var(--english-ai-grid-heading-to-subtitle)',
            }}
            data-node-id="1294:801"
          >
            Zene does not replace your English curriculum. It amplifies it.
          </p>

          <div
            className="code-monkey-reasons-grid grid min-w-0 grid-cols-1 md:grid-cols-2"
            style={{
              marginTop: 'var(--code-monkey-reasons-subtitle-to-grid)',
              columnGap: 'var(--code-monkey-reasons-columns-gap)',
              rowGap: 'var(--code-monkey-reasons-row-gap)',
            }}
          >
            {REASONS.map(reason => (
              <ReasonItem key={reason.numberNodeId} {...reason} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
