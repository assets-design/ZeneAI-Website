import { useState } from 'react'
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
    icon: '/assets/figma/home/section-2/tab-the-edge.png',
    iconW: 'calc(80px * var(--header-font-scale))',
    iconH: 'calc(69px * var(--header-font-scale))',
    width: 'var(--section-tab-edge-w)',
    activeClass: 'bg-zene-pink',
    inactiveClass: 'border border-black bg-white',
  },
]

const PRODUCT_PANEL_CONTENT = {
  title: 'AI Speaking Lab',
  subtitle: 'The speaking practice your classroom timetable cannot provide.',
  bodyParagraphs: [
    'One teacher cannot give 1-on-1 speaking practice to 30 students in 40 minutes. Zene does every day, for every student, across seven skill blocks: Speaking, Reading, Grammar, Phonics, Vocabulary, Comprehension, and Live Conversation.',
    'Mapped to NCF and NEP 2020. Runs on the devices your school already owns. No language-lab room required.',
  ],
  video: '/assets/figma/00%20How%20to%20get%20started_.mp4',
}

function ProductTabPanel() {
  return (
    <div
      className="product-tab-panel grid min-h-0 flex-1 items-stretch xl:grid-cols-[minmax(0,1fr)_var(--section-dashboard-w)]"
      style={{ gap: 'var(--section-dashboard-gap)' }}
    >
      <div className="product-tab-copy flex h-full min-h-0 min-w-0 flex-col">
        <div
          className="flex shrink-0 flex-col"
          style={{ gap: 'var(--section-content-gap)' }}
        >
          <h3
            className="font-heading font-medium uppercase leading-none text-black"
            style={{ fontSize: 'var(--section-text-title)' }}
            data-node-id="642:1150"
          >
            {PRODUCT_PANEL_CONTENT.title}
          </h3>
          <p
            className="capitalize font-body font-medium text-black"
            style={{
              fontSize: 'var(--section-text-body)',
              fontVariationSettings: "'opsz' 14",
            }}
            data-node-id="642:1151"
          >
            {PRODUCT_PANEL_CONTENT.subtitle}
          </p>
          <div
            className="product-tab-body flex flex-col"
            style={{ gap: 'var(--section-body-paragraph-gap)' }}
          >
            {PRODUCT_PANEL_CONTENT.bodyParagraphs.map((paragraph, index) => (
              <p
                key={index}
                className="capitalize font-body font-normal leading-normal text-black"
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
          className="min-h-0 flex-1"
          style={{ minHeight: 'var(--section-body-to-cta)' }}
          aria-hidden
        />
        <TryFreeSessionButton className="shrink-0" />
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
          src={PRODUCT_PANEL_CONTENT.video}
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
              className="font-body uppercase text-black"
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
                marginTop: 'var(--section-gap)',
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
            className="flex shrink-0 flex-col items-stretch sm:flex-row sm:flex-wrap sm:items-center"
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
                  <span className="font-heading font-medium uppercase leading-none text-black">
                    {tab.label}
                  </span>
                </button>
              )
            })}
          </div>

          <ProductTabPanel />
        </div>
      </div>
    </section>
  )
}
