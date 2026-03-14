import { useState, useEffect, useRef, useCallback } from 'react'

export interface ScrollState {
  scrollY: number
  scrollProgress: number // 0-1 overall
  sectionProgress: number[] // per-section 0-1
  activeSection: number
  velocity: number
}

export function useScrollState(numSections: number): ScrollState {
  const [state, setState] = useState<ScrollState>({
    scrollY: 0,
    scrollProgress: 0,
    sectionProgress: Array(numSections).fill(0),
    activeSection: 0,
    velocity: 0,
  })

  const lastScrollY = useRef(0)
  const rafId = useRef<number>()

  const update = useCallback(() => {
    const scrollY = window.scrollY
    const maxScroll = document.body.scrollHeight - window.innerHeight
    const scrollProgress = maxScroll > 0 ? scrollY / maxScroll : 0
    const velocity = scrollY - lastScrollY.current
    lastScrollY.current = scrollY

    const sectionHeight = maxScroll / numSections
    const sectionProgress = Array.from({ length: numSections }, (_, i) => {
      const start = i * sectionHeight
      const end = (i + 1) * sectionHeight
      return Math.max(0, Math.min(1, (scrollY - start) / (end - start)))
    })

    const activeSection = Math.min(
      Math.floor(scrollY / sectionHeight),
      numSections - 1
    )

    setState({ scrollY, scrollProgress, sectionProgress, activeSection, velocity })
  }, [numSections])

  useEffect(() => {
    const onScroll = () => {
      if (rafId.current) cancelAnimationFrame(rafId.current)
      rafId.current = requestAnimationFrame(update)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [update])

  return state
}
