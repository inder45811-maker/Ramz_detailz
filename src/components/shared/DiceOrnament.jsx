export default function DiceOrnament({ className = '', scale = 1 }) {
  const s = scale

  return (
    <div className={`flex gap-3 items-end pointer-events-none select-none ${className}`}>
      {/* String 1 */}
      <div className="flex flex-col items-center">
        <div
          className="animate-dice-sway"
          style={{ animationDelay: '0s', transformOrigin: 'top center' }}
        >
          <div
            className="w-px bg-gold mb-1"
            style={{ height: `${32 * s}px`, background: 'linear-gradient(180deg, rgba(212,175,55,0.3), rgba(212,175,55,0.8))' }}
          />
          <DiceFace
            size={32 * s}
            pips={[{ cx: 0.5, cy: 0.5 }]}
          />
        </div>
      </div>
      {/* String 2 */}
      <div className="flex flex-col items-center" style={{ marginTop: `${8 * s}px` }}>
        <div
          className="animate-dice-sway"
          style={{ animationDelay: '0.8s', transformOrigin: 'top center' }}
        >
          <div
            className="w-px bg-gold mb-1"
            style={{ height: `${48 * s}px`, background: 'linear-gradient(180deg, rgba(212,175,55,0.3), rgba(212,175,55,0.8))' }}
          />
          <DiceFace
            size={32 * s}
            pips={[
              { cx: 0.25, cy: 0.25 }, { cx: 0.75, cy: 0.75 },
              { cx: 0.75, cy: 0.25 }, { cx: 0.25, cy: 0.75 },
            ]}
          />
        </div>
      </div>
    </div>
  )
}

function DiceFace({ size, pips }) {
  const r = size * 0.08
  return (
    <svg width={size} height={size} viewBox="0 0 32 32">
      <rect
        x="1" y="1" width="30" height="30" rx="5"
        fill="white"
        stroke="#D4AF37"
        strokeWidth="1"
      />
      {pips.map((p, i) => (
        <circle
          key={i}
          cx={p.cx * 32}
          cy={p.cy * 32}
          r="3.5"
          fill="#D4AF37"
        />
      ))}
    </svg>
  )
}


