import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/layout/Layout.jsx'
import { ToastProvider } from './components/common/Toast.jsx'
import Home from './pages/Home.jsx'

// Home ships in the main bundle; inner pages load on demand.
const About = lazy(() => import('./pages/About.jsx'))
const Services = lazy(() => import('./pages/Services.jsx'))
const Portfolio = lazy(() => import('./pages/Portfolio.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

const Fallback = () => <div className="min-h-screen bg-navy" aria-busy="true" />

// Reset scroll only after the old page has faded out, so it doesn't visibly jump to its top first.
// In-page #anchors are handled by PageWrapper once the new page has rendered.
const scrollToTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'instant' })

export default function App() {
  const location = useLocation()
  return (
    <ToastProvider>
      <Layout>
        <Suspense fallback={<Fallback />}>
          <AnimatePresence mode="wait" onExitComplete={scrollToTop}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/work" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </Layout>
    </ToastProvider>
  )
}
