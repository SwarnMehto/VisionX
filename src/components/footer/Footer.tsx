import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">

        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">

          <div>
            <p className="text-2xl font-semibold tracking-[-0.04em]">
              VISION X<span className="text-white/40">.</span>
            </p>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/45">
              Digital experiences, intelligent marketing and creative
              technology built for ambitious brands.
            </p>
          </div>

          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-white/35">
              Explore
            </p>

            <div className="space-y-3 text-sm text-white/55">
              <Link className="block hover:text-white" to="/services">
                Services
              </Link>

              <Link className="block hover:text-white" to="/work">
                Work
              </Link>

              <Link className="block hover:text-white" to="/industries">
                Industries
              </Link>

              <Link className="block hover:text-white" to="/insights">
                Insights
              </Link>
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-white/35">
              Connect
            </p>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 text-sm text-white/65 hover:text-white"
            >
              Start a Project
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/30 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Vision X. All rights reserved.</p>
          <p>Digital Growth • Creative Technology</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer