import { useState, useEffect, useRef } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const tickingRef = useRef(false)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0

      setVisible(scrollTop > 200)
      setScrollProgress(Math.min(100, Math.max(0, progress)))
      tickingRef.current = false
    }

    const onScroll = () => {
      if (!tickingRef.current) {
        window.requestAnimationFrame(updateProgress)
        tickingRef.current = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    updateProgress()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Circle progress calculations (r = 21, circumference ≈ 131.95)
  const radius = 21
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      style={{
        position: 'fixed',
        bottom: '5.5rem',
        right: '1.75rem',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: '#002E11',
        border: 'none',
        color: '#DFDB00',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: 900,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.9)',
        transition: 'opacity 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease',
        pointerEvents: visible ? 'all' : 'none',
        boxShadow: visible
          ? '0 0 16px rgba(0, 230, 118, 0.45), 0 4px 18px rgba(0, 0, 0, 0.35)'
          : 'none',
      }}
    >
      {/* SVG Progress Ring */}
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        style={{
          position: 'absolute',
          inset: 0,
          transform: 'rotate(-90deg)',
          pointerEvents: 'none',
        }}
      >
        {/* Track */}
        <circle
          cx="25"
          cy="25"
          r={radius}
          fill="none"
          stroke="rgba(0, 230, 118, 0.18)"
          strokeWidth="2.5"
        />
        {/* Glowing Progress Indicator */}
        <circle
          cx="25"
          cy="25"
          r={radius}
          fill="none"
          stroke="#00E676"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{
            transition: 'stroke-dashoffset 0.04s linear',
            filter: 'drop-shadow(0 0 4px #00E676)',
          }}
        />
      </svg>

      {/* Up Arrow Icon */}
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ position: 'relative', zIndex: 2 }}
      >
        <line x1="12" y1="19" x2="12" y2="5" />
        <polyline points="5 12 12 5 19 12" />
      </svg>
    </button>
  )
}
