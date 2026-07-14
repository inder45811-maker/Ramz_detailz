import { useScrollReveal } from '../hooks/useScrollReveal'

/* ── Shared sub-components ─────────────────────────────────────── */

function PriceItem({ price, name, description }) {
  return (
    <li className="py-3" style={{ borderBottom: '1px solid rgba(212,175,55,0.1)' }}>
      <div className="flex items-baseline gap-2 flex-wrap">
        <span
          className="font-detailz"
          style={{
            color: '#D4AF37',
            fontSize: '1.1rem',
            letterSpacing: '0.05em',
            whiteSpace: 'nowrap',
          }}
        >
          {price}
        </span>
        <span
          className="text-luxe-body"
          style={{ fontWeight: 600, fontSize: '0.95rem' }}
        >
          {name}
        </span>
      </div>
      {description && (
        <p
          className="text-luxe-muted mt-1"
          style={{ fontSize: '0.82rem', lineHeight: 1.6 }}
        >
          {description}
        </p>
      )}
    </li>
  )
}

/* ── Tier Cards ─────────────────────────────────────────────────── */

function MaintenanceCard() {
  const ref = useScrollReveal()
  return (
    <div
      ref={ref}
      className="reveal rounded-xl p-8 flex flex-col"
      style={{
        border: '1px solid rgba(212,175,55,0.3)',
        backgroundColor: '#0A0A0A',
      }}
    >
      <p
        className="font-detailz mb-3"
        style={{ color: '#D4AF37', letterSpacing: '0.25em', fontSize: '0.85rem' }}
      >
        MAINTENANCE
      </p>

      <div
        className="font-detailz mb-5"
        style={{ color: '#D4AF37', fontSize: '3rem', letterSpacing: '0.05em', lineHeight: 1 }}
      >
        £20–£45
      </div>

      <div className="gold-divider mb-4" />

      <ul className="flex-1" style={{ listStyle: 'none', padding: 0 }}>
        <PriceItem
          price="£20"
          name="3 Stage Exterior Maintenance Wash"
          description="Pre-wash, snow foam & contact wash, wheels & tyres cleaned and dressed, windows cleaned, fuel cap cleaned."
        />
        <PriceItem
          price="£30"
          name="Interior Maintenance Clean"
          description="Rubbish removed, ashtrays/door bins cleaned, dashboard/seats/rails cleaned, interior vacuumed, glass/mirrors/door jams/boot cleaned."
        />
        <PriceItem
          price="£45"
          name="Mini Valet In & Out"
          description="Everything in the Maintenance Packages."
        />
      </ul>
    </div>
  )
}

function FullPackagesCard() {
  const ref = useScrollReveal()
  return (
    <div
      ref={ref}
      className="reveal rounded-xl p-8 flex flex-col relative"
      style={{
        border: '1px solid #D4AF37',
        backgroundColor: '#0D0D0D',
        boxShadow: '0 0 40px rgba(212,175,55,0.18), 0 0 80px rgba(212,175,55,0.06)',
      }}
    >
      <div
        className="font-detailz absolute"
        style={{
          top: '1.25rem',
          right: '1.25rem',
          backgroundColor: '#D4AF37',
          color: '#000000',
          fontSize: '0.72rem',
          letterSpacing: '0.15em',
          padding: '0.25rem 0.6rem',
          borderRadius: '999px',
        }}
      >
        MOST POPULAR
      </div>

      <p
        className="font-detailz mb-3"
        style={{ color: '#D4AF37', letterSpacing: '0.25em', fontSize: '0.85rem' }}
      >
        FULL PACKAGES
      </p>

      <div
        className="font-detailz mb-5"
        style={{ color: '#D4AF37', fontSize: '3rem', letterSpacing: '0.05em', lineHeight: 1 }}
      >
        £100–£180
      </div>

      <div className="gold-divider mb-4" />

      <ul className="flex-1" style={{ listStyle: 'none', padding: 0 }}>
        <PriceItem
          price="£100"
          name="Full Interior Deep Clean"
          description="Everything in Interior Maintenance plus floor mats, cloth seats & upholstery shampoo using wet vac/extractor, full steam clean, leather cleaned & conditioned."
        />
        <PriceItem
          price="£100"
          name="Full Exterior Package"
          description="Everything in 3 Stage Exterior plus Full Clay Bar & Stage 1 Polish."
        />
        <PriceItem
          price="£180"
          name="Both Full Packages Combined"
        />
      </ul>
    </div>
  )
}

