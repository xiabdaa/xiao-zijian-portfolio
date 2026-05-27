import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../context/useLanguage.js'
import TransitionLink from './TransitionLink.jsx'
import VisualFrame from './VisualFrame.jsx'
import { useScrollParallax } from './useScrollParallax.js'

function CategoryCard({ category, compact = false }) {
  const { text } = useLanguage()
  const parallaxRef = useScrollParallax({
    distance: compact
      ? (category.compactParallaxDistance ?? 46)
      : (category.parallaxDistance ?? 72),
    direction: -1,
  })

  return (
    <article
      ref={parallaxRef}
      className={`category-card scroll-parallax ${compact ? 'category-card--compact' : ''}`}
    >
      <TransitionLink to={category.path} label={text(category.title)} className="category-card__media">
        <VisualFrame
          variant={category.variant}
          index={category.number}
          title={text(category.title)}
          image={category.coverImage ?? category.image}
          imagePosition={category.coverImagePosition ?? category.imagePosition}
          imageScale={category.coverImageScale ?? category.imageScale}
        />
      </TransitionLink>
      <div className="category-card__body">
        <div className="category-card__meta">
          <span>{category.number}</span>
          <span>{text(category.meta)}</span>
        </div>
        <TransitionLink to={category.path} label={text(category.title)} className="category-card__title">
          <span>{text(category.title)}</span>
          <ArrowUpRight size={24} strokeWidth={1.4} aria-hidden="true" />
        </TransitionLink>
        <p>{text(category.description)}</p>
      </div>
    </article>
  )
}

export default CategoryCard
