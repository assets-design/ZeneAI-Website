import { SnapSectionsDesktop, useDesktopScrollPage } from '@/components/Layout/ScrollPageDesktop'
import { getProgramScrollPageClass, getProgramScrollSections } from '@/lib/programScrollSections'

const PROGRAM = 'english-ai' as const
const SECTIONS = getProgramScrollSections(PROGRAM)

export function EnglishAiPage() {
  useDesktopScrollPage()

  return (
    <SnapSectionsDesktop
      pageClass={getProgramScrollPageClass(PROGRAM)}
      sections={SECTIONS}
    />
  )
}
