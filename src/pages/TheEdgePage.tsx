import { SnapSectionsDesktop, useDesktopScrollPage } from '@/components/Layout/ScrollPageDesktop'
import { getProgramScrollPageClass, getProgramScrollSections } from '@/lib/programScrollSections'

const PROGRAM = 'the-edge' as const
const SECTIONS = getProgramScrollSections(PROGRAM)

export function TheEdgePage() {
  useDesktopScrollPage()

  return (
    <SnapSectionsDesktop
      pageClass={getProgramScrollPageClass(PROGRAM)}
      sections={SECTIONS}
    />
  )
}
