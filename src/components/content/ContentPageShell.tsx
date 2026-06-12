import { ApplyNowButton } from '@/components/ApplyNowButton/ApplyNowButton'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

const HEADING_HIGHLIGHT_CLASS = 'heading-highlight'

type ContentPageShellProps = {
  headingId: string
  eyebrow: string
  eyebrowLink?: { to: string; label: string }
  title: ReactNode
  subtitle?: string
  intro?: string
  showApply?: boolean
  children: ReactNode
}

export function ContentPageShell({
  headingId,
  eyebrow,
  eyebrowLink,
  title,
  subtitle,
  intro,
  showApply = true,
  children,
}: ContentPageShellProps) {
  return (
    <section
      className="content-page blog-post-page w-full px-[var(--section-card-gap)] pt-[var(--section-card-gap)]"
      aria-labelledby={headingId}
    >
      <div
        className="blog-card content-page-card relative mx-auto w-full overflow-hidden section-card-shell bg-white"
        style={{ maxWidth: 'var(--section-card-max-w)' }}
      >
        <div
          className="blog-body content-page-body blog-post-body"
          style={{
            paddingTop: 'var(--blog-padding-top)',
            paddingBottom: 'var(--blog-padding-bottom)',
          }}
        >
          <div className="blog-header grid min-w-0 grid-cols-1 items-start gap-[var(--blog-header-gap)] xl:grid-cols-[minmax(0,1fr)_auto]">
            <div className="min-w-0">
              <p
                className="section-eyebrow font-body uppercase text-black"
                style={{
                  fontSize: 'var(--section-text-eyebrow)',
                  fontVariationSettings: "'opsz' 14",
                }}
              >
                {eyebrowLink ? (
                  <Link to={eyebrowLink.to} className="text-zene-blue underline underline-offset-2">
                    {eyebrowLink.label}
                  </Link>
                ) : (
                  eyebrow
                )}
              </p>

              <h1
                id={headingId}
                className="font-heading font-medium uppercase leading-none text-black"
                style={{
                  fontSize: 'var(--blog-post-title-size)',
                  maxWidth: 'var(--blog-post-title-max-w)',
                  marginTop: 'var(--blog-eyebrow-to-heading)',
                }}
              >
                {title}
              </h1>

              {subtitle ? (
                <p
                  className="capitalize font-body font-normal leading-normal text-black/70"
                  style={{
                    fontSize: 'var(--blog-post-meta-size)',
                    fontVariationSettings: "'opsz' 14",
                    marginTop: 'var(--blog-post-title-to-meta)',
                  }}
                >
                  {subtitle}
                </p>
              ) : null}

              {intro ? (
                <p
                  className="w-full max-w-none capitalize font-body font-normal leading-normal text-black"
                  style={{
                    fontSize: 'var(--section-text-body)',
                    fontVariationSettings: "'opsz' 14",
                    marginTop: 'var(--blog-heading-to-body)',
                  }}
                >
                  {intro}
                </p>
              ) : null}
            </div>

            {showApply ? (
              <div className="hero-apply-slot mx-auto shrink-0 self-start xl:mx-0">
                <ApplyNowButton href="/contact" className="max-w-full shrink-0" />
              </div>
            ) : null}
          </div>

          {children}
        </div>
      </div>
    </section>
  )
}

export { HEADING_HIGHLIGHT_CLASS }
