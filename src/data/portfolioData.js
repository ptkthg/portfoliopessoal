export const portfolioData = {
  person: {
    fullName: 'Patrick Santos',
    firstName: 'Patrick Santos',
    role: 'Analista de Segurança da Informação · Blue Team & SOC',
    city: 'Rio de Janeiro, RJ',
    email: 'ptkamp1@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ptkthg/',
    github: 'https://github.com/ptkthg',
    // Expor link direto de WhatsApp em site público é uma decisão consciente.
    whatsappUrl: 'https://wa.me/5521998031285',
    profileImagePath: '/assets/patrickseg.png',
    profileImageAlt: 'Patrick Santos',
    profileImagePosition: 'center 28%',
    resumePath: '/assets/patrickcv0426.pdf',
  },
  // Frase forte do Hero — comunica valor em uma linha, sem siglas.
  heroHeadline: 'Eu transformo alertas em decisões.',
  heroSubrole:
    'Monitoramento, análise de alertas e resposta inicial a incidentes — evoluindo para Purple Team e Cloud Security.',
  heroDescription:
    'Analista de SI com atuação prática em SOC, Blue Team e gestão de vulnerabilidades. Monitoro, investigo e respondo — e automatizo o que dá, inclusive com IA, para o time decidir mais rápido.',
  aboutText: [
    'Comecei no suporte N1/N2 e migrei para segurança por uma razão simples: gosto de entender como as coisas quebram e como defendê-las. Hoje atuo no eixo SOC/Blue Team, monitorando alertas em endpoint, identidade, e-mail e aplicações, e conduzindo a triagem do falso positivo ao encaminhamento com evidência.',
    'Minha base é Microsoft Security (Defender XDR, Intune, Entra ID, Purview), somada a Wazuh, Graylog e SIEM, governança de acessos no Active Directory e gestão de vulnerabilidades priorizada por exposição e impacto. Não paro no alerta: documento, correlaciono e proponho o ajuste de controle.',
    'Estou crescendo em três frentes — Purple Team (uso ataque para fortalecer defesa), Cloud Security e automação com IA. Para mim, aprender é construir: os projetos abaixo nasceram de problemas reais que enfrentei na operação.',
  ],
  // Métricas e pilares do "Sobre" — centralizados aqui (antes hardcoded no componente).
  aboutMetrics: [
    { value: '2+', label: 'Anos em Segurança' },
    { value: '3', label: 'Contextos corporativos' },
    { value: '5+', label: 'Projetos técnicos' },
    { value: 'Jr+', label: 'Pronto para Pleno inicial' },
  ],
  aboutPillars: [
    { index: '01', label: 'Detectar', desc: 'Crio hipóteses e investigo sinais em endpoint, identidade, e-mail e aplicação.' },
    { index: '02', label: 'Investigar', desc: 'Correlaciono logs, alertas, IOC, IOA, KQL e contexto operacional.' },
    { index: '03', label: 'Responder', desc: 'Apoio contenção, erradicação, registro de evidências e encaminhamento técnico.' },
    { index: '04', label: 'Melhorar', desc: 'Transformo aprendizados em ajustes de regra, hardening, governança e documentação.' },
  ],
  areas: [
    {
      title: 'Blue Team',
      icon: 'shield',
      description:
        'Monitoramento, investigação e resposta inicial a eventos de segurança, com foco em proteção de ativos, evidências técnicas e redução da superfície de ataque.',
    },
    {
      title: 'SOC',
      icon: 'radar',
      description:
        'Monitoramento de SIEM, análise de logs, triagem de alertas, classificação inicial de incidentes, documentação e redução de falsos positivos.',
    },
    {
      title: 'Threat Hunting',
      icon: 'target',
      description:
        'Criação de hipóteses de caça, análise de comportamento suspeito, investigação baseada em IOC, IOA, KQL, MITRE ATT&CK, Wazuh, Graylog e padrões anômalos.',
    },
    {
      title: 'Gestão de Vulnerabilidades',
      icon: 'bug',
      description:
        'Identificação, priorização e acompanhamento de correções com base em criticidade, exposição, ASM, ativos afetados, patches, evidências e esforço de implementação.',
    },
    {
      title: 'IAM e Governança de Acessos',
      icon: 'key',
      description:
        'Criação, manutenção e exclusão de usuários, revisão de permissões, trilhas de auditoria, menor privilégio, Active Directory e Microsoft Entra ID.',
    },
    {
      title: 'Hardening e Controles',
      icon: 'server',
      description:
        'Sustentação de controles de segurança, inventário, monitoramento de ativos, softwares não permitidos, políticas, GPO, Intune e hardening.',
    },
    {
      title: 'Web AppSec & Bug Bounty',
      icon: 'globe',
      side: 'offensive',
      description:
        'Caça a vulnerabilidades em aplicações web (XSS, IDOR, SSRF, SQLi) em programas de bug bounty na HackerOne, com foco em recon e validação manual.',
    },
    {
      title: 'Pentest de Rede',
      icon: 'crosshair',
      side: 'offensive',
      description:
        'Estudo e prática de testes de intrusão em rede: enumeração de serviços, exploração controlada e pós-exploração em ambientes de laboratório.',
    },
  ],
  // Competências exibidas como tags + nível textual (sem percentual autoatribuído).
  skillGroups: [
    {
      label: 'SOC & Detecção',
      level: 'Sólido na prática',
      skills: ['Microsoft Defender XDR', 'SIEM', 'Wazuh', 'Graylog', 'KQL', 'Triagem de alertas', 'Análise de logs', 'Redução de falsos positivos'],
    },
    {
      label: 'Resposta a Incidentes',
      level: 'Em uso no dia a dia',
      skills: ['Investigação', 'Cadeia de processos', 'Contenção inicial', 'Coleta de evidências', 'Documentação executiva'],
    },
    {
      label: 'Vulnerabilidades & Hardening',
      level: 'Sólido na prática',
      skills: ['Priorização por risco', 'ASM', 'Patch management', 'Secure Score', 'GPO', 'CIS Controls', 'NIST CSF'],
    },
    {
      label: 'IAM & Governança',
      level: 'Sólido na prática',
      skills: ['Active Directory', 'Microsoft Entra ID', 'Ciclo de vida de usuário', 'Menor privilégio', 'Trilhas de auditoria'],
    },
    {
      label: 'Cloud & GRC',
      level: 'Em desenvolvimento',
      skills: ['Fundamentos de Azure Security', 'Microsoft Purview', 'Privacidade & conformidade', 'Análise de risco'],
    },
    {
      label: 'IA aplicada à segurança',
      level: 'Em uso nos projetos',
      skills: ['Enriquecimento de IOC com LLM', 'Briefings de ameaça (PT-BR)', 'Automação de triagem', 'Groq · Llama 3.3'],
    },
  ],
  experiences: [
    {
      company: 'Oceânica',
      role: 'Assistente de Segurança da Informação Pleno',
      period: 'out/2025 – abr/2026',
      activities: [
        'Monitoramento e investigação de alertas em endpoint, e-mail, identidade e aplicações, correlacionando sinais técnicos para apoiar resposta.',
        'Uso de Microsoft Defender, Intune, Wazuh, Graylog e SIEM para triagem de alertas, análise de logs, classificação inicial e redução de falsos positivos.',
        'Gestão de vulnerabilidades com priorização por severidade, exposição, ASM, ativos afetados, patches e viabilidade de correção.',
        'Governança de acessos com criação/manutenção/exclusão de usuários, revisão de permissões, trilhas de auditoria e menor privilégio.',
        'Sustentação de controles de inventário, monitoramento de ativos, softwares não permitidos, hardening, GPO, Intune e documentação de evidências.',
        'Interface com SOC terceirizado para acompanhamento de alertas, encaminhamentos, validações e melhoria contínua da operação defensiva.',
      ],
    },
    {
      company: 'Vortex Security',
      role: 'Analista de SOC N1',
      period: 'jul/2025 – set/2025',
      activities: [
        'Monitoramento contínuo via SIEM com triagem de alertas, análise de logs e classificação inicial de incidentes.',
        'Correlação de eventos, logs, IOC e IOA para apoiar investigação, tomada de decisão e escalonamento.',
        'Ajuste de regras e refinamento de alertas para reduzir falsos positivos e melhorar eficiência operacional.',
        'Registro de evidências, contexto do alerta e encaminhamentos para times responsáveis.',
      ],
    },
    {
      company: 'Rio Quality',
      role: 'Analista de Segurança Jr',
      period: 'jan/2024 – jun/2025',
      activities: [
        'Suporte N1/N2 com administração de identidades, grupos e acessos no Active Directory.',
        'Criação, manutenção e exclusão de usuários, apoio em permissões e rotinas de controle de acesso.',
        'Suporte a VPN, proxy, antivírus, ambiente Windows e troubleshooting de segurança operacional.',
        'Apoio a políticas de segurança, manutenção de ativos críticos e organização de evidências.',
        'Aplicação do princípio do menor privilégio em revisões de acesso e rotinas de controle.',
      ],
    },
  ],
  education: {
    course: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
    institution: 'Universidade Estácio de Sá, UNESA',
    status: 'Cursando',
  },
  // Projetos em destaque — FONTE ÚNICA consumida por Projects.jsx.
  // Para adicionar: copie um objeto e ajuste title, status, description, tags e URLs.
  projects: [
    {
      filename: 'iocenricher.exe',
      title: 'IOC Enricher',
      version: 'v1.0.0',
      status: 'OPERATIONAL',
      statusColor: 'text-neon text-glow',
      description:
        'Enriquece IP, domínio, URL ou hash com 11 fontes OSINT e análise por IA (Groq Llama 3.3 70B). Gera recomendação operacional, classificação de risco e relatório para triagem Blue Team.',
      logs: [
        { prefix: '[SRC]', value: '11 OSINT sources loaded' },
        { prefix: '[AI] ', value: 'Groq Llama 3.3 70B active' },
      ],
      tags: ['React', 'Vite', 'Tailwind', 'Vercel', 'Groq', 'OSINT APIs'],
      liveUrl: 'https://iocenricher.vercel.app',
      githubUrl: 'https://github.com/ptkthg/iocenricher',
    },
    {
      filename: 'statecraft.next',
      title: 'Statecraft',
      version: 'v1.0.0',
      status: 'OPERATIONAL',
      statusColor: 'text-neon text-glow',
      description:
        'Plataforma de threat intelligence em PT-BR: CVEs recentes com CVSS e EPSS, briefings gerados por IA e IOC Search com fontes OSINT para apoiar priorização e contexto defensivo.',
      logs: [
        { prefix: '[FEEDS]', value: '19 RSS sources + NVD API' },
        { prefix: '[AI]   ', value: 'Groq Llama 3.3 70B · PT-BR' },
        { prefix: '[KEV]  ', value: 'CISA KEV + EPSS enrichment' },
      ],
      tags: ['Next.js 15', 'TypeScript', 'Tailwind', 'PostgreSQL', 'Prisma', 'Groq AI'],
      liveUrl: 'https://statecraftcyber.vercel.app',
      githubUrl: null,
    },
    {
      filename: 'hunting_pack.kql',
      title: 'XDR Hunting Pack',
      version: null,
      status: 'INTERNAL',
      statusColor: 'text-yellow-400/90',
      description:
        'Coleção de queries KQL para threat hunting no Microsoft Defender XDR, com lógica reaplicável a SIEM/Wazuh/Graylog. Cobre password spray, LOLBins, PowerShell suspeito e Outlook criando processos anômalos.',
      logs: [
        { prefix: '[ENV]  ', value: 'Microsoft Defender XDR' },
        { prefix: '[MAP]  ', value: 'MITRE ATT&CK aligned' },
      ],
      tags: ['KQL', 'Defender XDR', 'Wazuh', 'Graylog', 'MITRE ATT&CK', 'Threat Hunting'],
      liveUrl: null,
      githubUrl: null,
    },
  ],
  caseStudy: {
    title: 'Estudo de Caso',
    subtitle: 'Resposta a incidente com Microsoft Defender',
    context: 'Monitoramento de alerta em endpoint do setor financeiro com Microsoft Defender.',
    detection: 'Execução suspeita de PowerShell com comportamento associado a reconhecimento de ambiente.',
    response:
      'Isolamento do dispositivo, investigação em SIEM, validação em Active Directory e cruzamento com telemetria do endpoint.',
    rootCause:
      'E-mail de phishing que passou pelo filtro inicial, mas teve a execução bloqueada pelo Defender.',
    correction:
      'Revisão de privilégios locais, aplicação do princípio do menor privilégio e sugestão de ajuste via GPO para política de execução de scripts.',
    result: 'Incidente contido, causa raiz tratada e melhoria aplicada no controle preventivo.',
    lessonsLearned:
      'Detecção sem resposta rápida é incompleta. Blue Team eficiente precisa correlacionar sinais, conter o impacto e corrigir a causa raiz.',
    tags: [
      'Microsoft Defender',
      'SIEM',
      'Active Directory',
      'PowerShell',
      'Harmony Email',
      'GPO',
      'Menor Privilégio',
      'Resposta a Incidentes',
      'Blue Team',
    ],
  },
  methodology: [
    { step: 'Reconhecimento', desc: 'Mapeamento da superfície de ataque, OSINT, enumeração de subdomínios e descoberta de ativos.' },
    { step: 'Enumeração', desc: 'Varredura de portas e serviços, fingerprinting e identificação de versões e tecnologias.' },
    { step: 'Exploração', desc: 'Validação manual de vulnerabilidades e provas de conceito controladas, sem impacto.' },
    { step: 'Pós-exploração', desc: 'Avaliação de impacto, movimentação lateral simulada e validação do potencial de dano.' },
    { step: 'Relatório & Defesa', desc: 'Documentação clara, severidade, passos de reprodução e recomendações de detecção e correção.' },
  ],
  methodologyText:
    'Aplico o ciclo ofensivo para fortalecer a defesa: cada vulnerabilidade encontrada vira uma lição de detecção, não apenas um achado isolado. É a integração entre ataque (Red) e defesa (Blue) na prática.',
  frameworks: ['OWASP Top 10', 'OWASP WSTG', 'PTES', 'MITRE ATT&CK', 'NIST SP 800-115'],
  arsenal: {
    'Recon & Scanning': ['nmap', 'nikto', 'gobuster'],
    'Web AppSec': ['Burp Suite', 'sqlmap'],
    'Exploração': ['Metasploit'],
    'Senhas & Cracking': ['hydra', 'john'],
    'Wireless': ['aircrack-ng'],
    'Análise de tráfego': ['Wireshark'],
  },
  offensiveSkills: {
    'Pentest & Web AppSec': ['Web Pentest', 'Recon', 'XSS', 'IDOR', 'SSRF', 'SQL Injection', 'Auth Bypass', 'Privilege Escalation'],
    'Bug Bounty (HackerOne)': ['Caça a vulnerabilidades', 'Análise de superfície', 'Relatórios de impacto', 'Validação manual'],
  },
  differentials: [
    {
      title: 'Autonomia com critério',
      description:
        'Consigo conduzir triagens, investigações e documentação com autonomia, validando evidências e escalando pontos de maior impacto quando necessário.',
    },
    {
      title: 'Visão de risco',
      description:
        'Priorizo vulnerabilidades, controles e recomendações por impacto, criticidade, exposição, ativos afetados e esforço de implementação.',
    },
    {
      title: 'Base técnica ampla',
      description:
        'Tenho vivência prática em suporte N1/N2, SOC, Defender, Intune, Wazuh, Graylog, IAM, Active Directory, hardening, patch management, ASM e WAF.',
    },
    {
      title: 'Comunicação e documentação',
      description:
        'Transformo achados técnicos em relatórios, evidências, contexto de risco e recomendações compreensíveis para operação, gestão e áreas responsáveis.',
    },
  ],
  certifications: [
    {
      name: 'MNA',
      full: 'Multicloud Network Associate',
      issuer: 'Aviatrix',
      year: '',
    },
    {
      name: 'CPOP',
      full: 'Certified Professional Operational Partner',
      issuer: 'Axur',
      year: '',
    },
  ],
};

export const navItems = [
  { label: 'Início', id: 'hero' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Competências', id: 'skills' },
  { label: 'Projetos', id: 'projetos' },
  { label: 'Estudo de caso', id: 'estudo-caso' },
  { label: 'Trajetória', id: 'trajetoria' },
  { label: 'Contato', id: 'contato' },
];
