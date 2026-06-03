import { FaqPageSection } from '@/components/faq/FaqPageSection'
import { ScrollPageDesktop, useDesktopScrollPage } from '@/components/Layout/ScrollPageDesktop'

export function FaqPage() {
  useDesktopScrollPage()

  return (
    <ScrollPageDesktop pageClass="program-page-scroll--faq">
      <FaqPageSection panel />
    </ScrollPageDesktop>
  )
}
