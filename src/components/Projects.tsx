import { Section } from "./Section";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <Section id="projects" eyebrow="03 — Projects" title="Things I've built.">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className="grow-card bg-card border border-border rounded-3xl p-7 flex flex-col"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display text-2xl font-bold text-primary">
                <span className="text-secondary mr-2">0{i + 1}.</span>
                {p.title}
              </h3>
            </div>

            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="font-semibold text-secondary uppercase tracking-wider text-xs">Problem</dt>
                <dd className="mt-1 text-foreground/85 leading-relaxed">{p.problem}</dd>
              </div>
              <div>
                <dt className="font-semibold text-secondary uppercase tracking-wider text-xs">Solution</dt>
                <dd className="mt-1 text-foreground/85 leading-relaxed">{p.solution}</dd>
              </div>
              <div>
                <dt className="font-semibold text-secondary uppercase tracking-wider text-xs">Outcome</dt>
                <dd className="mt-1 text-foreground/85 leading-relaxed">{p.outcome}</dd>
              </div>
            </dl>

            <ul className="mt-5 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <li
                  key={t}
                  className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent/60 text-accent-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-5 border-t border-border flex flex-wrap gap-3">
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-secondary transition-colors"
                >
                  Live demo ↗
                </a>
              )}
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold px-4 py-2 rounded-full bg-card border border-border hover:border-secondary transition-colors"
                >
                  GitHub ↗
                </a>
              )}
              {!p.live && !p.github && (
                <span className="text-sm text-muted-foreground italic">Code coming soon</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
