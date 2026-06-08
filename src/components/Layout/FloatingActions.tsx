import { useCallback, useEffect, useState } from 'react'
import { useSectionScroll } from '@/contexts/SectionScrollContext'
import { WHATSAPP_DISPLAY, WHATSAPP_HREF } from '@/lib/contact'
import { isSectionScrollDesktopViewport } from '@/hooks/useSectionScrollDesktop'

const SCROLL_SHOW_THRESHOLD = 320

function getScrollTarget(): HTMLElement | Window {
  const main = document.getElementById('main-content')
  if (main?.classList.contains('section-scroll-root') && isSectionScrollDesktopViewport()) {
    return main
  }
  return window
}

function getScrollTop(target: HTMLElement | Window) {
  return target === window ? window.scrollY : target.scrollTop
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="floating-actions__icon" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function BackToTopIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="floating-actions__icon" fill="none">
      <path
        d="M6 16l6-7 6 7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function FloatingActions() {
  const sectionScroll = useSectionScroll()
  const [showBackToTop, setShowBackToTop] = useState(false)

  const scrollToTop = useCallback(() => {
    const api = sectionScroll?.apiRef.current
    if (api) {
      api.scrollToY(0)
      return
    }

    const target = getScrollTarget()
    if (target === window) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    target.scrollTo({ top: 0, behavior: 'smooth' })
  }, [sectionScroll?.apiRef])

  useEffect(() => {
    const target = getScrollTarget()

    function onScroll() {
      setShowBackToTop(getScrollTop(target) > SCROLL_SHOW_THRESHOLD)
    }

    onScroll()
    target.addEventListener('scroll', onScroll, { passive: true })
    return () => target.removeEventListener('scroll', onScroll)
  }, [sectionScroll])

  return (
    <div className="floating-actions" aria-label="Quick actions">
      <button
        type="button"
        className={`floating-actions__btn floating-actions__btn--back-to-top${showBackToTop ? ' is-visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
        title="Back to top"
      >
        <BackToTopIcon />
      </button>

      <a
        href={WHATSAPP_HREF}
        className="floating-actions__btn floating-actions__btn--whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat on WhatsApp, ${WHATSAPP_DISPLAY}`}
        title={`WhatsApp ${WHATSAPP_DISPLAY}`}
      >
        <WhatsAppIcon />
      </a>
    </div>
  )
}
