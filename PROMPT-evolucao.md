# Portfólio — prompt de evolução

## Alvo

Projeto: `C:\Users\865653485\Desktop\Projetos\portfolio`
Stack verificado: **Next.js 14.2.5 (App Router) · React 18 · TypeScript · Tailwind 3.4 · framer-motion 11**
Alias: `@/*` → `./*` · Tema: escuro fixo (`color-scheme: dark`, `background #0a0a0a`, acento `mint #6effc8`)
Arquivos relevantes: `app/page.tsx`, `app/layout.tsx`, `app/globals.css`, `components/Hero.tsx`, `components/Navbar.tsx`, `components/Section.tsx`, `components/Footer.tsx`
**Não é projeto shadcn/ui.** Não existe `components.json`, não existe `lib/`, não existe `cn()`. Os tokens do Tailwind são próprios: `background`, `surface`, `border`, `mint{DEFAULT,dim,muted}`, `text{primary,secondary,muted}`.

## Preencher antes de começar

| | Campo | Valor |
|---|---|---|
| 1 | Handle do GitHub para o gráfico de contribuições | `<<PREENCHER>>` — provável: `luizhenriqmatos`. **Confirme**: o default do componente é `"shadcn"` e precisa ser trocado |
| 2 | Manter Java/Spring no subtítulo do hero? | `<<PREENCHER>>` — ver Bloco A, item A2 |
| 3 | Paleta do gráfico | `<<PREENCHER>>` — ver Bloco E, item E5 |

## Regras

1. **Uma coisa por vez.** Execute bloco por bloco, na ordem. Ao fim de cada bloco: diga quais arquivos mudaram e pare para eu conferir no navegador (`npm run dev`).
2. **Não quebre o que funciona.** Nada de refatoração não pedida, nada de trocar biblioteca, nada de "aproveitar e arrumar".
3. **Nada de suposição.** Se não leu o arquivo, não invente nome de classe, componente ou token. Se o projeto contradisser este documento, o projeto ganha — relate e pergunte.
4. **Nenhuma dependência nova sem me avisar antes**, com o motivo e a alternativa sem dependência.
5. **Interface em português.** Texto novo visível ao usuário em pt-BR, no tom que o site já usa.
6. **Sem `any`**, sem `@ts-ignore`, sem desligar regra de lint para fazer passar.
7. Ao terminar tudo: `npm run build` tem que passar. Se não passar, o trabalho não está pronto.

---

## FASE 0 — Confirmar seis coisas (leitura, sem editar)

Rápido e objetivo. Me responda em lista, com `arquivo:linha`:

1. **Onde está a linha vermelha** entre o hero e o corpo da página? Diga o arquivo, a linha e como ela é feita (`border`, `::after`, `<hr>`, `div` com altura 1px). *Observação: meu grep encontrou vários `border-t`/`border-b` em `app/page.tsx` (linhas 66, 77, 92, 127, 167) e a palavra "red" aparece em muitos lugares como parte de outras palavras — então identifique a linha certa de verdade, não por busca de texto.*
2. **`components/Section.tsx` é o que desenha as linhas de separação entre seções?** Se for, as linhas saem num lugar só. Se não for, liste todos os lugares.
3. **`components/Navbar.tsx` é fixo/sticky?** Qual `z-index` ele usa? (Decide o Bloco D.)
4. **Qual é a string exata, hoje, do subtítulo do hero** (o "Desenvolvedor backend em java & sping...") e **quantos caracteres ela tem**? E a string exata do "Ai Software engineer * Desenvolvedor"?
5. **Como está o botão "Vamos conversar"** (`app/page.tsx:176`): é `<Link>`, `<a>` ou `<button>` com handler?
6. **O hero tem algum ancestral com `transform`, `filter` ou `perspective`?** (Um ancestral transformado quebra `position: fixed` e inutiliza o Bloco D.)

**Não edite nada nesta fase.**

---

## BLOCO A — Textos do hero

**A1 · Título.** Trocar `Ai Software engineer * Desenvolvedor` por:

```
Luiz Matos — AI Software Engineer
```

Note duas correções em relação ao que pedi: **`AI` em maiúsculas** (não "Ai") e **travessão** `—` em vez de hífen. Se o layout quebrar com o travessão em telas estreitas, use `·`.

**A2 · Subtítulo.** Trocar o atual (`Desenvolvedor backend em java & sping...` — note que "sping" é erro de digitação de "Spring") por **uma** das opções abaixo. Meça a string atual primeiro (Fase 0, item 4) e escolha a de comprimento mais próximo, para não mudar a quebra de linha do hero:

