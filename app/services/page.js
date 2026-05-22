import { ServiceCard } from "../../components/Cards";
import SectionHeader from "../../components/SectionHeader";
import { services } from "../../lib/siteContent";

export const metadata = {
  title: "Services",
  description:
    "Website development, mobile app development, enterprise software, digital signage and custom software development services from Amit Web Solution.",
};

export default function Services() {
  return (
    <main className="page-shell">
      <section className="luxury-hero border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="eyebrow">Services</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Software services built for clarity, speed and long-term business use.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            From corporate websites to enterprise systems, every service is presented with a clean scope and a professional delivery mindset.
          </p>
        </div>
      </section>

      <section className="section-pad section-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Capabilities"
            title="Professional service areas"
            description="Concise service cards make it easy for business clients to understand what Amit Web Solution can deliver."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.slice(0, 5).map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
