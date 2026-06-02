import whySchoolsGif from '@/data/comp_04.gif'
import { WhySchoolsMarquee } from '@/components/home/WhySchoolsMarquee'

const REASONS = [
  {
    text: 'The speaking practice your timetable cannot fit.',
    icon: '/assets/figma/home/section-4/icon-1.png',
    nodeId: '760:1676',
    textNodeId: '760:1671',
  },
  {
    text: 'Mapped to your curriculum, page by page.',
    icon: '/assets/figma/home/section-4/icon-2.png',
    nodeId: '760:1677',
    textNodeId: '760:1672',
  },
  {
    text: 'Data your principal team actually uses.',
    icon: '/assets/figma/home/section-4/icon-3.png',
    nodeId: '760:1678',
    textNodeId: '760:1673',
  },
  {
    text: 'No new hardware. No new room. No new period.',
    icon: '/assets/figma/home/section-4/icon-4.png',
    nodeId: '760:1679',
    textNodeId: '760:1674',
  },
  {
    text: 'Application-based. Limited cohort. Real partnership.',
    icon: '/assets/figma/home/section-4/icon-5.png',
    nodeId: '760:1680',
    textNodeId: '760:1675',
  },
] as const

function ReasonItem({
  text,
  icon,
  nodeId,
  textNodeId,
}: (typeof REASONS)[number]) {
  return (
    <li
      className="flex min-w-0 items-center"
      style={{ gap: 'var(--why-icon-text-gap)' }}
      data-node-id={nodeId}
    >
      <span
        className="shrink-0 overflow-hidden rounded-full"
        style={{
          width: 'var(--why-icon-size)',
          height: 'var(--why-icon-size)',
        }}
      >
        <img
          src={icon}
          alt=""
          aria-hidden
          className="size-full object-cover"
        />
      </span>
      <p
        className="min-w-0 normal-case font-body font-semibold leading-normal text-black"
        style={{
          fontSize: 'var(--section-text-body)',
          fontVariationSettings: "'opsz' 14",
        }}
        data-node-id={textNodeId}
      >
        {text}
      </p>
    </li>
  )
}

function WhySchoolsIllustration() {
  return (
    <img
      src={whySchoolsGif}
      alt="Students learning with Zene AI"
      className="section-fit-media why-students-media block h-auto object-contain object-left-bottom"
      style={{
        width: 'var(--why-students-w)',
        maxHeight: 'var(--why-students-h)',
        marginTop: 'var(--why-gif-offset-top)',
      }}
      data-node-id="642:1294"
    />
  )
}

export function WhySchoolsSection() {
  return (
    <section
      id="why-schools"
      className="w-full px-[5px] pt-[5px]"
      aria-labelledby="why-schools-heading"
      data-node-id="642:1126"
    >
      <div
        className="relative mx-auto w-full overflow-hidden section-card-shell bg-white"
        style={{ maxWidth: 'var(--section-card-max-w)' }}
      >
        <div
          className="flex flex-col"
          style={{
            paddingLeft: 'var(--section-padding-x)',
            paddingRight: 'var(--section-padding-x)',
            paddingTop: 'var(--why-padding-top)',
          }}
        >
          <div
            className="grid min-w-0 items-end xl:grid-cols-[13fr_7fr]"
            style={{ gap: 'var(--why-columns-gap)' }}
          >
            <div className="min-w-0">
              <h2
                id="why-schools-heading"
                className="font-heading font-medium uppercase leading-none text-black"
                style={{ fontSize: 'var(--section-text-heading)' }}
                data-node-id="642:1152"
              >
                Why schools Choose{' '}
                <span className="bg-[#78F3FA]" data-node-id="642:1154">
                  ZENE AI
                </span>
              </h2>

              <ul
                className="flex flex-col"
                style={{
                  gap: 'var(--why-feature-gap)',
                  marginTop: 'var(--why-heading-to-list)',
                  padding: 0,
                  listStyle: 'none',
                }}
              >
                {REASONS.map(reason => (
                  <ReasonItem key={reason.textNodeId} {...reason} />
                ))}
              </ul>
            </div>

            <div
              className="why-illustration-col relative z-[1] flex min-h-0 min-w-0 items-end justify-start overflow-visible xl:-ml-[var(--why-gif-offset-left)]"
            >
              <WhySchoolsIllustration />
            </div>
          </div>

          <WhySchoolsMarquee />
        </div>
      </div>
    </section>
  )
}
