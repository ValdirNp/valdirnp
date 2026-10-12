export type SocialLink = {
  name: string;
  url: string;
  label: string;
};

export const profile = {
  name: "Valdir Nascimento",
  nickname: "Valdir",
  greeting: "Oi, eu sou o",
  designation: "Senior Backend Engineer",
  headline:
    "Senior Backend Engineer | Fintech | Node.js, TypeScript (NestJS) | PHP (Symfony) | Microservices on GCP",
  summary:
    "Engenheiro de software sênior com mais de 10 anos de experiência, focado em backends e microsserviços para fintech. Trabalho com NestJS (TypeScript).",
  location: "São Paulo, Brasil",
  available: true,
  siteUrl: "https://valdirnp.dev",
  copyright: `© ${new Date().getFullYear()} Valdir Nascimento. Todos os direitos reservados.`,
  socialLinks: [
    {
      name: "github",
      url: "https://www.github.com/valdirnp",
      label: "github.com/valdirnp",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/valdirnp/",
      label: "linkedin.com/in/valdirnp",
    },
  ] satisfies SocialLink[],
} as const;
