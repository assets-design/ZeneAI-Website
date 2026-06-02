import { BlogPostSection } from '@/components/blog/BlogPostSection'
import { getBlogPostBySlug } from '@/data/blogPosts'
import { Navigate, useParams } from 'react-router-dom'

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getBlogPostBySlug(slug) : undefined

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  return <BlogPostSection post={post} />
}
