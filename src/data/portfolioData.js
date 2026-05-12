export const portfolioData = {
  person: {
    fullName: 'Patrick Thiago Rezende dos Santos',
    firstName: 'Patrick Thiago',
    role: 'Segurança da Informação | Blue Team | SOC | Threat Hunting | GRC | IAM',
    city: 'Rio de Janeiro, RJ',
    email: 'ptkamp1@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ptkthg/',
    github: 'https://github.com/ptkthg',
    // Expor link direto de WhatsApp em site público é uma decisão consciente.
    whatsappUrl: 'https://wa.me/5521998031285',
    profileImagePath: '/assets/patrickseg.png',
    profileImageAlt: 'Patrick Thiago Rezende dos Santos',
    profileImagePosition: 'center 28%',
    resumePath: '/assets/patrickcv0426.pdf',
  },
  heroDescription:
    'Profissional de Segurança da Informação com atuação prática em monitoramento de ameaças, resposta a incidentes, gestão de vulnerabilidades, governança de acessos e sustentação de controles de segurança.',
  aboutText: [
    'Profissional de Segurança da Informação com atuação focada em Blue Team, combinando experiência prática em monitoramento de ameaças, resposta a incidentes e gestão de vulnerabilidades com uma base sólida em governança de identidades e acessos.',
    'Minha motivação está em proteger ativos e garantir a resiliência operacional por meio de controles efetivos e processos bem definidos. Valorizo a aplicação de frameworks como NIST CSF e MITRE ATT&CK para orientar a defesa de forma estruturada, sempre alinhado às necessidades do negócio e às exigências de conformidade.',
    'Busco oportunidades onde eu possa contribuir ativamente para a detecção precoce de ameaças e a redução contínua da superfície de ataque, ajudando organizações a operar com segurança em um cenário de riscos cada vez mais complexo.',
  ],
  areas: [
    {
      title: 'Blue Team',
      icon: 'shield',
      description:
        'Monitoramento, investigação e resposta inicial a eventos de segurança, com foco em proteção de ativos e redução da superfície de ataque.',
    },
    {
      title: 'SOC',
      icon: 'radar',
      description:
        'Análise de alertas, correlação de eventos, classificação de incidentes, triagem operacional e redução de falsos positivos.',
    },
    {
      title: 'Threat Hunting',
      icon: 'target',
      description:
        'Criação de hipóteses de caça, análise de comportamento suspeito, investigação baseada em IOC, IOA e padrões anômalos.',
    },
    {
      title: 'Gestão de Vulnerabilidades',
      icon: 'bug',
      description:
        'Identificação, priorização e acompanhamento de correções de falhas em ativos corporativos, incluindo patch management e melhoria contínua.',
    },
    {
      title: 'IAM e Governança de Acessos',
      icon: 'key',
      description:
        'Revisão de permissões, trilhas de auditoria, princípio do menor privilégio, Active Directory e Microsoft Entra ID.',
    },
    {
      title: 'Hardening e Controles',
      icon: 'server',
      description:
        'Sustentação de controles de segurança, inventário, backup, políticas, GPO e fortalecimento da postura defensiva.',
    },
  ],
  techStack: {
    'Microsoft Security': [
      'Microsoft Defender',
      'Microsoft Defender XDR',
      'Microsoft Defender for Endpoint',
      'Microsoft Entra ID',
      'Microsoft Intune',
      'Microsoft Purview',
    ],
    'SOC e Detecção': [
      'SIEM',
      'KQL',
      'Windows Event Logs',
      'IOC',
      'IOA',
      'Análise de alertas de endpoint',
      'Análise de alertas de e-mail',
      'Análise de alertas em aplicações web',
    ],
    'Governança e Hardening': [
      'Active Directory',
      'Governança de acessos',
      'Menor privilégio',
      'Patch management',
      'Gestão de vulnerabilidades',
      'Backup',
      'Inventário de ativos',
      'GPO',
      'Trilhas de auditoria',
    ],
    Ferramentas: ['Harmony Email', 'Imperva WAF', 'Lansweeper', 'Patch Manager Plus', 'PowerShell'],
    Frameworks: ['MITRE ATT&CK', 'NIST CSF', 'CIS Controls', 'OWASP Top 10'],
    Cloud: ['Fundamentos de Azure Security'],
  },
  experiences: [
    {
      company: 'Oceânica',
      role: 'Assistente de Segurança da Informação Pleno',
      period: 'out/2025 – atual',
      activities: [
        'Monitoramento e investigação de alertas em endpoint, e-mail, identidade e aplicações.',
        'Gestão de vulnerabilidades e aplicação de patches para correção de falhas.',
        'Governança de acessos com revisão de permissões e trilhas de auditoria.',
        'Sustentação de controles de backup, inventário de ativos e hardening.',
        'Criação de regras personalizadas em plataformas de defesa XDR.',
      ],
    },
    {
      company: 'Vortex Security',
      role: 'Analista de SOC N1',
      period: 'jul/2025 – set/2025',
      activities: [
        'Monitoramento contínuo via SIEM.',
        'Correlação de eventos e classificação de incidentes.',
        'Análise de logs, IOC e IOA para apoio a investigações.',
        'Ajuste de regras para redução de falsos positivos e melhoria da eficiência operacional.',
      ],
    },
    {
      company: 'Rio Quality',
      role: 'Analista de Segurança Jr',
      period: 'jan/2024 – jun/2025',
      activities: [
        'Administração de identidades e acessos no Active Directory.',
        'Suporte a VPN, proxy, antivírus e ambiente Windows.',
        'Apoio a políticas de segurança e manutenção de ativos críticos.',
        'Aplicação do princípio do menor privilégio em revisões de acesso.',
      ],
    },
  ],
  education: {
    course: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
    institution: 'Universidade Estácio de Sá, UNESA',
    status: 'Cursando',
  },
  // Atualize com suas certificações reais
  certifications: [
    { name: 'SC-900', full: 'Microsoft Security, Compliance and Identity Fundamentals', issuer: 'Microsoft', year: '2024' },
    { name: 'AZ-900', full: 'Microsoft Azure Fundamentals', issuer: 'Microsoft', year: '2024' },
    { name: 'BTL1', full: 'Blue Team Level 1', issuer: 'Security Blue Team', year: '2025' },
    { name: 'SOC Analyst', full: 'SOC Analyst Certification', issuer: 'LetsDefend', year: '2025' },
  ],
  // Para adicionar novo projeto, copie um objeto abaixo e altere title, description, skills e scenarios.
  projects: [
    {
      title: 'Microsoft Defender XDR Hunting Pack',
      isMain: true,
      description:
        'Coleção de consultas e cenários de threat hunting voltados para identificação de comportamentos suspeitos em endpoint, identidade e e-mail.',
      skills: ['KQL', 'Microsoft Defender XDR', 'Threat Hunting', 'MITRE ATT&CK', 'Análise de comportamento', 'Resposta a incidentes'],
      scenarios: ['Password spray', 'Sucesso após múltiplas falhas de login', 'PowerShell suspeito', 'Outlook criando processos anômalos', 'LOLBins', 'Transferência incomum de arquivos'],
      details: {
        where:
          'Principalmente na Oceânica, dentro da rotina de Segurança da Informação e Blue Team, usando o Microsoft Defender XDR como base para investigação, análise de alertas e criação de consultas.',
        how:
          'Desenvolvi e adaptei consultas KQL para investigar comportamentos suspeitos em endpoints, identidades e e-mails, cobrindo cenários como PowerShell suspeito, LOLBins, password spray, Outlook criando processos anômalos e transferências incomuns.',
        why: 'Foi criado para reduzir o tempo de triagem e evitar que cada investigação começasse do zero.',
        purpose:
          'Serviu para transformar hipóteses de ataque em consultas práticas, reutilizáveis e voltadas para investigação no Defender XDR.',
      },
    },
    {
      title: 'Priorização de Hardening com Secure Score',
      description:
        'Modelo de priorização de recomendações de segurança com base em severidade, impacto, esforço de implementação, ativos afetados e evidências necessárias.',
      skills: ['Microsoft Defender', 'Secure Score', 'Hardening', 'Gestão de risco', 'Controles de segurança', 'Relatórios executivos'],
      scenarios: ['LSA Protection', 'Network Protection', 'AutoRun/AutoPlay', 'NLA em RDP', 'LDAP Signing', 'ASR Rules'],
      details: {
        where:
          'Na Oceânica, durante o acompanhamento de recomendações do Microsoft Defender, Secure Score, postura de segurança e controles de hardening.',
        how:
          'Organizei recomendações por severidade, impacto, esforço de implementação, ativos afetados, status e evidências, envolvendo controles como LSA Protection, Network Protection, AutoRun/AutoPlay, NLA em RDP, LDAP Signing, ASR Rules, GPO e Intune.',
        why: 'Foi feito porque as recomendações precisavam sair de uma lista técnica e virar um plano de ação priorizado.',
        purpose:
          'Serviu para separar quick wins, mudanças estruturais, exceções justificadas e evidências de implementação, facilitando comunicação técnica e executiva.',
      },
    },
    {
      title: 'Correlação entre WAF, ASM e Risco Web',
      description:
        'Análise de exposição externa combinando achados de Attack Surface Management com eventos de WAF e riscos de segurança em aplicações web.',
      skills: ['WAF', 'ASM', 'OWASP Top 10', 'Segurança web', 'Análise de risco', 'Recomendação técnica'],
      scenarios: ['Ausência de HSTS', 'Ausência de CSP', 'HTTP sem redirecionamento para HTTPS', 'Ausência de X-Frame-Options', 'Ausência de X-Content-Type-Options', 'Tentativas de SQL Injection e XSS'],
      details: {
        where:
          'Na Oceânica, em análises envolvendo exposição externa, Attack Surface Management, eventos de WAF Imperva e riscos em aplicações web.',
        how:
          'Correlacionei achados de ASM com eventos do WAF, avaliando ausência de headers de segurança, HTTP sem redirecionamento para HTTPS, ausência de HSTS, CSP, X-Frame-Options, X-Content-Type-Options e tentativas de SQL Injection, XSS e fuzzing.',
        why:
          'Foi feito para mostrar que achados de exposição externa e ataques observados no WAF tinham impacto real no risco das aplicações.',
        purpose:
          'Serviu para apoiar priorização de correções, comunicação com áreas responsáveis e redução da superfície de ataque web.',
      },
    },
    {
      title: 'Relatório Pós-Incidente de Endpoint',
      description:
        'Modelo de relatório pós-incidente com linha do tempo, evidências técnicas, hipótese de ataque, impacto, contenção, erradicação e lições aprendidas.',
      skills: ['Resposta a incidentes', 'Análise de logs', 'Processo pai-filho', 'Coleta de evidências', 'Comunicação executiva', 'Documentação técnica'],
      scenarios: ['Alerta de endpoint', 'Execução suspeita', 'Análise de cadeia de processos', 'Contenção', 'Recomendações pós-incidente'],
      details: {
        where:
          'Na Oceânica, a partir de investigações de alertas de endpoint, eventos suspeitos e necessidade de documentar incidentes com evidências.',
        how:
          'Criei um modelo com resumo executivo, escopo, linha do tempo, evidências técnicas, hipótese de ataque, impacto, contenção, erradicação, recuperação, causa raiz e recomendações.',
        why:
          'Foi feito para evitar relatórios soltos, subjetivos ou técnicos demais, criando uma estrutura clara para gestão e operação.',
        purpose:
          'Serviu para registrar decisões, evidências, aprendizado pós-incidente e ações preventivas para reduzir recorrência.',
      },
    },
    {
      title: 'Modelo de Governança de Acessos',
      description:
        'Modelo de revisão de acessos com foco em menor privilégio, contas inativas, permissões excessivas, trilhas de auditoria e conformidade.',
      skills: ['IAM', 'Active Directory', 'Entra ID', 'Governança de acessos', 'Menor privilégio', 'Auditoria'],
      scenarios: ['Usuários inativos', 'Contas órfãs', 'Acessos privilegiados', 'Permissões excessivas', 'Revisão periódica', 'Evidência de aprovação'],
      details: {
        where:
          'Principalmente na Oceânica, com base em rotinas de revisão de permissões, Active Directory, Microsoft Entra ID, grupos sensíveis e evidências. Vortex e Rio Quality contribuíram como base operacional em suporte, acessos e troubleshooting.',
        how:
          'Organizei um modelo para identificar usuários inativos, contas órfãs, permissões excessivas, acessos privilegiados, grupos sensíveis, exceções e evidências de aprovação.',
        why:
          'Foi feito para reduzir excesso de privilégio e dar mais rastreabilidade ao processo de concessão e revisão de acessos.',
        purpose:
          'Serviu para conectar governança, segurança e operação, fortalecendo auditoria, menor privilégio e controle de permissões.',
      },
    },
  ],
  // Para adicionar novo app, copie um objeto abaixo e altere title, category, status, maturity, problem, description, stack, value e nextStep.
  blueTeamLab: [
    {
      title: 'IOC Enricher',
      subtitle: 'Enriquecimento de indicadores para triagem Blue Team',
      category: 'Threat Intelligence / SOC',
      status: 'OPERATIONAL',
      maturity: 'Em produção',
      liveUrl: 'https://iocenricher.vercel.app',
      githubUrl: 'https://github.com/ptkthg/iocenricher',
      problem:
        'Analistas de segurança precisam enriquecer indicadores rapidamente para decidir se devem bloquear, monitorar, investigar ou ignorar um artefato suspeito.',
      description:
        'Mini app que recebe IP, domínio, URL ou hash e retorna um painel de enriquecimento com informações de reputação, contexto técnico, classificação de risco e recomendação operacional.',
      stack: ['React', 'APIs OSINT', 'Threat Intelligence', 'CSV/PDF Export'],
      value:
        'Reduz o tempo de triagem de indicadores e ajuda o Blue Team a transformar IoCs soltos em decisão operacional.',
      nextStep:
        'Construir um MVP com entrada de indicador, painel de reputação, classificação de risco e exportação de relatório.',
      features: [
        'Receber IP, domínio, URL ou hash como entrada.',
        'Consultar reputação em fontes abertas.',
        'Classificar risco como baixo, médio, alto ou crítico.',
        'Exibir ASN, país, categoria, data de criação do domínio e histórico básico.',
        'Gerar recomendação operacional: bloquear, monitorar, investigar ou ignorar.',
        'Exportar relatório em PDF ou CSV.',
      ],
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
  methodology: ['Coleta de evidências', 'Análise técnica', 'Classificação de risco', 'Priorização', 'Recomendação', 'Documentação', 'Acompanhamento'],
  methodologyText:
    'Minha abordagem combina investigação técnica, visão de risco e comunicação objetiva. O objetivo não é apenas identificar alertas ou vulnerabilidades, mas transformar achados em decisões práticas de segurança.',
  differentials: [
    {
      title: 'Visão técnica',
      description:
        'Experiência prática com análise de alertas, logs, endpoints, identidade, e-mail, SIEM e ferramentas Microsoft Security.',
    },
    {
      title: 'Visão de risco',
      description:
        'Capacidade de priorizar vulnerabilidades, controles e recomendações com base em impacto, criticidade e esforço.',
    },
    {
      title: 'Visão de governança',
      description:
        'Experiência com revisão de acessos, menor privilégio, trilhas de auditoria e sustentação de controles.',
    },
    {
      title: 'Visão executiva',
      description:
        'Capacidade de transformar achados técnicos em relatórios claros para gestão e áreas responsáveis.',
    },
  ],
  indicators: [
    'Monitoramento de alertas em endpoint, e-mail, identidade e aplicações.',
    'Correlação de eventos em SIEM.',
    'Gestão de vulnerabilidades e patch management.',
    'Revisão de acessos e trilhas de auditoria.',
    'Sustentação de controles de backup, inventário e hardening.',
    'Ajuste de regras para redução de falsos positivos.',
  ],
};

export const navItems = [
  { label: 'Início', id: 'hero' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projetos', id: 'projetos' },
  { label: 'Experiência', id: 'experiencia' },
  { label: 'Certs', id: 'certificacoes' },
  { label: 'Contato', id: 'contato' },
];
