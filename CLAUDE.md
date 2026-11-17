# CLAUDE.md: Devarsh Kotak portfolio

@AGENTS.md

This is my personal portfolio (`devarshkotak.com`). The site is **built**; work here is maintenance, polish and new sections on top of an existing design system. Match what exists before inventing anything.

Next.js 16 has breaking changes against what you probably remember (see the imported `AGENTS.md`). Before using a Next API you have not already seen used in this repo, read the matching guide under `node_modules/next/dist/docs/`.

## What the site is for

- **Devarsh Kotak** is the primary identity: a product engineer and designer. **RCintel** is my design studio (product, brand, motorsport/HMI), launching January 2027. It gets a clearly separate "portal" inside this site, never equal billing.
- Visitors: studio clients and collaborators first, product-engineering and design hiring second.
- A visitor should understand within a few seconds: **I can design it and build it.**

## Commands

Run everything from this directory (`my-portfolio/`). Shell is Windows; `npm` scripts work in PowerShell and Git Bash.

| Task | Command |
|---|---|
| Dev server (port 3000) | `npm run dev` |
| Typecheck | `npx tsc --noEmit` |
| Production build (also typechecks, prerenders every route) | `npm run build` |

There is no linter, no test runner and no git repository. That means: no `npm run lint`, no `npm test`, and **no undo**. Never delete or overwrite a file you have not read, and do not do sweeping find-and-replace across files. The `eslint-disable` comments in the code are leftovers; leave them, do not add more.

Do not add dependencies without asking. The stack is fixed: Next.js App Router, React 19, TypeScript (strict), Tailwind CSS v4, `motion`. No UI kits, no icon packages (icons are hand-drawn in `components/ui/icons.tsx`), no 3D libraries.

## Map

```
content.ts                 all copy and data (repo root, no src/ folder)
resume.md                  source of truth for facts about me
app/layout.tsx             fonts, metadata, intro gate script, PageTransition provider
app/globals.css            design tokens (@theme) and the few global utility classes
app/page.tsx               home: section order lives here
app/rcintel/               RCintel coming-soon page (own fonts and CSS)
app/case-studies/          case study index + /case-studies/rcintel
app/logo-preview/          internal specimen lab, not linked from the site
components/<section>/      one folder per home section (hero, about, work, ...)
components/ui/             shared primitives: MonoLabel, DrawnUnderline, BeamSweep, Magnetic, useMediaQuery, icons, Footer
components/transition/     TransitionLink + the two page-transition overlays
public/rcintel/            RCintel brand kit v2.0: source of truth for RCintel
portfolio-inspo/           19 reference screenshots + NOTES.md
```

Import alias: `@/` is this directory, so `@/content`, `@/components/ui/MonoLabel`.

Home section order and ids (the side rail and nav anchor to these ids, so keep them in sync with `rail` and `nav` in `content.ts`):
`#top` Hero → `#about` About → `#work` Work → `#case-studies` Case studies → `#beliefs` Beliefs → `#studio` Studio Bridge → `#lab` Lab → `#contact` "What I look for" → Footer.

## Content rules

These matter more than anything visual. A portfolio with one invented claim is worse than one with a gap.

1. **Facts come from two places only:** `resume.md` for me and my projects, `public/rcintel/` (README, colours, fonts, guidelines) for RCintel. A fact is anything a client could check: employers, clients, dates, metrics, numbers, tech used, links, availability, testimonials.
2. **If it is not in a source, do not write it.** Do not round up, infer a metric from a description, or add tech to a stack because it is plausible. Ask me, or use a placeholder.
3. **Placeholders are visible and literal:** `[PLACEHOLDER: what is missing]`. For a missing image use `components/work/Placeholder.tsx`; for a missing link pass `href: null` to `ConnectFan`, which renders a dashed chip.
4. **Copy I have not approved is marked as a draft** in `content.ts` with a `// DRAFT:` comment or a `draft: true` field. When you write new copy for me (headings, beliefs, taglines), mark it. Do not remove a draft marker; I do that.
5. **All user-visible copy lives in `content.ts`**, typed, and components import it. This includes button labels, aria-labels with wording, and page metadata. Short structural glyphs (`→`, `·`) can stay inline.
6. **Projects are few and real.** Featured: RaceIntel360 (RI360), Safal Vidyalaya. Small cards: RCintel Brand System, Wedding RSVP Platform. Do not add a project, pad the grid, or build a many-card layout. The AI Job Application Agent is in `resume.md` but currently not shown.
7. Write copy plainly, in first person, sentence case. No superlatives, no agency filler ("bespoke", "synergy", "cutting-edge").

