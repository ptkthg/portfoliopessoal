# evidences/

Capturas usadas pela galeria de evidências dos projetos (`project.evidence` em
`src/data/portfolioData.js`). Servidas na raiz do site, então o caminho no código é
`/evidences/<arquivo>`.

## NetShield SOC — Perimeter Defend Lab

Ordem cronológica de execução do laboratório:

| Arquivo | Etapa |
|---|---|
| `01_topology_architecture.png` | Diagrama da topologia perimetral (4 zonas no OPNsense) |
| `02_syslog_ingestion_wazuh.png` | Centralização Syslog UDP 514 chegando decodificada no Wazuh |
| `03_attack_execution_kali.png` | Bateria de ataques disparada do segmento RED |
| `04_tuning_metrics_result.png` | Métrica real do tuning: 40 → 0 falsos positivos, 15/15 preservados |

Formato recomendado: PNG, proporção 16:9 (a galeria usa `aspect-video` com
`object-cover` no card e `object-contain` no lightbox), largura de 1600px, abaixo de
500 KB cada.

Enquanto um arquivo não existir, o card renderiza o estado "captura pendente" com o
caminho esperado — o layout não quebra.
