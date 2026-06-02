import { useRef, type ReactNode } from 'react'
import { FloatingActions } from '@/components/Layout/FloatingActions'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { SectionScrollProvider } from '@/contexts/SectionScrollContext'
import { useSectionScrollDesktop } from '@/hooks/useSectionScrollDesktop'
import { cn } from '@/lib/utils'

type AppLayoutProps = {
  children: ReactNode
  showAnnouncement?: boolean
  pinHeader?: boolean
  sectionScroll?: boolean
}

export function AppLayout({
  children,
  showAnnouncement = true,
  pinHeader = false,
  sectionScroll = false,
}: AppLayoutProps) {
  const scrollRef = useRef<HTMLElement>(null)
  const isDesktop = useSectionScrollDesktop()
  const useSnapScroll = sectionScroll && isDesktop

  const header = (
    <Header
      showAnnouncement={showAnnouncement}
      pinNav={pinHeader}
      sectionScroll={useSnapScroll}
    />
  )

  if (useSnapScroll) {
    return (
      <SectionScrollProvider scrollRef={scrollRef}>
        <div className="layout-section-scroll">
          {header}
          <main
            id="main-content"
            ref={scrollRef}
            className="section-scroll-root overflow-x-hidden bg-black"
          >
            {children}
          </main>
          <FloatingActions />
        </div>
      </SectionScrollProvider>
    )
  }

  return (
    <>
      {header}
      <main
        id="main-content"
        ref={scrollRef}
        className={cn(
          'overflow-x-hidden',
          useSnapScroll ? 'bg-black' : 'bg-white xl:bg-black',
          sectionScroll && 'homepage-flow',
        )}
      >
        {children}
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
