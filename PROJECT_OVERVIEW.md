# Portfolio Project — Comprehensive Overview

> **Owner:** Rahul Ohri
> **Live Site:** https://rahulohri.com
> **Last Analyzed:** April 10, 2026

---

## What This Is

A personal portfolio website for **Rahul Ohri**, a Product Manager and Game Developer with 6+ years in game development and 3+ years in product management. The site is a single-page application (SPA) with a cyberpunk aesthetic, showcasing career history, projects, skills, and a blog with case studies.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18.3.1 + TypeScript 5.5.3 |
| Build Tool | Vite 6.4.2 (SWC transpiler) |
| Styling | Tailwind CSS 3.4.11 + shadcn/ui (50+ components) |
| Routing | React Router v6.30.3 |
| Server State | TanStack React Query v5.96.1 |
| Content | react-markdown + react-pdf + pdfjs-dist |
| Icons | Lucide React |
| Charting | Recharts 2.15.4 |
| Notifications | Sonner |
| Deployment | Hostinger via FTP (`npm run deploy`) + GitHub Pages fallback |

---

## Project Structure

```
Portfolio/
├── src/
│   ├── components/
│   │   ├── common/          # AnimatedText, Button, Card, Terminal, OptimizedImage
│   │   ├── ui/              # 50+ shadcn/ui primitives
│   │   ├── About.tsx
│   │   ├── Blog.tsx
│   │   ├── BlogPost.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Hero.tsx
│   │   ├── Layout.tsx
│   │   ├── Navbar.tsx
│   │   ├── PDFCarousel.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── VibeCodingProjects.tsx
│   ├── data/
│   │   ├── blogPosts.ts     # Blog metadata & config
│   │   └── vibeCodingProjects.tsx
│   ├── hooks/               # useIsMobile, useToast
│   ├── lib/                 # Utility functions
│   ├── pages/
│   │   ├── Index.tsx        # Home page (SPA)
│   │   ├── BlogPage.tsx     # Blog listing
│   │   ├── BlogPostPage.tsx # Individual post viewer
│   │   └── NotFound.tsx     # 404
│   ├── App.tsx              # Router setup
│   └── main.tsx
├── public/
│   └── blog/
│       ├── assets/          # Blog images
│       ├── *.md             # Markdown blog posts
│       └── *.pdf            # PDF case studies
├── dist/                    # Production build output
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── deploy.ps1 / upload.ps1 / test-ftp.ps1
```

---

## Pages & Routes

| Route | Component | Description |
|---|---|---|
| `/` | `Index.tsx` | Home — all sections stacked vertically |
| `/blog` | `BlogPage.tsx` | Blog listing with search & filters |
| `/blog/:id` | `BlogPostPage.tsx` | Individual post (markdown or PDF) |
| `/vibe-coding-projects` | `VibeCodingProjects.tsx` | AI-assisted rapid projects |
| `/*` | `NotFound.tsx` | 404 fallback |

---

## Home Page Sections

### 1. Hero
- Animated loading screen with a progress bar (0–100%)
- Typing/reveal animations with glow effects
- Tagline: *"Building Engaging Games & Products with Data-Driven Innovation"*
- CTA buttons: View Projects, Get In Touch
- Cyberpunk grid background with glowing circles

### 2. About
- Profile image with scan-line overlay and grid effect
- Bio highlights: 6+ years game dev, 3+ years PM
- Companies: Blkbox AI, AURA, FanClash, Playshifu, SplashLearn, Nukebox Studios
- 6 core skill cards: Game Design, Data Analytics, Product Strategy, Web3 & Mobile, Innovation, Team Leadership

### 3. Experience (Timeline)
Expandable timeline cards, most recent first:

| Company | Role | Period |
|---|---|---|
| Blkbox AI | Product Manager | 2023–Present |
| AURA | Product Manager | 2022–2023 |
| FanClash | Product Manager | 2021–2022 |
| Playshifu | Game Developer | 2020–2021 |
| SplashLearn | Game Developer | 2019–2020 |
| Nukebox Studios | Game Developer | 2017–2019 |

