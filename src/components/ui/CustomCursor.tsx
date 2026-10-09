import { useEffect, useRef } from 'react'

function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const isEnabled =
    typeof window !== 'undefined' &&
    window.matchMedia('(pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor || !isEnabled) return

    let frame = 0
    let x = 0
    let y = 0

    const handlePointerMove = (event: PointerEvent) => {
      x = event.clientX
      y = event.clientY
      cursor.classList.add('is-visible')

      if (!frame) {
        frame = window.requestAnimationFrame(() => {
          cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
          frame = 0
        })
      }
    }
    const handlePointerOver = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target : null
      const customTarget = target?.closest<HTMLElement>('[data-cursor]')
      const isControl = Boolean(target?.closest('a, button'))
      const label = customTarget?.dataset.cursor ?? (isControl ? 'OPEN' : '')
      const labelNode = cursor.querySelector<HTMLElement>('.cursor-aura__label')

      cursor.dataset.mode = label
      cursor.classList.toggle('is-labeled', Boolean(label))
      cursor.classList.toggle('is-over-control', isControl)
      cursor.classList.toggle('is-dragging', label === 'DRAG')
      if (labelNode) labelNode.textContent = label
    }
    const handlePointerOut = (event: PointerEvent) => {
      if (!event.relatedTarget) cursor.classList.remove('is-visible')
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    document.addEventListener('pointerover', handlePointerOver)
    document.addEventListener('pointerout', handlePointerOut)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      document.removeEventListener('pointerover', handlePointerOver)
      document.removeEventListener('pointerout', handlePointerOut)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [isEnabled])

  if (!isEnabled) return null

  return (
    <div ref={cursorRef} className="cursor-aura" aria-hidden="true">
      <span className="cursor-aura__label" />
    </div>
  )
}

export default CustomCursor