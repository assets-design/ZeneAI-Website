import { ApplyNowButton } from '@/components/ApplyNowButton/ApplyNowButton'
import type { BlogPost } from '@/data/blogPosts'
import { getAdjacentBlogPosts } from '@/data/blogPosts'
import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'

type BlogPostSectionProps = {
  post: BlogPost
}

function BlogPostNav({
  prev,
  next,
}: {
  prev: BlogPost | null
  next: BlogPost | null
}) {
  if (!prev && !next) {
    return null
  }

  return (
    <nav
      className="blog-post-nav grid min-w-0 grid-cols-1 gap-[var(--blog-post-nav-gap)] border-t border-black/10 pt-[var(--blog-post-nav-padding-top)] md:grid-cols-2"
      aria-label="Blog post navigation"
    >
      {prev ? (
        <Link
          to={`/blog/${prev.slug}`}
          className="blog-post-nav__link group flex min-w-0 flex-col items-start text-left"
        >
          <span
            className="font-body uppercase text-black/60"
            style={{
              fontSize: 'var(--blog-post-nav-label-size)',
              fontVariationSettings: "'opsz' 14",
            }}
          >
            ← Previous
          </span>
          <span
            className="capitalize font-body font-semibold leading-normal text-black group-hover:text-zene-blue"
            style={{
              fontSize: 'var(--blog-post-nav-title-size)',
              fontVariationSettings: "'opsz' 14",
              marginTop: 'var(--blog-post-nav-label-to-title)',
            }}
          >
            {prev.title}
          </span>
        </Link>
      ) : (
        <div className="hidden md:block" aria-hidden />
      )}

      {next ? (
        <Link
          to={`/blog/${next.slug}`}
          className="blog-post-nav__link group flex min-w-0 flex-col items-start text-left md:col-start-2 md:items-end md:text-right"
        >
          <span
            className="font-body uppercase text-black/60"
            style={{
              fontSize: 'var(--blog-post-nav-label-size)',
              fontVariationSettings: "'opsz' 14",
            }}
          >
            Next →
          </span>
          <span
            className="capitalize font-body font-semibold leading-normal text-black group-hover:text-zene-blue"
            style={{
              fontSize: 'var(--blog-post-nav-title-size)',
              fontVariationSettings: "'opsz' 14",
              marginTop: 'var(--blog-post-nav-label-to-title)',
            }}
          >
            {next.title}
          </span>
        </Link>
      ) : null}
    </nav>
  )
}

export function BlogPostSection({ post }: BlogPostSectionProps) {
  const { prev, next } = getAdjacentBlogPosts(post.slug)

  return (
    <section
      className="blog-post-page w-full px-[var(--section-card-gap)] pt-[var(--section-card-gap)]"
      aria-labelledby="blog-post-heading"
    >
      <div
        className="blog-card blog-post-card relative mx-auto w-full overflow-hidden section-card-shell bg-white"
        style={{ maxWidth: 'var(--section-card-max-w)' }}
      >
        <div
          className="blog-body blog-post-body"
          style={{
            paddingTop: 'var(--blog-padding-top)',
            paddingBottom: 'var(--blog-padding-bottom)',
          }}
        >
          <div
            id="blog-post-header"
            className="blog-post-header program-hero-inner flex min-w-0 flex-col"
            style={{ gap: 'var(--blog-header-gap)' }}
          >
            <div className="program-hero-top-row flex min-w-0 items-end justify-end">
              <div className="hero-apply-slot shrink-0">
                <ApplyNowButton href="/contact" />
              </div>
            </div>

            <div className="blog-post-header-copy min-w-0">
              <p
                className="section-eyebrow font-body uppercase text-black"
                style={{
                  fontSize: 'var(--section-text-eyebrow)',
                  fontVariationSettings: "'opsz' 14",
                }}
              >
                <Link to="/blog" className="text-zene-blue underline underline-offset-2">
                  The blogs
                </Link>
              </p>

              <p
                className="capitalize font-body font-normal leading-normal text-black/70"
                style={{
                  fontSize: 'var(--blog-post-meta-size)',
                  fontVariationSettings: "'opsz' 14",
                  marginTop: 'var(--blog-eyebrow-to-heading)',
                }}
              >
                {post.published} · {post.readTime}
              </p>
            </div>
          </div>

          <div
            className="blog-post-feature-wrap w-full overflow-hidden"
            style={{
              marginTop: 'var(--blog-post-header-to-feature)',
              borderRadius: 'var(--blog-card-image-radius)',
              maxHeight: 'var(--blog-post-feature-h)',
            }}
          >
            <img
              src={post.image}
              alt=""
              className="h-full w-full object-cover"
              style={{ minHeight: 'var(--blog-post-feature-h)' }}
            />
          </div>

          <div className="blog-post-feature-caption w-full min-w-0 max-w-none">
            <h1
              id="blog-post-heading"
              className="blog-post-card__title w-full max-w-none capitalize font-body font-semibold leading-normal text-black"
              style={{
                fontSize: 'var(--blog-card-title-size)',
                marginTop: 'var(--blog-card-image-to-title)',
              }}
            >
              {post.title}
            </h1>

            <p
              className="blog-post-card__description w-full max-w-none capitalize font-body font-normal leading-normal text-black"
              style={{
                fontSize: 'var(--blog-card-body-size)',
                fontVariationSettings: "'opsz' 14",
                marginTop: 'var(--blog-card-title-to-body)',
              }}
            >
              {post.description}
            </p>
          </div>

          <div
            className="blog-post-content w-full min-w-0 max-w-none"
            style={{ marginTop: 'var(--blog-post-feature-to-content)' }}
          >
            {post.sections.map((section, index) => (
              <section
                key={section.heading ?? `intro-${index}`}
                className={cn(index > 0 && 'blog-post-section')}
                style={
                  index > 0
                    ? { marginTop: 'var(--blog-post-section-gap)' }
                    : undefined
                }
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

            <BlogPostNav prev={prev} next={next} />
          </div>
        </div>
      </div>
    </section>
  )
}
