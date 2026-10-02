export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "PROGRAMMING LANGUAGES & SYSTEMS",
    skills: ["Python", "TypeScript", "C++", "JavaScript", "Bash / Shell", "HTML5 / CSS3"]
  },
  {
    title: "VULNERABILITY RESEARCH & APPSEC",
    skills: ["Secure Code Review", "Flaw Identification", "VAPT", "Coordinated Disclosure", "Threat Modeling", "Supply Chain Security"]
  },
  {
    title: "BACKEND & DISTRIBUTED SYSTEMS",
    skills: ["High-Concurrency Architecture", "REST & WebSockets", "Swift-NIO", "Microservices", "Production Deployment"]
  },
  {
    title: "DEVSECOPS & INFRASTRUCTURE",
    skills: ["CI/CD Pipeline Security", "GitHub Actions Hardening", "Docker", "Linux Kernel / POSIX", "Git"]
  },
  {
    title: "FRAMEWORKS, ML & PROTOCOLS",
    skills: ["PyTorch", "TensorFlow", "Keras", "WebAssembly (WASM)", "OpenCV", "SQLite", "Fountain Codes (Luby Transform)"]
  }
];
