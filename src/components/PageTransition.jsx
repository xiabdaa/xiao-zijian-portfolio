import { useCallback, useMemo, useRef, useState } from 'react'
import gsap from 'gsap'
import { useLocation, useNavigate } from 'react-router-dom'
import { TransitionContext } from './transitionContext.js'

function createFanPath(startAngle, endAngle) {
  const radius = 185
  const toPoint = (angle) => {
    const radians = (angle * Math.PI) / 180
    return {
      x: Number((Math.cos(radians) * radius).toFixed(2)),
      y: Number((100 - Math.sin(radians) * radius).toFixed(2)),
    }
  }

  const start = toPoint(startAngle)
  const end = toPoint(endAngle)

  return `M 0 100 L ${start.x} ${start.y} L ${end.x} ${end.y} Z`
}

const bladeColors = ['#0d0d0c', '#191816', '#292723', '#3a3631', '#5b1720', '#d8d3c7', '#211f1c', '#0f0f0e']

export function TransitionProvider({ children }) {
  const overlayRef = useRef(null)
  const bladeRefs = useRef([])
  const labelRef = useRef(null)
  const isAnimating = useRef(false)
  const navigate = useNavigate()
  const location = useLocation()
  const [destinationLabel, setDestinationLabel] = useState('XIAO ZIJIAN')

  const fanBlades = useMemo(
    () =>
      Array.from({ length: 8 }, (_, index) => ({
        id: index,
        path: createFanPath(index * 13, index * 13 + 18),
        fill: bladeColors[index],
      })),
    [],
  )

  const playCover = useCallback(() => {
    const overlay = overlayRef.current
    const blades = bladeRefs.current.filter(Boolean)

    return new Promise((resolve) => {
      gsap.killTweensOf([overlay, blades, labelRef.current])
      gsap.set(overlay, { autoAlpha: 1, pointerEvents: 'auto' })
      gsap.set(blades, { scale: 0, rotation: -7, svgOrigin: '0 100' })
      gsap.set(labelRef.current, { autoAlpha: 0, y: 18 })

      gsap
        .timeline({ onComplete: resolve })
        .to(
          blades,
          {
            scale: 1,
            rotation: 0,
            duration: 0.46,
            ease: 'power3.inOut',
            stagger: 0.022,
          },
          0,
        )
        .to(labelRef.current, { autoAlpha: 1, y: 0, duration: 0.18, ease: 'power2.out' }, 0.22)
    })
  }, [])

  const playReveal = useCallback(() => {
    const overlay = overlayRef.current
    const blades = bladeRefs.current.filter(Boolean)

    return new Promise((resolve) => {
      gsap
        .timeline({
          onComplete: () => {
            gsap.set(overlay, { autoAlpha: 0, pointerEvents: 'none' })
            resolve()
          },
        })
        .to(labelRef.current, { autoAlpha: 0, y: -12, duration: 0.16, ease: 'power2.inOut' }, 0)
        .to(
          blades,
          {
            scale: 0,
            rotation: 8,
            duration: 0.42,
            ease: 'power3.inOut',
            stagger: { each: 0.022, from: 'end' },
          },
          0.02,
        )
    })
  }, [])

  const navigateWithTransition = useCallback(
    async (to, label = 'XIAO ZIJIAN') => {
      if (isAnimating.current) return

      const targetPath = typeof to === 'string' ? to : to.pathname
      if (targetPath === location.pathname) {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        return
      }

      isAnimating.current = true
      setDestinationLabel(label)
      document.documentElement.classList.add('is-page-transitioning')

      await playCover()
      navigate(to)

      requestAnimationFrame(async () => {
        window.scrollTo(0, 0)
        await playReveal()
        document.documentElement.classList.remove('is-page-transitioning')
        isAnimating.current = false
      })
    },
    [location.pathname, navigate, playCover, playReveal],
  )

  const value = useMemo(() => ({ navigateWithTransition }), [navigateWithTransition])

  return (
    <TransitionContext.Provider value={value}>
      {children}
      <div ref={overlayRef} className="page-transition" aria-hidden="true">
        <svg className="page-transition__fan" viewBox="0 0 100 100" preserveAspectRatio="none">
          {fanBlades.map((blade, index) => (
            <path
              key={blade.id}
              ref={(node) => {
                bladeRefs.current[index] = node
              }}
              d={blade.path}
              fill={blade.fill}
            />
          ))}
        </svg>
        <div ref={labelRef} className="page-transition__label">
          <span>Portfolio</span>
          <strong>{destinationLabel}</strong>
        </div>
      </div>
    </TransitionContext.Provider>
  )
}
