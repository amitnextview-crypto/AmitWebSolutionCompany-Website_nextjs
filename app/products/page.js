import { ProductCard } from "../../components/Cards";
import SectionHeader from "../../components/SectionHeader";
import { products } from "../../lib/siteContent";

export const metadata = {
  title: "Products",
  description:
    "Explore NVAPlayer TV, NVAPlayer PC CMS, AWS Payroll, AWSHRFlow, Android Controller and MitPix Aura Studio from Amit Web Solution.",
};

export default function Products() {
  return (
    <main className="page-shell">
      <section className="luxury-hero border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="eyebrow">Products / Solutions</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Premium software products for signage, payroll, HR and business operations.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Product cards keep descriptions short while highlighting the features and technology areas that matter most to business buyers.
          </p>
        </div>
      </section>

      <section className="section-pad section-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Product Showcase" title="Products and platforms" />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
