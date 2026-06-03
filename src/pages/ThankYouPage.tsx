import { ScrollPageDesktop, useDesktopScrollPage } from '@/components/Layout/ScrollPageDesktop'
import { ThankYouSection } from '@/components/thank-you/ThankYouSection'

export function ThankYouPage() {
  useDesktopScrollPage()

  return (
    <ScrollPageDesktop pageClass="program-page-scroll--thank-you">
      <ThankYouSection panel />
    </ScrollPageDesktop>
  )
}
