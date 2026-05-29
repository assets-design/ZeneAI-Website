import {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
  type RefObject,
} from 'react'

type SectionScrollContextValue = {
  enabled: boolean
  scrollRef: RefObject<HTMLElement | null>
}

const SectionScrollContext = createContext<SectionScrollContextValue | null>(null)

type SectionScrollProviderProps = {
  scrollRef: RefObject<HTMLElement | null>
  children: ReactNode
}

export function SectionScrollProvider({ scrollRef, children }: SectionScrollProviderProps) {
  const value = useMemo(
    () => ({
      enabled: true,
      scrollRef,
    }),
    [scrollRef],
  )

  return (
    <SectionScrollContext.Provider value={value}>{children}</SectionScrollContext.Provider>
  )
}

export function useSectionScroll() {
  return useContext(SectionScrollContext)
}
