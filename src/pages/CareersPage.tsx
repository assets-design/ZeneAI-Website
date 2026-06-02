import { CareersSection } from '@/components/careers/CareersSection'
import { ScrollPageDesktop, useDesktopScrollPage } from '@/components/Layout/ScrollPageDesktop'

export function CareersPage() {
  const isDesktop = useDesktopScrollPage()

  if (!isDesktop) {
    return <CareersSection />
  }

  return (
    <ScrollPageDesktop pageClass="program-page-scroll--careers">
      <CareersSection panel />
    </ScrollPageDesktop>
  )
}
