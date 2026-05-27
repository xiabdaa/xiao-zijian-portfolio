import TransitionLink from '../components/TransitionLink.jsx'
import VisualFrame from '../components/VisualFrame.jsx'
import { copy } from '../data/portfolio.js'
import { useLanguage } from '../context/useLanguage.js'

function About() {
  const { text } = useLanguage()

  return (
    <section className="page-section about-page">
      <div className="page-intro">
        <p className="eyebrow">{text(copy.aboutPage.eyebrow)}</p>
        <h1>{text(copy.aboutPage.title)}</h1>
      </div>
      <div className="about-page__grid">
        <VisualFrame variant="about" index="05" title="Artist portrait" />
        <div className="about-page__text">
          <p>{text(copy.aboutPage.intro)}</p>
          <p>{text(copy.sections.aboutText)}</p>
          <TransitionLink to="/cv" label="CV" className="primary-link">
            CV
          </TransitionLink>
        </div>
      </div>
    </section>
  )
}

export default About
