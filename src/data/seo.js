import {
  BUSINESS_NAME,
  CONTENT_LAST_REVIEWED,
  EMAIL,
  INSTAGRAM_URL,
  PHONE_HREF,
  SITE_URL,
  absolutePageUrl,
} from '../site'

export const organisationSchema = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organisation`,
  name: BUSINESS_NAME,
  description: 'Appointment-based car detailing and mobile valeting in Coventry, including maintenance, deep-cleaning and exterior-enhancement packages.',
  slogan: 'Attention to detail.',
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/hero-logo-medium.webp`,
  image: `${SITE_URL}/og-ramz-detailz.jpg`,
  email: EMAIL,
  telephone: PHONE_HREF,
  sameAs: [INSTAGRAM_URL],
  knowsAbout: [
    'Car detailing',
    'Mobile valeting',
    'Vehicle interior cleaning',
    'Vehicle exterior care',
    'Paint decontamination',
    'Machine polishing',
  ],
  areaServed: {
    '@type': 'City',
    name: 'Coventry',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'bookings',
    telephone: PHONE_HREF,
    email: EMAIL,
    areaServed: {
      '@type': 'City',
      name: 'Coventry',
    },
    availableLanguage: 'English',
  },
  hasOfferCatalog: { '@id': `${absolutePageUrl('pricing')}#offer-catalog` },
}

const schemaSlug = (value) => value.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

export const serviceSchemas = [
  ['Interior Maintenance Clean', 'Interior vacuuming, surfaces, glass, door shuts and boot cleaning in Coventry.'],
  ['Full Interior Deep Clean', 'Upholstery shampoo, extraction, steam cleaning and leather care for vehicles in Coventry.'],
  ['3 Stage Exterior Maintenance Wash', 'Safe pre-wash, snow foam and contact wash with wheel, tyre and glass care.'],
  ['Full Exterior Package', 'Exterior maintenance wash, clay-bar decontamination and a stage-one machine polish.'],
  ['Mini Valet In & Out', 'Combined maintenance interior clean and exterior wash.'],
].map(([name, description]) => ({
  '@type': 'Service',
  '@id': `${absolutePageUrl('services')}#service-${schemaSlug(name)}`,
  name,
  serviceType: name,
  description,
  provider: { '@id': `${SITE_URL}/#organisation` },
  areaServed: { '@type': 'City', name: 'Coventry' },
  url: absolutePageUrl('services'),
}))

export const offerCatalogSchema = {
  '@type': 'OfferCatalog',
  '@id': `${absolutePageUrl('pricing')}#offer-catalog`,
  name: 'Car detailing and valeting prices',
  url: absolutePageUrl('pricing'),
  itemListElement: [
    ['3 Stage Exterior Maintenance Wash', '20'],
    ['Interior Maintenance Clean', '30'],
    ['Mini Valet In & Out', '45'],
    ['Full Interior Deep Clean', '100'],
    ['Full Exterior Package', '100'],
    ['Both Full Packages Combined', '180'],
    ['Engine Bay', '25'],
  ].map(([name, price]) => ({
    '@type': 'Offer',
    '@id': `${absolutePageUrl('pricing')}#offer-${schemaSlug(name)}`,
    price,
    priceCurrency: 'GBP',
    url: absolutePageUrl('pricing'),
    itemOffered: {
      '@type': 'Service',
      '@id': `${absolutePageUrl('services')}#service-${schemaSlug(name)}`,
      name,
      serviceType: name,
      provider: { '@id': `${SITE_URL}/#organisation` },
      areaServed: { '@type': 'City', name: 'Coventry' },
    },
  })),
}

/**
 * @param {{
 *   title: string,
 *   description: string,
 *   page?: string,
 *   additional?: Record<string, unknown>[],
 * }} options
 */
export function createPageSchema({ title, description, page = 'home', additional = [] }) {
  const url = absolutePageUrl(page)
  const graph = [
    organisationSchema,
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: BUSINESS_NAME,
      publisher: { '@id': `${SITE_URL}/#organisation` },
      inLanguage: 'en-GB',
    },
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: title,
      description,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organisation` },
      inLanguage: 'en-GB',
      dateModified: CONTENT_LAST_REVIEWED,
    },
    ...additional,
  ]

  if (page !== 'home') {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: absolutePageUrl('home') },
        { '@type': 'ListItem', position: 2, name: title.split('|')[0].trim(), item: url },
      ],
    })
  }

  return { '@context': 'https://schema.org', '@graph': graph }
}