### 4. Projects (Gallery)
9 featured projects with video demo modals:

- Cosmo Sprint (Blkbox AI)
- FanClash (esports fantasy)
- Tacto Electronics (AR education)
- Food Truck Chef *(Google Play Game of Year 2017)*
- Web3 Gaming Marketplace (AURA)
- Adaptive Math Games (SplashLearn)
- Bring Me Home, One Man Army (Nukebox)
- Plugo Animals

### 5. Skills (Terminal UI)
Terminal-styled interface with 4 tabs and 23+ skills:

| Tab | Sample Skills |
|---|---|
| Product Management | Roadmapping, A/B Testing, JIRA, Analytics |
| Game Development | Level Design, Unity, Monetization, Design Principles |
| Technical | C#, SQL, Git, AI/ML Vibe Coding, Web3 |
| Analytics & Strategy | BI, Funnel Optimization, User Acquisition, Retention |

### 6. Contact
- Contact form (name, email, message)
- Direct links: email, LinkedIn, Steam

---

## Blog

**9 total posts** across two content types:

### Markdown Articles
| Title | Date | Category |
|---|---|---|
| How I Became a Product Manager | Jul 12, 2021 | Product Management |
| PRD for Movie Review Website | Feb 4, 2021 | Product Management |
| Stick Cricket Live Case Study | Jan 17, 2021 | Case Study |
| Gardenscapes Case Study | Sep 16, 2020 | Case Study |

### PDF Case Studies
| Title | Date |
|---|---|
| Real Money Gaming | May 25, 2025 |
| Super Gaming | April 18, 2025 |
| Wizard of Oz (Zynga) | March 9, 2025 |
| Match Makers | April 28, 2023 |
| Rodeo Stampede | Jan 15, 2024 |

**Blog features:** full-text search (title/tags/summary), category filtering, tag-based organization, featured post flag, "Load More" pagination.

---

## Design System

The site uses a custom **cyberpunk color palette** defined in `tailwind.config.ts`:

| Token | Hex |
|---|---|
| `cyber-black` | `#050A1C` |
| `cyber-darker` | `#0A1128` |
| `cyber-dark` | `#12193B` |
| `cyber-blue` | *(accent)* |
| `cyber-cyan` | *(accent)* |
| `cyber-purple` | *(accent)* |
| `cyber-pink` | *(accent)* |
| `cyber-green` | *(accent)* |

Custom animations: `pulse-glow`, `text-glow`, `neon-pulse`, `float`, `grid-background`, `typing`, `blink-caret`, `fade-in/out`, `flicker`, `intro-reveal`

---

## Performance & Build

- **Code splitting:** vendor, ui, and markdown chunks bundled separately
- **Lazy loading:** BlogPage, BlogPostPage, VibeCodingProjects are dynamically imported
- **React Query caching:** 5-min stale time, 30-min garbage collection
- **Image optimization:** lazy loading with fallbacks via `OptimizedImage` component
- **Chunk size warning threshold:** 1000 KB
- **Dev server port:** 8080

---

## Scripts

```bash
npm run dev        # Start dev server (localhost:8080)
npm run build      # TypeScript check + production build → dist/
npm run deploy     # Build + FTP upload to rahulohri.com (Hostinger)
npm run deploy:gh  # Deploy to GitHub Pages
npm run lint       # ESLint checks
npm run preview    # Preview production build locally
```

---

## Key Files at a Glance

| File | Purpose |
|---|---|
| `src/App.tsx` | Route definitions |
| `src/pages/Index.tsx` | Home page composition |
| `src/data/blogPosts.ts` | All blog post metadata |
| `src/components/Hero.tsx` | Animated landing section |
| `src/components/Experience.tsx` | Career timeline |
| `tailwind.config.ts` | Design tokens & animations |
| `vite.config.ts` | Build config & code splitting |
| `public/blog/*.md` | Markdown blog content |
| `public/blog/*.pdf` | PDF case study content |
| `scripts/deploy-ftp.mjs` | FTP deployment to Hostinger |
| `deploy.ps1` / `upload.ps1` | PowerShell deployment helpers |
