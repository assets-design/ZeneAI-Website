import { useEffect, useState } from 'react'

export const SECTION_SCROLL_DESKTOP_MQ = '(min-width: 1280px)'

/** iOS/iPadOS — snap scroll + IntersectionObserver reveal breaks in Mobile Safari after deploy. */
export function isAppleTouchDevice() {
  if (typeof navigator === 'undefined') return false

  const ua = navigator.userAgent
  const isClassicIOS = /iPad|iPhone|iPod/.test(ua)
  const isIpadOS =
    navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1

  return isClassicIOS || isIpadOS
}

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
