import gainData from '@/assets/figma/english-ai/gain-data.png'
import gainEveryStudent from '@/assets/figma/english-ai/gain-every-student.png'
import gainGrammar from '@/assets/figma/english-ai/gain-grammar.png'
import gainHardware from '@/assets/figma/english-ai/gain-hardware.png'
import gainPronunciation from '@/assets/figma/english-ai/gain-pronunciation.png'
import gainReading from '@/assets/figma/english-ai/gain-reading.png'
import { EnglishAiFeatureGridSection } from '@/components/english-ai/EnglishAiFeatureGridSection'

const GAINS = [
  {
    image: gainEveryStudent,
    title: 'Every student speaks.',
    body: 'The 1-on-1 speaking practice your timetable could never fit.',
    imageNodeId: '1060:2247',
    titleNodeId: '1060:2261',
    bodyNodeId: '1060:2262',
  },
  {
    image: gainPronunciation,
    title: 'Pronunciation, automatically corrected.',
    body: 'What no teacher can mark for 30 students Zene marks for everyone.',
    imageNodeId: '1060:2251',
    titleNodeId: '1060:2268',
    bodyNodeId: '1060:2269',
  },
  {
    image: gainReading,
    title: 'Reading and comprehension, finally measurable.',
    body: 'Fluency, accuracy, and inference scored for every student — not just the ones called on.',
    imageNodeId: '1060:2255',
    titleNodeId: '1060:2275',
    bodyNodeId: '1060:2280',
  },
  {
    image: gainGrammar,
    title: 'Grammar and vocabulary, practiced through play.',
    body: 'Games replace drills. Students return on their own.',
    imageNodeId: '1060:2249',
    titleNodeId: '1060:2276',
    bodyNodeId: '1060:2281',
  },
  {
    image: gainData,
    title: 'Data your principal team can act on.',
    body: 'Class heatmaps, term reports, board-ready PDFs generated automatically.',
    imageNodeId: '1060:2253',
    titleNodeId: '1060:2277',
    bodyNodeId: '1060:2297',
  },
  {
    image: gainHardware,
    title: 'No new hardware. No new room. No disruption.',
    body: 'Runs on the devices your school already owns.',
    imageNodeId: '1060:2257',
    titleNodeId: '1060:2279',
    bodyNodeId: '1060:2298',
  },
] as const

const CODE_MONKEY_GAINS = [
  {
    image: gainEveryStudent,
    title: 'Measurable speaking fluency',
    body: 'Every student speaks for 10+ minutes per session — and you have the recordings.',
    imageNodeId: '1060:2247',
    titleNodeId: '1060:2261',
    bodyNodeId: '1060:2262',
  },
  {
    image: gainPronunciation,
    title: 'Closed comprehension gaps',
    body: 'Adaptive reading meets each student at their level, then moves them up.',
    imageNodeId: '1060:2251',
    titleNodeId: '1060:2268',
    bodyNodeId: '1060:2269',
  },
  {
    image: gainReading,
    title: 'Better written expression',
    body: 'Structured writing practice with AI feedback. Drafts that improve over a term.',
    imageNodeId: '1060:2255',
    titleNodeId: '1060:2275',
    bodyNodeId: '1060:2280',
  },
  {
    image: gainGrammar,
    title: 'Confidence in English',
    body: 'Low-stakes daily practice means even quiet students start speaking.',
    imageNodeId: '1060:2249',
    titleNodeId: '1060:2276',
    bodyNodeId: '1060:2281',
  },
  {
    image: gainData,
    title: 'Teacher visibility',
    body: "A live dashboard shows who's struggling, on what, this week.",
    imageNodeId: '1060:2253',
    titleNodeId: '1060:2277',
    bodyNodeId: '1060:2297',
  },
  {
    image: gainHardware,
    title: 'Board-aligned outcomes',
    body: 'Mapped to CBSE, ICSE, IB, and Cambridge frameworks.',
    imageNodeId: '1060:2257',
    titleNodeId: '1060:2279',
    bodyNodeId: '1060:2298',
  },
] as const

