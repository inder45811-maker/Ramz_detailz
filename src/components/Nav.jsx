import { useState, useEffect, useRef } from 'react'

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
  const menuButtonRef = useRef(null)
  const menuRef = useRef(null)
  const firstMenuLinkRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Do not leave the page scroll-locked if the viewport changes to desktop.
  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 768px)')
    const handleViewportChange = ({ matches }) => {
      if (matches) setMenuOpen(false)
    }

    desktopQuery.addEventListener('change', handleViewportChange)
    return () => desktopQuery.removeEventListener('change', handleViewportChange)
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

  // Treat the full-screen mobile menu as a modal: move focus into it,
  // keep keyboard focus inside it, and support Escape to close.
  useEffect(() => {
    if (!menuOpen) return

    firstMenuLinkRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setMenuOpen(false)
        menuButtonRef.current?.focus()
        return
      }

      if (event.key !== 'Tab') return

      const menuLinks = Array.from(menuRef.current?.querySelectorAll('a[href]') ?? [])
      const focusableElements = [menuButtonRef.current, ...menuLinks].filter(Boolean)
      const firstElement = focusableElements[0]
      const lastElement = focusableElements.at(-1)

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement?.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <nav
        className={[
          'fixed top-0 left-0 right-0 z-50 bg-black transition-all duration-300 ease-out-soft',
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
            onClick={handleLinkClick}
            className="flex items-center"
            aria-label="Ramz Detailz — Home"
          >
            <img
              src={`${import.meta.env.BASE_URL}hero-logo.png`}
              alt="Ramz Detailz Logo"
              width="160"
              height="40"
              loading="eager"
              decoding="async"
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

          {/* Hamburger — mobile only (44px tap target, focus-visible) */}
          <button
            ref={menuButtonRef}
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-11 h-11"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
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
        ref={menuRef}
        id="mobile-navigation"
        className={[
          'fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-10',
          'md:hidden',
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        ].join(' ')}
        style={{ transition: 'opacity 400ms cubic-bezier(0.16, 1, 0.3, 1)' }}
        aria-hidden={!menuOpen}
        aria-modal={menuOpen ? 'true' : undefined}
        role={menuOpen ? 'dialog' : undefined}
        inert={menuOpen ? undefined : ''}
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
                transition: 'opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <a
                ref={i === 0 ? firstMenuLinkRef : undefined}
                href={href}
                onClick={handleLinkClick}
                tabIndex={menuOpen ? 0 : -1}
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
            alt=""
            width="200"
            height="64"
            loading="lazy"
            decoding="async"
            className="h-16 w-auto object-contain blend-logo"
          />
        </div>
      </div>
    </>
  )
}
