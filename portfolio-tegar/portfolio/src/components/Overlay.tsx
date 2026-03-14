import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ScrollState } from '../hooks/useScrollState'

interface OverlayProps {
  scrollState: ScrollState
}

// ─── Glitch Text Component ─────────────────────────────────────────────────
function GlitchText({ text, className = '' }: { text: string; className?: string }) {
  return (
    <span className={`glitch-wrapper ${className}`} data-text={text} style={{
      position: 'relative',
      display: 'inline-block',
    }}>
      <style>{`
        .glitch-wrapper::before,
        .glitch-wrapper::after {
          content: attr(data-text);
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
        }
        .glitch-wrapper::before {
          color: #ff2200;
          animation: glitch 2.5s infinite linear alternate-reverse;
          clip-path: inset(10% 0 80% 0);
          transform: translateX(-4px);
        }
        .glitch-wrapper::after {
          color: #00ffff;
          animation: glitch 3s infinite linear alternate;
          clip-path: inset(60% 0 20% 0);
          transform: translateX(4px);
        }
      `}</style>
      {text}
    </span>
  )
}

// ─── Scanline overlay ──────────────────────────────────────────────────────
function Scanlines() {
  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      zIndex: 100,
      pointerEvents: 'none',
      backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.04) 2px, rgba(0,0,0,0.04) 4px)',
    }} />
  )
}

// ─── Nav bar ───────────────────────────────────────────────────────────────
function NavBar({ activeSection }: { activeSection: number }) {
  const sections = ['INIT', 'SYS', 'OPS', 'CONTACT']
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.6 }}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 50,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '24px 40px',
        borderBottom: '1px solid #111',
        backdropFilter: 'blur(8px)',
        pointerEvents: 'auto',
      }}
    >
      <div style={{
        fontFamily: 'var(--font-brutal)',
        fontSize: '20px',
        letterSpacing: '4px',
        color: 'var(--accent)',
      }}>
        T.EXE
      </div>
      <div style={{ display: 'flex', gap: '32px' }}>
        {sections.map((s, i) => (
          <span
            key={s}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '3px',
              color: activeSection === i ? 'var(--accent)' : 'var(--grey-light)',
              transition: 'color 0.3s',
              cursor: 'crosshair',
            }}
          >
            {activeSection === i ? '▶ ' : ''}{s}
          </span>
        ))}
      </div>
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '10px',
        color: '#333',
        letterSpacing: '2px',
      }}>
        v2.4.1_STABLE
      </div>
    </motion.nav>
  )
}

// ─── Progress bar ──────────────────────────────────────────────────────────
function ScrollProgress({ progress }: { progress: number }) {
  return (
    <div style={{
      position: 'fixed',
      right: '24px',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 50,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px',
      pointerEvents: 'none',
    }}>
      <div style={{
        width: '1px',
        height: '120px',
        background: '#1a1a1a',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '100%',
          height: `${progress * 100}%`,
          background: 'var(--accent)',
          transition: 'height 0.1s',
        }} />
      </div>
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '9px',
        color: 'var(--grey-light)',
        letterSpacing: '2px',
        writingMode: 'vertical-rl',
      }}>
        {Math.round(progress * 100)}%
      </span>
    </div>
  )
}

