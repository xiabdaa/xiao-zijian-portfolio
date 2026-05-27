import { ArrowRight } from 'lucide-react'
import CategoryCard from '../components/CategoryCard.jsx'
import TransitionLink from '../components/TransitionLink.jsx'
import VisualFrame from '../components/VisualFrame.jsx'
import { categories, copy } from '../data/portfolio.js'
import { useLanguage } from '../context/useLanguage.js'

function Home() {
  const { text } = useLanguage()

  return (
    <>
      <section className="hero-section page-section">
        <div className="hero-copy">
          <p className="eyebrow">{text(copy.hero.eyebrow)}</p>
          <h1>{text(copy.hero.title)}</h1>
          <div className="hero-copy__role">
            <span>{text(copy.hero.role)}</span>
            <span>2026</span>
          </div>
          <p className="hero-copy__intro">{text(copy.hero.intro)}</p>
          <div className="hero-actions">
            <TransitionLink to="/works" label={text(copy.hero.button)} className="primary-link">
              {text(copy.hero.button)}
              <ArrowRight size={20} strokeWidth={1.5} aria-hidden="true" />
            </TransitionLink>
            <TransitionLink to="/contact" label={text(copy.hero.contact)} className="text-link">
              {text(copy.hero.contact)}
            </TransitionLink>
          </div>
        </div>
        <div className="hero-visual">
          <VisualFrame
            variant="hero"
            index="00"
            title={text(copy.hero.caption)}
            image={copy.hero.image}
            imagePosition="center top"
            imageScale={1.08}
            wide
            fit="contain"
          />
          <div className="hero-visual__caption">
            <span>Featured Image</span>
            <p>{text(copy.hero.caption)}</p>
          </div>
        </div>
      </section>

      <section className="page-section works-preview">
        <div className="section-heading">
          <p className="eyebrow">{text(copy.sections.workEyebrow)}</p>
          <h2>{text(copy.sections.workTitle)}</h2>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      <section className="page-section about-preview">
        <div className="about-preview__index">
          <span>About</span>
          <span>05</span>
        </div>
        <div>
          <p className="eyebrow">{text(copy.sections.aboutEyebrow)}</p>
          <h2>{text(copy.sections.aboutTitle)}</h2>
          <p>{text(copy.sections.aboutText)}</p>
          <TransitionLink to="/about" label={text(copy.sections.readAbout)} className="text-link">
            {text(copy.sections.readAbout)}
          </TransitionLink>
        </div>
      </section>
    </>
  )
}

export default Home
