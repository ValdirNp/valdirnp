export type Experience = {
  company: string;
  companyUrl: string;
  location: string;
  overview: string;
  role: string;
  start: string;
  end?: string;
  responsibilities: string[];
};

export const experiences: Experience[] = [
  {
    company: "Pravaler",
    companyUrl: "https://www.pravaler.com.br",
    location: "São Paulo, Brasil · Híbrido",
    overview:
      "O Pravaler é a maior fintech de financiamento estudantil do Brasil.",
    role: "Engenheiro de Software Senior",
    start: "Outubro 2025",
    responsibilities: [
      "Planejamento, desenvolvimento e sustentação de sistemas essenciais para o setor de crédito e cobrança, incluindo motores de análise de crédito, negativação de pessoas, geração de acordos e renegociações.",
      "Arquitetura de microsserviços com NestJS (JavaScript/TypeScript) e Symfony (PHP).",
      "Bancos de dados PostgreSQL e MongoDB, com infraestrutura gerenciada na Google Cloud Platform (GCP).",
    ],
  },
  {
    company: "Pravaler",
    companyUrl: "https://www.pravaler.com.br",
    location: "São Paulo, Brasil · Híbrido",
    overview:
      "O Pravaler é a maior fintech de financiamento estudantil do Brasil.",
    role: "Engenheiro de Software Pleno",
    start: "Outubro 2019",
    end: "Outubro 2025",
    responsibilities: [
      "Planejamento, desenvolvimento e sustentação de sistemas essenciais para o setor de crédito e cobrança.",
      "Desenvolvimento de microsserviços com NestJS (JavaScript/TypeScript) e Symfony (PHP).",
      "Trabalhos com PostgreSQL, MongoDB e infraestrutura na Google Cloud Platform (GCP).",
    ],
  },
  {
    company: "influu",
    companyUrl: "https://www.influu.me",
    location: "São Paulo, Brasil · No local",
    overview:
      "A Influu é uma agência que realiza o relacionamento entre marcas e influenciadores.",
    role: "Desenvolvedor",
    start: "Junho 2018",
    end: "Outubro 2019",
    responsibilities: [
      "Desenvolvimento de sites em WordPress e CMS customizado para o blog da empresa.",
      "Desenvolvimento de ferramentas utilizando APIs de redes sociais para os clientes.",
      "Aplicações em PHP com bancos de dados MySQL e MongoDB.",
    ],
  },
  {
    company: "Witix Código Criativo",
    companyUrl: "https://witix.com.br",
    location: "São Paulo, Brasil · No local",
    overview:
      "A Witix é uma agência de marketing digital focada na criação de sites e aplicativos.",
    role: "Desenvolvedor",
    start: "Janeiro 2016",
    end: "Junho 2018",
    responsibilities: [
      "Desenvolvimento de CMSs e SaaS personalizados para sites e blogs utilizando PHP e MySQL.",
      "Hospedagem na AWS, utilizando ferramentas da Amazon como S3 e EC2.",
    ],
  },
  {
    company: "Vioti Comunicação e TI",
    companyUrl: "https://www.vioti.com.br",
    location: "São Paulo, Brasil · No local",
    overview:
      "A Vioti é uma agência de publicidade focada na criação de sites e redes sociais.",
    role: "Desenvolvedor",
    start: "Maio 2014",
    end: "Janeiro 2016",
    responsibilities: [
      "Desenvolvimento de sites personalizados em HTML e CMSs personalizados em PHP com MySQL.",
      "Integração entre backend e frontend de projetos.",
    ],
  },
];
