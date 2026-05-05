import { useScrollReveal } from '../hooks/useScrollReveal'

const stats = [
  { value: '100+', label: 'Vehicles Detailed' },
  { value: '5★', label: 'Star Rated' },
  { value: 'CV6', label: 'Coventry Based' },
]

export default function About() {
  const headlineRef = useScrollReveal()
  const bodyRef = useScrollReveal()
  const stat0Ref = useScrollReveal()
  const stat1Ref = useScrollReveal()
  const stat2Ref = useScrollReveal()

  const statRefs = [stat0Ref, stat1Ref, stat2Ref]

  return (
    <section
      id="about"
      style={{ backgroundColor: '#0A0A0A' }}
      className="py-24 px-6"
    >
      <div className="gold-divider mb-16" />

      <div className="max-w-4xl mx-auto text-center">
        <p className="section-label mb-4">OUR STORY</p>

        <h2
          ref={headlineRef}
          className="reveal font-['DM_Sans'] text-gold-metallic leading-tight mb-6"
          style={{
            fontSize: 'clamp(40px, 6vw, 72px)',
            fontWeight: 800,
          }}
        >
          Attention to Detail.
        </h2>

        <p
          ref={bodyRef}
          className="reveal mx-auto mb-16"
          style={{
            color: 'transparent', backgroundImage: 'linear-gradient(135deg, #B8952A 0%, #D4AF37 25%, #F5D97E 50%, #D4AF37 75%, #B8952A 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text',
            fontSize: '18px',
            lineHeight: 1.8,
            maxWidth: '42rem',
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Ramz DETAILZ is Coventry's go-to for premium vehicle care. From daily
          drivers to show cars, we treat every vehicle with the same level of
          detail and respect. No shortcuts. No swirl marks. Just results.
        </p>

        <div className="flex justify-center gap-12 flex-wrap mt-12">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              ref={statRefs[i]}
              className="reveal flex flex-col items-center"
            >
              <span
                className="text-gold-metallic"
                style={{
                  fontSize: 'clamp(48px, 6vw, 72px)',
                  fontFamily: "'Bebas Neue', sans-serif",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </span>
              <span
                className="text-gold-metallic uppercase mt-2"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: '14px',
                  letterSpacing: '0.1em',
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="gold-divider mt-16" />
    </section>
  )
}


