import { education } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-title">Educação</h2>
        <p className="mt-3 max-w-2xl text-ink-muted">
          Formação acadêmica e trajetória de estudos.
        </p>

        <div className="mt-10 space-y-6">
          {education.map((item) => (
            <article
              key={`${item.institution}-${item.degree}`}
              className="card"
            >
              <h3 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
                {item.institution}
              </h3>
              <p className="mt-2 font-medium text-ink">{item.degree}</p>
              <p className="mt-3 text-sm text-ink-muted">
                {item.period} · {item.location}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
