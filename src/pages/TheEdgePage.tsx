import { ProgramPageContent } from '@/components/program/ProgramPageContent'
import { SnapSectionsDesktop, useDesktopScrollPage } from '@/components/Layout/ScrollPageDesktop'
import { getProgramScrollPageClass, getProgramScrollSections } from '@/lib/programScrollSections'

const PROGRAM = 'the-edge' as const
const SECTIONS = getProgramScrollSections(PROGRAM)

export function TheEdgePage() {
  const isDesktop = useDesktopScrollPage()

  if (!isDesktop) {
    return <ProgramPageContent program={PROGRAM} />
  }

  return (
    <SnapSectionsDesktop
      pageClass={getProgramScrollPageClass(PROGRAM)}
      sections={SECTIONS}
    />
  )
}
