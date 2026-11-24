import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Exploring', 'exploring'],
  ['Leadership', 'leadership'],
  ['Projects', 'projects'],
  ['Education', 'education'],
  ['Certifications', 'certifications'],
  ['Contact', 'contact'],
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Detect page scrolling
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    onScroll()

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  // Manage mobile menu body class
  useEffect(() => {
    document.body.classList.toggle('menu-open', open)

    return () => {
      document.body.classList.remove('menu-open')
    }
  }, [open])

  // Close mobile menu using Escape key
  useEffect(() => {
    if (!open) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  // Close menu after selecting a navigation link
  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <nav
      className={scrolled ? 'navbar scrolled' : 'navbar'}
      aria-label="Primary navigation"
    >

      {/* BRAND */}

      <a
        className="brand"
        href="#home"
        aria-label="Go to home"
        onClick={handleLinkClick}
      >
        <span>MD</span>
        <b>MALSHI DEWMINI</b>
      </a>

      {/* MOBILE MENU BUTTON */}

      <button
        className="menu-toggle"
        type="button"
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={open}
        aria-controls="primary-menu"
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* NAVIGATION LINKS */}

      <div
        id="primary-menu"
        className={open ? 'nav-links open' : 'nav-links'}
      >
        {links.map(([label, id]) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={handleLinkClick}
          >
            {label}
          </a>
        ))}

        {/* CONTACT BUTTON */}

        <a
          className="nav-cta"
          href="#contact"
          onClick={handleLinkClick}
        >
          Let's talk
        </a>
      </div>
    </nav>
  )
}