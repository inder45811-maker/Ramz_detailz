import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import sharp from 'sharp'

const publicDirectory = join(process.cwd(), 'public')
const sourcePath = join(publicDirectory, 'hero-logo.png')
const source = await readFile(sourcePath)

await Promise.all([
  sharp(source)
    .resize(900, 900, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 55, effort: 6 })
    .toFile(join(publicDirectory, 'hero-logo.webp')),
  sharp(source)
    .resize(96, 96, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 65, effort: 6 })
    .toFile(join(publicDirectory, 'hero-logo-small.webp')),
  sharp(source)
    .resize(384, 384, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 65, effort: 6 })
    .toFile(join(publicDirectory, 'hero-logo-medium.webp')),
])

const socialCopy = Buffer.from(`
  <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="630" fill="#000000"/>
    <rect x="24" y="24" width="1152" height="582" rx="24" fill="none" stroke="#D4AF37" stroke-opacity="0.5" stroke-width="2"/>
    <text x="690" y="255" fill="#D4AF37" font-family="Georgia, serif" font-size="66" font-weight="700" text-anchor="middle">Ramz DETAILZ</text>
    <text x="690" y="325" fill="#E8DCC0" font-family="Arial, sans-serif" font-size="30" text-anchor="middle">Car Detailing &amp; Mobile Valeting</text>
    <text x="690" y="375" fill="#D4AF37" font-family="Arial, sans-serif" font-size="26" font-weight="700" text-anchor="middle">COVENTRY, UK</text>
  </svg>
`)

const socialLogo = await sharp(source)
  .resize(460, 460, { fit: 'inside', withoutEnlargement: true })
  .png()
  .toBuffer()

await sharp({
  create: {
    width: 1200,
    height: 630,
    channels: 3,
    background: '#000000',
  },
})
  .composite([
    { input: socialCopy, left: 0, top: 0 },
    { input: socialLogo, left: 60, top: 85 },
  ])
  .jpeg({ quality: 86, chromaSubsampling: '4:4:4', mozjpeg: true })
  .toFile(join(publicDirectory, 'og-ramz-detailz.jpg'))

console.log('Generated optimized hero logo variants and 1200×630 social preview image.')
