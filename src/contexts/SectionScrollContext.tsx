import {
  createContext,
  useContext,
  useMemo,
  type MutableRefObject,
  type ReactNode,
  type RefObject,
} from 'react'

export type SectionScrollApi = {
  scrollToY: (top: number) => void
  isAnimating: () => boolean
}

type SectionScrollContextValue = {
  enabled: boolean
  scrollRef: RefObject<HTMLElement | null>
  apiRef: MutableRefObject<SectionScrollApi | null>
}

const SectionScrollContext = createContext<SectionScrollContextValue | null>(null)

type SectionScrollProviderProps = {
  scrollRef: RefObject<HTMLElement | null>
  apiRef: MutableRefObject<SectionScrollApi | null>
  children: ReactNode
}

export function SectionScrollProvider({ scrollRef, apiRef, children }: SectionScrollProviderProps) {
  const value = useMemo(
    () => ({
      enabled: true,
      scrollRef,
      apiRef,
    }),
    [scrollRef, apiRef],
  )

  return (
    <SectionScrollContext.Provider value={value}>{children}</SectionScrollContext.Provider>
  )
}

export function useSectionScroll() {
  return useContext(SectionScrollContext)
}
