import toolConversation from '@/assets/figma/english-ai/tool-conversation.png'
import toolGrammar from '@/assets/figma/english-ai/tool-grammar.png'
import toolPronunciation from '@/assets/figma/english-ai/tool-pronunciation.png'
import toolReading from '@/assets/figma/english-ai/tool-reading.png'
import toolSpontaneous from '@/assets/figma/english-ai/tool-spontaneous.png'
import toolVocabulary from '@/assets/figma/english-ai/tool-vocabulary.png'
import { EnglishAiFeatureGridSection } from '@/components/english-ai/EnglishAiFeatureGridSection'

const ENGLISH_AI_TOOLS = [
  {
    image: toolPronunciation,
    title: 'Pronunciation Tool',
    body: 'Phonics, intonation, and stress scored in real time for every student.',
    imageNodeId: '1060:2246',
    titleNodeId: '1060:2259',
    bodyNodeId: '1060:2260',
  },
  {
    image: toolSpontaneous,
    title: 'Spontaneous Speaking Tool',
    body: 'Unscripted responses scored for fluency, coherence, and confidence — every student, every session.',
    imageNodeId: '1060:2250',
    titleNodeId: '1060:2266',
    bodyNodeId: '1060:2267',
  },
  {
    image: toolConversation,
    title: 'Conversation Tool',
    body: 'Multi-turn live conversations — interviews, discussions, debates, role-plays.',
    imageNodeId: '1060:2254',
    titleNodeId: '1060:2273',
    bodyNodeId: '1060:2274',
  },
  {
    image: toolGrammar,
    title: 'Grammar Games',
    body: 'Tenses, articles, prepositions mastered through play, not drills.',
    imageNodeId: '1060:2248',
    titleNodeId: '1060:2263',
    bodyNodeId: '1060:2264',
  },
  {
    image: toolVocabulary,
    title: 'Vocabulary Tool',
    body: 'New words learned through puzzles, games, and spoken sentences.',
    imageNodeId: '1060:2252',
    titleNodeId: '1060:2270',
    bodyNodeId: '1060:2271',
  },
  {
    image: toolReading,
    title: 'Reading Tool',
    body: 'Reading aloud, comprehension, and inference measured by AI.',
    imageNodeId: '1060:2256',
    titleNodeId: '1060:2299',
    bodyNodeId: '1060:2300',
  },
] as const

const CODE_MONKEY_TOOLS = [
  {
    image: toolConversation,
    title: 'Speaking',
    body: 'Live AI conversation partners. Pronunciation, fluency, and confidence — measured every session.',
    imageNodeId: '1060:2254',
    titleNodeId: '1060:2273',
    bodyNodeId: '1060:2274',
  },
  {
    image: toolPronunciation,
    title: 'Listening',
    body: 'Authentic audio, varied accents. Comprehension scored in real time.',
    imageNodeId: '1060:2246',
    titleNodeId: '1060:2259',
    bodyNodeId: '1060:2260',
  },
  {
    image: toolReading,
    title: 'Reading',
    body: 'Grade-level passages with adaptive comprehension. Vocabulary built in context.',
    imageNodeId: '1060:2256',
    titleNodeId: '1060:2299',
    bodyNodeId: '1060:2300',
  },
  {
    image: toolSpontaneous,
    title: 'Writing',
    body: 'Structured prompts with rubric-based AI feedback on grammar, clarity, and ideas.',
    imageNodeId: '1060:2250',
    titleNodeId: '1060:2266',
    bodyNodeId: '1060:2267',
  },
  {
    image: toolGrammar,
    title: 'Grammar',
    body: "Targeted micro-practice surfaced from each student's own errors. No worksheets.",
    imageNodeId: '1060:2248',
    titleNodeId: '1060:2263',
    bodyNodeId: '1060:2264',
  },
  {
    image: toolVocabulary,
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
              className="inline-flex items-center bg-zene-cyan"
              style={{
                minHeight: 'var(--english-ai-highlight-h)',
                paddingLeft: 'var(--english-ai-highlight-pad-x)',
                paddingRight: 'var(--english-ai-highlight-pad-x)',
              }}
            >
              Research-backed.
            </span>
          </>
        ) : isCodeMonkey ? (
          <>
            Every{' '}
            <span
              className="inline-flex items-center bg-zene-cyan"
              style={{
                minHeight: 'var(--english-ai-highlight-h)',
                paddingLeft: 'var(--english-ai-highlight-pad-x)',
                paddingRight: 'var(--english-ai-highlight-pad-x)',
              }}
            >
              English skill
            </span>
            , individually practiced.
          </>
        ) : (
          <>
            Every{' '}
            <span
              className="inline-block bg-[#78F3FA]"
              style={{
                minHeight: 'var(--english-ai-highlight-h)',
                paddingLeft: 'var(--english-ai-highlight-pad-x)',
                paddingRight: 'var(--english-ai-highlight-pad-x)',
              }}
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
