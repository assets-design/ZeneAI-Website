import trackSpeaking from '@/assets/figma/home/section-6/track-speaking.png'
import trackMastery from '@/assets/figma/home/section-6/track-mastery.png'
import trackHeatmaps from '@/assets/figma/home/section-6/track-heatmaps.png'
import { cn } from '@/lib/utils'

const TRACK_ITEMS = [
  {
    image: trackSpeaking,
    title: 'Individual speaking quality',
    bodyLines: ['pronunciation, fluency, and confidence,', 'scored automatically.'],
    textMaxW: 'var(--track-text-max-w-body)',
    imageOffset: false,
    nodeId: '762:1710',
    imageNodeId: '762:1693',
    textNodeId: '762:1694',
  },
  {
    image: trackMastery,
    title: 'Skill-level mastery, per student',
    titleOneLine: true,
    bodyLines: ['reading, comprehension, vocabulary,', 'grammar, all measured separately.'],
    textMaxW: 'var(--track-text-max-w-body)',
    imageOffset: true,
    nodeId: '762:1708',
    imageNodeId: '762:1696',
    textNodeId: '762:1695',
  },
  {
    image: trackHeatmaps,
    title: 'Class-level skill heatmaps',
    bodyLines: [
      'your academic head sees the',
      'weakest skill across every section in ',
      'one screen.',
    ],
    textMaxW: 'var(--track-text-max-w-body)',
    imageOffset: false,
    nodeId: '762:1709',
    imageNodeId: '762:1706',
    textNodeId: '762:1697',
  },
] as const

function TrackItem({
  image,
  title,
  bodyLines,
  textMaxW,
  imageOffset,
  titleOneLine = false,
  nodeId,
  imageNodeId,
  textNodeId,
}: (typeof TRACK_ITEMS)[number]) {
  return (
    <article
      className={cn(
        'flex min-w-0 flex-col items-center text-center',
        imageOffset && 'xl:mt-[var(--track-img-offset)]',
      )}
      style={{
        paddingLeft: 'var(--track-img-padding-x)',
        paddingRight: 'var(--track-img-padding-x)',
      }}
      data-node-id={nodeId}
    >
      <img
        src={image}
        alt=""
        aria-hidden
        width={323}
        height={216}
        className="h-[var(--track-img-h)] w-[var(--track-img-w)] max-w-full object-contain"
        data-node-id={imageNodeId}
      />
      <p
        className="normal-case font-body font-normal leading-normal text-black"
        style={{
          fontSize: 'var(--section-text-body)',
          fontVariationSettings: "'opsz' 14",
          maxWidth: textMaxW,
          marginTop: 'var(--track-img-to-text)',
        }}
        data-node-id={textNodeId}
      >
        <span className={cn('font-semibold', titleOneLine && 'xl:whitespace-nowrap')}>
          {title}
        </span>
        <br />
        <br />
        {bodyLines.map((line) => (
          <span key={line} className="block xl:whitespace-nowrap">
            {line}
          </span>
        ))}
      </p>
    </article>
  )
}

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
            className="grid min-w-0 grid-cols-1 xl:grid-cols-3"
            style={{
              gap: 'var(--track-columns-gap)',
              marginTop: 'var(--track-heading-to-cards)',
            }}
          >
            {TRACK_ITEMS.map((item) => (
              <TrackItem key={item.nodeId} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
