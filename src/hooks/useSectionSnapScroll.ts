import { useEffect } from 'react'
import { useSectionScroll } from '@/contexts/SectionScrollContext'
import { useSectionScrollDesktop } from '@/hooks/useSectionScrollDesktop'
import {
  animateScrollTop,
  SECTION_SCROLL_MOUSE_DURATION_MS,
  SECTION_SCROLL_TOUCHPAD_DURATION_MS,
} from '@/lib/sectionScrollAnimation'

const SNAP_LOCK_BUFFER_MS = 100
const EDGE_THRESHOLD = 48
const PANEL_SELECTOR = '.section-scroll-panel'
const FOOTER_SELECTOR = '.section-scroll-tail'

/** Desktop wheel — one notch/swipe = one section, same rules for mouse + touchpad. */
const WHEEL_GESTURE_IDLE_MS = 120
const WHEEL_GESTURE_IDLE_AFTER_STEP_MS = 180
const WHEEL_STEP_DELTA_PX = 50
/** Pixel-mode mouse notches on Windows are usually ±100–120 per click. */
const MOUSE_WHEEL_PIXEL_NOTCH = 80
const MOUSE_WHEEL_LINE_HEIGHT_PX = 16

function normalizeWheelDelta(event: WheelEvent, viewportHeight: number): number {
  if (event.deltaMode === 1) {
    return event.deltaY * MOUSE_WHEEL_LINE_HEIGHT_PX
  }
  if (event.deltaMode === 2) {
    return event.deltaY * viewportHeight
  }
  return event.deltaY
}

/** Line-mode = mouse wheel. Pixel-mode uses separate mouse-notch vs touchpad paths. */
function isLineModeMouseWheel(event: WheelEvent): boolean {
  return event.deltaMode === 1
}

function isPixelModeMouseNotch(event: WheelEvent, gestureActive: boolean): boolean {
  if (gestureActive) return false
  return event.deltaMode === 0 && Math.abs(event.deltaY) >= MOUSE_WHEEL_PIXEL_NOTCH
}

function getSectionStep(root: HTMLElement): number {
  const cssVar = getComputedStyle(root).getPropertyValue('--section-viewport-h').trim()
  const parsed = parseFloat(cssVar)
  if (!Number.isNaN(parsed) && parsed > 0) return parsed
  return root.clientHeight
}

function getPanels(root: HTMLElement): HTMLElement[] {
  return Array.from(root.querySelectorAll<HTMLElement>(PANEL_SELECTOR))
}

function getPanelTop(index: number, step: number): number {
  return index * step
}

function getPanelIndex(scrollTop: number, step: number, maxIndex: number): number {
  if (step <= 0) return 0
  return Math.max(0, Math.min(maxIndex, Math.round(scrollTop / step)))
}

function getFooterTop(root: HTMLElement): number | null {
  const footer = root.querySelector<HTMLElement>(FOOTER_SELECTOR)
  return footer?.offsetTop ?? null
}

function isFormFreeScrollZone(
  root: HTMLElement,
  panels: HTMLElement[],
  scrollTop: number,
  footerTop: number | null,
): boolean {
  const formIndex = panels.findIndex(panel =>
    panel.classList.contains('section-scroll-panel--form'),
  )
  if (formIndex < 0 || footerTop == null) return false

  const formTop = getPanelTop(formIndex, getSectionStep(root))
  return scrollTop > formTop + EDGE_THRESHOLD && scrollTop < footerTop - EDGE_THRESHOLD
}

function getActiveHowItWorksPanel(root: HTMLElement): HTMLElement | null {
  const panels = getPanels(root)
  if (panels.length === 0) return null

  const step = getSectionStep(root)
  const currentIndex = getPanelIndex(root.scrollTop, step, panels.length - 1)
  return panels[currentIndex]?.querySelector<HTMLElement>('#how-it-works') ?? null
}

