import { useEffect, useRef } from 'react'

export function useScrollAnimation() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const intersectionObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            intersectionObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 }
    )

    // Observe an element if not already visible
    const observe = el => {
      if (!el.classList.contains('is-visible')) {
        intersectionObserver.observe(el)
      }
    }

    // Observe all current targets
    el.querySelectorAll('.animate-on-scroll').forEach(observe)

    // Watch for new targets added by Load More / dynamic content
    const mutationObserver = new MutationObserver(mutations => {
      mutations.forEach(m => {
        m.addedNodes.forEach(node => {
          if (node.nodeType !== 1) return
          if (node.classList?.contains('animate-on-scroll')) observe(node)
          node.querySelectorAll?.('.animate-on-scroll').forEach(observe)
        })
      })
    })

    mutationObserver.observe(el, { childList: true, subtree: true })

    return () => {
      intersectionObserver.disconnect()
      mutationObserver.disconnect()
    }
  }, [])

  return ref
}

export function useCountUp(target, duration = 2000) {
  const ref = useRef(null)
  const hasRun = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !hasRun.current) {
          hasRun.current = true
          let start = 0
          const step = target / (duration / 16)
          const timer = setInterval(() => {
            start = Math.min(start + step, target)
            el.textContent = Math.floor(start).toLocaleString()
            if (start >= target) clearInterval(timer)
          }, 16)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return ref
}
