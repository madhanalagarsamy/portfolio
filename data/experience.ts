export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location?: string;
  category: "FOUNDER" | "RESEARCH";
  responsibilities: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "01",
    role: "FOUNDER & LEAD DEVELOPER",
    organization: "NET CORPORATION",
    period: "May 2026 – Present",
    location: "Remote",
    category: "FOUNDER",
    responsibilities: [
      "Architect and engineer production web applications and distributed backend services from technical design through automated cloud deployment.",
      "Direct technical architecture and system specifications across client engagements and internal software initiatives.",
      "Implement robust CI/CD workflows, automated testing gates, and operational infrastructure for high-availability systems."
    ]
  },
  {
    id: "02",
    role: "INDEPENDENT CYBERSECURITY RESEARCHER & OPEN-SOURCE CONTRIBUTOR",
    organization: "CYBERSECURITY & OPEN-SOURCE RESEARCH",
    period: "May 2025 – Present",
    category: "RESEARCH",
    responsibilities: [
      "Discover, verify, and responsibly disclose vulnerabilities across open-source runtimes, CI/CD supply chains, and web applications.",
      "Author verified security advisories and upstream patches—including physical self-hosted runner RCE gated in esp-rs/espflash PR #1074 and socket descriptor leak resolution acknowledged by Apple in issue #2261.",
      "Submit patches, bug mitigations, and performance enhancements to core open-source repositories including PyTorch, TensorFlow, and Keras."
    ]
  }
];
