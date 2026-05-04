export function Footer() {
  return (
    <footer className="border-t border-border/60 mt-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 text-sm text-muted-foreground flex flex-wrap items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Kushal Rangoonwala. Built with React.</p>
        <p>Designed & coded with ☕ + lots of refresh-clicks.</p>
      </div>
    </footer>
  );
}
