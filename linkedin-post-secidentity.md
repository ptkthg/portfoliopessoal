# Post para LinkedIn — SecIdentity AI

> Pronto para cópia. O LinkedIn não renderiza Markdown: o texto abaixo já usa
> apenas quebras de linha e maiúsculas para hierarquia. Não cole a cerca de
> código nem esta instrução.

---

```
Um incidente P1 expõe a pior escolha da segurança da informação: liberar rápido
ou liberar certo.

Construí uma arquitetura que se recusa a escolher.

O PROBLEMA

14h32 de uma terça. A aplicação de pagamentos cai em produção. Um desenvolvedor
sênior precisa de root no banco para aplicar o patch.

Se o processo for rigoroso, ele espera 40 minutos e a receita não processa.
Se for rápido, alguém entrega a senha por telefone e o acesso fica ativo por
semanas depois.

O que acontece de verdade é a terceira opção, e é a pior: o controle rigoroso
existe no papel e é contornado informalmente na operação. Atalho informal não
deixa trilha. Seis meses depois, a auditoria descobre que o controle nunca
funcionou.

A SOLUÇÃO

SecIdentity AI: quatro agentes especializados com responsabilidades
deliberadamente separadas. A separação não é organizacional — é a aplicação do
próprio modelo de segregação de funções à arquitetura da ferramenta.

Fase 3 ServiceDesk — classifica intenção, verifica MFA, resolve N1 zero-touch.
Nunca toca em privilégio.

Fase 1 IAM — avalia baseline RBAC e segregação de funções.
Nunca manipula credencial cofrada.

Fase 2 PAM — break-glass JIT com custódia dupla e gravação de sessão.
Nunca aprova sozinha o que solicita.

Fase 4 Governance — evidência assinada, compliance contínuo, recertificação.
Nunca opera o controle que ela audita.

O RESULTADO

Mesmo incidente, executado ponta a ponta pelo motor:

Da abertura do chamado à concessão do acesso root: 9 minutos e 50 segundos.
Com custódia dupla completa, gravação integral e enquadramento em 16 controles
normativos.

Segurança que impede o restabelecimento do serviço é substituída na prática por
atalho informal. O objetivo nunca foi ser rigoroso — foi ser rigoroso e rápido
o suficiente para não ser contornado.

TRÊS DIFERENCIAIS TÉCNICOS

1. Contrato de RH fail-closed

Cinco regras de segurança em três fases dependiam da mesma pergunta — este
colaborador está saindo? — e nenhuma definia onde consultar. Cada fase teria
respondido diferente exatamente na janela de maior risco do ciclo de vida.

O contrato tem três camadas (event bus, cache com TTL de 5 minutos, API direta)
e uma regra sem exceção: se todas falharem, o retorno é UNKNOWN e trata-se como
desligamento em andamento. Tolerância fixada em zero.

A consequência foi aceita e documentada: RH indisponível por mais de 5 minutos
impede break-glass, inclusive em P1. A alta disponibilidade do sistema de RH
deixou de ser preocupação de RH e virou requisito de segurança.

2. SoD temporal mitigada — o GAP-001

Este achado não veio de revisar documento. Veio de simular um incidente real e
observar o comportamento.

Matrizes de segregação de funções expressam conflitos como pares de permissões
permanentes. Isso cria um ponto cego no modelo Just-In-Time: o desenvolvedor com
root em produção por duas horas não aciona nenhuma regra, porque as permissões
nunca são permanentes ao mesmo tempo.

A causa raiz era uma linha, com justificativa que parece razoável e está errada:
break_glass_accounts_exempt: true — "contas de emergência têm trilha própria".
Trilha própria audita depois. Não impede o acúmulo no momento da concessão.

E a correção óbvia cria o problema oposto: elevar o par a CRITICAL faria a
plataforma bloquear resposta a P1, porque risco crítico não admite exceção.
Trocaríamos um falso negativo silencioso por indisponibilidade garantida — o
tipo de correção que faz o time desligar o controle na primeira madrugada
difícil.

A saída foi dar ao motor um vocabulário que ele não tinha: um mapeamento que
traduz Safe do CyberArk em papel crítico estático, quatro estados de conflito em
vez de veredito binário, e o estado TEMPORARY_SOD_CONFLICT_MITIGATED, válido
apenas com cinco mitigações verificáveis — custódia dupla em 15 minutos,
gravação em nível máximo, revalidação do estado de RH via API, expiração
determinística e vínculo a incidente válido.

Sem escape hatch. A ausência é deliberada: as mitigações foram desenhadas para
serem cumpríveis durante um P1 real. Criar bypass equivaleria a remover o
controle, porque todo incidente é urgente.

Dois guards agora bloqueiam a carga da configuração se alguém reverter a decisão
de origem. A regressão ficou tecnicamente impedida, não apenas documentada.

3. Integridade e não-repúdio são requisitos distintos

Hash prova que nada mudou. Assinatura prova quem gerou. Carimbo de tempo prova
quando. Os três são obrigatórios — e confundi-los é erro frequente em desenho de
trilha de auditoria. Um pacote com hash e sem assinatura é íntegro e anônimo.

A árvore de Merkle resolve uma tensão real: para provar a integridade de um
artefato isolado ao auditor externo, basta entregar aquele artefato e o caminho
de irmãos até a raiz. Os payloads que contêm dado pessoal de terceiros
permanecem fora do escopo entregue.

Auditabilidade e minimização sob a LGPD deixam de ser trade-off.

O QUE O PROJETO É E O QUE NÃO É

Coloco isso no README, na página do portfólio e aqui, porque em segurança da
informação a diferença entre portfólio honesto e portfólio impressionante é a
única coisa que importa.

É uma arquitetura completa e internamente consistente, com motor funcional. Os
hashes SHA-256 e a árvore de Merkle são calculados de verdade — há um
verificador independente no repositório, testado contra adulteração deliberada.

Não é produto instalável. Nenhuma integração foi construída. A assinatura
RSA-4096 e o carimbo RFC 3161 são representações estruturais: exigem HSM e
autoridade de tempo. E a validação é de consistência, não de comportamento
contra dados de produção.

NÚMEROS

18 configurações YAML — 4 agentes — 17 regras de SoD — 16 controles normativos
98 padrões de comando proibido — 3 cenários de teste, 3 aprovados
13.009 linhas de configuração e documentação

SOX ITGC · ISO/IEC 27001:2022 · LGPD · PCI-DSS v4.0 · RFC 3161

Repositório, documento de arquitetura com 12 ADRs e relatório de evidências com
logs verbatim:
https://github.com/ptkthg/secidentity-ai

UMA PERGUNTA GENUÍNA

A decisão mais discutível do projeto está registrada numa linha de configuração:
jit_grant_is_accumulation: true.

Ou seja: tratei concessão Just-In-Time como acúmulo de privilégio para fins de
segregação de funções. O que a torna aceitável não é a natureza temporária em
si, mas o conjunto de mitigações verificáveis.

A leitura alternativa — "acesso temporário gravado não configura acúmulo" — é
prática comum de mercado e defensável. Mas ela transfere ao auditor a tarefa de
provar que a mitigação existiu, em vez de produzir essa prova automaticamente.

Para quem opera IAM e PAM em produção: qual das duas vocês sustentariam numa
auditoria SOX, e por quê?

#IAM #PAM #CyberArk #DevSecOps #SOX #ISO27001 #LGPD #IdentitySecurity
#SegurancaDaInformacao #Governanca #ZeroTrust #Compliance #Cybersecurity
```

---

## Notas de publicação

**Comprimento.** O texto tem cerca de 5.400 caracteres. O limite do LinkedIn é
3.000 para o corpo do post. Duas opções:

1. **Publicar como artigo** (LinkedIn Articles) — sem limite prático, e é o
   formato certo para um case study técnico desta densidade.
2. **Cortar para post** — mantendo abertura, "O RESULTADO", apenas o
   diferencial 2 (GAP-001), os números e a pergunta final. Fica em torno de
   2.700 caracteres.

Recomendo a opção 1 com um post curto de chamada apontando para o artigo.

**Primeiro comentário.** O algoritmo penaliza links no corpo. Se optar pelo
formato post, mova a URL do repositório para o primeiro comentário e substitua
por "link no primeiro comentário".

**Janela.** Terça a quinta, 8h–10h, costuma render melhor para conteúdo técnico
em português.

**Sobre a pergunta final.** Ela é real, não retórica — a decisão do
`jit_grant_is_accumulation` é genuinamente discutível, e quem opera CyberArk em
produção pode ter uma visão fundamentada diferente. Perguntas honestas geram
discussão técnica; perguntas retóricas geram silêncio educado.
