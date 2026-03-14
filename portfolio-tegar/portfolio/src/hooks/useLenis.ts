import { useEffect, useRef } from 'react'

export function useLenis() {
  const lenisRef = useRef<any>(null)

  useEffect(() => {
    let lenis: any = null

    const init = async () => {
      const { default: Lenis } = await import('lenis')
      lenis = new Lenis({
        duration: 1.4,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
      })

      lenisRef.current = lenis

      function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
    }

    init()

    return () => {
      if (lenis) lenis.destroy()
    }
  }, [])

  return lenisRef
}