| Opção | Texto | ~chars |
|---|---|---|
| **1 — lista de palavras-chave** (mais fiel ao que pedi) | `AI Engineer · RAG · LangChain · Claude · Java · C# · C/C++ · LLMOps` | 67 |
| **2 — frase curta** | `AI Engineer — sistemas RAG e LLMOps em Java, C# e C/C++` | 55 |
| **3 — híbrida** | `Engenharia de IA · RAG · LangChain · LLMOps · Java · C# · C/C++` | 63 |

Três observações antes de escolher:

- **Uma frase que "englobe" oito palavras-chave no mesmo tamanho não existe.** Ou é lista de palavras-chave (opção 1, fiel), ou é frase e perde itens (opção 2). A opção 3 é o meio.
- **A opção 1 não é uma frase, é uma linha de tags.** Se o hero já tem outra linha de tags, duas linhas de tags empilhadas ficam ruins — nesse caso prefira a 2.
- **Spring saiu de todas as opções.** Se o alvo de vaga ainda inclui backend Java, tirar "Spring" do hero é perder a palavra que recrutador busca. Decisão minha (campo 2 do preenchimento), não sua — mas me avise se eu não responder.

**A3 · Verificação.** Nenhuma das duas strings pode quebrar em mais linhas do que quebrava antes, em 390px e em 1440px.

---

## BLOCO B — Linhas de separação e degradê

Aqui o meu pedido original tinha uma contradição: eu pedi para **trocar por degradê** a linha entre hero e corpo, e também pedi para **remover** as linhas de separação de seção. Resolvendo:

- **B1 · Hero → corpo:** remover a linha (vermelha) e colocar no lugar um **degradê vertical**, do `#0a0a0a` do fundo para transparente, altura entre 80px e 140px, `pointer-events: none`. Sem borda, sem linha de 1px em lugar nenhum. O degradê é o único separador que fica no site.
- **B2 · Todas as outras seções:** remover a linha por completo. **Não** substituir por degradê, não substituir por nada. Espaçamento é o separador.
- **B3** Se `components/Section.tsx` desenhar essas linhas (Fase 0, item 2), remova de lá — um lugar só. Não saia apagando `border-t`/`border-b` de todo arquivo: `app/about/page.tsx` e `app/contact/page.tsx` também têm bordas, e algumas podem ser de **tabela, card ou input**, não separador de seção. **Mexa só em separador de seção.** Em dúvida, pergunte.
- **B4** O degradê do B1 vai conviver com o blur do Bloco D, que também escurece/desfoca o topo. **Depois do Bloco D, volte e confira se os dois juntos não criaram uma faixa escura dupla no topo.** Se criaram, reduza a altura do degradê — não mexa nos valores do blur.

---

## BLOCO C — Botão "Vamos conversar" → WhatsApp

O número que passei está **incompleto para link**: `71984260176` não tem código de país. O `wa.me` exige o número internacional sem `+`, sem espaço e sem pontuação. Com o `55` do Brasil:

```
https://wa.me/5571984260176
```

Implementação:

```tsx
<a
  href="https://wa.me/5571984260176"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Conversar pelo WhatsApp"
>
  Vamos conversar
</a>
```

- Mantenha exatamente as classes e o visual que o botão já tem. **Só o destino muda.**
- `target="_blank"` + `rel="noopener noreferrer"` são obrigatórios.
- Se hoje é `<button>` com handler, troque por `<a>` — link de verdade funciona com clique do meio, "abrir em nova aba" e leitor de tela.
- **Opcional, me pergunte:** mensagem pré-preenchida, ex. `?text=Oi%20Luiz%2C%20vi%20seu%20portf%C3%B3lio`. Eleva muito a taxa de resposta. Não faça sem eu confirmar.
- Se o mesmo botão/CTA aparecer em mais de um lugar (`Footer.tsx`, página de contato), **atualize todos** e me diga quantos eram.

---

## BLOCO D — Progressive Blur (CSS puro)

Blur progressivo fixo nas bordas superior e inferior da viewport: oito camadas `backdrop-filter` sobrepostas e mascaradas, com a força do blur dobrando de uma para a próxima. Decorativo, não interativo, sem JavaScript.

### Invariantes — não negociáveis

