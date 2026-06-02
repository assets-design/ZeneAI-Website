import { BlogSection } from '@/components/blog/BlogSection'
import { ScrollPageDesktop, useDesktopScrollPage } from '@/components/Layout/ScrollPageDesktop'

export function BlogPage() {
  const isDesktop = useDesktopScrollPage()

  if (!isDesktop) {
    return <BlogSection />
  }

  return (
    <ScrollPageDesktop pageClass="program-page-scroll--blog">
      <BlogSection panel />
    </ScrollPageDesktop>
  )
}
