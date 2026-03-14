import { Suspense } from 'react'
import Scene from './components/Scene'
import Overlay from './components/Overlay'
import { useScrollState } from './hooks/useScrollState'
import { useLenis } from './hooks/useLenis'

const NUM_SECTIONS = 4

function LoadingFallback() {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: '#000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Space Mono, monospace',
      fontSize: '12px',
      letterSpacing: '4px',
      color: '#e8ff00',
    }}>
      LOADING_SYSTEM...
    </div>
  )
}

export default function App() {
  // Initialize smooth scrolling
  useLenis()

  // Track scroll state across components
  const scrollState = useScrollState(NUM_SECTIONS)

  return (
    <div style={{ background: '#000', minHeight: `${NUM_SECTIONS * 100}vh` }}>
      <Suspense fallback={<LoadingFallback />}>
        {/* Fixed 3D Canvas */}
        <Scene scrollState={scrollState} />

        {/* Scrollable text overlay */}
        <Overlay scrollState={scrollState} />
      </Suspense>
    </div>
  )
}
