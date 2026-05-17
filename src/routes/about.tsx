import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Target, Eye, Sparkles } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import { Eyebrow, SectionHeader } from "@/components/Section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Goshen Energy — Our Mission to End Blackouts in Nigeria" },
      { name: "description", content: "Goshen Energy was born to put more solar panels on Nigerian rooftops and free homes and businesses from blackouts and rising fuel costs." },
      { property: "og:title", content: "About Goshen Energy" },
      { property: "og:description", content: "Reliable, affordable solar energy for everyday Nigerians." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Heart, title: "Human-centered", desc: "Every system we install is built around the real lives of the people using it." },
  { icon: Sparkles, title: "Quality first", desc: "We only use trusted, durable equipment that performs in Nigerian conditions." },
  { icon: Target, title: "Honest pricing", desc: "Clear quotes, no hidden fees, and solutions that match your real needs." },
  { icon: Eye, title: "Long-term partnership", desc: "We're here after the install too — support that grows with your energy needs." },
];

function AboutPage() {
  return (
    <>
      <section className="bg-hero-glow">
        <div className="container-page pt-12 md:pt-20 pb-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow>Our story</Eyebrow>
            <h1 className="mt-5 text-4xl md:text-6xl font-semibold leading-[1.05]">
              Bringing <span className="text-gradient-sun">light</span> where there used to be darkness.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              Goshen Energy is born out of the desire to see more solar panels on
              the roofs of homes in Nigeria — where people and businesses no
              longer have to stay in darkness due to the country's inability to
              adequately provide electricity for its citizens.
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-xl">
              It was also driven by the need to help people save more and cut
              costs amid rising electricity bills and fuel prices. We remain
              certain that, in time, with our solutions, Nigerians will achieve
              greater energy independence and a more sustainable way of living.
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden border border-border shadow-card">
            <img src={aboutHero} alt="Solar panels installed on a rooftop at sunset" className="w-full h-[460px] object-cover" width={1536} height={1024} />
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-28 grid md:grid-cols-2 gap-8">
        <div className="rounded-3xl bg-foreground text-background p-8 md:p-10">
          <Target className="size-7 text-primary" />
          <h2 className="mt-5 text-2xl md:text-3xl font-semibold">Our mission</h2>
          <p className="mt-4 text-background/80 leading-relaxed">
            At Goshen Energy, our mission is to provide reliable, affordable, and
            sustainable solar energy solutions that help Nigerians break free
            from the frustration of unstable electricity. We are committed to
            powering homes, businesses, and the nation with clean energy that
            reduces dependence on generators, lowers electricity and fuel costs,
            and brings comfort and peace of mind to the everyday Nigerian's life.
          </p>
        </div>
        <div className="rounded-3xl bg-secondary text-secondary-foreground p-8 md:p-10">
          <Eye className="size-7 text-primary" />
          <h2 className="mt-5 text-2xl md:text-3xl font-semibold">Our vision</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our vision is to see a Nigeria where darkness caused by poor
            electricity supply becomes a thing of the past. We envision thousands
            of homes and businesses across the country powered by clean,
            dependable solar energy — creating a future where people can live,
            work, and grow without the constant burden of blackouts and
            expensive fuel.
          </p>
        </div>
      </section>

      <section className="bg-muted/40 border-y border-border">
        <div className="container-page py-20 md:py-28">
          <SectionHeader center eyebrow="What we stand for" title="The values that power everything we do." />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-background p-6">
                <div className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><v.icon className="size-5" /></div>
                <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-28 text-center">
        <SectionHeader center eyebrow="Join us" title="Be part of Nigeria's clean energy future." description="Whether you're powering a home, a shop, or a school — we're ready to design the right solar solution for you." />
        <div className="mt-8 flex justify-center gap-3 flex-wrap">
          <Link to="/contact" className="rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-95">Get Solar Today</Link>
          <Link to="/products" className="rounded-full border border-border px-6 py-3.5 text-sm font-semibold hover:bg-muted">See products</Link>
        </div>
      </section>
    </>
  );
}
