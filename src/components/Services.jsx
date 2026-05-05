import { useScrollReveal } from '../hooks/useScrollReveal'

const SprayIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 28 L10 18 L18 18 L18 14 L24 14 L24 18 L26 18 C27.1 18 28 18.9 28 20 L28 28 C28 29.1 27.1 30 26 30 L12 30 C10.9 30 10 29.1 10 28Z" stroke="#D4AF37" strokeWidth="1.8" strokeLinejoin="round" fill="none"/>
    <path d="M18 14 L18 10 L22 10 L22 14" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="19" cy="24" r="2.5" fill="#D4AF37" opacity="0.7"/>
    <path d="M30 10 Q33 11 33 14 Q33 17 30 18" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <circle cx="35" cy="8" r="1.2" fill="#D4AF37" opacity="0.6"/>
    <circle cx="37" cy="13" r="1" fill="#D4AF37" opacity="0.5"/>
    <circle cx="35" cy="18" r="1.2" fill="#D4AF37" opacity="0.6"/>
  </svg>
)

const BubbleCarIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 24 L6 20 L10 14 L28 14 L32 20 L34 20 L34 24 L32 24" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M6 24 L10 24" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="13" cy="25.5" r="3" stroke="#D4AF37" strokeWidth="1.8" fill="none"/>
    <circle cx="27" cy="25.5" r="3" stroke="#D4AF37" strokeWidth="1.8" fill="none"/>
    <path d="M13 14 L16 19 L24 19 L26 14" stroke="#D4AF37" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
    <circle cx="7" cy="10" r="1.5" stroke="#D4AF37" strokeWidth="1.2" fill="none" opacity="0.7"/>
    <circle cx="12" cy="7" r="1" stroke="#D4AF37" strokeWidth="1.2" fill="none" opacity="0.6"/>
    <circle cx="4" cy="6" r="1.2" fill="#D4AF37" opacity="0.5"/>
  </svg>
)

const CarKeysIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 22 L5 18 L9 12 L27 12 L31 18 L35 18 L35 22 L31 22" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M5 22 L9 22" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="12" cy="23.5" r="2.8" stroke="#D4AF37" strokeWidth="1.8" fill="none"/>
    <circle cx="28" cy="23.5" r="2.8" stroke="#D4AF37" strokeWidth="1.8" fill="none"/>
    <path d="M12 12 L15 17 L25 17 L27 12" stroke="#D4AF37" strokeWidth="1.4" strokeLinejoin="round" fill="none"/>
    <path d="M20 6 L20 9 M17 7.5 L20 6 L23 7.5" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 18 L5 20 M37 18 L35 20" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
  </svg>
)

const FoamCannonIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="20" width="14" height="10" rx="2" stroke="#D4AF37" strokeWidth="1.8" fill="none"/>
    <path d="M22 24 L28 24 L28 22 L32 22 L32 26 L28 26 L28 24" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M12 20 L12 16 L18 16 L18 20" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="15" cy="10" r="2" stroke="#D4AF37" strokeWidth="1.3" fill="none" opacity="0.8"/>
    <circle cx="22" cy="8" r="1.5" stroke="#D4AF37" strokeWidth="1.2" fill="none" opacity="0.7"/>
    <circle cx="8" cy="9" r="1.5" fill="#D4AF37" opacity="0.5"/>
    <circle cx="25" cy="14" r="1.2" fill="#D4AF37" opacity="0.6"/>
    <circle cx="5" cy="15" r="1" fill="#D4AF37" opacity="0.4"/>
  </svg>
)

const services = [
  {
    icon: <SprayIcon />,
    title: 'FULL INTERIOR DEEP CLEAN',
    body: 'Everything in the Interior Maintenance Clean. Plus floor mats, cloth seats & upholstery shampoo using wet vac extractor. Full steam clean, leather cleaned & conditioned.',
  },
  {
    icon: <BubbleCarIcon />,
    title: 'FULL EXTERIOR PACKAGE',
    body: 'Everything in the 3 Stage Exterior Maintenance Wash. Plus a Full Clay Bar & Stage 1 Polish.',
  },
  {
    icon: <CarKeysIcon />,
    title: 'VEHICLE BUY & SELL',
    body: 'We buy and sell premium vehicles. Part exchange welcome. Free evaluations & quotes.',
  },
  {
    icon: <FoamCannonIcon />,
    title: 'SNOW FOAM WASH',
    body: 'Pre-wash foam treatment. Safe, scratch-free cleaning for all paint types. Wheels, tyres, windows, fuel cap cleaned.',
  },
]

function ServiceCard({ icon, title, body }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className="card-gold reveal rounded-xl p-8">
      <div>{icon}</div>
      <h3
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          color: '#D4AF37',
          fontSize: '1.5rem',
          letterSpacing: '0.1em',
          marginTop: '1rem',
          marginBottom: '0.75rem',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          color: '#B0B0B0',
          fontSize: '15px',
          lineHeight: '1.7',
        }}
      >
        {body}
      </p>
    </div>
  )
}

export default function Services() {
  const headlineRef = useScrollReveal()

  return (
    <section
      id="services"
      style={{ backgroundColor: '#0A0A0A' }}
      className="py-24 px-6"
    >
      <div className="text-center mb-16">
        <p className="section-label mb-3">WHAT WE DO</p>
        <div ref={headlineRef} className="reveal">
          <h2
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(48px, 6vw, 80px)',
              color: '#FFFFFF',
              lineHeight: 1.05,
            }}
          >
            Services
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {services.map((svc) => (
          <ServiceCard key={svc.title} {...svc} />
        ))}
      </div>
    </section>
  )
}
