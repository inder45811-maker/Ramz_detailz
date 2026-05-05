import { useScrollReveal } from '../hooks/useScrollReveal'

const galleryItems = [
  {
    id: 1,
    name: 'INTERIOR DEEP CLEAN',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
  },
  {
    id: 2,
    name: 'FULL EXTERIOR PACKAGE',
    gradient: 'linear-gradient(135deg, #1a0a00 0%, #3d1a00 50%, #6b3000 100%)',
  },
  {
    id: 3,
    name: 'SNOW FOAM WASH',
    gradient: 'linear-gradient(135deg, #0a1a0a 0%, #0f2d0f 50%, #1a4d1a 100%)',
  },
  {
    id: 4,
    name: 'ENGINE BAY CLEAN',
    gradient: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #3d3d3d 100%)',
  },
  {
    id: 5,
    name: 'CLAY BAR & POLISH',
    gradient: 'linear-gradient(135deg, #1a000a 0%, #3d001a 50%, #6b0030 100%)',
  },
  {
    id: 6,
    name: 'MINI VALET',
    gradient: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a3d 50%, #2a2a6b 100%)',
  },
]

function GalleryCard({ item }) {
  return (
    <div
      className="card-gold rounded-xl overflow-hidden cursor-pointer group relative flex-shrink-0 min-w-[280px] snap-center md:min-w-0"
      style={{ height: '280px' }}
    >
      {/* Background gradient placeholder */}
      <div
        className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
        style={{ background: item.gradient }}
      />

      {/* Gold shimmer overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-10" />

      {/* Center divider line */}
      <div
        className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
        style={{ width: '1px', background: 'rgba(255,255,255,0.3)' }}
      />

      {/* BEFORE label */}
      <span
        className="absolute top-3 left-3 z-30 px-2 py-1 rounded text-xs text-gold-metallic"
        style={{
          background: 'rgba(0,0,0,0.6)',
          fontFamily: "'Bebas Neue', sans-serif",
          letterSpacing: '0.05em',
        }}
      >
        BEFORE
      </span>

      {/* AFTER label */}
      <span
        className="absolute top-3 right-3 z-30 px-2 py-1 rounded text-xs text-black font-bold"
        style={{
          background: 'rgba(212,175,55,0.85)',
          fontFamily: "'Bebas Neue', sans-serif",
          letterSpacing: '0.05em',
        }}
      >
        AFTER
      </span>

      {/* Bottom overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 z-30 px-4 py-3 flex items-end justify-between"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)' }}
      >
        <span
          className="text-gold-metallic"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '18px',
            letterSpacing: '0.1em',
          }}
        >
          {item.name}
        </span>
        <a
          href="#booking"
          className="text-[#D4AF37] text-xs font-bold hover:underline whitespace-nowrap ml-2"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Book This →
        </a>
      </div>
    </div>
  )
}

export default function Gallery() {
  const labelRef = useScrollReveal()
  const headlineRef = useScrollReveal()
  const gridRef = useScrollReveal()

  return (
    <section
      id="gallery"
      style={{ background: '#0A0A0A' }}
      className="py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p ref={labelRef} className="section-label reveal">
            THE RESULTS
          </p>
          <h2
            ref={headlineRef}
            className="reveal font-extrabold text-gold-metallic mt-3"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(48px, 6vw, 80px)',
              lineHeight: 1.1,
            }}
          >
            Before &amp; After
          </h2>
          <p
            className="mt-2"
            style={{ color: 'transparent', backgroundImage: 'linear-gradient(135deg, #B8952A 0%, #D4AF37 25%, #F5D97E 50%, #D4AF37 75%, #B8952A 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', fontFamily: "'DM Sans', sans-serif" }}
          >
            Real results from real vehicles.
          </p>
        </div>

        {/* Mobile: horizontal scroll | Desktop: grid */}
        <div
          ref={gridRef}
          className="reveal flex overflow-x-auto gap-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-6 md:overflow-visible"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {galleryItems.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      <style>{`
        .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        div[class*="overflow-x-auto"]::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  )
}


