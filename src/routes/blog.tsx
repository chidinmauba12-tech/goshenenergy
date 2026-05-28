import { createFileRoute } from "@tanstack/react-router";
import { Clock } from "lucide-react";
import { Eyebrow, SectionHeader } from "@/components/Section";
import { sanityClient } from "@/lib/sanity";

export const Route = createFileRoute("/blog")({
  loader: async () => {
    const posts = await sanityClient.fetch<SanityPost[]>(`
      *[_type == "post"] | order(coalesce(publishedAt, _createdAt) desc) {
        _id,
        title,
        "tag": coalesce(category->title, "Insights"),
        "excerpt": coalesce(excerpt, pt::text(body)[0...180]),
        "read": coalesce(readTime, "5 min read"),
        "date": coalesce(publishedAt, _createdAt)
      }
    `);

    return posts;
  },
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

type SanityPost = {
  _id: string;
  title: string;
  tag: string;
  excerpt: string;
  read: string;
  date: string;
};

function formatBlogDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(new Date(date));
}

function BlogPage() {
  const posts = Route.useLoaderData();

  if (posts.length === 0) {
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
        <section className="container-page py-16 text-center text-muted-foreground">
          No posts yet. New articles from Sanity will appear here automatically.
        </section>
      </>
    );
  }

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
              <span>{formatBlogDate(feature.date)}</span>
              <span className="inline-flex items-center gap-1"><Clock className="size-3.5" />{feature.read}</span>
            </div>
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
                  <span>{formatBlogDate(p.date)}</span>
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
