import { NextResponse } from "next/server";

export interface Project {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  year: string;
  category: string;
  tags: string[];
  imageUrl: string;
  accentColor: string;
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: "01",
    title: "Quantum Dashboard",
    slug: "quantum-dashboard",
    tagline: "Analytics em tempo real com data viz imersivo",
    description:
      "Painel de monitoramento enterprise com gráficos interativos, ingestão de dados ao vivo via WebSocket e design system compartilhado entre times. Migração de CRA para Next.js reduziu TTI em 60%.",
    year: "2024",
    category: "Web App",
    tags: ["Next.js", "TypeScript", "D3.js", "WebSocket", "Tailwind"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    accentColor: "#6effc8",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: "02",
    title: "Morpho Design System",
    slug: "morpho-design-system",
    tagline: "Sistema de componentes acessível e escalável",
    description:
      "Design system com mais de 60 componentes documentados no Storybook, tokens semânticos e testes de acessibilidade automatizados. Adotado por 4 produtos internos.",
    year: "2024",
    category: "Design System",
    tags: ["React", "TypeScript", "Storybook", "Radix UI", "CSS Variables"],
    imageUrl: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80",
    accentColor: "#a78bfa",
    featured: true,
  },
  {
    id: "03",
    title: "Noctua E-commerce",
    slug: "noctua-ecommerce",
    tagline: "Loja virtual com foco em conversão e performance",
    description:
      "Plataforma de e-commerce headless com Next.js e Shopify, checkout otimizado, Lighthouse 98/100 e integração com pagamentos via Stripe.",
    year: "2023",
    category: "E-commerce",
    tags: ["Next.js", "Shopify", "Stripe", "Framer Motion", "Vercel"],
    imageUrl: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=800&q=80",
    accentColor: "#f59e0b",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: "04",
    title: "Spectra AI",
    slug: "spectra-ai",
    tagline: "Interface conversacional para modelo de linguagem proprietário",
    description:
      "Chat interface com streaming de tokens, histórico persistente, multimodalidade (imagem + texto) e painel de configuração de parâmetros do modelo.",
    year: "2023",
    category: "AI / Interface",
    tags: ["Next.js", "OpenAI API", "Vercel AI SDK", "Zustand", "TypeScript"],
    imageUrl: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    accentColor: "#38bdf8",
    featured: false,
  },
  {
    id: "05",
    title: "Atlas Maps",
    slug: "atlas-maps",
    tagline: "Visualização geoespacial interativa de dados urbanos",
    description:
      "Plataforma de GIS urbano com camadas temáticas, filtros temporais e exportação de relatórios. Renderiza +500k pontos com WebGL sem degradação.",
    year: "2023",
    category: "Data Visualization",
    tags: ["Mapbox GL", "React", "WebGL", "Turf.js", "PostGIS"],
    imageUrl: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80",
    accentColor: "#34d399",
    featured: false,
  },
  {
    id: "06",
    title: "Resonance Music",
    slug: "resonance-music",
    tagline: "Player de áudio imersivo com visualizações generativas",
    description:
      "Web app de streaming com player customizado, visualizações em canvas geradas pela Web Audio API e modo de leitura de letras sincronizado.",
    year: "2022",
    category: "Creative Dev",
    tags: ["Web Audio API", "Canvas", "React", "Wavesurfer.js"],
    imageUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
    accentColor: "#fb7185",
    featured: false,
  },
];

export async function GET() {
  return NextResponse.json(projects, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
