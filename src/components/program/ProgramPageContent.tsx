import { EnglishAiComparisonSection } from '@/components/english-ai/EnglishAiComparisonSection'
import { EnglishAiCurriculumSection } from '@/components/english-ai/EnglishAiCurriculumSection'
import { EnglishAiGainsSection } from '@/components/english-ai/EnglishAiGainsSection'
import { EnglishAiHeroSection } from '@/components/english-ai/EnglishAiHeroSection'
import { EnglishAiPlatformSection } from '@/components/english-ai/EnglishAiPlatformSection'
import { EnglishAiSeeItInActionSection } from '@/components/english-ai/EnglishAiSeeItInActionSection'
import { EnglishAiToolsSection } from '@/components/english-ai/EnglishAiToolsSection'
import { ApplyCtaSection } from '@/components/home/ApplyCtaSection'
import { CohortSection } from '@/components/home/CohortSection'
import { FaqSection } from '@/components/home/FaqSection'
import { HowItWorksSection } from '@/components/home/HowItWorksSection'
import { OnboardingSection } from '@/components/home/OnboardingSection'
import type { ProgramVariant } from '@/types/program'

type ProgramPageContentProps = {
  program?: ProgramVariant
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

export function ProgramPageContent({ program = 'english-ai' }: ProgramPageContentProps) {
  const pageVariant = getPageVariant(program)
  const cohortVariant = getCohortVariant(program)

  return (
    <>
      <EnglishAiHeroSection variant={pageVariant} />
      <EnglishAiPlatformSection variant={pageVariant} />
      <EnglishAiToolsSection variant={pageVariant} />
      <EnglishAiGainsSection variant={pageVariant} />
      <EnglishAiComparisonSection variant={pageVariant} />
      <EnglishAiSeeItInActionSection variant={pageVariant} />
      <HowItWorksSection variant={pageVariant} />
      <EnglishAiCurriculumSection variant={pageVariant} />
      <OnboardingSection variant={pageVariant} />
      <CohortSection variant={cohortVariant} />
      <FaqSection variant={pageVariant === 'english-ai' ? 'home' : pageVariant} />
      <ApplyCtaSection variant={pageVariant === 'english-ai' ? 'home' : pageVariant} />
    </>
  )
}
