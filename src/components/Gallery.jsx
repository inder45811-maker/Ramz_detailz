import { useScrollReveal } from '../hooks/useScrollReveal'
import { pageUrl } from '../site'

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
      className="card-gold rounded-xl overflow-hidden relative flex-shrink-0 min-w-[280px] snap-center md:min-w-0"
      style={{ height: '280px' }}
    >
      {/* Decorative placeholder while genuine portfolio photography is prepared. */}
      <div
        className="absolute inset-0"
        style={{ background: item.gradient }}
        aria-hidden="true"
      />

      {/* Subtle overlay keeps the placeholder copy legible. */}
      <div
        className="absolute inset-0 z-10"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.2))' }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 text-center px-6">
        <svg
          width="38"
          height="38"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <circle cx="12" cy="12" r="3" />
          <path d="M8 5l1.5-2h5L16 5" />
        </svg>
        <span className="section-label" style={{ letterSpacing: '0.18em' }}>
          Photos coming soon
        </span>
      </div>

      {/* Bottom overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 z-30 px-4 py-3 flex items-end justify-between"
      >
        <span
          className="text-gold-metallic font-detailz"
          style={{ fontSize: '18px', letterSpacing: '0.1em' }}
        >
          {item.name}
        </span>
        <a
          href={pageUrl('booking')}
          aria-label={`Request ${item.name.toLowerCase()}`}
          className="text-[#D4AF37] text-xs font-bold hover:underline whitespace-nowrap ml-2"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Request This →
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
        <div className="text-center mb-16">
          <p ref={labelRef} className="section-label reveal">
            OUR PORTFOLIO
          </p>
          <h2
            ref={headlineRef}
            className="reveal font-editorial text-gold-metallic mt-3"
            style={{
              fontSize: 'clamp(44px, 5.5vw, 72px)',
              lineHeight: 1.1,
            }}
          >
            Gallery Coming Soon
          </h2>
          <p className="text-luxe-muted mt-2">
            We&apos;re preparing genuine before-and-after photos. In the meantime,
            explore the services available to book.
          </p>
        </div>

        <div
          ref={gridRef}
          className="reveal flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-6 md:pb-0 md:overflow-visible"
        >
          {galleryItems.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
