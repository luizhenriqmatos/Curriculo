# 🖥️ Portfólio — Next.js 14

Portfólio de desenvolvedor front-end com tema dark minimalista, animações com Framer Motion e foco em Core Web Vitals.

## ✨ Stack

| Tecnologia | Versão |
|---|---|
| Next.js (App Router) | 14.x |
| TypeScript | 5.x |
| Tailwind CSS | 3.4 |
| Framer Motion | 11.x |

## 🚀 Início rápido

### Pré-requisitos

- [Node.js](https://nodejs.org/) ≥ 18.17 (LTS recomendado)
- npm ≥ 9

### Instalação e desenvolvimento

```bash
# 1. Clone o repositório
git clone https://github.com/SEUPERFIL/portfolio.git
cd portfolio

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
cp .env.example .env.local
# Edite .env.local conforme necessário

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

### Build de produção

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## 📁 Estrutura do projeto

```
portfolio/
├── app/
│   ├── api/
│   │   └── projects/
│   │       └── route.ts        # GET /api/projects — retorna JSON de projetos
│   ├── about/
│   │   └── page.tsx            # Página /about
│   ├── contact/
│   │   └── page.tsx            # Página /contact
│   ├── projects/
│   │   └── page.tsx            # Página /projects (consome API)
│   ├── globals.css             # Estilos globais + Tailwind
│   ├── layout.tsx              # Layout raiz (Navbar + Footer + meta SEO)
│   ├── not-found.tsx           # Página 404 animada
│   └── page.tsx                # Home (Hero + services + projetos em destaque)
├── components/
│   ├── Hero.tsx                # Seção hero com canvas WebGL + typing
│   ├── Navbar.tsx              # Header responsivo com menu mobile
│   ├── Footer.tsx              # Rodapé com links sociais
│   ├── Section.tsx             # Wrapper scroll-reveal (Framer Motion)
│   └── ProjectCard.tsx         # Card de projeto com animações de hover
├── .env.example                # Exemplo de variáveis de ambiente
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🌐 Deploy na Vercel

### Opção 1 — GitHub + Vercel (recomendado)

1. Suba o projeto para um repositório GitHub
2. Acesse [vercel.com/new](https://vercel.com/new) e importe o repositório
3. Adicione as variáveis de ambiente no painel da Vercel:
   - `NEXT_PUBLIC_SITE_URL` → URL de produção (ex: `https://meuportfolio.vercel.app`)
4. Clique em **Deploy**

### Opção 2 — CLI da Vercel

```bash
npm i -g vercel
vercel login
vercel --prod
```

## 🔌 API de Projetos

```
GET /api/projects
```

Resposta (200 OK):

```json
[
  {
    "id": "01",
    "title": "Quantum Dashboard",
    "slug": "quantum-dashboard",
    "tagline": "Analytics em tempo real ...",
    "year": "2024",
    "category": "Web App",
    "tags": ["Next.js", "TypeScript", "D3.js", "WebSocket", "Tailwind"],
    "imageUrl": "https://images.unsplash.com/...",
    "accentColor": "#6effc8",
    "liveUrl": "https://example.com",
    "featured": true
  }
]
```

Para adicionar ou remover projetos, edite o array `projects` em:
`app/api/projects/route.ts`

## ♿ Acessibilidade

- Landmarks semânticos: `<header>`, `<main>`, `<nav>`, `<footer>`, `<section>`, `<article>`
- Suporte a `prefers-reduced-motion` via `MotionConfig reducedMotion="user"`
- Foco visível com outline mint-green
- Atributos `aria-label`, `aria-current`, `aria-required`, `aria-live`
- Contraste mínimo AA em todas as combinações de cor

## ⚡ Performance

- Imagens otimizadas com `next/image` + lazy loading
- Fontes carregadas via `next/font` (zero layout shift)
- Canvas WebGL leve (requestAnimationFrame cancelado no unmount)
- Scroll reveal com `useInView` (once: true — sem re-render)
- Lighthouse alvo: ≥ 90 em todas as categorias

## 🎨 Personalização

| Arquivo | O que mudar |
|---|---|
| `app/api/projects/route.ts` | Conteúdo dos projetos |
| `app/page.tsx` | Serviços, habilidades, CTA |
| `app/about/page.tsx` | Bio, timeline, valores |
| `app/contact/page.tsx` | E-mail, redes sociais |
| `tailwind.config.ts` | Paleta de cores |
| `app/layout.tsx` | Nome, meta tags, OG |

## 📄 Licença

MIT — use, fork e adapte à vontade.
