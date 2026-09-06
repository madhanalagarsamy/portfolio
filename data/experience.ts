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
      "Architect, develop, and deploy high-concurrency web applications and custom enterprise solutions from frontend interface design to production deployment.",
      "Direct organizational technology roadmaps, manage project delivery desks, and oversee scalable software execution.",
      "Engineer robust backend architectures and maintain CI/CD workflows, ensuring optimal performance and seamless user experiences across digital platforms."
    ]
  },
  {
    id: "02",
    role: "INDEPENDENT CYBERSECURITY RESEARCHER & OPEN-SOURCE CONTRIBUTOR",
    organization: "CYBERSECURITY & OPEN-SOURCE RESEARCH",
    period: "May 2025 – Present",
    category: "RESEARCH",
    responsibilities: [
      "Actively contribute critical bug fixes, security patches, and performance enhancements to major open-source ecosystems including PyTorch, TensorFlow, and Keras.",
      "Conduct web application penetration testing (VAPT), vulnerability assessments, and rigorous secure code reviews to identify and mitigate critical software flaws.",
      "Implement secure programming practices, code security desks, and defensive software structures to build resilient digital infrastructure across academic and enterprise builds."
    ]
  }
];
