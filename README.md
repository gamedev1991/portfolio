# Rahul Ohri — Portfolio

**Live site:** https://rahulohri.com

Personal portfolio for Rahul Ohri — Product Manager and Game Developer with 9+ years of experience shipping mobile games and consumer products.

---

## Tech Stack

- **React 18** + **TypeScript** — SPA with React Router v6
- **Vite 6** (SWC) — build tool with manual code splitting
- **Tailwind CSS 3** + **shadcn/ui** — cyberpunk design system
- **EmailJS** — contact form email delivery
- **TanStack React Query** — server state and caching
- **react-markdown** + **react-pdf** — blog content rendering

---

## Local Development

Requirements: Node.js 18+ and npm.

```sh
# Install dependencies
npm install

# Start dev server (localhost:8080)
npm run dev

# Production build → dist/
npm run build

# Preview production build locally
npm run preview

# Lint
npm run lint
```

---

## Deployment

The site deploys to Hostinger via FTP:

```sh
# Build + deploy to rahulohri.com via FTP
npm run deploy
```

Credentials are stored in `.env` (gitignored). See `scripts/deploy-ftp.mjs` for the upload logic.

GitHub Pages deployment is also available:

```sh
npm run deploy:gh
```

---

## Project Structure

```
src/
  components/     # Page sections + common UI primitives
  data/           # Blog post metadata, vibe coding projects
  pages/          # Route-level components
  hooks/          # useIsMobile, useToast
  lib/            # Utility functions (cn)
public/
  blog/           # Markdown posts + PDF case studies + images
  Images/         # Project and profile thumbnails
  Videos/         # Project demo videos
scripts/
  deploy-ftp.mjs  # FTP deployment
```

For full architecture details see `PROJECT_OVERVIEW.md`.  
For PM recruiter evaluation and improvement tasks see `PM_RECRUITER_ACTION_PLAN.md`.
