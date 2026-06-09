import type { ReactNode } from 'react'
import { EnglishAiComparisonSection } from '@/components/english-ai/EnglishAiComparisonSection'
import { EnglishAiCurriculumSection } from '@/components/english-ai/EnglishAiCurriculumSection'
import { EnglishAiGainsSection } from '@/components/english-ai/EnglishAiGainsSection'
import { EnglishAiHeroSection } from '@/components/english-ai/EnglishAiHeroSection'
import { EnglishAiSeeItInActionSection } from '@/components/english-ai/EnglishAiSeeItInActionSection'
import { EnglishAiToolsSection } from '@/components/english-ai/EnglishAiToolsSection'
import { ApplyCtaSection } from '@/components/home/ApplyCtaSection'
import { CodeMonkeyJourneySection } from '@/components/code-monkey/CodeMonkeyJourneySection'
import { CodeMonkeyReasonsSection } from '@/components/code-monkey/CodeMonkeyReasonsSection'
import { CodeMonkeyWhySection } from '@/components/code-monkey/CodeMonkeyWhySection'
import { CohortSection } from '@/components/home/CohortSection'
import { FaqSection } from '@/components/home/FaqSection'
import { HowItWorksSection } from '@/components/home/HowItWorksSection'
import { OnboardingSection } from '@/components/home/OnboardingSection'
import { TheEdgeBeyondClassroomSection } from '@/components/the-edge/TheEdgeBeyondClassroomSection'
import { TheEdgeComparisonSection } from '@/components/the-edge/TheEdgeComparisonSection'
import { TheEdgeFrameworkSection } from '@/components/the-edge/TheEdgeFrameworkSection'
import { TheEdgeMultiRaterSection } from '@/components/the-edge/TheEdgeMultiRaterSection'
import { TheEdgePlatformSection } from '@/components/the-edge/TheEdgePlatformSection'
import { TheEdgeTestimonialsSection } from '@/components/the-edge/TheEdgeTestimonialsSection'
import type { ProgramVariant } from '@/types/program'

export type ScrollSectionEntry = {
  key: string
  render: () => ReactNode
}

function getPageVariant(program: ProgramVariant): ProgramVariant {
  if (program === 'code-monkey' || program === 'the-edge') {
    return program
  }

  return 'english-ai'
}

function getCohortVariant(program: ProgramVariant): 'home' | 'code-monkey' | 'the-edge' {
  if (program === 'code-monkey' || program === 'the-edge') {
    return program
  }

  return 'home'
}

export function getProgramScrollSections(program: ProgramVariant = 'english-ai'): ScrollSectionEntry[] {
  const pageVariant = getPageVariant(program)

  if (program === 'the-edge') {
    return [
      { key: 'hero', render: () => <EnglishAiHeroSection variant={pageVariant} /> },
      { key: 'framework', render: () => <TheEdgeFrameworkSection /> },
      { key: 'multi-rater', render: () => <TheEdgeMultiRaterSection /> },
      { key: 'beyond-classroom', render: () => <TheEdgeBeyondClassroomSection /> },
      { key: 'onboarding', render: () => <OnboardingSection variant={pageVariant} /> },
      { key: 'testimonials', render: () => <TheEdgeTestimonialsSection /> },
      { key: 'comparison', render: () => <TheEdgeComparisonSection /> },
      { key: 'apply', render: () => <ApplyCtaSection variant={pageVariant} /> },
    ]
  }

  if (program === 'code-monkey') {
    return [
      { key: 'hero', render: () => <EnglishAiHeroSection variant={pageVariant} /> },
      { key: 'coding-journey', render: () => <CodeMonkeyJourneySection /> },
      { key: 'reasons', render: () => <CodeMonkeyReasonsSection /> },
      { key: 'why', render: () => <CodeMonkeyWhySection /> },
      { key: 'comparison', render: () => <EnglishAiComparisonSection variant={pageVariant} /> },
      { key: 'onboarding', render: () => <OnboardingSection variant={pageVariant} /> },
      { key: 'apply', render: () => <ApplyCtaSection variant={pageVariant} /> },
    ]
  }

  const cohortVariant = getCohortVariant(program)
  const faqVariant = pageVariant === 'english-ai' ? 'home' : pageVariant
  const applyVariant = pageVariant === 'english-ai' ? 'english-ai' : pageVariant

  return [
    { key: 'hero', render: () => <EnglishAiHeroSection variant={pageVariant} /> },
    { key: 'tools', render: () => <EnglishAiToolsSection variant={pageVariant} /> },
    { key: 'gains', render: () => <EnglishAiGainsSection variant={pageVariant} /> },
    { key: 'comparison', render: () => <EnglishAiComparisonSection variant={pageVariant} /> },
    { key: 'see-it-in-action', render: () => <EnglishAiSeeItInActionSection variant={pageVariant} /> },
    { key: 'how-it-works', render: () => <HowItWorksSection variant={pageVariant} /> },
    { key: 'curriculum', render: () => <EnglishAiCurriculumSection variant={pageVariant} /> },
    { key: 'onboarding', render: () => <OnboardingSection variant={pageVariant} /> },
    { key: 'cohort', render: () => <CohortSection variant={cohortVariant} /> },
    { key: 'faq', render: () => <FaqSection variant={faqVariant} /> },
    { key: 'apply', render: () => <ApplyCtaSection variant={applyVariant} /> },
  ]
}

export function getProgramScrollPageClass(program: ProgramVariant): string {
  if (program === 'code-monkey') return 'program-page-scroll--code-monkey'
  if (program === 'the-edge') return 'program-page-scroll--the-edge'
  return 'program-page-scroll--english-ai'
}
