import { lazy, Suspense, type ComponentProps } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppLayout } from '@/components/Layout/AppLayout'
import { ScrollToTop } from '@/components/Layout/ScrollToTop'

const AboutPage = lazy(() =>
  import('@/pages/AboutPage').then(module => ({ default: module.AboutPage })),
)
const CodeMonkeyPage = lazy(() =>
  import('@/pages/CodeMonkeyPage').then(module => ({ default: module.CodeMonkeyPage })),
)
const EnglishAiPage = lazy(() =>
  import('@/pages/EnglishAiPage').then(module => ({ default: module.EnglishAiPage })),
)
const TheEdgePage = lazy(() =>
  import('@/pages/TheEdgePage').then(module => ({ default: module.TheEdgePage })),
)
const BlogPage = lazy(() =>
  import('@/pages/BlogPage').then(module => ({ default: module.BlogPage })),
)
const BlogPostPage = lazy(() =>
  import('@/pages/BlogPostPage').then(module => ({ default: module.BlogPostPage })),
)
const CareerJobPage = lazy(() =>
  import('@/pages/CareerJobPage').then(module => ({ default: module.CareerJobPage })),
)
const CareersPage = lazy(() =>
  import('@/pages/CareersPage').then(module => ({ default: module.CareersPage })),
)
const ContactPage = lazy(() =>
  import('@/pages/ContactPage').then(module => ({ default: module.ContactPage })),
)
const FaqPage = lazy(() =>
  import('@/pages/FaqPage').then(module => ({ default: module.FaqPage })),
)
const PrivacyPolicyPage = lazy(() =>
  import('@/pages/PrivacyPolicyPage').then(module => ({ default: module.PrivacyPolicyPage })),
)
const HomePage = lazy(() =>
  import('@/pages/HomePage').then(module => ({ default: module.HomePage })),
)
const NotFoundPage = lazy(() =>
  import('@/pages/NotFoundPage').then(module => ({ default: module.NotFoundPage })),
)
const ThankYouPage = lazy(() =>
  import('@/pages/ThankYouPage').then(module => ({ default: module.ThankYouPage })),
)

function RouteFallback() {
  return <div className="min-h-screen bg-black" aria-hidden />
}

type AppLayoutProps = ComponentProps<typeof AppLayout>

function ScrollLayout(props: AppLayoutProps) {
  return <AppLayout {...props} />
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route
            path="/"
            element={
              <ScrollLayout sectionScroll>
                <HomePage />
              </ScrollLayout>
            }
          />
          <Route
            path="/about"
            element={
              <ScrollLayout sectionScroll>
                <AboutPage />
              </ScrollLayout>
            }
          />
          <Route
            path="/english-ai"
            element={
              <ScrollLayout sectionScroll>
                <EnglishAiPage />
              </ScrollLayout>
            }
          />
          <Route
            path="/code-monkey"
            element={
              <ScrollLayout sectionScroll>
                <CodeMonkeyPage />
              </ScrollLayout>
            }
          />
          <Route
            path="/the-edge"
            element={
              <ScrollLayout sectionScroll>
                <TheEdgePage />
              </ScrollLayout>
            }
          />
          <Route
            path="/blog"
            element={
              <ScrollLayout sectionScroll>
                <BlogPage />
              </ScrollLayout>
            }
          />
          <Route
            path="/blog/:slug"
            element={
              <ScrollLayout>
                <BlogPostPage />
              </ScrollLayout>
            }
          />
          <Route
            path="/faq"
            element={
              <ScrollLayout sectionScroll>
                <FaqPage />
              </ScrollLayout>
            }
          />
          <Route
            path="/careers"
            element={
              <ScrollLayout sectionScroll>
                <CareersPage />
              </ScrollLayout>
            }
          />
          <Route
            path="/careers/:slug"
            element={
              <ScrollLayout>
                <CareerJobPage />
              </ScrollLayout>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <ScrollLayout>
                <PrivacyPolicyPage />
              </ScrollLayout>
            }
          />
          <Route
            path="/contact"
            element={
              <ScrollLayout sectionScroll>
                <ContactPage />
              </ScrollLayout>
            }
          />
          <Route
            path="/thank-you"
            element={
              <ScrollLayout showAnnouncement={false} pinHeader sectionScroll>
                <ThankYouPage />
              </ScrollLayout>
            }
          />
          <Route
            path="*"
            element={
              <ScrollLayout sectionScroll>
                <NotFoundPage />
              </ScrollLayout>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
