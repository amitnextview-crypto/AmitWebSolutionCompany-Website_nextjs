import Link from "next/link";
import { company, products } from "../lib/siteContent";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/#products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="brand-mark flex h-11 w-11 items-center justify-center rounded-lg text-sm font-bold text-white">
              AWS
            </span>
            <p className="text-lg font-semibold text-white">{company.name}</p>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
            Websites, mobile apps, payroll systems, HR solutions, digital signage products and custom business automation for modern organizations.
          </p>
          <div className="mt-6 grid gap-2 text-sm text-slate-300">
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <a href={`tel:${company.phone.replace(/\s/g, "")}`}>{company.phone}</a>
            <a href={company.mapsUrl} target="_blank" rel="noreferrer">Open Google Maps</a>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">Pages</h2>
          <div className="mt-5 grid gap-3 text-sm text-slate-300">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">Solutions</h2>
          <div className="mt-5 grid gap-3 text-sm text-slate-300">
            {products.slice(0, 4).map((product) => (
              <Link key={product.name} href="/#products" className="hover:text-white">
                {product.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-400">
        &copy; {new Date().getFullYear()} {company.name}. Professional software development and business automation.
      </div>
    </footer>
  );
}
