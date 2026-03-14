import { useRef, useMemo, useFrame } from '@react-three/fiber'
import { Canvas, useThree } from '@react-three/fiber'
import { Float, Wireframe } from '@react-three/drei'
import * as THREE from 'three'
import { ScrollState } from '../hooks/useScrollState'

// ─── Abstract Tech Core (main object) ────────────────────────────────────────
function TechCore({ scrollProgress }: { scrollProgress: number }) {
  const groupRef = useRef<THREE.Group>(null)
  const meshRef = useRef<THREE.Mesh>(null)
  const innerRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (!groupRef.current || !meshRef.current || !innerRef.current) return

    // Rotate based on scroll + time
    groupRef.current.rotation.y = t * 0.12 + scrollProgress * Math.PI * 2
    groupRef.current.rotation.x = Math.sin(t * 0.08) * 0.3 + scrollProgress * 0.5
    groupRef.current.rotation.z = Math.cos(t * 0.06) * 0.15

    // Pulse scale
    const pulse = 1 + Math.sin(t * 1.5) * 0.03
    meshRef.current.scale.setScalar(pulse)

    // Inner mesh counter-rotate
    innerRef.current.rotation.x = -t * 0.2
    innerRef.current.rotation.z = t * 0.15
  })

  return (
    <group ref={groupRef}>
      {/* Outer icosahedron wireframe */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.6, 1]} />
        <meshBasicMaterial color="#e8ff00" wireframe />
      </mesh>

      {/* Inner dodecahedron */}
      <mesh ref={innerRef} scale={0.65}>
        <dodecahedronGeometry args={[1.4, 0]} />
        <meshBasicMaterial color="#ffffff" wireframe opacity={0.3} transparent />
      </mesh>

      {/* Core sphere */}
      <mesh scale={0.25}>
        <sphereGeometry args={[1, 8, 8]} />
        <meshBasicMaterial color="#e8ff00" />
      </mesh>
    </group>
  )
}

// ─── Circuit Breaker Elements ─────────────────────────────────────────────────
function CircuitBreakers({ visible }: { visible: number }) {
  const groupRef = useRef<THREE.Group>(null)

  const positions: [number, number, number][] = useMemo(() => [
    [-3.5, 0.8, 0], [3.2, -0.5, -1], [-2.8, -1.2, 0.5],
    [3.8, 1.2, 0.2], [-4, 0, -0.5], [4.2, 0.3, 0.8],
    [-3, 1.5, -0.3], [2.5, -1.5, 0.6],
  ], [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (!groupRef.current) return
    groupRef.current.children.forEach((child, i) => {
      child.rotation.x = t * (0.3 + i * 0.05)
      child.rotation.y = t * (0.2 + i * 0.07)
      ;(child as THREE.Mesh).scale.setScalar(visible * (0.8 + Math.sin(t * 2 + i) * 0.2))
    })
  })

  return (
    <group ref={groupRef}>
      {positions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <boxGeometry args={[0.12, 0.4, 0.12]} />
          <meshBasicMaterial color={i % 2 === 0 ? '#e8ff00' : '#ff2200'} wireframe />
        </mesh>
      ))}
    </group>
  )
}

// ─── Caching Layer Rings ──────────────────────────────────────────────────────
function CachingRings({ visible }: { visible: number }) {
  const ringsRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (!ringsRef.current) return
    ringsRef.current.children.forEach((child, i) => {
      child.rotation.z = t * (0.1 + i * 0.05) * (i % 2 === 0 ? 1 : -1)
      child.rotation.x = Math.PI / 2 + Math.sin(t * 0.3 + i) * 0.2
      ;(child as THREE.Mesh).scale.setScalar(visible)
    })
  })

  return (
    <group ref={ringsRef}>
      {[2.2, 2.8, 3.4].map((radius, i) => (
        <mesh key={i}>
          <torusGeometry args={[radius, 0.015, 4, 80]} />
          <meshBasicMaterial
            color={i === 0 ? '#e8ff00' : i === 1 ? '#888888' : '#333333'}
            transparent
            opacity={0.6 - i * 0.1}
          />
        </mesh>
      ))}
    </group>
  )
}

