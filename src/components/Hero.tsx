export function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="max-w-3xl">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-secondary bg-accent/60 px-3 py-1 rounded-full">
            Computer Engineering · B.Tech
          </span>
          <h1 className="mt-5 font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] text-primary">
            Hi, I'm <span className="ink-underline">Kushal</span>.
            <br />
            I build clean, useful web things.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            A Computer Engineering student exploring web development, the MERN stack, and data
            structures & algorithms — turning small ideas into polished, working products.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-secondary transition-colors"
            >
              See projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-card border border-border text-foreground font-semibold hover:border-secondary transition-colors"
            >
              Get in touch
            </a>
          </div>
      </div>
    </section>
  );
}
