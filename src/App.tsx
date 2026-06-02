import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ScrollToTop } from '@/components/Layout/ScrollToTop'
import { AboutPage } from '@/pages/AboutPage'
import { CodeMonkeyPage } from '@/pages/CodeMonkeyPage'
import { EnglishAiPage } from '@/pages/EnglishAiPage'
import { TheEdgePage } from '@/pages/TheEdgePage'
import { AppLayout } from '@/components/Layout/AppLayout'
import { BlogPage } from '@/pages/BlogPage'
import { ContactPage } from '@/pages/ContactPage'
import { HomePage } from '@/pages/HomePage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ThankYouPage } from '@/pages/ThankYouPage'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <AppLayout sectionScroll>
              <HomePage />
            </AppLayout>
          }
        />
        <Route
          path="/about"
          element={
            <AppLayout sectionScroll>
              <AboutPage />
            </AppLayout>
          }
        />
        <Route
          path="/english-ai"
          element={
            <AppLayout sectionScroll>
              <EnglishAiPage />
            </AppLayout>
          }
        />
        <Route
          path="/code-monkey"
          element={
            <AppLayout sectionScroll>
              <CodeMonkeyPage />
            </AppLayout>
          }
        />
        <Route
          path="/the-edge"
          element={
            <AppLayout sectionScroll>
              <TheEdgePage />
            </AppLayout>
          }
        />
        <Route
          path="/blog"
          element={
            <AppLayout sectionScroll>
              <BlogPage />
            </AppLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <AppLayout sectionScroll>
              <ContactPage />
            </AppLayout>
          }
        />
        <Route
          path="/thank-you"
          element={
            <AppLayout showAnnouncement={false} pinHeader sectionScroll>
              <ThankYouPage />
            </AppLayout>
          }
        />
        <Route
          path="*"
          element={
            <AppLayout sectionScroll>
              <NotFoundPage />
            </AppLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
