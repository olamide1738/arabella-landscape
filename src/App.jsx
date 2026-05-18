import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import WhatsApp from './components/WhatsApp'
import Home from './pages/Home'
import Services from './pages/Services'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import ServiceDetail from './pages/ServiceDetail'
import About from './pages/About'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import Blog from './pages/Blog'
import ArticleDetail from './pages/ArticleDetail'
import Plants from './pages/Plants'
import Markets from './pages/Markets'
import MarketDetail from './pages/MarketDetail'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<ArticleDetail />} />
          <Route path="/plants" element={<Plants />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/markets/:slug" element={<MarketDetail />} />
        </Routes>
        <Footer />
        <BackToTop />
        <WhatsApp />
      </BrowserRouter>
    </HelmetProvider>
  )
}
