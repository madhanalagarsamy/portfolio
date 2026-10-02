# 🔒 Security & Coordinated Vulnerability Disclosure (CVD) Policy

As an independent cybersecurity researcher and open-source contributor, **Madhan Alagarsamy** takes security and responsible engineering with the utmost seriousness.

This document outlines the security policy, vulnerability reporting guidelines, response service-level agreements (SLAs), and safe harbor terms for [`https://madhanalagarsamy.site`](https://madhanalagarsamy.site) and associated projects.

---

## 📑 Table of Contents

- [1. Coordinated Vulnerability Disclosure Commitment](#1-coordinated-vulnerability-disclosure-commitment)
- [2. Reporting a Vulnerability](#2-reporting-a-vulnerability)
- [3. Response & Triage SLAs](#3-response--triage-slas)
- [4. Scope](#4-scope)
  - [In-Scope](#in-scope)
  - [Out-of-Scope](#out-of-scope)
- [5. Safe Harbor Policy](#5-safe-harbor-policy)
- [6. Disclosure Timeline Standards](#6-disclosure-timeline-standards)
- [7. Hall of Fame & Acknowledgments](#7-hall-of-fame--acknowledgments)

---

## 1. Coordinated Vulnerability Disclosure Commitment

We believe that peer review and collaborative disclosure are the bedrock of digital security. If you believe you have discovered a security vulnerability in:
- The website infrastructure at [`https://madhanalagarsamy.site`](https://madhanalagarsamy.site)
- Any source code published within the [`madhanalagarsamy/portfolio`](https://github.com/madhanalagarsamy/portfolio) repository
- Any related public repositories or tools authored by Madhan Alagarsamy

We strongly encourage you to notify us immediately so that we can coordinate a fix before public disclosure.

---

## 2. Reporting a Vulnerability

Please report potential security vulnerabilities privately via email:

- **Security Desk**: [amadhan882@gmail.com](mailto:amadhan882@gmail.com)
- **Subject Line**: `[SECURITY VULNERABILITY] - <Component / Target>`

### Information to Include in Your Report
To help us triage and resolve the issue quickly, please provide:
1. **Description**: A clear description of the vulnerability and its potential impact.
2. **Reproduction Steps**: Step-by-step instructions or Proof-of-Concept (PoC) scripts.
3. **Affected Endpoints / Files**: Target URLs, HTTP request dumps, or specific source code locations.
4. **CWE Classification**: Suspected CWE identifier (e.g. CWE-78, CWE-79, CWE-639), if known.
5. **Remediation Suggestion**: Recommended patch or architectural mitigation (optional).

> [!IMPORTANT]
> **Please do not open public GitHub issues or public pull requests for unpatched security vulnerabilities.**

---

## 3. Response & Triage SLAs

We are committed to transparent, rapid coordination:

| Milestone | Target SLA |
| :--- | :--- |
| **Initial Acknowledgment** | Within **24 hours** of report receipt. |
| **Initial Triage & Assessment** | Within **48 hours** confirming reproduction. |
| **Status Updates** | Every **72 hours** until a patch is staged. |
| **Patch Verification** | Collaborative verification with reporter before deployment. |
| **Public Disclosure** | Mutually agreed timeline following patch verification. |

---

## 4. Scope

### In-Scope
- Vulnerabilities affecting [`https://madhanalagarsamy.site`](https://madhanalagarsamy.site)
- Server-side execution, template injection, or credential exposure
- Client-side vulnerabilities (XSS, prototype pollution, open redirects)
- Sensitive information leakage or unintended data exposure
- Dependency flaws impacting production builds

### Out-of-Scope
- Denial of Service (DoS/DDoS) attacks against third-party edge CDN providers (e.g. Vercel, Cloudflare)
- Social engineering, phishing, or physical attacks against maintainers
- Reports of missing security headers that do not demonstrate an exploitable vulnerability
- Outdated software versions without a reproducible exploit

---

## 5. Safe Harbor Policy

Activities conducted in accordance with this policy are considered **authorized conduct**. Madhan Alagarsamy will not initiate or pursue legal action against researchers who:
- Act in good faith to avoid privacy violations, destruction of data, and service interruption.
- Give us reasonable time to remedy the vulnerability before disclosing it publicly.
- Do not exploit a discovered vulnerability beyond the minimum necessary to verify its existence.
- Keep details of vulnerabilities confidential until mutual public disclosure is agreed upon.

---

## 6. Disclosure Timeline Standards

We follow standard **90-day Coordinated Vulnerability Disclosure (CVD)** principles. Once a patch has been merged, verified, and released to production, we will collaborate with the discoverer on a mutual advisory release or blog writeup.

---

## 7. Hall of Fame & Acknowledgments

Researchers who report valid, previously unknown security issues following this policy will be credited with their permission on our Security Advisories page and in relevant commit histories.

Thank you for helping keep the open-source ecosystem secure!

---

*Policy effective as of October 2026. Maintained by Madhan Alagarsamy.*
