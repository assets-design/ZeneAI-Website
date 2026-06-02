import type { ReactNode } from 'react'
import { Footer } from '@/components/Footer/Footer'
import { SectionScrollPanel } from '@/components/Layout/SectionScrollPanel'
import { useSectionReveal } from '@/hooks/useSectionReveal'
import { useSectionScrollDesktop } from '@/hooks/useSectionScrollDesktop'
import { cn } from '@/lib/utils'

type ScrollPageDesktopProps = {
  pageClass: string
  children: ReactNode
  showFooter?: boolean
}

export function ScrollPageDesktop({
  pageClass,
  children,
  showFooter = true,
}: ScrollPageDesktopProps) {
  return (
    <div className={cn('program-page-scroll', pageClass)}>
      {children}
      {showFooter ? (
        <section className="section-scroll-tail px-[5px]" aria-label="Site footer">
          <Footer />
        </section>
      ) : null}
    </div>
  )
}

type SnapSectionsDesktopProps = {
  pageClass: string
  sections: readonly { key: string; render: () => ReactNode }[]
}

export function SnapSectionsDesktop({ pageClass, sections }: SnapSectionsDesktopProps) {
  return (
    <ScrollPageDesktop pageClass={pageClass}>
      {sections.map(({ key, render }) => (
        <SectionScrollPanel key={key}>{render()}</SectionScrollPanel>
      ))}
    </ScrollPageDesktop>
  )
}

export function useDesktopScrollPage() {
  const isDesktop = useSectionScrollDesktop()

  useSectionReveal()

  return isDesktop
}
