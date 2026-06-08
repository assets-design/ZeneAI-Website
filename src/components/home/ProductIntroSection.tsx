import { useState } from 'react'
import tabTheEdgeIcon from '@/assets/figma/home/section-2/tab-the-edge.png'
import codeMonkeyDemoVideo from '@/data/01.mp4'
import { cn } from '@/lib/utils'
import { TryFreeSessionButton } from '@/components/home/TryFreeSessionButton'

type ProductTab = 'english-ai' | 'code-monkey' | 'the-edge'

const TABS: {
  id: ProductTab
  label: string
  icon?: string
  iconW: string
  iconH: string
  width: string
  activeClass: string
  inactiveClass: string
}[] = [
  {
    id: 'english-ai',
    label: 'English AI',
    icon: '/assets/figma/Comp%202%201.png',
    iconW: 'calc(64px * var(--header-font-scale))',
    iconH: 'calc(84px * var(--header-font-scale))',
    width: 'var(--section-tab-english-w)',
    activeClass: 'bg-zene-pink',
    inactiveClass: 'border border-black bg-white',
  },
  {
    id: 'code-monkey',
    label: 'Code Monkey',
    icon: '/assets/figma/home/section-2/tab-code-monkey.png',
    iconW: 'calc(87px * var(--header-font-scale))',
    iconH: 'calc(66px * var(--header-font-scale))',
    width: 'var(--section-tab-code-w)',
    activeClass: 'bg-zene-pink',
    inactiveClass: 'border border-black bg-white',
  },
  {
    id: 'the-edge',
    label: 'The Edges',
    icon: tabTheEdgeIcon,
    iconW: 'calc(69px * var(--header-font-scale))',
    iconH: 'calc(69px * var(--header-font-scale))',
    width: 'var(--section-tab-edge-w)',
    activeClass: 'bg-zene-pink',
    inactiveClass: 'border border-black bg-white',
  },
]

type ProductPanelContent = {
  title: string
  subtitle: string
  bodyParagraphs: string[]
  ctaLabel?: string
  ctaLabelSize?: 'default' | 'long'
  video: string
}

const PRODUCT_PANELS: Record<ProductTab, ProductPanelContent> = {
  'english-ai': {
    title: 'AI Speaking Lab',
    subtitle: 'The speaking practice your classroom timetable cannot provide.',
    bodyParagraphs: [
      'One teacher cannot give 1-on-1 speaking practice to 30 students in 40 minutes. Zene does every day, for every student, across seven skill blocks: Speaking, Reading, Grammar, Phonics, Vocabulary, Comprehension, and Live Conversation.',
      'Mapped to NCF and NEP 2020. Runs on the devices your school already owns. No language-lab room required.',
    ],
    video: '/assets/figma/00%20How%20to%20get%20started_.mp4',
  },
  'code-monkey': {
    title: 'CODE MONKEY',
    subtitle: 'Code Is Being Learned, The Fun Way.',
    bodyParagraphs: [
      'Coding skills are built through a game-based AI and coding curriculum trusted by 45 million+ kids worldwide. Students progress from block coding to Python and web development through hands-on projects. Real-world programming, creative problem-solving, teacher dashboards, automatic grading, and lesson plans support every learning stage.',
    ],
    ctaLabel: 'EXPLORE CODING COURSES',
    ctaLabelSize: 'long',
    video: codeMonkeyDemoVideo,
  },
  'the-edge': {
    title: 'THE EDGE',
    subtitle: "Life Skills Are Being Shaped For Tomorrow's Leaders.",
    bodyParagraphs: [
      'Leadership, resilience, financial literacy, and communication are developed through The Edge, an award-winning curriculum for Grades 6–12. Students build social-emotional and practical skills through structured learning. Designed using global frameworks, it includes internships, entrepreneurship challenges, and career readiness experiences that prepare learners for future success.',
    ],
    ctaLabel: 'DISCOVER THE EDGE',
    video: '/assets/figma/00%20How%20to%20get%20started_.mp4',
  },
}

