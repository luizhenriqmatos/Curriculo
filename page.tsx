import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/app/api/projects/route";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Galeria completa de projetos desenvolvidos — interfaces, design systems, aplicações web e experimentos criativos.",
};

async function getProjects(): Promise<Project[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/api/projects`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

const categories = ["Todos", "Web App", "Design System", "E-commerce", "AI / Interface", "Data Visualization", "Creative Dev"];

export default async function ProjectsPage() {
  const projects = await getProjects();
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <div className="pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-16">
          <p className="section-label">Trabalho</p>
          <h1 className="text-display-lg font-display font-light text-text-primary mb-4">
            Projetos selecionados
          </h1>
          <p className="text-text-secondary max-w-xl text-lg leading-relaxed">
            Uma seleção de projetos que demonstram minha abordagem à interseção entre{" "}
            <em className="not-italic text-text-primary">engenharia e design</em>.
          </p>
        </header>

        {/* Category filter — visual only (no JS filter for SSR consistency) */}
        <nav aria-label="Filtro por categoria" className="mb-12">
          <ul className="flex flex-wrap gap-2 list-none" role="list">
            {categories.map((cat) => (
              <li key={cat}>
                <span
                  className={`font-mono text-xs px-3 py-1.5 rounded-full border cursor-default transition-all ${
                    cat === "Todos"
                      ? "border-mint text-mint"
                      : "border-border text-text-muted hover:border-mint/30 hover:text-text-secondary"
                  }`}
                >
                  {cat}
                </span>
              </li>
            ))}
          </ul>
        </nav>

        {/* Featured */}
        {featured.length > 0 && (
          <section aria-label="Projetos em destaque" className="mb-16">
            <h2 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-8 flex items-center gap-3">
              <span aria-hidden="true" className="inline-block w-8 h-px bg-border" />
              Em destaque
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featured.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </section>
        )}

        {/* Others */}
        {others.length > 0 && (
          <section aria-label="Outros projetos">
            <h2 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-8 flex items-center gap-3">
              <span aria-hidden="true" className="inline-block w-8 h-px bg-border" />
              Outros projetos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {others.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={featured.length + i} />
              ))}
            </div>
          </section>
        )}

        {projects.length === 0 && (
          <p className="text-text-muted font-mono text-sm text-center py-20">
            Nenhum projeto encontrado.
          </p>
        )}
      </div>
    </div>
  );
}
