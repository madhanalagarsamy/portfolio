export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "PROGRAMMING LANGUAGES & CORE",
    skills: ["Python", "TypeScript", "C++", "HTML/CSS", "JavaScript"]
  },
  {
    title: "VIBE CODING & AI TOOLS",
    skills: ["Claude Code", "Google Antigravity", "Codex", "AI-Assisted Prototyping", "Workflow Automation"]
  },
  {
    title: "WEB & APPLICATION DEVELOPMENT",
    skills: ["Full-Stack Development", "Backend Engineering", "Application Deployment"]
  },
  {
    title: "CYBERSECURITY & RESEARCH",
    skills: ["Secure Code Review", "Threat & Flaw Identification", "Vulnerability Assessment"]
  },
  {
    title: "FRAMEWORKS & TOOLS",
    skills: ["PyTorch", "TensorFlow", "Keras", "SQLite", "OpenCV", "Git/GitHub", "CI/CD Workflows"]
  }
];
