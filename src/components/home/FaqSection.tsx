import { useState } from 'react'
import { cn } from '@/lib/utils'
import rubikCube from '@/assets/figma/home/section-11/rubik-cube.png'
import rubikExpanded from '@/assets/figma/home/section-11/rubik-expanded.png'

const FAQ_ANSWER =
  'Ages 6–18 — from block coding for young learners to leadership and English fluency for high schoolers.'

const FAQ_ITEMS = [
  {
    number: '01',
    question: 'What age group is Zene AI for?',
    answer: FAQ_ANSWER,
    nodeId: '975:1951',
    barNodeId: '975:1952',
    questionNodeId: '975:1953',
    answerNodeId: '975:1954',
    iconNodeId: '975:1955',
    icon: rubikExpanded,
  },
  {
    number: '02',
    question: 'How does AI personalise learning?',
    answer: FAQ_ANSWER,
    nodeId: '975:1956',
    barNodeId: '975:1957',
    questionNodeId: '975:1959',
    iconNodeId: '975:1960',
    icon: rubikCube,
  },
  {
    number: '03',
    question: 'Is there a free trial available?',
    answer: FAQ_ANSWER,
    nodeId: '975:1961',
    barNodeId: '975:1962',
    questionNodeId: '975:1964',
    iconNodeId: '975:1965',
    icon: rubikCube,
  },
  {
    number: '04',
    question: 'What subjects does Zene AI cover?',
    answer: FAQ_ANSWER,
    nodeId: '975:1966',
    barNodeId: '975:1967',
    questionNodeId: '975:1969',
    iconNodeId: '975:1970',
    icon: rubikCube,
  },
  {
    number: '05',
    question: 'Why AI over traditional English teaching?',
    answer: FAQ_ANSWER,
    nodeId: '975:1971',
    barNodeId: '975:1972',
    questionNodeId: '975:1974',
    iconNodeId: '975:1975',
    icon: rubikCube,
  },
] as const

const CODE_MONKEY_FAQ_ITEMS = [
  {
    number: '01',
    question: 'What age group is Zene.ai for?',
    answer:
      "Zene.ai is built for Grades 3 through 10 in Indian schools. We adapt to each student's level within that range.",
    nodeId: '975:1951',
    barNodeId: '975:1952',
    questionNodeId: '975:1953',
    answerNodeId: '975:1954',
    iconNodeId: '975:1955',
    icon: rubikExpanded,
  },
  {
    number: '02',
    question: 'How much teacher time does it need?',
    answer:
      'One 40-minute session per week is the minimum. The platform runs the practice — teachers review the dashboard.',
    nodeId: '975:1956',
    barNodeId: '975:1957',
    questionNodeId: '975:1959',
    answerNodeId: '975:1954',
    iconNodeId: '975:1960',
    icon: rubikCube,
  },
  {
    number: '03',
    question: 'Is it aligned to our board?',
    answer:
      "Yes. We map to CBSE, ICSE, IB, and Cambridge frameworks, and we adapt to your school's current textbook.",
    nodeId: '975:1961',
    barNodeId: '975:1962',
    questionNodeId: '975:1964',
    answerNodeId: '975:1954',
    iconNodeId: '975:1965',
    icon: rubikCube,
  },
  {
    number: '04',
    question: 'What does it cost?',
    answer:
      'Pricing depends on cohort size. We share a transparent per-student rate after the discovery call.',
    nodeId: '975:1966',
    barNodeId: '975:1967',
    questionNodeId: '975:1969',
    answerNodeId: '975:1954',
    iconNodeId: '975:1970',
    icon: rubikCube,
  },
  {
    number: '05',
    question: 'When does the cohort start?',
    answer:
      'We onboard for the AY 2026–27 cohort. Applications close once the cohort is full.',
    nodeId: '975:1971',
    barNodeId: '975:1972',
    questionNodeId: '975:1974',
    answerNodeId: '975:1954',
    iconNodeId: '975:1975',
    icon: rubikCube,
  },
] as const

