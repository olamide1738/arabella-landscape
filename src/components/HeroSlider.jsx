import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../assets/hero-plant.jpg'
import aboutImg from '../assets/about-story.jpg'

const HERO_SLIDES = [
  {
    id: 'slide-1',
    label: 'Architectural Living Walls & Facades',
    title: 'Integrated Vertical Gardens',
    titleHighlight: '& Corporate Facades.',
    subtitle: 'Pioneering sustainable bio-architectural living walls, native planting, and bespoke stone masonry for financial headquarters and prestige corporate estates.',
    image: '/images/hero-slide-1.jpg',
    primaryCta: { text: 'View Commercial Work', link: '/markets' },
    secondaryCta: { text: 'Get a Consultation', link: '/contact' }
  },
  {
    id: 'slide-2',
    label: 'Master Planning & Public Realm',
    title: 'Iconic Public Parks',
    titleHighlight: '& Urban Green Spaces.',
    subtitle: 'For over 35 years, Arabella has designed and constructed enduring civic plazas, coastal parks, and landmark green infrastructure across Nigeria.',
    image: '/images/hero-slide-2.jpg',
    primaryCta: { text: 'Explore Projects', link: '/projects' },
    secondaryCta: { text: 'View Case Studies', link: '/case-studies' }
  },
  {
    id: 'slide-3',
    label: 'Full-Cycle Design & Build',
    title: 'From Visionary Concept',
    titleHighlight: 'To Final Handover.',
    subtitle: 'Comprehensive site engineering, tropical planting, vertical trellis systems, irrigation, and nursery provenance executed by a unified team of landscape architects.',
    image: '/images/hero-slide-3.jpg',
    primaryCta: { text: 'Our Services', link: '/services' },
    secondaryCta: { text: 'Our Sustainability', link: '/sustainability' }
  }
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef(null)
  const autoPlayTimer = useRef(null)

  const slideCount = HERO_SLIDES.length

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slideCount)
  }, [slideCount])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount)
  }, [slideCount])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  // Auto-play timer (6 seconds per slide)
  useEffect(() => {
    if (isPaused) return

    autoPlayTimer.current = setInterval(() => {
      nextSlide()
    }, 6000)

    return () => {
      if (autoPlayTimer.current) {
        clearInterval(autoPlayTimer.current)
      }
    }
  }, [isPaused, nextSlide])

  // Touch Swipe Handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX.current - touchEndX

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }
    touchStartX.current = null
  }

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      prevSlide()
    } else if (e.key === 'ArrowRight') {
      nextSlide()
    }
  }

  return (
    <section 
      className="hero-section hero-slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Hero Image Carousel"
    >
      {/* Background Images / Slides */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentSlide
        return (
          <div
            key={slide.id}
            className={`hero-slider__bg-slide ${isActive ? 'hero-slider__bg-slide--active' : ''}`}
            aria-hidden={!isActive}
          >
            <div
              className="hero-section__bg hero-slider__bg-img"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          </div>
        )
      })}

      {/* Overlay & Decorative Elements */}
      <div className="hero-section__overlay" aria-hidden="true" />
      <div className="hero__deco" aria-hidden="true" />

      {/* Content Area */}
      <div className="container">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide
          if (!isActive) return null

          return (
            <div
              key={slide.id}
              className="hero-section__content hero-slider__content hero-animate"
            >
              <p className="hero__label">{slide.label}</p>
              <h1 className="hero__title">
                {slide.title}<br />
                <span>{slide.titleHighlight}</span>
              </h1>
              <p className="hero__subtitle">
                {slide.subtitle}
              </p>
              <div className="hero__actions">
                <Link to={slide.primaryCta.link} className="btn btn-primary btn-lg">
                  {slide.primaryCta.text}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
                <Link to={slide.secondaryCta.link} className="btn btn-secondary btn-lg">
                  {slide.secondaryCta.text}
                </Link>
              </div>
            </div>
          )
        })}
      </div>

      {/* Controls: Prev/Next Arrows */}
      <div className="hero-slider__nav-arrows">
        <button
          type="button"
          className="hero-slider__arrow hero-slider__arrow--prev"
          onClick={prevSlide}
          aria-label="Previous Slide"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          type="button"
          className="hero-slider__arrow hero-slider__arrow--next"
          onClick={nextSlide}
          aria-label="Next Slide"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* Slide Indicators & Pagination */}
      <div className="hero-slider__controls">
        <div className="hero-slider__pagination">
          {HERO_SLIDES.map((slide, index) => {
            const isActive = index === currentSlide
            return (
              <button
                key={slide.id}
                type="button"
                className={`hero-slider__dot ${isActive ? 'hero-slider__dot--active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              >
                <span className="hero-slider__dot-num">0{index + 1}</span>
                <span className="hero-slider__dot-bar">
                  {isActive && (
                    <span 
                      className="hero-slider__dot-progress" 
                      style={{ animationDuration: isPaused ? '0s' : '6s' }} 
                    />
                  )}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="hero__scroll-indicator" aria-hidden="true">Scroll</div>
    </section>
  )
}
