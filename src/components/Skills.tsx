import { Section } from "./Section";
import { skills } from "@/data/portfolio";

export function Skills() {
  return (
    <Section id="skills" eyebrow="02 — Skills" title="Tools I work with.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {Object.entries(skills).map(([group, items]) => (
          <div
            key={group}
            className="grow-card bg-card border border-border rounded-3xl p-6"
          >
            <h3 className="font-display text-xl font-semibold text-primary">{group}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {items.map((item) => (
                <li
                  key={item}
                  className="text-sm font-medium px-3 py-1.5 rounded-full bg-accent/60 text-accent-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
