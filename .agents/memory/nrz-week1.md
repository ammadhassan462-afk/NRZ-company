---
name: NRZ Week 1 rules and stack
description: Stack choices, strict UI-only rules, and design conventions for the NRZ International web platform Week 1 build.
---

## Stack
- Vite + React 19 + TypeScript (strict mode, path alias @/ → src/)
- Tailwind CSS v4 via @tailwindcss/vite plugin (no tailwind.config.js needed)
- React Router v6 (BrowserRouter in main.tsx)
- Framer Motion — useReducedMotion() required for all infinite/looping animations
- Lucide React — Facebook/Instagram/Youtube NOT exported; use text fallbacks for social icons
- clsx + tailwind-merge via src/lib/utils.ts cn() helper
- Dev server on port 5000 (workflow: "Start application", npm run dev)

## Week 1 Rules (strict)
- NO Supabase, NO backend, NO auth, NO API calls, NO SQL
- All data from src/data/mock.ts (static JSON)
- Every button/link uses React Router Link with real route paths (not "#")
- Forms visually submit only — no real save
- PRD > User Instructions > Figma > NRZ Website (conflict priority)
- Never add features outside explicit user request

## Design conventions
- Primary: blue-700, accent: amber-400, bg: white/slate-50
- Section pattern: pill badge → h2 → body text → content
- Framer Motion: entrance with useInView (once:true); infinite loops must check useReducedMotion
- ARIA: aria-label on sections, aria-hidden on decorative elements, role="menu" on dropdowns, aria-expanded on toggles, keyboard Escape closes menus

## Key files
- src/data/mock.ts — all mock data (universities, programs, stats, testimonials, whyChooseNRZ)
- src/pages/HomePage.tsx — Navbar + HeroSection + AboutSection + WhyChooseSection + CTASection + Footer
- src/components/layout/ — Navbar.tsx, Footer.tsx (shared across pages)
- src/components/home/ — HeroSection, AboutSection, WhyChooseSection, CTASection

**Why:** Keeps future agents aligned on Week 1 scope; prevents accidental backend code or scope creep.
**How to apply:** Before any new page/component, confirm it's in the user's explicit request; use mock data only; follow route patterns already established.
