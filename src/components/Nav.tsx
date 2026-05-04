import { Link } from "@tanstack/react-router";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-sm bg-background/70 border-b border-border/60">
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="font-display text-xl font-bold text-primary">
          Kushal<span className="text-secondary">.</span>
        </Link>
        <ul className="hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-primary transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="text-sm font-semibold px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-secondary transition-colors"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
