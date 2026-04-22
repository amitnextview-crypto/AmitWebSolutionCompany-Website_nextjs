import Link from "next/link";
import {
  company,
  faqItems,
  featuredProjects,
  pricingPlans,
  processSteps,
  serviceGroups,
  stats,
} from "../lib/siteContent";

export default function Home() {
  return (
    <main className="page-shell">
      <div className="hero-orb one" />
      <div className="hero-orb two" />

      <section className="mx-auto max-w-7xl px-4 pb-16 pt-36 sm:px-6 lg:px-8 lg:pt-40">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <span className="eyebrow">Websites, web apps, signage systems and APK delivery</span>
            <h1 className="section-title mt-6 max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">
              Big-company style websites and business software for brands that want to look serious.
            </h1>
            <p className="muted mt-6 max-w-2xl text-lg leading-8 text-balance">
              {company.shortName} builds premium websites, payroll and payslip tools, signage web
              systems, license key workflows, Android-ready products and SEO-focused company pages
              that help businesses look stronger online.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={`${company.whatsapp}?text=Hi%20Amit%2C%20I%20want%20a%20premium%20website%20or%20software%20project`}
                className="rounded-full bg-primary px-7 py-4 text-center text-base font-semibold text-slate-950 transition hover:brightness-110"
              >
                Start Your Project
              </a>
              <Link
                href="/work"
                className="cta-border rounded-full px-7 py-4 text-center text-base font-semibold text-white"
              >
                View Real Projects
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label} className="glass-card rounded-3xl p-5">
                  <p className="text-2xl font-bold text-white">{item.value}</p>
                  <p className="muted mt-1 text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card-strong rounded-[2rem] p-6 sm:p-8">
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-amber-200/80">
                Why this website feels stronger
              </p>
              <div className="mt-6 space-y-5">
                {[
                  "Premium structure with clear service positioning",
                  "Real project proof instead of generic portfolio copy",
                  "Founder-led affordable pricing for Indian businesses",
                  "SEO-ready content and high-trust company messaging",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15 text-sm text-emerald-300">
                      +
                    </span>
                    <p className="muted text-sm leading-7">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-amber-300/20 bg-amber-400/10 p-6">
              <p className="text-sm font-semibold text-amber-200">Verified public proof</p>
              <h2 className="mt-2 text-2xl font-bold text-white">Signage Player CMS and activation platform</h2>
              <p className="muted mt-3 text-sm leading-7">
                Your public GitHub repository shows device onboarding, activation flow, admin
                dashboard, CMS management and Android-ready dependencies in one real system.
              </p>
              <a
                href={company.githubProof}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex rounded-full border border-amber-300/30 px-5 py-3 text-sm font-semibold text-amber-100 transition hover:bg-amber-300/10"
              >
                Open GitHub Proof
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="eyebrow">Services</span>
            <h2 className="section-title mt-5 text-3xl font-bold text-white sm:text-5xl">
              Everything needed to present your business like a serious software company
            </h2>
          </div>
          <p className="muted max-w-2xl text-base leading-8">
            From premium websites to internal business tools, the focus is not only design. The
            product, copy, hierarchy, proof and SEO structure all work together.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceGroups.map((service) => (
            <article key={service.title} className="glass-card rounded-[1.75rem] p-7">
              <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
              <p className="muted mt-3 text-sm leading-7">{service.description}</p>
              <div className="mt-5 space-y-3">
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
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="eyebrow">Proof-led projects</span>
            <h2 className="section-title mt-5 text-3xl font-bold text-white sm:text-5xl">
              Real delivery experience, not placeholder portfolio cards
            </h2>
          </div>
          <Link href="/work" className="text-sm font-semibold text-amber-200">
            Explore all project highlights
          </Link>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-2">
          {featuredProjects.slice(0, 4).map((project) => (
            <article key={project.title} className="glass-card rounded-[2rem] p-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full border border-amber-300/25 bg-amber-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-100">
                  {project.type}
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-white">{project.title}</h3>
              <p className="muted mt-3 text-sm leading-7">{project.description}</p>
              <div className="mt-5 grid gap-3">
                {project.outcomes.map((outcome) => (
                  <p key={outcome} className="text-sm text-slate-200">
                    {outcome}
                  </p>
                ))}
              </div>
              {project.proofUrl ? (
                <a
                  href={project.proofUrl}
                  target={project.proofUrl.startsWith("http") ? "_blank" : undefined}
                  rel={project.proofUrl.startsWith("http") ? "noreferrer" : undefined}
                  className="mt-6 inline-flex rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-amber-300/30 hover:text-amber-100"
                >
                  {project.proofLabel}
                </a>
              ) : (
                <p className="mt-6 text-sm font-semibold text-amber-100">{project.proofLabel}</p>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="glass-card-strong rounded-[2rem] p-8">
            <span className="eyebrow">Process</span>
            <h2 className="section-title mt-5 text-3xl font-bold text-white sm:text-4xl">
              Simple process, direct communication and founder ownership
            </h2>
            <p className="muted mt-4 text-base leading-8">
              You are not pushed between sales, design and development teams. The product moves
              faster because one accountable builder handles strategy, design and implementation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {processSteps.map((step, index) => (
              <article key={step.step} className="glass-card rounded-[1.75rem] p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-200">
                  Step {index + 1}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white">{step.step}</h3>
                <p className="muted mt-3 text-sm leading-7">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="eyebrow">Pricing</span>
            <h2 className="section-title mt-5 text-3xl font-bold text-white sm:text-5xl">
              Affordable founder-led pricing built for Indian businesses
            </h2>
          </div>
          <p className="muted max-w-2xl text-base leading-8">
            The pricing is intentionally kept practical because the work is delivered directly by
            one builder. Final quotation still depends on features, integrations and delivery scope.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-[2rem] p-8 ${
                plan.featured ? "glass-card-strong" : "glass-card"
              }`}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-200">
                {plan.name}
              </p>
              <h3 className="mt-4 text-4xl font-black text-white">{plan.price}</h3>
              <p className="muted mt-4 text-sm leading-7">{plan.description}</p>
              <div className="mt-6 space-y-3">
                {plan.points.map((point) => (
                  <p key={point} className="text-sm text-slate-200">
                    {point}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <div className="glass-card rounded-[2rem] p-8">
            <span className="eyebrow">FAQ</span>
            <h2 className="section-title mt-5 text-3xl font-bold text-white sm:text-4xl">
              Common questions before starting
            </h2>
            <div className="mt-8 space-y-5">
              {faqItems.map((item) => (
                <article key={item.question} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                  <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                  <p className="muted mt-2 text-sm leading-7">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>

          <div id="contact" className="glass-card-strong rounded-[2rem] p-8">
            <span className="eyebrow">Contact</span>
            <h2 className="section-title mt-5 text-3xl font-bold text-white sm:text-4xl">
              Need a big-company website, a real business system or a web plus APK build?
            </h2>
            <p className="muted mt-4 text-base leading-8">
              Share your idea, industry and feature list. You will get direct guidance on the best
              structure, practical scope and affordable starting point.
            </p>

            <div className="mt-8 space-y-4 text-sm text-slate-200">
              <p>Email: {company.email}</p>
              <p>Phone: {company.phone}</p>
              <p>Public proof: GitHub signage application repository</p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={`${company.whatsapp}?text=Hi%20Amit%2C%20I%20want%20to%20discuss%20my%20website%20or%20software%20project`}
                className="rounded-full bg-primary px-7 py-4 text-center text-base font-semibold text-slate-950"
              >
                Chat on WhatsApp
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
        </div>
      </section>
    </main>
  );
}
