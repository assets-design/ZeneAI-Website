import { ApplyNowButton } from '@/components/ApplyNowButton/ApplyNowButton'
import { BLOG_POSTS } from '@/data/blogPosts'
import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'

type BlogSectionProps = {
  panel?: boolean
}

const highlightStyle = {
  minHeight: 'var(--english-ai-highlight-h)',
  paddingLeft: 'var(--english-ai-highlight-pad-x)',
  paddingRight: 'var(--english-ai-highlight-pad-x)',
} as const

function BlogPostCard({
  post,
}: {
  post: (typeof BLOG_POSTS)[number]
}) {
  return (
    <article className="blog-post-card flex min-w-0 flex-col items-center text-center">
      <Link
        to={`/blog/${post.slug}`}
        className="blog-post-card__image-wrap block w-full overflow-hidden"
        style={{
          maxWidth: 'var(--blog-card-image-w)',
          height: 'var(--blog-card-image-h)',
          borderRadius: 'var(--blog-card-image-radius)',
        }}
        data-node-id={post.imageNodeId}
      >
        <img
          src={post.image}
          alt=""
          className="h-full w-full object-cover"
        />
      </Link>

      <h3
        className="blog-post-card__title capitalize font-body font-semibold leading-normal text-black"
        style={{
          fontSize: 'var(--blog-card-title-size)',
          maxWidth: 'var(--blog-card-title-max-w)',
          marginTop: 'var(--blog-card-image-to-title)',
        }}
        data-node-id={post.titleNodeId}
      >
        <Link to={`/blog/${post.slug}`} className="text-black hover:text-black">
          {post.title}
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
        data-node-id={post.bodyNodeId}
      >
        {post.description}
      </p>

      <Link
        to={`/blog/${post.slug}`}
        className="blog-post-card__cta capitalize font-body font-normal leading-normal text-zene-blue underline decoration-solid underline-offset-2"
        style={{
          fontSize: 'var(--blog-card-cta-size)',
          fontVariationSettings: "'opsz' 14",
          marginTop: 'var(--blog-card-body-to-cta)',
        }}
        data-node-id={post.ctaNodeId}
      >
        Read more →
      </Link>
    </article>
  )
}

export function BlogSection({ panel = false }: BlogSectionProps) {
  return (
    <section
      className={cn(
        'blog-page blog-post-page w-full px-[var(--section-card-gap)]',
        panel ? 'section-scroll-panel section-scroll-panel--form' : 'pt-[var(--section-card-gap)]',
      )}
      aria-labelledby="blog-heading"
      data-node-id="1165:779"
    >
      <div
        className={cn(
          'blog-card relative mx-auto w-full overflow-hidden section-card-shell bg-white',
          panel && 'flex min-h-0 flex-col',
        )}
        style={{ maxWidth: 'var(--section-card-max-w)' }}
        data-node-id="1147:3586"
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
                className="section-eyebrow font-body uppercase text-black"
                style={{
                  fontSize: 'var(--section-text-eyebrow)',
                  fontVariationSettings: "'opsz' 14",
                }}
                data-node-id="1147:3599"
              >
                The blogs
              </p>

              <h1
                id="blog-heading"
                className="font-heading font-medium uppercase leading-none text-black"
                style={{
                  fontSize: 'var(--section-text-heading)',
                  maxWidth: 'var(--blog-heading-max-w)',
                  marginTop: 'var(--blog-eyebrow-to-heading)',
                }}
                data-node-id="1147:3605"
              >
                Ideas, Skills &{' '}
                <span
                  className="inline-flex items-center bg-zene-cyan"
                  style={highlightStyle}
                  data-node-id="1147:3604"
                >
                  Innovation for Future-
                </span>
                Ready Schools
              </h1>

              <p
                className="capitalize font-body font-normal leading-normal text-black"
                style={{
                  fontSize: 'var(--section-text-body)',
                  fontVariationSettings: "'opsz' 14",
                  maxWidth: 'var(--blog-body-max-w)',
                  marginTop: 'var(--blog-heading-to-body)',
                }}
                data-node-id="1147:3606"
              >
                Explore practical insights on AI-powered learning, coding education, communication
                skills, and student development. Discover how schools can prepare learners for
                success in an evolving digital world.
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
            {BLOG_POSTS.map(post => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