- **Oito camadas por borda**, na ordem `.blur-1` … `.blur-8`.
- **Os valores de blur e as paradas das máscaras ficam exatamente como estão abaixo.** Eles definem a curva do efeito.
- Manter as declarações **com e sem prefixo** (`-webkit-backdrop-filter`, `-webkit-mask-image`).
- Manter `position: fixed`, `overflow: hidden` nos contêineres e `pointer-events: none` em contêineres e camadas.
- Manter `aria-hidden="true"`.
- **Não colapsar em um único elemento com `backdrop-filter`.** Uma camada mascarada só esmaece a opacidade de um blur; não reproduz o aumento em degraus.
- **Nenhuma cor de fundo nas camadas.** Os `#000` dos gradientes definem opacidade de máscara, não pintam preto. O efeito é neutro de tema.

### Markup

No shell da aplicação — aqui, `app/layout.tsx`, **uma vez só**, depois do `{children}`. Não repita por seção nem por página.

```tsx
<div className="progressive-blur top-blur" aria-hidden="true">
  <div className="layer blur-1" /><div className="layer blur-2" />
  <div className="layer blur-3" /><div className="layer blur-4" />
  <div className="layer blur-5" /><div className="layer blur-6" />
  <div className="layer blur-7" /><div className="layer blur-8" />
</div>

<div className="progressive-blur bottom-blur" aria-hidden="true">
  <div className="layer blur-1" /><div className="layer blur-2" />
  <div className="layer blur-3" /><div className="layer blur-4" />
  <div className="layer blur-5" /><div className="layer blur-6" />
  <div className="layer blur-7" /><div className="layer blur-8" />
</div>
```

### CSS

Em `app/globals.css`, **fora** de `@layer base` (para o Tailwind não reordenar as camadas), ou num `styles/progressive-blur.css` importado pelo `globals.css`:

```css
.progressive-blur {
  position: fixed;
  z-index: 10;
  right: 0;
  left: 0;
  height: 200px;
  overflow: hidden;
  pointer-events: none;
}
.progressive-blur.top-blur    { --blur-direction: to bottom; top: -32px; }
.progressive-blur.bottom-blur { --blur-direction: to top;    bottom: -32px; }
.progressive-blur .layer { position: absolute; inset: 0; pointer-events: none; }

.progressive-blur .blur-1 {
  z-index: 1;
  -webkit-backdrop-filter: blur(0.078125px); backdrop-filter: blur(0.078125px);
  -webkit-mask-image: linear-gradient(var(--blur-direction), transparent 87.5%, #000 100%);
          mask-image: linear-gradient(var(--blur-direction), transparent 87.5%, #000 100%);
}
.progressive-blur .blur-2 {
  z-index: 2;
  -webkit-backdrop-filter: blur(0.15625px); backdrop-filter: blur(0.15625px);
  -webkit-mask-image: linear-gradient(var(--blur-direction), transparent 75%, #000 87.5% 100%);
          mask-image: linear-gradient(var(--blur-direction), transparent 75%, #000 87.5% 100%);
}
.progressive-blur .blur-3 {
  z-index: 3;
  -webkit-backdrop-filter: blur(0.3125px); backdrop-filter: blur(0.3125px);
  -webkit-mask-image: linear-gradient(var(--blur-direction), transparent 62.5%, #000 75% 87.5%, transparent 100%);
          mask-image: linear-gradient(var(--blur-direction), transparent 62.5%, #000 75% 87.5%, transparent 100%);
}
.progressive-blur .blur-4 {
  z-index: 4;
  -webkit-backdrop-filter: blur(0.625px); backdrop-filter: blur(0.625px);
  -webkit-mask-image: linear-gradient(var(--blur-direction), transparent 50%, #000 62.5% 75%, transparent 87.5%);
          mask-image: linear-gradient(var(--blur-direction), transparent 50%, #000 62.5% 75%, transparent 87.5%);
}
.progressive-blur .blur-5 {
  z-index: 5;
  -webkit-backdrop-filter: blur(1.25px); backdrop-filter: blur(1.25px);
  -webkit-mask-image: linear-gradient(var(--blur-direction), transparent 37.5%, #000 50% 62.5%, transparent 75%);
          mask-image: linear-gradient(var(--blur-direction), transparent 37.5%, #000 50% 62.5%, transparent 75%);
}
.progressive-blur .blur-6 {
  z-index: 6;
  -webkit-backdrop-filter: blur(2.5px); backdrop-filter: blur(2.5px);
  -webkit-mask-image: linear-gradient(var(--blur-direction), transparent 25%, #000 37.5% 50%, transparent 62.5%);
          mask-image: linear-gradient(var(--blur-direction), transparent 25%, #000 37.5% 50%, transparent 62.5%);
}
.progressive-blur .blur-7 {
  z-index: 7;
  -webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px);
  -webkit-mask-image: linear-gradient(var(--blur-direction), transparent 12.5%, #000 25% 37.5%, transparent 50%);
          mask-image: linear-gradient(var(--blur-direction), transparent 12.5%, #000 25% 37.5%, transparent 50%);
}
.progressive-blur .blur-8 {
  z-index: 8;
  -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px);
  -webkit-mask-image: linear-gradient(var(--blur-direction), transparent 0%, #000 12.5% 25%, transparent 37.5%);
          mask-image: linear-gradient(var(--blur-direction), transparent 0%, #000 12.5% 25%, transparent 37.5%);
}

@media (max-width: 680px) {
  .progressive-blur { height: 160px; }
}
```

