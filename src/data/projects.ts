export type Project = {
  name: string;
  timeline: string;
  summary: string;
  tags: string[];
  repo?: string;
  url?: string;
  storeUrl?: string;
  role?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Scream Counter",
    timeline: "Março 2022 – Hoje",
    summary:
      "App feito por parqueiros, para parqueiros: registre visitas a parques de diversão e as montanhas-russas em que você já andou, marque favoritos, acompanhe estatísticas e recordes, desbloqueie conquistas e receba recomendações de parques e montanhas-russas baseadas no seu perfil. Disponível para Android, com painel administrativo próprio e versão web (PWA) em desenvolvimento.",
    tags: ["produto", "android", "react", "typescript", "pwa"],
    url: "https://screamcounter.com.br",
    storeUrl:
      "https://play.google.com/store/apps/details?id=com.valdirnp.scream_counter",
    featured: true,
  },
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
    url: "https://flixx.netlify.app",
  },
];
