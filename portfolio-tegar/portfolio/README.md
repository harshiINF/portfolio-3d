# TEGAR — Experimental 3D Portfolio

A brutalist, industrial 3D experience built with React Three Fiber, Framer Motion, and Lenis Scroll.

## ✦ Features

- **Camera-Based Scrolling** — Camera orbits around a central 3D wireframe object as you scroll through sections
- **Abstract Tech Core** — Rotating icosahedron wireframe with dodecahedron interior and pulsing core
- **Circuit Breaker Elements** — Floating 3D elements that appear in the Expertise section
- **Caching Layer Rings** — Torus rings that orbit the core object
- **Glitch Typography** — CSS glitch effect on key headings in the Systems section
- **Lenis Smooth Scroll** — Ultra-smooth scroll inertia
- **Framer Motion Reveals** — Staggered entrance animations synced with scroll position
- **Skill Progress Bars** — Animated proficiency matrix
- **Scanline Overlay** — CRT-style visual texture
- **Brutalist / Industrial Aesthetic** — Anton + Bebas Neue + Space Mono typography

## ✦ Tech Stack

| Library | Version | Purpose |
|---|---|---|
| `@react-three/fiber` | ^8.17 | Three.js React renderer |
| `@react-three/drei` | ^9.109 | R3F helpers & abstractions |
| `three` | ^0.168 | 3D engine |
| `framer-motion` | ^11.11 | Animation & scroll effects |
| `lenis` | ^1.1 | Smooth scroll inertia |

## ✦ Project Structure

```
src/
├── App.tsx                    # Main entry, scroll listener
├── main.tsx                   # React root
├── index.css                  # Global styles & keyframes
│
├── components/
│   ├── Scene.tsx              # Three.js / R3F 3D scene
│   └── Overlay.tsx            # Text content synced with scroll
│
└── hooks/
    ├── useScrollState.ts      # Scroll progress tracker
    └── useLenis.ts            # Lenis smooth scroll init
```

## ✦ Installation & Setup

### 1. Clone / Copy this project

```bash
mkdir tegar-portfolio && cd tegar-portfolio
# Copy all files into this directory
```

### 2. Install dependencies

```bash
npm install
```

Or install manually:

```bash
npm install react react-dom
npm install @react-three/fiber @react-three/drei three
npm install framer-motion
npm install lenis
npm install -D @types/react @types/react-dom @types/three
npm install -D vite @vitejs/plugin-react typescript
```

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### 4. Build for production

```bash
npm run build
npm run preview
```

## ✦ Section Map

| Section | Content | Camera Behavior |
|---|---|---|
| Hero | "HI, I'M TEGAR" + status line | Front view, slight drift |
| Expertise | SCALABLE. RESILIENT. SECURE. + skill bars | Orbital left sweep |
| Systems | Observability & Security patterns | Cinematic top-down rise |
| Contact | LET'S BUILD + contact CTA | Wide angle pull-back |

## ✦ Customization

### Colors
Edit `src/index.css` CSS variables:
```css
--accent: #e8ff00;   /* Lime yellow highlight */
--red: #ff2200;       /* Glitch red layer */
```

### 3D Object
Edit `src/components/Scene.tsx` → `TechCore` component to swap geometry types.

### Camera Routes
Edit `CameraController` in `Scene.tsx` to change how the camera moves per section.

### Content
Edit `src/components/Overlay.tsx` — each section is its own component:
- `HeroSection`
- `ExpertiseSection`
- `SystemsSection`
- `ContactSection`
