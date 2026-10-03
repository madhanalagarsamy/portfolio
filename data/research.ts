export const researchData = {
  sectionTitle: "SECURITY RESEARCH",
  subtitle: "OPEN-SOURCE SECURITY & DEFENSIVE ENGINEERING",
  pillars: [
    {
      title: "Runtime & Systems Analysis",
      target: "Apple Container · Swift-NIO · POSIX Sockets",
      description: "Auditing low-level networking handlers, event loops, and resource lifecycles. Identified socket file descriptor exhaustion DoS acknowledged by Apple maintainers in issue #2261."
    },
    {
      title: "CI/CD & Hardware Fleet Security",
      target: "Self-Hosted Runners · Hardware-in-the-Loop · Supply Chain",
      description: "Analyzing automated build pipelines for untrusted fork execution on physical self-hosted runners (acknowledged in esp-rs/espflash PR #1074), shell injection (CWE-78), and PAT exfiltration (CWE-829)."
    },
    {
      title: "Application Security & Access Controls",
      target: "Web Services · Authorization Bypasses · IDOR",
      description: "Methodical web security assessments focusing on cross-tenant data isolation, unbound upload tokens, and business logic flaws across open-source collaborative platforms."
    }
  ]
};
