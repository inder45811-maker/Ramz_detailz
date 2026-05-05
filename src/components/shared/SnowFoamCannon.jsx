export default function SnowFoamCannon({ className = '', size = 1 }) {
  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <svg
        width={120 * size}
        height={160 * size}
        viewBox="0 0 120 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-foam-drift"
      >
        {/* Foam blobs spraying upward */}
        <ellipse cx="60" cy="20" rx="22" ry="16" fill="white" opacity="0.9" />
        <ellipse cx="40" cy="30" rx="16" ry="12" fill="white" opacity="0.85" />
        <ellipse cx="80" cy="28" rx="18" ry="13" fill="white" opacity="0.88" />
        <ellipse cx="55" cy="8" rx="14" ry="10" fill="white" opacity="0.7" />
        <ellipse cx="70" cy="12" rx="12" ry="9" fill="white" opacity="0.75" />
        <ellipse cx="30" cy="18" rx="12" ry="9" fill="white" opacity="0.65" />
        <ellipse cx="90" cy="18" rx="14" ry="10" fill="white" opacity="0.7" />

        {/* Cannon body */}
        <rect x="40" y="80" width="40" height="60" rx="4" fill="#1A1A1A" stroke="#D4AF37" strokeWidth="1.5" />
        {/* Cannon barrel */}
        <rect x="52" y="50" width="16" height="40" rx="3" fill="#111" stroke="#D4AF37" strokeWidth="1.5" />
        {/* Gold detail band */}
        <rect x="38" y="100" width="44" height="6" rx="2" fill="#D4AF37" opacity="0.6" />
        {/* Handle */}
        <path d="M60 140 Q75 148 80 160" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" fill="none" />
        {/* Trigger */}
        <rect x="68" y="110" width="14" height="6" rx="2" fill="#D4AF37" opacity="0.8" />
        {/* Nozzle */}
        <rect x="48" y="46" width="24" height="8" rx="4" fill="#D4AF37" opacity="0.9" />
      </svg>
    </div>
  )
}