function ProductTabPanel({ activeTab }: { activeTab: ProductTab }) {
  const content = PRODUCT_PANELS[activeTab]

  return (
    <div
      className="product-tab-panel grid min-h-0 flex-1 items-stretch xl:grid-cols-[minmax(0,1fr)_var(--section-dashboard-w)]"
      style={{ gap: 'var(--section-dashboard-gap)' }}
      data-active-tab={activeTab}
    >
      <div className="product-tab-copy flex h-full min-h-0 min-w-0 flex-col">
        <div
          className="flex shrink-0 flex-col"
          style={{ gap: 'var(--section-content-gap)' }}
        >
          <h3
            className="product-tab-panel-title font-heading font-medium uppercase leading-none text-black"
            style={{ fontSize: 'var(--product-tab-panel-title-size, var(--section-text-tab))' }}
            data-node-id="642:1150"
          >
            {content.title}
          </h3>
          <p
            className="normal-case font-body font-medium text-black"
            style={{
              fontSize: 'var(--section-text-body)',
              fontVariationSettings: "'opsz' 14",
            }}
            data-node-id="642:1151"
          >
            {content.subtitle}
          </p>
          <div
            className="product-tab-body flex flex-col"
            style={{ gap: 'var(--section-body-paragraph-gap)' }}
          >
            {content.bodyParagraphs.map((paragraph, index) => (
              <p
                key={index}
                className="normal-case font-body font-normal leading-normal text-black"
                style={{
                  fontSize: 'var(--section-text-body)',
                  fontVariationSettings: "'opsz' 14",
                  maxWidth: 'var(--section-text-max-w)',
                }}
                data-node-id={index === 0 ? '676:2685' : undefined}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div
          className="product-tab-panel-spacer min-h-0 flex-1"
          style={{ minHeight: 'var(--section-body-to-cta)' }}
          aria-hidden
        />
        <TryFreeSessionButton
          className="shrink-0"
          label={content.ctaLabel}
          labelSize={content.ctaLabelSize}
        />
      </div>
      <div
        className="product-tab-media w-full overflow-hidden shadow-[0_0_2px_rgba(0,0,0,0.25)] xl:w-[var(--section-dashboard-w)] xl:max-w-[var(--section-dashboard-w)] xl:shrink-0"
        style={{
          height: 'var(--section-dashboard-h)',
          borderRadius: 'var(--section-dashboard-radius)',
        }}
        data-node-id="642:1287"
      >
        <video
          key={content.video}
          src={content.video}
          autoPlay
          muted
          loop
          playsInline
          className="size-full object-cover"
          aria-label="Zene product demo"
        />
      </div>
    </div>
  )
}

export function ProductIntroSection() {
  const [activeTab, setActiveTab] = useState<ProductTab>('english-ai')

  return (
    <section
      id="product-intro"
      className="w-full px-[5px] pt-[5px]"
      aria-labelledby="product-intro-heading"
      data-node-id="642:1124"
    >
      <div
        className="product-intro-card section-card-shell relative mx-auto flex h-full min-h-0 w-full flex-col overflow-hidden bg-white"
        style={{ maxWidth: 'var(--section-card-max-w)' }}
      >
        <div
          className="product-intro-inner flex min-h-0 flex-1 flex-col"
          style={{
            paddingLeft: 'var(--section-padding-x)',
            paddingRight: 'var(--section-padding-x)',
            paddingTop: 'var(--section-padding-top)',
            paddingBottom: 'var(--section-padding-bottom)',
            gap: 'var(--section-gap)',
          }}
        >
          {/* Section header */}
          <div className="shrink-0" data-node-id="751:523">
            <p
              className="section-eyebrow font-body uppercase text-black"
              style={{
                fontSize: 'var(--section-text-eyebrow)',
                fontVariationSettings: "'opsz' 14",
              }}
              data-node-id="751:522"
            >
              What we bring to your school
            </p>
            <h2
              id="product-intro-heading"
              className="relative font-heading font-medium uppercase leading-none text-black"
              style={{
                fontSize: 'var(--section-text-heading)',
                marginTop: 'var(--section-eyebrow-to-heading)',
              }}
              data-node-id="751:510"
            >
              Built for{' '}
              <span className="bg-[#78F3FA]" data-node-id="751:509">
                every learner
              </span>{' '}
              in your school.
            </h2>
          </div>

          {/* Product tabs */}
          <div
            className="product-intro-tabs flex shrink-0 flex-col items-stretch sm:flex-row sm:flex-wrap sm:items-center"
            style={{
              gap: 'var(--section-tab-gap)',
              marginTop: 'calc(var(--section-heading-to-tabs) - var(--section-gap))',
            }}
          >
            {TABS.map(tab => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  aria-pressed={isActive}
                  className={cn(
                    'inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-[var(--section-tab-radius)] px-4 transition-none sm:w-auto sm:max-w-full sm:gap-3 sm:px-6',
                    isActive ? tab.activeClass : tab.inactiveClass,
                  )}
                  style={{
                    height: 'var(--section-tab-h)',
                    maxWidth: tab.width,
                    flex: '1 1 auto',
                    fontSize: 'var(--section-text-tab)',
                  }}
                >
                  {tab.icon && (
                    <img
                      src={tab.icon}
                      alt=""
                      aria-hidden
                      className="object-contain"
                      style={{ width: tab.iconW, height: tab.iconH }}
                    />
                  )}
                  <span className="product-intro-tab-label font-heading font-medium uppercase leading-none text-black">
                    {tab.label}
                  </span>
                </button>
              )
            })}
          </div>

          <ProductTabPanel activeTab={activeTab} />
        </div>
      </div>
    </section>
  )
}
