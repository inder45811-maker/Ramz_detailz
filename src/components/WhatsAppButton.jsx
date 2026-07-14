import { waLink } from '../constants'

const WA_HREF = waLink('Hi Ramz, I found you through your website')

const WhatsAppSVG = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="white"
    aria-hidden="true"
    style={{ flexShrink: 0 }}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M11.997 2C6.477 2 2 6.477 2 12c0 1.989.574 3.842 1.558 5.407L2.046 22l4.709-1.493A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.52 2 11.997 2z" />
  </svg>
)

export default function WhatsAppButton() {
  return (
    <a
      href={WA_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message us on WhatsApp"
      className="wa-button wa-pulse"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 30,
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        backgroundColor: '#25D366',
        border: '2px solid #D4AF37',
        borderRadius: '9999px',
        padding: '12px 20px',
        textDecoration: 'none',
        cursor: 'pointer',
        transition: 'filter 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        animation: 'wa-pulse 2.4s ease-in-out infinite',
        minHeight: '48px',
        minWidth: '48px',
      }}
    >
      <WhatsAppSVG />

      <span
        className="hidden sm:inline-block"
        style={{
          color: '#ffffff',
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 600,
          fontSize: '14px',
          whiteSpace: 'nowrap',
        }}
      >
        Message Us
      </span>
    </a>
  )
}
