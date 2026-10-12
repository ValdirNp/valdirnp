export type SkillCategory = {
  title: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend & Frameworks",
    items: [
      "Node.js",
      "TypeScript",
      "JavaScript",
      "NestJS",
      "PHP",
      "Symfony",
      "Laravel",
      "CakePHP",
      "CodeIgniter",
      "APIs REST",
      "Microsserviços",
    ],
  },
  {
    title: "Bancos de dados",
    items: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    title: "Cloud & DevOps",
    items: ["GCP", "Kubernetes", "AWS", "Docker", "EC2", "S3", "Grafana"],
  },
  {
    title: "Arquitetura & Práticas",
    items: [
      "Arquitetura hexagonal",
      "Chain of Responsibility",
      "Strategy",
      "Outbox",
      "Observabilidade",
      "SDD (spec-driven development)",
      "Kanban",
    ],
  },
  {
    title: "Ferramentas",
    items: ["Git", "Linux", "WordPress", "Snyk", "Unleash", "Shell scripting"],
  },
];
