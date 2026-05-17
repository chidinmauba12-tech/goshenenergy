import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-muted/40">
      <div className="container-page py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2 max-w-sm">
          <img src={logo} alt="Goshen Energy" className="h-12 w-auto" />
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Powering Nigeria. Powering possibilities. Reliable, affordable solar
            energy for homes, businesses, schools and offices across the country.
          </p>
          <form
            className="mt-6 flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const email = data.get("email");
              alert(`Thanks! We'll keep ${email} posted.`);
              (e.currentTarget as HTMLFormElement).reset();
            }}
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Your email"
              className="flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
            <button className="rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition">
              Subscribe
            </button>
          </form>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Explore</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Home</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/products" className="hover:text-foreground">Products</Link></li>
            <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Reach us</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2.5"><Phone className="size-4 mt-0.5 text-primary" /><a href="tel:09110110459" className="hover:text-foreground">0911 011 0459</a></li>
            <li className="flex items-start gap-2.5"><Mail className="size-4 mt-0.5 text-primary" /><a href="mailto:goshenenergysolar@gmail.com" className="hover:text-foreground break-all">goshenenergysolar@gmail.com</a></li>
            <li className="flex items-start gap-2.5"><MapPin className="size-4 mt-0.5 text-primary" />Nigeria — nationwide service</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-page py-5 text-xs text-muted-foreground flex flex-col md:flex-row gap-2 items-center justify-between">
          <p>© {new Date().getFullYear()} Goshen Energy. All rights reserved.</p>
          <p>Powering Nigeria. Powering Possibilities.</p>
        </div>
      </div>
    </footer>
  );
}
