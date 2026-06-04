const ROWS = [
  {
    role: 'Student',
    roleNodeId: '1134:3506',
    without: 'Life skills addressed in assemblies or skipped.',
    withoutNodeId: '1134:3504',
    with: 'A structured Grade 6–12 program with a downloadable leadership profile for college applications.',
    withNodeId: '1134:3505',
  },
  {
    role: 'Teacher',
    roleNodeId: '1134:3509',
    without: 'No framework. Falls back on anecdotes or personality tests.',
    withoutNodeId: '1134:3507',
    with: 'Ready-made modules and observable-behavior tracking. No new prep.',
    withNodeId: '1134:3508',
  },
  {
    role: 'Principal',
    roleNodeId: '1134:3512',
    without: 'Life skills claimed in the brochure, not measured in the report.',
    withoutNodeId: '1134:3510',
    with: 'A board-defensible curriculum with 0.84 assessment reliability.',
    withNodeId: '1134:3511',
  },
] as const

type ComparisonRow = (typeof ROWS)[number]

function ComparisonMobileCard({
  role,
  roleNodeId,
  without,
  withoutNodeId,
  with: withEdge,
  withNodeId,
}: ComparisonRow) {
  return (
    <article
      className="overflow-hidden rounded-[var(--english-ai-comparison-table-radius)] border border-black/10"
      data-node-id={roleNodeId}
    >
      <div
        className="bg-[#177EC0] font-heading font-medium uppercase leading-none text-white"
        style={{
          fontSize: 'var(--section-text-body)',
          paddingLeft: 'var(--english-ai-comparison-cell-px)',
          paddingRight: 'var(--english-ai-comparison-cell-px)',
          paddingTop: 'var(--english-ai-comparison-mobile-label-py)',
          paddingBottom: 'var(--english-ai-comparison-mobile-label-py)',
        }}
      >
        {role}
      </div>
      <div
        style={{
          paddingLeft: 'var(--english-ai-comparison-cell-px)',
          paddingRight: 'var(--english-ai-comparison-cell-px)',
          paddingTop: 'var(--english-ai-comparison-mobile-body-py)',
          paddingBottom: 'var(--english-ai-comparison-mobile-body-py)',
        }}
      >
        <p className="the-edge-comparison-mobile-col-label mb-0 font-heading font-medium uppercase leading-none text-black">
          Without The Edge
        </p>
        <p
          className="mb-0 normal-case font-body font-normal leading-normal text-black"
          style={{
            fontSize: 'var(--section-text-body)',
            fontVariationSettings: "'opsz' 14",
            marginTop: 'var(--english-ai-comparison-mobile-text-gap)',
          }}
          data-node-id={withoutNodeId}
        >
          {without}
        </p>
        <p
          className="the-edge-comparison-mobile-col-label mb-0 font-heading font-medium uppercase leading-none text-black"
          style={{ marginTop: 'var(--english-ai-comparison-mobile-block-gap)' }}
        >
          With The Edge
        </p>
        <p
          className="mb-0 normal-case font-body font-normal leading-normal text-black"
          style={{
            fontSize: 'var(--section-text-body)',
            fontVariationSettings: "'opsz' 14",
            marginTop: 'var(--english-ai-comparison-mobile-text-gap)',
          }}
          data-node-id={withNodeId}
        >
          {withEdge}
        </p>
      </div>
    </article>
  )
}

