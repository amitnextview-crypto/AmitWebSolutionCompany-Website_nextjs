import SectionHeader from "../../components/SectionHeader";
import { aboutCards, company } from "../../lib/siteContent";

export const metadata = {
  title: "About",
  description:
    "About Amit Web Solution, a software company building websites, mobile apps, business software, payroll systems, digital signage platforms and automation solutions.",
};

export default function About() {
  return (
    <main className="page-shell">
      <section className="luxury-hero border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="eyebrow">About Amit Web Solution</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            About Amit Web Solution
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Amit Web Solution develops websites, mobile applications, business software, payroll systems, digital signage platforms and custom automation solutions for organizations seeking reliable technology products.
          </p>
        </div>
      </section>

      <section className="section-pad section-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Focus" title="Technology products for practical business needs" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {aboutCards.map((card) => (
              <article key={card.title} className="card p-6">
                <h2 className="text-xl font-semibold text-slate-950">{card.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{card.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 card p-6">
            <p className="text-sm font-semibold text-slate-950">{company.name}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Built for companies that need reliable software products, modern presentation and clear communication.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
