export const SITE_ORIGIN = 'https://inder45811-maker.github.io'
export const BASE_PATH = import.meta.env?.BASE_URL ?? '/Ramz_detailz/'
export const SITE_URL = `${SITE_ORIGIN}${BASE_PATH.replace(/\/$/, '')}`

export const BUSINESS_NAME = 'Ramz DETAILZ'
export const EMAIL = 'ramzdetailz@outlook.com'
export const INSTAGRAM_URL = 'https://instagram.com/ramz_detailz'
export const WA_NUMBER = '447462760067'
export const PHONE_DISPLAY = '07462 760067'
export const PHONE_HREF = '+447462760067'
export const CONTENT_LAST_REVIEWED = '2026-07-14'
export const CONTENT_LAST_REVIEWED_DISPLAY = '14 July 2026'

// Configure this public URL with PUBLIC_SQUARE_BOOKING_URL locally or as a
// GitHub Actions repository variable. Never add private Square credentials.
export const SQUARE_BOOKING_URL = (import.meta.env.PUBLIC_SQUARE_BOOKING_URL ?? '').trim()

export const PAGE_PATHS = {
  home: '',
  services: 'services/',
  pricing: 'pricing/',
  gallery: 'gallery/',
  booking: 'booking/',
  contact: 'contact/',
}

export const pageUrl = (page = 'home') => `${BASE_PATH}${PAGE_PATHS[page] ?? ''}`

export const absolutePageUrl = (page = 'home') => `${SITE_ORIGIN}${pageUrl(page)}`

export const waLink = (message) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`

export const BOOKING_SERVICES = [
  { value: '3 Stage Exterior Maintenance Wash — £20', label: '3 Stage Exterior Maintenance Wash — £20' },
  { value: 'Interior Maintenance Clean — £30', label: 'Interior Maintenance Clean — £30' },
  { value: 'Mini Valet In & Out — £45', label: 'Mini Valet In & Out — £45' },
  { value: 'Full Interior Deep Clean — £100', label: 'Full Interior Deep Clean — £100' },
  { value: 'Full Exterior Package — £100', label: 'Full Exterior Package — £100' },
  { value: 'Both Full Packages Combined — £180', label: 'Both Full Packages Combined — £180' },
  { value: 'Engine Bay — £25', label: 'Engine Bay — £25' },
  { value: 'Exhaust Polish — quote required', label: 'Exhaust Polish — quote required' },
  { value: 'Pet Hair Removal — quote required', label: 'Pet Hair Removal — quote required' },
]
