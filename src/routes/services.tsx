import { createFileRoute, Link } from "@tanstack/react-router";
import { Brain, Workflow, LineChart, Check, ArrowRight } from "lucide-react";
import { Container } from "@/components/site/container";
import { FadeIn } from "@/components/site/section";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — DrukOptix" },
      { name: "description", content: "AI Diagnostics, Workflow Automation, and Predictive Analytics for optical practices." },
      { property: "og:title", content: "Services — DrukOptix" },
      { property: "og:description", content: "AI Diagnostics, Workflow Automation, and Predictive Analytics." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Brain,
    title: "AI Diagnostics",
    desc: "Deep-learning models that assist clinicians in detecting diabetic retinopathy, glaucoma, AMD and other ocular conditions from retinal imagery.",
    points: ["Retinal image analysis", "Triage suggestions", "Confidence scoring", "Audit trail for compliance"],
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "Cut admin overhead with smart scheduling, automated reminders, lens-order tracking, and integrated patient records.",
    points: ["Smart appointment routing", "Automated SMS / email reminders", "Lens & frame inventory sync", "EHR integration"],
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    desc: "Understand demand, retention, and clinical risk with dashboards purpose-built for optometry practices.",
    points: ["Demand forecasting", "At-risk patient detection", "Marketing attribution", "Practice benchmarking"],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="py-20 md:py-28" style={{ background: "var(--gradient-hero)" }}>
        <Container>
          <FadeIn className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Services</span>
            <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Solutions for modern optical practices</h1>
            <p className="mt-5 text-lg text-muted-foreground">
              A modular platform designed to slot into your existing workflow — start with one
              module, expand at your own pace.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="space-y-16">
          {services.map((s, i) => (
            <FadeIn key={s.title}>
              <div className={`grid gap-10 lg:grid-cols-2 lg:items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <s.icon className="h-7 w-7" />
                  </div>
                  <h2 className="mt-5 text-3xl font-bold">{s.title}</h2>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
                  <ul className="mt-6 space-y-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-border bg-secondary/40 p-10 shadow-[var(--shadow-card)]">
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent flex items-center justify-center">
                    <s.icon className="h-20 w-20 text-primary/40" />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </Container>
      </section>

      <section className="bg-primary py-16 text-primary-foreground">
        <Container className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold">Ready to bring AI to your practice?</h2>
          <p className="max-w-xl opacity-90">Let's talk about what DrukOptix can do for your patients.</p>
          <Link to="/contact" className="mt-2 inline-flex items-center gap-2 rounded-lg bg-background px-6 py-3 text-sm font-semibold text-primary hover:bg-secondary transition-smooth">
            Contact Sales <ArrowRight className="h-4 w-4" />
          </Link>
        </Container>
      </section>
    </>
  );
}
