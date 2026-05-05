import { useMemo } from 'react'

export default function GoldParticles({ count = 25, className = '' }) {
  const particles = useMemo(() =>
    Array.from({ length: count }, (_, i) => {
      const size = 3 + Math.random() * 5;
      return {
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 6}s`,
        duration: `${5 + Math.random() * 8}s`,
        size: `${size}px`,
        opacity: 0.3 + Math.random() * 0.7,
        isSpark: Math.random() > 0.5
      };
    }), [count])

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none z-10 ${className}`}>
      {particles.map(p => (
        <div
          key={p.id}
          className="particle absolute bottom-[-20px]"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            width: p.size,
            height: p.size,
            backgroundColor: '#D4AF37',
            opacity: p.opacity,
            filter: 'drop-shadow(0 0 6px rgba(212,175,55,0.8))',
            clipPath: p.isSpark 
              ? 'polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%)'
              : 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          }}
        />
      ))}
    </div>
  )
}