function ExtrasCard() {
  const ref = useScrollReveal()
  return (
    <div
      ref={ref}
      className="reveal rounded-xl p-8 flex flex-col"
      style={{
        border: '1px solid rgba(212,175,55,0.3)',
        backgroundColor: '#0A0A0A',
      }}
    >
      <p
        className="font-detailz mb-3"
        style={{ color: '#D4AF37', letterSpacing: '0.25em', fontSize: '0.85rem' }}
      >
        EXTRAS
      </p>

      <div
        className="font-detailz mb-5"
        style={{ color: '#D4AF37', fontSize: '3rem', letterSpacing: '0.05em', lineHeight: 1 }}
      >
        From £10
      </div>

      <div className="gold-divider mb-4" />

      <ul className="flex-1" style={{ listStyle: 'none', padding: 0 }}>
        <PriceItem price="£25" name="Engine Bay" />
        <PriceItem
          price="£10–£20"
          name="Exhaust Polish"
          description="Price depending on vehicle."
        />
        <PriceItem
          price="Price on Request"
          name="Pet Hair Removal"
          description="Price depending on location and condition."
        />
      </ul>
    </div>
  )
}

function StarIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ flexShrink: 0, marginTop: '2px' }}
    >
      <path
        d="M10 1.5 L11.9 7.1 H17.9 L13.1 10.5 L15 16.1 L10 12.7 L5 16.1 L6.9 10.5 L2.1 7.1 H8.1 Z"
        fill="#D4AF37"
      />
    </svg>
  )
}

/* ── Main Section ───────────────────────────────────────────────── */

export default function Pricing() {
  const labelRef = useScrollReveal()
  const headlineRef = useScrollReveal()

  return (
    <section
      id="pricing"
      style={{ backgroundColor: '#000000' }}
      className="px-6 pb-24"
    >
      <div className="gold-divider" />

      <div className="pt-24">
        <div className="text-center mb-16">
          <p ref={labelRef} className="section-label reveal mb-3">
            INVESTMENT
          </p>
          <div ref={headlineRef} className="reveal">
            <h2
              className="font-editorial text-gold-metallic"
              style={{
                fontSize: 'clamp(44px, 5.5vw, 72px)',
                lineHeight: 1.05,
              }}
            >
              Pricing
            </h2>
            <p
              className="text-luxe-muted mt-2"
              style={{ fontSize: '1rem' }}
            >
              Transparent pricing. No surprises.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <MaintenanceCard />
          <FullPackagesCard />
          <ExtrasCard />
        </div>

        <div
          className="max-w-2xl mx-auto mt-8 rounded-xl p-6"
          style={{
            border: '1px solid rgba(212,175,55,0.25)',
            backgroundColor: '#0A0A0A',
          }}
        >
          <div className="flex items-start gap-3 mb-3">
            <StarIcon />
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: '#D4AF37',
                fontWeight: 600,
                fontSize: '0.95rem',
              }}
            >
              Free Premium Air Freshener with Every Service
            </p>
          </div>
          <p
            className="text-luxe-muted"
            style={{ fontSize: '0.8rem', lineHeight: 1.6, paddingLeft: '1.75rem' }}
          >
            A £10 deposit is required to confirm all bookings. See terms and conditions for more information.
          </p>
        </div>

        <div className="flex justify-center mt-8">
          <a
            href="#booking"
            className="btn-gold"
            style={{
              display: 'inline-block',
              padding: '0.75rem 2.5rem',
              borderRadius: '9999px',
              textDecoration: 'none',
            }}
          >
            Book Your Slot
          </a>
        </div>
      </div>
    </section>
  )
}
