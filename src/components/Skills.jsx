import { useScrollReveal } from '../hooks/useScrollReveal';
import { portfolioData } from '../data/portfolioData';

const SKILL_GROUPS = [
  {
    label: 'SIEM / SOC',
    skills: [
      { name: 'Microsoft Defender XDR', level: 85 },
      { name: 'SIEM', level: 80 },
      { name: 'KQL', level: 80 },
      { name: 'IOC / IOA Analysis', level: 80 },
      { name: 'Windows Event Logs', level: 75 },
      { name: 'Alert Triage', level: 85 },
    ],
  },
  {
    label: 'Threat Intel',
    skills: [
      { name: 'MITRE ATT&CK', level: 80 },
      { name: 'Threat Hunting', level: 75 },
      { name: 'NIST CSF', level: 70 },
      { name: 'CIS Controls', level: 65 },
      { name: 'OWASP Top 10', level: 65 },
    ],
  },
  {
    label: 'Cloud / IAM',
    skills: [
      { name: 'Microsoft Entra ID', level: 80 },
      { name: 'Active Directory', level: 80 },
      { name: 'Access Governance', level: 80 },
      { name: 'Microsoft Intune', level: 70 },
      { name: 'Azure Security', level: 60 },
    ],
  },
  {
    label: 'Dev / Automação',
    skills: [
      { name: 'PowerShell', level: 70 },
      { name: 'KQL Queries', level: 80 },
      { name: 'React', level: 65 },
      { name: 'Patch Manager Plus', level: 65 },
      { name: 'Lansweeper', level: 65 },
    ],
  },
];

export default function Skills() {
  const ref = useScrollReveal();
  const offensiveSkills = portfolioData.offensiveSkills ?? {};
  const offensiveGroups = Object.entries(offensiveSkills);

  return (
    <section id="skills" ref={ref} className="fade-in-section py-20 px-6 max-w-5xl mx-auto">
      <p className="font-mono text-neon text-xs mb-2 tracking-widest uppercase text-glow">// skills</p>
      <h2 className="font-mono text-3xl font-bold text-white mb-3">Stack & Ferramentas</h2>
      <p className="text-textprimary/50 text-sm mb-10 max-w-2xl">
        Defesa com domínio comprovado (barras) e ofensiva em desenvolvimento (tags).
      </p>

      <p className="font-mono text-neon/60 text-xs mb-4 tracking-widest uppercase">// defensivo</p>
      <div className="grid md:grid-cols-2 gap-5">
        {SKILL_GROUPS.map((group) => (
          <div key={group.label} className="border border-neon/15 bg-surface p-6 hover:border-neon/35 transition-colors duration-300">
            <h3 className="font-mono text-neon text-xs uppercase tracking-widest mb-5 pb-2 border-b border-neon/15">
              {group.label}
            </h3>
            <div className="space-y-4">
              {group.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="font-mono text-textprimary/90 text-sm">{skill.name}</span>
                    <span className="font-mono text-neon/50 text-xs">{skill.level}%</span>
                  </div>
                  <div className="h-px bg-textprimary/10 relative overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-neon/60 transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {offensiveGroups.length > 0 && (
        <>
          <p className="font-mono text-neon/60 text-xs mt-10 mb-4 tracking-widest uppercase">// ofensivo (em desenvolvimento)</p>
          <div className="grid md:grid-cols-2 gap-5">
            {offensiveGroups.map(([label, items]) => (
              <div key={label} className="border border-neon/15 bg-surface p-6 hover:border-neon/35 transition-colors duration-300">
                <h3 className="font-mono text-neon text-xs uppercase tracking-widest mb-5 pb-2 border-b border-neon/15">
                  {label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-xs border border-neon/20 text-textprimary/70 px-2.5 py-1 hover:border-neon/50 hover:text-neon/80 transition-colors duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
