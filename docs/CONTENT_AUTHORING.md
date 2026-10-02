# ✍️ Content Authoring & Data Management Guide — Madhan Alagarsamy Portfolio

This guide explains how to add new security research writeups, publish verified security advisories, update engineering projects, adjust technical skills, and generate composite social preview graphics.

---

## 📑 Table of Contents

- [1. Architecture Overview](#1-architecture-overview)
- [2. Publishing a Security Research Writeup](#2-publishing-a-security-research-writeup)
  - [2.1 The `BlogPost` Interface](#21-the-blogpost-interface)
  - [2.2 Step-by-Step Walkthrough](#22-step-by-step-walkthrough)
  - [2.3 Formatting Technical Sections & Code Blocks](#23-formatting-technical-sections--code-blocks)
  - [2.4 Coordinated Disclosure Timeline](#24-coordinated-disclosure-timeline)
  - [2.5 Complete Code Template](#25-complete-code-template)
- [3. Registering a Verified Security Advisory](#3-registering-a-verified-security-advisory)
  - [3.1 The `AdvisoryItem` Interface](#31-the-advisoryitem-interface)
  - [3.2 Advisory Template](#32-advisory-template)
- [4. Updating Professional Identity & Experience](#4-updating-professional-identity--experience)
  - [4.1 Profile Information](#41-profile-information)
  - [4.2 Career Experience](#42-career-experience)
- [5. Updating Skills & Projects](#5-updating-skills--projects)
- [6. Generating Composite Preview Cards (`render_composites.py`)](#6-generating-composite-preview-cards-render_compositespy)
- [7. Verification & Build Validation](#7-verification--build-validation)

---

## 1. Architecture Overview

All site content is stored in statically typed TypeScript files within the `data/` directory. No database migrations, headless CMS setups, or API tokens are required.

```text
data/
├── advisory.ts     # Verified GitHub & Apple advisories for homepage
├── education.ts    # Degrees & academic affiliations
├── experience.ts   # Founder & Research roles
├── posts.ts        # Comprehensive security writeups & PoCs
├── profile.ts      # Author name, roles, bio, and social handles
├── projects.ts     # Decimal Optical Transfer & featured builds
├── research.ts     # Research focus areas & targets
├── seo.ts          # Central SEO settings, canonical URLs, keywords
└── skills.ts       # 5-tier technical taxonomy
```

---

## 2. Publishing a Security Research Writeup

Security writeups are rendered dynamically at `/blog/[slug]` and indexed on the `/blog` directory.

### 2.1 The `BlogPost` Interface

Located in [`data/posts.ts`](../data/posts.ts):

```typescript
export interface BlogPost {
  slug: string;                           // Unique URL slug (e.g. "cve-2026-xxxxx")
  title: string;                          // Full technical title
  summary: string;                        // Executive summary (used in meta tags & cards)
  publishedDate: string;                  // e.g. "Oct 2026" or "Sep 15, 2026"
  readTime: string;                       // e.g. "8 min read"
  category: "Security Advisory" | "Research" | "Guide" | "Analysis";
  tags: string[];                         // Topic tags for client-side search filtering
  coverImage?: string;                    // Absolute path in public/ (e.g. "/images/xyz.jpg")
  advisoryId?: string;                    // e.g. "GHSA-xxxx-xxxx-xxxx" or "apple/container#2261"
  targetRepo?: string;                    // e.g. "organization/repository"
  severity?: "Low" | "Moderate" | "High" | "Critical";
  cwe?: string[];                         // Array of CWE tags (e.g. ["CWE-78", "CWE-829"])
  patchedVersions?: string[];             // e.g. ["v2.4.1", "PR #1234"]
  githubAdvisoryUrl?: string;             // External link to GitHub advisory or PR
  overview: string;                       // Detailed background & vulnerability context
  timeline?: TimelineEntry[];             // Disclosure dates & milestone events
  vulnerabilityDetails: SectionBlock[];   // In-depth technical breakdown & code snippets
  poc?: {                                 // Proof of Concept explanation & request payloads
    description: string;
    steps: string[];
    requestSnippet?: CodeBlock;
  };
  impact: string;                         // Enterprise & supply chain impact assessment
  remediation: string;                    // Defensive mitigations & recommendations
  patchDetails?: {                        // Official maintainer fix & diff analysis
    description: string;
    codeSnippet?: CodeBlock;
  };
  references: { title: string; url: string }[]; // External citations & links
}
```

### 2.2 Step-by-Step Walkthrough

1. Open [`data/posts.ts`](../data/posts.ts).
2. Append a new object to the `blogPosts` array conforming to the `BlogPost` schema.
3. Choose a URL-safe, lowercase `slug` (e.g. `ghsa-xxxx-shell-injection`).
4. Ensure the `slug` is unique across all posts.
5. Next.js static site generation (`generateStaticParams`) will automatically detect the new slug during the next build.

### 2.3 Formatting Technical Sections & Code Blocks

Use `vulnerabilityDetails` to structure the narrative into numbered sections. Each section can include optional code snippets:

```typescript
vulnerabilityDetails: [
  {
    heading: "Vulnerable Parameter Flow in Workflow Runner",
    description: "The action accepted untrusted input from commit payloads without input sanitization...",
    codeSnippet: {
      language: "yaml",
      caption: "Vulnerable composite action step definition (.github/actions/run.yml)",
      code: `name: Vulnerable Action
runs:
  using: 'composite'
  steps:
    - run: echo "Author: ${{ inputs.author_name }}"
      shell: bash`
    }
  }
]
```

### 2.4 Coordinated Disclosure Timeline

Document the timeline to demonstrate responsible disclosure:

```typescript
timeline: [
  { date: "Aug 12, 2026", event: "Initial discovery & reproduction in local container environment" },
  { date: "Aug 14, 2026", event: "Vulnerability reported securely to maintainers via GitHub Advisory" },
  { date: "Aug 18, 2026", event: "Maintainer acknowledged flaw and drafted patch" },
  { date: "Aug 25, 2026", event: "Patch merged and security advisory published" }
]
```

### 2.5 Complete Code Template

```typescript
{
  slug: "new-vulnerability-writeup-slug",
  title: "Critical Vulnerability Discovered in Open-Source Ecosystem",
  summary: "Comprehensive technical analysis of an authenticated remote execution flaw...",
  publishedDate: "Oct 2026",
  readTime: "10 min read",
  category: "Security Advisory",
  tags: ["AppSec", "Command Injection", "CI/CD Security", "CWE-78"],
  coverImage: "/images/new-vulnerability.jpg",
  advisoryId: "GHSA-xxxx-xxxx-xxxx",
  targetRepo: "vendor / project",
  severity: "Critical",
  cwe: ["CWE-78", "CWE-94"],
  patchedVersions: [">= 1.4.2"],
  githubAdvisoryUrl: "https://github.com/vendor/project/security/advisories/GHSA-xxxx-xxxx-xxxx",
  overview: "During an audit of the automated orchestration pipeline, an injection point was identified...",
  timeline: [
    { date: "Sep 01, 2026", event: "Discovery and verified PoC created" },
    { date: "Sep 05, 2026", event: "Responsible disclosure submitted to vendor" },
    { date: "Sep 12, 2026", event: "Vendor releases patched release v1.4.2" }
  ],
  vulnerabilityDetails: [
    {
      heading: "Root Cause Analysis",
      description: "Direct string interpolation was utilized within a subprocess execution call.",
      codeSnippet: {
        language: "python",
        caption: "Vulnerable Subprocess Execution",
        code: `subprocess.run(f"echo {user_input}", shell=True)`
      }
    }
  ],
  poc: {
    description: "The flaw can be reproduced by passing shell metacharacters within the parameter:",
    steps: [
      "Send request with payload: '; id; #' in the target field",
      "Observe runner executing the 'id' command with CI worker privileges"
    ]
  },
  impact: "Full runner environment compromise and potential supply chain secret leakage.",
  remediation: "Upgrade to version 1.4.2 or higher, which executes commands using array parameters without shell=True.",
  patchDetails: {
    description: "Maintainers replaced the shell interpolation with parameterized process arguments.",
    codeSnippet: {
      language: "python",
      caption: "Patched Implementation",
      code: `subprocess.run(["echo", user_input], shell=False)`
    }
  },
  references: [
    { title: "GitHub Advisory Record", url: "https://github.com/vendor/project/security/advisories/GHSA-xxxx-xxxx-xxxx" }
  ]
}
```

---

## 3. Registering a Verified Security Advisory

The homepage `#advisory` section showcases your confirmed security discoveries.

### 3.1 The `AdvisoryItem` Interface

Located in [`data/advisory.ts`](../data/advisory.ts):

```typescript
export interface AdvisoryItem {
  id: string;               // Advisory identifier (e.g. "apple/container#2261" or "GHSA-...")
  slug?: string;            // Optional internal blog writeup slug for cross-linking
  title: string;            // Vulnerability title
  targetRepo: string;       // Affected repository
  platform: string;         // e.g. "GitHub Security Advisory" or "Apple Open Source Security"
  url: string;              // External link to advisory or pull request
  badge: string;            // Display badge text (e.g. "VERIFIED GITHUB SECURITY ADVISORY")
  severity?: string;        // "Critical" | "High" | "Moderate" | "Low"
  cwe?: string[];           // Array of CWE tags
  patchedVersions?: string[];// Patched version or PR identifier
  publishedDate?: string;   // e.g. "Sep 2026"
  description: string;      // Detailed description of discovery and resolution
}
```

### 3.2 Advisory Template

Append your advisory to the `advisories` array in `data/advisory.ts`:

```typescript
{
  id: "GHSA-xxxx-xxxx-xxxx",
  slug: "your-blog-slug-if-available",
  title: "Arbitrary Code Execution via Unsanitized Input",
  targetRepo: "organization / project",
  platform: "GitHub Security Advisory",
  url: "https://github.com/organization/project/security/advisories/GHSA-xxxx-xxxx-xxxx",
  badge: "VERIFIED GITHUB SECURITY ADVISORY",
  severity: "Critical",
  cwe: ["CWE-78"],
  patchedVersions: ["2.0.1"],
  publishedDate: "Oct 2026",
  description: "Discovered and responsibly disclosed a Critical vulnerability permitting remote command execution..."
}
```

---

## 4. Updating Professional Identity & Experience

### 4.1 Profile Information

Edit [`data/profile.ts`](../data/profile.ts):
- `name`: Display name (`"MADHAN ALAGARSAMY"`)
- `title`: Primary headline
- `roles`: Array of role highlights displayed in the hero section
- `founderOf`: Organization (`"Net Corporation"`)
- `location`: Operational base
- `email`: Contact inbox (`"amadhan882@gmail.com"`)
- `github`: Profile URL (`"https://github.com/madhanalagarsamy"`)
- `summary`: Comprehensive professional narrative

### 4.2 Career Experience

Edit [`data/experience.ts`](../data/experience.ts):
- Add or modify items in `experienceData`.
- Categorize each role as `"FOUNDER"` or `"RESEARCH"`.
- Provide an array of bulleted `responsibilities`.

---

## 5. Updating Skills & Projects

### Technical Skills Taxonomy
Edit [`data/skills.ts`](../data/skills.ts):
- Add categories or modify specific technologies inside `skillsData`.

### Featured Projects
Edit [`data/projects.ts`](../data/projects.ts):
- Modify `featuredProjectData` to highlight new software systems, cryptographic protocols, or architectural innovations.

---

## 6. Generating Composite Preview Cards (`render_composites.py`)

To create high-resolution social preview and article cover graphics:

1. **Prerequisites**: Python 3.10+ and Microsoft Edge installed.
2. **Configuration**: Open [`render_composites.py`](../render_composites.py).
3. **Add Card Definition**:
   ```python
   create_composite_image(
       output_name="my-new-advisory.jpg",
       title="Critical Shell Injection in CI Workflow",
       badge_text="VERIFIED GITHUB ADVISORY",
       severity_text="CRITICAL SEVERITY",
       cwe_tags=["CWE-78", "CWE-94"],
       target_repo="organization / repo",
       terminal_lines=[
           "TARGET: organization/repo",
           "SEVERITY: CRITICAL (CVSS 9.8)",
           "CWE: CWE-78 (OS Command Injection)",
           "STATUS: VENDOR PATCH VERIFIED"
       ]
   )
   ```
4. **Execute**:
   ```bash
   python render_composites.py
   ```
5. The generated image will be saved to `public/images/my-new-advisory.jpg`.
6. Reference this path in `data/posts.ts` under the `coverImage` attribute:
   ```typescript
   coverImage: "/images/my-new-advisory.jpg"
   ```

---

## 7. Verification & Build Validation

Before committing new content to git, run validation checks:

```bash
# 1. Verify TypeScript types and ESLint conformance
npm run lint

# 2. Run static site compilation to verify SSG routing
npm run build
```

If both commands exit cleanly with code `0`, your new content is production-ready!

---

*Authored by Madhan Alagarsamy. Maintained under the architecture repository of [`https://madhanalagarsamy.site`](https://madhanalagarsamy.site).*
