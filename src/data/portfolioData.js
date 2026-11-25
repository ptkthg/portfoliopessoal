export const portfolioData = {
  person: {
    fullName: 'Patrick Santos',
    firstName: 'Patrick Santos',
    role: 'Analista de Segurança da Informação Pleno',
    focus: 'Blue Team · SecOps · IAM & PAM · Threat Intelligence · GRC',
    city: 'Rio de Janeiro, RJ',
    email: 'ptkamp1@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ptkthg/',
    github: 'https://github.com/ptkthg',
    // Expor link direto de WhatsApp em site público é uma decisão consciente.
    whatsappUrl: 'https://wa.me/5521998031285',
    profileImagePath: '/assets/patrickseg.png',
    profileImageAlt: 'Patrick Santos',
    profileImagePosition: 'center 28%',
    resumePath: '/assets/patrick-santos-cv.pdf',
  },
  // Hero: nome + áreas do objetivo do currículo.
  heroAreas: ['Blue Team', 'SecOps', 'IAM & PAM', 'Threat Intelligence', 'GRC'],
  // Uma frase de valor no hero — evita que ele fique só nome + lista.
  heroTagline:
    'Investigo incidentes, construo detecção e automatizo o que trava um SOC. Dois anos entre resposta N1 e N3, do alerta cru ao relatório que a diretoria lê.',
  // Números de topo do hero — provas rápidas, todas vindas do currículo.
  heroStats: [
    { value: '1,2 mil+', label: 'alertas triados' },
    { value: '90+', label: 'investigações' },
    { value: '350+', label: 'IOCs tratados' },
  ],
  // Texto de "o que busco" (seção de contato).
  whatISeek:
    'Busco uma posição Pleno em SecOps, resposta a incidentes ou CTI, onde a investigação seja de verdade e a automação seja bem-vinda. Já operei de N1 a N3, montei detecção e escrevi o post-mortem depois. Me interessa quem trabalha com Microsoft Security, Splunk, nuvem ou SOAR. Se fizer sentido, me chama — respondo rápido.',
  aboutText: [
    'Sou Analista de Segurança da Informação no Rio de Janeiro, com dois anos de atuação em Blue Team, SecOps, IAM e GRC. Comecei administrando identidades e acessos no Active Directory e passei para a operação de segurança, primeiro em SOC N1 e N2, depois em resposta a incidentes N2/N3.',
    'Atuo em resposta a incidentes e SecOps com foco em engenharia de detecção e investigação forense (DFIR). Faço monitoramento, triagem e correlação de eventos em Splunk, Microsoft Defender XDR, Google SecOps, Wazuh e Graylog, além da gestão de identidades e acessos privilegiados em Entra ID, Active Directory, BeyondTrust e CyberArk.',
    'Escrevo regras de detecção em KQL, YARA e SIGMA mapeadas na matriz MITRE ATT&CK e desenvolvo automações em Python e PowerShell para playbooks de SOAR. Na frente de GRC, elaboro políticas, mapeio controles e reúno evidências para auditorias de ISO 27001, NIST e LGPD, com relatórios pós-incidente, SOPs e runbooks.',
    'Atualmente estudo segurança em nuvem (Azure e AWS) e o uso de LLMs na análise de segurança, tema das ferramentas que desenvolvo e mantenho no GitHub.',
  ],
  // Métricas e pilares do "Sobre".
  aboutMetrics: [
    { value: '2+', label: 'Anos em Segurança' },
    { value: '3', label: 'Contextos corporativos' },
    { value: '5+', label: 'Projetos técnicos' },
    { value: 'Pleno', label: 'Nível de atuação' },
  ],
  aboutPillars: [
    { index: '01', label: 'Detectar', desc: 'Engenharia de detecção em KQL, YARA e SIGMA, com mapeamento na matriz MITRE ATT&CK.' },
    { index: '02', label: 'Investigar', desc: 'Correlação de eventos, logs, IOC e IOA em SIEM, com investigação forense digital (DFIR).' },
    { index: '03', label: 'Responder', desc: 'Contenção, erradicação, coleta de evidências e relatório pós-incidente.' },
    { index: '04', label: 'Melhorar', desc: 'Tuning de regras, hardening, automação de playbooks e atualização de políticas.' },
  ],
  areas: [
    {
      title: 'SOC & Resposta a Incidentes',
      icon: 'radar',
      description:
        'Monitoramento N1 a N3, triagem e correlação de eventos em SIEM, contenção, erradicação e fechamento com post-mortem. Investigação forense digital (DFIR) quando o caso exige rastrear o que aconteceu.',
    },
    {
      title: 'Engenharia de Detecção',
      icon: 'target',
      description:
        'Escrita e tuning de regras em KQL, YARA e SIGMA, mapeadas na matriz MITRE ATT&CK. Revisão de detecções existentes para cortar falso positivo sem perder cobertura real.',
    },
    {
      title: 'Cyber Threat Intelligence',
      icon: 'globe',
      description:
        'Triagem e enriquecimento de IOCs e IOAs, integração de feeds, mapeamento de campanhas e monitoramento de exposição de marca com Axur e Apura. Análise preliminar de payloads em sandbox.',
    },
    {
      title: 'IAM & PAM',
      icon: 'key',
      description:
        'Governança de acessos, RBAC e menor privilégio em Microsoft Entra ID e Active Directory. Acesso privilegiado via BeyondTrust e CyberArk, Kerberos, NTLM e políticas de Acesso Condicional.',
    },
    {
      title: 'Gestão de Vulnerabilidades (RBVM)',
      icon: 'bug',
      description:
        'Priorização baseada em risco com Tenable Nessus e Qualys: criticidade, exposição real, ativo afetado e esforço de correção. Acompanhamento do patch até o fechamento.',
    },
    {
      title: 'GRC & Conformidade',
      icon: 'shield',
      description:
        'Políticas de segurança, gestão de risco, mapeamento de controles e coleta de evidência para auditoria interna e externa, alinhado a ISO 27001, NIST CSF e LGPD.',
    },
    {
      title: 'Automação & SecOps',
      icon: 'server',
      description:
        'Playbooks de SOAR e scripts em Python, PowerShell e Bash para matar trabalho repetitivo. Integrações via API REST, n8n e webhooks, com LLMs aplicados à análise de segurança.',
    },
    {
      title: 'Web AppSec & Bug Bounty',
      icon: 'crosshair',
      side: 'offensive',
      description:
        'Caça a vulnerabilidades em aplicações web (XSS, IDOR, SSRF, SQLi) em programas de bug bounty na HackerOne, com foco em recon e validação manual. Estudo rumo ao Purple Team.',
    },
  ],
  // Competências: espelham os blocos de "Conhecimentos" do currículo.
  skillGroups: [
    {
      label: 'SOC, DFIR & Detecção',
      level: 'uso no trabalho',
      skills: ['Monitoramento N1/N2/N3', 'Investigação forense (DFIR)', 'Correlação de eventos', 'Contenção e erradicação', 'Post-mortem', 'KQL', 'YARA', 'Regras SIGMA', 'MITRE ATT&CK'],
    },
    {
      label: 'SIEM, EDR & Telemetria',
      level: 'uso no trabalho',
      skills: ['Microsoft Defender XDR', 'Splunk', 'Google SecOps (Chronicle)', 'AlienVault', 'Wazuh', 'Graylog', 'Suricata IDS', 'Zeek', 'Análise de logs'],
    },
    {
      label: 'Threat Intelligence & Malware',
      level: 'uso no trabalho',
      skills: ['Enriquecimento de IOC/IOA', 'Feeds de inteligência', 'Axur', 'Apura', 'ANY.RUN', 'Hybrid Analysis', 'Análise estática/dinâmica', 'Exposição de marca'],
    },
    {
      label: 'IAM & PAM',
      level: 'uso no trabalho',
      skills: ['Microsoft Entra ID', 'Active Directory', 'BeyondTrust', 'CyberArk', 'RBAC', 'Menor privilégio', 'Kerberos', 'NTLM', 'Acesso Condicional'],
    },
    {
      label: 'GRC & RBVM',
      level: 'uso no trabalho',
      skills: ['Tenable Nessus', 'Qualys', 'ISO/IEC 27001', 'NIST CSF', 'LGPD', 'OWASP Top 10', 'Gestão de risco', 'Auditoria interna', 'Mapeamento de controles'],
    },
    {
      label: 'Infra, Redes & Nuvem',
      level: 'uso no trabalho',
      skills: ['Microsoft Intune', 'NGFW (OPNsense, Fortinet)', 'WAF', 'ASM', 'GPO', 'Azure', 'AWS', 'VPC', 'Hardening'],
    },
    {
      label: 'Automação & SecOps',
      level: 'uso no trabalho',
      skills: ['Python', 'PowerShell', 'Bash', 'Playbooks de SOAR', 'API REST', 'n8n', 'Webhooks'],
    },
    {
      label: 'IA aplicada à segurança',
      level: 'uso nos projetos · estudo ativo',
      skills: ['LLMs na análise', 'Engenharia de prompt', 'Enriquecimento de IOC com IA', 'RAG', 'Embeddings', 'APIs (Groq / OpenAI / Anthropic)'],
    },
    {
      label: 'Documentação técnica & executiva',
      level: 'uso no trabalho',
      skills: ['SOPs e runbooks', 'Relatório pós-incidente', 'Matriz de risco', 'Mapa de evidências', 'Apresentação executiva'],
    },
    {
      // Índice 9, usado pela aba Security Engineering em Portfolio.jsx. Fica no fim para não deslocar os outros índices.
      label: 'Security Engineering',
      level: 'uso nos projetos · estudo ativo',
      skills: ['Terraform (IaC)', 'GitHub Actions com menor privilégio', 'Actions fixadas por SHA', 'Checkov', 'TFLint', 'Policy as code', 'Secret scanning e push protection', 'Dependabot', 'Rulesets de branch', 'Detection as code (Sigma, KQL, YARA)'],
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
  languages: [
    { name: 'Português', level: 'Nativo' },
    { name: 'Inglês', level: 'Intermediário' },
    { name: 'Espanhol', level: 'Intermediário' },
  ],
  // O que ainda estou desenvolvendo — honesto, sem prometer demais.
  developing: [
    { area: 'Cloud Security (Azure / AWS)', note: 'saindo dos controles pra arquitetura' },
    { area: 'Engenharia de detecção avançada', note: 'SIGMA em escala e detection-as-code' },
    { area: 'IA generativa aplicada ao SOC', note: 'meu foco novo de estudo' },
    { area: 'Lado ofensivo / Purple Team', note: 'pentest e bug bounty em laboratório' },
    { area: 'Certificações', note: 'em andamento (SC-200 / AZ-500 no radar)' },
  ],
  experiences: [
    {
      company: 'Rio Quality',
      role: 'Analista Júnior de Segurança da Informação',
      period: 'jan/2024 – jun/2025',
      focus: 'Identidade, monitoramento e conformidade',
      metrics: [
        { value: '500', label: 'usuários geridos' },
        { value: '800', label: 'eventos/mês' },
        { value: '-30%', label: 'tempo de investigação' },
        { value: '300', label: 'ativos de TI' },
      ],
      activities: [
        'Administração de acessos e identidades no Active Directory e Azure AD para cerca de 500 usuários, aplicando Kerberos, NTLM e menor privilégio.',
        'Implantação e sustentação de Wazuh e Graylog, com análise de cerca de 800 eventos mensais e redução de 30% no tempo de investigação.',
        'Acompanhamento de 25 rotinas críticas de backup, com execução acima de 97%, e gestão do ciclo de vida de aproximadamente 300 ativos de TI.',
        'Atendimento de cerca de 150 chamados mensais em Segurança e Infraestrutura, reduzindo em 20% os incidentes recorrentes.',
        'Elaboração e aplicação de Políticas de Segurança da Informação (PSI) e conformidade com LGPD e ISO 27001, com campanhas de conscientização para cerca de 500 colaboradores.',
      ],
      stack: ['Active Directory', 'Azure AD', 'Wazuh', 'Graylog', 'LGPD', 'ISO 27001'],
    },
    {
      company: 'Vortex Security',
      role: 'Security Operations Center Analyst',
      period: 'jul/2025 – set/2025',
      focus: 'Triagem, investigação e threat intelligence',
      metrics: [
        { value: '1.200', label: 'alertas triados' },
        { value: '95%', label: 'SLA cumprido' },
        { value: '90+', label: 'investigações' },
        { value: '-25%', label: 'falsos positivos' },
      ],
      activities: [
        'Triagem e análise de aproximadamente 1.200 alertas com 95% de cumprimento de SLA, usando Splunk, AlienVault e Google SecOps/Chronicle para correlação e investigação de logs.',
        'Condução de mais de 90 investigações envolvendo phishing, força bruta, acessos suspeitos, malware e comportamento anômalo, em atendimento N1 e N2.',
        'Atuação em Cyber Threat Intelligence com Axur e Apura, monitorando ameaças externas e enriquecendo mais de 150 IOCs.',
        'Análise estática e dinâmica preliminar de scripts e payloads em sandbox (ANY.RUN, Hybrid Analysis), extraindo mais de 200 IOCs para bloqueio em perímetro e EDR.',
        'Gestão de acessos privilegiados via BeyondTrust para 60 contas administrativas e revisão de 20 regras de detecção, reduzindo em 25% os falsos positivos.',
        'Documentação de mais de 80 registros entre chamados, playbooks e runbooks.',
      ],
      stack: ['Splunk', 'Google SecOps', 'AlienVault', 'Axur', 'Apura', 'ANY.RUN', 'BeyondTrust'],
    },
    {
      company: 'Oceânica',
      role: 'Analista de Segurança da Informação Pleno',
      period: 'out/2025 – mar/2026',
      focus: 'DFIR, engenharia de detecção e GRC',
      metrics: [
        { value: 'N2/N3', label: 'nível de atuação' },
        { value: '4', label: 'SIEMs operados' },
        { value: 'SOAR', label: 'playbooks próprios' },
        { value: '3', label: 'frameworks auditados' },
      ],
      activities: [
        'Resposta a incidentes e SecOps N2/N3, com foco em engenharia de detecção, investigação forense (DFIR) e sustentação de projetos de Segurança da Informação.',
        'Análise contínua de Threat Intelligence com triagem de IOCs (IPs, domínios, URLs, hashes), mapeamento de campanhas e integração de feeds para enriquecimento preventivo de perímetro.',
        'Monitoramento, triagem e correlação de eventos em SIEM (Splunk, Defender XDR, Google SecOps, Wazuh), com gestão de identidades e acessos privilegiados em Entra ID, Active Directory, BeyondTrust e CyberArk.',
        'Gestão de Vulnerabilidades Baseada em Risco (RBVM) e desenvolvimento de automações em Python, PowerShell e KQL para playbooks de SOAR, cortando trabalho operacional via APIs e LLMs.',
        'Frente de GRC: elaboração de políticas, gestão de riscos, implementação de controles e coleta de evidências para auditorias internas e externas (ISO 27001, NIST e LGPD).',
        'Documentação técnica e executiva de nível sênior: relatórios pós-incidente, procedimentos operacionais (SOPs/runbooks) e recomendações estratégicas de remediação.',
      ],
      stack: ['Splunk', 'Defender XDR', 'CyberArk', 'Python', 'KQL', 'SOAR', 'ISO 27001'],
    },
  ],
  education: {
    course: 'Tecnologia em Análise e Desenvolvimento de Sistemas',
    institution: 'Universidade Estácio de Sá, UNESA',
    status: 'Conclusão prevista em 12/2026',
  },
  projects: [
    {
      filename: 'perito.case',
      title: 'Perito',
      version: 'v0.1.0',
      status: 'OPERATIONAL',
      statusColor: 'text-neon text-glow',
      description:
        'Num incidente real, as pistas ficam espalhadas em ferramentas diferentes, cada uma com seu formato e fuso, e a conclusão precisa resistir a auditoria. O Perito normaliza evidências de 7 fontes (Defender XDR, Sentinel, Entra ID, Splunk, Elastic e Wazuh) numa timeline única em UTC, com cadeia de custódia por SHA-256 e técnicas do MITRE ATT&CK sugeridas para o analista confirmar. Cada afirmação aponta para a linha exata do log original e é marcada como evidência, hipótese ou limitação. Tem CLI em Python só com biblioteca padrão, console React para o analista e skills para conduzir a investigação com Claude Code e Codex, que se revisam. A demonstração pública traz um caso fictício com tour guiado até o relatório executivo.',
      logs: [
        { prefix: '[TEST]', value: 'pytest 178 passed  vitest 79 passed' },
        { prefix: '[SRC] ', value: '7 fontes normalizadas  timeline UTC única' },
        { prefix: '[CUST]', value: 'cadeia de custódia SHA-256  raw_ref arquivo:linha' },
        { prefix: '[DEMO]', value: 'caso sintético  tour de 7 passos  relatório executivo' },
      ],
      tags: ['Python', 'React 19', 'TypeScript', 'DFIR', 'MITRE ATT&CK', 'Claude Code'],
      liveUrl: 'https://perito-demo-lovat.vercel.app',
      githubUrl: 'https://github.com/ptkthg/perito',
      proof: { ci: 'https://github.com/ptkthg/perito/actions', tests: '178 testes Python e 79 da interface' },
    },
    {
      filename: 'hookshade.eml',
      title: 'Hookshade',
      version: 'v0.1.0',
      status: 'OPERATIONAL',
      statusColor: 'text-neon text-glow',
      description:
        'Na triagem de phishing, o analista precisa saber por que um e-mail foi marcado, não só a nota. O Hookshade recebe um .eml ou texto bruto, extrai IOCs, lê SPF, DKIM e DMARC dos headers, detecta links com URL exibida diferente da real e soma um índice de risco em que cada ponto aponta para a evidência e para a regra que disparou. As regras são declarativas, editáveis e validadas contra ReDoS, e o pipeline não faz chamadas externas, não abre URLs nem executa anexos. A aplicação é full stack (FastAPI, Next.js e PostgreSQL) com sessão em cookie HttpOnly __Host-, CSRF assinado, RBAC, cifra e redação de dados pessoais e CSP com nonce. A demonstração pública entra sem senha num perfil somente leitura com e-mails fictícios.',
      logs: [
        { prefix: '[TEST]', value: 'pytest 252 passed  vitest 18 passed  e2e playwright' },
        { prefix: '[SCORE]', value: 'índice explicável  evidência + regra por ponto' },
        { prefix: '[SEC] ', value: 'cookie __Host-  CSRF  RBAC  CSP nonce  anti-ReDoS' },
        { prefix: '[DEMO]', value: 'perfil somente leitura  4 análises fictícias' },
      ],
      tags: ['Python', 'FastAPI', 'Next.js', 'PostgreSQL', 'Phishing', 'AppSec'],
      liveUrl: 'https://hookshade.vercel.app',
      githubUrl: 'https://github.com/ptkthg/hookshade',
      proof: { ci: 'https://github.com/ptkthg/hookshade/actions', tests: '252 testes Python, 18 da interface e 1 E2E' },
    },
    {
      filename: 'secidentity_ai.yaml',
      title: 'SecIdentity AI',
      version: 'v1.1.0',
      status: 'OPERATIONAL',
      statusColor: 'text-neon text-glow',
      description:
        'Plataforma multi-agente para atendimento ITSM de N1 a N3, break-glass no CyberArk com mitigação de SoD temporária em chamados P1 e auditoria SOX e ISO 27001 contínua. As regras de segurança ficam em YAML versionado, que um motor interpreta, aplica e audita. Num incidente P1 simulado, da abertura do chamado à liberação de root em produção, foram 9 minutos e 50 segundos, com custódia dupla, gravação de sessão e trilha completa.',
      logs: [
        { prefix: '[INIT]', value: '4 agentes carregados: ServiceDesk, IAM, PAM, Governance' },
        { prefix: '[CFG] ', value: '18 regras YAML + contrato RH Leaver Sync (fail-closed)' },
        { prefix: '[SOD] ', value: 'GAP-001 mitigado: custódia dupla + gravação PSM ativa' },
        { prefix: '[S01] ', value: 'N1 auto-resolve  PASS  INC-2026-4471 fechado sem toque humano' },
        { prefix: '[S02] ', value: 'P1 break-glass   PASS  SoD detectado, JIT liberado, pacote SOX' },
        { prefix: '[S03] ', value: 'leaver blocked   PASS  desligamento bloqueia todas as fases' },
        { prefix: '[TEST]', value: 'demo.py --all  3/3 cenários  exit code 0' },
        { prefix: '[HASH]', value: 'SHA-256 + árvore de Merkle + RFC 3161 por execução' },
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
      proof: { tests: 'demo.py --all: 3/3 cenários' },
    },
    {
      filename: 'repositorio_seguro.tf',
      title: 'Terraform GitHub Seguro',
      version: 'v0.1.0',
      status: 'OPERATIONAL',
      statusColor: 'text-neon text-glow',
      description:
        'Repositório criado na mão costuma nascer desprotegido: sem secret scanning, com force push liberado na branch principal e sem canal para reportar vulnerabilidades. Este módulo Terraform cria cada repositório já configurado, com push protection, ruleset, pull request obrigatório e Dependabot, e documenta o risco que cada decisão reduz. Um terraform destroy arquiva o repositório em vez de apagar, pela mesma lógica da evidência imutável em DFIR. O CI roda 10 testes com mock_provider, TFLint e Checkov sem receber nenhuma credencial, e a única exceção de política está justificada no próprio código.',
      logs: [
        { prefix: '[TEST]', value: 'terraform test  10/10 pass  (mock_provider, sem token)' },
        { prefix: '[LINT]', value: 'tflint preset recommended  0 issues' },
        { prefix: '[SAST]', value: 'checkov  0 failed  1 exceção justificada no código' },
        { prefix: '[CI]  ', value: 'GitHub Actions  contents: read  actions fixadas por SHA' },
      ],
      tags: ['Terraform', 'GitHub', 'DevSecOps', 'Checkov', 'TFLint', 'GitHub Actions'],
      liveUrl: null,
      githubUrl: 'https://github.com/ptkthg/terraform-github-seguro',
      proof: { ci: 'https://github.com/ptkthg/terraform-github-seguro/actions', tests: '10 testes (terraform test)' },
    },
    {
      filename: 'kql_detection_as_code.yaml',
      title: 'KQL Detection as Code',
      version: 'v0.1.0',
      status: 'OPERATIONAL',
      statusColor: 'text-neon text-glow',
      description:
        'Detecção testada só em produção descobre o erro tarde: coluna que não existe, falso positivo óbvio, regra que nunca dispara. Aqui cada detecção KQL do Microsoft Defender XDR é tratada como código: YAML com mapeamento MITRE ATT&CK, um teste positivo e um negativo parecido benigno, e execução real no emulador oficial do Kusto, com o schema completo das tabelas tirado da documentação da Microsoft. Uma coluna fora do schema quebra o teste. As 8 detecções foram escritas do zero, com dados de teste sintéticos, e o CI roda 69 testes a cada push.',
      logs: [
        { prefix: '[TEST]', value: 'pytest  69 passed  (emulador Kusto no CI)' },
        { prefix: '[RULE]', value: '8 detecções  11 técnicas ATT&CK' },
        { prefix: '[SCHM]', value: 'DeviceProcessEvents 69 col  EntraIdSignInEvents 52 col' },
        { prefix: '[CI]  ', value: 'contents: read  imagem fixada por digest' },
      ],
      tags: ['KQL', 'Detection Engineering', 'Defender XDR', 'Kusto', 'Python', 'MITRE ATT&CK'],
      liveUrl: null,
      githubUrl: 'https://github.com/ptkthg/kql-detection-as-code',
      proof: { ci: 'https://github.com/ptkthg/kql-detection-as-code/actions', tests: '69 testes no emulador Kusto' },
    },
    {
      filename: 'deception_loop.py',
      title: 'Deception Loop',
      version: 'v1.0.0',
      status: 'OPERATIONAL',
      statusColor: 'text-neon text-glow',
      description:
        'Equipes sem analista de plantão recebem indicadores de comprometimento e não têm quem transforme cada um em bloqueio. O Deception Loop faz essa conversão: aceita hashes de feeds de inteligência e também gera indicadores próprios, monitorando arquivos-isca que nenhum usuário legítimo tem motivo para abrir. De cada indicador sai uma assinatura YARA validada e um script de bloqueio de firewall, cobertos por 211 testes automatizados.',
      logs: [
        { prefix: '[BAIT]', value: 'honeyfile watcher active' },
        { prefix: '[FEED]', value: 'md5 / sha1 / sha256 intake' },
        { prefix: '[RULE]', value: 'YARA + firewall in 19ms' },
        { prefix: '[TEST]', value: '211 tests - 100% pass' },
      ],
      tags: ['Python 3.13', 'Streamlit', 'YARA', 'SOAR', 'Pytest', 'MITRE ATT&CK'],
      // URL absoluta: o GIF vive no repositorio do projeto, nao neste.
      media: 'https://raw.githubusercontent.com/ptkthg/deception-loop/main/media/demo_deception_loop.gif',
      mediaCaption: 'Isca tocada, ameaça identificada e defesas geradas, em tempo real',
      liveUrl: 'https://deception-loop.streamlit.app',
      githubUrl: 'https://github.com/ptkthg/deception-loop',
      proof: { tests: '211 testes (pytest)' },
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
        'Consultas KQL de threat hunting que escrevi e usei na operação da Oceânica, no Microsoft Defender XDR, com lógica reaplicável a SIEM, Wazuh e Graylog. Cobriam password spray, LOLBins, PowerShell suspeito e Outlook criando processos anômalos. O código é interno da empresa e não tem repositório público; a versão aberta, escrita do zero e testada, é o KQL Detection as Code.',
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
        'Num laboratório de perímetro com OPNsense NGFW, Wazuh SIEM e Suricata IDS, o problema era o ruído: 40 falsos positivos misturados aos alertas que importavam. Um motor de tuning em Python (apply_tuning.py) aplicou supressões escopadas, validadas no próprio Wazuh, e levou os falsos positivos de 40 para 0 sem silenciar nenhum alerta de ataque.',
      logs: [
        { prefix: '[SIEM]', value: 'Wazuh 4.14.7 · Syslog RFC3164' },
        { prefix: '[NET] ', value: '4 zonas · OPNsense NGFW + Suricata' },
        { prefix: '[TUNE]', value: 'Falsos positivos 40 -> 0 (100%)' },
      ],
      tags: ['Wazuh', 'OPNsense', 'Suricata', 'Python', 'Syslog RFC3164', 'MITRE ATT&CK'],
      liveUrl: null,
      githubUrl: 'https://github.com/ptkthg/perimeter-defend-lab',
      proof: { evidence: 'capturas do Wazuh e do tuning no repositório' },
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
              'Motor do Wazuh registrando 100% de eliminação de falsos positivos (de 40 para 0) e preservação total de alertas críticos (15/15).',
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
  // Próximos passos públicos: mostram a trajetória da transição para security engineering.
  roadmap: [
    { status: 'PRÓXIMO', title: 'Baseline de segurança AWS', detail: 'CloudTrail, alerta de uso da conta root e orçamento, tudo em Terraform.' },
    { status: 'PLANEJADO', title: 'CI nos projetos existentes', detail: 'Testes automáticos no GitHub Actions para Deception Loop e SecIdentity AI.' },
    { status: 'PLANEJADO', title: 'Projetos em inglês', detail: 'READMEs em inglês para vagas internacionais e remotas.' },
  ],
  caseStudy: {
    title: 'Estudo de Caso',
    subtitle: 'Resposta a incidente com Microsoft Defender',
    context:
      'Alerta do Microsoft Defender num endpoint de uma empresa do setor financeiro. Cada afirmação abaixo traz o tipo: o que foi observado, o que é inferência e o que ficou sem visibilidade.',
    steps: [
      { phase: 'Detecção', tag: 'EVIDÊNCIA', text: 'O Defender alertou uma execução suspeita de PowerShell no endpoint.' },
      { phase: 'Contenção', tag: 'EVIDÊNCIA', text: 'O dispositivo foi isolado antes do aprofundamento da investigação.' },
      { phase: 'Investigação', tag: 'EVIDÊNCIA', text: 'Correlação no SIEM, validação da conta no Active Directory e cruzamento com a telemetria do endpoint.' },
      { phase: 'Interpretação', tag: 'HIPÓTESE', text: 'Confiança média: o comportamento indica reconhecimento do ambiente (Discovery). Confirmaria: a lista dos comandos executados. Refutaria: comandos de uso administrativo legítimo.' },
      { phase: 'Causa raiz', tag: 'EVIDÊNCIA', text: 'E-mail de phishing que passou pelo filtro inicial; a execução foi bloqueada pelo Defender.' },
      { phase: 'Correção', text: 'Revisão dos privilégios locais com aplicação de menor privilégio e proposta de ajuste via GPO na política de execução de scripts.' },
      { phase: 'Resultado', text: 'Incidente contido, causa raiz tratada e controle preventivo reforçado.' },
    ],
    attack: [
      { id: 'T1566', name: 'Phishing', note: 'subtécnica em aberto: anexo ou link não registrado' },
      { id: 'T1059.001', name: 'PowerShell' },
      { id: 'TA0007', name: 'Discovery', note: 'hipótese' },
    ],
    limitation:
      'Horários, identificadores e dados do cliente foram omitidos por confidencialidade. A sequência acima é a ordem dos fatos, não uma timeline com horários.',
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
