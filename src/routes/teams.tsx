import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, Twitter, Github } from "lucide-react";
import { Container } from "@/components/site/container";
import { FadeIn } from "@/components/site/section";

export const Route = createFileRoute("/teams")({
  head: () => ({
    meta: [
      { title: "Teams — DrukOptix AI" },
      { name: "description", content: "Meet the people driving DrukOptix AI forward — engineers, researchers, designers, and clinicians." },
      { property: "og:title", content: "Teams — DrukOptix AI" },
      { property: "og:description", content: "The people behind DrukOptix AI." },
    ],
  }),
  component: TeamsPage,
});

const members = [
  { name: "Tenzin Shoultrim", role: "Founder & CEO", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Karma Wangmo", role: "Head of AI Research", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Sonam Dorji", role: "Lead ML Engineer", img: "https://randomuser.me/api/portraits/men/76.jpg" },
  { name: "Pema Choden", role: "Product Designer", img: "https://randomuser.me/api/portraits/women/68.jpg" },
  { name: "Jigme Tshering", role: "Clinical Partnerships", img: "https://randomuser.me/api/portraits/men/45.jpg" },
  { name: "Dechen Yangzom", role: "Operations Manager", img: "https://randomuser.me/api/portraits/women/12.jpg" },
  { name: "Ugyen Rabten", role: "Software Engineer", img: "https://randomuser.me/api/portraits/men/22.jpg" },
  { name: "Tashi Lhamo", role: "Data Scientist", img: "https://randomuser.me/api/portraits/women/29.jpg" },
];

function TeamsPage() {
  return (
    <>
      <section className="py-20 md:py-28" style={{ background: "var(--gradient-hero)" }}>
        <Container className="text-center">
          <FadeIn>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Our People</span>
            <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Meet the team</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
              A focused group of engineers, researchers, designers, and clinicians driving DrukOptix AI forward.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {members.map((m, i) => (
              <FadeIn key={m.name} delay={i * 0.05}>
                <div className="group rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-card)] transition-smooth hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]">
                  <div className="relative mx-auto h-24 w-24">
                    <div className="absolute inset-0 rounded-full opacity-50 blur-md transition-smooth group-hover:opacity-80" style={{ background: "var(--gradient-primary)" }} aria-hidden />
                    <img src={m.img} alt={m.name} loading="lazy" className="relative h-24 w-24 rounded-full object-cover ring-2 ring-border" />
                  </div>
                  <h3 className="mt-4 font-semibold">{m.name}</h3>
                  <p className="text-sm text-muted-foreground">{m.role}</p>
                  <div className="mt-4 flex justify-center gap-2 text-muted-foreground">
                    <a href="#" aria-label="LinkedIn" className="rounded-md p-1.5 hover:bg-secondary hover:text-primary transition-smooth"><Linkedin className="h-4 w-4" /></a>
                    <a href="#" aria-label="Twitter" className="rounded-md p-1.5 hover:bg-secondary hover:text-primary transition-smooth"><Twitter className="h-4 w-4" /></a>
                    <a href="#" aria-label="GitHub" className="rounded-md p-1.5 hover:bg-secondary hover:text-primary transition-smooth"><Github className="h-4 w-4" /></a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
