export type Project = {
  name: string;
  timeline: string;
  summary: string;
  tags: string[];
  repo?: string;
  url?: string;
  role?: string;
};

export const projects: Project[] = [
  {
    name: "ValdirNp",
    timeline: "Setembro 2020 – Hoje",
    summary:
      "Repositório deste portfolio pessoal, reconstruído em Next.js e hospedado na Netlify.",
    tags: ["next.js", "portfolio", "netlify"],
    repo: "https://github.com/valdirnp/valdirnp",
    url: "https://valdirnp.dev",
  },
  {
    name: "Flixx",
    timeline: "Setembro 2020 – Hoje",
    summary: "Um pequeno site em React que sugere aleatoriamente filmes e séries.",
    tags: ["hobby", "react", "netlify"],
    repo: "https://github.com/valdirnp/flixx",
    url: "https://flixx.netlify.app",
  },
  {
    name: "Subtitle PM",
    timeline: "Fevereiro 2020 – Hoje",
    role: "Developer",
    summary:
      "Uma plataforma em React para tradutores fazerem controle de projetos.",
    tags: ["hobby", "react", "netlify"],
  },
];
