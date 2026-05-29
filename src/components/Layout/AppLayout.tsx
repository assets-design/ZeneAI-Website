import { useRef, type ReactNode } from 'react'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { SectionScrollProvider } from '@/contexts/SectionScrollContext'
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

  const layout = (
    <>
      <Header
        showAnnouncement={showAnnouncement}
        pinNav={pinHeader}
        sectionScroll={sectionScroll}
      />
      <main
        id="main-content"
        ref={scrollRef}
        className={cn(
          'overflow-x-hidden bg-black',
          sectionScroll && 'section-scroll-root',
        )}
      >
        {children}
      </main>
      {!sectionScroll && <Footer />}
    </>
  )

  if (sectionScroll) {
    return (
      <SectionScrollProvider scrollRef={scrollRef}>
        <div className="layout-section-scroll">{layout}</div>
      </SectionScrollProvider>
    )
  }

  return layout
}
