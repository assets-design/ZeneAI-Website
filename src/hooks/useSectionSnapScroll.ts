import { useEffect } from 'react'
import { useSectionScroll } from '@/contexts/SectionScrollContext'
import { useSectionScrollDesktop } from '@/hooks/useSectionScrollDesktop'

const SNAP_LOCK_MS = 750
const EDGE_THRESHOLD = 48
const PANEL_SELECTOR = '.section-scroll-panel'
const FOOTER_SELECTOR = '.section-scroll-tail'

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

function shouldUseNestedScroll(event: WheelEvent, root: HTMLElement): boolean {
  const delta = event.deltaY
  let el = event.target instanceof HTMLElement ? event.target : null

  while (el && el !== root) {
    if (el.classList.contains('section-faq-list')) {
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

/** Smooth wheel snap between full-viewport panels; footer scrolls freely. */
export function useSectionSnapScroll() {
  const sectionScroll = useSectionScroll()
  const isDesktop = useSectionScrollDesktop()

  useEffect(() => {
    const root = sectionScroll?.scrollRef.current
    if (!sectionScroll?.enabled || !isDesktop || !root) return undefined

    const layout = root.closest('.layout-section-scroll')
    if (!(layout instanceof HTMLElement)) return undefined

    const scrollRoot = root
    const scrollLayout = layout

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return undefined

    let locked = false
    let lockTimer = 0

    function releaseLock() {
      locked = false
    }

    function scrollToTop(top: number) {
      locked = true
      window.clearTimeout(lockTimer)
      const maxTop = Math.max(0, scrollRoot.scrollHeight - scrollRoot.clientHeight)
      scrollRoot.scrollTo({ top: Math.min(Math.max(0, top), maxTop), behavior: 'smooth' })
      lockTimer = window.setTimeout(releaseLock, SNAP_LOCK_MS)
    }

    function onWheel(event: WheelEvent) {
      const target = event.target
      if (!(target instanceof Node)) return
      if (!scrollLayout.contains(target)) return

      if (locked) {
        event.preventDefault()
        return
      }

      if (shouldUseNestedScroll(event, scrollRoot)) return

      const panels = getPanels(scrollRoot)
      if (panels.length === 0) return

      const delta = event.deltaY
      if (Math.abs(delta) < 1) return

      const step = getSectionStep(scrollRoot)
      const scrollTop = scrollRoot.scrollTop
      const footerTop = getFooterTop(scrollRoot)
      const lastIndex = panels.length - 1

      if (footerTop != null && scrollTop >= footerTop - EDGE_THRESHOLD) {
        if (delta < 0 && scrollTop <= footerTop + EDGE_THRESHOLD) {
          event.preventDefault()
          scrollToTop(getPanelTop(lastIndex, step))
        }
        return
      }

      if (isFormFreeScrollZone(scrollRoot, panels, scrollTop, footerTop)) {
        return
      }

      event.preventDefault()

      const currentIndex = getPanelIndex(scrollTop, step, lastIndex)
      const currentTop = getPanelTop(currentIndex, step)

      if (delta > 0) {
        if (scrollTop > currentTop + EDGE_THRESHOLD) {
          if (currentIndex < lastIndex) {
            scrollToTop(getPanelTop(currentIndex + 1, step))
          } else if (footerTop != null) {
            scrollToTop(footerTop)
          }
          return
        }

        if (currentIndex < lastIndex) {
          scrollToTop(getPanelTop(currentIndex + 1, step))
        } else if (footerTop != null) {
          scrollToTop(footerTop)
        }
        return
      }

      if (scrollTop > currentTop + EDGE_THRESHOLD) {
        scrollToTop(currentTop)
        return
      }

      if (currentIndex > 0) {
        scrollToTop(getPanelTop(currentIndex - 1, step))
      } else {
        scrollToTop(0)
      }
    }

    document.addEventListener('wheel', onWheel, { passive: false, capture: true })

    return () => {
      document.removeEventListener('wheel', onWheel, { capture: true })
      window.clearTimeout(lockTimer)
    }
  }, [sectionScroll, isDesktop])
}
