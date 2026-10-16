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
      title: "Arbitrary Code Execution on esp-rs/espflash Self-Hosted Runners",
      targetRepo: "esp-rs / espflash",
      platform: "Espressif / esp-rs Coordinated Disclosure",
      url: "https://github.com/esp-rs/espflash/pull/1074",
      badge: "ACKNOWLEDGED BY MAINTAINERS · FIXED IN PR #1074",
      severity: "Critical",
      cwe: ["CWE-284", "CWE-306"],
      patchedVersions: ["PR #1074 (HIL slash command gates)"],
      publishedDate: "Sep - Oct 2026",
      description: "Arbitrary workflow execution on physical self-hosted runners from untrusted fork pull requests. Remediated in PR #1074 with slash-command authorization gates."
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
      description: "Socket file descriptor leak in Apple Container's Swift-NIO connect handler causing DoS exhaustion. Acknowledged by Apple maintainers and resolved in PR #2260."
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
      description: "Self-referential mutable composite action calls bound to long-lived classic PATs, allowing unreviewed code execution and token persistence on scheduled runs."
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
      description: "Shell command injection in composite action inputs (botName & botEmail), allowing arbitrary runner execution and repository token exfiltration."
    },
    {
      id: "GHSA-9v52-vhvw-4w5c",
      slug: "ghsa-9v52-vhvw-4w5c",
      title: "Cross-Meeting Presentation Upload via Unbound Upload Token (IDOR)",
      targetRepo: "bigbluebutton / bigbluebutton",
      platform: "GitHub Security Advisory",
      url: "https://github.com/bigbluebutton/bigbluebutton/security/advisories/GHSA-9v52-vhvw-4w5c",
      badge: "VERIFIED GITHUB SECURITY ADVISORY",
      severity: "Moderate",
      cwe: ["CWE-639", "CWE-862"],
      patchedVersions: ["3.0.37", "4.0.0-rc.2"],
      publishedDate: "Sep 10, 2026",
      description: "Cross-meeting presentation upload IDOR in BigBlueButton caused by unbound upload tokens, allowing unauthorized presentation substitution."
    },
    {
      id: "GHSA-r3jq-vxqh-pgrg",
      slug: "ghsa-r3jq-vxqh-pgrg",
      title: "CI Workflow Comment Spoofing via Fork Pull Requests",
      targetRepo: "bigbluebutton / bigbluebutton",
      platform: "GitHub Security Advisory",
      url: "https://github.com/bigbluebutton/bigbluebutton/security/advisories/GHSA-r3jq-vxqh-pgrg",
      badge: "VERIFIED GITHUB SECURITY ADVISORY",
      severity: "Moderate",
      publishedDate: "2026",
      description: "CI workflow comment spoofing via untrusted fork pull requests in BigBlueButton's automated build pipeline."
    }
  ]
};
