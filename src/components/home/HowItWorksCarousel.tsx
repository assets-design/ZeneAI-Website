import { useCallback, useEffect, useRef, useState } from 'react'
import howToManageLessonsVideo from '@/data/2. How to Manage Lessons.mp4'
import overallReportVideo from '@/data/3. Teachers - Overall Report.mp4'
import courseCompletionReportVideo from '@/data/4. Teachers - Course Completion Report.mp4'
import lessonCompletionReportVideo from '@/data/5. Teachers - Lesson Completion Report.mp4'
import activityCompletionReportVideo from '@/data/6. Teachers - Activity Completion Report.mp4'
import { cn } from '@/lib/utils'

const TEACHER_DASHBOARD_VIDEO =
  '/assets/figma/1.%20Teachers%20Dashboard%20Overview.mp4'

const AUTO_SLIDE_MS = 5000

const HOME_HOW_SLIDES = [
  {
    title: 'Teacher Dashboard',
    description:
      'Track lesson progress, student activity, and analytics from one place. Manage Grades 1–12 with rankings, completion rates, and engagement data — all in real time.',
    videoSrc: TEACHER_DASHBOARD_VIDEO,
    ariaLabel: 'Zene teacher dashboard overview',
  },
  {
    title: 'Lesson Management',
    description:
      'Create, push, and track lessons without technical complexity. Full visibility from planning to delivery to review.',
    videoSrc: howToManageLessonsVideo,
    ariaLabel: 'Zene lesson management overview',
  },
  {
    title: 'Review Lesson Completion',
    description: 'See which lessons are completed, pending, or require attention.',
    videoSrc: overallReportVideo,
    ariaLabel: 'Zene review lesson completion dashboard',
  },
  {
    title: 'Track Activity Completion',
    description: 'Measure student engagement through detailed activity and assignment reports.',
    videoSrc: courseCompletionReportVideo,
    ariaLabel: 'Zene track activity completion dashboard',
  },
  {
    title: 'Review Lesson Completion',
    description: 'See which lessons are completed, pending, or require attention.',
    videoSrc: lessonCompletionReportVideo,
    ariaLabel: 'Zene lesson completion report',
  },
  {
    title: 'Track Activity Completion',
    description: 'Measure student engagement through detailed activity and assignment reports.',
    videoSrc: activityCompletionReportVideo,
    ariaLabel: 'Zene activity completion report',
  },
] as const

function HowItWorksCarouselSlide({
  title,
  description,
  videoSrc,
  ariaLabel,
}: (typeof HOME_HOW_SLIDES)[number]) {
  return (
    <article
      className="how-it-works-carousel-slide flex min-w-0 max-w-full flex-col"
      style={{ gap: 'var(--how-block-gap)' }}
    >
      <h3
        className="how-it-works-carousel-slide__title min-w-0 max-w-full font-heading font-medium uppercase leading-none text-black"
        style={{ fontSize: 'var(--how-carousel-slide-title-size, var(--section-text-tab))' }}
      >
        {title}
      </h3>
      <p
        className="min-w-0 max-w-full normal-case font-body font-normal leading-normal text-black"
        style={{
          fontSize: 'var(--section-text-body)',
          fontVariationSettings: "'opsz' 14",
        }}
      >
        {description}
      </p>
      <div
        className="how-dashboard-media how-it-works-carousel-slide__media min-w-0 max-w-full w-full overflow-hidden"
        style={{
          maxWidth: 'var(--how-dashboard-video-w)',
          height: 'var(--how-dashboard-video-h)',
          borderRadius: 'var(--how-dashboard-video-radius)',
        }}
      >
        <video
          key={videoSrc}
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="size-full object-cover"
          aria-label={ariaLabel}
        />
      </div>
    </article>
  )
}

export function HowItWorksCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const activeIndexRef = useRef(0)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollToIndex = useCallback((index: number, behavior: ScrollBehavior = 'smooth') => {
    const track = trackRef.current
    if (!track) return

    const slide = track.children[index] as HTMLElement | undefined
    if (!slide) return

    track.scrollTo({ left: slide.offsetLeft, behavior })
    activeIndexRef.current = index
    setActiveIndex(index)
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const handleScroll = () => {
      const slideEls = Array.from(track.children) as HTMLElement[]
      if (slideEls.length === 0) return

      const viewportCenter = track.scrollLeft + track.clientWidth / 2
      let closestIndex = 0
      let closestDistance = Number.POSITIVE_INFINITY

      slideEls.forEach((slide, index) => {
        const slideCenter = slide.offsetLeft + slide.offsetWidth / 2
        const distance = Math.abs(viewportCenter - slideCenter)
        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = index
        }
      })

      activeIndexRef.current = closestIndex
      setActiveIndex(closestIndex)
    }

    handleScroll()
    track.addEventListener('scroll', handleScroll, { passive: true })
    return () => track.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const timer = window.setInterval(() => {
      const nextIndex = (activeIndexRef.current + 1) % HOME_HOW_SLIDES.length
      scrollToIndex(nextIndex)
    }, AUTO_SLIDE_MS)

    return () => window.clearInterval(timer)
  }, [scrollToIndex])

  return (
    <div className="how-it-works-carousel min-w-0 max-w-full overflow-hidden xl:hidden">
      <div
        ref={trackRef}
        className="how-it-works-carousel-track flex w-full max-w-full min-w-0 snap-x snap-mandatory overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-roledescription="carousel"
        aria-label="How Zene AI works highlights"
      >
        {HOME_HOW_SLIDES.map((slide, index) => (
          <div
            key={`${slide.title}-${slide.videoSrc}-${index}`}
            className="how-it-works-carousel-slide-wrap box-border flex min-w-0 max-w-full shrink-0 grow-0 basis-full snap-center snap-always"
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${HOME_HOW_SLIDES.length}`}
          >
            <HowItWorksCarouselSlide {...slide} />
          </div>
        ))}
      </div>

      <div
        className="how-it-works-carousel-dots flex items-center justify-center"
        role="tablist"
        aria-label="Choose how it works slide"
        style={{
          marginTop: 'var(--how-carousel-to-dots)',
          gap: 'var(--hero-badge-dot-gap)',
        }}
      >
        {HOME_HOW_SLIDES.map((_, index) => (
          <button
            key={`dot-${index}`}
            type="button"
            role="tab"
            aria-label={`Show slide ${index + 1}`}
            aria-selected={activeIndex === index}
            onClick={() => scrollToIndex(index)}
            className={cn(
              'rounded-full border-0 p-0 transition-colors',
              activeIndex === index ? 'bg-black' : 'bg-black/20',
            )}
            style={{
              width: 'var(--hero-badge-dot-size)',
              height: 'var(--hero-badge-dot-size)',
            }}
          />
        ))}
      </div>
    </div>
  )
}
