import { company, featuredProjects } from "../../lib/siteContent";

export const metadata = {
  title: "Projects",
  description:
    "Browse real project highlights including signage systems, license workflows, payroll and payslip tools, Android-ready products and business dashboards.",
};

export default function Work() {
  return (
    <main className="page-shell">
      <section className="mx-auto max-w-7xl px-4 pb-12 pt-36 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <span className="eyebrow">Project highlights</span>
          <h1 className="section-title mt-6 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Real project experience built around operational business needs, not just showcase visuals.
          </h1>
          <p className="muted mt-6 max-w-3xl text-lg leading-8">
            This page combines public proof from the verified signage repository with the real
            systems you listed, including payroll, payslip, signage web, license key and controller
            style tools.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 xl:grid-cols-2">
          {featuredProjects.map((project) => (
            <article key={project.title} className="glass-card rounded-[2rem] overflow-hidden">
              <div
                className="h-56 bg-cover bg-center sm:h-64"
                style={{ backgroundImage: `linear-gradient(180deg, rgba(2,6,23,0.16), rgba(2,6,23,0.5)), url(${project.image})` }}
              />
              <div className="p-8">
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

                <h2 className="mt-5 text-3xl font-semibold text-white">{project.title}</h2>
                <p className="muted mt-4 text-sm leading-7">{project.description}</p>

                <div className="mt-6 grid gap-3">
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
                    className="mt-7 inline-flex rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-amber-300/30 hover:text-amber-100"
                  >
                    {project.proofLabel}
                  </a>
                ) : (
                  <p className="mt-7 text-sm font-semibold text-amber-100">{project.proofLabel}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="glass-card-strong rounded-[2rem] p-8 sm:p-10">
          <span className="eyebrow">Public repository proof</span>
          <h2 className="section-title mt-5 text-3xl font-bold text-white sm:text-4xl">
            Verified from GitHub: signage application with CMS, activation and device management
          </h2>
          <p className="muted mt-4 max-w-3xl text-base leading-8">
            I verified the repository you shared and used it as the strongest public proof source.
            It clearly includes activation, device registration, CMS, admin users and Android-ready
            dependencies for a real signage product.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={company.githubProof}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-primary px-7 py-4 text-center text-base font-semibold text-slate-950"
            >
              Open Verified Repository
            </a>
            <a
              href={`${company.whatsapp}?text=Hi%20Amit%2C%20I%20saw%20your%20project%20proof%20and%20want%20something%20similar`}
              className="rounded-full border border-white/10 px-7 py-4 text-center text-base font-semibold text-white"
            >
              Build Something Similar
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
