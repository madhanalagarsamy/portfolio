# 🧩 Component Catalog & UI Reference — Madhan Alagarsamy Portfolio

This document provides a comprehensive developer reference for all UI components in the codebase, detailing their interfaces, internal behaviors, styling rules, and animation systems.

---

## 📑 Table of Contents

- [1. Global Providers & Layout Drivers](#1-global-providers--layout-drivers)
  - [CinematicVideo](#cinematicvideo)
  - [SmoothScroll](#smoothscroll)
  - [JsonLd](#jsonld)
  - [Navigation](#navigation)
- [2. Homepage Storytelling Sections](#2-homepage-storytelling-sections)
  - [Hero](#hero)
  - [About](#about)
  - [Experience](#experience)
  - [SecurityResearch](#securityresearch)
  - [SecurityAdvisory](#securityadvisory)
  - [Skills](#skills)
  - [FeaturedProject](#featuredproject)
  - [Education](#education)
  - [Contact](#contact)
  - [Footer](#footer)
- [3. Security Research Blog Components](#3-security-research-blog-components)
  - [BlogList](#bloglist)
- [4. Vector Icons](#4-vector-icons)
  - [GithubIcon](#githubicon)

---

## 1. Global Providers & Layout Drivers

### `CinematicVideo`
- **File**: [`components/CinematicVideo.tsx`](../components/CinematicVideo.tsx)
- **Directive**: `"use client"`
- **Purpose**: High-performance persistent dual-video ambient canvas that loops forward and reverse seamlessly without loop hitching.
- **Props**: None.

```typescript
export default function CinematicVideo(): JSX.Element
```

#### Internal Architecture
- **State**:
  - `activeVideo: 1 | 2`: Tracks which video element holds primary opacity.
  - `hasError: boolean`: If media fails to load, gracefully falls back to a CSS ambient dark gradient (`from-neutral-950 via-black to-neutral-950`).
- **Refs**:
  - `video1Ref: RefObject<HTMLVideoElement>`: Bound to `/video.mp4`.
  - `video2Ref: RefObject<HTMLVideoElement>`: Bound to `/reverse.mp4`.
- **Key Behaviors**:
  - Sets `playsinline`, `webkit-playsinline`, and `muted`.
  - Catches mobile autoplay restrictions and registers one-time touch/scroll listeners to trigger playback on first user gesture.
  - Alternates playback on `onEnded` events, using a 700ms cross-dissolve opacity transition.

---

### `SmoothScroll`
- **File**: [`components/SmoothScroll.tsx`](../components/SmoothScroll.tsx)
- **Directive**: `"use client"`
- **Purpose**: Physics-based smooth scroller wrapper using Lenis, synchronizing scroll momentum with display refresh rates.

```typescript
interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps): JSX.Element
```

#### Configuration
- **Duration**: `1.2` seconds.
- **Easing Curve**: `(t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))` (custom exponential ease-out).
- **Wheel Multiplier**: `1`
- **Touch Multiplier**: `1.5`
- **Accessibility**: Verifies `window.matchMedia("(prefers-reduced-motion: reduce)").matches` and gracefully halts interpolation if active.

---

### `JsonLd`
- **File**: [`components/JsonLd.tsx`](../components/JsonLd.tsx)
- **Directive**: Server Component
- **Purpose**: Safely injects structured Schema.org JSON-LD scripts into the DOM `<head>` for search engine indexing.

```typescript
interface JsonLdProps {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
}

export default function JsonLd({ data }: JsonLdProps): JSX.Element
```

#### Key Behaviors
- Serializes object or array into `<script type="application/ld+json">`.
- Uses `dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}` safely with pre-validated data.

---

### `Navigation`
- **File**: [`components/Navigation.tsx`](../components/Navigation.tsx)
- **Directive**: `"use client"`
- **Purpose**: Fixed top navigation bar supporting smooth hash navigation on the homepage, route transitions to `/blog`, and a full-screen animated mobile menu drawer.

```typescript
export default function Navigation(): JSX.Element
```

#### Navigation Manifest
```typescript
const navItems = [
  { label: "01 ABOUT", href: "/#about", hash: "#about" },
  { label: "02 EXPERIENCE", href: "/#experience", hash: "#experience" },
  { label: "03 RESEARCH", href: "/#research", hash: "#research" },
  { label: "04 ADVISORY", href: "/#advisory", hash: "#advisory" },
  { label: "05 SKILLS", href: "/#skills", hash: "#skills" },
  { label: "06 PROJECTS", href: "/#projects", hash: "#projects" },
  { label: "07 EDUCATION", href: "/#education", hash: "#education" },
  { label: "08 CONTACT", href: "/#contact", hash: "#contact" },
  { label: "09 BLOG", href: "/blog", isRoute: true },
];
```

#### State & Interactions
- `scrolled: boolean`: Detects `window.scrollY > 40` and transitions the navbar from transparent to a frosted backdrop (`bg-black/60 backdrop-blur-md border-b border-white/10`).
- `mobileMenuOpen: boolean`: Toggles the mobile flyout drawer with Framer Motion slide-in animations.
- Intelligent Hash Interception: If on the homepage (`/`), clicking a hash item prevents hard navigation and invokes native smooth DOM scrolling to target IDs.

---

## 2. Homepage Storytelling Sections

### `Hero`
- **File**: [`components/Hero.tsx`](../components/Hero.tsx)
- **Directive**: `"use client"`
- **Purpose**: High-impact editorial masthead displaying the author's primary identities and quick links.
- **Key Elements**:
  - Live pulse indicator pill: `PORTFOLIO & TECHNICAL IDENTITY`.
  - Massive typography: `MADHAN ALAGARSAMY` in Geist Sans.
  - Three core role columns:
    1. `CYBERSECURITY RESEARCHER`: Vulnerability discovery & defensive architecture.
    2. `SOFTWARE DEVELOPER`: High-concurrency systems & scalable execution.
    3. `FOUNDER`: Directing Net Corporation technology roadmaps.
  - Quick-action buttons linking to GitHub and smooth-scroll anchor `#about`.

---

### `About`
- **File**: [`components/About.tsx`](../components/About.tsx)
- **Directive**: `"use client"`
- **Purpose**: 4-pillar narrative detailing Madhan's core operational capabilities.
- **Pillars**:
  1. `01 RESEARCH`: VAPT, vulnerability assessments, and open-source contributions.
  2. `02 ENGINEERING`: Full-stack backend architectures, Python, TypeScript, and C++.
  3. `03 BUILDING`: Cryptographic software, Duo-QR mosaic, WebAssembly, SHA-256.
  4. `04 LEADERSHIP`: Net Corporation founder & technology roadmap director.

---

### `Experience`
- **File**: [`components/Experience.tsx`](../components/Experience.tsx)
- **Directive**: `"use client"`
- **Purpose**: Chronological timeline of technical leadership and open-source contributions.
- **Data Source**: [`data/experience.ts`](../data/experience.ts).
- **Featured Positions**:
  - **Founder & Lead Developer** at *Net Corporation* (May 2026 – Present).
  - **Independent Cybersecurity Researcher & Open-Source Contributor** (May 2025 – Present).

---

### `SecurityResearch`
- **File**: [`components/SecurityResearch.tsx`](../components/SecurityResearch.tsx)
- **Directive**: `"use client"`
- **Purpose**: Outlines the three primary research vectors and ecosystem targets.
- **Data Source**: [`data/research.ts`](../data/research.ts).
- **Vectors**:
  1. *Open-Source Ecosystem Patches* (PyTorch · TensorFlow · Keras).
  2. *Web Application Penetration Testing (VAPT)* (Attack surfaces & logic flaws).
  3. *Secure Code Review & Defensive Architecture* (Audits & code security desks).

---

### `SecurityAdvisory`
- **File**: [`components/SecurityAdvisory.tsx`](../components/SecurityAdvisory.tsx)
- **Directive**: `"use client"`
- **Purpose**: Showcases verified security advisories, vulnerability CVEs, and the 4-step Coordinated Disclosure Workflow.
- **Data Source**: [`data/advisory.ts`](../data/advisory.ts).
- **Featured Advisories**:
  - `apple/container#2261`: Swift-NIO ConnectHandler File Descriptor Exhaustion (DoS).
  - `GHSA-x3cj-mm38-329g`: PAT theft via self-referential composite action.
  - `GHSA-8rfq-rmx4-8qhr`: Critical shell injection in composite action inputs.
  - `GHSA-9v52-vhvw-4w5c`: BigBlueButton cross-meeting presentation upload IDOR.
  - `GHSA-r3jq-vxqh-pgrg`: BigBlueButton CI workflow comment spoofing.
- **Disclosure Process**:
  `01 RESEARCH` → `02 DISCOVERY` → `03 RESPONSIBLE DISCLOSURE` → `04 SECURITY IMPACT`.

---

### `Skills`
- **File**: [`components/Skills.tsx`](../components/Skills.tsx)
- **Directive**: `"use client"`
- **Purpose**: Comprehensive 5-category taxonomy of technical capabilities.
- **Data Source**: [`data/skills.ts`](../data/skills.ts).
- **Categories**:
  1. Programming Languages & Core (`Python`, `TypeScript`, `C++`, etc.).
  2. Vibe Coding & AI Tools (`Claude Code`, `Google Antigravity`, `Codex`, etc.).
  3. Web & Application Development (`Full-Stack`, `Backend Engineering`, `Deployment`).
  4. Cybersecurity & Research (`Secure Code Review`, `Threat Identification`, `VAPT`).
  5. Frameworks & Tools (`PyTorch`, `TensorFlow`, `OpenCV`, `CI/CD Workflows`).

---

### `FeaturedProject`
- **File**: [`components/FeaturedProject.tsx`](../components/FeaturedProject.tsx)
- **Directive**: `"use client"`
- **Purpose**: Deep dive into the *Decimal Optical Transfer* system.
- **Data Source**: [`data/projects.ts`](../data/projects.ts).
- **Key Highlights**:
  - High-throughput optical screen-to-camera transmission.
  - Duo-QR mosaic architecture doubling payload throughput.
  - Luby Transform (Fountain Codes) for lossy video recovery.
  - Support for 1 GB optical transfers with SHA-256 cryptographic verification.
  - Attribution to original author *Evan Crawley (Bash Alarmist)*.

---

### `Education`
- **File**: [`components/Education.tsx`](../components/Education.tsx)
- **Directive**: `"use client"`
- **Purpose**: Academic foundation cards for MCA and BCA degrees.
- **Data Source**: [`data/education.ts`](../data/education.ts).

---

### `Contact`
- **File**: [`components/Contact.tsx`](../components/Contact.tsx)
- **Directive**: `"use client"`
- **Purpose**: Call-to-action with direct contact channels and security advisory desk.
- **Links**:
  - Primary Email: `amadhan882@gmail.com`
  - GitHub: `github.com/madhanalagarsamy`
  - Security Research Consultation & CVD Desk

---

### `Footer`
- **File**: [`components/Footer.tsx`](../components/Footer.tsx)
- **Directive**: Server Component
- **Purpose**: Minimalist terminal footer with copyright, live status indicators, and author links.

---

## 3. Security Research Blog Components

### `BlogList`
- **File**: [`components/BlogList.tsx`](../components/BlogList.tsx)
- **Directive**: `"use client"`
- **Purpose**: Client-side interactive filter and search engine for technical writeups.

```typescript
interface BlogListProps {
  posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps): JSX.Element
```

#### State & Filtering Architecture
- **Search Query**: Evaluates user input against:
  - `post.title`
  - `post.summary`
  - `post.tags`
  - `post.advisoryId`
- **Tag Filter**: Automatically aggregates all unique tags into filter chips, defaulting to `"ALL"`.
- **Active Post Counter**: Renders dynamic feedback (`SHOWING 7 OF 7 ARTICLES`).
- **Article Card Elements**:
  - Cover image with hover zoom effect.
  - Advisory badge (e.g., `GHSA`, Apple Issue, Critical severity pill).
  - Target repository name.
  - CWE taxonomy labels.
  - Executive summary snippet.
  - Direct external link to official advisory alongside internal link to full writeup.

---

## 4. Vector Icons

### `GithubIcon`
- **File**: [`components/icons/GithubIcon.tsx`](../components/icons/GithubIcon.tsx)
- **Directive**: Server Component
- **Purpose**: Scalable inline SVG icon representing the GitHub Mark.
- **Props**: Accepts standard SVG props (`size?: number`, `className?: string`).

---

*Authored by Madhan Alagarsamy. Maintained under the architecture repository of [`https://madhanalagarsamy.site`](https://madhanalagarsamy.site).*
