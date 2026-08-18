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
  // Hero minimalista: só nome + estas áreas de interesse.
  heroAreas: ['Blue Team', 'GRC', 'IAM', 'Purple Team', 'Engenharia de Prompt', 'Automação com IA'],
  // Texto de "o que busco" (seção de contato).
  whatISeek:
    'Procuro uma vaga de analista de segurança ou SOC onde eu pegue incidentes de verdade e continue crescendo rumo a Pleno. Me interessa especialmente quem trabalha com Microsoft Security, nuvem ou automação. Se fizer sentido, me manda uma mensagem — respondo rápido.',
  aboutText: [
    'Sou o Patrick, analista de segurança no Rio de Janeiro. Entrei na área pelo suporte, mexendo com Active Directory, usuários e acessos, e fui puxando pro lado que mais me prende: entender como um ataque acontece e como barrar ele antes de virar problema.',
    'Hoje meu trabalho é vigiar o ambiente e agir quando algo foge do normal. Um alerta dispara e eu investigo: o que é, de onde veio, se é risco real ou só barulho. Quando é sério, ajudo a conter e registro tudo pra empresa entender o que houve e não repetir. Trabalho principalmente com o ecossistema Microsoft (Defender, Intune, Entra ID) e com Wazuh, Graylog e SIEM.',
    'O que eu gosto mesmo é pegar um problema técnico e explicar de um jeito que a pessoa entende o risco, seja o time de segurança ou a diretoria. Estou abrindo duas frentes novas: segurança em nuvem e IA generativa, construindo pequenas ferramentas que poupam tempo de quem trabalha no SOC.',
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
      level: 'uso no trabalho',
      skills: ['Microsoft Defender XDR', 'SIEM', 'Wazuh', 'Graylog', 'KQL', 'Triagem de alertas', 'Análise de logs', 'Redução de falsos positivos'],
    },
    {
      label: 'Resposta a Incidentes',
      level: 'uso no dia a dia',
      skills: ['Investigação', 'Cadeia de processos', 'Contenção inicial', 'Coleta de evidências', 'Documentação executiva'],
    },
    {
      label: 'Vulnerabilidades & Hardening',
      level: 'uso no trabalho',
      skills: ['Priorização por risco', 'ASM', 'Patch management', 'Secure Score', 'GPO', 'CIS Controls', 'NIST CSF'],
    },
    {
      label: 'IAM & Governança',
      level: 'uso no trabalho',
      skills: ['Active Directory', 'Microsoft Entra ID', 'Ciclo de vida de usuário', 'Menor privilégio', 'Trilhas de auditoria'],
    },
    {
      label: 'Cloud & GRC',
      level: 'estudando agora',
      skills: ['Fundamentos de Azure Security', 'Microsoft Purview', 'Privacidade & conformidade', 'Análise de risco'],
    },
    {
      label: 'IA aplicada à segurança',
      level: 'uso nos projetos',
      skills: ['Enriquecimento de IOC com LLM', 'Briefings de ameaça (PT-BR)', 'Automação de triagem', 'Groq · Llama 3.3'],
    },
    {
      label: 'IA Generativa & Eng. de Prompt',
      level: 'estudando agora · novo foco',
      skills: ['IA generativa', 'Engenharia de prompt', 'LLMs', 'RAG', 'Embeddings', 'Automação com IA', 'APIs de IA (Groq / OpenAI / Anthropic)'],
    },
  ],
  // Habilidades interpessoais — frases concretas, não buzzwords.
  softSkills: [
    'Explico problema técnico sem enrolar, pra quem é da área e pra quem não é',
    'Mantenho a calma quando o alerta é real',
    'Documento de um jeito que a próxima pessoa entende',
    'Aprendo rápido e por conta própria',
    'Trabalho junto com outros times e com SOC terceirizado',
  ],
  // O que ainda estou desenvolvendo — honesto, sem prometer demais.
  developing: [
    { area: 'Cloud Security (Azure)', note: 'saindo dos fundamentos pra prática' },
    { area: 'GRC e privacidade', note: 'Purview, LGPD, análise de risco' },
    { area: 'IA generativa e engenharia de prompt', note: 'meu foco novo de estudo' },
    { area: 'Lado ofensivo / Purple Team', note: 'pentest e bug bounty em laboratório' },
    { area: 'Certificações', note: 'em andamento (AZ-500 / SC-200 no radar)' },
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
      filename: 'secidentity_ai.yaml',
      title: 'SecIdentity AI',
      version: 'v1.1.0',
      status: 'OPERATIONAL',
      statusColor: 'text-neon text-glow',
      description:
        'Governança de identidades onde a política de segurança não é documento: é configuração versionada que um motor interpreta, aplica e audita. Quatro agentes cobrem o ciclo do chamado do usuário à evidência assinada para o auditor — ServiceDesk resolve N1 sem tocar em privilégio, IAM avalia RBAC e segregação de funções, PAM concede acesso privilegiado temporário com custódia dupla e gravação de sessão, Governance emite a prova criptográfica. Num incidente P1 simulado, da abertura do chamado à liberação de root em produção: 9 minutos e 50 segundos, com trilha completa.',
      logs: [
        { prefix: '[CFG] ', value: '18 YAML - 4 agentes - 17 regras SoD' },
        { prefix: '[SOD] ', value: 'conflito temporal JIT mitigado' },
        { prefix: '[HR]  ', value: 'contrato Leaver fail-closed' },
        { prefix: '[HASH]', value: 'SHA-256 + Merkle + RFC 3161' },
        { prefix: '[TEST]', value: '3 cenários - 100% pass' },
      ],
      tags: [
        'Python 3.9+',
        'YAML',
        'IAM / PAM',
        'CyberArk',
        'SOX ITGC',
        'ISO 27001',
        'LGPD',
        'Multi-Agent',
      ],
      evidence: {
        label: 'evidências de arquitetura & auditoria',
        intro:
          'Três recortes da plataforma, na ordem em que a decisão acontece: o pipeline que encadeia os quatro agentes, o conflito de segregação de funções que o modelo JIT tornava invisível, e o pacote criptográfico que transforma a decisão em prova para o auditor.',
        items: [
          {
            id: 'pipeline',
            src: '/evidences/secidentity_01_pipeline.svg',
            title: 'Pipeline Multi-Agente — Fases 1 a 4',
            description:
              'ServiceDesk resolve N1 sem tocar em privilégio, IAM avalia RBAC e SoD, PAM concede acesso temporário com custódia dupla e gravação, Governance emite a evidência. O contrato Leaver alimenta as quatro fases com semântica fail-closed: indisponibilidade nunca libera acesso.',
          },
          {
            id: 'sod-gap001',
            src: '/evidences/secidentity_03_sod_gap001.svg',
            title: 'GAP-001 — SoD temporal mitigada',
            description:
              'Matrizes de segregação de funções expressam conflitos permanentes e ficam cegas ao acesso Just-In-Time. Elevar o par a CRITICAL bloquearia resposta a P1. A terceira via: quatro estados de conflito e cinco mitigações verificáveis, sem escape hatch.',
          },
          {
            id: 'merkle',
            src: '/evidences/secidentity_02_merkle.svg',
            title: 'Pacote de auditoria criptográfico',
            description:
              'Hash prova que nada mudou, assinatura prova quem gerou, carimbo prova quando — três provas distintas. A árvore de Merkle permite comprovar um artefato isolado ao auditor sem expor os demais, conciliando auditabilidade e minimização sob a LGPD.',
          },
        ],
      },
      githubUrl: 'https://github.com/ptkthg/secidentity-ai',
    },
    {
      filename: 'deception_loop.py',
      title: 'Deception Loop',
      version: 'v1.0.0',
      status: 'OPERATIONAL',
      statusColor: 'text-neon text-glow',
      description:
        'Converte indicadores de comprometimento em regras de defesa prontas para uso. Aceita hashes de feeds de inteligência e também gera os próprios indicadores, monitorando arquivos-isca que nenhum usuário legítimo tem motivo para abrir. De cada indicador sai uma assinatura YARA validada e um script de bloqueio de firewall. Feito para equipes sem analista de plantão.',
      logs: [
        { prefix: '[BAIT]', value: 'honeyfile watcher active' },
        { prefix: '[FEED]', value: 'md5 / sha1 / sha256 intake' },
        { prefix: '[RULE]', value: 'YARA + firewall in 19ms' },
        { prefix: '[TEST]', value: '211 tests - 100% pass' },
      ],
      tags: ['Python 3.13', 'Streamlit', 'YARA', 'SOAR', 'Pytest', 'MITRE ATT&CK'],
      // URL absoluta: o GIF vive no repositorio do projeto, nao neste.
      media: 'https://raw.githubusercontent.com/ptkthg/deception-loop/main/media/demo_deception_loop.gif',
      mediaCaption: 'Isca tocada → ameaça identificada → defesas geradas, em tempo real',
      liveUrl: 'https://deception-loop.streamlit.app',
      githubUrl: 'https://github.com/ptkthg/deception-loop',
    },
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
    {
      filename: 'netshield_soc.lab',
      title: 'NetShield SOC',
      version: 'v1.0.0',
      status: 'VALIDATED',
      statusColor: 'text-neon text-glow',
      description:
        'Laboratório defensivo de perímetro com OPNsense NGFW, Wazuh SIEM e Suricata IDS. Engine de tuning em Python (apply_tuning.py) reduziu 100% do ruído de falsos positivos (40 -> 0) sem silenciar alertas de ataque, com supressão escopada validada no motor do Wazuh.',
      logs: [
        { prefix: '[SIEM]', value: 'Wazuh 4.14.7 · Syslog RFC3164' },
        { prefix: '[NET] ', value: '4 zonas · OPNsense NGFW + Suricata' },
        { prefix: '[TUNE]', value: 'Falsos positivos 40 -> 0 (100%)' },
      ],
      tags: ['Wazuh', 'OPNsense', 'Suricata', 'Python', 'Syslog RFC3164', 'MITRE ATT&CK'],
      liveUrl: null,
      githubUrl: 'https://github.com/ptkthg/perimeter-defend-lab',
      // Evidências visuais em ordem cronológica de execução do laboratório.
      // As imagens ficam em `public/evidences/` e são servidas na raiz do site.
      evidence: {
        label: 'evidências visuais',
        intro:
          'Cinco etapas do laboratório, na ordem em que foram executadas: da segmentação da rede até o SIEM em operação, com a métrica de tuning medida no motor do Wazuh.',
        items: [
          {
            id: 'topology',
            src: '/evidences/01_topology_architecture.png',
            title: 'Diagrama da Topologia Perimetral',
            description:
              'Isolamento em 4 zonas de rede (WAN, LAN, DMZ, RED) no NGFW OPNsense garantindo inspeção completa de tráfego.',
          },
          {
            id: 'ingestion',
            src: '/evidences/02_syslog_ingestion_wazuh.png',
            title: 'Pipeline de Ingestão (Syslog UDP 514)',
            description:
              'Um log bruto de firewall percorre as quatro etapas até virar alerta pesquisável: RFC3164 na UDP 514, pré-decoder, decoder PCRE2 extraindo srcip, dstip e action, e gravação no alerts.json.',
          },
          {
            id: 'attack',
            src: '/evidences/03_attack_execution_kali.png',
            title: 'Cobertura de Ataque (MITRE ATT&CK)',
            description:
              'Cada técnica simulada a partir do segmento RED ligada ao vetor de teste, ao caminho na rede e à regra que dispara: brute force SSH e web, port scan e movimento lateral bloqueado no perímetro.',
          },
          {
            id: 'tuning',
            src: '/evidences/04_tuning_metrics_result.png',
            title: 'Resultado Real do Tuning de Alertas',
            description:
              'Motor do Wazuh registrando 100% de eliminação de falsos positivos (40 → 0) e preservação total de alertas críticos (15/15).',
          },
          {
            id: 'dashboard',
            src: '/evidences/05_wazuh_threat_hunting.jpg',
            title: 'SIEM em Operação (Threat Hunting)',
            description:
              'Captura real do dashboard do Wazuh 4.14.7 rodando no laboratório: 1.258 alertas, 323 falhas de autenticação e o Top 10 MITRE ATT&CK liderado por Password Guessing, SSH e Brute Force.',
          },
        ],
      },
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
      title: 'Investigo com autonomia',
      description:
        'Conduzo a triagem sozinho, valido a evidência e só escalo o que realmente precisa de outra mão.',
    },
    {
      title: 'Penso em risco, não em lista de tarefas',
      description:
        'Priorizo o que corrigir pelo impacto e pela exposição, não pela ordem que apareceu.',
    },
    {
      title: 'Conecto os pontos',
      description:
        'Junto suporte, SOC, Defender, IAM e hardening. Já vi o problema dos dois lados.',
    },
    {
      title: 'Escrevo pra ser entendido',
      description:
        'Transformo um achado técnico em relatório que a gestão lê e age.',
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
  { label: 'O que faço', id: 'areas' },
  { label: 'Competências', id: 'skills' },
  { label: 'Pontos fortes', id: 'pontos-fortes' },
  { label: 'Projetos', id: 'projetos' },
  { label: 'Trajetória', id: 'trajetoria' },
  { label: 'Contato', id: 'contato' },
];
