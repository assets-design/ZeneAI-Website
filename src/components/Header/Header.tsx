import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSectionScroll } from '@/contexts/SectionScrollContext'
import { isSectionScrollDesktopViewport } from '@/hooks/useSectionScrollDesktop'
import { CONTACT_PAGE_PATH } from '@/lib/contact'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Home', href: '/', nodeId: '715:1689' },
  { label: 'About us', href: '/about', nodeId: '715:1690' },
  { label: 'english ai', href: '/english-ai', nodeId: '715:1691' },
  { label: 'code monkey', href: '/code-monkey', nodeId: '715:1692' },
  { label: 'the edge', href: '/the-edge', nodeId: '715:1693' },
  { label: 'our Blogs', href: '/blog', nodeId: '715:1695' },
  { label: 'contact us', href: '/contact', nodeId: '715:1694' },
]

const TABLET_MIN_WIDTH = 640
const MOBILE_MAX_WIDTH = 639

function isTabletOrDesktop() {
  return window.matchMedia(`(min-width: ${TABLET_MIN_WIDTH}px)`).matches
}

function isMobileViewport() {
  return window.matchMedia(`(max-width: ${MOBILE_MAX_WIDTH}px)`).matches
}

/** Figma Component 1 — hamburger lines; transforms to cross when open */
function MenuIcon({ open }: { open: boolean }) {
  return (
    <span
      className="relative inline-block shrink-0"
      style={{
        width: 'var(--header-menu-icon-w)',
        height: 'var(--header-menu-icon-h)',
      }}
      aria-hidden
    >
      <span
        className="absolute left-0 block bg-black transition-all duration-300 ease-in-out"
        style={{
          height: 'var(--header-menu-line-h)',
          width: '100%',
          top: open ? '50%' : 0,
          transform: open ? 'translateY(-50%) rotate(45deg)' : 'none',
        }}
      />
      <span
        className="absolute left-0 block bg-black transition-all duration-300 ease-in-out"
        style={{
          height: 'var(--header-menu-line-h)',
          width: open ? '100%' : 'var(--header-menu-line-short-w)',
          top: open ? '50%' : 'auto',
          bottom: open ? 'auto' : 0,
          transform: open ? 'translateY(-50%) rotate(-45deg)' : 'none',
        }}
      />
    </span>
  )
}

