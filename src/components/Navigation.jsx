import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { contact, copy, navItems } from '../data/portfolio.js'
import { useLanguage } from '../context/useLanguage.js'
import TransitionLink from './TransitionLink.jsx'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, text } = useLanguage()
  const location = useLocation()

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <header className="site-header">
        <TransitionLink to="/" label="Xiao Zijian" className="brand-mark" onNavigate={closeMenu}>
          <span>XZ</span>
          <small>Visual Artist & Curator</small>
        </TransitionLink>

        <nav className="header-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <TransitionLink
              key={item.path}
              to={item.path}
              label={text(item.label)}
              className={location.pathname === item.path ? 'is-active' : ''}
              onNavigate={closeMenu}
            >
              {text(item.label)}
            </TransitionLink>
          ))}
        </nav>

        <div className="header-actions">
          <div className="language-switch" aria-label="Language switch">
            <button
              type="button"
              className={language === 'cn' ? 'is-active' : ''}
              onClick={() => setLanguage('cn')}
            >
              CN
            </button>
            <span>/</span>
            <button
              type="button"
              className={language === 'en' ? 'is-active' : ''}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
          </div>
          <button
            type="button"
            className="menu-button"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-label={isMenuOpen ? text(copy.nav.close) : text(copy.nav.menu)}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={20} strokeWidth={1.6} /> : <Menu size={20} strokeWidth={1.6} />}
            <span>{isMenuOpen ? text(copy.nav.close) : text(copy.nav.menu)}</span>
          </button>
        </div>
      </header>

      <div className={`menu-sheet ${isMenuOpen ? 'is-open' : ''}`} aria-hidden={!isMenuOpen}>
        <div className="menu-sheet__inner">
          <p className="menu-sheet__kicker">Directory</p>
          <div className="menu-sheet__links">
            {navItems.map((item, index) => (
              <TransitionLink
                key={item.path}
                to={item.path}
                label={text(item.label)}
                onNavigate={closeMenu}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                {text(item.label)}
              </TransitionLink>
            ))}
          </div>
          <div className="menu-sheet__contact">
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={contact.instagramUrl} target="_blank" rel="noreferrer">
              Instagram {contact.instagram}
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navigation
