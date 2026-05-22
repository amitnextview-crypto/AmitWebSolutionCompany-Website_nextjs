import ContactForm from "../../components/ContactForm";
import { company } from "../../lib/siteContent";

export const metadata = {
  title: "Contact",
  description:
    "Contact Amit Web Solution for websites, mobile apps, payroll systems, HR software, digital signage and business automation solutions.",
};

export default function Contact() {
  return (
    <main className="page-shell">
      <section className="luxury-hero border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Start a website, software or automation project.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Share your requirement and Amit Web Solution will help define a practical scope for your business.
          </p>
        </div>
      </section>

      <section className="section-pad section-muted">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <ContactForm />

          <aside className="grid gap-6">
            <div className="card p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Contact Information</h2>
              <div className="mt-6 grid gap-4 text-sm text-slate-600">
                <p><span className="font-semibold text-slate-950">Company Name:</span> {company.name}</p>
                <p><span className="font-semibold text-slate-950">Email:</span> {company.email}</p>
                <p><span className="font-semibold text-slate-950">Phone:</span> {company.phone}</p>
                <p><span className="font-semibold text-slate-950">Location:</span> {company.location}</p>
              </div>
              <a href={`${company.whatsapp}?text=Hi%20Amit%2C%20I%20want%20to%20discuss%20a%20project`} className="btn-secondary mt-6">
                Contact on WhatsApp
              </a>
            </div>

            <div className="map-card overflow-hidden">
              <iframe
                title="Amit Web Solution Google Maps location"
                src={company.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full border-0"
              />
              <div className="border-t border-slate-200 bg-white p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.1em] text-blue-700">Google Maps</p>
                <p className="mt-2 text-sm text-slate-600">Visit Amit Web Solution on Google Maps.</p>
                <a href={company.mapsUrl} target="_blank" rel="noreferrer" className="btn-secondary mt-4">
                  Open Map
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
