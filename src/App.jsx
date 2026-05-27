import { useEffect } from 'react'
import Lenis from 'lenis'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import About from './pages/About.jsx'
import CategoryPage from './pages/CategoryPage.jsx'
import Contact from './pages/Contact.jsx'
import CV from './pages/CV.jsx'
import Home from './pages/Home.jsx'
import WorksIndex from './pages/WorksIndex.jsx'
import { categories } from './data/portfolio.js'

function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.08,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      smoothWheel: true,
    })

    let frameId
    const raf = (time) => {
      lenis.raf(time)
      frameId = requestAnimationFrame(raf)
    }

    frameId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frameId)
      lenis.destroy()
    }
  }, [])

  return null
}

function PageTitle() {
  const location = useLocation()

  useEffect(() => {
    const currentCategory = categories.find((category) => category.path === location.pathname)
    const suffix = currentCategory?.title.en || 'Portfolio'
    document.title = `Xiao Zijian - ${suffix}`
  }, [location.pathname])

  return null
}

function App() {
  return (
    <Layout>
      <SmoothScroll />
      <PageTitle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<WorksIndex />} />
        {categories.map((category) => (
          <Route
            key={category.id}
            path={category.path}
            element={<CategoryPage categoryId={category.id} />}
          />
        ))}
        <Route path="/about" element={<About />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}

export default App
