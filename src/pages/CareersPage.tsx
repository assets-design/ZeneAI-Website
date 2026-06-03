import { CareersSection } from '@/components/careers/CareersSection'
import { ScrollPageDesktop, useDesktopScrollPage } from '@/components/Layout/ScrollPageDesktop'

export function CareersPage() {
  useDesktopScrollPage()

  return (
    <ScrollPageDesktop pageClass="program-page-scroll--careers">
      <CareersSection panel />
    </ScrollPageDesktop>
  )
}
