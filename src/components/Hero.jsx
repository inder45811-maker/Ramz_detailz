import { useState, useEffect } from 'react'
import GoldParticles from './shared/GoldParticles'

// Stagger config: [delay in seconds]
const STAGGER = {
  logo: 0,
  tagline: 0.3,
  buttons: 0.5,
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
      {/* ── Faded Background Logo ───────────────────────────── */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden"
        style={{ opacity: mounted ? 0.25 : 0, transition: 'opacity 1.5s ease 0.2s' }}
      >
        <div className="relative w-full h-full flex items-center justify-center" style={{ maxWidth: '1200px' }}>
          {/* Edge fading mask */}
          <div 
            className="absolute inset-0 z-10" 
            style={{ 
              background: 'radial-gradient(ellipse at center, transparent 30%, black 80%)'
            }} 
          />
          <img 
            src={`${import.meta.env.BASE_URL}hero-logo.png`}
            alt="" 
            className="w-full h-full object-cover sm:object-contain scale-110 opacity-70 blend-logo"
            style={{ filter: 'blur(4px) grayscale(30%)' }}
          />
        </div>
      </div>

      {/* ── Gold particles layer ────────────────────────────── */}
      <GoldParticles count={16} />

      {/* ── Main content ────────────────────────────────────── */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 min-h-[60vh] w-full mt-10"
        style={{ maxWidth: '900px', margin: '0 auto' }}
      >
        {/* Headline */}
        <h1
          className="text-gold-metallic font-ramz"
          style={{
            ...revealed(mounted, STAGGER.logo),
            fontWeight: 500, /* Reduced weight to prevent faux-bold distortion */
            fontSize: 'clamp(60px, 12vw, 140px)',
            lineHeight: 1.2,
            letterSpacing: '0.02em',
            filter: 'drop-shadow(0 0 40px rgba(0,0,0,0.8)) drop-shadow(0 0 80px rgba(212,175,55,0.3))',
            paddingTop: '20px',
          }}
        >
          &apos;Attention to detail.&apos;
        </h1>

        {/* Tagline */}
        <p
          className="text-gold-metallic mt-6"
          style={{
            ...revealed(mounted, STAGGER.tagline),
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(16px, 2.5vw, 22px)',
            letterSpacing: '0.03em',
            textShadow: '0 2px 4px rgba(0,0,0,0.8)'
          }}
        >
          Premium Vehicle Detailing &amp; Valeting — Coventry, UK
        </p>

        {/* CTA buttons */}
        <div
          className="mt-10 flex flex-col sm:flex-row items-center gap-5"
          style={revealed(mounted, STAGGER.buttons)}
        >
          <a
            href="#booking"
            className="btn-gold py-4 px-10 rounded-full font-bold text-[14px] tracking-widest uppercase transition-transform duration-200 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(212,175,55,0.2)]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Book Now
          </a>
          <a
            href="#gallery"
            className="btn-outline py-4 px-10 rounded-full font-bold text-[14px] tracking-widest uppercase transition-transform duration-200 hover:scale-105 active:scale-95"
            style={{ fontFamily: "'DM Sans', sans-serif", border: '1px solid rgba(255,255,255,0.2)' }}
          >
            View Our Work
          </a>
        </div>
      </div>

      {/* ── Bottom fade edge ────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
    </section>
  )
}