### Decisões específicas deste projeto

- **D1 · Empilhamento com a Navbar.** Se a Navbar é fixa (Fase 0, item 3), o blur de topo com `z-index: 10` vai desfocar a própria Navbar. **A Navbar precisa ficar acima do blur** — dê a ela um `z-index` maior (ex. 20) em vez de baixar o do blur. Controle tem que ficar nítido e clicável. Se a Navbar não é fixa, não mexa em `z-index` nenhum.
- **D2 · Ancestral transformado.** Se a Fase 0 item 6 encontrar `transform`/`filter`/`perspective` em ancestral dos contêineres, o `fixed` deixa de seguir a viewport. Nesse caso **pare e me avise** — não tente contornar movendo o markup para dentro de componente de página.
- **D3 · Convivência com o Bloco B.** Depois de aplicar, volte ao item B4.
- **D4 · Se o ambiente não suportar** `backdrop-filter` ou `mask-image`: **pare e explique**. Não troque por gradiente translúcido chapado nem por `filter: blur()` no primeiro plano — é outro efeito, visivelmente pior.
- **D5 · Só uma borda?** Se o rodapé ficar estranho com blur, remova o contêiner `.bottom-blur` **inteiro**. Não remova camadas individuais.

### O que NÃO trazer

Nada de lorem ipsum, fotos de arquitetura, rótulo "Scroll down", pipeline de imagem do Astro ou tokens de cor de plataforma. O entregável é só os dois contêineres, as dezesseis camadas e esse CSS.

### Customização (só se eu pedir)

`height: 200px` (profundidade no desktop) · `160px` (mobile) · `top/bottom: -32px` (alinhamento das faixas) · `z-index: 10` (empilhamento) · `--blur-direction` (espelha as máscaras). **Mudar valores de blur ou paradas de máscara muda a curva — não mexa.**

---

## BLOCO E — Componente GitHub Graph

O componente que eu te passei **não compila neste projeto como está.** Quatro incompatibilidades reais, todas verificadas no `package.json`, no `tailwind.config.ts` e no `tsconfig.json`. Resolva as quatro **antes** de colar o componente, e me diga o que fez em cada uma.

**E1 · `import { ... } from "motion/react"` não resolve.**
O projeto tem **`framer-motion` ^11**, não o pacote `motion`. O `framer-motion@11` exporta `motion`, `AnimatePresence` e `useReducedMotion` com a mesma API. **Troque a linha de import:**

```diff
- import { AnimatePresence, motion, useReducedMotion } from "motion/react";
+ import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
```

Não instale o pacote `motion` ao lado do `framer-motion`. Duas bibliotecas de animação no mesmo bundle é desperdício e fonte de bug.

**E2 · `@/lib/utils` não existe.**
Não há pasta `lib/`, não há `cn()`, e `clsx`/`tailwind-merge` **não estão instalados**. Duas saídas — **prefira a primeira**:

- **Sem dependência nova** (recomendado, é um componente só): remova o import e use um helper local no próprio arquivo.
  ```ts
  const cn = (...classes: Array<string | false | null | undefined>) =>
    classes.filter(Boolean).join(" ");
  ```
- **Com dependência:** crie `lib/utils.ts` com `clsx` + `tailwind-merge`. Só vale se você for usar `cn()` em mais componentes depois. **Me pergunte antes.**

**E3 · Os tokens de cor do componente não existem neste Tailwind.**
O componente foi escrito para tema shadcn/ui. Este projeto tem tokens próprios. Sem o mapeamento, o estado de carregamento e o tooltip ficam **invisíveis** — classe que não existe não gera CSS e falha calada.

| No componente | Existe aqui? | Trocar por |
|---|---|---|
| `bg-muted` | **não** | `bg-surface` |
| `text-foreground` | **não** | `text-text-primary` |
| `text-muted-foreground` | **não** | `text-text-secondary` |
| `bg-foreground` | **não** | `bg-text-primary` |
| `ring-foreground/60` | **não** | `ring-mint/60` |
| `ring-foreground/15` | **não** | `ring-mint/20` |
| `text-background` | sim | manter |
| `ring-offset-background` | sim | manter |

