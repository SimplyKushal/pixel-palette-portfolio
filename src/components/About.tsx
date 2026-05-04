import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" eyebrow="01 — About" title="A short intro.">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="grow-card md:col-span-2 bg-card border border-border rounded-3xl p-8">
          <p className="text-lg leading-relaxed text-foreground/90">
            I'm a B.Tech Computer Engineering student with a strong interest in web development and
            a steady habit of practising data structures & algorithms. I like building small,
            focused projects from scratch — usually with vanilla HTML, CSS and JavaScript — and I'm
            currently expanding into the MERN stack.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-foreground/90">
            My goal is to grow into a skilled computer engineer and contribute to impactful
            real-world solutions. I care about clean code, thoughtful UI, and shipping things that
            actually work end-to-end.
          </p>
        </div>
        <div className="grid gap-6">
          <div className="grow-card bg-card border border-border rounded-3xl p-6">
            <p className="text-sm text-muted-foreground">Currently</p>
            <p className="mt-1 font-semibold text-primary">Learning MERN</p>
          </div>
          <div className="grow-card bg-card border border-border rounded-3xl p-6">
            <p className="text-sm text-muted-foreground">Focus</p>
            <p className="mt-1 font-semibold text-primary">Web dev + DSA</p>
          </div>
          <div className="grow-card bg-card border border-border rounded-3xl p-6">
            <p className="text-sm text-muted-foreground">Based in</p>
            <p className="mt-1 font-semibold text-primary">India 🇮🇳</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
