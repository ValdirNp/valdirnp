export type Role = {
  title: string;
  start: string;
  end?: string;
  responsibilities: string[];
};

export type Experience = {
  company: string;
  companyUrl: string;
  location: string;
  overview: string;
  roles: Role[];
};

export const experiences: Experience[] = [
  {
    company: "Pravaler",
    companyUrl: "https://www.pravaler.com.br",
    location: "São Paulo, Brasil · Híbrido",
    overview:
      "O Pravaler é a maior fintech de financiamento estudantil do Brasil.",
    roles: [
      {
        title: "Engenheiro de Software Senior",
        start: "Outubro 2025",
        responsibilities: [
          "Atuo no time de Modelagem de Negócio (antes, no time de Crédito e Cobrança até o início de 2026), responsável por sistemas de análise de crédito e behavior, além de prateleira de produtos, acordos comerciais e compra de carteira.",
          "Participo desde o início das decisões arquiteturais dos microsserviços (hoje cerca de 6 serviços dedicados só à análise de crédito), integrados a 2 motores de decisão externos (Neurotech, Taktile) e 2 bureaus de crédito (Serasa e Boa Vista Serviços).",
          "Assumi observabilidade e correção de casos de alunos, produtos e acordos comerciais que antes não tinham visibilidade no time, desenvolvendo soluções de diagnóstico para times parceiros atuarem.",
          "Contato direto com stakeholders de negócio para levantamento de features, resolução de problemas e diagnósticos técnicos.",
          "Stack: NestJS/TypeScript (arquitetura hexagonal), PHP/Symfony (legado), PostgreSQL, MongoDB, Kubernetes/GCP, Grafana, Snyk, Unleash. Serviços mais recentes desenvolvidos com SDD (spec-driven development).",
        ],
      },
      {
        title: "Engenheiro de Software Pleno",
        start: "Outubro 2019",
        end: "Outubro 2025",
        responsibilities: [
          "Responsável pelas aplicações de análise de crédito desde a entrada na empresa; após a fusão do time de Crédito com o de Cobrança, também atuei em acordos, renegociações, negativação e distribuição de carteira.",
          "Em 2020, participei do desenvolvimento dos microsserviços de crédito em PHP, aplicando o padrão Chain of Responsibility para estruturar as etapas de decisão.",
          "Liderei a reformulação completa da análise de behavior (2023/2024), extraindo a lógica de serviços legados e reconstruindo-a em novos serviços NestJS com o padrão Strategy, para suportar múltiplos tipos de análise e modelos de crédito. Resultou em ganhos de performance, redução de tempo/frequência de execução e menor taxa de erros.",
          "Nos serviços de cobrança, contribuí com o padrão Outbox para sincronização de dados, com desenvolvimento de negativação (envio de arquivos para bureaus, atualização de bases internas) e acompanhamento da terceirização das demandas para a ferramenta CyberFinantial (integrações de dados, sincronização de contratos adimplentes/inadimplentes).",
          "Contribuí para a migração de serviços de Symfony (PHP) para NestJS (TypeScript), com bancos PostgreSQL e MongoDB, toda a infraestrutura na GCP.",
          "Fui, por muitos anos, o principal ponto de referência técnica para assuntos de crédito na empresa.",
        ],
      },
    ],
  },
  {
    company: "influu",
    companyUrl: "https://www.influu.me",
    location: "São Paulo, Brasil · No local",
    overview:
      "A Influu é uma agência que realiza o relacionamento entre marcas e influenciadores.",
    roles: [
      {
        title: "Desenvolvedor",
        start: "Junho 2018",
        end: "Outubro 2019",
        responsibilities: [
          "Migrei o blog da empresa de WordPress (MySQL) para um CMS próprio em PHP e MongoDB.",
          "Desenvolvi parte de uma plataforma de descoberta de influenciadores: cadastro com integração de APIs de redes sociais, coleta de métricas de engajamento e geração de media kit.",
        ],
      },
    ],
  },
  {
    company: "Witix Código Criativo",
    companyUrl: "https://witix.com.br",
    location: "São Paulo, Brasil · No local",
    overview:
      "A Witix é uma agência de marketing digital focada na criação de sites e aplicativos.",
    roles: [
      {
        title: "Desenvolvedor",
        start: "Janeiro 2016",
        end: "Junho 2018",
        responsibilities: [
          "Desenvolvi CMS e sistemas web sob medida para diferentes domínios: gestão de condomínios, controle de estoque para editora, agendamento de serviços.",
          "Projeto principal: DubPro, ERP completo para gestão de dublagem: cadastro de projetos, upload de roteiro e vídeo original, tradução colaborativa segmentada em blocos para cálculo de carga de trabalho dos dubladores, escalação de elenco, agenda de gravação e correção, e emissão de faturamento.",
          "Stack: CakePHP, MySQL, AWS (EC2 para hospedagem, S3 para armazenamento de vídeo/roteiro/áudio e processamento de corte de vídeo).",
          "Atuei também com integração frontend/backend e SEO.",
        ],
      },
    ],
  },
  {
    company: "Vioti Comunicação e TI",
    companyUrl: "https://www.vioti.com.br",
    location: "São Paulo, Brasil · No local",
    overview:
      "A Vioti é uma agência de publicidade focada na criação de sites e redes sociais.",
    roles: [
      {
        title: "Desenvolvedor",
        start: "Maio 2014",
        end: "Janeiro 2016",
        responsibilities: [
          "Desenvolvi CMS personalizados para sites institucionais, transformando templates estáticos ou entregas de frontend em conteúdo dinâmico e editável pelo cliente.",
          "Stack: CodeIgniter, MySQL, hospedagem Locaweb e similares.",
          "Atendimento direto a clientes para levantamento de requisitos.",
        ],
      },
    ],
  },
];