export function TheEdgeComparisonSection() {
  return (
    <section
      id="the-edge-comparison"
      className="the-edge-comparison w-full px-[5px] pt-[5px]"
      aria-labelledby="the-edge-comparison-heading"
      data-node-id="1157:776"
    >
      <div
        className="relative mx-auto w-full overflow-hidden section-card-shell bg-white"
        style={{ maxWidth: 'var(--section-card-max-w)' }}
        data-node-id="1134:3495"
      >
        <div
          className="the-edge-comparison-inner"
          style={{
            paddingLeft: 'var(--section-padding-x)',
            paddingRight: 'var(--section-padding-x)',
            paddingTop: 'var(--english-ai-comparison-padding-top)',
            paddingBottom: 'var(--english-ai-comparison-padding-bottom)',
          }}
        >
          <p
            className="section-eyebrow uppercase font-body text-black"
            style={{
              fontSize: 'var(--section-text-eyebrow)',
              fontVariationSettings: "'opsz' 14",
            }}
            data-node-id="1134:3497"
          >
            The difference, side by side
          </p>

          <h2
            id="the-edge-comparison-heading"
            className="section-heading max-w-[var(--english-ai-heading-max-w)] font-heading font-medium uppercase leading-none text-black"
            style={{
              fontSize: 'var(--section-text-heading)',
              marginTop: 'var(--english-ai-comparison-eyebrow-to-heading)',
            }}
            data-node-id="1134:3501"
          >
            What your school looks like, with and without The Edge.
          </h2>

          <p
            className="normal-case font-body font-normal leading-normal text-black"
            style={{
              fontSize: 'var(--section-text-body)',
              fontVariationSettings: "'opsz' 14",
              maxWidth: 'var(--english-ai-comparison-subtitle-max-w)',
              marginTop: 'var(--english-ai-comparison-heading-to-subtitle)',
            }}
            data-node-id="1134:3496"
          >
            Three perspectives. One clear shift.
          </p>

          <div
            className="flex flex-col md:hidden"
            style={{
              gap: 'var(--english-ai-comparison-mobile-card-gap)',
              marginTop: 'var(--english-ai-comparison-subtitle-to-table)',
            }}
          >
            {ROWS.map(row => (
              <ComparisonMobileCard key={row.role} {...row} />
            ))}
          </div>

          <div
            className="hidden overflow-x-auto md:block"
            style={{ marginTop: 'var(--english-ai-comparison-subtitle-to-table)' }}
          >
            <div
              className="min-w-[var(--english-ai-comparison-table-min-w)] overflow-hidden rounded-[var(--english-ai-comparison-table-radius)] border border-black/10"
              data-node-id="1134:3515"
            >
              <div
                className="grid grid-cols-[var(--english-ai-comparison-role-col)_1fr_1fr] bg-[#177EC0]"
                style={{
                  minHeight: 'var(--english-ai-comparison-header-h)',
                  paddingLeft: 'var(--english-ai-comparison-cell-px)',
                  paddingRight: 'var(--english-ai-comparison-cell-px)',
                }}
                data-node-id="1134:3502"
              >
                <p
                  className="flex items-center font-heading font-medium uppercase leading-none text-white"
                  style={{ fontSize: 'var(--section-text-body)' }}
                  data-node-id="1134:3503"
                >
                  Perspective
                </p>
                <p
                  className="flex items-center font-heading font-medium uppercase leading-none text-white"
                  style={{ fontSize: 'var(--section-text-body)' }}
                  data-node-id="1134:3513"
                >
                  Without The Edge
                </p>
                <p
                  className="flex items-center font-heading font-medium uppercase leading-none text-white"
                  style={{
                    fontSize: 'var(--section-text-body)',
                    marginRight: 'calc(-1 * var(--english-ai-comparison-cell-px))',
                    paddingLeft: 'var(--english-ai-comparison-cell-px)',
                    paddingRight: 'var(--english-ai-comparison-cell-px)',
                  }}
                  data-node-id="1134:3514"
                >
                  With The Edge
                </p>
              </div>

              {ROWS.map(row => (
                <div
                  key={row.role}
                  className="grid grid-cols-[var(--english-ai-comparison-role-col)_1fr_1fr] border-t border-black/10"
                  style={{
                    paddingTop: 'var(--english-ai-comparison-row-py)',
                    paddingBottom: 'var(--english-ai-comparison-row-py)',
                    paddingLeft: 'var(--english-ai-comparison-cell-px)',
                    paddingRight: 'var(--english-ai-comparison-cell-px)',
                  }}
                >
                  <p
                    className="font-heading font-medium uppercase leading-none text-black"
                    style={{ fontSize: 'var(--section-text-body)' }}
                    data-node-id={row.roleNodeId}
                  >
                    {row.role}
                  </p>
                  <p
                    className="normal-case font-body font-normal leading-normal text-black"
                    style={{
                      fontSize: 'var(--section-text-body)',
                      fontVariationSettings: "'opsz' 14",
                      paddingRight: 'var(--english-ai-comparison-col-gap)',
                    }}
                    data-node-id={row.withoutNodeId}
                  >
                    {row.without}
                  </p>
                  <p
                    className="normal-case font-body font-normal leading-normal text-black"
                    style={{
                      fontSize: 'var(--section-text-body)',
                      fontVariationSettings: "'opsz' 14",
                      marginRight: 'calc(-1 * var(--english-ai-comparison-cell-px))',
                      paddingLeft: 'var(--english-ai-comparison-cell-px)',
                      paddingRight: 'var(--english-ai-comparison-cell-px)',
                    }}
                    data-node-id={row.withNodeId}
                  >
                    {row.with}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p
            className="normal-case font-body font-semibold leading-normal text-black md:whitespace-nowrap"
            style={{
              fontSize: 'var(--section-text-body)',
              fontVariationSettings: "'opsz' 14",
              marginTop: 'var(--english-ai-comparison-subtitle-to-table)',
            }}
            data-node-id="1134:3498"
          >
            Life skills stop being a slogan.{' '}
            <span className="text-[#177EC0]">They become a transcript.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
