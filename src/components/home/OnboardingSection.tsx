import onboardingDevice from '@/assets/figma/english-ai/onboarding-device.png'
import onboardingGrowth from '@/assets/figma/english-ai/onboarding-growth.png'
import onboardingClassroom from '@/assets/figma/home/section-8/onboarding-classroom.png'
import { cn } from '@/lib/utils'

const CRITERIA = [
  {
    title: 'A growth mindset',
    body: "You believe English is more than a textbook subject and you're ready to elevate your students' communication skills.",
    nodeId: '767:2048',
    imageNodeId: '767:2041',
    titleNodeId: '767:2032',
    bodyNodeId: '767:2033',
  },
  {
    title: 'Device access',
    body: 'You have a room with computers, headphones, and internet available once a week per section in your timetable.',
    nodeId: '767:2047',
    imageNodeId: '767:2046',
    titleNodeId: '767:2037',
    bodyNodeId: '767:2038',
  },
] as const

const CODE_MONKEY_CRITERIA = [
  {
    title: 'A growth mindset',
    body: 'Leadership that treats English outcomes as measurable, and is willing to look at the data — good or bad.',
    nodeId: '767:2048',
    imageNodeId: '767:2041',
    titleNodeId: '767:2032',
    bodyNodeId: '767:2033',
  },
  {
    title: 'Device access',
    body: 'One device per student during the Zene session — a lab, a tablet cart, or BYOD. We work with what you have.',
    nodeId: '767:2047',
    imageNodeId: '767:2046',
    titleNodeId: '767:2037',
    bodyNodeId: '767:2038',
  },
] as const

const THE_EDGE_CRITERIA = [
  {
    title: 'Alignment',
    body: "Your school's vision aligns with developing observable leadership behaviours in every student.",
    nodeId: '767:2048',
    imageNodeId: '767:2041',
    titleNodeId: '767:2032',
    bodyNodeId: '767:2033',
  },
  {
    title: 'Commitment',
    body: 'Your school is committed to implementing The Edge without disrupting existing programmes.',
    nodeId: '767:2047',
    imageNodeId: '767:2046',
    titleNodeId: '767:2037',
    bodyNodeId: '767:2038',
  },
] as const

function CriterionCard({
  title,
  body,
  image,
  nodeId,
  imageNodeId,
  titleNodeId,
  bodyNodeId,
  normalCaseBody = false,
}: (typeof CRITERIA)[number] & { image: string; normalCaseBody?: boolean }) {
  return (
    <article className="flex min-w-0 flex-col items-center text-center" data-node-id={nodeId}>
      <img
        src={image}
        alt=""
        aria-hidden
        className="max-w-full object-cover"
        style={{
          width: 'var(--onboard-image-w)',
          height: 'var(--onboard-image-h)',
        }}
        data-node-id={imageNodeId}
      />
      <h3
        className="font-heading font-medium uppercase leading-none text-black"
        style={{
          fontSize: 'var(--section-text-tab)',
          marginTop: 'var(--onboard-image-to-title)',
        }}
        data-node-id={titleNodeId}
      >
        {title}
      </h3>
      <p
        className={cn(
          'font-body font-normal leading-normal text-black',
          normalCaseBody ? 'normal-case' : 'capitalize',
        )}
        style={{
          fontSize: 'var(--section-text-body)',
          fontVariationSettings: "'opsz' 14",
          maxWidth: 'var(--onboard-copy-max-w)',
          marginTop: 'var(--onboard-title-to-body)',
        }}
        data-node-id={bodyNodeId}
      >
        {body}
      </p>
    </article>
  )
}

type OnboardingSectionProps = {
  variant?: 'home' | 'english-ai' | 'code-monkey' | 'the-edge'
}

const ENGLISH_AI_IMAGES = [onboardingGrowth, onboardingDevice] as const

