import type { ReactNode } from 'react'

import Navbar from '../navigation/Navbar'
import Footer from '../footer/Footer'
import ScrollToTop from '../ui/ScrollToTop'
import CustomCursor from '../ui/CustomCursor'

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <div>
        {children}
      </div>

      <Footer />

      <ScrollToTop />
      <CustomCursor />
    </div>
  )
}

export default Layout