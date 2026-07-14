import { useEffect, useRef } from 'react'

export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Keep content visible in browsers or test environments without the API.
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('visible')
      return
    }

    let observer

    try {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('visible')
            observer.unobserve(el)
          }
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px', ...options }
      )

      observer.observe(el)
    } catch {
      el.classList.add('visible')
      return
    }

    return () => observer.disconnect()
  }, [])

  return ref
}
