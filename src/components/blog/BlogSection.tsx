import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

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

const BLOG_COUNT = BLOG_POSTS.length
const LOOP_SETS = 3
const AUTO_SLIDE_MS = 4500

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

function BlogCarouselDots({
  count,
  activeIndex,
  onSelect,
}: {
  count: number
  activeIndex: number
  onSelect: (index: number) => void
}) {
  return (
    <div
      className="blog-posts-dots flex items-center justify-center"
      role="tablist"
      aria-label="Choose blog post"
      style={{
        marginTop: 'var(--blog-posts-carousel-to-dots)',
        gap: 'var(--blog-posts-dot-gap)',
      }}
    >
      {Array.from({ length: count }, (_, index) => (
        <button
          key={index}
          type="button"
          role="tab"
          aria-label={`Show blog post ${index + 1}`}
          aria-selected={activeIndex === index}
          onClick={() => onSelect(index)}
          className={cn(
            'rounded-full border border-black p-0 transition-colors',
            activeIndex === index ? 'bg-black' : 'bg-transparent',
          )}
          style={{
            width: 'var(--blog-posts-dot-size)',
            height: 'var(--blog-posts-dot-size)',
          }}
        />
      ))}
    </div>
  )
}

function BlogPostsMobileCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const isJumpingRef = useRef(false)
  const isHoveredRef = useRef(false)
  const isAutoAdvancingRef = useRef(false)
  const activeIndexRef = useRef(0)
  const [activeIndex, setActiveIndex] = useState(0)

  const setLogicalIndex = useCallback((logicalIndex: number) => {
    activeIndexRef.current = logicalIndex
    setActiveIndex(logicalIndex)
  }, [])

  const loopSlides = useMemo(
    () =>
      Array.from({ length: LOOP_SETS }, (_, setIndex) =>
        BLOG_POSTS.map((post, postIndex) => ({
          post,
          key: `${post.id}-${setIndex}`,
          logicalIndex: postIndex,
        })),
      ).flat(),
    [],
  )

  const getClosestSlideIndex = useCallback((track: HTMLDivElement) => {
    const slides = Array.from(track.children) as HTMLElement[]
    if (slides.length === 0) return 0

    let closestIndex = 0
    let closestDistance = Number.POSITIVE_INFINITY

    slides.forEach((slide, index) => {
      const distance = Math.abs(track.scrollLeft - slide.offsetLeft)
      if (distance < closestDistance) {
        closestDistance = distance
        closestIndex = index
      }
    })

    return closestIndex
  }, [])

  const scrollToLogicalIndex = useCallback(
    (logicalIndex: number, behavior: ScrollBehavior = 'smooth') => {
      const track = trackRef.current
      if (!track) return

      const slide = track.children[BLOG_COUNT + logicalIndex] as HTMLElement | undefined
      if (!slide) return

      track.scrollTo({ left: slide.offsetLeft, behavior })
      setLogicalIndex(logicalIndex)
    },
    [setLogicalIndex],
  )

  const normalizeScroll = useCallback(() => {
    const track = trackRef.current
    if (!track || isJumpingRef.current || isAutoAdvancingRef.current) return

    const closestIndex = getClosestSlideIndex(track)
    const logicalIndex = ((closestIndex % BLOG_COUNT) + BLOG_COUNT) % BLOG_COUNT
    setLogicalIndex(logicalIndex)

    if (closestIndex < BLOG_COUNT) {
      const target = track.children[closestIndex + BLOG_COUNT] as HTMLElement | undefined
      if (!target) return

      isJumpingRef.current = true
      track.scrollTo({ left: target.offsetLeft, behavior: 'auto' })
      requestAnimationFrame(() => {
        isJumpingRef.current = false
      })
      return
    }

    if (closestIndex >= BLOG_COUNT * 2) {
      const target = track.children[closestIndex - BLOG_COUNT] as HTMLElement | undefined
      if (!target) return

      isJumpingRef.current = true
      track.scrollTo({ left: target.offsetLeft, behavior: 'auto' })
      requestAnimationFrame(() => {
        isJumpingRef.current = false
      })
    }
  }, [getClosestSlideIndex, setLogicalIndex])

  const scrollToStart = useCallback(() => {
    const track = trackRef.current
    if (!track) return

    const slide = track.children[BLOG_COUNT] as HTMLElement | undefined
    if (!slide) return

    isJumpingRef.current = true
    track.scrollTo({ left: slide.offsetLeft, behavior: 'auto' })
    requestAnimationFrame(() => {
      isJumpingRef.current = false
    })
  }, [])

  useEffect(() => {
    requestAnimationFrame(scrollToStart)
  }, [scrollToStart])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let scrollEndTimer: ReturnType<typeof setTimeout> | undefined

    const handleScrollEnd = () => {
      if (scrollEndTimer) clearTimeout(scrollEndTimer)
      if (!isAutoAdvancingRef.current) normalizeScroll()
    }

    const handleScroll = () => {
      if (!isJumpingRef.current) {
        const closestIndex = getClosestSlideIndex(track)
        setLogicalIndex(((closestIndex % BLOG_COUNT) + BLOG_COUNT) % BLOG_COUNT)
      }
      if (scrollEndTimer) clearTimeout(scrollEndTimer)
      scrollEndTimer = setTimeout(handleScrollEnd, 150)
    }

    track.addEventListener('scroll', handleScroll, { passive: true })
    track.addEventListener('scrollend', handleScrollEnd)

    return () => {
      track.removeEventListener('scroll', handleScroll)
      track.removeEventListener('scrollend', handleScrollEnd)
      if (scrollEndTimer) clearTimeout(scrollEndTimer)
    }
  }, [getClosestSlideIndex, normalizeScroll, setLogicalIndex])

  const advanceSlide = useCallback(() => {
    const track = trackRef.current
    if (!track) return

    const slides = Array.from(track.children) as HTMLElement[]
    if (slides.length === 0) return

    const closestIndex = getClosestSlideIndex(track)
    const nextIndex =
      closestIndex + 1 < slides.length ? closestIndex + 1 : BLOG_COUNT
    const nextSlide = slides[nextIndex]
    if (!nextSlide) return

    const nextLogical = loopSlides[nextIndex]?.logicalIndex ?? nextIndex % BLOG_COUNT

    isAutoAdvancingRef.current = true
    track.scrollTo({ left: nextSlide.offsetLeft, behavior: 'smooth' })
    setLogicalIndex(nextLogical)

    window.setTimeout(() => {
      isAutoAdvancingRef.current = false
      normalizeScroll()
    }, 650)
  }, [getClosestSlideIndex, normalizeScroll, setLogicalIndex, loopSlides])

  useEffect(() => {
    const carousel = carouselRef.current
    const section = carousel?.closest('section')
    if (!carousel || !section) return

    let timer: ReturnType<typeof setInterval> | undefined

    const tick = () => {
      if (isHoveredRef.current || isJumpingRef.current || isAutoAdvancingRef.current) return
      if (carousel.clientWidth <= 0) return
      advanceSlide()
    }

    const startAutoplay = () => {
      if (timer != null) return
      timer = window.setInterval(tick, AUTO_SLIDE_MS)
      window.setTimeout(tick, 800)
    }

    const stopAutoplay = () => {
      if (timer == null) return
      window.clearInterval(timer)
      timer = undefined
    }

    const observer = new IntersectionObserver(
      entries => {
        if (entries.some(entry => entry.isIntersecting && entry.intersectionRatio >= 0.15)) {
          startAutoplay()
        } else {
          stopAutoplay()
        }
      },
      { threshold: [0, 0.15, 0.35] },
    )

    observer.observe(section)

    return () => {
      stopAutoplay()
      observer.disconnect()
    }
  }, [advanceSlide])

  return (
    <div
      ref={carouselRef}
      className="blog-posts-carousel"
      onMouseEnter={() => {
        isHoveredRef.current = true
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false
      }}
    >
      <div
        ref={trackRef}
        className="blog-posts-track flex overflow-x-auto snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-roledescription="carousel"
        aria-label="Blog posts"
      >
        {loopSlides.map(({ post, key, logicalIndex }) => (
          <div
            key={key}
            className="blog-posts-slide shrink-0 snap-start snap-always"
            role="group"
            aria-roledescription="slide"
            aria-label={`${logicalIndex + 1} of ${BLOG_COUNT}`}
          >
            <BlogPostCard post={post} />
          </div>
        ))}
      </div>

      <BlogCarouselDots
        count={BLOG_COUNT}
        activeIndex={activeIndex}
        onSelect={index => scrollToLogicalIndex(index)}
      />
    </div>
  )
}