// ─── Particle Field ───────────────────────────────────────────────────────────
function ParticleField({ scrollProgress }: { scrollProgress: number }) {
  const pointsRef = useRef<THREE.Points>(null)

  const { positions, speeds } = useMemo(() => {
    const count = 300
    const positions = new Float32Array(count * 3)
    const speeds = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2
      speeds[i] = 0.2 + Math.random() * 0.5
    }
    return { positions, speeds }
  }, [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (!pointsRef.current) return
    const pos = pointsRef.current.geometry.attributes.position.array as Float32Array
    for (let i = 0; i < pos.length / 3; i++) {
      pos[i * 3 + 1] -= speeds[i] * 0.01
      if (pos[i * 3 + 1] < -10) pos[i * 3 + 1] = 10
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true
    pointsRef.current.rotation.y = t * 0.02 + scrollProgress * 0.5
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial color="#333333" size={0.04} sizeAttenuation />
    </points>
  )
}

// ─── Grid Lines ───────────────────────────────────────────────────────────────
function GridLines() {
  return (
    <gridHelper
      args={[40, 40, '#1a1a1a', '#111111']}
      position={[0, -4, 0]}
      rotation={[0, 0, 0]}
    />
  )
}

// ─── Camera Controller ────────────────────────────────────────────────────────
function CameraController({ scrollState }: { scrollState: ScrollState }) {
  const { camera } = useThree()
  const targetPos = useRef(new THREE.Vector3(0, 0, 6))
  const targetLook = useRef(new THREE.Vector3(0, 0, 0))

  useFrame(() => {
    const { scrollProgress, activeSection, sectionProgress } = scrollState

    // Section-based camera choreography
    if (activeSection === 0) {
      // Hero: front view, slight upward
      const p = sectionProgress[0]
      targetPos.current.set(
        Math.sin(p * 0.3) * 0.5,
        0.5 - p * 1,
        6 - p * 0.5
      )
      targetLook.current.set(0, 0, 0)
    } else if (activeSection === 1) {
      // Expertise: orbit left, pull back
      const p = sectionProgress[1]
      const angle = p * Math.PI * 0.6
      targetPos.current.set(
        Math.sin(angle) * 5,
        -0.5 + p * 0.5,
        Math.cos(angle) * 5
      )
      targetLook.current.set(0, 0, 0)
    } else if (activeSection === 2) {
      // Systems: top-down cinematic
      const p = sectionProgress[2]
      targetPos.current.set(
        -Math.sin(p * 0.8) * 3,
        1 + p * 2,
        4 - p * 1.5
      )
      targetLook.current.set(0, -0.5, 0)
    } else {
      // Further sections: wide angle
      targetPos.current.set(0, 2, 8)
      targetLook.current.set(0, 0, 0)
    }

    // Smooth lerp
    camera.position.lerp(targetPos.current, 0.04)

    const lookAt = new THREE.Vector3()
    lookAt.lerpVectors(
      new THREE.Vector3(camera.position.x, camera.position.y, camera.position.z),
      targetLook.current,
      0.04
    )
    camera.lookAt(targetLook.current)
  })

  return null
}

// ─── Scene Content ────────────────────────────────────────────────────────────
function SceneContent({ scrollState }: { scrollState: ScrollState }) {
  const { scrollProgress, activeSection, sectionProgress } = scrollState

  const expertiseVisible = Math.max(0, Math.min(1,
    activeSection === 1 ? sectionProgress[1] * 2 : activeSection > 1 ? 1 : 0
  ))

  return (
    <>
      <CameraController scrollState={scrollState} />
      <ParticleField scrollProgress={scrollProgress} />
      <GridLines />
      <TechCore scrollProgress={scrollProgress} />
      <CachingRings visible={expertiseVisible} />
      <CircuitBreakers visible={expertiseVisible} />
      <ambientLight intensity={0.1} />
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#e8ff00" />
      <pointLight position={[-5, -5, -5]} intensity={0.3} color="#ffffff" />
    </>
  )
}

// ─── Main Scene Export ────────────────────────────────────────────────────────
export default function Scene({ scrollState }: { scrollState: ScrollState }) {
  return (
    <div className="canvas-wrapper">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60, near: 0.1, far: 100 }}
        gl={{ antialias: true, alpha: false }}
        style={{ background: '#000000' }}
        dpr={[1, 2]}
      >
        <SceneContent scrollState={scrollState} />
      </Canvas>
    </div>
  )
}