const THE_EDGE_FAQ_ITEMS = [
  {
    number: '01',
    question: 'Why is a structured leadership assessment better than personality tests?',
    answer:
      'Personality tests label students. The Edge assesses observable, teachable behaviours — every result is followed by a specific development activity.',
    nodeId: '975:1951',
    barNodeId: '975:1952',
    questionNodeId: '975:1953',
    answerNodeId: '975:1954',
    iconNodeId: '975:1955',
    icon: rubikExpanded,
  },
  {
    number: '02',
    question: 'What skills are actually developed?',
    answer: '',
    nodeId: '975:1956',
    barNodeId: '975:1957',
    questionNodeId: '975:1959',
    answerNodeId: '975:1954',
    iconNodeId: '975:1960',
    icon: rubikCube,
  },
  {
    number: '03',
    question: 'How is it relevant for middle schoolers?',
    answer: '',
    nodeId: '975:1961',
    barNodeId: '975:1962',
    questionNodeId: '975:1964',
    answerNodeId: '975:1954',
    iconNodeId: '975:1965',
    icon: rubikCube,
  },
  {
    number: '04',
    question: 'How is The Edge different from other leadership programmes?',
    answer: '',
    nodeId: '975:1966',
    barNodeId: '975:1967',
    questionNodeId: '975:1969',
    answerNodeId: '975:1954',
    iconNodeId: '975:1970',
    icon: rubikCube,
  },
  {
    number: '05',
    question: 'How is it introduced without disrupting existing programmes?',
    answer: '',
    nodeId: '975:1971',
    barNodeId: '975:1972',
    questionNodeId: '975:1974',
    answerNodeId: '975:1954',
    iconNodeId: '975:1975',
    icon: rubikCube,
  },
] as const

type FaqItemData = (typeof FAQ_ITEMS)[number]

type FaqItemProps = FaqItemData & {
  isOpen: boolean
  onToggle: () => void
  normalCaseBody?: boolean
}

function FaqItem({
  number,
  question,
  answer,
  nodeId,
  barNodeId,
  questionNodeId,
  answerNodeId,
  iconNodeId,
  isOpen,
  onToggle,
  normalCaseBody = false,
}: FaqItemProps) {
  return (
    <div data-node-id={nodeId}>
      <button
        type="button"
        className={cn(
          'flex w-full max-w-[var(--faq-item-max-w)] border-0 text-left',
          isOpen ? 'items-start' : 'items-center max-sm:min-h-0 max-sm:py-[var(--faq-item-padding-y)]',
        )}
        style={{
          gap: 'var(--faq-icon-gap)',
          paddingLeft: 'var(--faq-item-padding-x)',
          paddingRight: 'var(--faq-item-padding-x)',
          paddingTop: isOpen ? 'var(--faq-item-padding-y)' : undefined,
          paddingBottom: isOpen ? 'var(--faq-item-padding-y-expanded)' : undefined,
          borderRadius: 'var(--faq-item-radius)',
          backgroundColor: '#177ec0',
          height: isOpen ? 'auto' : 'var(--faq-item-collapsed-h)',
          minHeight: isOpen ? 'var(--faq-item-expanded-min-h)' : undefined,
        }}
        onClick={onToggle}
        aria-expanded={isOpen}
        data-node-id={barNodeId}
      >
        <img
          src={isOpen ? rubikExpanded : rubikCube}
          alt=""
          aria-hidden
          className="shrink-0 object-contain"
          style={{
            width: 'var(--faq-icon-w)',
            height: 'var(--faq-icon-h)',
          }}
          data-node-id={iconNodeId}
        />

        <div className="min-w-0 flex-1">
          <p
            className={cn(
              'font-body font-medium leading-normal text-white',
              normalCaseBody ? 'normal-case' : 'capitalize',
            )}
            style={{
              fontSize: 'var(--faq-question-size)',
              fontVariationSettings: "'opsz' 14",
            }}
            data-node-id={questionNodeId}
          >
            {number}. {question}
          </p>

          {isOpen && answer ? (
            <p
              className={cn(
                'font-body font-normal leading-normal text-white',
                normalCaseBody ? 'normal-case' : 'capitalize',
              )}
              style={{
                fontSize: 'var(--faq-answer-size)',
                fontVariationSettings: "'opsz' 14",
                maxWidth: 'var(--faq-answer-max-w)',
                marginTop: 'var(--faq-question-to-answer)',
              }}
              data-node-id={answerNodeId ?? '975:1954'}
            >
              {answer}
            </p>
          ) : null}
        </div>
      </button>
    </div>
  )
}

