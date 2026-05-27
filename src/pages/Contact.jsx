import { ArrowUpRight, AtSign, Mail } from 'lucide-react'
import { contact, copy } from '../data/portfolio.js'
import { useLanguage } from '../context/useLanguage.js'

function Contact() {
  const { text } = useLanguage()

  return (
    <section className="page-section contact-page">
      <div className="page-intro">
        <p className="eyebrow">{text(copy.contactPage.eyebrow)}</p>
        <h1>{text(copy.contactPage.title)}</h1>
        <p>{text(copy.contactPage.intro)}</p>
      </div>
      <div className="contact-links">
        <a href={`mailto:${contact.email}`}>
          <Mail size={24} strokeWidth={1.5} aria-hidden="true" />
          <span>{contact.email}</span>
          <ArrowUpRight size={24} strokeWidth={1.5} aria-hidden="true" />
        </a>
        <a href={contact.instagramUrl} target="_blank" rel="noreferrer">
          <AtSign size={24} strokeWidth={1.5} aria-hidden="true" />
          <span>Instagram {contact.instagram}</span>
          <ArrowUpRight size={24} strokeWidth={1.5} aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}

export default Contact
