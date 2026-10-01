import type { ReactNode } from 'react'

import Navbar from '../navigation/Navbar'
import Footer from '../footer/Footer'

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <main>{children}</main>

      <Footer />
    </div>
  )
}

export default Layout