/** iOS/iPadOS — snap scroll + heavy bundles break Mobile Safari after deploy. */
export function isAppleTouchDevice() {
  if (typeof navigator === 'undefined') return false

  const ua = navigator.userAgent
  const isClassicIOS = /iPad|iPhone|iPod/.test(ua)
  const isIpadOS =
    navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1

  return isClassicIOS || isIpadOS
}

/** Run before React paint so iOS layout CSS applies on first frame. */
export function markIosTouchDocument() {
  if (typeof document === 'undefined') return
  if (!isAppleTouchDevice()) return
  document.documentElement.classList.add('ios-touch')
}
