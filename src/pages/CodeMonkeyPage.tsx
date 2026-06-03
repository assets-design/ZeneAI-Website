import { SnapSectionsDesktop, useDesktopScrollPage } from '@/components/Layout/ScrollPageDesktop'
import { getProgramScrollPageClass, getProgramScrollSections } from '@/lib/programScrollSections'

const PROGRAM = 'code-monkey' as const
const SECTIONS = getProgramScrollSections(PROGRAM)

export function CodeMonkeyPage() {
  useDesktopScrollPage()

  return (
    <SnapSectionsDesktop
      pageClass={getProgramScrollPageClass(PROGRAM)}
      sections={SECTIONS}
    />
  )
}
