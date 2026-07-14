import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const dist = join(process.cwd(), 'dist')
const siteRoot = 'https://inder45811-maker.github.io/Ramz_detailz/'
const routes = [
  { name: 'home', file: 'index.html', canonical: siteRoot, indexable: true },
  { name: 'services', file: 'services/index.html', canonical: `${siteRoot}services/`, indexable: true },
  { name: 'pricing', file: 'pricing/index.html', canonical: `${siteRoot}pricing/`, indexable: true },
  { name: 'gallery', file: 'gallery/index.html', canonical: `${siteRoot}gallery/`, indexable: false },
  { name: 'booking', file: 'booking/index.html', canonical: `${siteRoot}booking/`, indexable: true },
  { name: 'contact', file: 'contact/index.html', canonical: `${siteRoot}contact/`, indexable: true },
]

const failures = []
const titles = new Set()
const checkedInternalTargets = new Set()

function expect(condition, message) {
  if (!condition) failures.push(message)
}

for (const route of routes) {
  const path = join(dist, route.file)
  expect(existsSync(path), `${route.name}: missing ${route.file}`)
  if (!existsSync(path)) continue

  const html = readFileSync(path, 'utf8')
  const title = html.match(/<title>(.*?)<\/title>/)?.[1]
  expect(Boolean(title), `${route.name}: missing title`)
  expect(title && !titles.has(title), `${route.name}: title is not unique`)
  if (title) titles.add(title)
  expect(/<meta name="description" content="[^"]{60,170}"/.test(html), `${route.name}: missing or poorly sized description`)
  expect(html.includes('<meta name="author" content="Ramz DETAILZ"'), `${route.name}: missing author entity metadata`)
  expect(html.includes(`<link rel="canonical" href="${route.canonical}"`), `${route.name}: incorrect canonical`)
  const headings = html.match(/<h1(?:\s[^>]*)?>[\s\S]*?<\/h1>/g) ?? []
  expect(headings.length === 1, `${route.name}: expected exactly one H1, found ${headings.length}`)
  const jsonLd = html.match(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/)?.[1]
  expect(Boolean(jsonLd), `${route.name}: missing JSON-LD`)
  if (jsonLd) {
    try {
      JSON.parse(jsonLd)
    } catch {
      failures.push(`${route.name}: invalid JSON-LD`)
    }
    expect(jsonLd.includes('"dateModified":"2026-07-14"'), `${route.name}: missing reviewed date in JSON-LD`)
    expect(!jsonLd.includes('https://schema.org/InStock'), `${route.name}: appointment services must not be marked InStock`)
    expect(!jsonLd.includes('"@type":"FAQPage"'), `${route.name}: unsupported FAQPage markup should not be used`)
  }
  expect(html.includes('property="og:url"'), `${route.name}: missing Open Graph URL`)
  expect(html.includes('name="twitter:card"'), `${route.name}: missing Twitter card metadata`)
  expect(
    route.indexable ? html.includes('name="robots" content="index,follow') : html.includes('name="robots" content="noindex,follow"'),
    `${route.name}: incorrect robots directive`,
  )
  expect(!/href="#(?:services|pricing|gallery|booking|contact)"/.test(html), `${route.name}: old hash navigation remains`)

  for (const match of html.matchAll(/(?:href|src|component-url|renderer-url)="([^"]+)"/g)) {
    const value = match[1].split('#')[0].split('?')[0]
    if (!value.startsWith('/Ramz_detailz/')) continue
    const relative = decodeURIComponent(value.slice('/Ramz_detailz/'.length))
    const target = !relative
      ? join(dist, 'index.html')
      : value.endsWith('/')
        ? join(dist, relative, 'index.html')
        : join(dist, relative)
    if (checkedInternalTargets.has(target)) continue
    checkedInternalTargets.add(target)
    expect(existsSync(target), `${route.name}: broken internal target ${value}`)
  }
}

expect(existsSync(join(dist, '404.html')), 'missing 404.html')
expect(existsSync(join(dist, 'favicon.svg')), 'missing favicon.svg')
expect(existsSync(join(dist, 'og-ramz-detailz.jpg')), 'missing 1200×630 social preview image')
expect(existsSync(join(dist, 'hero-logo.webp')), 'missing optimized hero logo')
expect(existsSync(join(dist, 'robots.txt')), 'missing robots.txt')
expect(existsSync(join(dist, 'sitemap-index.xml')), 'missing sitemap-index.xml')
expect(existsSync(join(dist, 'sitemap-0.xml')), 'missing sitemap-0.xml')

if (existsSync(join(dist, '404.html'))) {
  const notFound = readFileSync(join(dist, '404.html'), 'utf8')
  expect(notFound.includes('name="robots" content="noindex,follow"'), '404: missing noindex directive')
  expect(/<h1(?:\s[^>]*)?>[\s\S]*?<\/h1>/.test(notFound), '404: missing H1')
}

if (existsSync(join(dist, 'booking/index.html'))) {
  const booking = readFileSync(join(dist, 'booking/index.html'), 'utf8')
  expect(booking.includes('The structured request form needs JavaScript'), 'booking: missing non-JavaScript fallback')
  expect(/<form class="hidden [^"]+"/.test(booking), 'booking: form must remain hidden until hydrated')
  expect(/<button type="button" disabled=""/.test(booking), 'booking: submit must remain disabled until hydrated')
}

const answerReadyContent = [
  ['index.html', 'COVENTRY DETAILING AT A GLANCE'],
  ['services/index.html', 'Compare Coventry Detailing Packages'],
  ['services/index.html', 'Car Detailing Services: Questions Answered'],
  ['pricing/index.html', 'Car Detailing Pricing: Questions Answered'],
  ['booking/index.html', 'Booking a Detail: Questions Answered'],
  ['contact/index.html', 'Contact and Coverage: Questions Answered'],
]

for (const [file, text] of answerReadyContent) {
  if (!existsSync(join(dist, file))) continue
  expect(readFileSync(join(dist, file), 'utf8').includes(text), `${file}: missing answer-ready GEO content`)
}

if (existsSync(join(dist, 'sitemap-0.xml'))) {
  const sitemap = readFileSync(join(dist, 'sitemap-0.xml'), 'utf8')
  for (const route of routes.filter((item) => item.indexable)) {
    expect(sitemap.includes(`<loc>${route.canonical}</loc>`), `sitemap: missing ${route.name}`)
  }
  expect((sitemap.match(/<lastmod>2026-07-14T00:00:00\.000Z<\/lastmod>/g) ?? []).length === routes.filter((item) => item.indexable).length, 'sitemap: missing accurate reviewed dates')
  expect(!sitemap.includes(`${siteRoot}gallery/`), 'sitemap: noindex gallery must be excluded')
}

if (failures.length) {
  console.error(`Build validation failed (${failures.length}):`)
  for (const failure of failures) console.error(`- ${failure}`)
  process.exit(1)
}

console.log(`Validated ${routes.length} static pages, metadata, canonicals, robots directives and sitemap entries.`)
