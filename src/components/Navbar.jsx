import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Exploring', 'exploring'],
  ['Vision', 'leadership'],
  ['Projects', 'projects'],
  ['Education', 'education'],
  ['Contact', 'contact'],
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  return (
    <nav className={scrolled ? 'navbar scrolled' : 'navbar'} aria-label="Primary navigation">
      <a className="brand" href="#home" aria-label="Go to home" onClick={() => setOpen(false)}>
        <span>MD</span><b>MALSHI DEWMINI</b>
      </a>
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
      <div id="primary-menu" className={open ? 'nav-links open' : 'nav-links'}>
        {links.map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let&apos;s talk</a>
      </div>
    </nav>
  )
}
