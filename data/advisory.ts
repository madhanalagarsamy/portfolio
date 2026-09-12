export interface AdvisoryItem {
  id: string;
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
      id: "GHSA-9v52-vhvw-4w5c",
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
    { step: "01", label: "RESEARCH", desc: "Targeted analysis of software systems & CI workflow execution flows" },
    { step: "02", label: "DISCOVERY", desc: "Rigorous vulnerability identification & security flaw verification" },
    { step: "03", label: "RESPONSIBLE DISCLOSURE", desc: "Coordinated vulnerability disclosure with maintainers" },
    { step: "04", label: "SECURITY IMPACT", desc: "Collaborative patch delivery to fortify open-source ecosystem" }
  ]
};
