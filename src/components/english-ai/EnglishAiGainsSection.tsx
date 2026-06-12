import codeMonkeyOutcomes3 from '@/assets/figma/code-monkey/outcomes-3.png'
import codeMonkeyOutcomesRow1Col1 from '@/assets/figma/code-monkey/outcomes-row1-col1.png'
import codeMonkeyOutcomesRow1Col2 from '@/assets/figma/code-monkey/outcomes-row1-col2.png'
import codeMonkeyOutcomesRow2Col1 from '@/assets/figma/code-monkey/outcomes-row2-col1.png'
import codeMonkeyOutcomesRow2Col2 from '@/assets/figma/code-monkey/outcomes-row2-col2.png'
import codeMonkeyOutcomesRow2Col3 from '@/assets/figma/code-monkey/outcomes-row2-col3.png'
import gainData from '@/assets/figma/english-ai/gain-data.png'
import gainsRow1Col1 from '@/assets/figma/english-ai/gains-row1-col1.png'
import gainsRow1Col2 from '@/assets/figma/english-ai/gains-row1-col2.png'
import gainsRow1Col3 from '@/assets/figma/english-ai/gains-row1-col3.png'
import gainsRow2Col1 from '@/assets/figma/english-ai/gains-row2-col1.png'
import gainsRow2Col2 from '@/assets/figma/english-ai/gains-row2-col2.png'
import gainsRow2Col3 from '@/assets/figma/english-ai/gains-row2-col3.png'
import gainEveryStudent from '@/assets/figma/english-ai/gain-every-student.png'
import gainGrammar from '@/assets/figma/english-ai/gain-grammar.png'
import gainPronunciation from '@/assets/figma/english-ai/gain-pronunciation.png'
import gainReading from '@/assets/figma/english-ai/gain-reading.png'
import { EnglishAiFeatureGridSection } from '@/components/english-ai/EnglishAiFeatureGridSection'

const GAINS = [
  {
    image: gainsRow1Col1,
    title: 'Every student speaks.',
    body: 'The 1-on-1 speaking practice your timetable could never fit.',
    imageNodeId: '1060:2247',
    titleNodeId: '1060:2261',
    bodyNodeId: '1060:2262',
  },
  {
    image: gainsRow1Col2,
    title: 'Pronunciation, automatically corrected.',
    body: 'What no teacher can mark for 30 students Zene marks for everyone.',
    imageNodeId: '1060:2251',
    titleNodeId: '1060:2268',
    bodyNodeId: '1060:2269',
  },
  {
    image: gainsRow1Col3,
    title: 'Reading and comprehension, finally measurable.',
    body: 'Fluency, accuracy, and inference scored for every student — not just the ones called on.',
    imageNodeId: '1060:2255',
    titleNodeId: '1060:2275',
    bodyNodeId: '1060:2280',
  },
  {
    image: gainsRow2Col1,
    title: 'Grammar and vocabulary, practiced through play.',
    body: 'Games replace drills. Students return on their own.',
    imageNodeId: '1060:2249',
    titleNodeId: '1060:2276',
    bodyNodeId: '1060:2281',
  },
  {
    image: gainsRow2Col2,
    title: 'Data your principal team can act on.',
    body: 'Class heatmaps, term reports, board-ready PDFs generated automatically.',
    imageNodeId: '1060:2253',
    titleNodeId: '1060:2277',
    bodyNodeId: '1060:2297',
  },
  {
    image: gainsRow2Col3,
    title: 'No new hardware. No new room. No disruption.',
    body: 'Runs on the devices your school already owns.',
    imageNodeId: '1060:2257',
    titleNodeId: '1060:2279',
    bodyNodeId: '1060:2298',
  },
] as const

const CODE_MONKEY_GAINS = [
  {
    image: codeMonkeyOutcomesRow1Col1,
    title: 'Measurable speaking fluency',
    body: 'Every student speaks for 10+ minutes per session — and you have the recordings.',
    imageNodeId: '1060:2247',
    titleNodeId: '1060:2261',
    bodyNodeId: '1060:2262',
  },
  {
    image: codeMonkeyOutcomesRow1Col2,
    title: 'Closed comprehension gaps',
    body: 'Adaptive reading meets each student at their level, then moves them up.',
    imageNodeId: '1060:2251',
    titleNodeId: '1060:2268',
    bodyNodeId: '1060:2269',
  },
  {
    image: codeMonkeyOutcomes3,
    title: 'Better written expression',
    body: 'Structured writing practice with AI feedback. Drafts that improve over a term.',
    imageNodeId: '1060:2255',
    titleNodeId: '1060:2275',
    bodyNodeId: '1060:2280',
  },
  {
    image: codeMonkeyOutcomesRow2Col1,
    title: 'Confidence in English',
    body: 'Low-stakes daily practice means even quiet students start speaking.',
    imageNodeId: '1060:2249',
    titleNodeId: '1060:2276',
    bodyNodeId: '1060:2281',
  },
  {
    image: codeMonkeyOutcomesRow2Col2,
    title: 'Teacher visibility',
    body: "A live dashboard shows who's struggling, on what, this week.",
    imageNodeId: '1060:2253',
    titleNodeId: '1060:2277',
    bodyNodeId: '1060:2297',
  },
  {
    image: codeMonkeyOutcomesRow2Col3,
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
            <span className="heading-highlight">
              Every skill a graduate
            </span>{' '}
            needs.
          </>
        ) : (
          <>
            Six things your{' '}
            <span
              className="heading-highlight"
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
      footerAlign="center"
      carouselAriaLabel={
        isTheEdge ? 'The Edge programme features' : isCodeMonkey ? 'Code Monkey outcomes' : 'English program gains'
      }
    />
  )
}
