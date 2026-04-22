import { company, pricingPlans, serviceGroups } from "../../lib/siteContent";

export const metadata = {
  title: "Services",
  description:
    "Explore website development, custom dashboards, signage software, payroll tools, APK-ready solutions and SEO services from Amit Web Solution.",
};

export default function Services() {
  return (
    <main className="page-shell">
      <section className="mx-auto max-w-7xl px-4 pb-12 pt-36 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <span className="eyebrow">Services and capabilities</span>
          <h1 className="section-title mt-6 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Premium design language, real business thinking and implementation that goes beyond a simple website.
          </h1>
          <p className="muted mt-6 max-w-3xl text-lg leading-8">
            The goal is to help your business look organised, trustworthy and technically strong.
            That can mean a company website, a product showcase, an internal dashboard or a
            complete web plus APK workflow.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceGroups.map((service) => (
            <article key={service.title} className="glass-card rounded-[2rem] p-8">
              <h2 className="text-2xl font-semibold text-white">{service.title}</h2>
              <p className="muted mt-4 text-sm leading-7">{service.description}</p>
              <div className="mt-6 space-y-3">
                {service.items.map((item) => (
                  <p key={item} className="text-sm text-slate-200">
                    {item}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-card-strong rounded-[2rem] p-8">
            <span className="eyebrow">Included value</span>
            <h2 className="section-title mt-5 text-3xl font-bold text-white sm:text-4xl">
              What makes the delivery feel company-grade
            </h2>
            <div className="mt-7 space-y-4">
              {[
                "Clear page hierarchy and stronger service messaging",
                "Technical SEO setup and cleaner metadata foundation",
                "Direct founder communication with faster decision making",
                "Affordable execution compared to multi-layer agency models",
              ].map((point) => (
                <p key={point} className="text-sm leading-7 text-slate-200">
                  {point}
                </p>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <article
                key={plan.name}
                className={`rounded-[2rem] p-7 ${
                  plan.featured ? "glass-card-strong" : "glass-card"
                }`}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">
                  {plan.name}
                </p>
                <h3 className="mt-4 text-3xl font-black text-white">{plan.price}</h3>
                <p className="muted mt-4 text-sm leading-7">{plan.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 pt-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-[2rem] p-8 sm:p-10">
          <span className="eyebrow">Start now</span>
          <h2 className="section-title mt-5 text-3xl font-bold text-white sm:text-4xl">
            Tell me the service you need and I will map the best structure for it.
          </h2>
          <p className="muted mt-4 max-w-3xl text-base leading-8">
            Whether you need a redesign, a company website, a signage platform, a payroll system or
            a hybrid product, we can shape the right scope and pricing around the business need.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={`${company.whatsapp}?text=Hi%20Amit%2C%20I%20need%20help%20with%20a%20website%20or%20software%20service`}
              className="rounded-full bg-primary px-7 py-4 text-center text-base font-semibold text-slate-950"
            >
              Discuss on WhatsApp
            </a>
            <a
              href={company.githubProof}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 px-7 py-4 text-center text-base font-semibold text-white"
            >
              View Public Proof
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
