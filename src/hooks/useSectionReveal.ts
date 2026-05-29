import { useEffect } from 'react'
import { useSectionScroll } from '@/contexts/SectionScrollContext'
import { useSectionSnapScroll } from '@/hooks/useSectionSnapScroll'

const REVEAL_SELECTOR = '.reveal, .reveal-left, .reveal-right, .reveal-scale'

/** Keeps panel min-height in sync as the header expands/collapses. */
export function useSectionScrollLayout() {
  const sectionScroll = useSectionScroll()

  useEffect(() => {
    const root = sectionScroll?.scrollRef.current
    if (!sectionScroll?.enabled || !root) return undefined

    const layout = root.closest('.layout-section-scroll')

    function syncPanelHeight() {
      root.style.setProperty('--section-viewport-h', `${root.clientHeight}px`)
    }

    syncPanelHeight()

    const observer = new ResizeObserver(syncPanelHeight)
    observer.observe(root)
    if (layout instanceof HTMLElement) {
      observer.observe(layout)
    }

    return () => observer.disconnect()
  }, [sectionScroll])
}

export function useSectionReveal() {
  const sectionScroll = useSectionScroll()

  useSectionScrollLayout()
  useSectionSnapScroll()

  useEffect(() => {
    if (!sectionScroll?.enabled) {
      return undefined
    }

    document.documentElement.classList.add('section-scroll-active')

    const root = sectionScroll.scrollRef.current
    if (!root) {
      return () => {
        document.documentElement.classList.remove('section-scroll-active')
      }
    }

    const reveals = root.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reducedMotion) {
      reveals.forEach(el => el.classList.add('is-visible'))
      return () => {
        document.documentElement.classList.remove('section-scroll-active')
      }
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        root,
        threshold: 0.2,
      },
    )

    reveals.forEach(el => observer.observe(el))

    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('section-scroll-active')
    }
  }, [sectionScroll])
}