type FaqSectionProps = {
  variant?: 'home' | 'code-monkey' | 'the-edge'
}

export function FaqSection({ variant = 'home' }: FaqSectionProps) {
  const isCodeMonkey = variant === 'code-monkey'
  const isTheEdge = variant === 'the-edge'
  const isCustomProgram = isCodeMonkey || isTheEdge
  const items = isTheEdge ? THE_EDGE_FAQ_ITEMS : isCodeMonkey ? CODE_MONKEY_FAQ_ITEMS : FAQ_ITEMS
  const headingId = isTheEdge ? 'the-edge-faq-heading' : isCodeMonkey ? 'code-monkey-faq-heading' : 'faq-heading'

  const [openIndex, setOpenIndex] = useState(-1)

  const handleToggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? -1 : index))
  }

  const highlightStyle = {
    minHeight: 'var(--english-ai-highlight-h)',
    paddingLeft: 'var(--english-ai-highlight-pad-x)',
    paddingRight: 'var(--english-ai-highlight-pad-x)',
  } as const

  return (
    <section
      id="faqs"
      className="w-full px-[5px] pt-[5px]"
      aria-labelledby={headingId}
      data-node-id="975:1944"
    >
      <div
        className="relative mx-auto flex h-full min-h-0 w-full flex-col overflow-hidden section-card-shell bg-white"
        style={{ maxWidth: 'var(--section-card-max-w)' }}
        data-node-id="975:1945"
      >
        <div
          className="section-card-inner flex min-h-0 flex-1 flex-col"
          style={{
            paddingLeft: 'var(--section-padding-x)',
            paddingRight: 'var(--section-padding-x)',
            paddingTop: 'var(--faq-padding-top)',
            paddingBottom: 'var(--faq-padding-bottom)',
          }}
        >
          {isCustomProgram ? (
            <p
              className="font-body text-black"
              style={{
                fontSize: 'var(--section-text-eyebrow)',
                fontVariationSettings: "'opsz' 14",
              }}
            >
              FAQ
            </p>
          ) : null}

          <h2
            id={headingId}
            className="font-heading font-medium uppercase leading-none text-black"
            style={{
              fontSize: 'var(--section-text-heading)',
              marginTop: isCustomProgram ? 'var(--section-gap)' : undefined,
            }}
            data-node-id="975:1946"
          >
            {isCustomProgram ? (
              <>
                <span data-node-id="975:1947">Frequently asked </span>
                <span
                  className="inline-flex items-center bg-zene-cyan"
                  style={highlightStyle}
                  data-node-id="975:1950"
                >
                  questions.
                </span>
              </>
            ) : (
              <>
                <span data-node-id="975:1947">Frequently asked </span>
                <span className="bg-[#78F3FA]" data-node-id="975:1950">
                  Questions
                </span>
              </>
            )}
          </h2>

          <div
            className="section-faq-list flex flex-col"
            style={{
              marginTop: 'var(--faq-heading-to-list)',
              gap: 'var(--faq-item-gap)',
            }}
          >
            {items.map((item, index) => (
              <FaqItem
                key={item.nodeId}
                {...item}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
                normalCaseBody={isCustomProgram}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
