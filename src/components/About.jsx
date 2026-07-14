import { useScrollReveal } from '../hooks/useScrollReveal'

const stats = [
  { value: '£20', label: 'Packages From' },
  { value: '£10', label: 'Booking Deposit' },
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
          className="reveal font-editorial text-gold-metallic leading-tight mb-6"
          style={{
            fontSize: 'clamp(40px, 5.5vw, 64px)',
          }}
        >
          Attention to Detail.
        </h2>

        <p
          ref={bodyRef}
          className="reveal text-luxe-body mx-auto mb-16"
          style={{
            fontSize: '18px',
            lineHeight: 1.8,
            maxWidth: '42rem',
          }}
        >
          Ramz DETAILZ provides appointment-based vehicle care in Coventry. From daily
          drivers to show cars, every service is approached with careful methods and
          respect for the vehicle, with the package scope agreed before work begins.
        </p>

        <div className="flex justify-center gap-12 flex-wrap mt-12">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              ref={statRefs[i]}
              className="reveal flex flex-col items-center"
            >
              <span
                className="text-gold-metallic font-detailz"
                style={{
                  fontSize: 'clamp(48px, 6vw, 72px)',
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </span>
              <span
                className="text-luxe-muted uppercase mt-2"
                style={{
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
