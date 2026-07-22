// Fonte única de conteúdo do site.
// O texto desta base foi revisado e aprovado no protótipo tema-verde-v3.
// Regra: nada aqui é slogan, autoavaliação ou número sem lastro.

export const portfolioData = {
  person: {
    fullName: 'Patrick Santos',
    shortName: 'Patrick Santos',
    role: 'Analista de Segurança da Informação',
    tag: 'SEC.ANALYST',
    specialties:
      'Blue Team · SOC · SIEM · IAM/PAM · Resposta a incidentes · Gestão de vulnerabilidades',
    city: 'Rio de Janeiro, RJ',
    email: 'ptkamp1@gmail.com',
    availability: 'Imediata',
    linkedin: 'https://www.linkedin.com/in/ptkthg/',
    github: 'https://github.com/ptkthg',
    resumePath: '/assets/patrickcv0426.pdf',
    resumeUpdatedAt: 'julho de 2026',
  },

  highlights: [
    { value: '2024', label: 'início em segurança da informação' },
    { value: '3', label: 'empresas' },
    { value: '5', label: 'plataformas de SIEM e monitoramento' },
    { value: 'N1/N2', label: 'nível de triagem e resposta' },
  ],

  about: [
    'Analista de Segurança da Informação com atuação em Blue Team, SOC, SIEM, resposta a incidentes, IAM/PAM e segurança de endpoints.',
    'Atuação com Splunk, Microsoft Defender XDR, Google SecOps, Wazuh e AlienVault na análise de alertas, logs, IOCs e IOAs. Experiência em gestão de vulnerabilidades, superfície externa de ataque, auditorias e administração de acessos privilegiados com Microsoft Entra ID e BeyondTrust.',
    'Trajetória iniciada em infraestrutura e suporte, com administração de identidades em Active Directory, Azure AD e Kerberos, seguida de operação de SOC em SIEM e, atualmente, segurança interna com interface com SOC terceirizado. Conhecimento em automação de segurança com Python, n8n e LLMs.',
  ],

  facts: [
    { label: 'Local', value: 'Rio de Janeiro, RJ' },
    { label: 'Última experiência', value: 'Oceânica' },
    { label: 'Cargo', value: 'Analista de Segurança da Informação' },
    { label: 'Disponibilidade', value: 'Imediata' },
    { label: 'Formação', value: 'ADS · Estácio · conclusão em 2026' },
    { label: 'Idiomas', value: 'Inglês intermediário · Espanhol intermediário' },
  ],

  responsibilities: [
    {
      index: '01',
      title: 'Monitoramento e triagem',
      desc: 'Análise de alertas e logs em SIEM, correlação de eventos e classificação inicial de incidentes.',
    },
    {
      index: '02',
      title: 'Resposta a incidentes',
      desc: 'Investigação N1/N2, contenção inicial, registro de evidências e escalonamento.',
    },
    {
      index: '03',
      title: 'IAM e PAM',
      desc: 'Administração de identidades, revisão de permissões e menor privilégio em Entra ID e BeyondTrust.',
    },
    {
      index: '04',
      title: 'Vulnerabilidades',
      desc: 'Acompanhamento de ativos expostos, ASM, WAF, patches e planos de correção.',
    },
  ],

  experiences: [
    {
      company: 'Oceânica',
      role: 'Analista de Segurança da Informação',
      period: 'out 2025 — abr 2026',
      area: 'Cibersegurança e governança',
      current: true,
      activities: [
        'Ponto focal interno do SOC terceirizado, com análise e validação de alertas, acompanhamento de SLAs e cobrança de tratativas.',
        'Monitoramento e investigação de ameaças com Microsoft Defender XDR: comportamentos suspeitos, softwares não autorizados e eventos de endpoint.',
        'Administração de identidades, acessos e privilégios com Microsoft Entra ID e PAM, com apoio a revisões críticas e aplicação do menor privilégio.',
        'Gestão de vulnerabilidades e superfície externa de ataque: ativos expostos, ASM, WAF, patches, atualizações e planos de correção.',
        'Condução de auditorias, implementação de ferramentas com fornecedores e automação de processos com n8n e LLMs.',
      ],
      tools: ['Defender XDR', 'Entra ID', 'PAM', 'Intune', 'ASM', 'WAF', 'n8n'],
    },
    {
      company: 'Vortex',
      role: 'SOC Analyst',
      period: 'jun — set 2025',
      area: 'SOC e Blue Team',
      current: false,
      activities: [
        'Monitoramento contínuo em SIEM, principalmente Splunk, com uso complementar de Google SecOps, Wazuh e AlienVault.',
        'Investigação e resposta inicial N1/N2 a phishing, força bruta, acessos suspeitos e anomalias de autenticação, com contenção e escalonamento.',
        'Análise de logs de endpoints, redes, sistemas, aplicações e identidades, com identificação de IOCs, IOAs e comportamentos anômalos.',
        'Ajuste de regras de detecção, análise de falsos positivos e otimização de alertas para redução de ruído operacional no SIEM.',
        'Apoio a acessos privilegiados com BeyondTrust/PAM e criação de automações com Python e n8n.',
      ],
      tools: ['Splunk', 'Google SecOps', 'Wazuh', 'AlienVault', 'BeyondTrust', 'Python'],
    },
    {
      company: 'Rio Quality',
      role: 'Analista de Segurança e Infraestrutura',
      period: 'jan 2024 — jun 2025',
      area: 'Infraestrutura e segurança',
      current: false,
      activities: [
        'Monitoramento de acessos, ativos, servidores e backups.',
        'Implementação e administração de monitoramento e segurança com Wazuh e Graylog.',
        'Administração de identidades e diretórios com Azure AD, Active Directory e Kerberos.',
        'Suporte a atividades de SOC.',
      ],
      tools: ['Wazuh', 'Graylog', 'Active Directory', 'Azure AD', 'Kerberos'],
    },
  ],

  skillGroups: [
    {
      label: 'Blue Team e SOC',
      where: 'Oceânica · Vortex',
      category: 'blue-team',
      skills: [
        'Splunk',
        'Google SecOps',
        'Wazuh',
        'AlienVault',
        'Graylog',
        'Triagem de alertas',
        'Correlação de eventos',
        'Análise de logs',
        'IOC / IOA',
        'Threat hunting',
        'Ajuste de regras',
        'Falsos positivos',
      ],
    },
    {
      label: 'Resposta a incidentes',
      where: 'Oceânica · Vortex',
      category: 'blue-team',
      skills: [
        'Resposta N1/N2',
        'Phishing',
        'Força bruta',
        'Anomalias de autenticação',
        'Contenção inicial',
        'Escalonamento',
        'Registro de evidências',
      ],
    },
    {
      label: 'IAM e PAM',
      where: 'Oceânica · Vortex · Rio Quality',
      category: 'iam-pam',
      skills: [
        'Microsoft Entra ID',
        'Active Directory',
        'Azure AD',
        'Kerberos',
        'BeyondTrust',
        'Menor privilégio',
        'Revisão de permissões',
        'Ciclo de vida de usuário',
      ],
    },
    {
      label: 'Gestão de vulnerabilidades',
      where: 'Oceânica',
      category: 'vulnerabilidades',
      skills: [
        'ASM',
        'WAF',
        'Ativos expostos',
        'Patches e atualizações',
        'Planos de correção',
        'Superfície externa de ataque',
      ],
    },
    {
      label: 'Endpoints',
      where: 'Oceânica',
      category: 'endpoints',
      skills: [
        'Microsoft Defender XDR',
        'Defender for Endpoint',
        'Intune',
        'Softwares não autorizados',
        'Análise de comportamento',
      ],
    },
    {
      label: 'Infraestrutura',
      where: 'Rio Quality',
      category: 'infraestrutura',
      skills: [
        'Servidores',
        'Backups',
        'Monitoramento de ativos',
        'Windows',
        'Wazuh',
        'Graylog',
      ],
    },
    {
      label: 'Automação',
      where: 'Oceânica · Vortex · projetos',
      category: 'automacao',
      skills: ['Python', 'n8n', 'LLMs', 'APIs OSINT', 'Enriquecimento de IOC'],
    },
    {
      label: 'Desenvolvimento',
      where: 'projetos próprios',
      category: 'desenvolvimento',
      skills: [
        'React',
        'Next.js',
        'TypeScript',
        'Vite',
        'Tailwind',
        'PostgreSQL',
        'Prisma',
        'Vercel',
      ],
    },
    {
      label: 'Governança e auditoria',
      where: 'Oceânica',
      category: 'blue-team',
      skills: [
        'Condução de auditorias',
        'Trilhas de auditoria',
        'Documentação técnica',
        'Playbooks',
        'Procedimentos',
        'Acompanhamento de SLA',
      ],
    },
  ],

  skillFilters: [
    { id: 'todas', label: 'todas' },
    { id: 'blue-team', label: 'blue team e soc' },
    { id: 'iam-pam', label: 'iam e pam' },
    { id: 'vulnerabilidades', label: 'vulnerabilidades' },
    { id: 'endpoints', label: 'endpoints' },
    { id: 'infraestrutura', label: 'infraestrutura' },
    { id: 'automacao', label: 'automação' },
    { id: 'desenvolvimento', label: 'desenvolvimento' },
  ],

  projects: [
    {
      slug: 'ioc-enricher',
      title: 'IOC Enricher',
      category: 'Ferramenta para triagem Blue Team',
      featured: true,
      state: 'Em produção',
      stateKind: 'live',
      objective:
        'Consolidar em uma única consulta o enriquecimento de indicadores usados na triagem de alertas.',
      problem:
        'A verificação manual de um IOC exige consultar várias fontes OSINT separadamente, sem registro reaproveitável do resultado.',
      features:
        'Consulta de IP, domínio, URL e hash em 11 fontes OSINT; classificação de risco; mapeamento MITRE ATT&CK; análise em lote; geração de recomendação operacional por LLM.',
      role: 'Concepção, desenvolvimento e publicação',
      period: '2026',
      tags: ['React', 'Vite', 'Tailwind', 'Vercel', 'Groq · Llama 3.3 70B', 'APIs OSINT'],
      displayUrl: 'iocenricher.vercel.app',
      liveUrl: 'https://iocenricher.vercel.app',
      githubUrl: 'https://github.com/ptkthg/iocenricher',
      screenshot: null,
      detail: {
        summary:
          'Enriquecimento de indicadores de comprometimento em 11 fontes OSINT, com classificação de risco e recomendação operacional para triagem.',
        sections: [
          {
            title: 'Objetivo',
            body: 'Consolidar em uma única consulta o enriquecimento de indicadores usados na triagem de alertas de segurança.',
          },
          {
            title: 'Problema tratado',
            body: 'A verificação manual de um indicador exige consultar diversas fontes OSINT separadamente, com resultado não padronizado e sem registro reaproveitável.',
          },
          {
            title: 'Funcionalidades',
            body: 'Consulta de IP, domínio, URL e hash em 11 fontes OSINT. Classificação de risco consolidada. Mapeamento MITRE ATT&CK. Análise em lote. Geração de recomendação operacional em português por LLM, a partir dos dados coletados.',
          },
          {
            title: 'Decisões técnicas',
            body: 'Chaves de API mantidas em função serverless, sem exposição no cliente. Consultas executadas em paralelo com timeout individual por fonte. Saída da LLM restrita aos dados retornados pelas consultas.',
          },
          {
            title: 'Estado atual',
            body: 'Em produção, com código publicado no GitHub.',
          },
        ],
      },
    },
    {
      slug: 'statecraft-cyber',
      title: 'Statecraft Cyber',
      category: 'Threat intelligence',
      featured: false,
      state: 'Em produção',
      stateKind: 'live',
      objective:
        'Reunir acompanhamento de ameaças e vulnerabilidades em português, em uma única interface.',
      problem: null,
      features:
        'CVEs recentes com CVSS e EPSS; enriquecimento com CISA KEV; busca de IOC em fontes OSINT; briefings gerados por LLM; agregação de 19 fontes RSS e da API do NVD.',
      role: 'Concepção, desenvolvimento e publicação',
      // período não confirmado: lacuna a preencher, não esquecimento
      period: null,
      tags: ['Next.js 15', 'TypeScript', 'Tailwind', 'PostgreSQL', 'Prisma', 'Groq'],
      displayUrl: 'statecraftcyber.vercel.app',
      liveUrl: 'https://statecraftcyber.vercel.app',
      githubUrl: null,
      screenshot: null,
      detail: {
        summary:
          'Reunir acompanhamento de ameaças e vulnerabilidades em português, em uma única interface.',
        sections: [
          {
            title: 'Objetivo',
            body: 'Reunir acompanhamento de ameaças e vulnerabilidades em português, em uma única interface.',
          },
          {
            title: 'Problema tratado',
            body: 'O acompanhamento público de ameaças e vulnerabilidades está distribuído em fontes separadas, sem uma visão única em português.',
          },
          {
            title: 'Funcionalidades',
            body: 'CVEs recentes com CVSS e EPSS; enriquecimento com CISA KEV; busca de IOC em fontes OSINT; briefings gerados por LLM; agregação de 19 fontes RSS e da API do NVD.',
          },
          {
            title: 'Estado atual',
            body: 'Em produção.',
          },
        ],
      },
    },
    {
      slug: 'xdr-hunting-pack',
      title: 'XDR Hunting Pack',
      category: 'Threat hunting',
      featured: false,
      state: 'Uso interno',
      stateKind: 'internal',
      objective: 'Padronizar consultas de caça a ameaças no Microsoft Defender XDR.',
      problem: null,
      features:
        'Conjunto de queries KQL para password spray, LOLBins, execução suspeita de PowerShell e processos anômalos originados no Outlook, com lógica reaplicável a SIEM, Wazuh e Graylog.',
      role: 'Criação e manutenção das queries',
      // período não confirmado: lacuna a preencher, não esquecimento
      period: null,
      tags: ['KQL', 'Defender XDR', 'MITRE ATT&CK', 'Wazuh', 'Graylog'],
      displayUrl: null,
      liveUrl: null,
      githubUrl: null,
      screenshot: null,
      detail: {
        summary: 'Padronizar consultas de caça a ameaças no Microsoft Defender XDR.',
        sections: [
          {
            title: 'Objetivo',
            body: 'Padronizar consultas de caça a ameaças no Microsoft Defender XDR.',
          },
          {
            title: 'Funcionalidades',
            body: 'Conjunto de queries KQL para password spray, LOLBins, execução suspeita de PowerShell e processos anômalos originados no Outlook.',
          },
          {
            title: 'Decisões técnicas',
            body: 'Queries escritas em KQL para o Microsoft Defender XDR, com lógica reaplicável a SIEM, Wazuh e Graylog.',
          },
          {
            title: 'Estado atual',
            body: 'Uso interno.',
          },
        ],
      },
    },
  ],

  caseStudy: {
    title: 'Resposta a incidente em endpoint com Microsoft Defender',
    summary:
      'Alerta de execução suspeita de PowerShell em endpoint do setor financeiro, com comportamento associado a reconhecimento de ambiente.',
    steps: [
      {
        label: '01 · detecção',
        desc: 'Alerta do Microsoft Defender em endpoint do setor financeiro.',
      },
      {
        label: '02 · investigação',
        desc: 'Análise em SIEM, validação no Active Directory e cruzamento com telemetria do endpoint.',
      },
      {
        label: '03 · contenção',
        desc: 'Isolamento do dispositivo durante a apuração.',
      },
      {
        label: '04 · causa raiz',
        desc: 'E-mail de phishing que passou pelo filtro inicial; execução bloqueada pelo Defender.',
      },
      {
        label: '05 · correção',
        desc: 'Revisão de privilégios locais e aplicação do menor privilégio.',
      },
      {
        label: '06 · resultado',
        desc: 'Incidente contido, causa raiz tratada e ajuste da política de execução de scripts via GPO.',
      },
    ],
    tools: ['Microsoft Defender', 'SIEM', 'Active Directory', 'PowerShell', 'GPO'],
  },

  resume: {
    summary:
      'Analista de Segurança da Informação com experiência em Blue Team, SOC, SIEM, resposta a incidentes, IAM/PAM e segurança de endpoints. Atuação com Splunk, Microsoft Defender XDR, Google SecOps, Wazuh e AlienVault na análise de alertas, logs, IOCs e IOAs. Experiência em gestão de vulnerabilidades, superfície de ataque, auditorias e acessos privilegiados com Entra ID e BeyondTrust. Conhecimento em automação de segurança com Python, n8n e LLMs.',
    meta: [
      { label: 'área de atuação', value: 'Segurança da Informação' },
      { label: 'disponibilidade', value: 'Imediata' },
      { label: 'e-mail', value: 'ptkamp1@gmail.com' },
      { label: 'última atualização', value: 'julho de 2026' },
    ],
  },

  education: [
    {
      title: 'Análise e Desenvolvimento de Sistemas',
      detail: 'Universidade Estácio de Sá · cursando · conclusão prevista em 2026',
    },
    {
      title: 'Idiomas',
      detail: 'Inglês intermediário · espanhol intermediário',
    },
  ],

  certifications: [
    { name: 'Multicloud Network Associate (MNA)', issuer: 'Aviatrix', year: '2025' },
    { name: 'Certified Professional Operational Partner (CPOP)', issuer: 'Axur', year: '2025' },
  ],
};

export const navItems = [
  { label: 'Início', id: 'inicio', index: '01' },
  { label: 'Sobre', id: 'sobre', index: '02' },
  { label: 'Trajetória', id: 'experiencia', index: '03' },
  { label: 'Competências', id: 'competencias', index: '04' },
  { label: 'Projetos', id: 'projetos', index: '05' },
  { label: 'Caso', id: 'caso', index: '06' },
  { label: 'Currículo', id: 'curriculo', index: '07' },
  { label: 'Contato', id: 'contato', index: '08' },
];
