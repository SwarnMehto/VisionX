import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

const links = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Industries', href: '/industries' },
  { label: 'Insights', href: '/insights' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-[#050505] lg:hidden"
        >
          <div className="flex h-full flex-col px-6 pb-8 pt-28">

            <nav className="flex flex-col">
              {links.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.06,
                    duration: 0.4,
                  }}
                >
                  <Link
                    to={link.href}
                    onClick={onClose}
                    className="flex items-center justify-between border-b border-white/10 py-5 text-3xl font-medium tracking-tight"
                  >
                    {link.label}

                    <span className="text-white/30">
                      ↗
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto">
              <Link
                to="/contact"
                onClick={onClose}
                className="flex items-center justify-between rounded-2xl bg-white px-6 py-5 text-lg font-medium text-black"
              >
                Start a Project

                <ArrowUpRight size={21} />
              </Link>

              <p className="mt-6 text-xs uppercase tracking-[0.25em] text-white/30">
                Vision X — Digital Growth & Creative Technology
              </p>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MobileMenu