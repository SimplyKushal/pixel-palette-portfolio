import { Section } from "./Section";

export function Education() {
  return (
    <Section id="education" eyebrow="04 — Education" title="Where I'm studying.">
      <div className="grow-card bg-card border border-border rounded-3xl p-8 max-w-3xl">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <h3 className="font-display text-2xl font-bold text-primary">B.Tech, Computer Engineering</h3>
            <p className="mt-1 text-muted-foreground">Undergraduate · in progress</p>
          </div>
          <span className="text-sm font-semibold px-4 py-2 rounded-full bg-accent/60 text-accent-foreground">
            2023 — Present
          </span>
        </div>
        <p className="mt-5 text-foreground/85 leading-relaxed">
          Currently pursuing my B.Tech in Computer Engineering, focusing on web development, data
          structures & algorithms, and core CS fundamentals alongside hands-on project work.
        </p>
      </div>
    </Section>
  );
}