export function OnboardingSection({ variant = 'home' }: OnboardingSectionProps) {
  const isEnglishAi = variant === 'english-ai'
  const isCodeMonkey = variant === 'code-monkey'
  const isTheEdge = variant === 'the-edge'
  const isProgramPage = isEnglishAi || isCodeMonkey || isTheEdge
  const isCustomProgram = isCodeMonkey || isTheEdge
  const criteria = isTheEdge ? THE_EDGE_CRITERIA : isCodeMonkey ? CODE_MONKEY_CRITERIA : CRITERIA
  const headingId = isTheEdge
    ? 'the-edge-onboarding-heading'
    : isCodeMonkey
      ? 'code-monkey-onboarding-heading'
      : 'onboarding-heading'

  const highlightStyle = {
    minHeight: 'var(--english-ai-highlight-h)',
    paddingLeft: 'var(--english-ai-highlight-pad-x)',
    paddingRight: 'var(--english-ai-highlight-pad-x)',
  } as const

  return (
    <section
      className="w-full px-[5px] pt-[5px]"
      aria-labelledby={headingId}
      data-node-id={isProgramPage ? '1060:2201' : '767:1875'}
    >
      <div
        className="relative mx-auto w-full overflow-hidden section-card-shell bg-white"
        style={{ maxWidth: 'var(--section-card-max-w)' }}
      >
        <div
          style={{
            paddingLeft: 'var(--section-padding-x)',
            paddingRight: 'var(--section-padding-x)',
            paddingTop: 'var(--onboard-padding-top)',
            paddingBottom: 'var(--onboard-padding-bottom)',
          }}
        >
          <p
            className={cn('font-body text-black', !isCustomProgram && 'uppercase')}
            style={{
              fontSize: 'var(--section-text-eyebrow)',
              fontVariationSettings: "'opsz' 14",
            }}
            data-node-id={isProgramPage ? '1060:2245' : '767:2027'}
          >
            {isTheEdge || isCodeMonkey
              ? 'Cohort Selection'
              : 'Who Zene works with'}
          </p>

          <h2
            id={headingId}
            className="font-heading font-medium uppercase leading-none text-black"
            style={{
              fontSize: 'var(--section-text-heading)',
              maxWidth: 'var(--onboard-heading-max-w)',
              marginTop: 'var(--onboard-eyebrow-to-heading)',
            }}
            data-node-id={isProgramPage ? '1060:2345' : '767:1877'}
          >
            We onboard{' '}
            <span
              className={isCustomProgram ? 'inline-flex items-center bg-zene-cyan' : 'bg-[#78F3FA]'}
              style={isCustomProgram ? highlightStyle : undefined}
              data-node-id={isProgramPage ? '1060:2344' : '767:1879'}
            >
              a limited number
            </span>{' '}
            of schools each year. Here&apos;s how we choose.
          </h2>

          <p
            className={cn(
              'font-body font-normal leading-normal text-black',
              isCustomProgram ? 'normal-case' : 'capitalize',
            )}
            style={{
              fontSize: 'var(--section-text-body)',
              fontVariationSettings: "'opsz' 14",
              maxWidth: 'var(--onboard-body-max-w)',
              marginTop: 'var(--onboard-heading-to-body)',
            }}
            data-node-id="767:2030"
          >
            {isTheEdge
              ? 'We look for schools committed to measurable leadership development for every student.'
              : isCodeMonkey
                ? 'Zene works best when the whole school is in. So we partner deeply with a few — not lightly with many.'
                : 'Zene is built around partnership, not transaction. We review every application and select the visionary schools — the ones ready to create real impact in their students&apos; lives.'}
          </p>

          <div
            className="grid min-w-0 grid-cols-1 gap-[var(--onboard-columns-gap)] xl:grid-cols-2"
            style={{ marginTop: 'var(--onboard-body-to-cards)' }}
          >
            {criteria.map((item, index) => (
              <CriterionCard
                key={item.nodeId}
                {...item}
                image={isProgramPage ? ENGLISH_AI_IMAGES[index] : onboardingClassroom}
                normalCaseBody={isCustomProgram}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
