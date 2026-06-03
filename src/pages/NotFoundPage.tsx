import { ScrollPageDesktop, useDesktopScrollPage } from '@/components/Layout/ScrollPageDesktop'
import { NotFoundSection } from '@/components/not-found/NotFoundSection'

export function NotFoundPage() {
  useDesktopScrollPage()

  return (
    <ScrollPageDesktop pageClass="program-page-scroll--not-found">
      <NotFoundSection panel />
    </ScrollPageDesktop>
  )
}
