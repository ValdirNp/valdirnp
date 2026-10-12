import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-title">Skills técnicas</h2>
        <p className="mt-3 max-w-2xl text-ink-muted">
          Ferramentas e práticas que uso no dia a dia de desenvolvimento.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.title} className="card">
              <h3 className="mb-5 text-lg font-bold text-ink">{category.title}</h3>
              <ul className="flex flex-wrap gap-2.5">
                {category.items.map((item) => (
                  <li key={item}>
                    <span className="chip">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
