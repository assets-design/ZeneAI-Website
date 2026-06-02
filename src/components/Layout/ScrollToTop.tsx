import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { isSectionScrollDesktopViewport } from '@/hooks/useSectionScrollDesktop'

export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    const snapContainer = document.getElementById('main-content')
    const useSnapContainer =
      snapContainer?.classList.contains('section-scroll-root') &&
      isSectionScrollDesktopViewport()

    if (useSnapContainer && snapContainer) {
      snapContainer.scrollTop = 0
      return
    }

    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
