import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import panel from "@/assets/product-panel.jpg";
import inverter from "@/assets/product-inverter.jpg";
import battery from "@/assets/product-battery.jpg";
import system from "@/assets/product-system.jpg";
import { Eyebrow, SectionHeader } from "@/components/Section";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Solar Products — Panels, Inverters, Batteries & Systems | Goshen Energy" },
      { name: "description", content: "Browse Goshen Energy's range of solar panels, inverters, batteries and complete solar systems for homes and businesses in Nigeria." },
      { property: "og:title", content: "Goshen Energy Solar Products" },
      { property: "og:description", content: "Quality solar panels, inverters, batteries and complete systems." },
    ],
  }),
  component: ProductsPage,
});

const products = [
  {
    img: panel,
    title: "Solar Panels",
    desc: "High-efficiency tier-1 monocrystalline panels built to harness Nigerian sunlight all day long.",
    features: ["Mono PERC technology", "25-year power warranty", "Built for heat & humidity", "Sizes: 200W – 550W"],
    price: "From ₦ on request",
  },
  {
    img: inverter,
    title: "Inverters",
    desc: "Pure sine-wave inverters that protect your appliances and switch power seamlessly.",
    features: ["1kVA – 15kVA options", "Smart hybrid models", "Silent operation", "Built-in surge protection"],
    price: "From ₦ on request",
  },
  {
    img: battery,
    title: "Batteries",
    desc: "Long-life lithium and tubular batteries — strong storage for nights and cloudy days.",
    features: ["Lithium & gel options", "Deep cycle, long life", "Maintenance-free", "Scalable capacity"],
    price: "From ₦ on request",
  },
  {
    img: system,
    title: "Complete Solar Systems",
    desc: "Turn-key installations designed around your real power needs — panels, inverter, battery, install.",
    features: ["Free site assessment", "Custom system design", "Professional installation", "After-sales support"],
    price: "Custom quote",
  },
];

function ProductsPage() {
  return (
    <>
      <section className="bg-hero-glow">
        <div className="container-page pt-12 md:pt-20 pb-12 text-center">
          <Eyebrow>Our products</Eyebrow>
          <h1 className="mt-5 text-4xl md:text-6xl font-semibold leading-[1.05] max-w-3xl mx-auto">
            Everything you need to <span className="text-gradient-sun">power up.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
            Quality solar equipment, hand-picked for Nigerian conditions, backed
            by warranty and installed by a team you can trust.
          </p>
        </div>
      </section>

      <section className="container-page py-16 md:py-20 grid md:grid-cols-2 gap-6 lg:gap-8">
        {products.map((p) => (
          <article key={p.title} className="group rounded-3xl border border-border bg-card overflow-hidden hover:shadow-card transition flex flex-col">
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-500" loading="lazy" width={1024} height={1024} />
            </div>
            <div className="p-6 md:p-7 flex-1 flex flex-col">
              <h3 className="text-xl md:text-2xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-muted-foreground">
                    <span className="mt-1.5 size-1.5 rounded-full bg-primary shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-border flex items-center justify-between gap-4">
                <span className="text-sm font-semibold">{p.price}</span>
                <Link to="/contact" className="inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-4 py-2 text-sm font-semibold hover:bg-foreground/90 transition">
                  Inquire <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="container-page pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-primary to-[oklch(0.66_0.2_38)] p-8 md:p-14 text-primary-foreground">
          <SectionHeader
            eyebrow="Not sure what you need?"
            title="Tell us what to power — we'll design the rest."
            description="Free assessment, honest recommendation, transparent quote."
          />
          <div className="mt-8">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3.5 text-sm font-semibold hover:bg-background/90">
              Request a free quote <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
