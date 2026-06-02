import { Fragment } from 'react'
import {
  AboutBringsSection,
  ABOUT_BRINGS_PRINCIPLES_CONTENT,
  ABOUT_BRINGS_PRINCIPLES_FEATURES,
} from '@/components/about/AboutBringsSection'
import { AboutHeroSection } from '@/components/about/AboutHeroSection'
import { AboutWhyExistSection } from '@/components/about/AboutWhyExistSection'
import { SnapSectionsDesktop, useDesktopScrollPage } from '@/components/Layout/ScrollPageDesktop'
import { AiReadySection } from '@/components/home/AiReadySection'
import { ApplyCtaSection } from '@/components/home/ApplyCtaSection'
import { CohortSection } from '@/components/home/CohortSection'
import { ProductIntroSection } from '@/components/home/ProductIntroSection'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'

const ABOUT_SECTIONS = [
  { key: 'hero', render: () => <AboutHeroSection /> },
  { key: 'why-exist', render: () => <AboutWhyExistSection /> },
  { key: 'brings', render: () => <AboutBringsSection sectionId="about-brings" /> },
  { key: 'brings-duplicate', render: () => (
    <AboutBringsSection
      sectionId="about-brings-duplicate"
      features={ABOUT_BRINGS_PRINCIPLES_FEATURES}
      content={ABOUT_BRINGS_PRINCIPLES_CONTENT}
    />
  ) },
  { key: 'product-intro', render: () => <ProductIntroSection /> },
  { key: 'ai-ready', render: () => <AiReadySection /> },
  { key: 'testimonials', render: () => <TestimonialsSection variant="about" /> },
  { key: 'cohort', render: () => <CohortSection variant="about" /> },
  { key: 'apply', render: () => <ApplyCtaSection variant="about" /> },
] as const

export function AboutPage() {
  const isDesktop = useDesktopScrollPage()

  if (!isDesktop) {
    return (
      <>
        {ABOUT_SECTIONS.map(({ key, render }) => (
          <Fragment key={key}>{render()}</Fragment>
        ))}
      </>
    )
  }

  return <SnapSectionsDesktop pageClass="program-page-scroll--about" sections={ABOUT_SECTIONS} />
}
