export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-24">
      <div className="mb-10">
        <p className="text-xs font-semibold tracking-widest uppercase text-secondary">{eyebrow}</p>
        <h2 className="mt-2 font-display text-4xl sm:text-5xl font-bold text-primary">{title}</h2>
      </div>
      {children}
    </section>
  );
}