Confira a tabela contra o `tailwind.config.ts` antes de aplicar. Se eu tiver errado algum, use o do arquivo e me diga.

**E4 · `account = "shadcn"` é o default.**
Trocar pelo meu handle (campo 1 do preenchimento). **Não deixe `"shadcn"` em produção** — o gráfico mostraria as contribuições de outra pessoa no meu portfólio.

**E5 · A paleta `github` briga com o site.**
A variante padrão usa os verdes do GitHub, e o nível 0 é `#ebedf0` — quase branco, sobre um fundo `#0a0a0a`. Vai parecer uma grade de quadrados claros colada no tema escuro. Três opções (campo 3 do preenchimento):

1. **`variant="graphite"`** — já existe no componente e funciona em tema escuro. **Mais barato e é o que eu recomendo se você não responder.**
2. **Variante `mint` nova**, usando o acento do site. Acrescente ao objeto `VARIANTS` sem remover as existentes:
   ```ts
   mint: ["#1e1e1e", "#1f6b53", "#2a9b78", "#3dd6a3", "#6effc8"],
   ```
   Nível 0 = cor da borda do tema, nível 4 = acento. **É a que melhor integra ao site.**
3. Manter `github` — só se eu pedir explicitamente.

### Integração

- Arquivo: `components/GithubGraph.tsx`. Mantenha `"use client"` na primeira linha: o componente usa estado, efeito e `ResizeObserver`.
- Uso sugerido, com os defaults que fazem sentido aqui:
  ```tsx
  <GithubGraph account="<<HANDLE>>" variant="graphite" months={6} autoFit showLegend={false} />
  ```
  `autoFit` evita barra de rolagem horizontal lateral no mobile — e o `body` deste projeto já tem `overflow-x: hidden`, que **esconderia** o estouro em vez de resolver.
- **Dependência externa não óbvia:** o componente busca em `https://github-contributions-api.jogruber.de/v4`, uma API pública de terceiro, do navegador, a cada carregamento. Sem chave, sem SLA, sujeita a limite de taxa e a sair do ar. Duas consequências a aceitar ou não:
  1. O estado de erro **vai** aparecer algum dia. Com o E3 aplicado ele fica legível; sem o E3, fica invisível.
  2. Se eu preferir não depender de terceiro, a alternativa é passar `data` com um JSON gerado no build. **Não implemente isso agora** — só me diga se quer que eu peça.
- **Textos em inglês num site em português:** o componente gera `"contribution"/"contributions"`, `"Enter a valid GitHub username."`, `"GitHub account not found."`, `"Could not load contributions."`, `"Loading contributions"`, `"Level N"`. **Traduza todos para pt-BR**, incluindo os `aria-label`, e troque o locale do `Intl.DateTimeFormat` de `"en"` para `"pt-BR"`.
- **Movimento:** o componente já respeita `prefers-reduced-motion` via `useReducedMotion`. Não remova esse caminho. O `ambientEffect="twinkle"` padrão anima ~180 células em loop infinito; se a página pesar no celular, passe `ambientEffect="none"` — **não** troque a biblioteca de animação.

---

## Aceitação

Antes de dizer "pronto", confirme cada item:

- [ ] `npm run build` passa, sem erro de tipo e sem warning novo.
- [ ] Nenhuma linha de separação de seção sobrou no site. O único separador é o degradê do hero.
- [ ] Hero com `Luiz Matos — AI Software Engineer` e o subtítulo escolhido, sem quebra de linha nova em 390px e 1440px.
- [ ] "Vamos conversar" abre `https://wa.me/5571984260176` em nova aba, **com o 55**. Testado em celular de verdade ou no modo dispositivo do navegador.
- [ ] Blur progressivo visível no topo e no rodapé, acompanha o scroll, **não desfoca a Navbar** e não bloqueia clique em nada.
- [ ] Oito camadas por borda, valores de blur e máscaras idênticos aos deste documento.
- [ ] Gráfico do GitHub renderiza com o meu handle, cores integradas ao tema escuro, textos em português, sem rolagem horizontal no mobile.
- [ ] Estado de carregamento e estado de erro do gráfico são **visíveis** (teste cortando a rede).
- [ ] Nenhuma dependência nova instalada sem eu aprovar.

Ao final, liste: arquivos alterados, arquivos criados, ajustes de `z-index`, e o que ficou pendente de decisão minha.
