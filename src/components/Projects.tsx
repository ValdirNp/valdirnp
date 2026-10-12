import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-title">Projetos</h2>
        <p className="mt-3 max-w-2xl text-ink-muted">
          Alguns trabalhos e experimentos pessoais.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.name} className="card flex flex-col">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-ink">
                    {project.name}
                  </h3>
                  {project.role ? (
                    <p className="mt-1 text-sm text-ink-muted">{project.role}</p>
                  ) : null}
                </div>
                <p className="shrink-0 text-sm text-ink-muted">{project.timeline}</p>
              </div>

              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li key={tag}>
                    <span className="chip">{tag}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 flex-1 leading-relaxed text-ink-muted">
                {project.summary}
              </p>

              <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent transition hover:underline"
                  >
                    Ver site
                  </a>
                ) : null}
                {project.repo ? (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent transition hover:underline"
                  >
                    Repositório
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
