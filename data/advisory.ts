export interface AdvisoryItem {
  id: string;
  slug?: string;
  title: string;
  targetRepo: string;
  platform: string;
  url: string;
  badge: string;
  severity?: string;
  cwe?: string[];
  patchedVersions?: string[];
  publishedDate?: string;
  description: string;
}

export const advisoryData = {
  advisories: [
    {
      id: "esp-rs/espflash#1074",
      slug: "espflash-self-hosted-runner-rce",
      title: "Arbitrary Code Execution on esp-rs/espflash Self-Hosted Runners via Untrusted Fork PRs",
      targetRepo: "esp-rs / espflash",
      platform: "Espressif / esp-rs Coordinated Disclosure & Security Fix",
      url: "https://github.com/esp-rs/espflash/pull/1074",
      badge: "ACKNOWLEDGED BY MAINTAINERS · FIXED IN PR #1074",
      severity: "Critical",
      cwe: ["CWE-284", "CWE-306"],
      patchedVersions: ["PR #1074 (HIL slash command gates & runner isolation)"],
      publishedDate: "Sep - Oct 2026",
      description: "Discovered and responsibly reported a Critical (CVSS 10.0) security vulnerability in esp-rs/espflash where untrusted fork pull requests executed arbitrary attacker-controlled workflows on self-hosted runners (Brno cluster) with GPIO/dialout access. Officially acknowledged by maintainers and remediated in PR #1074 with slash command gates and approval policies."
    },
    {
      id: "apple/container#2261",
      slug: "apple-container-connecthandler-fd-leak",
      title: "File Descriptor Exhaustion in Apple Container ConnectHandler (DoS)",
      targetRepo: "apple / container",
      platform: "Apple Open Source Security & Bug Fix",
      url: "https://github.com/apple/container/issues/2261",
      badge: "ACKNOWLEDGED BY APPLE · FIXED IN PR #2260",
      severity: "High",
      cwe: ["CWE-400", "CWE-775"],
      patchedVersions: ["PR #2260 (commit 56b95bc)"],
      publishedDate: "Aug - Sep 2026",
      description: "Discovered a socket file descriptor leak in Apple Container's Swift-NIO ConnectHandler where prematurely aborted client connections caused unreleased backend sockets, leading to monotonic FD exhaustion DoS. Officially acknowledged by Apple maintainers ('Thanks to @madhanalagarsamy for helping identify this bug!') and resolved in PR #2260."
    },
    {
      id: "GHSA-x3cj-mm38-329g",
      slug: "ghsa-x3cj-mm38-329g",
      title: "Self-Referential Composite Action Executes Long-Lived PAT on Scheduled Runs",
      targetRepo: "gouef / githubtoplanguages",
      platform: "GitHub Security Advisory",
      url: "https://github.com/gouef/githubtoplanguages/security/advisories/GHSA-x3cj-mm38-329g",
      badge: "VERIFIED GITHUB SECURITY ADVISORY",
      severity: "Critical",
      cwe: ["CWE-829"],
      publishedDate: "Sep 2026",
      description: "Discovered and responsibly disclosed a Critical security vulnerability where self-referential mutable composite action calls (@main) bound to long-lived classic Personal Access Tokens (PAT) allow automated, unreviewed code execution and account-level token persistence on scheduled CI runs."
    },
    {
      id: "GHSA-8rfq-rmx4-8qhr",
      slug: "ghsa-8rfq-rmx4-8qhr",
      title: "Shell Injection via Composite Action Inputs in gouef/githubtoplanguages",
      targetRepo: "gouef / githubtoplanguages",
      platform: "GitHub Security Advisory",
      url: "https://github.com/gouef/githubtoplanguages/security/advisories/GHSA-8rfq-rmx4-8qhr",
      badge: "VERIFIED GITHUB SECURITY ADVISORY",
      severity: "Critical",
      cwe: ["CWE-77", "CWE-78", "CWE-94"],
      publishedDate: "Sep 2026",
      description: "Discovered and responsibly disclosed a Critical shell command injection vulnerability in GitHub Actions composite action inputs (botName & botEmail), allowing arbitrary command execution on the CI runner, repository token exfiltration, and supply chain compromise."
    },
    {
      id: "GHSA-9v52-vhvw-4w5c",
      slug: "ghsa-9v52-vhvw-4w5c",
      title: "Cross-meeting presentation upload via unbound upload token (IDOR)",
      targetRepo: "bigbluebutton / bigbluebutton",
      platform: "GitHub Security Advisory",
      url: "https://github.com/bigbluebutton/bigbluebutton/security/advisories/GHSA-9v52-vhvw-4w5c",
      badge: "VERIFIED GITHUB SECURITY ADVISORY",
      severity: "Moderate",
      cwe: ["CWE-639", "CWE-862"],
      patchedVersions: ["3.0.37", "4.0.0-rc.2"],
      publishedDate: "Sep 10, 2026",
      description: "Discovered and responsibly disclosed a cross-meeting presentation upload IDOR vulnerability in BigBlueButton caused by unbound upload tokens, officially recognized by BigBlueButton security team."
    },
    {
      id: "GHSA-r3jq-vxqh-pgrg",
      slug: "ghsa-r3jq-vxqh-pgrg",
      title: "CI workflow comment spoofing via fork pull requests",
      targetRepo: "bigbluebutton / bigbluebutton",
      platform: "GitHub Security Advisory",
      url: "https://github.com/bigbluebutton/bigbluebutton/security/advisories/GHSA-r3jq-vxqh-pgrg",
      badge: "VERIFIED GITHUB SECURITY ADVISORY",
      severity: "Moderate",
      publishedDate: "2026",
      description: "Identified GitHub Actions CI workflow comment spoofing vulnerability via fork pull requests in BigBlueButton's automated building pipeline."
    }
  ],
  process: [
    { step: "01", label: "STATIC & RUNTIME AUDIT", desc: "Source review, taint tracking, and execution path modeling." },
    { step: "02", label: "REPRODUCTION & PoC", desc: "Minimal standalone proof-of-concept verification across host platforms." },
    { step: "03", label: "COORDINATED DISCLOSURE", desc: "Structured reporting to project maintainers via private advisory channels." },
    { step: "04", label: "PATCH COLLABORATION", desc: "Assisting maintainers with fix verification, PR reviews, and advisory publication." }
  ]
};
