import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    const snapContainer = document.getElementById('main-content')
    if (snapContainer?.classList.contains('section-scroll-root')) {
      snapContainer.scrollTop = 0
      return
    }

    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
