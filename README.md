# ✨ Portfolio 3D — Immersive Developer Portfolio

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=200&section=header&text=Portfolio%203D&fontSize=50&fontColor=white&desc=A%20modern%20developer%20portfolio%20with%20interactive%203D%20visuals&descSize=16" width="100%"/>
</div>

<br/>

<div align="center">
  
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-r128-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind-3.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-22C55E?style=for-the-badge&logo=opensourceinitiative&logoColor=white)](LICENSE)

</div>

---

## 📋 Daftar Isi

| No | Section | Deskripsi |
|----|---------|-----------|
| 1 | [🚀 Tentang Project](#-tentang-project) | Latar belakang dan tujuan |
| 2 | [✨ Fitur Utama](#-fitur-utama) | Semua fitur yang tersedia |
| 3 | [🎨 Preview](#-preview) | Tampilan portfolio |
| 4 | [🛠️ Technology Stack](#️-technology-stack) | Teknologi yang digunakan |
| 5 | [📁 Struktur Proyek](#-struktur-proyek) | Tree struktur dengan ASCII |
| 6 | [⚙️ Instalasi](#️-instalasi) | Cara setup dan menjalankan |
| 7 | [🎮 Komponen 3D](#-komponen-3d) | Penjelasan animasi 3D |
| 8 | [🎨 Customization](#-customization) | Cara kustomisasi |
| 9 | [🚀 Deployment](#-deployment) | Cara deploy ke production |
| 10 | [🤝 Kontribusi](#-kontribusi) | Panduan berkontribusi |
| 11 | [📝 License](#-license) | Lisensi proyek |

---

## 🚀 Tentang Project

**Portfolio 3D** adalah website portfolio interaktif yang menampilkan karya dan skill dengan visual 3D yang immersive. Dibangun dengan **React**, **TypeScript**, dan **Three.js**, portfolio ini dirancang untuk memberikan pengalaman pengguna yang modern dan engaging.

### 🎯 Tujuan

- Menampilkan project dan skill dengan cara yang unik dan menarik
- Menerapkan teknologi 3D modern dalam web development
- Menjadi portofolio yang menunjukkan kemampuan frontend dan kreativitas

---

## ✨ Fitur Utama

| Fitur | Deskripsi |
|-------|-----------|
| **🎨 3D Hero Animation** | Animasi 3D interaktif di halaman utama |
| **📜 Smooth Scroll Transitions** | Transisi halus antar section |
| **🧩 Modular Component Architecture** | Struktur komponen yang rapi dan reusable |
| **⚡ Custom React Hooks** | Hooks khusus untuk optimasi performa |
| **🌙 Dark UI Design** | Desain modern dengan tema gelap |
| **📱 Responsive Layout** | Tampilan optimal di semua device |
| **🚀 Performance Optimized** | Rendering yang dioptimasi untuk performa tinggi |

---

## 🎨 Preview

<div align="center">
  <img src="https://placehold.co/800x500/0a0a0f/8B5CF6?text=3D+Hero+Animation" alt="Portfolio 3D Preview" width="800"/>
  <br/>
  <em>Immersive 3D hero section with interactive animations</em>
</div>

---

## 🛠️ Technology Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.x | UI Framework |
| **TypeScript** | 5.x | Type safety |
| **Three.js** | r128 | 3D graphics |
| **Tailwind CSS** | 3.x | Styling |
| **Vite** | 5.x | Build tool |
| **Framer Motion** | 10.x | Animations |

### Libraries
| Library | Purpose |
|---------|---------|
| **@react-three/fiber** | React renderer for Three.js |
| **@react-three/drei** | Helpers for React Three Fiber |
| **Lenis** | Smooth scrolling |
| **GSAP** | Advanced animations |

---

## 📁 Struktur Proyek

```

📦 portfolio-3d/
│
├── 📂 src/
│   │
│   ├── 📂 components/                           # React components
│   │   ├── 📂 Hero/                             # Hero section dengan 3D
│   │   │   ├── 📄 Hero.tsx                      # Hero component
│   │   │   ├── 📄 Hero3D.tsx                    # 3D model component
│   │   │   └── 📄 HeroText.tsx                  # Animated text
│   │   │
│   │   ├── 📂 About/                            # About section
│   │   │   ├── 📄 About.tsx
│   │   │   └── 📄 Skills.tsx
│   │   │
│   │   ├── 📂 Projects/                         # Projects showcase
│   │   │   ├── 📄 Projects.tsx
│   │   │   └── 📄 ProjectCard.tsx
│   │   │
│   │   ├── 📂 Contact/                          # Contact section
│   │   │   └── 📄 Contact.tsx
│   │   │
│   │   └── 📂 Layout/                           # Layout components
│   │       ├── 📄 Header.tsx
│   │       ├── 📄 Footer.tsx
│   │       └── 📄 Navigation.tsx
│   │
│   ├── 📂 hooks/                                # Custom React hooks
│   │   ├── 📄 useLenis.ts                       # Smooth scroll hook
│   │   ├── 📄 useScrollProgress.ts              # Scroll progress hook
│   │   └── 📄 useMousePosition.ts               # Mouse position hook
│   │
│   ├── 📂 assets/                               # Static assets
│   │   ├── 📂 models/                           # 3D models (.glb, .gltf)
│   │   ├── 📂 textures/                         # Textures
│   │   └── 📂 images/                           # Images
│   │
│   ├── 📂 styles/                               # Global styles
│   │   └── 📄 globals.css
│   │
│   ├── 📂 utils/                                # Helper functions
│   │   └── 📄 animations.ts
│   │
│   ├── 📄 App.tsx                               # Root component
│   ├── 📄 main.tsx                              # Entry point
│   └── 📄 vite-env.d.ts                         # Vite types
│
├── 📂 public/                                   # Public assets
│   └── 📄 favicon.ico
│
├── 📄 .gitignore                                # Git ignore rules
├── 📄 package.json                              # Dependencies & scripts
├── 📄 tsconfig.json                             # TypeScript configuration
├── 📄 vite.config.ts                            # Vite configuration
├── 📄 tailwind.config.js                        # Tailwind CSS config
└── 📄 README.md                                 # Dokumentasi

```

---

## ⚙️ Instalasi

### Prerequisites

| Requirement | Version |
|-------------|---------|
| Node.js | ≥ 18.x |
| npm | ≥ 9.x |

### Step-by-Step Installation

```bash
# 1. Clone repository
git clone https://github.com/tegardevINF/portfolio-3d.git
cd portfolio-3d

# 2. Install dependencies
npm install

# 3. Jalankan development server
npm run dev

# 4. Buka browser di http://localhost:5173
```

Build untuk Production

```bash
# Build project
npm run build

# Preview build
npm run preview
```

---

🎮 Komponen 3D

Hero 3D Animation

```tsx
// components/Hero/Hero3D.tsx
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'

export const Hero3D = () => {
  return (
    <Canvas camera={{ position: [0, 0, 2] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Sphere args={[1, 100, 200]} scale={1.5}>
        <MeshDistortMaterial
          color="#8B5CF6"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
    </Canvas>
  )
}
```

Smooth Scroll dengan Lenis

```tsx
// hooks/useLenis.ts
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

export const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])
}
```

---

🎨 Customization

Mengubah Warna

Edit tailwind.config.js:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#8B5CF6',    // Purple
        secondary: '#FF6B6B',   // Coral
        accent: '#22C55E',      // Green
        dark: '#0A0A0F',        // Background
        light: '#F5F5F5',       // Text
      }
    }
  }
}
```

Mengubah 3D Model

```tsx
// Ganti model 3D
import { useGLTF } from '@react-three/drei'

export const CustomModel = () => {
  const { scene } = useGLTF('/models/your-model.glb')
  return <primitive object={scene} scale={2} />
}
```

---

🚀 Deployment

Deploy ke Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Atau deploy dengan link
vercel --prod
```

Deploy ke Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build project
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

Deploy ke GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json
"homepage": "https://tegardevINF.github.io/portfolio-3d",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# Deploy
npm run deploy
```

---

🤝 Kontribusi

Development Workflow

```bash
# 1. Fork repository
# 2. Clone fork
git clone https://github.com/username/portfolio-3d.git
cd portfolio-3d

# 3. Create branch
git checkout -b feature/amazing-feature

# 4. Make changes
# 5. Run development server
npm run dev

# 6. Commit
git commit -m "feat: add amazing feature"

# 7. Push
git push origin feature/amazing-feature

# 8. Open Pull Request
```

Commit Convention

Type Description Example
feat New feature feat: add particle effect
fix Bug fix fix: 3D model loading
docs Documentation docs: update README
style Code style style: format code
refactor Refactoring refactor: optimize 3D render
perf Performance perf: reduce bundle size

---

📝 License

```
MIT License

Copyright (c) 2025 Tegar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=120&section=footer" width="100%"/>

  <br/>

Built with React, TypeScript, and Three.js

https://img.shields.io/badge/GitHub-tegardevINF-181717?style=flat-square&logo=github

  <br/>

"Immersive 3D visuals, smooth animations, modern design"

</div>
