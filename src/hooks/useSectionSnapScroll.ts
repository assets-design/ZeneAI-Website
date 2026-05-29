import { useEffect } from 'react'
import { useSectionScroll } from '@/contexts/SectionScrollContext'

const SNAP_LOCK_MS = 750
const EDGE_THRESHOLD = 48

function getSnapPanels(root: HTMLElement) {
  return Array.from(
    root.querySelectorAll<HTMLElement>('.section-scroll-panel--hero, .section-scroll-panel--form'),
  )
}

/** Snap wheel only between hero and form — form body + footer scroll freely. */
export function useSectionSnapScroll() {
  const sectionScroll = useSectionScroll()

  useEffect(() => {
    const root = sectionScroll?.scrollRef.current
    if (!sectionScroll?.enabled || !root) return undefined

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
      const maxTop = Math.max(0, root.scrollHeight - root.clientHeight)
      root.scrollTo({ top: Math.min(Math.max(0, top), maxTop), behavior: 'smooth' })
      lockTimer = window.setTimeout(releaseLock, SNAP_LOCK_MS)
    }

    function onWheel(event: WheelEvent) {
      if (locked) {
        event.preventDefault()
        return
      }

      const panels = getSnapPanels(root)
      const hero = panels[0]
      const form = panels[1]
      if (!hero || !form) return

      const scrollTop = root.scrollTop
      const delta = event.deltaY
      if (Math.abs(delta) < 1) return

      const heroTop = hero.offsetTop
      const formTop = form.offsetTop

      // Past form start — free scroll through form and footer
      if (scrollTop > formTop + EDGE_THRESHOLD) {
        return
      }

      // Stuck between hero and form
      if (scrollTop > heroTop + 4 && scrollTop < formTop - 4) {
        event.preventDefault()
        scrollToTop(delta > 0 ? formTop : heroTop)
        return
      }

      // Hero or form top edge
      if (scrollTop < formTop - EDGE_THRESHOLD) {
        event.preventDefault()
        if (delta > 0) scrollToTop(formTop)
        else scrollToTop(heroTop)
        return
      }

      // Form top — scroll up returns to hero
      if (scrollTop <= formTop + EDGE_THRESHOLD && delta < 0) {
        event.preventDefault()
        scrollToTop(heroTop)
      }
    }

    function onScrollEnd() {
      if (locked) return

      const panels = getSnapPanels(root)
      const hero = panels[0]
      const form = panels[1]
      if (!hero || !form) return

      const scrollTop = root.scrollTop
      const heroTop = hero.offsetTop
      const formTop = form.offsetTop

      if (scrollTop > formTop + EDGE_THRESHOLD) return

      if (scrollTop > heroTop + 4 && scrollTop < formTop - 4) {
        scrollToTop(scrollTop > (heroTop + formTop) / 2 ? formTop : heroTop)
      }
    }

    let scrollEndTimer = 0
    function onScroll() {
      window.clearTimeout(scrollEndTimer)
      scrollEndTimer = window.setTimeout(onScrollEnd, 120)
    }

    root.addEventListener('wheel', onWheel, { passive: false })
    root.addEventListener('scroll', onScroll, { passive: true })
    root.addEventListener('scrollend', onScrollEnd)

    return () => {
      root.removeEventListener('wheel', onWheel)
      root.removeEventListener('scroll', onScroll)
      root.removeEventListener('scrollend', onScrollEnd)
      window.clearTimeout(lockTimer)
      window.clearTimeout(scrollEndTimer)
    }
  }, [sectionScroll])
}
