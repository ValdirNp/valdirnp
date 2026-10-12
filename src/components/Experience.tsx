import { experiences, type Experience as ExperienceItem, type Role } from "@/data/experience";

function Period({ role }: { role: Role }) {
  return (
    <p className="mt-2 text-sm text-ink-muted">
      {role.start}
      {role.end ? ` – ${role.end}` : " – Atual"}
    </p>
  );
}

function Responsibilities({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-3 text-ink-muted">
      {items.map((responsibility) => (
        <li key={responsibility} className="flex gap-3">
          <span className="font-bold text-accent" aria-hidden>
            →
          </span>
          <span>{responsibility}</span>
        </li>
      ))}
    </ul>
  );
}

function CompanyLink({
  item,
  className = "mt-2 inline-block",
}: {
  item: ExperienceItem;
  className?: string;
}) {
  return (
    <a
      href={item.companyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} font-bold text-accent transition hover:underline`}
    >
      {item.company}
    </a>
  );
}

function SingleRole({ item, role }: { item: ExperienceItem; role: Role }) {
  return (
    <>
      <h3 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
        {role.title}
      </h3>
      <CompanyLink item={item} />
      <Period role={role} />
      <p className="mt-1 text-sm text-ink-muted">{item.location}</p>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">
        {item.overview}
      </p>
      <Responsibilities items={role.responsibilities} />
    </>
  );
}

function MultipleRoles({ item }: { item: ExperienceItem }) {
  const first = item.roles[item.roles.length - 1];
  const last = item.roles[0];

  return (
    <>
      <h3 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
        <CompanyLink item={item} className="inline-block" />
      </h3>
      <Period role={{ ...last, start: first.start }} />
      <p className="mt-1 text-sm text-ink-muted">{item.location}</p>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">
        {item.overview}
      </p>

      <ol className="mt-8 space-y-8 border-l-2 border-line pl-6">
        {item.roles.map((role) => (
          <li key={role.title} className="relative">
            <span
              className="absolute -left-[33px] top-2 h-4 w-4 rounded-full border-2 border-accent bg-card-bg"
              aria-hidden
            />
            <h4 className="text-lg font-bold tracking-tight text-ink sm:text-xl">
              {role.title}
            </h4>
            <Period role={role} />
            <Responsibilities items={role.responsibilities} />
          </li>
        ))}
      </ol>
    </>
  );
}

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
            <article key={item.company} className="card">
              {item.roles.length > 1 ? (
                <MultipleRoles item={item} />
              ) : (
                <SingleRole item={item} role={item.roles[0]} />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
