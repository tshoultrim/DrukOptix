import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/site/container";
import { FadeIn } from "@/components/site/section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — DrukOptix" },
      { name: "description", content: "DrukOptix combines clinical optometry expertise with applied AI to modernise vision care." },
      { property: "og:title", content: "About — DrukOptix" },
      { property: "og:description", content: "Combining clinical optometry expertise with applied AI." },
    ],
  }),
  component: AboutPage,
});

const team = [
  { name: "Dr. A. Gurung", role: "Co-founder, Optometry Lead" },
  { name: "S. Wangchuk", role: "Co-founder, AI Engineering" },
  { name: "P. Dorji", role: "Head of Clinical Partnerships" },
];

function AboutPage() {
  return (
    <>
      <section className="py-20 md:py-28" style={{ background: "var(--gradient-hero)" }}>
        <Container>
          <FadeIn className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">About DrukOptix</span>
            <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Vision care, reimagined with AI</h1>
            <p className="mt-5 text-lg text-muted-foreground">
              We're a focused team of optometrists, machine-learning engineers, and product
              designers building the next generation of tools for the optical industry.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-2">
          <FadeIn>
            <h2 className="text-2xl font-bold sm:text-3xl">Our mission</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Vision impairment affects more than 2.2 billion people worldwide, and a significant
              share of cases are preventable with early detection. DrukOptix exists to put
              clinical-grade AI into the hands of every practitioner — from urban hospitals to
              rural clinics — so that no patient slips through the cracks.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-2xl font-bold sm:text-3xl">Project abstract</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              DrukOptix integrates deep-learning models for retinal image analysis with workflow
              automation tools that reduce administrative overhead. The platform also produces
              predictive analytics for clinic operations, enabling proactive patient outreach
              and better resource planning.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-secondary/40 py-16 md:py-24">
        <Container>
          <FadeIn className="text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">The team</h2>
            <p className="mt-3 text-muted-foreground">A small, focused group with deep domain expertise.</p>
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <FadeIn key={m.name} delay={i * 0.08}>
                <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-card)]">
                  <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-primary to-primary/60" aria-hidden />
                  <h3 className="mt-4 font-semibold">{m.name}</h3>
                  <p className="text-sm text-muted-foreground">{m.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