export function Header({
  showAnnouncement = true,
  pinNav = false,
  sectionScroll = false,
}: {
  showAnnouncement?: boolean
  pinNav?: boolean
  sectionScroll?: boolean
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [navVisible, setNavVisible] = useState(true)
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? isMobileViewport() : false,
  )
  const menuRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)
  const lastScrollY = useRef(0)
  const navVisibleRef = useRef(true)
  const scrollRafId = useRef<number | null>(null)
  const location = useLocation()
  const sectionScrollContext = useSectionScroll()
  const usesSectionScrollRoot =
    sectionScroll && sectionScrollContext?.enabled && isSectionScrollDesktopViewport()
  const useMobileNavOverlay = isMobile && !usesSectionScrollRoot
  const navOverlayMode = usesSectionScrollRoot || useMobileNavOverlay

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        menuRef.current && !menuRef.current.contains(e.target as Node) &&
        btnRef.current && !btnRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  useEffect(() => {
    if (pinNav) {
      setNavVisible(true)
      setMenuOpen(false)
    }
  }, [pinNav])

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_MAX_WIDTH}px)`)
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    navVisibleRef.current = navVisible
  }, [navVisible])

  useEffect(() => {
    if (pinNav) return

    function updateNavVisibility(currentY: number) {
      const mobile = isMobileViewport()
      const scrollThreshold = mobile ? 32 : 8
      const minScrollToHide = mobile ? 72 : 0
      let nextVisible = navVisibleRef.current

      if (currentY <= 0) {
        nextVisible = true
      } else if (
        currentY > minScrollToHide &&
        currentY > lastScrollY.current + scrollThreshold
      ) {
        nextVisible = false
        if (isTabletOrDesktop()) {
          setMenuOpen(false)
        }
      } else if (currentY < lastScrollY.current - scrollThreshold) {
        nextVisible = true
      }

      lastScrollY.current = currentY

      if (nextVisible !== navVisibleRef.current) {
        navVisibleRef.current = nextVisible
        setNavVisible(nextVisible)
      }
    }

    function scheduleNavUpdate(getScrollY: () => number) {
      if (!isMobileViewport()) {
        updateNavVisibility(getScrollY())
        return
      }

      if (scrollRafId.current !== null) return

      scrollRafId.current = window.requestAnimationFrame(() => {
        scrollRafId.current = null
        updateNavVisibility(getScrollY())
      })
    }

    if (usesSectionScrollRoot) {
      const root = sectionScrollContext?.scrollRef.current
      if (!root) return undefined

      lastScrollY.current = root.scrollTop

      function handleSectionScroll() {
        scheduleNavUpdate(() => root!.scrollTop)
      }

      root.addEventListener('scroll', handleSectionScroll, { passive: true })
      return () => {
        root.removeEventListener('scroll', handleSectionScroll)
        if (scrollRafId.current !== null) {
          window.cancelAnimationFrame(scrollRafId.current)
          scrollRafId.current = null
        }
      }
    }

    lastScrollY.current = window.scrollY

    function handleScroll() {
      scheduleNavUpdate(() => window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollRafId.current !== null) {
        window.cancelAnimationFrame(scrollRafId.current)
        scrollRafId.current = null
      }
    }
  }, [pinNav, usesSectionScrollRoot, sectionScrollContext?.scrollRef])

  useEffect(() => {
    if (!menuOpen || pinNav) return

    function handleScrollWhileMenuOpen() {
      if (!isTabletOrDesktop()) return
      setMenuOpen(false)
    }

    const root = usesSectionScrollRoot ? sectionScrollContext?.scrollRef.current : null
    const target: EventTarget = root ?? window

    target.addEventListener('scroll', handleScrollWhileMenuOpen, { passive: true })
    return () => target.removeEventListener('scroll', handleScrollWhileMenuOpen)
  }, [menuOpen, pinNav, usesSectionScrollRoot, sectionScrollContext?.scrollRef])

  useEffect(() => {
    if (!usesSectionScrollRoot && !isMobile) return
    setNavVisible(true)
    navVisibleRef.current = true
    lastScrollY.current = 0
  }, [location.pathname, usesSectionScrollRoot, isMobile])

  return (
    <header
      className={cn(
        'z-[100] w-full px-[5px] pt-[5px]',
        sectionScroll ? 'bg-black' : 'bg-white xl:bg-black',
        sectionScroll && isSectionScrollDesktopViewport() ? 'shrink-0' : 'sticky top-0',
      )}
    >
      {/* Figma Group 511 — 1910×149, node 967:1776 */}
      <div className="relative mx-auto w-full max-w-header">
        {/* Announcement bar — always visible; sections align to its bottom edge */}
        {showAnnouncement ? (
        <div
          className="relative z-[2] flex items-center justify-center rounded-t-header-announcement bg-white shadow-[0_0_4px_rgba(0,0,0,0.25)]"
          style={{
            minHeight: 'var(--header-announcement-h)',
            paddingTop: 'var(--header-announcement-padding-y)',
            paddingBottom: 'var(--header-announcement-padding-y)',
            paddingLeft: 'var(--header-announcement-padding-x)',
            paddingRight: 'var(--header-announcement-padding-x)',
          }}
          data-node-id="967:1782"
        >
          <p
            className="text-center font-body capitalize text-black"
            style={{
              fontSize: 'var(--header-text-announcement)',
              lineHeight: 'var(--header-announcement-line-height)',
              fontVariationSettings: "'opsz' 14",
            }}
            data-node-id="967:1784"
          >
            Applications open for the AY 2026–27 Cohort. Limited spots remaining{' '}
            <a
              href={CONTACT_PAGE_PATH}
              className="text-zene-blue underline decoration-solid underline-offset-2 hover:opacity-80"
            >
              Apply now →
            </a>
          </p>
        </div>
        ) : null}

        {/* Nav + menu — overlays sections on scroll pages (no layout gap when hidden) */}
        <div
          className={cn(
            'relative w-full',
            navOverlayMode &&
              'pointer-events-none absolute left-0 right-0 top-full z-[101]',
          )}
        >
        {/* Nav bar — fades out on scroll down, fades in on scroll up */}
        <div
          className={cn(
            navOverlayMode
              ? 'transition-[transform,opacity] duration-300 ease-in-out'
              : 'grid transition-[grid-template-rows,opacity] duration-300 ease-in-out',
            pinNav || navVisible ? 'opacity-100' : 'opacity-0',
            navOverlayMode && (pinNav || navVisible ? 'translate-y-0' : '-translate-y-full'),
            navOverlayMode && 'pointer-events-auto',
            navOverlayMode && !pinNav && !navVisible && 'pointer-events-none',
          )}
          style={
            navOverlayMode
              ? undefined
              : { gridTemplateRows: pinNav || navVisible ? '1fr' : '0fr' }
          }
          aria-hidden={!pinNav && !navVisible}
        >
          <div className={navOverlayMode ? undefined : 'min-h-0 overflow-hidden'}>
            <div
              className={cn(
                'site-header-nav flex h-header-nav items-center justify-between overflow-hidden bg-header-gradient px-6 sm:px-10 lg:px-[115px]',
                showAnnouncement
                  ? 'site-header-nav--below-announcement -mt-[10px] rounded-b-header-nav'
                  : 'rounded-header-nav shadow-[0_0_4px_rgba(0,0,0,0.25)]',
              )}
              data-node-id="967:1777"
            >
          <Link to="/" aria-label="Zene AI — Home" className="shrink-0" data-node-id="967:1778">
            <img
              src="/assets/figma/header/logo.png"
              alt="Zene.ai"
              className="object-contain object-left"
              style={{
                width: 'var(--header-logo-w)',
                height: 'var(--header-logo-h)',
              }}
            />
          </Link>

          <div className="flex items-center gap-2 sm:gap-4 lg:gap-8">
            <a
              href="#pdf"
              className="relative hidden items-center justify-center px-4 font-heading capitalize leading-none text-black no-underline transition-none hover:text-black sm:inline-flex sm:px-6"
              style={{
                height: 'var(--header-pdf-h)',
                minWidth: 'var(--header-pdf-min-w)',
                fontSize: 'var(--header-text-pdf)',
              }}
              data-node-id="967:1779"
            >
              <span
                className="rotating-split-border absolute inset-0"
                style={{
                  borderWidth: 'calc(2px * var(--header-font-scale))',
                  borderRadius: 'var(--header-pdf-radius)',
                }}
                aria-hidden
              />
              <span className="relative z-[1]" data-node-id="967:1780">
                Get the PDF
              </span>
            </a>

            <button
              ref={btnRef}
              type="button"
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen(v => !v)}
              className="inline-flex items-center gap-2 font-heading capitalize leading-none text-black sm:gap-3"
              style={{ fontSize: 'var(--header-text-menu)' }}
              data-node-id="967:1781"
            >
              <span data-node-id="715:1681">Menu</span>
              <MenuIcon open={menuOpen} />
            </button>
          </div>
            </div>
          </div>
        </div>

        {/* Menu popup — Figma Group 512 (node 970:1790) */}
        <div
          id="site-menu"
          ref={menuRef}
          aria-hidden={!menuOpen || (!pinNav && !navVisible)}
          className={cn(
            'absolute right-0 z-50 w-full rounded-[10px] border border-black bg-white shadow-[0_0_4px_rgba(0,0,0,0.25)] transition-opacity duration-300 ease-in-out md:w-[var(--header-menu-popup-w)]',
            menuOpen && (pinNav || navVisible) ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
          )}
          style={{ top: 'calc(100% + var(--header-menu-popup-gap))' }}
          data-node-id="970:1790"
        >
          <nav
            aria-label="Site navigation"
            className="flex flex-col uppercase"
            style={{
              padding: 'var(--header-menu-padding-y) var(--header-menu-padding-x)',
              gap: 'var(--header-menu-item-gap)',
            }}
          >
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => {
                  setMenuOpen(false)
                  if (link.href === '/' && location.pathname === '/') {
                    const api = sectionScrollContext?.apiRef.current
                    if (
                      api &&
                      sectionScrollContext?.scrollRef.current?.classList.contains('section-scroll-root') &&
                      isSectionScrollDesktopViewport()
                    ) {
                      api.scrollToY(0)
                    } else {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }
                  }
                }}
                className="font-heading font-medium uppercase leading-none text-black no-underline hover:text-black"
                style={{
                  fontSize: 'var(--header-menu-text)',
                  lineHeight: 'var(--header-menu-text-lh)',
                }}
                data-node-id={link.nodeId}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        </div>
      </div>
    </header>
  )
}
