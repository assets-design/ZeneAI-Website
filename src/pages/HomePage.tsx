import { HeroSection } from '@/components/home/HeroSection'
import { ProductIntroSection } from '@/components/home/ProductIntroSection'
import { SeeItInActionSection } from '@/components/home/SeeItInActionSection'
import { WhySchoolsSection } from '@/components/home/WhySchoolsSection'
import { HowItWorksSection } from '@/components/home/HowItWorksSection'
import { TrackingSection } from '@/components/home/TrackingSection'
import { AiReadySection } from '@/components/home/AiReadySection'
import { OnboardingSection } from '@/components/home/OnboardingSection'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { CohortSection } from '@/components/home/CohortSection'
import { FaqSection } from '@/components/home/FaqSection'
import { ApplyCtaSection } from '@/components/home/ApplyCtaSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductIntroSection />
      <SeeItInActionSection />
      <WhySchoolsSection />
      <HowItWorksSection />
      <TrackingSection />
      <AiReadySection />
      <OnboardingSection />
      <TestimonialsSection />
      <CohortSection />
      <FaqSection />
      <ApplyCtaSection />
    </>
  )
}
