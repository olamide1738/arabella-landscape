import { useState, useRef, useEffect } from 'react'

export default function BeforeAfterSlider({ before, after, beforeLabel = 'Before', afterLabel = 'After', alt = '' }) {
  const [pos, setPos] = useState(50)
  const containerRef = useRef(null)
  const dragging = useRef(false)

  const updatePos = (clientX) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPos((x / rect.width) * 100)
  }

  useEffect(() => {
    const onMove  = (e) => { if (dragging.current) updatePos(e.clientX) }
    const onUp    = ()  => { dragging.current = false }
    const onTouch = (e) => { if (dragging.current) updatePos(e.touches[0].clientX) }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup',   onUp)
    window.addEventListener('touchmove', onTouch, { passive: false })
    window.addEventListener('touchend',  onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup',   onUp)
      window.removeEventListener('touchmove', onTouch)
      window.removeEventListener('touchend',  onUp)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="ba-slider"
      style={{ userSelect: 'none' }}
      aria-label={`Before and after comparison: ${alt}`}
    >
      {/* After (base layer — full width) */}
      <img src={after}  alt={`${alt} — ${afterLabel}`}  className="ba-slider__img ba-slider__img--after" />

      {/* Before (clipped to left of handle) */}
      <div className="ba-slider__before-wrap" style={{ width: `${pos}%` }}>
        <img src={before} alt={`${alt} — ${beforeLabel}`} className="ba-slider__img ba-slider__img--before" />
      </div>

      {/* Labels */}
      <span className="ba-slider__label ba-slider__label--before">{beforeLabel}</span>
      <span className="ba-slider__label ba-slider__label--after">{afterLabel}</span>

      {/* Handle */}
      <div
        className="ba-slider__handle"
        style={{ left: `${pos}%` }}
        onMouseDown={(e) => { dragging.current = true; e.preventDefault() }}
        onTouchStart={(e) => { dragging.current = true }}
        role="slider"
        aria-valuenow={Math.round(pos)}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft')  setPos(p => Math.max(0,   p - 2))
          if (e.key === 'ArrowRight') setPos(p => Math.min(100, p + 2))
        }}
      >
        <div className="ba-slider__line" />
        <div className="ba-slider__button" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
      </div>
    </div>
  )
}
