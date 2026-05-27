import { useEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { contact, copy, navItems } from '../data/portfolio.js'
import { useLanguage } from '../context/useLanguage.js'
import TransitionLink from './TransitionLink.jsx'

const introVideo = `${import.meta.env.BASE_URL}intro/work-intro.mp4`
const splashLetters = 'XIABDAA'.split('')

function IntroGate() {
  const sectionRef = useRef(null)
  const stageRef = useRef(null)
  const videoRef = useRef(null)
  const { text } = useLanguage()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return undefined

    video.muted = true
    video.defaultMuted = true
    video.volume = 0
    video.play().catch(() => {
      video.controls = false
    })

    return undefined
  }, [])

  useEffect(() => {
    const section = sectionRef.current
    const stage = stageRef.current
    if (!section || !stage) return undefined

    let frameId = 0
    const update = () => {
      frameId = 0
      const progress = Math.min(
        1,
        Math.max(0, -section.getBoundingClientRect().top / window.innerHeight),
      )

      stage.style.setProperty('--intro-video-y', `${progress * 54}svh`)
      stage.style.setProperty('--intro-video-scale', String(1.15 - progress * 0.07))
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
  }, [])

  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return undefined

    let frameId = 0
    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0

    const render = () => {
      currentX += (targetX - currentX) * 0.14
      currentY += (targetY - currentY) * 0.14

      stage.style.setProperty('--intro-pointer-x', `${currentX.toFixed(2)}px`)
      stage.style.setProperty('--intro-pointer-y', `${currentY.toFixed(2)}px`)

      if (Math.abs(targetX - currentX) > 0.08 || Math.abs(targetY - currentY) > 0.08) {
        frameId = window.requestAnimationFrame(render)
      } else {
        frameId = 0
      }
    }

    const requestRender = () => {
      if (frameId) return
      frameId = window.requestAnimationFrame(render)
    }

    const handlePointerMove = (event) => {
      if (event.pointerType === 'touch') return

      const rect = stage.getBoundingClientRect()
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2

      targetX = x * 24
      targetY = y * 18
      requestRender()
    }

    const handlePointerLeave = () => {
      targetX = 0
      targetY = 0
      requestRender()
    }

    stage.addEventListener('pointermove', handlePointerMove)
    stage.addEventListener('pointerleave', handlePointerLeave)

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId)
      stage.removeEventListener('pointermove', handlePointerMove)
      stage.removeEventListener('pointerleave', handlePointerLeave)
    }
  }, [])

  return (
    <section ref={sectionRef} className="intro-gate" aria-label="Intro animation">
      <div ref={stageRef} className="intro-gate__stage">
        <video
          ref={videoRef}
          src={introVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          controls={false}
        />

        <div className="intro-gate__nav">
          <TransitionLink to="/" label="Xiao Zijian" className="intro-gate__logo">
            XZ
          </TransitionLink>

          <div className="intro-gate__nav-groups">
            <div>
              <span className="intro-gate__symbol intro-gate__symbol--triangle" />
              <strong>Repertoire</strong>
              <TransitionLink to="/works" label={text(copy.nav.works)}>
                {text(copy.nav.works)}
              </TransitionLink>
            </div>
            <div>
              <span className="intro-gate__symbol intro-gate__symbol--circle" />
              <strong>Narrative</strong>
              {navItems.slice(1, 3).map((item) => (
                <TransitionLink key={item.path} to={item.path} label={text(item.label)}>
                  {text(item.label)}
                </TransitionLink>
              ))}
            </div>
            <div>
              <span className="intro-gate__symbol intro-gate__symbol--square" />
              <strong>Liaison</strong>
              <TransitionLink to="/contact" label={text(copy.nav.contact)}>
                {text(copy.nav.contact)}
              </TransitionLink>
            </div>
          </div>

          <div className="intro-gate__meta">
            <span>03:03:2</span>
            <span>CET</span>
            <span>CN</span>
          </div>
        </div>

        <a href={`mailto:${contact.email}`} className="intro-gate__contact">
          <span>Get in touch</span>
          <ArrowUpRight size={18} strokeWidth={1.7} aria-hidden="true" />
        </a>

        <div className="intro-gate__title">
          <span className="intro-gate__pin intro-gate__pin--tl" />
          <span className="intro-gate__pin intro-gate__pin--tr" />
          <span className="intro-gate__pin intro-gate__pin--bl" />
          <span className="intro-gate__pin intro-gate__pin--br" />
          <h1 aria-label="Xiao Zijian. Visual Artist & Curator">
            <span className="intro-gate__fan-text" aria-hidden="true" style={{ '--fan-delay': '240ms', '--fan-rotation': '-7deg' }}>
              Xiao Zijian.
            </span>
            <span className="intro-gate__fan-text" aria-hidden="true" style={{ '--fan-delay': '360ms', '--fan-rotation': '5deg' }}>
              Visual Artist & Curator
            </span>
          </h1>
          <p>
            <span className="intro-gate__fan-text" style={{ '--fan-delay': '520ms', '--fan-rotation': '-3deg' }}>
              2026—Future
            </span>
          </p>
        </div>

        <div className="intro-gate__scroll">Discover</div>

        <div className="intro-gate__loader" aria-hidden="true">
          <div className="intro-gate__loader-word">
            {splashLetters.map((letter, index) => (
              <span key={`${letter}-${index}`} style={{ '--letter-index': index }}>
                {letter}
              </span>
            ))}
          </div>
          <div className="intro-gate__loader-window">
            <video src={introVideo} autoPlay muted loop playsInline preload="auto" controls={false} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntroGate
