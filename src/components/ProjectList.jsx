import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../context/useLanguage.js'
import VisualFrame from './VisualFrame.jsx'

function ProjectList({ projects, variant }) {
  const { text } = useLanguage()

  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <article className="project-row" key={`${text(project.title)}-${project.year}`}>
          <div className="project-row__index">{String(index + 1).padStart(2, '0')}</div>
          <VisualFrame
            variant={variant}
            index={String(index + 1)}
            title={text(project.title)}
            className="project-row__image"
          />
          <div className="project-row__content">
            <div>
              <p className="project-row__type">
                {project.year} / {text(project.type)}
              </p>
              <h2>{text(project.title)}</h2>
            </div>
            <p>{text(project.description)}</p>
          </div>
          <button type="button" className="project-row__button" aria-label={text(project.title)}>
            <ArrowUpRight size={22} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </article>
      ))}
    </div>
  )
}

export default ProjectList
