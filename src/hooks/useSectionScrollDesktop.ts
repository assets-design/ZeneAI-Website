import { useEffect, useState } from 'react'

export const SECTION_SCROLL_DESKTOP_MQ = '(min-width: 1280px)'

export function useSectionScrollDesktop() {
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia(SECTION_SCROLL_DESKTOP_MQ).matches
      : false,
  )

  useEffect(() => {
    const mq = window.matchMedia(SECTION_SCROLL_DESKTOP_MQ)
    const update = () => setIsDesktop(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return isDesktop
}

export function isSectionScrollDesktopViewport() {
  return window.matchMedia(SECTION_SCROLL_DESKTOP_MQ).matches
}
