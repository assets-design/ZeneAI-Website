import { ScrollPageDesktop, useDesktopScrollPage } from '@/components/Layout/ScrollPageDesktop'
import { ThankYouSection } from '@/components/thank-you/ThankYouSection'

export function ThankYouPage() {
  const isDesktop = useDesktopScrollPage()

  if (!isDesktop) {
    return <ThankYouSection />
  }

  return (
    <ScrollPageDesktop pageClass="program-page-scroll--thank-you">
      <ThankYouSection panel />
    </ScrollPageDesktop>
  )
}
