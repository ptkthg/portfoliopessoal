export const portfolioData = {
  person: {
    email: 'ptkamp1@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ptkthg/',
    github: 'https://github.com/ptkthg',
    resumePath: '/assets/patrick-santos-cv.pdf',
  },
  // Números do hero: todos verificáveis pelos links de CI dos projetos.
  // 8: cada detecção do KQL Detection as Code tem um caso de ataque e um caso benigno parecido.
  // 7: fontes de evidência que o Perito normaliza. 4: Perito, Hookshade, KQL e Terraform.
  heroStats: [
    { value: '8', label: 'detecções KQL testadas contra falso positivo' },
    { value: '7', label: 'fontes de evidência numa timeline com custódia' },
    { value: '4', label: 'projetos com CI público' },
  ],
  about: [
    'Tenho pouco mais de dois anos em Segurança da Informação. Na Rio Quality, administrei as identidades de cerca de 500 usuários no Active Directory e implantei Wazuh e Graylog. No SOC da Vortex Security, triei cerca de 1.200 alertas e conduzi mais de 90 investigações. Na Oceânica, atuei em resposta a incidentes N2/N3, com investigação forense, engenharia de detecção, acessos privilegiados e evidências para auditorias ISO 27001.',
    'Hoje aplico essa base em security engineering: detecções testadas antes da produção, infraestrutura em Terraform protegida desde a criação e ferramentas de resposta a incidentes com cadeia de custódia.',
    'Posso atuar em engenharia de detecção, resposta a incidentes e DFIR, IAM e PAM, e segurança de infraestrutura como código. No trabalho, usei Defender XDR, Splunk, Google SecOps, Entra ID, CyberArk, KQL e Python; nos projetos, Terraform e GitHub Actions. Estou desenvolvendo segurança em nuvem (AWS e Azure).',
  ],
  // Competências: o nível vale para o grupo inteiro. "uso no trabalho" só para o que aparece na trajetória.
  skillGroups: [
    {
      id: 'seceng',
      label: 'Security Engineering',
      level: 'nos projetos públicos, com CI',
      skills: ['Terraform (IaC)', 'GitHub Actions com menor privilégio', 'Actions fixadas por SHA', 'Policy as code (Checkov)', 'TFLint', 'Secret scanning e push protection', 'Dependabot', 'Rulesets de branch', 'Detection as code (KQL)'],
    },
    {
      id: 'soc',
      label: 'SOC, DFIR & Detecção',
      level: 'uso no trabalho',
      skills: ['Monitoramento N1 a N3', 'Investigação forense (DFIR)', 'Correlação de eventos', 'Contenção e erradicação', 'Relatório pós-incidente', 'KQL', 'YARA', 'Regras SIGMA', 'MITRE ATT&CK'],
    },
    {
      id: 'siem',
      label: 'SIEM, EDR & Telemetria',
      level: 'uso no trabalho',
      skills: ['Microsoft Defender XDR', 'Splunk', 'Google SecOps (Chronicle)', 'AlienVault', 'Wazuh', 'Graylog', 'Suricata IDS', 'Zeek'],
    },
    {
      id: 'cti',
      label: 'Threat Intelligence & Malware',
      level: 'uso no trabalho',
      skills: ['Enriquecimento de IOC/IOA', 'Feeds de inteligência', 'Axur', 'Apura', 'ANY.RUN', 'Hybrid Analysis', 'Análise estática e dinâmica preliminar'],
    },
    {
      id: 'iam',
      label: 'IAM & PAM',
      level: 'uso no trabalho',
      skills: ['Microsoft Entra ID', 'Active Directory', 'BeyondTrust', 'CyberArk', 'RBAC e menor privilégio', 'Kerberos', 'NTLM', 'Acesso Condicional'],
    },
    {
      id: 'grc',
      label: 'GRC & RBVM',
      level: 'uso no trabalho',
      skills: ['Tenable Nessus', 'Qualys', 'ISO/IEC 27001', 'NIST CSF', 'LGPD', 'Gestão de risco', 'Auditoria interna', 'Mapeamento de controles'],
    },
    {
      id: 'infra',
      label: 'Infra & Redes',
      level: 'uso no trabalho',
      skills: ['Microsoft Intune', 'GPO', 'NGFW (OPNsense, Fortinet)', 'WAF', 'ASM', 'Hardening'],
    },
    {
      id: 'cloud',
      label: 'Nuvem',
      level: 'estudo ativo · próximo projeto',
      skills: ['Azure', 'AWS', 'Redes em nuvem (VPC)', 'CloudTrail e GuardDuty'],
    },
    {
      id: 'automacao',
      label: 'Automação & SecOps',
      level: 'uso no trabalho',
      skills: ['Python', 'PowerShell', 'Bash', 'Playbooks de SOAR', 'API REST', 'n8n', 'Webhooks'],
    },
    {
      id: 'ia',
      label: 'IA aplicada à segurança',
      level: 'nos projetos · estudo ativo',
      skills: ['LLMs na análise', 'Enriquecimento de IOC com IA', 'APIs (Groq / OpenAI / Anthropic)', 'Claude Code e Codex com revisão cruzada'],
    },
    {
      id: 'docs',
      label: 'Documentação técnica & executiva',
      level: 'uso no trabalho',
      skills: ['SOPs e runbooks', 'Relatório pós-incidente', 'Matriz de risco', 'Mapa de evidências', 'Apresentação executiva'],
    },
  ],
  // Abas da seção Competências; `groups` são ids de skillGroups.
  skillCategories: [
    { name: 'Security Engineering', groups: ['seceng'] },
    { name: 'Segurança', groups: ['soc', 'siem', 'cti'] },
    { name: 'IAM / PAM', groups: ['iam'] },
    { name: 'Cloud e Infraestrutura', groups: ['cloud', 'infra'] },
    { name: 'Automação', groups: ['automacao', 'ia'] },
    { name: 'Governança', groups: ['grc', 'docs'] },
  ],
  experiences: [
    {
      company: 'Rio Quality',
      role: 'Analista Júnior de Segurança da Informação',
      period: 'jan/2024 – jun/2025',
      focus: 'Identidade, monitoramento e conformidade',
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
      activities: [
        'Resposta a incidentes e SecOps N2/N3, com foco em engenharia de detecção, investigação forense (DFIR) e sustentação de projetos de Segurança da Informação.',
        'Análise contínua de Threat Intelligence com triagem de IOCs (IPs, domínios, URLs, hashes), mapeamento de campanhas e integração de feeds para enriquecimento preventivo de perímetro.',
        'Monitoramento, triagem e correlação de eventos em SIEM (Splunk, Defender XDR, Google SecOps, Wazuh), com gestão de identidades e acessos privilegiados em Entra ID, Active Directory, BeyondTrust e CyberArk.',
        'Gestão de Vulnerabilidades Baseada em Risco (RBVM) e desenvolvimento de automações em Python, PowerShell e KQL para playbooks de SOAR, cortando trabalho operacional via APIs e LLMs.',
        'Frente de GRC: elaboração de políticas, gestão de riscos, implementação de controles e coleta de evidências para auditorias internas e externas (ISO 27001, NIST e LGPD).',
        'Documentação técnica e executiva: relatórios pós-incidente, procedimentos operacionais (SOPs/runbooks) e recomendações estratégicas de remediação.',
      ],
      stack: ['Splunk', 'Defender XDR', 'CyberArk', 'Python', 'KQL', 'SOAR', 'ISO 27001'],
    },
  ],
  education: {
    course: 'Tecnologia em Análise e Desenvolvimento de Sistemas',
    institution: 'Universidade Estácio de Sá, UNESA',
    status: 'Conclusão prevista em 12/2026',
  },
  // O grupo de destaques reúne os projetos com `featured: true`; os demais grupos mostram só os outros.
  projectGroups: [
    { id: 'projetos-destaques', title: 'Destaques: security engineering', shortTitle: 'Destaques', context: 'Evidência rastreável, aplicação protegida, detecção testada e controles como código, todos com CI público.', featured: true },
    { id: 'projetos-incidentes', title: 'Resposta a incidentes & SOC', shortTitle: 'Incidentes & SOC', context: 'Da triagem do alerta ao relatório, com evidência e custódia.' },
    { id: 'projetos-deteccao', title: 'Engenharia de detecção & hunting', shortTitle: 'Detecção & hunting', context: 'Detecções versionadas, testadas e ajustadas para disparar no que importa.' },
    { id: 'projetos-intel', title: 'Threat intelligence', shortTitle: 'Threat intelligence', context: 'Indicadores e vulnerabilidades com contexto para priorizar a defesa.' },
    { id: 'projetos-identidade', title: 'Identidade & governança', shortTitle: 'Identidade', context: 'Acessos privilegiados com segregação de funções e trilha para auditoria.' },
  ],
  projects: [
    {
      title: 'Perito',
      featured: true,
      group: 'projetos-incidentes',
      version: 'v0.1.0',
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
      title: 'Hookshade',
      featured: true,
      group: 'projetos-incidentes',
      version: 'v0.1.0',
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
      title: 'NetShield SOC',
      group: 'projetos-incidentes',
      version: 'v1.0.0',
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
    {
      title: 'KQL Detection as Code',
      featured: true,
      group: 'projetos-deteccao',
      version: 'v0.1.0',
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
      title: 'XDR Hunting Pack',
      group: 'projetos-deteccao',
      version: null,
      internal: true,
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
      title: 'Deception Loop',
      group: 'projetos-deteccao',
      version: 'v1.0.0',
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
      title: 'Statecraft',
      group: 'projetos-intel',
      version: 'v1.0.0',
      description:
        'Plataforma de threat intelligence em PT-BR: CVEs recentes com CVSS, EPSS e CISA KEV, notícias, briefings gerados por IA e busca de IOCs. A coleta roda num PostgreSQL local e publica um snapshot verificado a cada hora.',
      logs: [
        { prefix: '[FEEDS]', value: '19 RSS sources + NVD API' },
        { prefix: '[AI]   ', value: 'Groq gpt-oss-120b · PT-BR' },
        { prefix: '[KEV]  ', value: 'CISA KEV + EPSS enrichment' },
      ],
      tags: ['Next.js 16', 'TypeScript', 'PostgreSQL', 'Prisma', 'Groq AI'],
      liveUrl: 'https://statecraftcyber.vercel.app',
      githubUrl: 'https://github.com/ptkthg/statecraftcyber',
    },
    {
      title: 'IOC Enricher',
      group: 'projetos-intel',
      version: 'v1.0.0',
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
      title: 'SecIdentity AI',
      group: 'projetos-identidade',
      version: 'v1.1.0',
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
      title: 'Terraform GitHub Seguro',
      featured: true,
      group: 'projetos-identidade',
      version: 'v0.1.0',
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
  ],
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
      { phase: 'Correção', tag: 'EVIDÊNCIA', text: 'Revisão dos privilégios locais com aplicação de menor privilégio e proposta de ajuste via GPO na política de execução de scripts.' },
      { phase: 'Resultado', tag: 'EVIDÊNCIA', text: 'Incidente contido e causa raiz identificada. O ajuste de GPO ficou como proposta para o time responsável.' },
    ],
    attack: [
      { id: 'T1566', name: 'Phishing', note: 'subtécnica em aberto: anexo ou link não registrado' },
      { id: 'T1059.001', name: 'PowerShell' },
      { id: 'TA0007', name: 'Discovery', note: 'hipótese' },
    ],
    limitation:
      'Horários, identificadores e dados do cliente foram omitidos por confidencialidade. A sequência acima é a ordem dos fatos, não uma timeline com horários.',
  },
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
  { label: 'Projetos', id: 'projetos' },
  { label: 'Trajetória', id: 'trajetoria' },
  { label: 'Contato', id: 'contato' },
];
