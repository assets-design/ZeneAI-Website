/** Section-to-section scroll — desktop snap (mouse wheel + touchpad). */
export const SECTION_SCROLL_DURATION_MS = 1200
export const SECTION_SCROLL_MOUSE_DURATION_MS = SECTION_SCROLL_DURATION_MS
export const SECTION_SCROLL_TOUCHPAD_DURATION_MS = SECTION_SCROLL_DURATION_MS

export function easeInOutCubic(progress: number): number {
  const t = Math.max(0, Math.min(1, progress))
  return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2
}

export function animateScrollTop(
  element: HTMLElement,
  targetTop: number,
  durationMs: number,
  onComplete?: () => void,
): () => void {
  const startTop = element.scrollTop
  const distance = targetTop - startTop

  if (Math.abs(distance) < 1 || durationMs <= 0) {
    element.scrollTop = targetTop
    onComplete?.()
    return () => {}
  }

  const startTime = performance.now()
  let rafId = 0

  function frame(now: number) {
    const progress = Math.min(1, (now - startTime) / durationMs)
    element.scrollTop = startTop + distance * easeInOutCubic(progress)

    if (progress < 1) {
      rafId = requestAnimationFrame(frame)
      return
    }

    element.scrollTop = targetTop
    onComplete?.()
  }

  rafId = requestAnimationFrame(frame)

  return () => {
    cancelAnimationFrame(rafId)
  }
}
