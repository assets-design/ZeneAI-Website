import { useEffect } from 'react'
import { useSectionScroll } from '@/contexts/SectionScrollContext'
import {
  isAppleTouchDevice,
  useSectionScrollDesktop,
} from '@/hooks/useSectionScrollDesktop'
import { useSectionSnapScroll } from '@/hooks/useSectionSnapScroll'

const REVEAL_SELECTOR = '.reveal, .reveal-left, .reveal-right, .reveal-scale'

function showReveals(elements: NodeListOf<HTMLElement>) {
  elements.forEach(el => el.classList.add('is-visible'))
}

/** Keeps panel min-height in sync as the scroll container resizes (desktop only). */
export function useSectionScrollLayout() {
  const sectionScroll = useSectionScroll()
  const isDesktop = useSectionScrollDesktop()

  useEffect(() => {
    const root = sectionScroll?.scrollRef.current
    if (!sectionScroll?.enabled || !isDesktop || !root) return undefined

    const layout = root.closest('.layout-section-scroll')
    let lockedHeight = 0

    function syncPanelHeight() {
      const nextHeight = root!.clientHeight
      if (lockedHeight === 0 || Math.abs(nextHeight - lockedHeight) > 48) {
        lockedHeight = nextHeight
      }
      root!.style.setProperty('--section-viewport-h', `${lockedHeight}px`)
    }

    syncPanelHeight()

    const observer = new ResizeObserver(syncPanelHeight)
    observer.observe(root)
    if (layout instanceof HTMLElement) {
      observer.observe(layout)
    }

    return () => {
      observer.disconnect()
      root.style.removeProperty('--section-viewport-h')
    }
  }, [sectionScroll, isDesktop])
}

export function useSectionReveal() {
  const sectionScroll = useSectionScroll()
  const isDesktop = useSectionScrollDesktop()
  const useSnapScroll = Boolean(sectionScroll?.enabled && isDesktop)

  useSectionScrollLayout()
  useSectionSnapScroll()

  useEffect(() => {
    const scrollRoot = sectionScroll?.scrollRef.current ?? null
    const main = scrollRoot ?? document.getElementById('main-content')
    if (!main) return undefined

    if (useSnapScroll) {
      document.documentElement.classList.add('section-scroll-active')
    } else {
      document.documentElement.classList.remove('section-scroll-active')
    }

    const reveals = main.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const skipRevealAnimation = !useSnapScroll || isAppleTouchDevice()

    if (reducedMotion || skipRevealAnimation) {
      showReveals(reveals)
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
        root: useSnapScroll ? scrollRoot : null,
        threshold: 0.05,
        rootMargin: '0px 0px 10% 0px',
      },
    )

    reveals.forEach(el => observer.observe(el))

    const revealFallbackTimer = window.setTimeout(() => {
      showReveals(main.querySelectorAll<HTMLElement>(REVEAL_SELECTOR))
    }, 1200)

    return () => {
      window.clearTimeout(revealFallbackTimer)
      observer.disconnect()
      document.documentElement.classList.remove('section-scroll-active')
    }
  }, [sectionScroll, isDesktop, useSnapScroll])
}
