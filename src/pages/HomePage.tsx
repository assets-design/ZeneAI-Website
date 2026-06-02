import { Fragment } from 'react'
import { SnapSectionsDesktop, useDesktopScrollPage } from '@/components/Layout/ScrollPageDesktop'
import { AiReadySection } from '@/components/home/AiReadySection'
import { ApplyCtaSection } from '@/components/home/ApplyCtaSection'
import { CohortSection } from '@/components/home/CohortSection'
import { FaqSection } from '@/components/home/FaqSection'
import { HeroSection } from '@/components/home/HeroSection'
import { HowItWorksSection } from '@/components/home/HowItWorksSection'
import { OnboardingSection } from '@/components/home/OnboardingSection'
import { ProductIntroSection } from '@/components/home/ProductIntroSection'
import { SeeItInActionSection } from '@/components/home/SeeItInActionSection'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { TrackingSection } from '@/components/home/TrackingSection'
import { WhySchoolsSection } from '@/components/home/WhySchoolsSection'

const HOME_SECTIONS = [
  { key: 'hero', render: () => <HeroSection /> },
  { key: 'product-intro', render: () => <ProductIntroSection /> },
  { key: 'see-it-in-action', render: () => <SeeItInActionSection /> },
  { key: 'why-schools', render: () => <WhySchoolsSection /> },
  { key: 'how-it-works', render: () => <HowItWorksSection /> },
  { key: 'tracking', render: () => <TrackingSection /> },
  { key: 'ai-ready', render: () => <AiReadySection /> },
  { key: 'onboarding', render: () => <OnboardingSection /> },
  { key: 'testimonials', render: () => <TestimonialsSection /> },
  { key: 'cohort', render: () => <CohortSection /> },
  { key: 'faq', render: () => <FaqSection /> },
  { key: 'apply', render: () => <ApplyCtaSection /> },
] as const

export function HomePage() {
  const isDesktop = useDesktopScrollPage()

  if (!isDesktop) {
    return (
      <>
        {HOME_SECTIONS.map(({ key, render }) => (
          <Fragment key={key}>{render()}</Fragment>
        ))}
      </>
    )
  }

  return <SnapSectionsDesktop pageClass="program-page-scroll--home" sections={HOME_SECTIONS} />
}
