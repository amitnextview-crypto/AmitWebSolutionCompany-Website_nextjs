import "./globals.css";
import Navbar from "../components/Navbar";
import { company } from "../lib/siteContent";

export const metadata = {
  metadataBase: new URL("https://amitwebsolution.example"),
  title: {
    default: `${company.shortName} | Web, APK and Business Software`,
    template: `%s | ${company.shortName}`,
  },
  description: company.description,
  keywords: [
    "website development company india",
    "next.js developer india",
    "signage software developer",
    "payroll system developer",
    "payslip software developer",
    "apk development service",
    "seo website company",
  ],
  openGraph: {
    title: `${company.shortName} | Web, APK and Business Software`,
    description: company.description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.shortName} | Web, APK and Business Software`,
    description: company.description,
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: company.name,
    description: company.description,
    areaServed: "India",
    email: company.email,
    telephone: company.phone,
    url: "https://amitwebsolution.example",
    sameAs: [company.githubProof, company.whatsapp],
    serviceType: [
      "Business websites",
      "Custom web applications",
      "Digital signage software",
      "Payroll and payslip systems",
      "APK-ready product development",
      "Technical SEO",
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="mBt9pJk7MgShnY53Su_xOzZQXQBuunHWQ_VgWeEs_ZE"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