**Known debt, do not treat it as precedent.** `caseStudies` in `content.ts`, `app/case-studies/rcintel/page.tsx`, `components/work/ProjectVisual.tsx` and `components/lab/DynamicIslandLab.tsx` contain claims and copy that are in neither source (metrics, years, feature lists, availability) and copy hardcoded in JSX. Do not copy that style into new work and do not quote those claims elsewhere. Do not silently delete them either: list what you find and ask me.

## Design system

Use the tokens. They are defined once in `app/globals.css` under `@theme` and exposed as Tailwind classes (`bg-canvas`, `text-ink`, `border-accent`, `font-serif`, ...).

| Token | Value | Use |
|---|---|---|
| `canvas` / `canvas-grid` | `#111111` / `#1e1e22` | dark desk background and its grid lines |
| `chalk` / `chalk-muted` | `#ede8df` / `#a3a3a8` | text on dark |
| `paper` / `paper-grid` | `#f4efe6` / `#e6dec8` | cream cards and notes |
| `ink` / `ink-soft` | `#18181b` / `#27272a` | text on paper |
| `accent` | `#d94e34` | terracotta: card borders, doodles, active states, primary CTAs, focus ring |
| `streak` | `#22d3ee` | cyan, only as low-opacity light: streaks, rim glow on hover. Never text, fills or borders |
| `curtain` | `#0b0b0d` | intro curtain only |
| `studio-*`, `--rc-*` | brand kit values | RCintel surfaces only |

- **No raw hex or `rgb()` in new components.** If a colour is missing, add a token to `@theme` and say so in your summary. The existing shadow recipes with `rgb(34 211 238 / …)` are the one accepted exception; reuse them from `TiltedCard`/`Hero` rather than inventing new ones.
- **Two palettes never mix.** Terracotta, cream and cyan belong to the portfolio. RCintel colours appear only inside the Studio Bridge card, `/rcintel` and `/case-studies/rcintel`. RCintel logo files are used unmodified, at or above the minimum sizes in the brand kit README.
- **Type:** Fraunces (`font-serif`) for headings and the tagline, Geist (`font-sans`) for body, Geist Mono (`font-mono`) for labels and telemetry-style details. RCintel routes use Sora and Inter. Load fonts with `next/font/google` in a layout, never with a `<link>` tag. Do not add a typeface.
- **Reuse before building:** section header = `MonoLabel` eyebrow + serif `h2` + `DrawnUnderline`; surfaces = `.bg-canvas-grid`, `.bg-paper-grid`, `.bg-paper-ruled`, `.cutting-mat`; container = `mx-auto max-w-5xl px-4 sm:px-8`.
- **Images:** photos through `next/image` with real `alt` text from `content.ts`. Brand-kit SVGs may use a plain `<img>` with explicit `width` and `height`.
- **Originality:** the references are for structure and mood. Do not reproduce their artwork, doodles, wording or names. No F1 logo, team marks, cars, helmets or flags. The monogram is my own `DK` mark (`components/intro/Monogram.tsx`).
- `portfolio-inspo/NOTES.md` predates the final palette. Where it disagrees with this file (card colour, streak colour), this file wins. Open individual screenshots only for the section you are working on; never load all 19.

## Component conventions

- **Server by default.** Section components (`Hero`, `Work`, `About`, ...) are server components that read `content.ts` and render all text. Add `"use client"` only to the small leaf that needs state, effects or pointer events (`RotatingWord`, `TiltCard`, `Checklist`), and pass copy to it as props.
- One component per file, named export, PascalCase filename matching the export, a one-line JSDoc saying what it does and how it degrades. Keep files under about 150 lines; split when larger.
- Props typed inline; `className` passed through for layout. Tailwind utilities in JSX; add a class to `globals.css` only for things utilities cannot express (multi-layer backgrounds, keyframes).
- **Links:** same-page anchors are plain `<a href="#id">`. Links between routes use `TransitionLink` so the page transition plays. External links get `target="_blank" rel="noopener noreferrer"`. The RCintel link is always `studio.href` from `content.ts` (currently the in-site `/rcintel`; at launch it switches to `studio.liveUrl`), never a hardcoded URL.
- **Breakpoints with meaning:** below `md` (768px) cards are flat and stacked with no tilt or scroll drift; from `lg` the rail is a left column, below it a bottom bar (hence `pb-14 lg:pb-0 lg:pl-14` on the page wrapper).

