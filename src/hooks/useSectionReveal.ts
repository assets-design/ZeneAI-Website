import { useEffect } from 'react'
import { useSectionScroll } from '@/contexts/SectionScrollContext'
import { isAppleTouchDevice, useSectionScrollDesktop } from '@/hooks/useSectionScrollDesktop'
import { useSectionSnapScroll } from '@/hooks/useSectionSnapScroll'

const REVEAL_SELECTOR = '.reveal, .reveal-left, .reveal-right, .reveal-scale'

function showReveals(root: ParentNode) {
  root.querySelectorAll<HTMLElement>(REVEAL_SELECTOR).forEach(el => {
    el.classList.add('is-visible')
  })
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
  const isIosTouch = isAppleTouchDevice()

  useSectionScrollLayout()
  useSectionSnapScroll()

  useEffect(() => {
    const scrollRoot = sectionScroll?.scrollRef.current ?? null
    const main = scrollRoot ?? document.getElementById('main-content')
    if (!main) return undefined

    if (useSnapScroll && !isIosTouch) {
      document.documentElement.classList.add('section-scroll-active')
    } else {
      document.documentElement.classList.remove('section-scroll-active')
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const skipRevealAnimation = !useSnapScroll || isIosTouch

    const syncReveals = () => showReveals(main)

    if (reducedMotion || skipRevealAnimation) {
      syncReveals()
      const rafId = window.requestAnimationFrame(syncReveals)

      if (!isIosTouch) {
        return () => {
          window.cancelAnimationFrame(rafId)
          document.documentElement.classList.remove('section-scroll-active')
        }
      }

      const observer = new MutationObserver(syncReveals)
      observer.observe(main, { childList: true, subtree: true })

      return () => {
        window.cancelAnimationFrame(rafId)
        observer.disconnect()
        document.documentElement.classList.remove('section-scroll-active')
      }
    }

    const reveals = main.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)

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

    const revealFallbackTimer = window.setTimeout(syncReveals, 1200)

    return () => {
      window.clearTimeout(revealFallbackTimer)
      observer.disconnect()
      document.documentElement.classList.remove('section-scroll-active')
    }
  }, [isIosTouch, isDesktop, sectionScroll, useSnapScroll])
}
