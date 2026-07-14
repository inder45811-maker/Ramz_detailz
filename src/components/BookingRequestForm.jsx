import { useEffect, useState } from 'react'
import { CalendarDays, CheckCircle2, Clock3, MapPin, Send, ShieldCheck } from 'lucide-react'
import {
  BOOKING_SERVICES,
  EMAIL,
  SQUARE_BOOKING_URL,
  pageUrl,
  waLink,
} from '../site'

const initialForm = {
  service: '',
  name: '',
  mobile: '',
  email: '',
  vehicle: '',
  registration: '',
  postcode: '',
  preferredDate: '',
  preferredTime: '',
  serviceLocation: 'Mobile service at my address',
  notes: '',
  consent: false,
}

const inputClass =
  'min-w-0 max-w-full w-full rounded-lg border border-gold/30 bg-black-card px-4 py-3 text-luxe-body placeholder:text-luxe-muted focus:border-gold'
const directWhatsAppLink = waLink('Hi Ramz, I would like to ask about booking a detailing appointment.')

function buildBookingMessage(details) {
  return [
    'Hi Ramz, I would like to request a detailing appointment.',
    '',
    `Service: ${details.service}`,
    `Name: ${details.name}`,
    `Mobile: ${details.mobile}`,
    details.email ? `Email: ${details.email}` : null,
    `Vehicle: ${details.vehicle}`,
    details.registration ? `Registration: ${details.registration}` : null,
    `Postcode: ${details.postcode}`,
    `Preferred date: ${details.preferredDate}`,
    `Preferred time: ${details.preferredTime}`,
    `Location: ${details.serviceLocation}`,
    details.notes ? `Notes: ${details.notes}` : null,
    '',
    'I understand the appointment is confirmed only after Ramz DETAILZ accepts the slot and receives the £10 deposit.',
  ]
    .filter(Boolean)
    .join('\n')
}

const steps = [
  { icon: CalendarDays, title: 'Request a slot', text: 'Choose a service and tell us your preferred date and time.' },
  { icon: Clock3, title: 'We confirm availability', text: 'We check travel time and reply with the exact appointment slot.' },
  { icon: ShieldCheck, title: 'Pay the £10 deposit', text: 'Your appointment is secured after the deposit is received.' },
]

