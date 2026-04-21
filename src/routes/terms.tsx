import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/site/container";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Terms of Service — DrukOptix" }, { name: "description", content: "DrukOptix terms of service." }] }),
  component: () => (
    <Container className="prose prose-slate max-w-3xl py-16">
      <h1 className="text-4xl font-bold">Terms of Service</h1>
      <p className="mt-4 text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
      <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
        <p>Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
      </div>
    </Container>
  ),
});
