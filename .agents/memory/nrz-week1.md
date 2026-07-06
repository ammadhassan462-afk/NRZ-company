---
name: NRZ Week 1 rules and stack
description: Stack choices, strict UI-only rules, design conventions, and completed page inventory for the NRZ International web platform Week 1 build.
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
- All data from src/data/mock.ts (static JSON, fully typed interfaces)
- Every button/link uses React Router Link with real route paths (not "#")
- Non-homepage routes render src/pages/ComingSoonPage.tsx (stub with Back to Homepage)
- Forms visually submit only — no real save
- PRD > User Instructions > Figma > NRZ Website (conflict priority)
- Never add features outside explicit user request

## Design conventions
- Brand colours: primary blue-700 (#1d4ed8), accent amber-400 (#fbbf24), dark slate-900
- Section pattern: pill badge → h2 → subtitle → content
- Framer Motion: whileInView + viewport={{ once: true, margin: '-60px' }} for scroll entrance; infinite loops must check useReducedMotion
- ARIA: aria-labelledby on sections, aria-hidden on decorative elements, role="menu" on dropdowns, aria-expanded on triggers, Escape key closes all menus/dropdowns
- Navbar: always white/98 + shadow + border (no transparent top state) so nav text is visible and consistent
- Each major section has an id: #about, #why-choose, #apply

## Completed homepage sections (all in src/components/)
| Section | File | Notes |
|---|---|---|
| Announcement bar | layout/Navbar.tsx | Blue strip, intake message, hidden on mobile |
| Sticky Navbar | layout/Navbar.tsx | White background, keyboard dropdown, mobile accordion |
| Hero | home/HeroSection.tsx | Photo bg 85% pos, directional overlay, admission card mt-48, 4-stat bar |
| About NRZ | home/AboutSection.tsx | Dark impact panel (2×2 stats, recognitions), narrative text, 2 office cards |
| Why Choose NRZ | home/WhyChooseSection.tsx | 6 advantage cards (per-card accent), 3 testimonials, trust-bar CTA |
| CTA / How It Works | home/CTASection.tsx | 3-step process, dark banner, eligibility checklist, WhatsApp deep-link |
| Footer | layout/Footer.tsx | 12-col grid, dual-office contact, recognition bar, copyright |

## Mock data shape (src/data/mock.ts)
Exports: universities, programs, stats, whyChooseNRZ, recognitions, offices, processSteps, testimonials — all fully TypeScript-typed with interfaces at the top of the file.

## Route map (src/App.tsx)
- `/` → HomePage
- `/programs`, `/programs/:slug`, `/universities`, `/universities/:slug`, `/about`, `/contact`, `/apply`, `/login`, `*` → ComingSoonPage

**Why:** Keeps future agents aligned on Week 1 scope; prevents accidental backend code or scope creep.
**How to apply:** Before any new page/component, confirm it's in the user's explicit request; use mock data only; follow route and section patterns already established.
