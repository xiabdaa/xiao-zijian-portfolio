import { forwardRef } from 'react'
import { useHref } from 'react-router-dom'
import { usePageTransition } from './usePageTransition.js'

const isModifiedEvent = (event) => event.metaKey || event.altKey || event.ctrlKey || event.shiftKey

const TransitionLink = forwardRef(function TransitionLink(
  { to, children, className, label, onNavigate, target, ...props },
  ref,
) {
  const href = useHref(to)
  const { navigateWithTransition } = usePageTransition()

  const handleClick = (event) => {
    props.onClick?.(event)

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      target === '_blank' ||
      isModifiedEvent(event)
    ) {
      return
    }

    event.preventDefault()
    onNavigate?.()
    navigateWithTransition(to, label)
  }

  return (
    <a ref={ref} href={href} className={className} target={target} {...props} onClick={handleClick}>
      {children}
    </a>
  )
})

export default TransitionLink
