import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-title">Experiência profissional</h2>
        <p className="mt-3 max-w-2xl text-ink-muted">
          Trajetória em backends, microsserviços e produtos de fintech com
          NestJS, TypeScript e PHP.
        </p>

        <div className="mt-10 space-y-6">
          {experiences.map((item) => (
            <article key={`${item.company}-${item.role}`} className="card">
              <h3 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
                {item.role}
              </h3>
              <a
                href={item.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block font-bold text-accent transition hover:underline"
              >
                {item.company}
              </a>
              <p className="mt-2 text-sm text-ink-muted">
                {item.start}
                {item.end ? ` – ${item.end}` : " – Atual"}
              </p>
              <p className="mt-1 text-sm text-ink-muted">{item.location}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {item.overview}
              </p>

              <ul className="mt-6 space-y-3 text-ink-muted">
                {item.responsibilities.map((responsibility) => (
                  <li key={responsibility} className="flex gap-3">
                    <span className="font-bold text-accent" aria-hidden>
                      →
                    </span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
