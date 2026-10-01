import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './components/layout/Layout'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Work from './pages/Work'
import Industries from './pages/Industries'
import Insights from './pages/Insights'
import Contact from './pages/Contact'
import ServiceDetail from './pages/ServiceDetail'
import WorkDetail from './pages/WorkDetail'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
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
      </Layout>
    </BrowserRouter>
  )
}

export default App