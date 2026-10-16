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
    role: "Founder & Lead Developer",
    organization: "Net Corporation",
    period: "May 2026 – Present",
    location: "Remote",
    category: "FOUNDER",
    responsibilities: [
      "Engineered production web applications and distributed backend architectures.",
      "Built automated CI/CD deployment pipelines and cloud infrastructure.",
      "Developed high-throughput optical data transmission systems using WebAssembly."
    ]
  },
  {
    id: "02",
    role: "Independent Cybersecurity Researcher",
    organization: "Open-Source Research",
    period: "May 2025 – Present",
    category: "RESEARCH",
    responsibilities: [
      "Discovered and disclosed vulnerabilities across open-source runtimes and CI/CD pipelines.",
      "Authored upstream patches: Apple Container PR #2260 and espflash PR #1074.",
      "Contributed bug fixes and performance improvements to PyTorch, TensorFlow, and Keras."
    ]
  }
];
