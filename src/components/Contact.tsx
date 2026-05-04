import { useState } from "react";
import { Section } from "./Section";

// Replace this with your real Formspree endpoint after creating a free form at formspree.io
// Steps: sign up → "New Form" → set email to kushal0rangoonwala@gmail.com → copy the endpoint URL.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/your-form-id";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || name.length > 100) return setError("Please enter your name (under 100 chars).");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255)
      return setError("Please enter a valid email.");
    if (!message || message.length > 2000)
      return setError("Message is required (under 2000 chars).");

    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error("Network error");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
      setError("Something went wrong. Please email me directly.");
    }
  }

  return (
    <Section id="contact" eyebrow="05 — Contact" title="Let's talk.">
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6">
        <div className="grow-card bg-card border border-border rounded-3xl p-7 flex flex-col gap-4">
          <h3 className="font-display text-2xl font-bold text-primary">Reach me directly</h3>
          <a
            href="mailto:kushal0rangoonwala@gmail.com"
            className="text-foreground hover:text-secondary break-all"
          >
            ✉️ kushal0rangoonwala@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/kushal-rangoonwala-a5295a325/"
            target="_blank"
            rel="noreferrer"
            className="text-foreground hover:text-secondary"
          >
            💼 LinkedIn
          </a>
          <a
            href="https://github.com/SimplyKushal"
            target="_blank"
            rel="noreferrer"
            className="text-foreground hover:text-secondary"
          >
            🐙 GitHub · @SimplyKushal
          </a>
          <a
            href="https://github.com/MetaKushal"
            target="_blank"
            rel="noreferrer"
            className="text-foreground hover:text-secondary"
          >
            🐙 GitHub · @MetaKushal
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex w-fit text-sm font-semibold px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-secondary transition-colors"
          >
            Download résumé (PDF)
          </a>
        </div>

        <form
          onSubmit={onSubmit}
          className="grow-card bg-card border border-border rounded-3xl p-7 flex flex-col gap-4"
        >
          <h3 className="font-display text-2xl font-bold text-primary">Send me a message</h3>

          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium">Name</span>
            <input
              name="name"
              required
              maxLength={100}
              className="px-4 py-3 rounded-xl bg-background border border-input focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium">Email</span>
            <input
              name="email"
              type="email"
              required
              maxLength={255}
              className="px-4 py-3 rounded-xl bg-background border border-input focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium">Message</span>
            <textarea
              name="message"
              required
              rows={5}
              maxLength={2000}
              className="px-4 py-3 rounded-xl bg-background border border-input focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            />
          </label>

          {error && <p className="text-sm text-destructive">{error}</p>}
          {status === "ok" && (
            <p className="text-sm font-medium text-secondary">
              Thanks! Your message is on its way. ✨
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-secondary transition-colors disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Send message"}
          </button>

          <p className="text-xs text-muted-foreground">
            Form delivery is powered by Formspree — replace the endpoint in{" "}
            <code className="px-1 py-0.5 rounded bg-muted">src/components/Contact.tsx</code> with
            your own (free) form ID to start receiving emails.
          </p>
        </form>
      </div>
    </Section>
  );
}
