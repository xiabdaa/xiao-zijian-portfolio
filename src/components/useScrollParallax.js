import { useEffect, useRef } from 'react'

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value))
}

function supportsReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function useScrollParallax({ distance = 32, direction = 1 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return undefined

    let frameId = 0

    const reset = () => {
      element.style.setProperty('--scroll-media-y', '0px')
      element.style.setProperty('--scroll-copy-y', '0px')
    }

    const update = () => {
      frameId = 0

      if (supportsReducedMotion()) {
        reset()
        return
      }

      const rect = element.getBoundingClientRect()
      const viewportHeight = window.innerHeight || 1
      const viewportCenter = viewportHeight / 2
      const elementCenter = rect.top + rect.height / 2
      const range = viewportCenter + rect.height / 2
      const progress = clamp((elementCenter - viewportCenter) / range, -1, 1)
      const mobileFactor = window.innerWidth < 720 ? 0.58 : 1
      const mediaY = progress * distance * direction * mobileFactor
      const copyY = progress * distance * -0.28 * direction * mobileFactor

      element.style.setProperty('--scroll-media-y', `${mediaY.toFixed(2)}px`)
      element.style.setProperty('--scroll-copy-y', `${copyY.toFixed(2)}px`)
    }

    const requestUpdate = () => {
      if (frameId) return
      frameId = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [direction, distance])

  return ref
}
