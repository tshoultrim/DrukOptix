import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import { Container } from "@/components/site/container";
import { FadeIn } from "@/components/site/section";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  company: z.string().trim().max(100).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Please write at least 10 characters").max(2000),
});

type FormValues = z.infer<typeof schema>;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — DrukOptix" },
      { name: "description", content: "Get in touch with the DrukOptix sales team." },
      { property: "og:title", content: "Contact — DrukOptix" },
      { property: "og:description", content: "Get in touch with the DrukOptix sales team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", company: "", message: "" },
  });

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true);
    const { error } = await supabase.from("contact_submissions").insert({
      name: values.name,
      email: values.email,
      company: values.company || null,
      message: values.message,
    });
    setSubmitting(false);

    if (error) {
      toast.error("Could not send message. Please try again.");
      return;
    }
    toast.success("Thanks! We'll be in touch shortly.");
    form.reset();
  };

  return (
    <section className="py-20 md:py-28" style={{ background: "var(--gradient-hero)" }}>
      <Container className="grid gap-12 lg:grid-cols-2">
        <FadeIn>
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Contact</span>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Let's talk</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Whether you're an independent practice or a hospital network, we'd love to hear about
            your goals.
          </p>
          <div className="mt-8 space-y-4 text-sm">
            <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-primary" /> sales@drukoptix.ai</div>
            <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-primary" /> +975 17 000 000</div>
            <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-primary" /> Thimphu, Bhutan</div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8"
            noValidate
          >
            <div className="grid gap-4">
              <Field label="Name" error={form.formState.errors.name?.message}>
                <input {...form.register("name")} className="input" placeholder="Jane Doe" maxLength={100} />
              </Field>
              <Field label="Email" error={form.formState.errors.email?.message}>
                <input type="email" {...form.register("email")} className="input" placeholder="jane@clinic.com" maxLength={255} />
              </Field>
              <Field label="Company (optional)" error={form.formState.errors.company?.message}>
                <input {...form.register("company")} className="input" placeholder="Acme Vision Care" maxLength={100} />
              </Field>
              <Field label="Message" error={form.formState.errors.message?.message}>
                <textarea {...form.register("message")} rows={5} className="input resize-none" placeholder="Tell us a bit about what you're looking for…" maxLength={2000} />
              </Field>
              <button
                type="submit"
                disabled={submitting}
                className="mt-2 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-smooth hover:bg-primary-hover disabled:opacity-60"
              >
                {submitting ? "Sending…" : "Send message"}
              </button>
            </div>
          </form>
        </FadeIn>
      </Container>

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.625rem;
          border: 1px solid var(--color-border);
          background: var(--color-background);
          padding: 0.625rem 0.875rem;
          font-size: 0.875rem;
          transition: all 0.2s;
          outline: none;
        }
        .input:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-primary) 18%, transparent);
        }
      `}</style>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
