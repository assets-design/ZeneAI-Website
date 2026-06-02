import rubikCube from '@/assets/figma/home/section-11/rubik-cube.png'
import rubikExpanded from '@/assets/figma/home/section-11/rubik-expanded.png'
import type { FaqItem } from '@/data/faqItems'
import { cn } from '@/lib/utils'
import { useState } from 'react'

type FaqAccordionListProps = {
  items: FaqItem[]
}

function FaqAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div>
      <button
        type="button"
        className={cn(
          'faq-item-button flex w-full max-w-[var(--faq-item-max-w)] overflow-hidden border-0 text-left',
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
      >
        <img
          src={isOpen ? rubikExpanded : item.icon}
          alt=""
          aria-hidden
          className="shrink-0 object-contain"
          style={{
            width: 'var(--faq-icon-w)',
            height: 'var(--faq-icon-h)',
          }}
        />

        <div className="min-w-0 flex-1">
          <p
            className="font-body font-medium capitalize leading-normal text-white"
            style={{
              fontSize: 'var(--faq-question-size)',
              fontVariationSettings: "'opsz' 14",
            }}
          >
            {item.number}. {item.question}
          </p>

          {isOpen ? (
            <p
              className="font-body font-normal capitalize leading-normal text-white"
              style={{
                fontSize: 'var(--faq-answer-size)',
                fontVariationSettings: "'opsz' 14",
                maxWidth: 'var(--faq-answer-max-w)',
                marginTop: 'var(--faq-question-to-answer)',
              }}
            >
              {item.answer}
            </p>
          ) : null}
        </div>
      </button>
    </div>
  )
}

export function FaqAccordionList({ items }: FaqAccordionListProps) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div
      className="section-faq-list mx-auto flex w-full flex-col"
      style={{
        marginTop: 'var(--blog-body-to-cards)',
        gap: 'var(--faq-item-gap)',
        maxWidth: 'var(--faq-item-max-w)',
      }}
    >
      {items.map((item, index) => (
        <FaqAccordionItem
          key={item.number}
          item={item}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(index)}
        />
      ))}
    </div>
  )
}
