import { Grid3X3, Home, Mail, UserRound } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage.js'
import TransitionLink from './TransitionLink.jsx'

const dockItems = [
  { path: '/', icon: Home, label: { cn: '首页', en: 'Home' } },
  { path: '/works', icon: Grid3X3, label: { cn: '作品', en: 'Works' } },
  { path: '/about', icon: UserRound, label: { cn: '关于', en: 'About' } },
  { path: '/contact', icon: Mail, label: { cn: '联系', en: 'Contact' } },
]

function BottomDock() {
  const { text } = useLanguage()
  const location = useLocation()

  return (
    <nav className="bottom-dock" aria-label="Floating navigation">
      {dockItems.map((item) => {
        const Icon = item.icon
        const isActive = location.pathname === item.path

        return (
          <TransitionLink
            key={item.path}
            to={item.path}
            label={text(item.label)}
            className={isActive ? 'is-active' : ''}
            title={text(item.label)}
          >
            <Icon size={18} strokeWidth={1.6} aria-hidden="true" />
            <span>{text(item.label)}</span>
          </TransitionLink>
        )
      })}
    </nav>
  )
}

export default BottomDock
