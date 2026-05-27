import { cvSections, copy } from '../data/portfolio.js'
import { useLanguage } from '../context/useLanguage.js'

function CV() {
  const { text } = useLanguage()

  return (
    <section className="page-section cv-page">
      <div className="page-intro">
        <p className="eyebrow">{text(copy.cvPage.eyebrow)}</p>
        <h1>{text(copy.cvPage.title)}</h1>
      </div>
      <div className="cv-list">
        {cvSections.map((section) => (
          <article className="cv-section" key={text(section.title)}>
            <h2>{text(section.title)}</h2>
            <div>
              {section.items.map((item) => (
                <div className="cv-row" key={`${item.year}-${text(item.text)}`}>
                  <span>{item.year}</span>
                  <p>{text(item.text)}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default CV