const THE_EDGE_GAINS = [
  {
    image: gainEveryStudent,
    title: 'Personal development',
    body: 'Self-awareness, goal-setting, time management, and resilience — measured and documented.',
    imageNodeId: '1060:2247',
    titleNodeId: '1060:2261',
    bodyNodeId: '1060:2262',
  },
  {
    image: gainPronunciation,
    title: 'Communication',
    body: 'Writing, speaking, and active listening developed through structured practice and feedback.',
    imageNodeId: '1060:2251',
    titleNodeId: '1060:2268',
    bodyNodeId: '1060:2269',
  },
  {
    image: gainReading,
    title: 'Critical thinking',
    body: 'Problem-solving, analysis, and decision-making assessed through scaffolded growth.',
    imageNodeId: '1060:2255',
    titleNodeId: '1060:2275',
    bodyNodeId: '1060:2280',
  },
  {
    image: gainGrammar,
    title: 'Financial literacy',
    body: 'Practical money skills and entrepreneurial thinking built into every module.',
    imageNodeId: '1060:2249',
    titleNodeId: '1060:2276',
    bodyNodeId: '1060:2281',
  },
  {
    image: gainData,
    title: 'Active citizenship',
    body: 'Community engagement and civic responsibility measured with documented proof.',
    imageNodeId: '1060:2253',
    titleNodeId: '1060:2277',
    bodyNodeId: '1060:2297',
  },
] as const

type EnglishAiGainsSectionProps = {
  variant?: import('@/types/program').ProgramVariant
}

export function EnglishAiGainsSection({ variant = 'english-ai' }: EnglishAiGainsSectionProps) {
  const isCodeMonkey = variant === 'code-monkey'
  const isTheEdge = variant === 'the-edge'
  const isCustomProgram = isCodeMonkey || isTheEdge
  const items = isTheEdge ? THE_EDGE_GAINS : isCodeMonkey ? CODE_MONKEY_GAINS : GAINS

  const highlightStyle = {
    minHeight: 'var(--english-ai-highlight-h)',
    paddingLeft: 'var(--english-ai-highlight-pad-x)',
    paddingRight: 'var(--english-ai-highlight-pad-x)',
  } as const

  return (
    <EnglishAiFeatureGridSection
      variant={variant}
      sectionNodeId="1060:2197"
      eyebrow={isTheEdge ? 'The framework' : isCodeMonkey ? 'Outcomes' : 'What changes in your school'}
      eyebrowNodeId="1060:2240"
      headingId={
        isTheEdge ? 'the-edge-gains-heading' : isCodeMonkey ? 'code-monkey-gains-heading' : 'english-ai-gains-heading'
      }
      headingNodeId="1060:2303"
      heading={
        isTheEdge ? (
          <>
            Five pillars.{' '}
            <span className="inline-flex items-center bg-zene-cyan" style={highlightStyle}>
              Every skill a graduate
            </span>{' '}
            needs.
          </>
        ) : (
          <>
            Six things your{' '}
            <span
              className={isCustomProgram ? 'inline-flex items-center bg-zene-cyan' : 'inline-block bg-[#78F3FA]'}
              style={highlightStyle}
              data-node-id="1060:2302"
            >
              English program
            </span>{' '}
            gains in one term.
          </>
        )
      }
      subtitle={
        isTheEdge
          ? 'What colleges admit. What employers hire. What life demands.'
          : isCustomProgram
            ? undefined
            : 'Zene does not replace your English curriculum. It amplifies it.'
      }
      subtitleNodeId="1060:2216"
      items={[...items]}
      footer={
        isCustomProgram
          ? undefined
          : "Your English program does not change. Your school's ability to measure it does."
      }
      footerNodeId="1060:2278"
      carouselAriaLabel={
        isTheEdge ? 'The Edge programme features' : isCodeMonkey ? 'Code Monkey outcomes' : 'English program gains'
      }
    />
  )
}
