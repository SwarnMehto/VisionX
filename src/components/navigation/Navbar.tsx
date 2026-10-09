import { useEffect, useState } from 'react'
import { Menu, ArrowUpRight, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Industries', href: '/industries' },
  { label: 'Insights', href: '/insights' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const location = useLocation()

  useEffect(() => {
    let previousY = window.scrollY
    let frame = 0

    const updateVisibility = () => {
      const currentY = window.scrollY

      if (Math.abs(currentY - previousY) > 6) {
        setHidden(currentY > previousY && currentY > 140 && !menuOpen)
        previousY = currentY
      }

      frame = 0
    }

    const handleScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateVisibility)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [menuOpen])

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-transform duration-500"
      style={{ transform: hidden ? 'translateY(-120%)' : 'translateY(0)' }}
    >
      <div className="mx-auto mt-4 w-[calc(100%-28px)] max-w-7xl">
        <nav aria-label="Main navigation" className="glass flex h-16 items-center justify-between rounded-full border border-white/10 px-5 md:px-7">

          {/* Logo */}
          <Link
            to="/"
            className="group flex shrink-0 items-center gap-2"
            onClick={() => setMenuOpen(false)}
            aria-label="Vision X Home"
          >
            <span className="text-lg font-semibold tracking-[-0.04em] text-white">
              VISION X
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-white transition-transform duration-300 group-hover:scale-150" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                aria-current={location.pathname === item.href || location.pathname.startsWith(`${item.href}/`) ? 'page' : undefined}
                className={`text-sm font-medium transition-colors duration-300 hover:text-white ${location.pathname === item.href || location.pathname.startsWith(`${item.href}/`) ? 'text-white' : 'text-white/60'}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            to="/contact"
            className="group hidden shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.04] hover:bg-white/90 md:flex"
          >
            <span className="text-black">
              Start a Project
            </span>

            <ArrowUpRight
              size={15}
              className="text-black transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 md:hidden"
          >
            {menuOpen ? (
              <X size={19} />
            ) : (
              <Menu size={19} />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div id="mobile-navigation" className="glass mt-2 overflow-hidden rounded-3xl border border-white/10 p-3 md:hidden">

            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                aria-current={location.pathname === item.href || location.pathname.startsWith(`${item.href}/`) ? 'page' : undefined}
                onClick={() => setMenuOpen(false)}
                className="block rounded-2xl px-4 py-3.5 text-white/70 transition-all hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 flex items-center justify-between rounded-2xl bg-white px-4 py-3.5 text-sm font-semibold text-black transition-transform duration-300 hover:scale-[1.01]"
            >
              <span className="text-black">
                Start a Project
              </span>

              <ArrowUpRight
                size={16}
                className="text-black"
              />
            </Link>

          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar