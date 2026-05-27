import { Navigate } from 'react-router-dom'
import ProjectList from '../components/ProjectList.jsx'
import VisualFrame from '../components/VisualFrame.jsx'
import { categories, projects } from '../data/portfolio.js'
import { useLanguage } from '../context/useLanguage.js'

function CategoryPage({ categoryId }) {
  const { text } = useLanguage()
  const category = categories.find((item) => item.id === categoryId)

  if (!category) {
    return <Navigate to="/works" replace />
  }

  return (
    <section className="page-section category-page">
      <div className="category-hero">
        <div className="category-hero__copy">
          <p className="eyebrow">
            {category.number} / {text(category.meta)}
          </p>
          <h1>{text(category.title)}</h1>
          <p>{text(category.description)}</p>
        </div>
        <VisualFrame
          variant={category.variant}
          index={category.number}
          title={text(category.subtitle)}
          image={category.image}
          imagePosition={category.imagePosition}
          imageScale={category.imageScale}
          className="category-hero__visual"
        />
      </div>

      <ProjectList projects={projects[category.id]} variant={category.variant} />
    </section>
  )
}

export default CategoryPage
