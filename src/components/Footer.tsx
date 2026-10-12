import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-line px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-2xl font-bold text-ink">{profile.name}</p>
          <p className="mt-2 text-sm text-ink-muted">{profile.designation}</p>
        </div>

        <div className="flex flex-col items-start gap-4 sm:items-end">
          <ul className="flex flex-wrap gap-4 text-sm font-semibold text-ink-muted">
            {profile.socialLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="capitalize transition hover:text-accent"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-sm text-ink-muted">{profile.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
