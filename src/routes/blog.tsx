import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock } from "lucide-react";
import { Eyebrow, SectionHeader } from "@/components/Section";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Solar Energy Tips & Insights for Nigerians | Goshen Energy" },
      { name: "description", content: "Solar education, energy-saving tips, generator alternatives and renewable energy news for Nigerian homes and businesses." },
      { property: "og:title", content: "Goshen Energy Blog" },
      { property: "og:description", content: "Learn how solar can change life and business in Nigeria." },
    ],
  }),
  component: BlogPage,
});

const posts = [
  {
    tag: "Education",
    title: "How solar actually works — a simple guide for Nigerian homes",
    excerpt: "Forget the jargon. Here's the plain-English explanation of how solar panels, inverters and batteries work together to power your home.",
    read: "6 min read",
    date: "May 10, 2026",
  },
  {
    tag: "Save money",
    title: "Solar vs. generator: how much you really save in 12 months",
    excerpt: "We break down the real numbers — fuel, servicing, noise and stress — and what a solar system gives back instead.",
    read: "5 min read",
    date: "May 04, 2026",
  },
  {
    tag: "Tips",
    title: "5 energy-saving habits every Nigerian household should know",
    excerpt: "Small changes that lower your bill, extend your battery life and make your solar system go even further.",
    read: "4 min read",
    date: "Apr 22, 2026",
  },
  {
    tag: "Business",
    title: "Why more SMEs in Nigeria are switching to solar in 2026",
    excerpt: "From salons to schools, business owners are tired of fuel costs. Here's how solar is changing the game.",
    read: "7 min read",
    date: "Apr 15, 2026",
  },
  {
    tag: "Renewables",
    title: "The future of renewable energy in Nigeria — what to expect",
    excerpt: "Where the market is heading, what's getting cheaper, and how Nigerians can benefit from the clean energy shift.",
    read: "8 min read",
    date: "Apr 02, 2026",
  },
  {
    tag: "Buying guide",
    title: "Inverter sizing 101: pick the right system the first time",
    excerpt: "A step-by-step guide to figuring out the right inverter and battery capacity for your home or office.",
    read: "6 min read",
    date: "Mar 24, 2026",
  },
];

function BlogPage() {
  const [feature, ...rest] = posts;
  return (
    <>
      <section className="bg-hero-glow">
        <div className="container-page pt-12 md:pt-20 pb-12 text-center">
          <Eyebrow>Insights</Eyebrow>
          <h1 className="mt-5 text-4xl md:text-6xl font-semibold leading-[1.05] max-w-3xl mx-auto">
            Smarter energy, <span className="text-gradient-sun">simply explained.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
            Solar education, saving tips and Nigerian energy insights — written
            for real people, not engineers.
          </p>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <article className="rounded-3xl border border-border bg-card p-6 md:p-10 grid md:grid-cols-2 gap-8 items-center shadow-card">
          <div className="aspect-[4/3] md:aspect-auto md:h-full rounded-2xl bg-gradient-to-br from-sun via-primary to-ember" />
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary">{feature.tag}</span>
            <h2 className="mt-3 text-2xl md:text-4xl font-semibold leading-tight">{feature.title}</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{feature.excerpt}</p>
            <div className="mt-5 flex items-center gap-4 text-sm text-muted-foreground">
              <span>{feature.date}</span>
              <span className="inline-flex items-center gap-1"><Clock className="size-3.5" />{feature.read}</span>
            </div>
            <Link to="/blog" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
              Read article <ArrowRight className="size-4" />
            </Link>
          </div>
        </article>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-card transition">
              <div className="aspect-[16/10] bg-gradient-to-br from-sun/60 via-primary/60 to-ember/60" />
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">{p.tag}</span>
                <h3 className="mt-2 text-lg font-semibold leading-snug group-hover:text-primary transition">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{p.date}</span>
                  <span className="inline-flex items-center gap-1"><Clock className="size-3" />{p.read}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-page pb-20">
        <SectionHeader center eyebrow="Stay in the loop" title="Get monthly solar tips in your inbox." />
        <form
          className="mt-8 max-w-md mx-auto flex gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            const f = new FormData(e.currentTarget);
            alert(`Subscribed: ${f.get("email")}`);
            (e.currentTarget as HTMLFormElement).reset();
          }}
        >
          <input type="email" name="email" required placeholder="you@email.com" className="flex-1 rounded-full border border-border bg-background px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-ring" />
          <button className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-95">Subscribe</button>
        </form>
      </section>
    </>
  );
}
