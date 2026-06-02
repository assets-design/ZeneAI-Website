import { ApplyNowButton } from '@/components/ApplyNowButton/ApplyNowButton'
import { CAREER_JOBS } from '@/data/careers'
import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'

type CareersSectionProps = {
  panel?: boolean
}

const highlightStyle = {
  minHeight: 'var(--english-ai-highlight-h)',
  paddingLeft: 'var(--english-ai-highlight-pad-x)',
  paddingRight: 'var(--english-ai-highlight-pad-x)',
} as const

function CareerJobCard({ job }: { job: (typeof CAREER_JOBS)[number] }) {
  return (
    <article className="blog-post-card flex min-w-0 flex-col items-center text-center">
      <Link
        to={`/careers/${job.slug}`}
        className="blog-post-card__image-wrap block w-full overflow-hidden"
        style={{
          maxWidth: 'var(--blog-card-image-w)',
          height: 'var(--blog-card-image-h)',
          borderRadius: 'var(--blog-card-image-radius)',
        }}
      >
        <img src={job.image} alt="" className="h-full w-full object-cover" />
      </Link>

      <h3
        className="blog-post-card__title capitalize font-body font-semibold leading-normal text-black"
        style={{
          fontSize: 'var(--blog-card-title-size)',
          maxWidth: 'var(--blog-card-title-max-w)',
          marginTop: 'var(--blog-card-image-to-title)',
        }}
      >
        <Link to={`/careers/${job.slug}`} className="text-black hover:text-black">
          {job.title}
        </Link>
      </h3>

      <p
        className="blog-post-card__description capitalize font-body font-normal leading-normal text-black"
        style={{
          fontSize: 'var(--blog-card-body-size)',
          fontVariationSettings: "'opsz' 14",
          maxWidth: 'var(--blog-card-body-max-w)',
          marginTop: 'var(--blog-card-title-to-body)',
        }}
      >
        {job.department} · {job.location}. {job.description}
      </p>

      <Link
        to={`/careers/${job.slug}`}
        className="blog-post-card__cta capitalize font-body font-normal leading-normal text-zene-blue underline decoration-solid underline-offset-2"
        style={{
          fontSize: 'var(--blog-card-cta-size)',
          fontVariationSettings: "'opsz' 14",
          marginTop: 'var(--blog-card-body-to-cta)',
        }}
      >
        Read more →
      </Link>
    </article>
  )
}

export function CareersSection({ panel = false }: CareersSectionProps) {
  return (
    <section
      className={cn(
        'careers-page blog-post-page w-full px-[var(--section-card-gap)]',
        panel ? 'section-scroll-panel section-scroll-panel--form' : 'pt-[var(--section-card-gap)]',
      )}
      aria-labelledby="careers-heading"
    >
      <div
        className={cn(
          'blog-card relative mx-auto w-full overflow-hidden section-card-shell bg-white',
          panel && 'flex min-h-0 flex-col',
        )}
        style={{ maxWidth: 'var(--section-card-max-w)' }}
      >
        <div
          className={cn('blog-body blog-post-body', panel && 'blog-panel-body min-h-0 flex-1')}
          style={{
            paddingTop: panel
              ? 'var(--blog-panel-padding-top, var(--blog-padding-top))'
              : 'var(--blog-padding-top)',
            paddingBottom: panel
              ? 'var(--blog-panel-padding-bottom, var(--blog-padding-bottom))'
              : 'var(--blog-padding-bottom)',
          }}
        >
          <div className="blog-header grid min-w-0 grid-cols-1 items-start gap-[var(--blog-header-gap)] xl:grid-cols-[minmax(0,1fr)_auto]">
            <div className="min-w-0">
              <p
                className="font-body uppercase text-black"
                style={{
                  fontSize: 'var(--section-text-eyebrow)',
                  fontVariationSettings: "'opsz' 14",
                }}
              >
                Careers
              </p>

              <h1
                id="careers-heading"
                className="font-heading font-medium uppercase leading-none text-black"
                style={{
                  fontSize: 'var(--section-text-heading)',
                  maxWidth: 'var(--blog-heading-max-w)',
                  marginTop: 'var(--blog-eyebrow-to-heading)',
                }}
              >
                Build The Future Of{' '}
                <span
                  className="inline-flex items-center bg-zene-cyan"
                  style={highlightStyle}
                >
                  AI-Powered Learning
                </span>
              </h1>

              <p
                className="capitalize font-body font-normal leading-normal text-black"
                style={{
                  fontSize: 'var(--section-text-body)',
                  fontVariationSettings: "'opsz' 14",
                  maxWidth: 'var(--blog-body-max-w)',
                  marginTop: 'var(--blog-heading-to-body)',
                }}
              >
                Join a team helping schools deliver English AI, Code Monkey, and The Edge. Explore
                open roles and help prepare students ages 6–18 for a changing world.
              </p>
            </div>

            <div className="hero-apply-slot mx-auto shrink-0 self-start xl:mx-0">
              <ApplyNowButton href="/contact" className="max-w-full shrink-0" />
            </div>
          </div>

          <div
            className="blog-posts-grid grid min-w-0 grid-cols-1 gap-[var(--blog-cards-gap)] md:grid-cols-2 xl:grid-cols-3"
            style={{ marginTop: 'var(--blog-body-to-cards)' }}
          >
            {CAREER_JOBS.map(job => (
              <CareerJobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