export default function BookingRequestForm() {
  const [form, setForm] = useState(initialForm)
  const [minimumDate, setMinimumDate] = useState('')
  const [bookingLink, setBookingLink] = useState('')
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const date = new Date()
    date.setDate(date.getDate() + 1)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    setMinimumDate(`${year}-${month}-${day}`)
    setIsReady(true)
  }, [])

  const updateField = ({ target }) => {
    const { name, type, value, checked } = target
    setForm((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const link = waLink(buildBookingMessage(form))
    setBookingLink(link)
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="booking-request" className="overflow-hidden bg-black px-6 py-20">
      <div className="mx-auto min-w-0 max-w-6xl">
        {SQUARE_BOOKING_URL ? (
          <div className="mb-12 rounded-2xl border border-gold/40 bg-black-card p-8 text-center shadow-gold">
            <p className="section-label">LIVE AVAILABILITY</p>
            <h2 className="mt-3 font-editorial text-gold-metallic text-4xl">Book Online</h2>
            <p className="text-luxe-body mx-auto mt-4 max-w-2xl">
              Choose a service, select a live appointment and pay the £10 deposit securely through Square.
            </p>
            <a
              href={SQUARE_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-7 inline-flex rounded-full px-9 py-4"
            >
              View Live Appointments
            </a>
          </div>
        ) : (
          <div className="mb-12 rounded-2xl border border-gold/30 bg-black-soft p-6 text-center">
            <p className="text-luxe-body">
              Live calendar booking is being connected. You can request an appointment now and receive confirmation directly on WhatsApp.
            </p>
          </div>
        )}

        <div className={`${isReady ? 'hidden' : ''} mb-10 rounded-xl border border-gold/30 bg-black-card p-6 text-center`}>
          <p className="text-luxe-body leading-7">
            The structured request form needs JavaScript. You can still{' '}
            <a href={directWhatsAppLink} target="_blank" rel="noopener noreferrer" className="text-gold underline">
              message Ramz DETAILZ directly on WhatsApp
            </a>.
          </p>
        </div>

        <div className="grid min-w-0 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="min-w-0">
            <p className="section-label">HOW BOOKING WORKS</p>
            <h2 className="mt-3 font-editorial text-gold-metallic text-4xl md:text-5xl">
              Three Simple Steps
            </h2>
            <div className="mt-8 space-y-5">
              {steps.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4 rounded-xl border border-gold/20 bg-black-card p-5">
                  <Icon className="mt-1 shrink-0 text-gold" size={26} aria-hidden="true" />
                  <div>
                    <h3 className="font-detailz text-xl text-gold">{title}</h3>
                    <p className="text-luxe-muted mt-1 text-sm leading-6">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-gold/20 p-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 shrink-0 text-gold" size={22} aria-hidden="true" />
                <p className="text-luxe-body text-sm leading-6">
                  Coventry-based mobile service. Include your postcode so travel availability can be checked before confirmation.
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className={`${isReady ? '' : 'hidden'} min-w-0 max-w-full rounded-2xl border border-gold/30 bg-black-soft p-6 md:p-8`}
          >
            <p className="section-label">APPOINTMENT REQUEST</p>
            <h2 className="mt-3 font-editorial text-gold-metallic text-4xl">Tell Us What You Need</h2>
            <p className="text-luxe-muted mt-3 text-sm leading-6">
              Required fields are marked with an asterisk. The form opens a pre-filled WhatsApp message; nothing is sent until you choose to send it.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <label className="md:col-span-2 text-luxe-body text-sm">
                Service *
                <select name="service" value={form.service} onChange={updateField} required className={`${inputClass} mt-2`}>
                  <option value="">Choose a service</option>
                  {BOOKING_SERVICES.map((service) => (
                    <option key={service.value} value={service.value}>{service.label}</option>
                  ))}
                </select>
              </label>

              <label className="text-luxe-body text-sm">
                Full name *
                <input name="name" value={form.name} onChange={updateField} required autoComplete="name" className={`${inputClass} mt-2`} />
              </label>

              <label className="text-luxe-body text-sm">
                Mobile number *
                <input name="mobile" type="tel" value={form.mobile} onChange={updateField} required autoComplete="tel" className={`${inputClass} mt-2`} />
              </label>

              <label className="text-luxe-body text-sm">
                Email address
                <input name="email" type="email" value={form.email} onChange={updateField} autoComplete="email" className={`${inputClass} mt-2`} />
              </label>

              <label className="text-luxe-body text-sm">
                Vehicle make and model *
                <input name="vehicle" value={form.vehicle} onChange={updateField} required placeholder="e.g. BMW 3 Series" className={`${inputClass} mt-2`} />
              </label>

              <label className="text-luxe-body text-sm">
                Vehicle registration
                <input name="registration" value={form.registration} onChange={updateField} autoCapitalize="characters" className={`${inputClass} mt-2 uppercase`} />
              </label>

              <label className="text-luxe-body text-sm">
                Service postcode *
                <input name="postcode" value={form.postcode} onChange={updateField} required autoComplete="postal-code" className={`${inputClass} mt-2 uppercase`} />
              </label>

              <label className="text-luxe-body text-sm">
                Preferred date *
                <input name="preferredDate" type="date" min={minimumDate} value={form.preferredDate} onChange={updateField} required className={`${inputClass} mt-2`} />
              </label>

              <label className="text-luxe-body text-sm">
                Preferred time *
                <select name="preferredTime" value={form.preferredTime} onChange={updateField} required className={`${inputClass} mt-2`}>
                  <option value="">Choose a time window</option>
                  <option>Morning</option>
                  <option>Afternoon</option>
                  <option>Flexible</option>
                </select>
              </label>

              <label className="md:col-span-2 text-luxe-body text-sm">
                Service location *
                <select name="serviceLocation" value={form.serviceLocation} onChange={updateField} required className={`${inputClass} mt-2`}>
                  <option>Mobile service at my address</option>
                  <option>Please advise</option>
                </select>
              </label>

              <label className="md:col-span-2 text-luxe-body text-sm">
                Vehicle condition or other notes
                <textarea name="notes" value={form.notes} onChange={updateField} rows="4" placeholder="Tell us about pet hair, stains, vehicle size or access to water/electricity." className={`${inputClass} mt-2 resize-y`} />
              </label>
            </div>

            <label className="text-luxe-body mt-6 flex items-start gap-3 text-sm leading-6">
              <input name="consent" type="checkbox" checked={form.consent} onChange={updateField} required className="mt-1 h-4 w-4 accent-[#D4AF37]" />
              <span>
                I agree that my details will be used to respond to this booking request. I understand this is not a confirmed appointment until Ramz DETAILZ replies and the £10 deposit is paid. *
              </span>
            </label>

            <button
              type={isReady ? 'submit' : 'button'}
              disabled={!isReady}
              className="btn-gold mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 disabled:cursor-wait disabled:opacity-60"
            >
              <Send size={18} aria-hidden="true" />
              Send Request on WhatsApp
            </button>

            {bookingLink && (
              <div role="status" className="mt-5 flex items-start gap-3 rounded-lg border border-green-500/30 bg-green-500/10 p-4">
                <CheckCircle2 className="mt-0.5 shrink-0 text-green-400" size={20} aria-hidden="true" />
                <p className="text-luxe-body text-sm">
                  Your request is ready. If WhatsApp did not open,{' '}
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="text-gold underline">
                    continue to WhatsApp
                  </a>
                  .
                </p>
              </div>
            )}

            <p className="text-luxe-muted mt-5 text-center text-xs">
              Prefer email? Contact <a className="text-gold underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>. View{' '}
              <a className="text-gold underline" href={pageUrl('pricing')}>detailing prices</a> before requesting.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
