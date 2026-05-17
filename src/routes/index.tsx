import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sun, Zap, ShieldCheck, BatteryCharging, Home as HomeIcon, Building2, GraduationCap, Quote, Check } from "lucide-react";
import heroImg from "@/assets/hero-home.jpg";
import productSystem from "@/assets/product-system.jpg";
import { Eyebrow, SectionHeader } from "@/components/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Goshen Energy — Reliable Solar Power for Nigerian Homes & Businesses" },
      { name: "description", content: "Say goodbye to blackout frustration. Goshen Energy installs solar panels, inverters and batteries for Nigerian homes, businesses, schools and offices." },
      { property: "og:title", content: "Goshen Energy — Reliable Solar Power for Nigeria" },
      { property: "og:description", content: "Clean, dependable solar energy that ends blackouts and cuts fuel costs." },
    ],
  }),
  component: HomePage,
});

const benefits = [
  { icon: Zap, title: "End blackouts", desc: "Stable, 24/7 power so your home and business never go dark again." },
  { icon: ShieldCheck, title: "Cut fuel costs", desc: "Stop pouring money into petrol and diesel generators every month." },
  { icon: Sun, title: "Clean & quiet", desc: "Silent, smoke-free energy from the most reliable source in Nigeria — the sun." },
  { icon: BatteryCharging, title: "Power that lasts", desc: "Smart battery storage keeps the lights on, even after sundown." },
];

const services = [
  { icon: HomeIcon, title: "Homes & Families", desc: "Cool nights, working appliances, peace of mind for your family." },
  { icon: Building2, title: "Businesses & Offices", desc: "Keep operations running. No downtime, no diesel surprises." },
  { icon: GraduationCap, title: "Schools & Churches", desc: "Bright classrooms and powered halls without the noise of a generator." },
];

