import { company, processSteps, stats } from "../../lib/siteContent";

export const metadata = {
  title: "About",
  description:
    "Learn about the founder-led approach behind Amit Web Solution and how web, APK and business software projects are delivered.",
};

export default function About() {
  return (
    <main className="page-shell">
      <section className="mx-auto max-w-7xl px-4 pb-12 pt-36 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <span className="eyebrow">About the founder</span>
            <h1 className="section-title mt-6 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              A solo builder creating premium websites and practical software with serious ownership.
            </h1>
            <p className="muted mt-6 max-w-3xl text-lg leading-8">
              You said it clearly: the projects are built by you alone. This page positions that as
              a strength. The client gets direct access to the person doing the thinking, design and
              delivery, which keeps cost low and accountability high.
            </p>
          </div>

          <div className="glass-card-strong rounded-[2rem] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-200">
              Founder profile
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white">Amit Maddheshiya</h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-200">
              <p>Full-stack web developer focused on business-first delivery.</p>
              <p>Works across websites, dashboards, signage platforms, payroll tools and hybrid products.</p>
              <p>Direct communication, faster revision cycles and India-friendly pricing.</p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {stats.map((item) => (
                <div key={item.label} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                  <p className="text-xl font-bold text-white">{item.value}</p>
                  <p className="muted mt-1 text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Business-first delivery",
              text: "The project is planned around trust, conversion, clarity and operational value instead of decorative design only.",
            },
            {
              title: "Affordable by structure",
              text: "Pricing stays practical because there is no layered agency overhead. The same person handles strategy and execution.",
            },
            {
              title: "Built for long-term use",
              text: "From SEO pages to device dashboards, the focus stays on systems that businesses can actually use and extend.",
            },
          ].map((item) => (
            <article key={item.title} className="glass-card rounded-[2rem] p-8">
              <h2 className="text-2xl font-semibold text-white">{item.title}</h2>
              <p className="muted mt-4 text-sm leading-7">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <article key={step.step} className="glass-card rounded-[2rem] p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-200">
                Step {index + 1}
              </p>
              <h2 className="mt-3 text-xl font-semibold text-white">{step.step}</h2>
              <p className="muted mt-3 text-sm leading-7">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 pt-4 sm:px-6 lg:px-8">
        <div className="glass-card-strong rounded-[2rem] p-8 sm:p-10">
          <span className="eyebrow">Work together</span>
          <h2 className="section-title mt-5 text-3xl font-bold text-white sm:text-4xl">
            If you want premium quality without agency confusion, this is the working style.
          </h2>
          <p className="muted mt-4 max-w-3xl text-base leading-8">
            A strong business website or software product does not need a huge team. It needs clear
            thinking, real implementation experience and direct responsibility from the builder.
          </p>
          <div className="mt-8 space-y-4 text-sm leading-7 text-slate-200">
            <p>Email: {company.email}</p>
            <p>Phone: {company.phone}</p>
            <p>Public GitHub proof available for signage application workflow.</p>
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={`${company.whatsapp}?text=Hi%20Amit%2C%20I%20want%20to%20work%20with%20you%20on%20a%20website%20or%20software%20project`}
              className="rounded-full bg-primary px-7 py-4 text-center text-base font-semibold text-slate-950"
            >
              Message on WhatsApp
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
