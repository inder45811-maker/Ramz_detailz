import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Booking', href: '#booking' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <nav
        className={[
          'fixed top-0 left-0 right-0 z-50 bg-black transition-all duration-300',
          scrolled ? 'backdrop-blur-md border-b border-gold/40' : 'border-b border-transparent',
        ].join(' ')}
      >
        <div
          className="mx-auto flex items-center justify-between px-6 py-4 md:px-12 md:py-5"
          style={{ maxWidth: '1400px' }}
        >
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center"
            aria-label="Ramz Detailz — Home"
          >
            <img 
              src={`${import.meta.env.BASE_URL}hero-logo.png`}
              alt="Ramz Detailz Logo" 
              className="h-10 w-auto object-contain blend-logo"
            />
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="relative text-gold-metallic text-sm font-medium tracking-wide
                    after:content-[''] after:absolute after:left-0 after:bottom-[-2px]
                    after:h-[1px] after:w-full after:bg-gold
                    after:scale-x-0 after:origin-left
                    after:transition-transform after:duration-300
                    hover:after:scale-x-100 hover:text-gold
                    transition-colors duration-200"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8 focus:outline-none"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span
              className={[
                'block h-[2px] w-6 bg-gold transition-all duration-300 origin-center',
                menuOpen ? 'rotate-45 translate-y-[7px]' : '',
              ].join(' ')}
            />
            <span
              className={[
                'block h-[2px] w-6 bg-gold transition-all duration-300',
                menuOpen ? 'opacity-0 scale-x-0' : '',
              ].join(' ')}
            />
            <span
              className={[
                'block h-[2px] w-6 bg-gold transition-all duration-300 origin-center',
                menuOpen ? '-rotate-45 -translate-y-[7px]' : '',
              ].join(' ')}
            />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      <div
        className={[
          'fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-10',
          'transition-all duration-400 md:hidden',
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        ].join(' ')}
        aria-hidden={!menuOpen}
      >
        {/* Subtle gold top accent */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />

        <ul className="flex flex-col items-center gap-8 list-none m-0 p-0">
          {NAV_LINKS.map(({ label, href }, i) => (
            <li
              key={label}
              style={{
                transitionDelay: menuOpen ? `${i * 60 + 80}ms` : '0ms',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.35s ease, transform 0.35s ease',
              }}
            >
              <a
                href={href}
                onClick={handleLinkClick}
                className="text-gold hover:text-gold-metallic transition-colors duration-200"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '2.5rem',
                  letterSpacing: '0.15em',
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Bottom Logo */}
        <div className="absolute bottom-10 flex flex-col items-center opacity-30 select-none">
          <img 
            src={`${import.meta.env.BASE_URL}hero-logo.png`}
            alt="Ramz Detailz Logo" 
            className="h-16 w-auto object-contain blend-logo"
          />
        </div>
      </div>
    </>
  )
}