## Motion rules

Import from `motion/react`. The `framer-motion` package is not installed; do not import from it.

1. **Text is never hidden waiting for JavaScript.** Entrances may move, rotate or scale content, but must not start it at `opacity: 0` or clipped. Starting at `opacity: 0` is fine only for decoration (SVG strokes, streaks) and for popovers that are closed by default (connect fan, tooltips). Overlays such as the intro curtain sit on top of fully rendered HTML and need a no-JS failsafe like `.intro-curtain` has.
2. Every `whileInView` uses `viewport={{ once: true, amount: "some" }}`.
3. **Animate only** `x`, `y`, `scale`, `rotate`, `opacity`, `clipPath`, `pathLength`. Not `width`, `height`, `top`, `left`, `box-shadow` or colours (use a CSS `transition` for shadow and colour hovers). The one exception is the short `filter: blur` settle on the hero's rotating word.
4. **Reduced motion:** every client component that animates calls `useReducedMotion()` and gives a still, fully legible result: no drift, no tilt, no stagger, transitions of `{ duration: 0.01 }`. CSS animations get a `@media (prefers-reduced-motion: reduce)` rule.
5. **Hover effects are mouse-only:** pointer handlers check `e.pointerType === "mouse"`. Anything revealed on hover must also open on focus and on tap.
6. **Hydration:** anything depending on viewport, time or storage starts from the server-safe value and updates in an effect (`useMediaQuery` returns `false` first; `LocalTime` renders a fallback).
7. Springs, not durations, for anything the pointer drives. Take stiffness and damping from the nearest existing component (`Magnetic`, `TiltCard`, `TiltedCard`) so the site feels like one hand made it.
8. Motion needs a reason: feedback, continuity or a reward for interacting. If you cannot say which, leave it still.

## Accessibility and performance

- Real `<button>` and `<a>` elements; state exposed with `aria-expanded` / `aria-controls` / `aria-pressed`. Decorative SVG and duplicate text get `aria-hidden`.
- Keep the global `:focus-visible` ring. Never `outline: none` without a visible replacement.
- One `h1` per route; sections use `h2`. Body text meets WCAG AA on its surface (`chalk-muted` on `canvas` and `ink-soft` on `paper` are the lowest-contrast pairs allowed for text).
- Works from 360px wide with no horizontal scroll.
- Every route stays statically prerendered (`○` in the build output). No `fetch` at render, no dynamic APIs, no route handlers, without asking.

## Definition of done

Work is finished only when all of these are true. Run them; do not assume.

1. `npm run build` exits 0 and every route in the table is marked `○ (Static)`. No new warnings.
2. **Text is in the HTML.** For each string you added or changed: `grep -c "the string" .next/server/app/index.html` (or `rcintel.html`, `case-studies.html`, ...) returns at least 1.
3. **You looked at it.** With the dev server running, load the changed section at 1280px and at 360px. At 360px, `document.documentElement.scrollWidth <= window.innerWidth` is `true`. The browser console has no errors and no hydration warnings.
4. **Keyboard:** Tab reaches every control you added, focus is visible, Enter/Space/Escape work.
5. **Reduced motion:** with `prefers-reduced-motion: reduce` emulated, the change is still and complete.
6. **Content audit of your own diff:** no new copy in JSX, no new raw hex, no fact that is not in a source, new copy marked as draft.
7. Rail, nav and section ids still agree if you added, removed or reordered a section.

If you could not run a check (no browser available, for example), say exactly which one in your summary. "Build passes" is not the same claim as "verified in the browser"; never report the second when you only did the first.

## How to work with me

- **Small changes** (copy edits, spacing, a bug, one component): just do it, verify, report.
- **Anything that adds or removes a section, a route, a dependency, a token or a typeface, or restyles more than one section:** give me a short plan first (what changes, which files, what motion) and wait for my OK.
- Once I approve a plan, work through it in one pass. Do not stop after each file, and do not ask for routine confirmations.
- If a request conflicts with a rule here (I ask for a metric that is not in `resume.md`, say), tell me which rule and ask; do not quietly pick one.
- Stay inside the request. If you notice other problems, list them at the end instead of fixing them.
- End with: what changed (files), which definition-of-done checks you ran and their results, anything you marked as draft or placeholder, and open questions.
