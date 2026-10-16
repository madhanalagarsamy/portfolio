export const researchData = {
  sectionTitle: "Security Research",
  subtitle: "Vulnerability Discovery & Systems Analysis",
  pillars: [
    {
      title: "Runtimes & Systems",
      target: "Apple Container · Swift-NIO · Sockets",
      description: "Low-level network handlers, event loops, and socket resource lifecycles. Identified socket FD exhaustion DoS resolved in Apple Container PR #2260."
    },
    {
      title: "CI/CD & Supply Chain",
      target: "Self-Hosted Runners · GitHub Actions",
      description: "Untrusted fork execution on physical self-hosted runners (espflash PR #1074), command injection (CWE-78), and token exfiltration."
    },
    {
      title: "Web Security & Access",
      target: "Web Services · IDOR · Access Controls",
      description: "Authorization boundaries, unbound upload tokens, and cross-meeting presentation exposure across open-source platforms."
    }
  ]
};
