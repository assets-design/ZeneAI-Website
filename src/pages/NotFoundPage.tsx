import { NotFoundSection } from '@/components/not-found/NotFoundSection'
import { ScrollPageDesktop, useDesktopScrollPage } from '@/components/Layout/ScrollPageDesktop'

export function NotFoundPage() {
  const isDesktop = useDesktopScrollPage()

  if (!isDesktop) {
    return <NotFoundSection />
  }

  return (
    <ScrollPageDesktop pageClass="program-page-scroll--not-found">
      <NotFoundSection panel />
    </ScrollPageDesktop>
  )
}
