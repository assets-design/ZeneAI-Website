import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import howToManageLessonsVideo from '@/data/2. How to Manage Lessons.mp4'
import overallReportVideo from '@/data/3. Teachers - Overall Report.mp4'
import courseCompletionReportVideo from '@/data/4. Teachers - Course Completion Report.mp4'
import lessonCompletionReportVideo from '@/data/5. Teachers - Lesson Completion Report.mp4'
import activityCompletionReportVideo from '@/data/6. Teachers - Activity Completion Report.mp4'

const TEACHER_DASHBOARD_VIDEO =
  '/assets/figma/1.%20Teachers%20Dashboard%20Overview.mp4'

const LESSON_MANAGEMENT_IMAGE =
  '/assets/figma/home/section-5/lesson-management.png'

function BlockVideo({
  src,
  ariaLabel,
  className,
  fillHeight = false,
}: {
  src: string
  ariaLabel: string
  className?: string
  fillHeight?: boolean
}) {
  return (
    <video
      key={src}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      aria-label={ariaLabel}
      className={cn('block size-full object-cover object-top', className)}
      style={fillHeight ? undefined : { height: '100%' }}
    />
  )
}

function FeatureBlock({
  title,
  description,
  titleNodeId,
  bodyNodeId,
  children,
  normalCaseBody = false,
  showDescription = true,
}: {
  title: string
  description: string
  titleNodeId: string
  bodyNodeId: string
  children: ReactNode
  normalCaseBody?: boolean
  showDescription?: boolean
}) {
  return (
    <article className="flex min-w-0 flex-col" style={{ gap: 'var(--how-block-gap)' }}>
      <h3
        className="font-heading font-medium uppercase leading-none text-black"
        style={{ fontSize: 'var(--section-text-tab)' }}
        data-node-id={titleNodeId}
      >
        {title}
      </h3>
      {showDescription && description ? (
        <p
          className="normal-case font-body font-normal leading-normal text-black"
          style={{
            fontSize: 'var(--section-text-body)',
            fontVariationSettings: "'opsz' 14",
          }}
          data-node-id={bodyNodeId}
        >
          {description}
        </p>
      ) : null}
      {children}
    </article>
  )
}

type HowItWorksRightColumnProps = {
  useHomeRightContent: boolean
  isCustomProgram: boolean
  isCodeMonkey: boolean
  isTheEdge: boolean
  fillLessonImage?: boolean
  duplicateSet?: boolean
  loopDuplicate?: boolean
}

