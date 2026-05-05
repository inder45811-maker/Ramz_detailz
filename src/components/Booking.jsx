import { useScrollReveal } from '../hooks/useScrollReveal'

function CalendarIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="4" y="8" width="40" height="36" rx="4" stroke="#D4AF37" strokeWidth="2.5" fill="none" />
      <path d="M4 18H44" stroke="#D4AF37" strokeWidth="2.5" />
      <path d="M16 4V12" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M32 4V12" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="12" y="26" width="6" height="6" rx="1" fill="#D4AF37" />
      <rect x="21" y="26" width="6" height="6" rx="1" fill="#D4AF37" opacity="0.5" />
      <rect x="30" y="26" width="6" height="6" rx="1" fill="#D4AF37" opacity="0.5" />
      <rect x="12" y="34" width="6" height="4" rx="1" fill="#D4AF37" opacity="0.5" />
      <rect x="21" y="34" width="6" height="4" rx="1" fill="#D4AF37" opacity="0.5" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ display: 'inline', verticalAlign: 'middle' }}
    >
      <path
        d="M12 2L4 6V12C4 16.418 7.582 20.446 12 22C16.418 20.446 20 16.418 20 12V6L12 2Z"
        stroke="#D4AF37"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M9 12L11 14L15 10" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const trustItems = [
  {
    stat: '100+',
    label: 'Vehicles Detailed',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M5 17H3C2.447 17 2 16.553 2 16V11C2 10.447 2.447 10 3 10H5" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M19 17H21C21.553 17 22 16.553 22 16V11C22 10.447 21.553 10 21 10H19" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" />
        <rect x="5" y="8" width="14" height="9" rx="2" stroke="#D4AF37" strokeWidth="1.8" />
        <path d="M5 12H19" stroke="#D4AF37" strokeWidth="1.8" />
        <circle cx="8" cy="19" r="1.5" stroke="#D4AF37" strokeWidth="1.8" />
        <circle cx="16" cy="19" r="1.5" stroke="#D4AF37" strokeWidth="1.8" />
        <path d="M7 8L8.5 4H15.5L17 8" stroke="#D4AF37" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    stat: '5 ★',
    label: 'Star Rated',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M12 2L14.9 8.6L22 9.6L17 14.4L18.2 21.5L12 18.3L5.8 21.5L7 14.4L2 9.6L9.1 8.6L12 2Z"
          stroke="#D4AF37"
          strokeWidth="1.8"
          strokeLinejoin="round"
          fill="rgba(212,175,55,0.15)"
        />
      </svg>
    ),
  },
  {
    stat: 'Coventry',
    label: 'UK Based',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M12 2C8.134 2 5 5.134 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.134 15.866 2 12 2Z"
          stroke="#D4AF37"
          strokeWidth="1.8"
          fill="rgba(212,175,55,0.15)"
        />
        <circle cx="12" cy="9" r="2.5" stroke="#D4AF37" strokeWidth="1.8" />
      </svg>
    ),
  },
]

export default function Booking() {
  const labelRef = useScrollReveal()
  const headlineRef = useScrollReveal()
  const embedRef = useScrollReveal()

  return (
    <section
      id="booking"
      style={{ background: '#000000' }}
      className="py-24 px-6"
    >
      {/* Top gold divider */}
      <div className="gold-divider mb-0" />

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p ref={labelRef} className="section-label reveal">
            BOOK ONLINE
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
            Reserve Your Slot
          </h2>
          <p
            className="mt-3 max-w-xl mx-auto text-center"
            style={{ color: 'transparent', backgroundImage: 'linear-gradient(135deg, #B8952A 0%, #D4AF37 25%, #F5D97E 50%, #D4AF37 75%, #B8952A 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', fontFamily: "'DM Sans', sans-serif" }}
          >
            Choose your service and pick a time that works for you. Coventry, UK based. Mobile service available.
          </p>
        </div>

        {/* Booking embed container */}
        <div
          ref={embedRef}
          id="calendly-embed"
          className="reveal rounded-2xl p-8 flex flex-col items-center justify-center text-center"
          style={{
            background: '#0A0A0A',
            border: '1px solid rgba(212,175,55,0.3)',
            minHeight: '300px',
          }}
        >
          <CalendarIcon />

          <p
            className="text-gold-metallic mt-4"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '24px',
              letterSpacing: '0.08em',
            }}
          >
            Online booking coming soon
          </p>

          <p
            className="mt-2 text-sm"
            style={{ color: 'transparent', backgroundImage: 'linear-gradient(135deg, #B8952A 0%, #D4AF37 25%, #F5D97E 50%, #D4AF37 75%, #B8952A 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', fontFamily: "'DM Sans', sans-serif" }}
          >
            Contact us directly to reserve your slot:
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <a
              href="https://wa.me/447XXXXXXXXXX?text=Hi%20Ramz%2C%20I%27d%20like%20to%20book%20a%20detailing%20service"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full font-semibold text-sm text-white inline-flex items-center gap-2 transition-all duration-200 hover:brightness-110 hover:scale-105"
              style={{
                background: '#25D366',
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Message on WhatsApp
            </a>

            <a
              href="mailto:ramzdetailz@outlook.com"
              className="px-6 py-3 rounded-full font-semibold text-sm inline-flex items-center gap-2 transition-all duration-200 hover:bg-[#D4AF37]/10 hover:scale-105"
              style={{
                border: '1px solid #D4AF37',
                color: '#D4AF37',
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Email Us
            </a>
          </div>
        </div>

        {/* Deposit info bar */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <ShieldIcon />
          <span
            className="text-sm"
            style={{ color: 'transparent', backgroundImage: 'linear-gradient(135deg, #B8952A 0%, #D4AF37 25%, #F5D97E 50%, #D4AF37 75%, #B8952A 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', fontFamily: "'DM Sans', sans-serif", fontSize: '14px' }}
          >
            £10 deposit required to confirm all bookings
          </span>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-6">
          <a
            href="mailto:ramzdetailz@outlook.com"
            className="btn-gold inline-block px-10 py-3 rounded-full font-semibold transition-all duration-200 hover:brightness-110 hover:scale-105"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Check Availability
          </a>
        </div>

        {/* Trust signals */}
        <div className="flex justify-center gap-8 flex-wrap mt-12">
          {trustItems.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2">
              {item.icon}
              <span
                className="text-gold-metallic font-bold text-xl"
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em', fontSize: '22px' }}
              >
                {item.stat}
              </span>
              <span
                className="text-sm"
                style={{ color: 'transparent', backgroundImage: 'linear-gradient(135deg, #B8952A 0%, #D4AF37 25%, #F5D97E 50%, #D4AF37 75%, #B8952A 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', fontFamily: "'DM Sans', sans-serif" }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
      `}</style>
    </section>
  )
}