export function BlogSection({ panel = false }: BlogSectionProps) {
  return (
    <section
      className={cn(
        'blog-page content-listing-page blog-post-page w-full px-[var(--section-card-gap)]',
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
            paddingLeft: 'var(--section-padding-x)',
            paddingRight: 'var(--section-padding-x)',
            paddingTop: panel
              ? 'var(--blog-panel-padding-top, var(--blog-padding-top))'
              : 'var(--blog-padding-top)',
            paddingBottom: panel
              ? 'var(--blog-panel-padding-bottom, var(--blog-padding-bottom))'
              : 'var(--blog-padding-bottom)',
          }}
        >
          <div className="blog-header blog-header-layout relative grid min-w-0 grid-cols-1 items-start gap-[var(--blog-header-gap)] xl:grid-cols-[minmax(0,1fr)_auto]">
            <div className="blog-hero-top-row flex w-full min-w-0 items-end justify-end sm:hidden">
              <div className="blog-apply-slot hero-apply-slot shrink-0">
                <ApplyNowButton href="/contact" />
              </div>
            </div>

            <div className="blog-header-copy min-w-0">
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

            <div className="blog-apply-slot blog-apply-slot--desktop hero-apply-slot hidden shrink-0 self-start sm:block xl:justify-self-end">
              <ApplyNowButton href="/contact" />
            </div>
          </div>

          <div
            className="blog-posts-grid hidden min-w-0 grid-cols-3 gap-[var(--blog-cards-gap)] sm:grid"
            style={{ marginTop: 'var(--blog-body-to-cards)' }}
          >
            {BLOG_POSTS.map(post => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>

          <div className="sm:hidden" style={{ marginTop: 'var(--blog-body-to-cards)' }}>
            <BlogPostsMobileCarousel />
          </div>
        </div>
      </div>
    </section>
  )
}
