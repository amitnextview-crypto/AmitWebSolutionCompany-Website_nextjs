import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { company, products, services } from "../lib/siteContent";

export const metadata = {
  metadataBase: new URL("https://amitwebsolution.com"),
  title: {
    default: `${company.name} | Custom Software Development & Business Automation`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  keywords: [
    "custom software development",
    "website development company",
    "mobile app development",
    "payroll software",
    "HRMS software",
    "digital signage software",
    "business automation solutions",
    "Android TV signage",
  ],
  openGraph: {
    title: `${company.name} | Custom Software Development & Business Automation`,
    description: company.description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | Custom Software Development & Business Automation`,
    description: company.description,
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    description: company.description,
    email: company.email,
    telephone: company.phone,
    areaServed: company.location,
    knowsAbout: services.map((service) => service.title),
    makesOffer: products.map((product) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "SoftwareApplication",
        name: product.name,
        applicationCategory: product.category,
        description: product.description,
      },
    })),
  };

  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="mBt9pJk7MgShnY53Su_xOzZQXQBuunHWQ_VgWeEs_ZE" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
