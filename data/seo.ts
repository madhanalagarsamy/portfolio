export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://madhanalagarsamy.vercel.app");

export const SEO_CONFIG = {
  defaultTitle: "Madhan Alagarsamy (MADHAN A) — Cybersecurity Researcher | Software Developer | Founder",
  titleTemplate: "%s | Madhan Alagarsamy",
  description:
    "Official technical portfolio and security research writelog of Madhan Alagarsamy (MADHAN A) — Independent Cybersecurity Researcher, Software Developer, and Founder of Net Corporation. Read detailed writeups on Apple container DoS #2261, GitHub Security Advisories, IDOR disclosures, and CI/CD security.",
  author: "Madhan Alagarsamy",
  blogTitle: "Madhan Alagarsamy Blog — Cybersecurity Research & Vulnerability Writeups",
  blogDescription:
    "Official technical research blog of Madhan Alagarsamy (MADHAN A). Featuring in-depth vulnerability writeups, verified GitHub Security Advisories, Apple container patches, IDOR proofs of concept, and defensive security engineering.",
  keywords: [
    // Top-Rank Search Queries for "Madhan Alagarsamy Blog"
    "Madhan Alagarsamy Blog",
    "madhan alagarsamy blog",
    "Madhan Alagarsamy Security Blog",
    "Madhan Alagarsamy Research Blog",
    "MADHAN A Blog",
    "madhan a blog",
    "Madhan Alagarsamy Official Blog",
    "Madhan Alagarsamy Technical Blog",
    "Madhan Alagarsamy Writeups",
    "Madhan Alagarsamy Security Research",
    "madhan alagarsamy cybersecurity",
    "madhan alagarsamy cve",
    "madhan alagarsamy advisories",

    // Personal Brand & Search Identity
    "Madhan Alagarsamy",
    "MADHAN A",
    "Madhan A",
    "madhanalagarsamy",
    "Madhan Alagarsamy Portfolio",
    "Cybersecurity Researcher Hosur",
    "Cybersecurity Researcher Tamil Nadu",
    "Cybersecurity Researcher India",
    "Net Corporation Founder",
    
    // Official Discoveries & Advisories
    "GHSA-8rfq-rmx4-8qhr",
    "GHSA-x3cj-mm38-329g",
    "GHSA-9v52-vhvw-4w5c",
    "GHSA-r3jq-vxqh-pgrg",
    "apple/container #2261",
    "apple/container PR #2260",
    "Apple Container ConnectHandler DoS",
    "BigBlueButton IDOR Vulnerability",
    "gouef/githubtoplanguages shell injection",
    "gouef/githubtoplanguages PAT theft",

    // Technical Domains & Methodologies
    "Application Security (AppSec)",
    "Vulnerability Assessment & Penetration Testing (VAPT)",
    "Coordinated Vulnerability Disclosure (CVD)",
    "GitHub Actions Security Hardening",
    "Swift-NIO Security",
    "CI/CD Supply Chain Security",
    "Insecure Direct Object References (IDOR)",
    "Command Injection (CWE-78)",
    "Resource Exhaustion (CWE-400)",
    "Full-Stack Web Engineering",
    "Defensive Architecture"
  ],
  social: {
    github: "https://github.com/madhanalagarsamy",
    email: "amadhan882@gmail.com"
  }
};
