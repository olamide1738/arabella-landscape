// ─────────────────────────────────────────────────────────────────
// Arabella Landscape Limited — Premium Loading Spinner & Skeletons
// ─────────────────────────────────────────────────────────────────

export function LoadingSpinner({ size = 'md', label = 'Loading…', color = '#DFDB00' }) {
  const dimensions = size === 'sm' ? '18px' : size === 'lg' ? '42px' : '28px'
  
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
      <svg
        style={{
          width: dimensions,
          height: dimensions,
          animation: 'arabellaSpin 0.85s linear infinite',
        }}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="rgba(255, 255, 255, 0.15)"
          strokeWidth="3"
        />
        <path
          d="M12 2A10 10 0 0 1 22 12"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      {label && (
        <span style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.85)' }}>
          {label}
        </span>
      )}
      <style>{`
        @keyframes arabellaSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

export function SkeletonCard() {
  return (
    <div style={{
      background: 'rgba(0, 45, 26, 0.45)',
      borderRadius: '16px',
      overflow: 'hidden',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      height: '340px',
      position: 'relative'
    }}>
      <div style={{
        height: '200px',
        background: 'linear-gradient(90deg, rgba(255,255,255,0.03) 25%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.03) 75%)',
        backgroundSize: '200% 100%',
        animation: 'skeletonShimmer 1.5s infinite'
      }} />
      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <div style={{ width: '40%', height: '14px', borderRadius: '4px', background: 'rgba(255,255,255,0.1)' }} />
        <div style={{ width: '80%', height: '20px', borderRadius: '4px', background: 'rgba(255,255,255,0.15)' }} />
        <div style={{ width: '60%', height: '14px', borderRadius: '4px', background: 'rgba(255,255,255,0.08)' }} />
      </div>
      <style>{`
        @keyframes skeletonShimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  )
}