function HowItWorksRightColumn({
  useHomeRightContent,
  isCustomProgram,
  isCodeMonkey,
  isTheEdge,
  fillLessonImage = false,
  duplicateSet = false,
  loopDuplicate = false,
}: HowItWorksRightColumnProps) {
  const isHomeAlternateSet = duplicateSet && useHomeRightContent

  const lessonTitle = isHomeAlternateSet ? 'Track Activity Completion' : 'Lesson Management'

  const lessonDescription =
    isHomeAlternateSet
      ? 'Measure student engagement through detailed activity and assignment reports.'
      : isTheEdge
        ? 'Easy-to-use tools to deploy curriculum and monitor student engagement.'
        : isCodeMonkey
          ? 'Weekly lesson plans aligned to your textbook. Adjust, assign, done.'
          : 'Create, push, and track lessons without technical complexity. Full visibility from planning to delivery to review.'

  const dashboardTitle = isHomeAlternateSet ? 'Review Lesson Completion' : 'Teacher Dashboard'

  const dashboardDescription =
    isHomeAlternateSet
      ? 'See which lessons are completed, pending, or require attention.'
      : isTheEdge
        ? 'A centralized hub to manage lessons, track progress, and provide feedback.'
        : 'Track lesson progress, student activity, and analytics from one place. Manage Grades 1–12 with rankings, completion rates, and engagement data — all in real time.'

  const dashboardVideoSrc = isHomeAlternateSet
    ? loopDuplicate
      ? lessonCompletionReportVideo
      : overallReportVideo
    : TEACHER_DASHBOARD_VIDEO

  const lessonVideoSrc = useHomeRightContent && !duplicateSet
    ? howToManageLessonsVideo
    : isHomeAlternateSet
      ? loopDuplicate
        ? activityCompletionReportVideo
        : courseCompletionReportVideo
      : null

  const useLessonVideo = Boolean(lessonVideoSrc)

  const hideDuplicateFromAssistiveTech = duplicateSet && (!useHomeRightContent || loopDuplicate)

  const dashboardAriaLabel = isHomeAlternateSet
    ? 'Zene review lesson completion dashboard'
    : 'Zene teacher dashboard overview'

  const lessonAriaLabel = isHomeAlternateSet
    ? 'Zene track activity completion dashboard'
    : 'Zene lesson management overview'

  return (
    <>
      <div className="how-dashboard-block min-h-0 shrink-0">
        <FeatureBlock
          title={dashboardTitle}
          description={dashboardDescription}
          titleNodeId="642:1264"
          bodyNodeId="642:1265"
          normalCaseBody={isCustomProgram}
        >
          <div
            className="how-dashboard-media w-full overflow-hidden"
            style={{
              maxWidth: 'var(--how-dashboard-video-w)',
              height: 'var(--how-dashboard-video-h)',
              borderRadius: 'var(--how-dashboard-video-radius)',
            }}
            data-node-id="642:1272"
          >
            <video
              key={dashboardVideoSrc}
              src={dashboardVideoSrc}
              autoPlay
              muted
              loop
              playsInline
              className="size-full object-cover"
              aria-label={dashboardAriaLabel}
            />
          </div>
        </FeatureBlock>
      </div>

      <article
        className={cn(
          'how-lesson-block flex min-h-0 min-w-0 flex-col',
          fillLessonImage && 'how-lesson-block--fill',
        )}
        style={{ gap: 'var(--how-block-gap)' }}
        aria-hidden={hideDuplicateFromAssistiveTech ? true : undefined}
      >
        <h3
          className="font-heading font-medium uppercase leading-none text-black"
          style={{ fontSize: 'var(--section-text-tab)' }}
          data-node-id="642:1273"
        >
          {lessonTitle}
        </h3>
        <p
          className="normal-case font-body font-normal leading-normal text-black"
          style={{
            fontSize: 'var(--section-text-body)',
            fontVariationSettings: "'opsz' 14",
          }}
          data-node-id="642:1274"
          aria-hidden={hideDuplicateFromAssistiveTech ? true : undefined}
        >
          {lessonDescription}
        </p>
        <div
          className={cn(
            'how-lesson-img-wrap min-h-0 overflow-hidden',
            fillLessonImage && 'how-lesson-img-wrap--fill',
            useLessonVideo && !fillLessonImage && 'how-lesson-video-wrap shrink-0',
            useLessonVideo && fillLessonImage && 'how-lesson-video-wrap',
          )}
        >
          {useLessonVideo ? (
            <BlockVideo
              src={lessonVideoSrc!}
              ariaLabel={lessonAriaLabel}
              className="how-lesson-img"
              fillHeight={fillLessonImage}
            />
          ) : (
            <img
              src={LESSON_MANAGEMENT_IMAGE}
              alt={
                hideDuplicateFromAssistiveTech
                  ? ''
                  : 'Zene lesson management interface'
              }
              aria-hidden={hideDuplicateFromAssistiveTech ? true : undefined}
              className="how-lesson-img block w-full object-cover object-top"
              style={{
                maxWidth: 'var(--how-lesson-img-w)',
                height: fillLessonImage ? undefined : 'var(--how-lesson-img-h)',
              }}
              data-node-id="642:1275"
            />
          )}
        </div>
      </article>
    </>
  )
}

type HowItWorksSectionProps = {
  variant?: 'home' | 'english-ai' | 'code-monkey' | 'the-edge'
}

