import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import { Eyebrow } from "@/components/Section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Goshen Energy — Get a Free Solar Quote in Nigeria" },
      { name: "description", content: "Talk to Goshen Energy on WhatsApp, phone or email and get a free solar quote for your home, business, school or office in Nigeria." },
      { property: "og:title", content: "Contact Goshen Energy" },
      { property: "og:description", content: "Get a free solar quote today." },
    ],
  }),
  component: ContactPage,
});

const cards = [
  { icon: Phone, label: "Call us", value: "0911 011 0459", href: "tel:09110110459" },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat instantly", href: "https://wa.me/09110110459" },
  { icon: Mail, label: "Email", value: "goshenenergysolar@gmail.com", href: "mailto:goshenenergysolar@gmail.com" },
  { icon: MapPin, label: "Service area", value: "Nationwide, Nigeria" },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Solar enquiry from ${f.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${f.get("name")}\nPhone: ${f.get("phone")}\nEmail: ${f.get("email")}\nLocation: ${f.get("location")}\n\nMessage:\n${f.get("message")}`
    );
    window.location.href = `mailto:goshenenergysolar@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <>
      <section className="bg-hero-glow">
        <div className="container-page pt-12 md:pt-20 pb-12 text-center">
          <Eyebrow>Let's talk</Eyebrow>
          <h1 className="mt-5 text-4xl md:text-6xl font-semibold leading-[1.05] max-w-3xl mx-auto">
            Get reliable power, <span className="text-gradient-sun">starting today.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
            Tell us what you need to power and we'll get back to you with a free,
            no-pressure quote within 24 hours.
          </p>
        </div>
      </section>

      <section className="container-page py-12 md:py-16 grid lg:grid-cols-[1.1fr_1fr] gap-8">
        <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-6 md:p-10 shadow-card">
          <h2 className="text-2xl font-semibold">Send us a message</h2>
          <p className="mt-1 text-sm text-muted-foreground">We typically reply within a few hours.</p>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <Field label="Full name" name="name" placeholder="Your name" required />
            <Field label="Phone" name="phone" placeholder="0800 000 0000" required type="tel" />
            <Field label="Email" name="email" placeholder="you@email.com" required type="email" />
            <Field label="Location" name="location" placeholder="City / State" />
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium">What do you need to power?</label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="E.g. 3-bedroom home — fridge, fans, TV, lights, decoder…"
              className="mt-1.5 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <button className="mt-6 w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-95 shadow-glow">
            {sent ? "Opening your email…" : "Send my enquiry"}
          </button>
        </form>

        <div className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            {cards.map((c) => {
              const inner = (
                <div className="h-full rounded-2xl border border-border bg-card p-5 hover:shadow-card transition">
                  <div className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary"><c.icon className="size-5" /></div>
                  <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.label}</div>
                  <div className="mt-1 font-semibold break-all">{c.value}</div>
                </div>
              );
              return c.href ? (
                <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{inner}</a>
              ) : (
                <div key={c.label}>{inner}</div>
              );
            })}
          </div>

          <a
            href="https://wa.me/09110110459"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl bg-[#25D366] text-white p-6 hover:opacity-95 transition"
          >
            <div className="flex items-center gap-3">
              <MessageCircle className="size-6" />
              <div>
                <div className="text-sm uppercase tracking-wider opacity-80">Quickest response</div>
                <div className="font-semibold text-lg">Message us on WhatsApp</div>
              </div>
            </div>
          </a>

          <div className="rounded-2xl border border-border bg-muted/40 p-6 flex items-start gap-3">
            <Clock className="size-5 text-primary mt-0.5" />
            <div>
              <div className="font-semibold">Quick response promise</div>
              <p className="text-sm text-muted-foreground mt-1">Most enquiries get a reply within a few hours during business days.</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-border h-56 bg-muted relative">
            <iframe
              title="Service area — Nigeria"
              src="https://www.openstreetmap.org/export/embed.html?bbox=2.6%2C4.0%2C14.7%2C13.9&layer=mapnik"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, placeholder, type = "text", required }: { label: string; name: string; placeholder?: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-full border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
