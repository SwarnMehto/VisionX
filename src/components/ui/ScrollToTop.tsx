import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="
        fixed bottom-6 right-6 z-[60]
        flex h-12 w-12 items-center justify-center
        rounded-full
        border border-white/15
        bg-white
        text-black
        shadow-2xl
        transition-all duration-300
        hover:scale-110
        hover:bg-white/90
        md:bottom-8 md:right-8
      "
    >
      <ArrowUp
        size={18}
        strokeWidth={2}
      />
    </button>
  )
}

export default ScrollToTop