import Image from "next/image";
import { profile } from "@/data/profile";

function PinIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 text-accent" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 text-accent" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.4-1-.9-1.3-.9-1.3-.8-.5.1-.5.1-.5.9.1 1.3.9 1.3.9.8 1.3 2 .9 2.5.7.1-.6.3-.9.5-1.1-2.2-.3-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7c-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5 0c2-.1 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7a3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.7-4.6 5 .3.3.6.8.6 1.6v2.4c0 .3.2.6.7.5A10 10 0 0 0 12 2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 text-accent" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.25 8.25h4.5V23h-4.5V8.25zM8.25 8.25h4.3v2h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V23h-4.5v-6.66c0-1.59-.03-3.63-2.21-3.63-2.22 0-2.56 1.73-2.56 3.52V23h-4.5V8.25z" />
    </svg>
  );
}

const socialIcons = {
  github: GithubIcon,
  linkedin: LinkedInIcon,
} as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center px-5 pb-16 pt-28 sm:px-8"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_auto]">
        <div>
          {profile.available ? (
            <p className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full bg-accent-soft px-4 py-1.5 text-sm font-semibold text-accent">
              <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
              Aberto a novas oportunidades
            </p>
          ) : null}

          <h1 className="animate-fade-up delay-1 text-[clamp(2.75rem,7vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-ink">
            {profile.name}
          </h1>

          <p className="animate-fade-up delay-2 mt-4 text-xl font-semibold text-accent sm:text-2xl">
            {profile.headline}
          </p>

          <p className="animate-fade-up delay-2 mt-4 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
            {profile.summary}
          </p>

          <ul className="animate-fade-up delay-3 mt-8 flex flex-col gap-3 text-sm text-ink-muted sm:text-base">
            <li className="inline-flex items-center gap-3">
              <PinIcon />
              {profile.location}
            </li>
            {profile.socialLinks.map((link) => {
              const Icon = socialIcons[link.name as keyof typeof socialIcons];
              return (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 transition-colors hover:text-accent"
                  >
                    {Icon ? <Icon /> : null}
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="animate-fade-up delay-3 mt-10 flex flex-wrap gap-3">
            <a
              href="#experience"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-accent px-6 text-sm font-bold text-white shadow-[0_4px_16px_var(--accent-glow)] transition hover:-translate-y-0.5 hover:brightness-110"
            >
              Explorar experiência
            </a>
            <a
              href="https://www.linkedin.com/in/valdirnp/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-line bg-card-bg px-6 text-sm font-bold text-ink transition hover:border-accent hover:text-accent"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="animate-fade-up delay-2 mx-auto">
          <div className="relative h-64 w-64 overflow-hidden rounded-full bg-gradient-to-br from-accent to-ink p-1.5 sm:h-80 sm:w-80">
            <div className="relative h-full w-full overflow-hidden rounded-full bg-bg">
              <Image
                src="/avatar.png"
                alt={`Foto de ${profile.name}`}
                fill
                priority
                className="object-cover"
                sizes="320px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
