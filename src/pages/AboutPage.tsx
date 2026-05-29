import { AboutBringsSection } from '@/components/about/AboutBringsSection'
import { AboutHeroSection } from '@/components/about/AboutHeroSection'
import { AboutWhyExistSection } from '@/components/about/AboutWhyExistSection'
import { AiReadySection } from '@/components/home/AiReadySection'
import { ApplyCtaSection } from '@/components/home/ApplyCtaSection'
import { CohortSection } from '@/components/home/CohortSection'
import { ProductIntroSection } from '@/components/home/ProductIntroSection'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'

export function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutWhyExistSection />
      <AboutBringsSection />
      <ProductIntroSection />
      <AiReadySection />
      <TestimonialsSection variant="about" />
      <CohortSection variant="about" />
      <ApplyCtaSection variant="about" />
    </>
  )
}
