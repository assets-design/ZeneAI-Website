import { ContactFormSection } from '@/components/contact/ContactFormSection'
import { ContactHeroSection } from '@/components/contact/ContactHeroSection'
import { Footer } from '@/components/Footer/Footer'
import { useSectionReveal } from '@/hooks/useSectionReveal'

export function ContactPage() {
  useSectionReveal()

  return (
    <>
      <ContactHeroSection panel />
      <ContactFormSection panel />
      <section className="section-scroll-tail px-[5px]" aria-label="Site footer">
        <Footer />
      </section>
    </>
  )
}