function getWheelPointerTarget(event: WheelEvent): HTMLElement | null {
  const atPoint = document.elementFromPoint(event.clientX, event.clientY)
  if (atPoint instanceof HTMLElement) return atPoint
  return event.target instanceof HTMLElement ? event.target : null
}

function isWheelOverElement(event: WheelEvent, element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect()
  return (
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom
  )
}

function getHowItWorksRightScroll(target: HTMLElement | null, root: HTMLElement): HTMLElement | null {
  const howSection = target?.closest('#how-it-works') ?? getActiveHowItWorksPanel(root)
  return howSection?.querySelector<HTMLElement>('.how-it-works-right-scroll') ?? null
}

function tryHowItWorksPanelScroll(event: WheelEvent, root: HTMLElement): boolean {
  const scrollEl = getHowItWorksRightScroll(getWheelPointerTarget(event), root)
  if (!scrollEl) return false

  const delta = event.deltaY
  if (Math.abs(delta) < 1) return false

  const { scrollTop, scrollHeight, clientHeight } = scrollEl
  if (scrollHeight <= clientHeight + 1) return false

  const atTop = scrollTop <= 0
  const atBottom = scrollTop + clientHeight >= scrollHeight - 1

  if ((delta > 0 && !atBottom) || (delta < 0 && !atTop)) {
    scrollEl.scrollTop += delta
    return true
  }

  return false
}

function shouldUseNestedScroll(event: WheelEvent, root: HTMLElement): boolean {
  const delta = event.deltaY
  let el = getWheelPointerTarget(event)

  while (el && el !== root) {
    if (el.classList.contains('section-faq-list') || el.classList.contains('how-it-works-right-scroll')) {
      const { scrollTop, scrollHeight, clientHeight } = el
      if (scrollHeight <= clientHeight + 1) break
      const atTop = scrollTop <= 0
      const atBottom = scrollTop + clientHeight >= scrollHeight - 1
      if ((delta < 0 && !atTop) || (delta > 0 && !atBottom)) return true
      break
    }

    const { overflowY } = getComputedStyle(el)
    if (
      (overflowY === 'auto' || overflowY === 'scroll') &&
      el.scrollHeight > el.clientHeight + 1
    ) {
      const atTop = el.scrollTop <= 0
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1
      if ((delta < 0 && !atTop) || (delta > 0 && !atBottom)) return true
    }

    el = el.parentElement
  }

  return false
}

