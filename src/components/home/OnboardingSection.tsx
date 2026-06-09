import onboardingClassroom from '@/assets/figma/home/section-8/onboarding-classroom.png'
import onboardingWhoZene1 from '@/assets/figma/home/section-8/onboarding-who-zene-1.png'
import onboardingWhoZene2 from '@/assets/figma/home/section-8/onboarding-who-zene-2.png'
import { OnboardingCriteriaCarousel } from '@/components/home/OnboardingCriteriaCarousel'
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
    body: 'You believe English is more than a textbook subject and you\'re ready to elevate your students\' communication skills.',
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

const THE_EDGE_CRITERIA = CODE_MONKEY_CRITERIA

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
      <div
        className="onboarding-criteria-card__media flex items-center justify-center overflow-hidden"
        style={{
          width: 'var(--onboard-image-w)',
          height: 'var(--onboard-image-h)',
        }}
        data-node-id={imageNodeId}
      >
        <img
          src={image}
          alt=""
          aria-hidden
          className="size-full object-contain object-center"
          draggable={false}
        />
      </div>
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

const HOME_ONBOARDING_IMAGES = [onboardingWhoZene1, onboardingWhoZene2] as const

export function OnboardingSection({ variant = 'home' }: OnboardingSectionProps) {
  const isEnglishAi = variant === 'english-ai'
  const isCodeMonkey = variant === 'code-monkey'
  const isTheEdge = variant === 'the-edge'
  const isProgramPage = isEnglishAi || isCodeMonkey || isTheEdge
  const isCustomProgram = isCodeMonkey || isTheEdge
  const isHome = variant === 'home'
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
      id="onboarding"
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
            className="section-eyebrow font-body uppercase text-black"
            style={{
              fontSize: 'var(--section-text-eyebrow)',
              fontVariationSettings: "'opsz' 14",
            }}
            data-node-id={isProgramPage ? '1060:2245' : '767:2027'}
          >
            Who Zene works with
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
            className="normal-case font-body font-normal leading-normal text-black"
            style={{
              fontSize: 'var(--section-text-body)',
              fontVariationSettings: "'opsz' 14",
              maxWidth: 'var(--onboard-body-max-w)',
              marginTop: 'var(--onboard-heading-to-body)',
            }}
            data-node-id="767:2030"
          >
            {isTheEdge ? (
              <>
                Zene does not ask you to change your English curriculum.
                <br />
                Every{'\u00a0'}activity maps to the chapter your students are already studying.
              </>
            ) : isCodeMonkey ? (
              'Zene does not ask you to change your English curriculum. Every activity maps to the chapter your students are already studying.'
            ) : (
              'Zene is built around partnership, not transaction. We review every application and select the visionary schools — the ones ready to create real impact in their students&apos; lives.'
            )}
          </p>

          {isHome ? (
            <OnboardingCriteriaCarousel
              className="sm:hidden"
              criteria={criteria}
              images={HOME_ONBOARDING_IMAGES}
              image={HOME_ONBOARDING_IMAGES[0]}
            />
          ) : isEnglishAi || isCodeMonkey || isTheEdge ? (
            <OnboardingCriteriaCarousel
              className="sm:hidden"
              criteria={criteria}
              images={HOME_ONBOARDING_IMAGES}
              image={HOME_ONBOARDING_IMAGES[0]}
            />
          ) : null}

          <div
            className={cn(
              'onboarding-criteria-grid grid min-w-0 grid-cols-1 gap-[var(--onboard-columns-gap)] xl:grid-cols-2',
              (isHome || isEnglishAi || isCodeMonkey || isTheEdge) && 'hidden sm:grid',
            )}
            style={{ marginTop: isHome ? undefined : 'var(--onboard-body-to-cards)' }}
          >
            {criteria.map((item, index) => (
              <CriterionCard
                key={item.nodeId}
                {...item}
                image={
                  isHome || isEnglishAi || isTheEdge || isCodeMonkey
                    ? HOME_ONBOARDING_IMAGES[index]
                    : onboardingClassroom
                }
                normalCaseBody
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
