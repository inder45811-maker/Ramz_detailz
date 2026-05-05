import { useState, useEffect } from 'react'
import GoldParticles from './shared/GoldParticles'
import DiceOrnament from './shared/DiceOrnament'
import SnowFoamCannon from './shared/SnowFoamCannon'

// Stagger config: [delay in seconds]
const STAGGER = {
  dice: 0,
  ramz: 0.3,
  detailz: 0.5,
  tagline: 0.7,
  buttons: 0.9,
}

function useMounted(delay = 60) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), delay)
    return () => clearTimeout(t)
  }, [])
  return mounted
}

function revealed(mounted, delay) {
  return {
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(16px)',
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  }
}

export default function Hero() {
  const mounted = useMounted(60)

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center overflow-hidden bg-black"
      style={{ minHeight: '100vh' }}
    >
      {/* ── Car silhouette background ───────────────────────── */}
      <CarSilhouette />

      {/* ── Gold particles layer ────────────────────────────── */}
      <GoldParticles count={16} />

      {/* ── Main content ────────────────────────────────────── */}
      <div
        className="relative z-10 flex flex-col items-center text-center px-6 pt-24 pb-32 w-full"
        style={{ maxWidth: '900px', margin: '0 auto' }}
      >
        {/* Dice ornament */}
        <div style={{ ...revealed(mounted, STAGGER.dice), transform: `${revealed(mounted, STAGGER.dice).transform} scale(0.6)` }}>
          <div style={{ transform: 'scale(0.6)', transformOrigin: 'center bottom' }}>
            <DiceOrnament />
          </div>
        </div>

        {/* "Ramz" script */}
        <h1
          className="animate-pulse-glow text-gold-metallic"
          style={{
            ...revealed(mounted, STAGGER.ramz),
            fontFamily: "'Pinyon Script', cursive",
            fontSize: 'clamp(72px, 14vw, 160px)',
            lineHeight: 1,
            marginTop: '-0.1em',
            textShadow: '0 0 40px rgba(212,175,55,0.45), 0 0 80px rgba(212,175,55,0.2)',
            letterSpacing: '-0.01em',
          }}
        >
          Ramz
        </h1>

        {/* "DETAILZ" display */}
        <p
          className="text-white"
          style={{
            ...revealed(mounted, STAGGER.detailz),
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(40px, 7vw, 80px)',
            letterSpacing: '0.2em',
            lineHeight: 1,
            marginTop: '-0.1em',
          }}
        >
          DETAILZ
        </p>

        {/* Tagline */}
        <p
          className="text-gray-muted mt-4"
          style={{
            ...revealed(mounted, STAGGER.tagline),
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(15px, 2.2vw, 18px)',
            letterSpacing: '0.02em',
          }}
        >
          Premium Vehicle Detailing &amp; Valeting — Coventry, UK
        </p>

        {/* CTA buttons */}
        <div
          className="mt-8 flex flex-col sm:flex-row items-center gap-4"
          style={revealed(mounted, STAGGER.buttons)}
        >
          <a
            href="#booking"
            className="btn-gold py-3 px-8 rounded-full font-medium text-sm tracking-wide transition-transform duration-200 hover:scale-105 active:scale-95"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Book Now
          </a>
          <a
            href="#gallery"
            className="btn-outline py-3 px-8 rounded-full font-medium text-sm tracking-wide transition-transform duration-200 hover:scale-105 active:scale-95"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            View Our Work
          </a>
        </div>
      </div>

      {/* ── Snow foam cannon — bottom-left ──────────────────── */}
      <div
        className="absolute bottom-0 left-6 z-10"
        style={{ transform: 'scale(0.6)', transformOrigin: 'bottom left' }}
      >
        <SnowFoamCannon />
      </div>

      {/* ── Bottom fade edge ────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
    </section>
  )
}

/* ── Car silhouette SVG ──────────────────────────────────────── */
function CarSilhouette() {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      aria-hidden="true"
      style={{ zIndex: 1 }}
    >
      {/* Headlight radial glow */}
      <div
        style={{
          position: 'absolute',
          left: '62%',
          top: '52%',
          width: '340px',
          height: '200px',
          transform: 'translate(-50%, -50%)',
          background:
            'radial-gradient(ellipse at 70% 55%, rgba(180,210,255,0.18) 0%, rgba(120,170,255,0.09) 30%, transparent 70%)',
          filter: 'blur(2px)',
          borderRadius: '50%',
          zIndex: 2,
        }}
      />

      {/* Secondary warm glow — rear lamp */}
      <div
        style={{
          position: 'absolute',
          left: '25%',
          top: '53%',
          width: '160px',
          height: '100px',
          transform: 'translate(-50%, -50%)',
          background:
            'radial-gradient(ellipse at 30% 55%, rgba(212,100,60,0.10) 0%, transparent 70%)',
          filter: 'blur(2px)',
          borderRadius: '50%',
          zIndex: 2,
        }}
      />

      {/* Car SVG — sleek coupe profile */}
      <svg
        viewBox="0 0 1200 400"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: '92%',
          maxWidth: '1100px',
          opacity: 0.10,
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* ── Body fill ── */}
        <path
          d="
            M 90,310
            L 90,295
            Q 90,280 105,280
            L 165,280
            Q 175,280 182,272
            L 290,190
            Q 310,174 340,168
            L 520,152
            Q 560,148 590,154
            L 740,172
            Q 780,178 810,196
            L 890,250
            Q 910,262 940,265
            L 1040,268
            Q 1060,268 1072,280
            L 1090,295
            L 1090,310
            Z
          "
          fill="white"
        />

        {/* ── Roof / greenhouse ── */}
        <path
          d="
            M 310,190
            Q 340,130 400,114
            L 540,100
            Q 600,96 650,104
            L 760,124
            Q 820,138 850,172
            L 810,196
            Q 780,178 740,172
            L 590,154
            Q 560,148 520,152
            L 340,168
            Q 310,174 290,190
            Z
          "
          fill="white"
        />

        {/* ── Windscreen dark glass ── */}
        <path
          d="
            M 340,170
            Q 360,140 400,118
            L 510,104
            L 510,156
            L 345,172
            Z
          "
          fill="black"
          opacity="0.6"
        />

        {/* ── Rear glass ── */}
        <path
          d="
            M 660,104
            L 760,126
            Q 820,140 848,172
            L 820,184
            Q 796,164 752,154
            L 656,134
            Z
          "
          fill="black"
          opacity="0.6"
        />

        {/* ── Side window divider ── */}
        <line x1="520" y1="100" x2="512" y2="156" stroke="black" strokeWidth="3" opacity="0.5" />
        <line x1="650" y1="104" x2="658" y2="158" stroke="black" strokeWidth="3" opacity="0.5" />

        {/* ── Door line ── */}
        <line x1="512" y1="156" x2="514" y2="270" stroke="black" strokeWidth="2" opacity="0.25" />
        <line x1="658" y1="158" x2="660" y2="268" stroke="black" strokeWidth="2" opacity="0.25" />

        {/* ── Front wheel arch ── */}
        <ellipse cx="290" cy="296" rx="68" ry="30" fill="black" />
        <ellipse cx="290" cy="296" rx="58" ry="24" fill="white" opacity="0.15" />

        {/* ── Rear wheel arch ── */}
        <ellipse cx="890" cy="296" rx="72" ry="30" fill="black" />
        <ellipse cx="890" cy="296" rx="60" ry="24" fill="white" opacity="0.15" />

        {/* ── Front wheel ── */}
        <circle cx="290" cy="310" r="52" fill="#111" stroke="white" strokeWidth="4" opacity="0.9" />
        <circle cx="290" cy="310" r="26" fill="none" stroke="white" strokeWidth="3" opacity="0.6" />
        <circle cx="290" cy="310" r="8" fill="white" opacity="0.5" />
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <line
            key={angle}
            x1={290 + 10 * Math.cos((angle * Math.PI) / 180)}
            y1={310 + 10 * Math.sin((angle * Math.PI) / 180)}
            x2={290 + 24 * Math.cos((angle * Math.PI) / 180)}
            y2={310 + 24 * Math.sin((angle * Math.PI) / 180)}
            stroke="white"
            strokeWidth="2.5"
            opacity="0.5"
          />
        ))}

        {/* ── Rear wheel ── */}
        <circle cx="890" cy="310" r="52" fill="#111" stroke="white" strokeWidth="4" opacity="0.9" />
        <circle cx="890" cy="310" r="26" fill="none" stroke="white" strokeWidth="3" opacity="0.6" />
        <circle cx="890" cy="310" r="8" fill="white" opacity="0.5" />
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <line
            key={angle}
            x1={890 + 10 * Math.cos((angle * Math.PI) / 180)}
            y1={310 + 10 * Math.sin((angle * Math.PI) / 180)}
            x2={890 + 24 * Math.cos((angle * Math.PI) / 180)}
            y2={310 + 24 * Math.sin((angle * Math.PI) / 180)}
            stroke="white"
            strokeWidth="2.5"
            opacity="0.5"
          />
        ))}

        {/* ── Ground shadow ── */}
        <ellipse cx="590" cy="365" rx="480" ry="18" fill="white" opacity="0.04" />

        {/* ── Headlight cluster ── */}
        <path
          d="M 1060,272 Q 1078,276 1082,285 L 1070,288 Q 1062,282 1054,280 Z"
          fill="white"
          opacity="0.7"
        />
        <line x1="1062" y1="275" x2="1085" y2="268" stroke="white" strokeWidth="2" opacity="0.5" />
        <line x1="1060" y1="280" x2="1086" y2="276" stroke="white" strokeWidth="1.5" opacity="0.4" />

        {/* ── Tail light ── */}
        <path
          d="M 110,283 Q 96,286 94,295 L 106,297 Q 112,290 118,288 Z"
          fill="white"
          opacity="0.55"
        />

        {/* ── Side body crease / character line ── */}
        <path
          d="M 180,254 Q 400,238 590,236 Q 760,234 900,246 Q 950,250 1000,262"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          opacity="0.18"
        />

        {/* ── Door handle hints ── */}
        <rect x="430" y="226" width="34" height="6" rx="3" fill="white" opacity="0.2" />
        <rect x="680" y="226" width="34" height="6" rx="3" fill="white" opacity="0.2" />

        {/* ── Under-sill line ── */}
        <path
          d="M 160,278 L 1030,278"
          stroke="white"
          strokeWidth="1"
          opacity="0.1"
        />
      </svg>
    </div>
  )
}
