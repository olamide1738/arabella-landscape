import { useState } from 'react'

/**
 * Base shimmer element for custom skeleton shapes.
 */
export function SkeletonBase({ className = '', style = {}, dark = false }) {
  return (
    <div
      className={`${dark ? 'skeleton-shimmer--dark' : 'skeleton-shimmer'} ${className}`}
      style={{
        borderRadius: '6px',
        ...style,
      }}
      aria-hidden="true"
    />
  )
}

/**
 * Skeleton placeholder for Project Cards (matching Projects.jsx grid).
 */
export function ProjectCardSkeleton({ dark = false }) {
  return (
    <div
      style={{
        borderRadius: 'var(--rounded-lg, 12px)',
        overflow: 'hidden',
        background: dark ? '#003312' : '#EBE8E0',
        border: '1px solid var(--outline-variant, #94AD99)',
        display: 'flex',
        flexDirection: 'column',
        height: '320px',
      }}
      aria-busy="true"
      aria-label="Loading project..."
    >
      <div style={{ position: 'relative', width: '100%', height: '200px' }}>
        <SkeletonBase dark={dark} style={{ width: '100%', height: '100%', borderRadius: 0 }} />
        <div style={{ position: 'absolute', top: '12px', right: '12px', zIndex: 2 }}>
          <SkeletonBase dark={dark} style={{ width: '50px', height: '22px', borderRadius: '12px' }} />
        </div>
      </div>
      <div style={{ padding: '1.1rem 1.35rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', flex: 1 }}>
        <SkeletonBase dark={dark} style={{ width: '70%', height: '20px', borderRadius: '4px' }} />
        <SkeletonBase dark={dark} style={{ width: '45%', height: '14px', borderRadius: '4px' }} />
      </div>
    </div>
  )
}

/**
 * Skeleton placeholder for Blog / Insights Article Cards.
 */
export function ArticleCardSkeleton() {
  return (
    <div
      style={{
        borderRadius: 'var(--rounded-lg, 12px)',
        overflow: 'hidden',
        background: '#EBE8E0',
        border: '1px solid var(--outline-variant, #94AD99)',
        display: 'flex',
        flexDirection: 'column',
        height: '380px',
      }}
      aria-busy="true"
      aria-label="Loading article..."
    >
      <SkeletonBase style={{ width: '100%', height: '180px', borderRadius: 0 }} />
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
        <SkeletonBase style={{ width: '30%', height: '12px', borderRadius: '4px' }} />
        <SkeletonBase style={{ width: '85%', height: '22px', borderRadius: '4px' }} />
        <SkeletonBase style={{ width: '100%', height: '14px', borderRadius: '4px' }} />
        <SkeletonBase style={{ width: '60%', height: '14px', borderRadius: '4px' }} />
      </div>
    </div>
  )
}

/**
 * Skeleton placeholder for Service Cards.
 */
export function ServiceCardSkeleton() {
  return (
    <div
      style={{
        borderRadius: 'var(--rounded-lg, 12px)',
        overflow: 'hidden',
        background: '#EBE8E0',
        border: '1px solid var(--outline-variant, #94AD99)',
        padding: '2.25rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
        minHeight: '280px',
      }}
      aria-busy="true"
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <SkeletonBase style={{ width: '44px', height: '44px', borderRadius: '10px' }} />
        <SkeletonBase style={{ width: '60px', height: '40px', borderRadius: '6px' }} />
      </div>
      <SkeletonBase style={{ width: '50%', height: '26px', borderRadius: '4px' }} />
      <SkeletonBase style={{ width: '100%', height: '16px', borderRadius: '4px' }} />
      <SkeletonBase style={{ width: '85%', height: '16px', borderRadius: '4px' }} />
    </div>
  )
}

/**
 * Skeleton placeholder for the Interactive Map fallback in Projects.jsx.
 */
export function ProjectsMapSkeleton() {
  return (
    <div
      style={{
        width: '100%',
        height: '520px',
        borderRadius: 'var(--rounded-xl, 16px)',
        overflow: 'hidden',
        border: '1px solid var(--outline-variant, #94AD99)',
        background: '#004016',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      aria-busy="true"
      aria-label="Loading interactive map engine..."
    >
      <SkeletonBase dark style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', borderRadius: 0 }} />
      <div style={{ position: 'absolute', top: '20px', left: '20px', display: 'flex', flexDirection: 'column', gap: '8px', zIndex: 3 }}>
        <SkeletonBase dark style={{ width: '36px', height: '36px', borderRadius: '6px' }} />
        <SkeletonBase dark style={{ width: '36px', height: '36px', borderRadius: '6px' }} />
      </div>
      <div style={{ position: 'relative', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <SkeletonBase dark style={{ width: '48px', height: '48px', borderRadius: '50%' }} />
        <SkeletonBase dark style={{ width: '220px', height: '18px', borderRadius: '4px' }} />
      </div>
    </div>
  )
}

/**
 * Smart image wrapper that displays a shimmer skeleton placeholder until the image finishes downloading over the network.
 */
export function ImageWithSkeleton({
  src,
  alt,
  style = {},
  className = '',
  aspectRatio,
  dark = false,
  ...props
}) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  return (
    <div
      className={`skeleton-img-wrap ${className}`}
      style={{
        width: '100%',
        height: '100%',
        aspectRatio,
        background: dark ? '#003312' : '#EBE8E0',
        borderRadius: style.borderRadius || 'inherit',
        ...style,
      }}
    >
      {!loaded && !error && (
        <div className="skeleton-img-placeholder">
          <SkeletonBase
            dark={dark}
            style={{ width: '100%', height: '100%', borderRadius: 'inherit' }}
          />
        </div>
      )}

      <img
        src={src}
        alt={alt}
        className={loaded ? 'is-loaded' : 'is-loading'}
        style={{
          width: '100%',
          height: '100%',
          objectFit: style.objectFit || 'cover',
          display: 'block',
          ...style,
        }}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        {...props}
      />
    </div>
  )
}
