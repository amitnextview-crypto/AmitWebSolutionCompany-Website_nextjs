import Link from "next/link";
import { ProductCard, ServiceCard } from "../components/Cards";
import SectionHeader from "../components/SectionHeader";
import { products, services, testimonials, whyChooseUs } from "../lib/siteContent";

export default function Home() {
  return (
    <main className="page-shell">
      <section className="luxury-hero border-b border-slate-200">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div className="animate-rise self-center">
            <p className="eyebrow">Premium Software Company</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Custom Software Development & Business Automation Solutions
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              We build websites, mobile applications, enterprise software, digital signage systems and custom business solutions for modern organizations.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/#products" className="btn-primary">
                View Products
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="hero-panel animate-float p-5 sm:p-7">
            <div className="code-visual" aria-label="Software development visual">
              <div className="code-bar" />
              <div className="code-window">
                <div className="window-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <pre>{`const solution = build({
  website: "premium",
  apps: ["android", "business"],
  systems: ["payroll", "signage"],
  automation: true
});`}</pre>
              </div>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {["Websites", "Mobile Apps", "Payroll", "Signage"].map((item) => (
                <div key={item} className="metric-tile rounded-lg border border-slate-200 bg-white/90 p-4">
                  <p className="text-sm font-semibold text-slate-950">{item}</p>
                  <p className="mt-2 text-sm text-slate-600">Business-grade delivery.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad animate-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Services Overview"
            title="Focused services for modern organizations"
            description="Clean engineering, practical workflows and professional interfaces across the services companies need most."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="section-pad section-muted product-showcase animate-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              eyebrow="Featured Products"
              title="Professional software products and solutions"
              description="Premium product cards with concise feature sets for fast business evaluation."
            />
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.name} product={product} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Why Choose Us" title="Reliable delivery without unnecessary noise" align="center" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => (
              <article key={item.title} className="card p-6">
                <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad section-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Customer Feedback"
            title="What clients value in our work"
            description="Clear communication, useful product thinking and professional delivery across websites, HR systems and signage platforms."
            align="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="testimonial-card reveal-card p-6">
                <p className="text-sm font-bold text-amber-500">5.0 / 5 Feedback</p>
                <p className="mt-5 text-sm leading-7 text-slate-700">"{item.quote}"</p>
                <div className="mt-6 border-t border-slate-200 pt-5">
                  <p className="font-semibold text-slate-950">{item.name}</p>
                  <p className="mt-1 text-sm text-slate-500">{item.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
