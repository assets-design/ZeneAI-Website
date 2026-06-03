import { BlogSection } from '@/components/blog/BlogSection'
import { ScrollPageDesktop, useDesktopScrollPage } from '@/components/Layout/ScrollPageDesktop'

export function BlogPage() {
  useDesktopScrollPage()

  return (
    <ScrollPageDesktop pageClass="program-page-scroll--blog">
      <BlogSection panel />
    </ScrollPageDesktop>
  )
}
