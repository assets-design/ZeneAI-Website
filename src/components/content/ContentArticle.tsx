import { cn } from '@/lib/utils'

export type ContentSection = {
  heading?: string
  paragraphs: string[]
}

type ContentArticleProps = {
  sections: ContentSection[]
  className?: string
  marginTop?: string
}

export function ContentArticle({
  sections,
  className,
  marginTop = 'var(--blog-post-feature-to-content)',
}: ContentArticleProps) {
  return (
    <div
      className={cn('blog-post-content mx-auto w-full min-w-0', className)}
      style={{
        maxWidth: 'var(--blog-post-content-max-w)',
        marginTop,
      }}
    >
      {sections.map((section, index) => (
        <section
          key={section.heading ?? `section-${index}`}
          className={cn(index > 0 && 'blog-post-section')}
          style={index > 0 ? { marginTop: 'var(--blog-post-section-gap)' } : undefined}
        >
          {section.heading ? (
            <h2
              className="font-heading font-medium uppercase leading-none text-black"
              style={{
                fontSize: 'var(--blog-post-heading-size)',
                marginBottom: 'var(--blog-post-heading-to-body)',
              }}
            >
              {section.heading}
            </h2>
          ) : null}

          {section.paragraphs.map((paragraph, paragraphIndex) => (
            <p
              key={paragraphIndex}
              className="capitalize font-body font-normal leading-normal text-black"
              style={{
                fontSize: 'var(--blog-post-body-size)',
                fontVariationSettings: "'opsz' 14",
                marginTop:
                  paragraphIndex > 0 || section.heading
                    ? 'var(--blog-post-paragraph-gap)'
                    : undefined,
              }}
            >
              {paragraph}
            </p>
          ))}
        </section>
      ))}
    </div>
  )
}
