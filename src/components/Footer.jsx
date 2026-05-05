

const InstagramIcon = ({ size = 20, color = '#D4AF37' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill={color} stroke="none" />
  </svg>
)

const WhatsAppIcon = ({ size = 20, color = '#D4AF37' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M11.997 2C6.477 2 2 6.477 2 12c0 1.989.574 3.842 1.558 5.407L2.046 22l4.709-1.493A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.52 2 11.997 2z" />
  </svg>
)

const EnvelopeIcon = () => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    style={{ flexShrink: 0 }}
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="2,4 12,13 22,4" />
  </svg>
)

const PinIcon = () => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    style={{ flexShrink: 0 }}
  >
    <path d="M12 2C8.686 2 6 4.686 6 8c0 4.5 6 14 6 14s6-9.5 6-14c0-3.314-2.686-6-6-6z" />
    <circle cx="12" cy="8" r="2" />
  </svg>
)

const services = [
  'Interior Deep Clean',
  'Full Exterior Package',
  'Snow Foam Wash',
  'Vehicle Buy & Sell',
  'Mini Valet',
]

const columnLabelStyle = {
  fontFamily: "'Bebas Neue', sans-serif",
  color: '#D4AF37',
  letterSpacing: '0.2em',
  fontSize: '18px',
}

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{ backgroundColor: '#000000' }}
      className="pt-20 pb-10 px-6"
    >
      <div className="max-w-5xl mx-auto">
        {/* ── Wordmark ── */}
        <div className="flex flex-col items-center mb-12">
          <img 
            src={`${import.meta.env.BASE_URL}hero-logo.png`}
            alt="Ramz Detailz Logo" 
            className="h-32 md:h-48 w-auto object-contain mb-4 blend-logo"
          />
        </div>

        {/* ── 3-Column Grid ── */}
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Column 1 — CONTACT */}
          <div>
            <p className="mb-4" style={columnLabelStyle}>
              CONTACT
            </p>

            <a
              href="https://instagram.com/ramz_detailz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mb-3 text-gold-metallic text-sm transition-colors duration-200 hover:text-[#D4AF37] md:justify-start justify-center"
            >
              <InstagramIcon size={16} color="currentColor" />
              @ramz_detailz
            </a>

            <a
              href="mailto:ramzdetailz@outlook.com"
              className="flex items-center gap-2 mb-3 text-gold-metallic text-sm transition-colors duration-200 hover:text-[#D4AF37] md:justify-start justify-center"
            >
              <EnvelopeIcon />
              ramzdetailz@outlook.com
            </a>

            <div className="flex items-center gap-2 mb-3 text-gold-metallic text-sm md:justify-start justify-center">
              <PinIcon />
              Coventry, United Kingdom CV6
            </div>
          </div>

          {/* Column 2 — SERVICES */}
          <div className="flex flex-col items-center md:items-center">
            <p className="mb-4" style={columnLabelStyle}>
              SERVICES
            </p>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm transition-colors duration-200 hover:text-[#D4AF37]"
                    style={{ color: 'transparent', backgroundImage: 'linear-gradient(135deg, #B8952A 0%, #D4AF37 25%, #F5D97E 50%, #D4AF37 75%, #B8952A 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — AVAILABILITY */}
          <div className="md:text-left text-center">
            <p className="mb-4" style={columnLabelStyle}>
              AVAILABILITY
            </p>
            <p className="text-sm mb-1" style={{ color: 'transparent', backgroundImage: 'linear-gradient(135deg, #B8952A 0%, #D4AF37 25%, #F5D97E 50%, #D4AF37 75%, #B8952A 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>
              Monday – Saturday
            </p>
            <p className="text-sm mb-4" style={{ color: 'transparent', backgroundImage: 'linear-gradient(135deg, #B8952A 0%, #D4AF37 25%, #F5D97E 50%, #D4AF37 75%, #B8952A 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>
              By Appointment Only
            </p>
            <p className="text-sm mb-1" style={{ color: 'transparent', backgroundImage: 'linear-gradient(135deg, #B8952A 0%, #D4AF37 25%, #F5D97E 50%, #D4AF37 75%, #B8952A 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>
              Sunday
            </p>
            <p className="text-sm mb-4" style={{ color: 'transparent', backgroundImage: 'linear-gradient(135deg, #B8952A 0%, #D4AF37 25%, #F5D97E 50%, #D4AF37 75%, #B8952A 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>
              Closed
            </p>
            <p className="text-sm mb-2" style={{ color: 'transparent', backgroundImage: 'linear-gradient(135deg, #B8952A 0%, #D4AF37 25%, #F5D97E 50%, #D4AF37 75%, #B8952A 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>
              Coventry, UK
            </p>
            <p
              className="text-sm mt-2"
              style={{ color: '#D4AF37', fontFamily: "'DM Sans', sans-serif" }}
            >
              Mobile Service Available
            </p>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="gold-divider my-8" />

        {/* ── Policy Text ── */}
        <p
          className="text-center text-xs mb-4"
          style={{ color: 'transparent', backgroundImage: 'linear-gradient(135deg, #B8952A 0%, #D4AF37 25%, #F5D97E 50%, #D4AF37 75%, #B8952A 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', fontFamily: "'DM Sans', sans-serif" }}
        >
          A £10 deposit is required to confirm all bookings. See terms and
          conditions for more information.
        </p>

        {/* ── Bottom Bar ── */}
        <div className="flex justify-between items-center flex-wrap gap-4">
          {/* Left Spacer */}
          <div className="flex items-center w-8"></div>

          {/* Center — Copyright */}
          <p
            className="text-xs"
            style={{ color: 'transparent', backgroundImage: 'linear-gradient(135deg, #B8952A 0%, #D4AF37 25%, #F5D97E 50%, #D4AF37 75%, #B8952A 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', fontFamily: "'DM Sans', sans-serif" }}
          >
            © 2026 Ramz DETAILZ. All rights reserved.
          </p>

          {/* Right — Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/ramz_detailz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-opacity duration-200 hover:opacity-70"
            >
              <InstagramIcon size={20} color="#D4AF37" />
            </a>
            <a
              href="https://wa.me/447XXXXXXXXXX?text=Hi%20Ramz%2C%20I%20found%20you%20through%20your%20website"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="transition-opacity duration-200 hover:opacity-70"
            >
              <WhatsAppIcon size={20} color="#D4AF37" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}


