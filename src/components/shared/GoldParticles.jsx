import { useMemo } from 'react'

export default function GoldParticles({ count = 12, className = '' }) {
  const particles = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 6}s`,
      duration: `${4 + Math.random() * 4}s`,
      size: `${2 + Math.random() * 3}px`,
      opacity: 0.3 + Math.random() * 0.5,
    })), [count])

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map(p => (
        <div
          key={p.id}
          className="particle absolute bottom-0 rounded-full"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            width: p.size,
            height: p.size,
            backgroundColor: '#D4AF37',
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  )
}