const testimonials = [
  { quote: "Since Goshen Energy installed our system, we haven't bought fuel in 4 months. Our shop now runs all day.", name: "Mrs. Adeola", role: "Salon Owner, Lagos" },
  { quote: "The team was professional and fast. My kids can finally study at night without holding torches.", name: "Mr. Ibrahim", role: "Homeowner, Abuja" },
  { quote: "Our church now powers the entire Sunday service on solar. It changed everything for us.", name: "Pastor Chuks", role: "Church Leader, Enugu" },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero-glow">
        <div className="container-page pt-10 pb-20 md:pt-16 md:pb-28 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <Eyebrow>Powering Nigeria</Eyebrow>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] text-foreground">
              Say goodbye to{" "}
              <span className="text-gradient-sun">blackout frustration.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Goshen Energy installs reliable solar systems for homes, businesses,
              schools and offices across Nigeria — stable power, lower bills, and
              no more generator stress.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-glow hover:opacity-95 transition"
              >
                Get Solar Today <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 backdrop-blur px-6 py-3.5 text-base font-semibold text-foreground hover:bg-background transition"
              >
                Explore products
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {[
                { k: "24/7", v: "Reliable power" },
                { k: "70%+", v: "Less fuel cost" },
                { k: "0", v: "Generator noise" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="text-2xl md:text-3xl font-semibold text-foreground">{s.k}</div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up">
            <div className="absolute -top-10 -right-10 size-48 rounded-full bg-sun/60 blur-3xl animate-sun-pulse" aria-hidden />
            <div className="relative rounded-3xl overflow-hidden shadow-card border border-border">
              <img
                src={heroImg}
                alt="Nigerian family home powered by solar panels at sunset"
                className="w-full h-[420px] md:h-[520px] object-cover"
                width={1920}
                height={1080}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden sm:block rounded-2xl bg-background border border-border shadow-card p-4 max-w-[240px]">
              <div className="flex items-center gap-2 text-sm font-semibold"><Sun className="size-4 text-primary" /> Solar active</div>
              <p className="mt-1 text-xs text-muted-foreground">Powering home in real time — no fuel, no noise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="container-page py-20 md:py-28">
        <SectionHeader
          eyebrow="Why solar"
          title="A simple switch with life-changing results."
          description="Tired of NEPA stories, fuel queues and generator noise? Solar is the dependable alternative thousands of Nigerians are switching to."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b) => (
            <div key={b.title} className="group rounded-2xl border border-border bg-card p-6 hover:shadow-card transition">
              <div className="inline-flex size-11 items-center justify-center rounded-xl bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                <b.icon className="size-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-muted/40 border-y border-border">
        <div className="container-page py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-3xl overflow-hidden border border-border shadow-card">
            <img src={productSystem} alt="Complete solar system installation" className="w-full h-[420px] object-cover" loading="lazy" width={1024} height={1024} />
          </div>
          <div>
            <SectionHeader
              eyebrow="What we do"
              title="Solar solutions built for the way Nigerians live and work."
              description="From a single panel to a complete off-grid system, we design, supply and install everything you need to take control of your power."
            />
            <ul className="mt-8 space-y-4">
              {services.map((s) => (
                <li key={s.title} className="flex gap-4 p-4 rounded-2xl bg-background border border-border">
                  <div className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                    <s.icon className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{s.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link to="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
                See all products <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="container-page py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12">
          <SectionHeader
            eyebrow="Why Goshen Energy"
            title="Trusted partners in your switch to clean, reliable power."
            description="We don't just sell solar — we deliver peace of mind, with quality equipment, honest pricing and installations that actually last."
          />
          <ul className="grid sm:grid-cols-2 gap-4 self-center">
            {[
              "Genuine, tier-1 panels & batteries",
              "Free home & business assessment",
              "Transparent, no-surprise pricing",
              "Professional certified installers",
              "Friendly after-sales support",
              "Built for Nigerian conditions",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 rounded-xl border border-border p-4 bg-card">
                <span className="inline-flex size-6 items-center justify-center rounded-full bg-primary text-primary-foreground shrink-0"><Check className="size-3.5" /></span>
                <span className="text-sm font-medium">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-muted/40 border-y border-border">
        <div className="container-page py-20 md:py-28">
          <SectionHeader center eyebrow="Stories from Nigerians" title="Real homes. Real businesses. Real power." />
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-2xl border border-border bg-background p-6 shadow-card">
                <Quote className="size-6 text-primary" />
                <blockquote className="mt-4 text-base leading-relaxed text-foreground">"{t.quote}"</blockquote>
                <figcaption className="mt-5 text-sm">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-20 md:py-28">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-foreground text-background px-6 py-14 md:p-16">
          <div className="absolute -top-24 -right-24 size-80 rounded-full bg-primary/40 blur-3xl" aria-hidden />
          <div className="absolute -bottom-24 -left-24 size-80 rounded-full bg-sun/30 blur-3xl" aria-hidden />
          <div className="relative grid lg:grid-cols-[1.3fr_1fr] gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-semibold leading-tight">Ready for power you can finally count on?</h2>
              <p className="mt-4 text-base md:text-lg text-background/75 max-w-xl">
                Tell us what you need to power — your home, shop, office or church.
                We'll design the right solar system and send you a free quote.
              </p>
            </div>
            <form
              className="flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                const f = new FormData(e.currentTarget);
                const email = f.get("email");
                window.location.href = `mailto:goshenenergysolar@gmail.com?subject=Solar enquiry&body=Hi Goshen Energy, my email is ${email}. Please send me a quote.`;
              }}
            >
              <input
                type="email"
                name="email"
                required
                placeholder="goshenenergysolar@gmail.com"
                className="flex-1 rounded-full bg-background/10 border border-background/20 px-5 py-3.5 text-sm text-background placeholder:text-background/50 outline-none focus:bg-background/15"
              />
              <button className="rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-95 transition">
                Get my quote
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