// ─── Hero Section ──────────────────────────────────────────────────────────
function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useTransform(scrollYProgress, [0, 1], [0, -120])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <div ref={ref} className="section" style={{ minHeight: '100vh', padding: '0 60px', pointerEvents: 'none' }}>
      <motion.div style={{ y, opacity, maxWidth: '900px' }}>
        {/* Status line */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--accent)',
            letterSpacing: '4px',
            marginBottom: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <span style={{
            width: '8px', height: '8px',
            borderRadius: '50%',
            background: 'var(--accent)',
            display: 'inline-block',
            animation: 'pulse-accent 2s infinite',
          }} />
          SYSTEM_ONLINE // BACKEND_ENGINEER_001
        </motion.div>

        {/* Giant name */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(72px, 14vw, 180px)',
            lineHeight: 0.9,
            color: 'var(--white)',
            letterSpacing: '-2px',
            marginBottom: '8px',
          }}
        >
          HI, I'M
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(72px, 14vw, 180px)',
            lineHeight: 0.9,
            color: 'var(--accent)',
            letterSpacing: '-2px',
            marginBottom: '48px',
          }}
        >
          TEGAR.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(14px, 2vw, 20px)',
            color: 'var(--grey-light)',
            letterSpacing: '3px',
            maxWidth: '600px',
            lineHeight: 1.8,
            borderLeft: '2px solid var(--accent)',
            paddingLeft: '20px',
          }}
        >
          DISTRIBUTED_SYSTEMS.ENTHUSIAST<br/>
          SCALABLE · RESILIENT · SECURE
        </motion.p>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          style={{
            marginTop: '80px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            color: '#333',
            letterSpacing: '3px',
          }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >↓</motion.div>
          SCROLL_TO_EXPLORE
        </motion.div>
      </motion.div>
    </div>
  )
}

// ─── Expertise Section ─────────────────────────────────────────────────────
function ExpertiseSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const words = ['SCALABLE.', 'RESILIENT.', 'SECURE.']
  const colors = ['var(--white)', 'var(--accent)', 'var(--grey-light)']

  const skills = [
    { label: 'NODE.JS / NESTJS', val: 92 },
    { label: 'DISTRIBUTED SYSTEMS', val: 88 },
    { label: 'REDIS / CACHING', val: 90 },
    { label: 'OBSERVABILITY', val: 85 },
    { label: 'SECURITY ENG.', val: 82 },
    { label: 'CIRCUIT BREAKERS', val: 87 },
  ]

  return (
    <div ref={ref} className="section" style={{
      minHeight: '100vh',
      padding: '120px 60px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '80px',
      alignItems: 'center',
      pointerEvents: 'none',
    }}>
      <motion.div style={{ opacity }}>
        {/* Section label */}
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          color: 'var(--accent)',
          letterSpacing: '5px',
          marginBottom: '48px',
        }}>
          02 // CORE_EXPERTISE
        </div>

        {/* Giant words */}
        {words.map((word, i) => (
          <motion.div
            key={word}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-brutal)',
              fontSize: 'clamp(52px, 8vw, 100px)',
              lineHeight: 0.95,
              color: colors[i],
              letterSpacing: '2px',
            }}
          >
            {word}
          </motion.div>
        ))}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            color: '#555',
            lineHeight: 2,
            marginTop: '32px',
            letterSpacing: '1px',
            maxWidth: '420px',
          }}
        >
          Building backend systems with circuit breakers, caching layers,
          request deduplication, and rate limiting that operate at scale
          while maintaining full observability.
        </motion.p>
      </motion.div>

      {/* Skills bars */}
      <motion.div style={{ opacity }}>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          color: '#444',
          letterSpacing: '4px',
          marginBottom: '32px',
        }}>
          PROFICIENCY_MATRIX
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {skills.map((skill, i) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '8px',
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '2px',
                color: 'var(--grey-light)',
              }}>
                <span>{skill.label}</span>
                <span style={{ color: 'var(--accent)' }}>{skill.val}%</span>
              </div>
              <div style={{
                height: '2px',
                background: '#111',
                position: 'relative',
              }}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.val}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    position: 'absolute',
                    top: 0, left: 0,
                    height: '100%',
                    background: i === 0 ? 'var(--accent)' : i % 2 === 0 ? '#555' : '#333',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

