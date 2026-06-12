import skillsRow1Col1 from '@/assets/figma/code-monkey/skills-row1-col1.png'
import skillsRow1Col2 from '@/assets/figma/code-monkey/skills-row1-col2.png'
import skillsRow1Col3 from '@/assets/figma/code-monkey/skills-row1-col3.png'
import skillsRow2Col1 from '@/assets/figma/code-monkey/skills-row2-col1.png'
import skillsRow2Col2 from '@/assets/figma/code-monkey/skills-row2-col2.png'
import skillsRow2Col3 from '@/assets/figma/code-monkey/skills-row2-col3.png'
import toolConversation from '@/assets/figma/english-ai/tool-conversation.png'
import toolsRow1Col1 from '@/assets/figma/english-ai/tools-row1-col1.png'
import toolsRow1Col2 from '@/assets/figma/english-ai/tools-row1-col2.png'
import toolsRow1Col3 from '@/assets/figma/english-ai/tools-row1-col3.png'
import toolsRow2Col1 from '@/assets/figma/english-ai/tools-row2-col1.png'
import toolsRow2Col2 from '@/assets/figma/english-ai/tools-row2-col2.png'
import toolsRow2Col3 from '@/assets/figma/english-ai/tools-row2-col3.png'
import toolPronunciation from '@/assets/figma/english-ai/tool-pronunciation.png'
import toolReading from '@/assets/figma/english-ai/tool-reading.png'
import toolSpontaneous from '@/assets/figma/english-ai/tool-spontaneous.png'
import { EnglishAiFeatureGridSection } from '@/components/english-ai/EnglishAiFeatureGridSection'

const ENGLISH_AI_TOOLS = [
  {
    image: toolsRow1Col1,
    title: 'Pronunciation Tool',
    body: 'Phonics, intonation, and stress scored in real time for every student.',
    imageNodeId: '1060:2246',
    titleNodeId: '1060:2259',
    bodyNodeId: '1060:2260',
  },
  {
    image: toolsRow1Col2,
    title: 'Spontaneous Speaking Tool',
    body: 'Unscripted responses scored for fluency, coherence, and confidence — every student, every session.',
    imageNodeId: '1060:2250',
    titleNodeId: '1060:2266',
    bodyNodeId: '1060:2267',
  },
  {
    image: toolsRow1Col3,
    title: 'Conversation Tool',
    body: 'Multi-turn live conversations — interviews, discussions, debates, role-plays.',
    imageNodeId: '1060:2254',
    titleNodeId: '1060:2273',
    bodyNodeId: '1060:2274',
  },
  {
    image: toolsRow2Col1,
    title: 'Grammar Games',
    body: 'Tenses, articles, prepositions mastered through play, not drills.',
    imageNodeId: '1060:2248',
    titleNodeId: '1060:2263',
    bodyNodeId: '1060:2264',
  },
  {
    image: toolsRow2Col2,
    title: 'Vocabulary Tool',
    body: 'New words learned through puzzles, games, and spoken sentences.',
    imageNodeId: '1060:2252',
    titleNodeId: '1060:2270',
    bodyNodeId: '1060:2271',
  },
  {
    image: toolsRow2Col3,
    title: 'Reading Tool',
    body: 'Reading aloud, comprehension, and inference measured by AI.',
    imageNodeId: '1060:2256',
    titleNodeId: '1060:2299',
    bodyNodeId: '1060:2300',
  },
] as const

