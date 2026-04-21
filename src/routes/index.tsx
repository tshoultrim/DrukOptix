import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Brain, Workflow, LineChart, Quote, Plus, Minus, Mail } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/site/container";
import { FadeIn } from "@/components/site/section";
import { HeroCarousel } from "@/components/site/hero-carousel";
import { toast } from "sonner";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import aboutImg from "@/assets/about-team.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DrukOptix AI — Innovation & Excellence" },
      { name: "description", content: "DrukOptix AI is a Bhutan-based powerhouse pushing the boundaries of artificial intelligence — research, model training, and seamless deployment." },
      { property: "og:title", content: "DrukOptix AI — Innovation & Excellence" },
      { property: "og:description", content: "Building tomorrow's intelligent systems for vision care and beyond." },
      { property: "og:image", content: hero1 },
      { name: "twitter:image", content: hero1 },
    ],
  }),
  component: HomePage,
});

const slides = [
  { image: hero1, title: "Welcome to DrukOptix AI", subtitle: "Innovation & Excellence" },
  { image: hero2, title: "Building Tomorrow", subtitle: "Where Bhutanese craftsmanship meets cutting-edge AI" },
  { image: hero3, title: "Intelligence, Reimagined", subtitle: "From research to deployment — at scale" },
];

const services = [
  { icon: Brain, title: "AI Research", desc: "Frontier research in computer vision, multimodal models, and clinical-grade diagnostics." },
  { icon: Workflow, title: "Model Training", desc: "Large-scale training pipelines tuned on domain-specific datasets, fully reproducible." },
  { icon: LineChart, title: "Deployment", desc: "Seamless edge and cloud deployment with monitoring, observability, and continuous learning." },
];

const stats = [
  { v: "98%", l: "Diagnostic accuracy" },
  { v: "3×", l: "Faster workflows" },
  { v: "50+", l: "Partner clinics" },
  { v: "24/7", l: "Cloud monitoring" },
];

const testimonials = [
  { quote: "DrukOptix transformed how we screen patients. The AI flags issues we'd otherwise miss.", name: "Dr. Karma Tenzin", role: "Senior Optometrist, Thimphu Eye Centre" },
  { quote: "The deployment was effortless. Their team genuinely cares about clinical outcomes.", name: "Pema Lhamo", role: "Operations Lead, Vision Plus" },
  { quote: "An ambitious team building world-class AI from Bhutan. Truly inspiring work.", name: "Dr. Sonam Rinchen", role: "Director, Mountain Health Initiative" },
];

const faqs = [
  { q: "What does DrukOptix AI do?", a: "We build AI systems for the optical and vision care industry — from retinal diagnostics to clinic workflow automation and predictive analytics." },
  { q: "Where are you based?", a: "We're proudly based in Bhutan, combining Himalayan craftsmanship with world-class AI engineering." },
  { q: "Can I integrate DrukOptix with my existing EMR?", a: "Yes. We provide REST APIs and partner integrations for the major EMR systems used in optical practices." },
  { q: "How is patient data protected?", a: "All processing follows HIPAA-aligned and ISO-27001 controls. Data stays encrypted at rest and in transit." },
];

function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [email, setEmail] = useState("");

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Thanks for subscribing!");
    setEmail("");
  };

  return (
    <>
      <HeroCarousel slides={slides} />

      {/* ABOUT */}
      <section className="py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">About DrukOptix AI</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">A powerhouse of innovation</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We are dedicated to pushing the boundaries of artificial intelligence. From cutting-edge
              research and large-scale model training to seamless deployment, we build the future of
              intelligent systems — with vision care as our home turf.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our team blends clinical expertise, ML engineering, and product craft to ship tools that
              actually move the needle for practitioners and patients alike.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/about" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-smooth hover:bg-primary-hover">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/teams" className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-smooth hover:bg-secondary">
                View Teams
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl blur-3xl" style={{ background: "var(--gradient-primary)", opacity: 0.3 }} aria-hidden />
              <img
                src={aboutImg}
                alt="DrukOptix AI research lab"
                width={1536}
                height={1024}
                loading="lazy"
                className="relative w-full rounded-2xl shadow-[var(--shadow-elevated)]"
              />
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* SERVICES */}
      <section className="border-t border-border/40 bg-card/40 py-20 md:py-28">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">What we do</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Three pillars of intelligent systems</h2>
            <p className="mt-4 text-muted-foreground">From idea to production-grade AI.</p>
          </FadeIn>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.1}>
                <div className="group h-full rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-smooth hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl text-primary-foreground transition-smooth" style={{ background: "var(--gradient-primary)" }}>
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* STATS */}
      <section className="py-20 md:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <FadeIn key={s.l} delay={i * 0.08}>
                <div className="rounded-2xl border border-border bg-card p-7 text-center shadow-[var(--shadow-card)]">
                  <div className="bg-clip-text text-4xl font-bold text-transparent" style={{ backgroundImage: "var(--gradient-primary)" }}>{s.v}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-t border-border/40 bg-card/40 py-20 md:py-28">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Voices of our partners</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Trusted by clinics & researchers</h2>
          </FadeIn>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
                  <Quote className="h-7 w-7 text-primary/60" />
                  <p className="mt-4 text-sm leading-relaxed text-foreground/90">"{t.quote}"</p>
                  <div className="mt-6 border-t border-border/60 pt-4">
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <Container className="max-w-3xl">
          <FadeIn className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">FAQ</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Frequently asked questions</h2>
          </FadeIn>
          <div className="mt-12 space-y-3">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <FadeIn key={f.q} delay={i * 0.05}>
                  <div className="overflow-hidden rounded-xl border border-border bg-card">
                    <button
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-smooth hover:bg-secondary/50"
                    >
                      <span className="font-medium">{f.q}</span>
                      {open ? <Minus className="h-4 w-4 text-primary" /> : <Plus className="h-4 w-4 text-primary" />}
                    </button>
                    {open && (
                      <div className="border-t border-border/60 px-5 py-4 text-sm text-muted-foreground">{f.a}</div>
                    )}
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="pb-24">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-border p-10 text-center shadow-[var(--shadow-elevated)] sm:p-16" style={{ background: "var(--gradient-primary)" }}>
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 80% 70%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} aria-hidden />
            <div className="relative">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to join us?</h2>
              <p className="mx-auto mt-3 max-w-xl text-white/85">
                Get product updates, research notes, and clinical case studies delivered monthly.
              </p>
              <form onSubmit={subscribe} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@clinic.com"
                    className="w-full rounded-lg border-0 bg-white py-3 pl-10 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>
                <button type="submit" className="rounded-lg bg-foreground px-6 py-3 text-sm font-semibold text-background transition-smooth hover:opacity-90">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