export function HowItWorksSection({ variant = 'home' }: HowItWorksSectionProps) {
  const isEnglishAi = variant === 'english-ai'
  const isCodeMonkey = variant === 'code-monkey'
  const isTheEdge = variant === 'the-edge'
  const isProgramPage = isEnglishAi || isCodeMonkey || isTheEdge
  const isCustomProgram = isCodeMonkey || isTheEdge
  const headingId = isTheEdge
    ? 'the-edge-how-heading'
    : isCodeMonkey
      ? 'code-monkey-how-heading'
      : 'how-it-works-heading'

  const isHome = variant === 'home'
  const useHomeRightContent = isHome || isProgramPage
  const useScrollableRightColumn = useHomeRightContent

  const rightColumnProps = {
    useHomeRightContent,
    isCustomProgram,
    isCodeMonkey,
    isTheEdge,
  }

  return (
    <section
      id="how-it-works"
      className={cn(
        'w-full px-[5px] pt-[5px]',
        useScrollableRightColumn && 'how-it-works-section--scrollable',
      )}
      aria-labelledby={headingId}
      data-node-id={isProgramPage ? '1060:2200' : '642:1196'}
    >
      <div
        className="how-it-works-card relative mx-auto flex w-full min-h-0 flex-col overflow-hidden section-card-shell bg-white"
        style={{ maxWidth: 'var(--section-card-max-w)' }}
      >
        <div
          className="how-it-works-grid grid min-h-0 min-w-0 flex-1 items-start xl:grid-cols-[minmax(0,var(--how-left-max-w))_1fr]"
          style={{
            gap: 'var(--how-columns-gap)',
            paddingLeft: 'var(--section-padding-x)',
            paddingRight: 'var(--section-padding-x)',
            paddingTop: 'var(--how-padding-top)',
            paddingBottom: 'var(--how-padding-bottom)',
          }}
        >
          {/* Left — intro copy */}
          <div className="how-it-works-left min-w-0">
            <p
              className={cn('font-body text-black', !isCustomProgram && 'uppercase')}
              style={{
                fontSize: 'var(--section-text-eyebrow)',
                fontVariationSettings: "'opsz' 14",
              }}
              data-node-id={isProgramPage ? '1060:2243' : '760:1681'}
            >
              {isTheEdge || isCodeMonkey
                ? 'Teacher Experience'
                : isEnglishAi
                  ? 'English data your school could not see before — until now'
                  : 'Data your school could not see before — until now'}
            </p>

            <h2
              id={headingId}
              className="font-heading font-medium uppercase leading-none text-black"
              style={{
                fontSize: 'var(--section-text-heading)',
                marginTop: 'var(--section-gap)',
              }}
              data-node-id={isProgramPage ? '1060:2329' : '760:1682'}
            >
              {isTheEdge ? (
                <>
                  How{' '}
                  <span
                    className="inline-flex items-center bg-zene-cyan"
                    style={{
                      minHeight: 'var(--english-ai-highlight-h)',
                      paddingLeft: 'var(--english-ai-highlight-pad-x)',
                      paddingRight: 'var(--english-ai-highlight-pad-x)',
                    }}
                    data-node-id="1060:2328"
                  >
                    Zene Works.
                  </span>
                </>
              ) : isCodeMonkey ? (
                <>
                  How{' '}
                  <span
                    className="inline-flex items-center bg-zene-cyan"
                    style={{
                      minHeight: 'var(--english-ai-highlight-h)',
                      paddingLeft: 'var(--english-ai-highlight-pad-x)',
                      paddingRight: 'var(--english-ai-highlight-pad-x)',
                    }}
                    data-node-id="1060:2328"
                  >
                    Zene
                  </span>{' '}
                  works.
                </>
              ) : isEnglishAi ? (
                <>
                  How{' '}
                  <span className="bg-[#78F3FA]" data-node-id="1060:2328">
                    Zene Works.
                  </span>
                </>
              ) : (
                <>
                  How{' '}
                  <span className="bg-[#78F3FA]" data-node-id="642:1270">
                    ZENE AI
                  </span>{' '}
                  Works
                </>
              )}
            </h2>

            <p
              className="normal-case font-body font-normal leading-normal text-black"
              style={{
                fontSize: 'var(--section-text-body)',
                fontVariationSettings: "'opsz' 14",
                marginTop: 'var(--how-heading-to-body)',
              }}
              data-node-id={isProgramPage ? '1060:2219' : '760:1684'}
            >
              {isTheEdge
                ? 'Our platform is designed to be intuitive for teachers and impactful for students.'
                : isCodeMonkey
                  ? 'A teacher dashboard, lesson plans by week, and per-student reports. Your teacher is in control — Zene runs the practice.'
                  : isEnglishAi
                    ? 'Every session captured. Every skill measured. Every student visible to the teacher, every day.'
                    : 'Every session captured. Every skill measured. Every report ready when your board meeting is.'}
            </p>
          </div>

          {/* Right — Teacher Dashboard + Lesson Management */}
          {useScrollableRightColumn ? (
            <div className="how-it-works-right-scroll min-h-0 min-w-0">
              <div className="how-it-works-right-set how-it-works-right-set--primary">
                <div
                  className="how-it-works-right flex min-h-0 min-w-0 flex-col"
                  style={{ gap: 'var(--how-section-gap)' }}
                >
                  <HowItWorksRightColumn {...rightColumnProps} fillLessonImage />
                </div>
              </div>
              <div
                className="how-it-works-right-set how-it-works-right-set--duplicate"
                aria-hidden={useHomeRightContent ? undefined : true}
              >
                <div
                  className="how-it-works-right flex min-h-0 min-w-0 flex-col"
                  style={{ gap: 'var(--how-section-gap)' }}
                >
                  <HowItWorksRightColumn {...rightColumnProps} duplicateSet />
                </div>
              </div>
              {useHomeRightContent ? (
                <div
                  className="how-it-works-right-set how-it-works-right-set--duplicate"
                  aria-hidden="true"
                >
                  <div
                    className="how-it-works-right flex min-h-0 min-w-0 flex-col"
                    style={{ gap: 'var(--how-section-gap)' }}
                  >
                    <HowItWorksRightColumn {...rightColumnProps} duplicateSet loopDuplicate />
                  </div>
                </div>
              ) : null}
            </div>
          ) : (
            <div
              className="how-it-works-right flex min-h-0 min-w-0 flex-col"
              style={{ gap: 'var(--how-section-gap)' }}
            >
              <HowItWorksRightColumn {...rightColumnProps} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
