# NRZ International — Web Platform

## Project Overview

A production-quality frontend prototype for NRZ International, Pakistan's leading overseas education consultancy (est. 2008). The platform covers MBBS, BDS, Engineering, Pharmacy, Nursing, and Chinese Language programs in China and Kyrgyzstan.

## Tech Stack

- **React 19** + **TypeScript** — UI framework
- **Vite** — build tool (port 5000)
- **Tailwind CSS v4** (`@tailwindcss/vite`) — styling
- **React Router v6** — multi-page navigation
- **Framer Motion** — animations
- **Lucide React** — icons
- **shadcn/ui** (Radix primitives) — accessible components
- **clsx + tailwind-merge** — class utilities

## Architecture

```
src/
  components/
    layout/       # Navbar, Footer (shared across pages)
    home/         # Homepage-specific sections
  pages/          # Route-level page components
  data/           # Mock/static JSON data (Week 1 only)
  lib/            # Utility functions (cn, etc.)
```

## Week 1 Rules

- UI-only prototype — no backend, no Supabase, no API calls
- All data is mock/static from `src/data/mock.ts`
- Every button navigates via React Router
- PRD is functional source of truth
- Figma upload is visual source of truth

## User Preferences

- Never add features or pages outside the scope of explicit user requests
- Always ask before making architectural or structural changes
- Design style: Premium, Professional, Minimal, Modern, Corporate
- Priority order: PRD > User Instructions > Figma > NRZ Website
