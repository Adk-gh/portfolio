# Design Specification — Aderik "Adi" Bermas Portfolio

This document defines the visual system and structural layout for the portfolio. The goal is a **minimalist corporate + technical** aesthetic: professional, restrained, and high-contrast.

## 1. Visual Tokens

### Palette
Implemented as CSS Custom Properties to ensure consistency and easy tuning.

| Token | Value | Use Case |
| :--- | :--- | :--- |
| `--color-bg` | `#F4F1E9` | Main warm cream background |
| `--color-surface` | `#FBFAF6` | Cards, raised surfaces, navigation backgrounds |
| `--color-text` | `#202722` | Primary headings and body text (Deep Charcoal/Green) |
| `--color-muted` | `#626B64` | Secondary text, captions, footer text |
| `--color-primary` | `#234B3B` | Deep forest green: Buttons, active links, accent borders |
| `--color-primary-hover` | `#193B2E` | Hover state for primary elements |
| `--color-border` | `#D8DCD4` | Dividers, card borders, input borders |
| `--color-soft-green` | `#E4EAE2` | Subtle background highlights, badge backgrounds |
| `--color-focus` | `#9A6B36` | High-visibility keyboard focus ring (Warm Gold/Brown) |

### Typography
- **Font Family:** System sans-serif stack (Inter, Roboto, or system default) for maximum performance and professionalism.
- **Scale:**
  - `h1`: Large, bold, high-impact (Hero)
  - `h2`: Clear, distinct section headers
  - `h3`: Bold project titles
  - `body`: Comfortable line-height (1.6), optimized for readability.
- **Constraint:** No animated typing effects or oversized display gimmicks.

## 2. Layout & Architecture

### Global Constraints
- **Max Width:** 1200px centered container.
- **Spacing:** Consistent 8px-based spacing scale (padding/margins).
- **Borders:** Subtle 1px borders, small corner radius (4px-8px), no heavy shadows.
- **No-Go Zone:** No gradients, no glassmorphism, no parallax, no scroll-jacking.

### Component Behavior
- **Navigation:** Sticky header with anchor links. Mobile navigation uses a clean, accessible slide-out or dropdown menu.
- **Project Cards:**
  - Image (Top) $\rightarrow$ Title $\rightarrow$ Short Summary $\rightarrow$ Tech Badges $\rightarrow$ Action Link.
  - Hover: Subtle lift or border-color change to `--color-primary`.
- **Case Studies:**
  - Vertical storytelling layout.
  - High-contrast sections: Overview $\rightarrow$ The Problem $\rightarrow$ Technical Implementation $\rightarrow$ Results.

## 3. Page Structure (Wireframe)

### Homepage (Single Page / Hybrid)
1. **Header:** [Logo/Name] --- [Projects] [About] [Experience] [Skills] [Contact] --- [Résumé Button]
2. **Hero:**
   - Left/Center: Professional Photo (Placeholder until supplied).
   - Right/Center: Name $\rightarrow$ Headline $\rightarrow$ Supporting Statement $\rightarrow$ [View Projects] [Contact Me].
3. **Featured Projects:**
   - Grid of `ProjectCard` components.
   - Logic: Render from `src/data/projects.js`.
4. **About:**
   - Two-column layout: Short bio and professional goals.
5. **Experience & Education:**
   - Timeline-style list. Clearly distinguish academic projects from employment.
6. **Skills:**
   - Grouped categories (Frontend, Backend, etc.) using simple text badges.
7. **Contact:**
   - Minimalist section: "Let's Connect" $\rightarrow$ Direct Email Link/Form.
8. **Footer:**
   - Copyright $\rightarrow$ Social Links (GitHub, LinkedIn) $\rightarrow$ Simple Nav.

## 4. Responsive Strategy
- **Desktop (>1024px):** Full grid, multi-column layouts.
- **Tablet (768px - 1023px):** 2-column grids, adjusted padding.
- **Mobile (<767px):** Single column, simplified navigation (hamburger), touch-friendly targets.