// ─── Systems / Observability Section ──────────────────────────────────────
function SystemsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const patterns = [
    { name: 'CIRCUIT_BREAKER', desc: 'Automatic failure detection & recovery', tag: 'RESILIENCE' },
    { name: 'SINGLEFLIGHT', desc: 'Request deduplication under high concurrency', tag: 'PERFORMANCE' },
    { name: 'STALE_CACHE', desc: 'Serve stale data when upstream fails', tag: 'AVAILABILITY' },
    { name: 'RATE_LIMITER', desc: 'Token bucket + sliding window control', tag: 'PROTECTION' },
    { name: 'IP_FINGERPRINT', desc: 'Behavioral fingerprinting & auto-ban', tag: 'SECURITY' },
    { name: 'OTEL_TRACING', desc: 'Distributed traces across service boundaries', tag: 'OBSERVABILITY' },
  ]

  return (
    <div ref={ref} className="section" style={{
      minHeight: '100vh',
      padding: '120px 60px',
      pointerEvents: 'none',
    }}>
      <motion.div style={{ opacity, width: '100%' }}>
        {/* Label */}
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          color: 'var(--accent)',
          letterSpacing: '5px',
          marginBottom: '24px',
        }}>
          03 // SYSTEMS_ARCHITECTURE
        </div>

        {/* Glitch headline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px, 7vw, 90px)',
            lineHeight: 0.95,
            marginBottom: '16px',
            color: 'var(--white)',
          }}
        >
          OBSERVABILITY
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px, 7vw, 90px)',
            lineHeight: 0.95,
            marginBottom: '16px',
          }}
        >
          <GlitchText text="& SECURITY" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px, 7vw, 90px)',
            lineHeight: 0.95,
            color: 'var(--grey-light)',
            marginBottom: '64px',
          }}
        >
          ENGINEERING.
        </motion.div>

        {/* Pattern grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          background: '#111',
          border: '1px solid #111',
        }}>
          {patterns.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              style={{
                background: '#000',
                padding: '28px 24px',
                borderBottom: i < 3 ? '1px solid #0f0f0f' : 'none',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '9px',
                color: 'var(--accent)',
                letterSpacing: '3px',
                marginBottom: '12px',
              }}>
                [{p.tag}]
              </div>
              <div style={{
                fontFamily: 'var(--font-brutal)',
                fontSize: '18px',
                letterSpacing: '2px',
                color: 'var(--white)',
                marginBottom: '8px',
              }}>
                {p.name}
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                color: '#444',
                lineHeight: 1.7,
                letterSpacing: '0.5px',
              }}>
                {p.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

// ─── About / Contact Section ───────────────────────────────────────────────
function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <div ref={ref} className="section" style={{
      minHeight: '100vh',
      padding: '120px 60px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      pointerEvents: 'none',
    }}>
      <motion.div style={{ opacity }}>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          color: 'var(--accent)',
          letterSpacing: '5px',
          marginBottom: '48px',
        }}>
          04 // CONTACT
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(48px, 10vw, 130px)',
            lineHeight: 0.9,
            marginBottom: '48px',
          }}
        >
          <span style={{ color: 'var(--white)' }}>LET'S</span><br />
          <span style={{ color: 'var(--accent)' }}>BUILD.</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            color: '#555',
            lineHeight: 2,
            maxWidth: '520px',
            letterSpacing: '0.5px',
            borderLeft: '2px solid #222',
            paddingLeft: '20px',
            marginBottom: '48px',
          }}
        >
          Interested in collaborating or discussing backend systems,
          distributed architecture, or engineering challenges?<br/>
          Feel free to reach out.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '16px',
            padding: '16px 32px',
            border: '1px solid var(--accent)',
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            letterSpacing: '4px',
            color: 'var(--accent)',
            cursor: 'crosshair',
            pointerEvents: 'auto',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          INITIATE_CONTACT →
        </motion.div>

        <div style={{
          marginTop: '80px',
          borderTop: '1px solid #111',
          paddingTop: '32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          color: '#333',
          letterSpacing: '2px',
        }}>
          <span>TEGAR // BACKEND_ENGINEER</span>
          <span>BUILD_WITH_PRECISION</span>
          <span>©2024</span>
        </div>
      </motion.div>
    </div>
  )
}

// ─── Main Overlay Export ───────────────────────────────────────────────────
export default function Overlay({ scrollState }: OverlayProps) {
  const { scrollProgress, activeSection } = scrollState

  return (
    <>
      <Scanlines />
      <NavBar activeSection={activeSection} />
      <ScrollProgress progress={scrollProgress} />

      <div className="scroll-container">
        <HeroSection />
        <ExpertiseSection />
        <SystemsSection />
        <ContactSection />
      </div>
    </>
  )
}
