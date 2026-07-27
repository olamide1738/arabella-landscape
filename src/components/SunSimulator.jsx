import { useState, useEffect } from 'react'
import heroPlant from '../assets/hero-plant.jpg'

const TIME_PRESETS = [
  { label: 'Morning Sun', time: 9, mode: 'Part Sun', icon: '🌅', desc: 'Gentle early light (3–5 hrs)' },
  { label: 'Midday Peak Sun', time: 12, mode: 'Full Sun', icon: '☀️', desc: 'Direct solar intensity (6+ hrs)' },
  { label: 'Filtered Afternoon', time: 15, mode: 'Part Shade', icon: '⛅', desc: 'Dappled light & partial shade' },
  { label: 'Deep Canopy / Indoor', time: 18, mode: 'Shade', icon: '🌿', desc: 'Low ambient indirect light' },
]

export default function SunSimulator({ onSunModeChange, activeSunMode }) {
  const [time, setTime] = useState(12) // 6 to 18 (hours)

  // Map hour to sun exposure category
  const getExposureMode = (hour) => {
    if (hour >= 11 && hour <= 13) return 'Full Sun'
    if (hour >= 8 && hour < 11) return 'Part Sun'
    if (hour > 13 && hour <= 16) return 'Part Shade'
    return 'Shade'
  }

  const currentMode = getExposureMode(time)

  useEffect(() => {
    if (onSunModeChange) {
      onSunModeChange(currentMode)
    }
  }, [time, currentMode])

  // Sun position along solar arc (6am = 5%, 12pm = 50%, 6pm = 95%)
  const progress = ((time - 6) / 12) * 100
  const sunX = Math.max(6, Math.min(94, progress))
  const sunY = 88 - Math.sin((progress / 100) * Math.PI) * 72 // sine arc

  // Solar Metrics calculation for architectural realism
  const elevationAngle = Math.round(Math.sin((progress / 100) * Math.PI) * 82)
  const azimuthAngle = Math.round(90 + (progress / 100) * 180)

  // Directional Shadow Transform
  const shadowSkew = (12 - time) * 6
  const shadowScaleX = 1 + Math.abs(12 - time) * 0.18
  const shadowOpacity = Math.max(0.2, Math.sin((progress / 100) * Math.PI) * 0.65)

  // Photorealistic Environment Lighting Filter & Gradient Overlay
  const getEnvironmentFilter = () => {
    if (time >= 6 && time < 9) {
      // Warm Dawn / Morning
      return {
        filter: 'brightness(0.85) contrast(1.1) sepia(0.3) saturate(1.2) hue-rotate(-10deg)',
        overlay: 'linear-gradient(180deg, rgba(255, 140, 66, 0.4) 0%, rgba(255, 200, 87, 0.15) 50%, rgba(0, 46, 17, 0.2) 100%)',
        flareColor: 'rgba(255, 180, 100, 0.7)',
      }
    } else if (time >= 9 && time <= 14) {
      // High Midday Sun
      return {
        filter: 'brightness(1.15) contrast(1.12) saturate(1.25)',
        overlay: 'linear-gradient(180deg, rgba(255, 255, 250, 0.25) 0%, transparent 60%, rgba(0, 40, 14, 0.15) 100%)',
        flareColor: 'rgba(255, 255, 220, 0.95)',
      }
    } else if (time > 14 && time <= 17) {
      // Golden Afternoon
      return {
        filter: 'brightness(0.95) contrast(1.18) sepia(0.35) saturate(1.3) hue-rotate(-15deg)',
        overlay: 'linear-gradient(180deg, rgba(245, 124, 0, 0.45) 0%, rgba(191, 54, 12, 0.25) 60%, rgba(0, 46, 17, 0.3) 100%)',
        flareColor: 'rgba(255, 140, 0, 0.8)',
      }
    } else {
      // Dusk / Ambient Shade
      return {
        filter: 'brightness(0.55) contrast(1.25) sepia(0.5) hue-rotate(-25deg)',
        overlay: 'linear-gradient(180deg, rgba(26, 35, 126, 0.5) 0%, rgba(0, 40, 14, 0.6) 100%)',
        flareColor: 'rgba(255, 100, 50, 0.5)',
      }
    }
  }

  const env = getEnvironmentFilter()

  const formatHour = (h) => {
    const period = h >= 12 ? 'PM' : 'AM'
    const displayHour = h > 12 ? h - 12 : h === 0 ? 12 : h
    return `${displayHour.toString().padStart(2, '0')}:00 ${period}`
  }

  return (
    <div className="sun-simulator">
      {/* Simulator Header */}
      <div className="sun-simulator__header">
        <div>
          <div className="sun-simulator__badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
            </svg>
            PHOTOREALISTIC SOLAR SIMULATOR
          </div>
          <h3 className="sun-simulator__title">Sun &amp; Shade Exposure Simulator</h3>
          <p className="sun-simulator__subtitle">
            Simulate realistic solar trajectory and architectural shadow casting to find plant species ideal for your garden’s light exposure.
          </p>
        </div>

        {activeSunMode && (
          <button
            className="sun-simulator__reset-btn"
            onClick={() => {
              setTime(12)
              if (onSunModeChange) onSunModeChange(null)
            }}
          >
            Reset Simulator
          </button>
        )}
      </div>

      {/* Photorealistic Canvas Container */}
      <div className="sun-simulator__viewport">
        {/* Realistic Landscape Background Photo */}
        <div
          className="sun-simulator__photo"
          style={{
            backgroundImage: `url(${heroPlant})`,
            filter: env.filter,
          }}
          aria-hidden="true"
        />

        {/* Dynamic Environmental Lighting Overlay */}
        <div
          className="sun-simulator__env-overlay"
          style={{ background: env.overlay }}
          aria-hidden="true"
        />

        {/* Solar Path Arc Line */}
        <svg className="sun-simulator__arc" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M 6,88 Q 50,16 94,88"
            fill="none"
            stroke="rgba(255, 255, 255, 0.4)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
        </svg>

        {/* Photorealistic Sun Element with Multi-Layer Lens Flare */}
        <div
          className="sun-simulator__sun-flare"
          style={{
            left: `${sunX}%`,
            top: `${sunY}%`,
            background: env.flareColor,
            boxShadow: `0 0 40px 15px ${env.flareColor}, 0 0 80px 35px rgba(255,255,255,0.6)`,
          }}
        />

        {/* Real-Time Directional Shadow Simulation */}
        <div className="sun-simulator__shadow-layer" aria-hidden="true">
          <div
            className="sun-simulator__realistic-shadow"
            style={{
              transform: `scaleX(${shadowScaleX}) skewX(${shadowSkew}deg)`,
              opacity: shadowOpacity,
            }}
          />
        </div>

        {/* HUD Data Overlay */}
        <div className="sun-simulator__hud">
          <div className="sun-simulator__hud-time">
            <span className="sun-simulator__time-clock">{formatHour(time)}</span>
            <span className="sun-simulator__mode-tag">{currentMode}</span>
          </div>
          <div className="sun-simulator__hud-metrics">
            <span>Elevation: <strong>{elevationAngle}°</strong></span>
            <span>Azimuth: <strong>{azimuthAngle}°</strong></span>
          </div>
        </div>
      </div>

      {/* Interactive Time Controls */}
      <div className="sun-simulator__controls">
        <div className="sun-simulator__slider-header">
          <span>🌅 06:00 AM (Dawn)</span>
          <span className="sun-simulator__slider-current">{formatHour(time)} · {currentMode}</span>
          <span>🌇 06:00 PM (Dusk)</span>
        </div>
        <input
          type="range"
          min="6"
          max="18"
          step="1"
          value={time}
          onChange={(e) => setTime(Number(e.target.value))}
          className="sun-simulator__slider"
          aria-label="Solar time simulator"
        />

        {/* Presets Grid */}
        <div className="sun-simulator__presets">
          {TIME_PRESETS.map((p) => (
            <button
              key={p.label}
              className={`sun-simulator__preset-btn${time === p.time ? ' active' : ''}`}
              onClick={() => setTime(p.time)}
            >
              <span className="sun-simulator__preset-icon">{p.icon}</span>
              <div>
                <strong>{p.label}</strong>
                <p>{p.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

