import CategoryCard from '../components/CategoryCard.jsx'
import { categories, copy } from '../data/portfolio.js'
import { useLanguage } from '../context/useLanguage.js'

function WorksIndex() {
  const { text } = useLanguage()

  return (
    <section className="page-section directory-page">
      <div className="page-intro">
        <p className="eyebrow">{text(copy.worksPage.eyebrow)}</p>
        <h1>{text(copy.worksPage.title)}</h1>
        <p>{text(copy.worksPage.intro)}</p>
      </div>
      <div className="directory-list">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} compact />
        ))}
      </div>
    </section>
  )
}

export default WorksIndex