const CODE_MONKEY_TOOLS = [
  {
    image: skillsRow1Col1,
    title: 'Speaking',
    body: 'Live AI conversation partners. Pronunciation, fluency, and confidence — measured every session.',
    imageNodeId: '1060:2254',
    titleNodeId: '1060:2273',
    bodyNodeId: '1060:2274',
  },
  {
    image: skillsRow1Col2,
    title: 'Listening',
    body: 'Authentic audio, varied accents. Comprehension scored in real time.',
    imageNodeId: '1060:2246',
    titleNodeId: '1060:2259',
    bodyNodeId: '1060:2260',
  },
  {
    image: skillsRow1Col3,
    title: 'Reading',
    body: 'Grade-level passages with adaptive comprehension. Vocabulary built in context.',
    imageNodeId: '1060:2256',
    titleNodeId: '1060:2299',
    bodyNodeId: '1060:2300',
  },
  {
    image: skillsRow2Col1,
    title: 'Writing',
    body: 'Structured prompts with rubric-based AI feedback on grammar, clarity, and ideas.',
    imageNodeId: '1060:2250',
    titleNodeId: '1060:2266',
    bodyNodeId: '1060:2267',
  },
  {
    image: skillsRow2Col2,
    title: 'Grammar',
    body: "Targeted micro-practice surfaced from each student's own errors. No worksheets.",
    imageNodeId: '1060:2248',
    titleNodeId: '1060:2263',
    bodyNodeId: '1060:2264',
  },
  {
    image: skillsRow2Col3,
    title: 'Vocabulary',
    body: "Spaced repetition tuned to your textbook's word list. Retention, not just exposure.",
    imageNodeId: '1060:2252',
    titleNodeId: '1060:2270',
    bodyNodeId: '1060:2271',
  },
] as const

const THE_EDGE_TOOLS = [
  {
    image: toolConversation,
    title: 'Baseline assessments',
    body: 'Start with a clear picture of where every student is today.',
    imageNodeId: '1060:2254',
    titleNodeId: '1060:2273',
    bodyNodeId: '1060:2274',
  },
  {
    image: toolPronunciation,
    title: 'Scaffolded growth tracking',
    body: 'Watch skills grow through structured, level-based milestones.',
    imageNodeId: '1060:2246',
    titleNodeId: '1060:2259',
    bodyNodeId: '1060:2260',
  },
  {
    image: toolReading,
    title: 'Multi-rater verification',
    body: 'Validate growth with feedback from teachers, peers, and mentors.',
    imageNodeId: '1060:2256',
    titleNodeId: '1060:2299',
    bodyNodeId: '1060:2300',
  },
  {
    image: toolSpontaneous,
    title: 'Capstone projects',
    body: 'Turn learning into impact with real-world application.',
    imageNodeId: '1060:2250',
    titleNodeId: '1060:2266',
    bodyNodeId: '1060:2267',
  },
] as const

type EnglishAiToolsSectionProps = {
  variant?: import('@/types/program').ProgramVariant
}

export function EnglishAiToolsSection({ variant = 'english-ai' }: EnglishAiToolsSectionProps) {
  const isCodeMonkey = variant === 'code-monkey'
  const isTheEdge = variant === 'the-edge'
  const items = isTheEdge ? THE_EDGE_TOOLS : isCodeMonkey ? CODE_MONKEY_TOOLS : ENGLISH_AI_TOOLS

  return (
    <EnglishAiFeatureGridSection
      variant={variant}
      sectionNodeId="1060:2196"
      eyebrow={isTheEdge ? 'Beyond personality tests' : isCodeMonkey ? 'Skills' : 'The tools inside the lab'}
      eyebrowNodeId="1060:2236"
      headingId={
        isTheEdge ? 'the-edge-tools-heading' : isCodeMonkey ? 'code-monkey-tools-heading' : 'english-ai-tools-heading'
      }
      headingNodeId="1060:2239"
      heading={
        isTheEdge ? (
          <>
            Multi-rater.{' '}
            <span
              className="heading-highlight"
            >
              Research-backed.
            </span>
          </>
        ) : isCodeMonkey ? (
          <>
            Every{' '}
            <span
              className="heading-highlight"
            >
              English skill
            </span>
            , individually practiced.
          </>
        ) : (
          <>
            Every{' '}
            <span
              className="heading-highlight"
              data-node-id="1060:2238"
            >
              English skill,
            </span>{' '}
            individually practiced.
          </>
        )
      }
      subtitle={
        isTheEdge
          ? 'Four ways The Edge redefines student growth.'
          : isCodeMonkey
            ? 'Six core skills. One adaptive engine. Each student moves at their own pace, every session.'
            : 'Speaking-first AI tools — each one giving every student the daily practice classroom time cannot.'
      }
      subtitleNodeId="1060:2215"
      items={[...items]}
      footer={isTheEdge ? 'Life skills stop being a slogan. They become a transcript.' : undefined}
      footerNodeId={isTheEdge ? '1060:2278' : undefined}
      carouselAriaLabel={
        isTheEdge ? 'The Edge development features' : isCodeMonkey ? 'Code Monkey skills' : 'English AI speaking tools'
      }
    />
  )
}
