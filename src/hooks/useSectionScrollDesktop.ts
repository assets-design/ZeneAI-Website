import { useEffect, useState } from 'react'
import { isAppleTouchDevice } from '@/lib/iosTouch'

export const SECTION_SCROLL_DESKTOP_MQ = '(min-width: 1280px)'

export { isAppleTouchDevice } from '@/lib/iosTouch'

export function useSectionScrollDesktop() {
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia(SECTION_SCROLL_DESKTOP_MQ).matches &&
        !isAppleTouchDevice()
      : false,
  )

  useEffect(() => {
    const mq = window.matchMedia(SECTION_SCROLL_DESKTOP_MQ)
    const update = () => setIsDesktop(mq.matches && !isAppleTouchDevice())
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return isDesktop
}

export function isSectionScrollDesktopViewport() {
  return (
    window.matchMedia(SECTION_SCROLL_DESKTOP_MQ).matches &&
    !isAppleTouchDevice()
  )
}
