import { useLocation } from 'react-router-dom'
import Footer from './Footer.jsx'
import Navigation from './Navigation.jsx'
import BottomDock from './BottomDock.jsx'
import IntroGate from './IntroGate.jsx'

function Layout({ children }) {
  const location = useLocation()
  const showIntro = location.pathname === '/'

  return (
    <div className="site-shell">
      {showIntro ? <IntroGate /> : null}
      <Navigation />
      <main>{children}</main>
      <Footer />
      <BottomDock />
    </div>
  )
}

export default Layout
