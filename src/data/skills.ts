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
      "NestJS",
      "PHP",
      "Symfony",
      "Laravel",
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
    items: ["GCP", "AWS", "Docker", "EC2", "S3"],
  },
  {
    title: "Ferramentas",
    items: ["Git", "Linux", "WordPress", "Shell scripting"],
  },
];
