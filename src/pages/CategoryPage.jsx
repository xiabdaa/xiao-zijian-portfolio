import { Navigate } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
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

      {category.feature ? (
        <section className="category-feature">
          <div className="category-feature__copy">
            <p className="eyebrow">{text(category.feature.eyebrow)}</p>
            <h2>{text(category.feature.title)}</h2>
            <p>{text(category.feature.description)}</p>
          </div>
          <VisualFrame
            variant={category.variant}
            index={category.number}
            title={text(category.feature.title)}
            image={category.feature.image}
            imagePosition={category.feature.imagePosition}
            fit={category.feature.fit}
            showCaption={false}
            className="category-feature__visual"
          />
        </section>
      ) : null}

      {category.document ? (
        <section className="category-document">
          <div className="category-document__copy">
            <p className="eyebrow">{text(category.document.eyebrow)}</p>
            <h2>{text(category.document.title)}</h2>
            <p>{text(category.document.description)}</p>
            <a href={category.document.src} target="_blank" rel="noreferrer" className="text-link">
              {text({ cn: '打开 PDF', en: 'Open PDF' })}
              <ArrowUpRight size={18} strokeWidth={1.6} aria-hidden="true" />
            </a>
          </div>
          <div className="category-document__viewer">
            <iframe src={`${category.document.src}#toolbar=0&navpanes=0`} title={text(category.document.title)} />
          </div>
        </section>
      ) : null}

      <ProjectList projects={projects[category.id]} variant={category.variant} />
    </section>
  )
}

export default CategoryPage
