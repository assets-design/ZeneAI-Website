import { ContactFormSection } from '@/components/contact/ContactFormSection'
import { ContactHeroSection } from '@/components/contact/ContactHeroSection'
import { ScrollPageDesktop, useDesktopScrollPage } from '@/components/Layout/ScrollPageDesktop'

export function ContactPage() {
  useDesktopScrollPage()

  return (
    <ScrollPageDesktop pageClass="program-page-scroll--contact">
      <ContactHeroSection panel />
      <ContactFormSection panel />
    </ScrollPageDesktop>
  )
}
