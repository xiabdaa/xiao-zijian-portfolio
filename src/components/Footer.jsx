import { ArrowUpRight } from 'lucide-react'
import { contact } from '../data/portfolio.js'

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <p>Xiao Zijian</p>
        <span>Visual Artist & Curator</span>
      </div>
      <div className="site-footer__links">
        <a href={`mailto:${contact.email}`}>
          {contact.email}
          <ArrowUpRight size={17} strokeWidth={1.5} aria-hidden="true" />
        </a>
        <a href={contact.instagramUrl} target="_blank" rel="noreferrer">
          Instagram {contact.instagram}
          <ArrowUpRight size={17} strokeWidth={1.5} aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
