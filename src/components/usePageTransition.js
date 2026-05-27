import { useContext } from 'react'
import { TransitionContext } from './transitionContext.js'

export function usePageTransition() {
  const context = useContext(TransitionContext)

  if (!context) {
    throw new Error('usePageTransition must be used inside TransitionProvider')
  }

  return context
}
