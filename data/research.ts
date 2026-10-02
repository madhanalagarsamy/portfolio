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
      title: "CI/CD & Supply Chain Hardening",
      target: "GitHub Actions · Workflow Injections · Token Exfiltration",
      description: "Analyzing automated build pipelines for shell command injection (CWE-78), unpinned mutable actions with PAT exposure (CWE-829), and deceptive PR comment spoofing."
    },
    {
      title: "Application Security & Access Controls",
      target: "Web Services · Authorization Bypasses · IDOR",
      description: "Methodical web security assessments focusing on cross-tenant data isolation, unbound upload tokens, and business logic flaws across open-source collaborative platforms."
    }
  ]
};