/** Smooth wheel snap between full-viewport panels; footer scrolls freely. Desktop only (≥1280px, non-iOS). */
export function useSectionSnapScroll() {
  const sectionScroll = useSectionScroll()
  const isDesktop = useSectionScrollDesktop()

  useEffect(() => {
    const root = sectionScroll?.scrollRef.current
    if (!sectionScroll?.enabled || !isDesktop || !root) return undefined

    const layout = root.closest('.layout-section-scroll')
    if (!(layout instanceof HTMLElement)) return undefined

    const scrollRoot = root

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return undefined

    let locked = false
    let lockTimer = 0
    let wheelGestureActive = false
    let wheelGestureStepped = false
    let wheelAccumulator = 0
    let wheelGestureTimer = 0
    let gestureAnchorIndex: number | null = null
    let cancelScrollAnimation: (() => void) | null = null

    function releaseLock() {
      locked = false
    }

    function isAnimating() {
      return locked
    }

    function endWheelGesture() {
      wheelGestureActive = false
      wheelGestureStepped = false
      wheelAccumulator = 0
      gestureAnchorIndex = null
      window.clearTimeout(wheelGestureTimer)
      wheelGestureTimer = 0
    }

    function tryFinishWheelGesture() {
      if (locked) {
        window.clearTimeout(wheelGestureTimer)
        wheelGestureTimer = window.setTimeout(tryFinishWheelGesture, 50)
        return
      }
      endWheelGesture()
    }

    function bumpWheelGestureEndTimer() {
      window.clearTimeout(wheelGestureTimer)
      const idleMs = wheelGestureStepped ? WHEEL_GESTURE_IDLE_AFTER_STEP_MS : WHEEL_GESTURE_IDLE_MS
      wheelGestureTimer = window.setTimeout(tryFinishWheelGesture, idleMs)
    }

    function scrollToTop(top: number, durationMs = SECTION_SCROLL_MOUSE_DURATION_MS) {
      if (locked) return

      const maxTop = Math.max(0, scrollRoot.scrollHeight - scrollRoot.clientHeight)
      const clampedTop = Math.min(Math.max(0, top), maxTop)

      if (Math.abs(scrollRoot.scrollTop - clampedTop) <= EDGE_THRESHOLD) {
        return
      }

      locked = true
      window.clearTimeout(lockTimer)
      cancelScrollAnimation?.()
      cancelScrollAnimation = null
      let scrollFinished = false
      const lockMs = durationMs + SNAP_LOCK_BUFFER_MS

      const finishScroll = () => {
        if (scrollFinished) return
        scrollFinished = true
        cancelScrollAnimation = null
        window.clearTimeout(lockTimer)
        scrollRoot.scrollTop = clampedTop
        releaseLock()
        endWheelGesture()
      }

      cancelScrollAnimation = animateScrollTop(
        scrollRoot,
        clampedTop,
        durationMs,
        finishScroll,
      )

      lockTimer = window.setTimeout(finishScroll, lockMs)
    }

    function beginWheelGesture() {
      if (wheelGestureActive) return

      const panels = getPanels(scrollRoot)
      const step = getSectionStep(scrollRoot)
      wheelGestureActive = true
      wheelGestureStepped = false
      wheelAccumulator = 0
      gestureAnchorIndex = getPanelIndex(
        scrollRoot.scrollTop,
        step,
        Math.max(0, panels.length - 1),
      )
    }

    /** One panel from gesture start — never re-read scrollTop mid-animation. */
    function navigateAnchoredSection(
      direction: 1 | -1,
      durationMs = SECTION_SCROLL_MOUSE_DURATION_MS,
    ) {
      if (locked || gestureAnchorIndex == null) return

      const panels = getPanels(scrollRoot)
      if (panels.length === 0) return

      const step = getSectionStep(scrollRoot)
      const scrollTop = scrollRoot.scrollTop
      const footerTop = getFooterTop(scrollRoot)
      const lastIndex = panels.length - 1
      const anchorIndex = gestureAnchorIndex

      if (direction > 0) {
        if (footerTop != null && scrollTop >= footerTop - EDGE_THRESHOLD) {
          return
        }

        if (isFormFreeScrollZone(scrollRoot, panels, scrollTop, footerTop)) {
          return
        }

        if (anchorIndex < lastIndex) {
          scrollToTop(getPanelTop(anchorIndex + 1, step), durationMs)
        } else if (footerTop != null) {
          scrollToTop(footerTop, durationMs)
        }
        return
      }

      if (footerTop != null && scrollTop >= footerTop - EDGE_THRESHOLD) {
        scrollToTop(getPanelTop(lastIndex, step), durationMs)
        return
      }

      if (isFormFreeScrollZone(scrollRoot, panels, scrollTop, footerTop)) {
        return
      }

      if (anchorIndex > 0) {
        scrollToTop(getPanelTop(anchorIndex - 1, step), durationMs)
      } else {
        scrollToTop(0, durationMs)
      }
    }

    function stepOneSection(direction: 1 | -1) {
      if (locked) return
      endWheelGesture()
      beginWheelGesture()
      wheelGestureStepped = true
      navigateAnchoredSection(direction)
      bumpWheelGestureEndTimer()
    }

    function scheduleWheelStep(event: WheelEvent) {
      const deltaPx = normalizeWheelDelta(event, scrollRoot.clientHeight)
      if (Math.abs(deltaPx) < 1) return

      const gestureBusy = wheelGestureActive || wheelGestureStepped
      beginWheelGesture()

      if (wheelGestureStepped) {
        bumpWheelGestureEndTimer()
        return
      }

      if (isLineModeMouseWheel(event) || isPixelModeMouseNotch(event, gestureBusy)) {
        wheelGestureStepped = true
        navigateAnchoredSection(event.deltaY > 0 ? 1 : -1, SECTION_SCROLL_MOUSE_DURATION_MS)
        bumpWheelGestureEndTimer()
        return
      }

      wheelAccumulator += deltaPx

      if (Math.abs(wheelAccumulator) >= WHEEL_STEP_DELTA_PX) {
        wheelGestureStepped = true
        navigateAnchoredSection(wheelAccumulator > 0 ? 1 : -1, SECTION_SCROLL_TOUCHPAD_DURATION_MS)
      }

      bumpWheelGestureEndTimer()
    }

    function absorbWheelWhileLocked(event: WheelEvent) {
      beginWheelGesture()
      bumpWheelGestureEndTimer()
      const deltaPx = normalizeWheelDelta(event, scrollRoot.clientHeight)
      if (Math.abs(deltaPx) >= 1) {
        wheelAccumulator += deltaPx
      }
    }

    function onWheel(event: WheelEvent) {
      if (!isWheelOverElement(event, scrollRoot)) return

      const pointerTarget = getWheelPointerTarget(event)

      if (locked) {
        event.preventDefault()
        absorbWheelWhileLocked(event)
        return
      }

      if (!locked && wheelGestureStepped) {
        endWheelGesture()
      }

      if (tryHowItWorksPanelScroll(event, scrollRoot)) {
        event.preventDefault()
        return
      }

      if (shouldUseNestedScroll(event, scrollRoot)) return

      if (
        pointerTarget?.closest('input, textarea, select, [contenteditable="true"]')
      ) {
        return
      }

      const delta = event.deltaY
      if (Math.abs(delta) < 1) return

      const panels = getPanels(scrollRoot)
      if (panels.length === 0) return

      const scrollTop = scrollRoot.scrollTop
      const footerTop = getFooterTop(scrollRoot)

      if (footerTop != null && scrollTop >= footerTop - EDGE_THRESHOLD) {
        if (delta < 0 && scrollTop <= footerTop + EDGE_THRESHOLD) {
          event.preventDefault()
          stepOneSection(-1)
        }
        return
      }

      if (isFormFreeScrollZone(scrollRoot, panels, scrollTop, footerTop)) {
        return
      }

      event.preventDefault()
      scheduleWheelStep(event)
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.altKey) return

      const key = event.key
      const goDown = key === 'ArrowDown' || key === 'PageDown'
      const goUp = key === 'ArrowUp' || key === 'PageUp'
      if (!goDown && !goUp) return

      const active = document.activeElement
      if (
        active instanceof HTMLInputElement ||
        active instanceof HTMLTextAreaElement ||
        active instanceof HTMLSelectElement ||
        active?.closest('[contenteditable="true"]')
      ) {
        return
      }

      if (locked) {
        event.preventDefault()
        return
      }

      const panels = getPanels(scrollRoot)
      if (panels.length === 0) return

      const scrollTop = scrollRoot.scrollTop
      const footerTop = getFooterTop(scrollRoot)

      if (isFormFreeScrollZone(scrollRoot, panels, scrollTop, footerTop)) return

      event.preventDefault()
      stepOneSection(goDown ? 1 : -1)
    }

    const apiRef = sectionScroll.apiRef
    apiRef.current = { scrollToY: scrollToTop, isAnimating }

    document.addEventListener('wheel', onWheel, { passive: false, capture: true })
    document.addEventListener('keydown', onKeyDown, { capture: true })

    return () => {
      apiRef.current = null
      document.removeEventListener('wheel', onWheel, { capture: true })
      document.removeEventListener('keydown', onKeyDown, { capture: true })
      cancelScrollAnimation?.()
      window.clearTimeout(lockTimer)
      endWheelGesture()
    }
  }, [sectionScroll, isDesktop])
}
