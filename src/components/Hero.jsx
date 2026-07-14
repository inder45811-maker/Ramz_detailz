import GoldParticles from './shared/GoldParticles'
import { pageUrl } from '../site'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center overflow-hidden bg-black"
      style={{ minHeight: '100vh' }}
    >
      {/* ── Faded Background Logo ───────────────────────────── */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden"
        style={{ opacity: 0.25 }}
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
            src={`${import.meta.env.BASE_URL}hero-logo.webp`}
            alt=""
            width="900"
            height="900"
            loading="eager"
            decoding="async"
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
        <p
          className="text-gold-metallic font-ramz"
          style={{
            fontWeight: 500,
            fontSize: 'clamp(60px, 12vw, 140px)',
            lineHeight: 1.2,
            letterSpacing: '0.02em',
            filter: 'drop-shadow(0 0 40px rgba(0,0,0,0.8)) drop-shadow(0 0 80px rgba(212,175,55,0.3))',
            paddingTop: '20px',
          }}
        >
          {'‘Attention to detail.’'}
        </p>

        {/* Search-friendly page heading */}
        <h1
          className="text-gold-metallic mt-6"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(16px, 2.5vw, 22px)',
            letterSpacing: '0.03em',
            textShadow: '0 2px 4px rgba(0,0,0,0.8)'
          }}
        >
          Car Detailing &amp; Mobile Valeting in Coventry
        </h1>

        {/* CTA buttons */}
        <div
          className="mt-10 flex flex-col sm:flex-row items-center gap-5"
        >
          <a
            href={pageUrl('booking')}
            className="btn-gold py-4 px-10 rounded-full font-bold text-[14px] tracking-widest uppercase shadow-[0_0_20px_rgba(212,175,55,0.2)]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Request Booking
          </a>
          <a
            href={pageUrl('gallery')}
            className="btn-outline py-4 px-10 rounded-full font-bold text-[14px] tracking-widest uppercase"
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
