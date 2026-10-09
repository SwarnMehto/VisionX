import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, LazyMotion, MotionConfig, domAnimation, m } from 'framer-motion'

import Layout from './components/layout/Layout'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Work = lazy(() => import('./pages/Work'))
const Industries = lazy(() => import('./pages/Industries'))
const Insights = lazy(() => import('./pages/Insights'))
const Contact = lazy(() => import('./pages/Contact'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const WorkDetail = lazy(() => import('./pages/WorkDetail'))

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    })
  }, [pathname])

  return null
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <m.div
        key={location.pathname}
        initial={{ opacity: 0, clipPath: 'inset(0 0 4% 0)' }}
        animate={{ opacity: 1, clipPath: 'inset(0)' }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.24, ease: 'easeOut' }}
        className="route-transition"
      >
        <Suspense fallback={<div className="route-loading" role="status">Loading Vision X</div>}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<WorkDetail />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </m.div>
    </AnimatePresence>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MotionConfig reducedMotion="user">
        <LazyMotion features={domAnimation}>
          <Layout>
            <AnimatedRoutes />
          </Layout>
        </LazyMotion>
      </MotionConfig>
    </BrowserRouter>
  )
}

export default App